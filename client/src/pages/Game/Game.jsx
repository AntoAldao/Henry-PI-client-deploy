import {Link} from "react-router-dom"  // import the link to the detail of the game
import GameDetails from "../../components/GameDetails/GameDetails"
import { useParams } from "react-router-dom";
import {    useEffect } from "react";
import { useState } from "react";
import style from "./Game.module.css"
import EditGame from "../../components/EditGame/EditGame"


const Game = () => {
    const { id } = useParams();
    const [game, setGame] = useState({})
    
    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(!edit);
    }
    const [chages , setChages] = useState(false)
    const save = () => {
        setChages(!chages)
    }
    
    useEffect(() => {
        fetch(`http://localhost:3001/api/videogames/${id}`)
        .then(response => response.json())
        .then(data => setGame(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3001/api/videogames/${id}`)
        .then(response => response.json())
        .then(data => setGame(data))
    }, [chages])

    
    return(
        <div className={style.cardDetail}> 
            {edit ? 
            <EditGame
                name={game.name}
                image={game.image}
                description={game.description}
                genres={game.genres}
                platforms={game.platforms}
                rating={game.rating}
                date={game.date}
                id={game.id}
                created = {game.created}
                handleEdit={handleEdit}
                save={save}
            />
            : 
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
                handleEdit={handleEdit}
            />
            }
            
            <Link to={`/home`}>
                <button> back </button>
            </Link>   {/* link to the detail of the game */}
        </div>  
    )
}
export default Game