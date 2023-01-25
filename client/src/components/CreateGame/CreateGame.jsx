import { useState } from "react"
import { Link } from "react-router-dom"
import validate from "./validate"
import Select from 'react-select'
import { useSelector } from "react-redux"
import style from "./CreateGame.module.css"
import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { getVideogames } from "../../redux/actions/index"



const CreateGame = () => {
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.genres)
    const platforms = useSelector((state) => state.platforms)

    const [game, setGame] = useState({
        name: "",
        image: "",
        description: "",
        genres: [],
        platforms: [],
        rating:"",
        released: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        image: "",
        description: "",
        genres: "",
        platforms: "",
        rating: "",
        released: ""
    })
      
    const [disabled, setDisabled] = useState(true)

    const handleDisable = () => {
        if(Object.keys(errors).length === 0){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }
    
    const handleChange = (e) => {
        setGame({
            ...game,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...game,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(Object.keys(errors).length === 0){
            const body = {...game}
            if (game.image === "") {
                delete body.image
            }
            if (game.rating === "") {
                delete body.rating
            }
            console.log(body)
            try {
                console.log(game)
                const response = await axios.post('http://localhost:3001/api/videogames', body)
                 setGame({
                     name: "",
                     image: "",
                     description: "",
                     genres: [],
                     platforms: [],
                     rating: "",
                     released: ""
                 })
                 setErrors({
                     name: "",
                     image: "",
                     description: "",
                     genres: "",
                     platforms: "",
                     rating: "",
                     released: ""
                 })
                 setGenresElected([])
                alert(response.data)
                dispatch(getVideogames())
                
            } catch (error) {
                alert(error.message)
            }
        }


    }
    const [genresElected, setGenresElected] = useState([])

    const handleSelectGenres= (e) => {
        if (!game.genres.includes(e.target.value)) {
            const genresState = game.genres
            const Elected = genresElected
            genresState.push(e.target.value)
            const genre = genres.filter(genre => genre.id == e.target.value)
            Elected.push(genre[0].name)
 
            setGenresElected(Elected)
            setGame({
                ...game,
                genres: genresState
            })
            setErrors(validate({
                ...game,
                genres: genresState
            }))
        }
        else{
            const genresState = game.genres
            const Elected = genresElected
            const genre = genres.filter(genre => genre.id == e.target.value)
            const index = genresState.indexOf(e.target.value)
            genresState.splice(index, 1)
            const indexElected = Elected.indexOf(genre[0].name)
            Elected.splice(indexElected, 1)
            setGenresElected(Elected)
            setGame({
                ...game,
                genres: genresState
            })
            setErrors(validate({
                ...game,
                genres: genresState
            }))
        }
    }
    

    const handleSelectPlatforms= (e) => {
        const platformsState = game.platforms
        if (!platformsState.includes(e.target.value)) {
            platformsState.push(e.target.value)

        }
        else{

            const index = platformsState.indexOf(e.target.value)
            platformsState.splice(index, 1)
        }
        setGame({
            ...game,
            platforms: platformsState
        })
        setErrors(validate({
            ...game,
            platforms: platformsState
        }))
        
    }

    const [showGenres, setShowGenres] = useState(false)
    const [showPlatforms, setShowPlatforms] = useState(false)
    
    const handleShowGenres = () => {
        setShowGenres(!showGenres)
    }
    const handleShowPlatforms = () => {
        setShowPlatforms(!showPlatforms)
    }

    useEffect(() => {
        handleDisable()
    }, [errors])

    
    
   
 

    return (
        <div>
            <h1>Create Game</h1>
            <form onSubmit={handleSubmit}  className={style.form} >
                <div>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value = {game.name} 
                        onChange={handleChange}/>
                    {errors.name ? <p>{errors.name}</p>:null}
                </div>

                <div>
                    <label>Image</label>
                    <input 
                        type="text" 
                        name="image" 
                        value = {game.image} 
                        onChange={handleChange} />
                    {game.image? <img src={game.image} alt="image" width="100px" height="100px"/>:null}
                </div>

                <div>
                    <label>Description</label>
                    <input 
                        type="text" 
                        name="description" 
                        value = {game.description} 
                        onChange={handleChange}/>
                    {errors.description ? <p>{errors.description}</p>:null}
                </div>

                <div>
                    <label>Genres</label>
                    <input type="text" name="genres" value = {genresElected} readOnly={true}/>
                    <button onClick={handleShowGenres}>Genres</button>
                    {showGenres? <div>
                        <select 
                            name="genres"
                            multiple={true}    
                            onChange={handleSelectGenres}
                            value = {game.genres}>
                            {genres.map((genre) => {
                                return <option value={genre.id} key={genre.id}>{genre.name}</option>
                            })}
                        </select>
                    </div>:null}
                    {errors.genres ? <p>{errors.genres}</p>:null}
                </div>

                <div>
                    <label>Platforms</label>
                    <input type="text" name="platform" value = {game.platforms} readOnly={true}/>
                    <button onClick={handleShowPlatforms}>Platforms</button>
                        {showPlatforms? <div>
                        <select 
                            name="platforms"
                            multiple={true}    
                            onChange={handleSelectPlatforms}
                            value = {game.platforms}>
                            {platforms.map((platform,index) => {
                                return <option value={platform} key={index}>{platform}</option>
                            })}
                        </select>
                    </div>:null}
                    {errors.platforms ? <p>{errors.platforms}</p>:null}
                </div>

                <div>
                    <label>Rating</label>
                    <input 
                        type="text" 
                        name="rating" 
                        value = {game.rating} 
                        onChange={handleChange}/>
                    {errors.rating ? <p>{errors.rating}</p>:null}

                </div>

                <div>
                    <label>Released</label>
                    <input 
                        type="text" 
                        name="released" 
                        value = {game.released} 
                        onChange={handleChange}/>
                    {errors.released ? <p>{errors.released}</p>:null}
                </div>
                <button type="submit" disabled = {disabled}>Create</button>
            </form>
            <Link to={"/home"}>
                <button>Back</button>
            </Link>
        </div>
    )
}


export default CreateGame