import {Link} from "react-router-dom"  // import the link to the detail of the game
import GameDetails from "../components/GameDetails/GameDetails"
import { useParams } from "react-router-dom";
import {    useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogameDetail } from "../../src/redux/actions/index";
import { useSelector } from "react-redux";

const Game = () => {
    const { id } = useParams();
    const dispatch = useDispatch(); 
    const game = useSelector((state) => state.videogameDetail);
    console.log(game)
    useEffect(() => {
        dispatch(getVideogameDetail(id));
    }, [])
    return(
        <div> 
            <h1>{game.name}</h1>
            <GameDetails
                name={game.name}
                image={game.image}
                description={game.description}
                genres={game.genres}
                platforms={game.platforms}
                rating={game.rating}
                date={game.date}
            />
            <Link to={`/home`}>
                <button> back </button>
            </Link>   {/* link to the detail of the game */}
        </div>  
    )
}
export default Game