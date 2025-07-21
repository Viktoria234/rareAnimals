import React, { useState } from "react";

export const useCoords = () => {
    const [coords, setCoords] = useState([{lat: '', long: ''}])

    const handleChangeCoords = (i, latLong, value) => {
        const newCoords = [...coords]
        newCoords[i][latLong] = value
        setCoords(newCoords)
    }

    const addNewInput = () => {
        setCoords([...coords, {lat: '', long: ''}])
    }

    const removeCoords = (index) => {
        const newCoords = coords.filter((c, i) => i !== index)
        setCoords(newCoords)
    }

    return{
        coords,
        handleChangeCoords,
        addNewInput,
        removeCoords,
        setCoords
    }
} 