import { Link } from "react-router-dom";
import style from "./GameCard.module.css";
import { useDispatch } from "react-redux";
import {getVideogames} from "../../redux/actions/index.js"
import axios from "axios";
const GameCard = (props) => {
    const dispatch = useDispatch();
    const deleteGame = () => {
        axios.delete(`http://localhost:3001/api/videogames/${props.id}`)
        .then(response => alert(response.data))
        dispatch(getVideogames())


    }
    return (
        <div className={style.card}> 
            <Link to={`/videogame/${props.id}`}>
                <button className={style.buttonname}>
                    <h1 className={style.name}>{props.name}</h1>
                </button>
            </Link>
             <div className={style.genres}>
                <h3> Genres</h3>
                <ul className={style.list}>
                    {props.genres?.map((genre, index) => {
                        return <li key={index}>{genre}</li>
                    })}
                </ul>
            </div>
            <div>
                <img src={props.image} alt={props.name} className = {style.image}/>
                
                {props.created?
                    <div>
                        <button onClick={deleteGame}>Delete</button>
                    </div> : null}
            </div> 
        </div>  
    )
};

export default GameCard;