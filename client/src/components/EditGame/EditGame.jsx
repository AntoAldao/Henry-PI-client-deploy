import style from "./EditGame.module.css";
import { useSelector } from "react-redux"
import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { getVideogames } from "../../redux/actions/index"



const EditGame = (props) => {
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.genres)
    const platforms = useSelector((state) => state.platforms)
    const [showGenres, setShowGenres] = useState(false)
    const [showPlatforms, setShowPlatforms] = useState(false)
    const [genresElected, setGenresElected] = useState(props.genres)
    const [game, setGame] = useState({
        name: props.name,
        image: props.image,
        description: props.description,
        genres: genres.filter(genre => props.genres.some(genre2 => genre2 === genre.name)).map(genre => String(genre.id)),
        platforms: props.platforms,
        rating: props.rating,
        date: props.date
    })
    
    const handleShowGenres = (e) => {
        e.preventDefault()
        setShowGenres(!showGenres)
    }
    const handleShowPlatforms = (e) => {
        e.preventDefault()
        setShowPlatforms(!showPlatforms)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setGame({
            ...game,
            [e.target.name]: e.target.value
        })
    }

    const handleSelectGenres= (e) => {
        const genresState = game.genres
        const Elected = genresElected
        const genre = genres.filter(genre => genre.id == e.target.value)

        if (!game.genres.includes(e.target.value)) {
            genresState.push(e.target.value)
            Elected.push(genre[0].name)
        }else{
            const index = genresState.indexOf(e.target.value)
            genresState.splice(index, 1)
            const indexElected = Elected.indexOf(genre[0].name)
            Elected.splice(indexElected, 1)
            
        }
        setGenresElected(Elected) 
        setGame({
            ...game,
            genres: genresState
        })
    }
    
    const handleSelectPlatforms= (e) => {
        const platformsState = game.platforms

        if (!platformsState.includes(e.target.value)) {
            platformsState.push(e.target.value)
        }else{
            const index = platformsState.indexOf(e.target.value)
            platformsState.splice(index, 1)
        }

        setGame({
            ...game,
            platforms: platformsState
        })
        
    }

    const handleSave = async(e) => {
        e.preventDefault()
        const body = {...game}
        if (game.name === "" ){
            delete body.name
        }
        if (game.image === ""){
            delete body.image
        }
        if (game.description === ""){
            delete body.description
        }
        if (game.genres.length === 0){
            delete body.genres
        }
        if (game.platforms.length === 0){
            delete body.platforms
        }
        if (game.rating === ""){
            delete body.rating
        }
        if (game.date === ""){
            delete body.date
        }
        try {
            const response = await axios.put(`http://localhost:3001/api/videogames/${props.id}`, body)
            alert(response.data)
            dispatch(getVideogames())
            props.save()

        }
        catch (error) {
            alert(error.message)
        }


    }

    return (
        <div className={style.card}>
            {console.log(game)}
            <form >
                <h1 className ={style.name}>
                    <input 
                        type="text" 
                        name="name" 
                        value={game.name} 
                        onChange={handleChange} 
                        className ={style.inputsEdit} />
                </h1>
                <div className={style.divImage}>
                    <img src={game.image} alt={game.name} className={style.image}/>
                    <input 
                        type="text" 
                        name="image" 
                        value={game.image} 
                        onChange={handleChange} 
                        className ={style.inputsEdit}/>
                </div>
                <div>
                    <input 
                        type="text" 
                        name="description" 
                        value={game.description} 
                        onChange={handleChange} 
                        className ={style.inputsEdit}/>
                </div>
                <div className={style.info}>
                    <div className={style.genres}>
                        <h2> Genres</h2>
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
                    </div>
                    <div>
                        <h2> Platforms</h2>
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
                    </div>
                    <div>
                        <h2> Rating</h2>
                        <input 
                            type="text" 
                            name="rating" 
                            value={game.rating} 
                            onChange={handleChange} 
                            className ={style.inputsEdit}/>
                    </div>
                    <div>
                        <h2> Released</h2>
                        <input 
                            type="text" 
                            name="date" 
                            value={game.date} 
                            onChange={handleChange} 
                            className ={style.inputsEdit}/>
                    </div>
                </div> 
                <button onClick={handleSave}>Save Changes</button>
                <button onClick={props.handleEdit}>X</button>
            </form>
        </div>

    )
}
export default EditGame;