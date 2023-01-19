import { useState } from "react"
import { Link } from "react-router-dom"
import validate from "./validate"

const CreateGame = () => {

    const [game, setGame] = useState({
        name: "",
        image: "",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(errors).length === 0){
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
        }
    }
    return (
        <div>
            <h1>Create Game</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value = {game.name} 
                    onChange={handleChange}/>
                {console.log(errors.name)}
                {errors.name ? <p>{errors.name}</p>:null}

                <label>Image</label>
                <input 
                    type="text" 
                    name="image" 
                    value = {game.image} 
                    onChange={handleChange} />

                <label>Description</label>
                <input 
                    type="text" 
                    name="description" 
                    value = {game.description} 
                    onChange={handleChange}/>
                {errors.description ? <p>{errors.description}</p>:null}

                <label>Genres</label>
                <input 
                    type="text"
                    name="genres"
                    value = {game.genres} 
                    onChange={handleChange}/>
                {errors.genres ? <p>{errors.genres}</p>:null}

                <label>Platforms</label>
                <input 
                    type="text" 
                    name="platforms" 
                    value = {game.platforms} 
                    onChange={handleChange}/>
                {errors.platforms ? <p>{errors.platforms}</p>:null}

                <label>Rating</label>
                <input 
                    type="text" 
                    name="rating" 
                    value = {game.rating} 
                    onChange={handleChange}/>

                <label>Released</label>
                <input 
                    type="text" 
                    name="released" 
                    value = {game.released} 
                    onChange={handleChange}/>
                {errors.released ? <p>{errors.released}</p>:null}


                <button type="submit">Create</button>
            </form>
            <Link to={"/home"}>
                <button>Back</button>
            </Link>
        </div>
    )
}


export default CreateGame