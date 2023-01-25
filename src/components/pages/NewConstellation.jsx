import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function NewConstellation() {
    // state that holds the values that the user has typed
    const [form, setForm] = useState({
        // initialize all of the values as empty strings
        name: '',
        englishName: '',
        imageURL: '',
        hemisphere: '',
    })

    // invoke the useVanigate hook to get a navigate funciton to use
    const navigate = useNavigate()

    // submit handler function that posts the form data from state to the backend
    const handleSubmit = e => {
        e.preventDefault()
        // take the form data from the state, post it to the backend with axios
        // axios.post(url to make a request to,{ request body }. { options })
        axios.post(`${process.env.REACT_APP_SERVER_URL}/constellations`, form)
            .then(response => {
                console.log(response.data)
                // once the backend gets back to use, navigate to the / route to see all constellations
                navigate('/') // clicking a link for the user
            })
            .catch(console.warn)
    }
// name: String
// englishName: String
// imageURL: String
// hemisphere: String

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Latin Name:</label>
                    <input 
                        type='text'
                        id='name'
                        placeholder='Latin name...'
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                    />

                    <label htmlFor='englishName'>English Name:</label>
                    <input 
                        type='text'
                        id='englishName'
                        placeholder='English name...'
                        value={form.englishName}
                        onChange={e => setForm({ ...form, englishName: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='imageURL'>imageURL:</label>
                    <input 
                        type='text'
                        id='imageURL'
                        placeholder='imageURL...'
                        value={form.imageURL}
                        onChange={e => setForm({ ...form, imageURL: e.target.value })}
                    />
                    
                    <label htmlFor='hemisphere'>hemisphere:</label>
                    <input 
                        type='text'
                        id='hemisphere'
                        placeholder='hemisphere...'
                        value={form.hemisphere}
                        onChange={e => setForm({ ...form, hemisphere: e.target.value })}
                    />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}