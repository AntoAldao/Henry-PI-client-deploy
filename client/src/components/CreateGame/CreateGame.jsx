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

    const [game, setGame] = useState({
        name: "",
        image: "https://images.unsplash.com/photo-1593277992013-05e17a5f417d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Mzg5OTgyMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        description: "",
        genres: [],
        platforms: [],
        rating: "",
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
            try {
                const response = await axios.post('http://localhost:3001/api/videogames', game)
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
                alert(response.data)
                dispatch(getVideogames())
                
            } catch (error) {
                alert(error.message)
            }
        }


    }

    const handleSelectGenres= (e) => {
        const currentGenres = []
        e.map((genre) => {
            currentGenres.push(genre.value)
        }
        )
        setGame({
            ...game,
            genres: currentGenres
        })
        setErrors(validate({
            ...game,
            genres: currentGenres
        }))
        
    }

    const handleSelectPlatforms= (e) => {
        const currentPlatforms = []
        e.map((platform) => {
            currentPlatforms.push(platform.value)
        }
        )
        setGame({
            ...game,
            platforms: currentPlatforms
        })
        setErrors(validate({
            ...game,
            platforms: currentPlatforms
        }))
        
    }

    useEffect(() => {
        handleDisable()
    }, [errors])

    
    const genres = useSelector((state) => state.genres)
    const platforms = useSelector((state) => state.platforms)
    return (
        <div>
            {console.log(game)}
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
                    <Select 
                        isMulti
                        options={genres.map((genre) => {
                            return {value: genre.id, label: genre.name}})}
                        name="genres"
                        onChange={handleSelectGenres}/>
                    {errors.genres ? <p>{errors.genres}</p>:null}
                </div>

                <div>
                    <label>Platforms</label>
                    <Select 
                        isMulti
                        options={platforms.map((platform) => {
                            return {value: platform, label: platform}})}
                        name="platforms"
                        onChange={handleSelectPlatforms}/>
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
                {console.log(disabled)}
                <button type="submit" disabled = {disabled}>Create</button>
            </form>
            <Link to={"/home"}>
                <button>Back</button>
            </Link>
        </div>
    )
}


export default CreateGame