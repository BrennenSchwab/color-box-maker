import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewBoxForm ({ newBox }){
    const [formData, setFormData] = useState({
        width: "",
        height: "",
        backgroundColor: ""
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        newBox({...formData, id: uuid() });
        setFormData({ width: "", height: "", backgroundColor: "" });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="height"
                        value={formData.height}
                        id="height"
                    />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="height"
                        value={formData.width}
                        id="width"
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="backgroundColor"
                        value={formData.backgroundColor}
                        id="backgroundColor"
                    />
                </div>
                <button id="newBoxBtn">New Box</button>
            </form>
        </div>
    );
}

export default NewBoxForm;