import {
    GET_VIDEOGAMES,
    GET_VIDEOGAMES_BY_NAME,
    GET_VIDEOGAME_DETAIL,
    GET_GENRES,
    POST_VIDEOGAME,
    PUT_VIDEOGAME,
    DELETE_VIDEOGAME,
    FILTER_BY_GENRE,
    FILTER_BY_CREATED,
    FILTER_BY_API,
    ORDER_BY_NAME_ASC,
    ORDER_BY_NAME_DESC,
    ORDER_BY_RATING_ASC,
    ORDER_BY_RATING_DESC,
} from '../actions/index.js';


const initialState = {
    allVideogames : [],
    videogames : [],
    genres : [],
    OrderBy : "",
    videogamesFilteredByGenre : [],
    videogamesFilteredByCreated : [],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                allVideogames : action.payload
            }   
        case GET_VIDEOGAMES_BY_NAME:
            return {
                ...state,
                videogames : action.payload
            }
        case GET_VIDEOGAME_DETAIL:
            return {
                ...state,
                videogameDetail : action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres : action.payload
            }
        case POST_VIDEOGAME:
            return {
                ...state,
                allVideogames : action.payload
            }
        case PUT_VIDEOGAME:
            return {
                ...state,
                allVideogames : action.payload
            }
        case DELETE_VIDEOGAME:
            return {
                ...state,
                allVideogames : action.payload
            }


    }
};
export default rootReducer;