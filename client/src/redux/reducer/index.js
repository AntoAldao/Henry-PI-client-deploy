import {
    GET_VIDEOGAMES,
    SET_VIDEOGAMES,
    GET_VIDEOGAMES_BY_NAME,
    GET_GENRES,
    PUT_VIDEOGAME,
    DELETE_VIDEOGAME,
    FILTER_BY_GENRE,
    FILTER_BY_CREATED_OR_API,
    ORDER,
    SETPAGE
} from '../actions/index.js';


const initialState = {
    allVideogames : [],
    videogames : [],
    genres : [],
    OrderBy : "Order by ... ",
    FilteredByGenre : "Filter by genre", 
    FilteredByCreatedOrApi : "Filter by ... ",
    platforms : ["PC","PlayStation 5","Xbox One","PlayStation 4","Xbox Series S/X",
                            "Nintendo Switch","iOS","Android","Nintendo 3DS","Nintendo DS",
                            "Nintendo DSi","macOS","Linux","Xbox 360","Xbox","PlayStation 3",
                            "PlayStation 2","PlayStation","PS Vita","PSP","Wii U","Wii","GameCube",
                            "Nintendo 64", "Game Boy Advance","Game Boy Color","Game Boy","SNES","NES",
                            "Classic Macintosh","Apple II","Commodore / Amiga","Atari 7800","Atari 5200",
                            "Atari 2600","Atari Flashback","Atari 8-bit","Atari ST","Atari Lynx","Atari XEGS",
                            "Genesis","SEGA Saturn","SEGA CD","SEGA 32X","SEGA Master System","Dreamcast",
                            "3DO","Jaguar","Game Gear","Neo Geo"],
    page: 1,
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                allVideogames : action.payload,
            } 
        case SET_VIDEOGAMES:
            let videogames = action.payload;
            if (state.OrderBy === "Name A-Z") {
                videogames = videogames.sort((a, b) => { 
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })
            }
            else if (state.OrderBy === "Name Z-A") {
                videogames = videogames.sort((a, b) => { 
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return 1;
                    }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })
            }
            else if (state.OrderBy === "Rating 0-5") {
                videogames = videogames.sort((a, b) => {
                    return parseInt(a.rating) - parseInt(b.rating)
                    });
                }
            else if (state.OrderBy === "Rating 5-0") {
                videogames = videogames.sort((a, b) => {
                    return parseInt(b.rating) - parseInt(a.rating)
                    });
            }

            if (state.FilteredByCreatedOrApi === "Created") {
                videogames = videogames.filter((game) => {
                    return game.created === true})
                }

            else if (state.FilteredByCreatedOrApi === "Existing") {
                videogames = videogames.filter((game) => {
                    return game.created === false})
            }
            if (state.FilteredByGenre !== "Filter by genre") {
                videogames = videogames.filter((game) => {
                    return game.genres.some((genre) => {
                       return genre === state.FilteredByGenre
                    })

                })
            }

            return {
                ...state,
                videogames : videogames
            }
        case GET_VIDEOGAMES_BY_NAME:
            return {
                ...state,
                videogames : action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres : action.payload
            }
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
        case SETPAGE:
            return {
                ...state,
                page : action.payload
            }
        default:
            return {...state};

    }
};
export default rootReducer;