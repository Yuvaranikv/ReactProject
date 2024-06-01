import React, { useState } from 'react';

import './SignUpForm.css'

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        gender: '',
        country: '',
        likesPineapple: false,
        likesLiquorice: false,
    });

    const [textareaValue, setTextareaValue] = useState('');
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setTextareaValue(JSON.stringify(formData, null, 2));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>SignUpForm Exercise</h1>
                <input name='firstName' placeholder='First Name' value={formData.firstName} onChange={handleChange} />
                <input name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} />
                <input name='email' placeholder='Email' value={formData.email} type="email" onChange={handleChange} />
                <input name='dob' placeholder='Date of Birth' type="date" value={formData.dob} onChange={handleChange} />

                <br />

                <label>
                    <input type='radio' name='gender' value='male' checked={formData.gender === 'male'} onChange={handleChange} />
                    Male
                </label>

                <label>
                    <input type='radio' name='gender' value='female' checked={formData.gender === 'female'} onChange={handleChange} />
                    Female
                </label>

                <br />

                <select name='country' value={formData.country} onChange={handleChange}>
                    <option value=''>Select Country</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='MO'>Mexico</option>
                </select>

                <br />

                <label>
                    <input type='checkbox' name='likesPineapple' checked={formData.likesPineapple} onChange={handleChange} />
                    Likes Pineapple
                </label>

                <label>
                    <input type='checkbox' name='likesLiquorice' checked={formData.likesLiquorice} onChange={handleChange} />
                    Likes Liquorice
                </label>

                <br />

                <button type='submit'>Submit</button>
                <br/>
               
                <textarea id="txtDisplayValues" placeholder='To display values' readOnly value={textareaValue} rows="10" cols="50"></textarea>
            
            </form>
        </div>
    );
}
