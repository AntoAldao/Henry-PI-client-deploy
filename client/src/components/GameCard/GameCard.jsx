import { Link } from "react-router-dom";
import style from "./GameCard.module.css";
const GameCard = (props) => {
    return (
        <div className={style.card}> 
            <Link to={`/videogame/${props.id}`}>
                <button className={style.name}><h1>{props.name}</h1></button>
            </Link>
             <div >
                <h3> Genres</h3>
                <ul className={style.list}>
                    {props.genres?.map((genre, index) => {
                        return <li key={index}>{genre}</li>
                    })}
                </ul>
                <img src={props.image} alt={props.name} className = {style.image}/>
            </div> 
        </div>  
    )
};

export default GameCard;