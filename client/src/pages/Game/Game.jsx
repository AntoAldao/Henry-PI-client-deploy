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
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch(`http://localhost:3001/api/videogames/${id}`)
        .then(response => response.json())
        .then(data => setGame(data))
        .then(() => setLoading(false))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3001/api/videogames/${id}`)
        .then(response => response.json())
        .then(data => setGame(data))
    }, [chages])
    
    return(
        <div className={style.generaldiv}>
            {loading? 
                <div className={style.divloading}></div> :
                <div className={style.cardDetail} style = {{height:`${loading? "100vh":"auto"}`}}> 
                 <Link to={`/home`}>
                    <button className={style.back}> back </button>
                </Link>   {/* link to the detail of the game */}
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
                <div>
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
                    { game.created?

                        <button onClick={handleEdit} className={style.created}>Edit</button>
                        
                        : null
                    }
                </div>

                }
                
               
            </div>  
        }
        </div>
        
    )
}
export default Game