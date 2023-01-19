import { Link } from "react-router-dom";
const GameCard = (props) => {
    return (
        <div> 
            <Link to={`/videogame/${props.id}`}>
                <button><h1>{props.name}</h1></button>
            </Link>
            {/* <div >
                <h2> Genres</h2>
                <h3>{props.genres}</h3>
                <img src={props.image} alt={props.name} />
            </div> */}
            {/* <Link to={`/videogame/${props.id}`}>More info</Link>    */}
            {/* link to the detail of the game */}
        </div>  
    )
};

export default GameCard;