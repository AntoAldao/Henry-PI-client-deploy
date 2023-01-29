import GameCard from "../../components/GameCard/GameCard";
import React, { useEffect } from "react";
import ButtonCreate from "../../components/NavBar/ButtonCreate/ButtonCreate";
import style from "./Home.module.css"
import { useSelector } from "react-redux";
import FilterByCreatedOrApi from "../../components/NavBar/FilterByCreated/FilterByCreated";
import FilterByGenre from "../../components/NavBar/FilterByGenre/FilterByGenre";
import { useDispatch } from "react-redux";
import {setVideogames, setPage,setLoading} from "../../redux/actions/index";
import Order  from "../../components/NavBar/Order/Order"
import Search from "../../components/NavBar/Search/Search";
import logo from "../../assets/joystick2.svg";
import headphones from "../../assets/headphones.png";
import bolt from "../../assets/bolt.svg";
import { useHistory } from "react-router-dom";

const Home = () => {
    const pages = []
    const allVideogames = useSelector((state) => state.allVideogames);
    const videogames = useSelector((state) => state.videogames);

    const page = useSelector((state) => state.page);
    const FilteredByCreatedOrApi = useSelector((state) => state.FilteredByCreatedOrApi);
    const FilteredByGenre = useSelector((state) => state.FilteredByGenre);
    const searchedgames = useSelector((state) => state.searchedgames);
    const OrderBy = useSelector((state) => state.OrderBy);

    const loading = useSelector((state) => state.loading);

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
    }, [FilteredByCreatedOrApi,FilteredByGenre,OrderBy,searchedgames])

    useEffect(() => {
        if (typeof videogames === "object") {
            if (videogames.length > 0) {
                dispatch(setLoading(false))
            }
            else{
                dispatch(setLoading(true))
            }
        }
        else{
            dispatch(setLoading(false))
        }
    }, [videogames])
    console.log(useHistory())
    return (
        
        <div className={style.generaldiv} style = {{height:`${loading? "100vh":"auto"}`}}>
            <div className={style.divhys}>
                <div className={style.video}>
                    <img src={logo} alt="Logo"  style={{rotate: "-45deg"}}/>
                    <h1 className={style.home}>VIDEOGAMES</h1>
                </div>
                <Search />
            </div>
            
            <div className={style.divnav}>
                <div className={style.bolt}>
                    <img src={bolt}/>
                </div>
                <div className={style.filters}>
                    <FilterByCreatedOrApi />
                    <FilterByGenre />
                    <Order />
                </div>
                <ButtonCreate
                    
                />
                    
                <div className={style.pages}>
                    {pages?.map((p, index) => {
                            return (
                                <button key={index} 
                                        onClick = {handlePage} 
                                        className={style.buttonpages}
                                        style={{boxShadow: p === Number(page) ? "0 0 6px 2px #FF005C, inset 0 0 8px 3px #FF005C" :null,
                                                textShadow: p === Number(page) ? "2px 2px 0 #FF005C, -1px -1px 0 #FF005C, 1px -1px 0 #FF005C, -1px 1px 0 #FF005C, 1px 1px 0 #FF005C" :null,}}
                                >
                                    {p}
                                </button>
                            )
                        })}
                </div>
                <img src={headphones} className={style.headphones}/>
                
            </div>
            {!loading?
                <div>

                    <div className={style.card} 
                        style = {{height:`${videogames[0] === 'No results found'? "100vh":"auto"}`,
                        columnGap : `${videogames.length<4? "80px":"0px"}`}}>
                        {(videogames[0] === 'No results found' || !videogames.length)? 
                        <h1 className={style.notgames}>No results found</h1>            
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