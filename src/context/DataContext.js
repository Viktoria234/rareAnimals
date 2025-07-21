import React, {useState, useEffect} from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, where,query } from "firebase/firestore";

export const DataContext = React.createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([])
    const [type, setType] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const getData = async() => {
        try{
            const response = query(collection(db, 'spieces'), where('type', '==', type ))
            const querySnapshot = await getDocs(response)
            const savedData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            await new Promise((resolve) => setTimeout(resolve, 1000));

            setData(savedData)

        } catch(error){
            console.log('Ошибка получения данных: ', error)
        } finally{
            setIsLoading(false)
        }
    }

    const deleteAnimal = (id) => {
        setData((prev) => prev.filter((d) => d.id !== id))
    }

    useEffect(() => {
        if (type){
            setIsLoading(true)
            getData();
        } else {
            setData([]);
        }
        
    }, [type])

    return(
        <DataContext.Provider value={{data, type, setType, isLoading, deleteAnimal, getData}}>
            {children}
        </DataContext.Provider>
    )


}