
const GameDetails = (props) => {
    return (
    <div >
        <img src={props.image} alt={props.name} />
        <div dangerouslySetInnerHTML={{__html:props.description}}/> 
        <h2> Genres</h2>
        <ul>
            {props.genres?.map((genre, index) => {
                return(
                    <li key={index}>{genre}</li>
                )
            })}

        </ul>
        <h2> Platforms</h2>
        <ul>
            {props.platforms?.map((platform, index) => {
                return(
                    <li key={index}>{platform}</li>
                )
            })}
        </ul>
        <h2> Rating</h2>
        <p>{props.rating}</p>
        <h2> Released</h2>
        <p>{props.date}</p>
    </div>
    )
}

export default GameDetails;