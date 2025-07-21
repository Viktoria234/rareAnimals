import React, {useContext} from "react";
import { DataContext } from "../context/DataContext";
import Loader from "./Loader";
import { db } from "../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

const Species = ({filteredData, handleShowDesc, handleEdit}) => {
    const {isLoading, deleteAnimal} = useContext(DataContext)

    const handleDelete = async(id) => {
        try{
            await deleteDoc(doc(db, 'spieces', id))
            deleteAnimal(id)

        } catch(error){
            console.error('Произошла ошибка ', error)
        }
    }

    return(
        <>
        {isLoading ? (
            <>
                <Loader/>
            </>
        ) : (
           <div className="species">
                {filteredData.map((d) => (
                    <div className="specie" key={d.id}>
                        <img alt={d.name} src={d.image}/>
                        <div className="text">
                            <p>{d.name}</p>
                            <p>Категория опасности вида: {d.category}</p>
                            <div className="func-buttons">
                                <button className="default" onClick={() => handleShowDesc(d.id)}>Подробнее</button>
                                <button className="delete" onClick={() => handleDelete(d.id)}>X</button>
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleEdit(d.id)} width="19" height="19" fill="currentColor" className="bi bi-pencil-square edit" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}          
            </div> 
        )}
        </>
        
        
    )
}

export default Species;

