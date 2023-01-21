import {Link} from "react-router-dom"  // import the link to the detail of the game
import GameDetails from "../../components/GameDetails/GameDetails"
import { useParams } from "react-router-dom";
import {    useEffect } from "react";
import { useState } from "react";
import style from "./Game.module.css"


const Game = () => {
    const { id } = useParams();
    const [game, setGame] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3001/api/videogames/${id}`)
        .then(response => response.json())
        .then(data => setGame(data))
    }, [])
    
    return(
        <div className={style.cardDetail}> 
            <h1>{game.name}</h1>

            <GameDetails
                name={game.name}
                image={game.image}
                description={game.description}
                genres={game.genres}
                platforms={game.platforms}
                rating={game.rating}
                date={game.date}
                id={game.id}
                created = {game.created}
            />
            <Link to={`/home`}>
                <button> back </button>
            </Link>   {/* link to the detail of the game */}
        </div>  
    )
}
export default Game