import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres , setVideogames} from "../../redux/actions/index";

const LandingPage = () => {
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
        dispatch(setVideogames());
    }, [])

    return (
        <div>
            <h1>VIDEOGAMES</h1>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
}
export default LandingPage;