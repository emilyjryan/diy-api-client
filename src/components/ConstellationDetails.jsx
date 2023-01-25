export default function ConstellationDetails(props) {
    return (
        <>
            <h3>Name: {props.constellation.name}</h3>
            <p>English name: {props.constellation.englishName}</p>
            <p>Picture:</p>
            <img src={props.constellation.imageURL} alt={props.constellation.name} />
            <p>Hemisphere: {props.constellation.hemisphere}</p>

            <button onClick={props.handleShowFormClick}>Edit</button>
        </> 
    )
}