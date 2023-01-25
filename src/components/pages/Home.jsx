import { useState, useEffect } from 'react'
import axios from 'axios'
import ConstellationDetails from '../ConstellationDetails'
import EditForm from '../EditForm'

export default function Home() {
    // store the details and list of all constellations in one state variable
    const [constellations, setConstellations] = useState([]) // array of all constellations
    const [detailId, setDetailId] = useState('') // id of the last clicked constellation
    const [showForm, setShowForm] = useState(false)

    // show all constellations when tha page first loads
    useEffect(() => {
        const fetchConstellations = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/constellations`)
                console.log(response.data)
                setConstellations(response.data)
            } catch(err) {
                console.warn(err)
            }
        }
        fetchConstellations()
    }, []) // empty dependancy array will run this use effect only once

    // show/hide form event handler
    const handleShowFormClick = () => setShowForm(!showForm)

    // map out our constellations, each will need a onClick that shows their details (set their id in state)
    const constellationComponents = constellations.map(constellation => {
        return (
            <div key={`constellation-${constellation._id}`}>
                <h3>{constellation.name}</h3>
                <p>{constellation.englishName}</p>
                <button
                    onClick={() => setDetailId(constellation._id)}
                >
                    Details
                </button>
            </div>
        )
    })

    // find the index of the constellation base on our id state, show its details, if constellation is not found conditionally render
    const detailConstellation = constellations.find(constellation => constellation._id === detailId)
    console.log(detailConstellation)

    const detailPane = detailConstellation ? <ConstellationDetails handleShowFormClick={handleShowFormClick} constellation={detailConstellation} /> : 'Click on a Constellation'
    const sidePane = showForm ? <EditForm setConstellations={setConstellations} handleShowFormClick={handleShowFormClick} constellation={detailConstellation} /> : detailPane

    return (
        <div style={{ display: 'flex' }}>   
            <div style={{ width: '50vw' }}>
                <h2>All Constellations</h2>
                {constellationComponents}
            </div>

            <div style={{ width: '50vw' }}>
                <h2>Details</h2>

                {sidePane}
            </div>
        </div>
    )
}