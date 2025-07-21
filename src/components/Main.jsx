import React, {useContext, useState, Suspense} from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { useChange } from "../hooks/useChange";
import Form from "./Form";
import Loader from "./Loader";
import '../styles/Main.css'

const Species = React.lazy(() => import("./Species"))

const Main = () => {
    const {value, handleChange} = useChange('')
    const {type, data, setType} = useContext(DataContext)
    const navigate = useNavigate();
    const handleShowDesc = (id) => {
        navigate(`/animals/${id}`);
    }

    const handleEdit = (id) => {
        navigate(`/animals/${id}/edit`);
    }

    const filteredData = data.filter((d) => d.name.toLowerCase().includes(value.toLowerCase()))
    

    return(
        <div className="main">
            <h1>Вымирающие виды</h1>
            {type ? (
                <>
                <div className="head-container">
                    <button onClick={() =>  setType('')}>&#9668; Назад</button>
                    <input type="text" onChange={handleChange} placeholder="Поиск.." />
                </div>
                <Suspense fallback={<Loader/>}>
                    <Species filteredData={filteredData} handleShowDesc={handleShowDesc} handleEdit={handleEdit}/>
                </Suspense>
                </>
                
            ) : (
                <div className="buttons">
                    <button onClick={() => setType('AmphibiaReptilia')}>Земноводные и пресмыкающиеся</button>
                    <button onClick={() => setType('Fishes')}>Рыбы и Круглоротые</button>
                    <button onClick={() => setType('Birds')}>Птицы</button>
                    <button onClick={() => setType('Mammals')}>Млекопитающие</button>
                </div>
                
            )}  
        </div>
        
    )
}

export default Main;