export default function ConstellationDetails(props) {
    return (
        <>
            <h3>Name: {props.constellation.name}</h3>
            <p>English name: {props.constellation.englishName}</p>
            <p>Picture: {props.constellation.imageURL}</p>
            <p>Hemisphere: {props.constellation.hemisphere}</p>

            <button onClick={props.handleShowFormClick}>Edit</button>
        </> 
    )
}