import GameCard from "../../components/GameCard/GameCard";
import React, { useEffect } from "react";
import ButtonCreate from "../../components/NavBar/ButtonCreate";
import { useState } from "react";
import style from "./Home.module.css"
import { useSelector } from "react-redux";
import FilterByCreatedOrApi from "../../components/NavBar/FilterByCreated";
import FilterByGenre from "../../components/NavBar/FilterByGenre";
import { useDispatch } from "react-redux";
import {setVideogames, setPage } from "../../redux/actions/index";


const Home = () => {
    const pages = []
    const videogames = useSelector((state) => state.videogames);
    const page = useSelector((state) => state.page);
    const FilteredByCreatedOrApi = useSelector((state) => state.FilteredByCreatedOrApi);

    //PAGES
    for(let i = 1; i <= Math.ceil(videogames.length/15); i++){
        pages.push(i)
    }
    
    const dispatch = useDispatch();
    
    //PAGINATION
    const handlePage = (e) => {
        dispatch(setPage(e.target.innerHTML))
       
    }

    //GET GAMES
    useEffect(() => {
        dispatch(setVideogames());
    }, [])
    useEffect(() => {
        dispatch(setVideogames());
    }, [FilteredByCreatedOrApi])


    return (
        <div>
            <h1>Home</h1>
            <ButtonCreate />
            {pages?.map((page, index) => {
                return <button key={index} onClick = {handlePage}>{page}</button>
            })}
            <FilterByCreatedOrApi />
            <FilterByGenre />
            <div className={style.card}>
                
                {videogames?.slice((page-1)*15, page*15).map((game, index) => {
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
        </div>
    );
}

export default Home;