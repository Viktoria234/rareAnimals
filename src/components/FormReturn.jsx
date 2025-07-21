import React from "react";

const FormReturn = ({inputValues, handleForm, coords, handleChangeCoords, removeCoords, addNewInput}) => {
     
return(
    <>
        <input type="text" 
            name="name" 
            value={inputValues.name} 
            placeholder="Название" 
            onChange={handleForm}
            required/>
        <input type="text" 
            value={inputValues.lat} 
            name="lat"
            placeholder="Название на латинском" 
            onChange={handleForm}
            required/>
            <label for="category">Выберите категорию опасности:</label>
            <select name="category" value={inputValues.category} onChange={handleForm} required>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <label for="category">Выберите тип живого организма:</label>
            <select name="type" value={inputValues.type} onChange={handleForm} required>
                            <option value='AmphibiaReptilia'>Земноводное/пресмыкающееся</option>
                            <option value='Fishes'>Рыба/Круглоротое</option>
                            <option value='Birds'>Птица</option>
                            <option value='Mammals'>Млекопитающее</option>
            </select>
            <input type="text" 
                name="image" 
                value={inputValues.image} 
                placeholder="Вставте Url изображение" 
                onChange={handleForm}
                required/>
            <div className="coords">
                <label>Координаты ареала обитания:</label>
                {coords.map((coord, index) => (
                    <div key={index} className="coords-container">
                        <input
                            type="number"
                            step='any'
                            placeholder="Широта"
                            value={coord.lat}
                            onChange={(e) => handleChangeCoords(index, 'lat', e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            step='any'
                            placeholder="Долгота"
                            value={coord.long}
                            onChange={(e) => handleChangeCoords(index, 'long', e.target.value)}
                            required
                        />
                        {coords.length !== 1 && (
                            <button className="coords-button" onClick={() => removeCoords(index)}>Удалить</button>
                            )}
                    </div>
                ))}
                <button className="coords-button add" onClick={addNewInput}>Добавить точку +</button>
            </div>
            <button type="submit">Подтвердить</button>
        </>
    )
}

export default FormReturn;