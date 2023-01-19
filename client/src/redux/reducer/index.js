import {
    GET_VIDEOGAMES,
    GET_VIDEOGAMES_BY_NAME,
    GET_VIDEOGAME_DETAIL,
    GET_GENRES,
    POST_VIDEOGAME,
    PUT_VIDEOGAME,
    DELETE_VIDEOGAME,
    FILTER_BY_GENRE,
    FILTER_BY_CREATED_OR_API,
    ORDER
} from '../actions/index.js';


const initialState = {
    allVideogames : [],
    videogames : [],
    genres : [],
    OrderBy : "",
    FilteredByGenre : [], 
    FilteredByCreatedOrApi : "",
    videogameDetail : {},
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                allVideogames : action.payload,
                videogames : action.payload
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
        // case POST_VIDEOGAME:
        //     return {
        //         ...state,
        //         allVideogames : action.payload
        //     }
        // case PUT_VIDEOGAME:
        //     return {
        //         ...state,
        //         allVideogames : action.payload
        //     }
        // case DELETE_VIDEOGAME:
        //     return {
        //         ...state,
        //         allVideogames : action.payload
        //     }
        case FILTER_BY_GENRE:
            return {
                ...state,
                FilteredByGenre : action.payload
            }
        case FILTER_BY_CREATED_OR_API:
            return {
                ...state,
                FilteredByCreatedOrApi: action.payload
            }
        case ORDER:
            return {
                ...state,
                OrderBy : action.payload
            }
        default:
            return {...state};

    }
};
export default rootReducer;