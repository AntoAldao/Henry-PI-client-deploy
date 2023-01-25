import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const SET_VIDEOGAMES = 'SET_VIDEOGAMES';
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
export const GET_GENRES = 'GET_GENRES';
export const POST_VIDEOGAME = 'POST_VIDEOGAME';
export const PUT_VIDEOGAME = 'PUT_VIDEOGAME';
export const DELETE_VIDEOGAME = 'DELETE_VIDEOGAME';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_CREATED_OR_API = 'FILTER_BY_CREATED_OR_API';
export const ORDER= 'ORDER';
export const SETPAGE = 'SETPAGE';

export const getVideogames = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/api/videogames')
    const data = response.data;
    return (
        dispatch({
            type: GET_VIDEOGAMES,
            payload: data
        })
    )
};

export const setVideogames = () => async (dispatch) => {
    return (
        dispatch({
            type: SET_VIDEOGAMES,
        })
    )
};

export const getVideogamesByName = (name) => async (dispatch) => {
    let data = ""
    try {
        const response = await axios.get(`http://localhost:3001/api/videogames?name=${name}`)
        data = response.data;
        console.log(data)
    } catch (error) {
       
        data = error.response.data
    }
    
    return (
        dispatch({
            type: GET_VIDEOGAMES_BY_NAME,
            payload: data
        })
    )
}

export const getGenres = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/api/genres')
    const data = response.data;
    return (
        dispatch({
            type: GET_GENRES,
            payload: data
        })
    )
    
}


export const putVideogame = (payload) => async (dispatch) => {
    const {id,...body} = payload;
    const response = await axios.put(`http://localhost:3001/api/videogame/${id}`, body)
    const data = response.data;
    return (
        dispatch({
            type: PUT_VIDEOGAME,
            payload: data
        })
    )
}


export const filterByGenre = (genre) => async (dispatch) => {
    return (
        dispatch({
            type: FILTER_BY_GENRE,
            payload: genre
        })
    )
}

export const filterByCreatedOrApi = (payload) => async (dispatch) => {
    return (
        dispatch({
            type: FILTER_BY_CREATED_OR_API,
            payload: payload
        })
    )
}

export const order = (payload) => async (dispatch) => {
    return (
        dispatch({
            type: ORDER,
            payload: payload
        })
    )
}

export const setPage = (payload) => (dispatch) => {

    return (
        dispatch({
            type: SETPAGE,
            payload: payload

        })
    )
}