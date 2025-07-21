import React, { useState } from "react";
import { addDoc, collection, GeoPoint } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useForm } from "../hooks/useForm";
import '../styles/Form.css'
import {useCoords} from '../hooks/useCoords'
import FormReturn from "./FormReturn";

const Form = () => {
    const {inputValues, handleForm, setInputValues} = useForm({
            name: '',
            lat: '',
            category:'',
            type:'',
            image: ''
        })
    const {coords, handleChangeCoords, addNewInput, removeCoords, setCoords} = useCoords()
    const handleAddNew = async(e) => {
        e.preventDefault();
        try{
            const geoPoints = coords.map(coord => new GeoPoint(parseFloat(coord.lat), parseFloat(coord.long)))
            const ref = await addDoc(collection(db, 'spieces'), {...inputValues, z: geoPoints})
            setInputValues({
                name: '',
                lat: '',
                category:'',
                type:'',
                image: ''
            }) 
            setCoords([{lat:'', long:''}])
            alert('Данные успешно добавлены')
            window.location.reload()

        } catch(error){
            console.error('Произошла ошибка ', error)
        }
        
    }

    return(
        <div className="form-container">
            <h2>Добавить новый вид</h2>
            <div className="form-insides">
                <form onSubmit={handleAddNew}>
                    <FormReturn inputValues={inputValues}
                        handleForm={handleForm} 
                        coords={coords} 
                        handleChangeCoords={handleChangeCoords} 
                        removeCoords={removeCoords} 
                        addNewInput={addNewInput}
                    />
                </form>
            </div>
        </div>
    )
}

export default Form;

