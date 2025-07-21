import React, {useState} from "react";

export const useChange = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    

    return{
        value,
        handleChange
    }
}

