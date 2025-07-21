import React, { useContext, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { doc, GeoPoint, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useCoords } from "../hooks/useCoords";
import { useForm } from "../hooks/useForm";
import FormReturn from "./FormReturn";

const EditForm = () => {
    const {inputValues, handleForm, setInputValues} = useForm({
                name: '',
                lat: '',
                category:'',
                type:'',
                image: ''
            })
    const {coords, handleChangeCoords, addNewInput, removeCoords, setCoords} = useCoords()
    const {id} = useParams()
    const {data, getData} = useContext(DataContext)
    const editData = data.find((d) => d.id == id)
    const navigator = useNavigate()

    useEffect(() => {
        if(editData){
            setInputValues({
                name: editData.name,
                lat: editData.lat,
                category: editData.category,
                type: editData.type,
                image: editData.image,
            })
        
        
            setCoords(
                editData.z?.map((d) => ({
                    lat: d.latitude,
                    long: d.longitude
                })) || [{
                    lat: '',
                    long: ''
                }]
            )
        }

    }, [editData, setInputValues, setCoords])

    if (editData == undefined){
        return <Navigate to='/animals' required/>
    }

    const handleEditData = async(e) => {
        e.preventDefault()

        const ref = doc(db, 'spieces', id);
        const geoPoints = coords.map(coord => new GeoPoint(parseFloat(coord.lat), parseFloat(coord.long)))

        await updateDoc(ref, {
            ...inputValues,
            z: geoPoints
        }) .then(() => {
            getData();
            navigator(-1)
        })

    }

    return(
        <div className="form-container">
            <h2>{editData.name}, редактировать:</h2>
            <div className="form-insides">
                <form onSubmit={handleEditData}>
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

export default EditForm;