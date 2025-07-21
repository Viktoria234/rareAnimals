import React, {useState} from "react";

export const useForm = (initialState) => {
    const [inputValues, setInputValues] = useState(initialState)

    const handleForm = (e) => {
        const {name, value} = e.target
        setInputValues((prev) => ({
            ...prev, 
            [name]: value
        }))
    }

    return{
       inputValues,
       handleForm,
       setInputValues 
    }

}