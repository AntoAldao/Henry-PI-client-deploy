import GameCard from "../components/GameCard/GameCard";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../redux/actions/index";
import ButtonCreate from "../components/NavBar/ButtonCreate";


const Home = () => {
    const dispatch = useDispatch(); 
    const videogames = useSelector((state) => state.videogames);
    useEffect(() => {
        dispatch(getVideogames());
    }, [])
    return (
        <div>
            <h1>Home</h1>
            <ButtonCreate />
            {videogames?.map((game, index) => {
                return(
                    <GameCard
                        name={game.name}
                        image={game.image}
                        genres={game.genres}
                        id={game.id}
                        key={index}
                    />
                )

            })}
        </div>
    );
}

export default Home;