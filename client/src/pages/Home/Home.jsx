import GameCard from "../../components/GameCard/GameCard";
import React, { useEffect } from "react";
import ButtonCreate from "../../components/NavBar/ButtonCreate";
import style from "./Home.module.css"
import { useSelector } from "react-redux";
import FilterByCreatedOrApi from "../../components/NavBar/FilterByCreated";
import FilterByGenre from "../../components/NavBar/FilterByGenre";
import { useDispatch } from "react-redux";
import {setVideogames, setPage } from "../../redux/actions/index";
import Order  from "../../components/NavBar/Order"
import Search from "../../components/NavBar/Search";
import pacman from "../../assets/pacman2.svg"


const Home = () => {
    const pages = []
    const allVideogames = useSelector((state) => state.allVideogames);
    const videogames = useSelector((state) => state.videogames);

    const page = useSelector((state) => state.page);
    const FilteredByCreatedOrApi = useSelector((state) => state.FilteredByCreatedOrApi);
    const FilteredByGenre = useSelector((state) => state.FilteredByGenre);
    const OrderBy = useSelector((state) => state.OrderBy);

    const [loading, setLoading] = React.useState(true);

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
        if (page > Math.ceil(videogames.length/15) && page !== 1) {
            dispatch(setPage(Math.ceil(videogames.length/15)))
        }
    }, [allVideogames])

    useEffect(() => {
        dispatch(setVideogames());
    }, [FilteredByCreatedOrApi,FilteredByGenre,OrderBy])

    useEffect(() => {
        if (typeof videogames === "object") {
            if (videogames.length > 0) {
                setLoading(false)
            }
            else{
                setLoading(true)
            }
        }
        else{
            setLoading(false)
        }
    }, [videogames])
    return (
        <div>
            {!loading?
                <div>
                    <h1>Home</h1>
                    <Search 
                        loading = {setLoading}
                    />
                    <ButtonCreate />
                    {pages?.map((page, index) => {
                        return <button key={index} onClick = {handlePage}>{page}</button>
                    })}
                    <FilterByCreatedOrApi />
                    <FilterByGenre />
                    <Order />

                    <div className={style.card}>
                        {videogames === 'No se encontraron videojuegos' ? 
                        <h1>No se encontraron videojuegos</h1>            
                        : videogames?.slice((page-1)*15, page*15).map((game, index) => {
                            return(
                                <GameCard
                                    name={game.name}
                                    image={game.image}
                                    genres={game.genres}
                                    id={game.id}
                                    key={index}
                                    created = {game.created}
                                />
                            )

                        })}
                    </div>
                </div>
                :  
                <div className={style.divloading}>
                </div>
            }
        </div>
    );
}

export default Home;