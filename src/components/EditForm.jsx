import { useState } from 'react'
import axios from 'axios'

export default function EditForm(props) {
    // state that holds the values that the user has typed
    const [form, setForm] = useState({
        // initialize all of the values as empty strings
        name: props.constellation.name,
        wantedFor: props.constellation.englishName,
        client: props.constellation.imageURL,
        ship: props.constellation.hemisphere,
    })

    const handleSubmit = async  e => {
        e.preventDefault()
        try {
            // take the form data held in state, and put req to backed with
            // axios.put(url, { request body }, { options })4
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/constellations/${props.constellation._id}`, form)
            // if the update succces, get /bounties to update state in parent
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/constellations`)
            // update the page
            props.setConstellations(response.data)
            // close the form
            props.handleShowFormClick()
        } catch (err) {
            console.warn(err)
        }
    }

    const handleDeleteClick = async () => {
        try {
            // request the server delete the current constellation
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/constellations/${props.constellation._id}`)
            // if the update succces, get /constellations to update state in parent
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/constellations`)
            // update the page
            props.setConstellations(response.data)
            // close the form
            props.handleShowFormClick()
        } catch(err) {
            console.warn(err)
        }
    }
    return (
        <>  
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
                        <label htmlFor='imageURL'>Picture:</label>
                        <input 
                            type='text'
                            id='imageURL'
                            placeholder='image URL...'
                            value={form.imageURL}
                            onChange={e => setForm({ ...form, imageURL: e.target.value })}
                        />
                        
                        <label htmlFor='hemisphere'>Hemisphere:</label>
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

            <button onClick={props.handleShowFormClick}>Cancel</button>

            <button onClick={handleDeleteClick}>Delete</button>
        </>
    )
}