import style from "./GameDetails.module.css";
import {useEffect, useState} from "react";

const GameDetails = (props) => {   
    
    const [edit, setEdit] = useState(false);
    const [game, setGame] = useState({
        name: props.name,
        description: props.description,
        date: props.date,
        rating: props.rating,
        platforms: props.platforms,
        image: props.image,
        genres: props.genres
    })
    const [errors, setErrors] = useState({
        name: "",
        image: "",
        description: "",
        genres: "",
        platforms: "",
        rating: "",
        date: ""
    })
    
    const handleEdit = () => {
        setEdit(!edit);
    }
    

    return (
    <div className={style.card}>
        <img src={props.image} alt={props.name} className={style.image}/>
        <div dangerouslySetInnerHTML={{__html:props.description}}/> 
        <div className={style.info}>

            <div className={style.genres}>
                <h2> Genres</h2>
                <ul>
                    {props.genres?.map((genre, index) => {
                        return(
                            <li key={index}>{genre}</li>
                        )
                    })}

                </ul>
            </div>
                
            <div>
                <h2> Platforms</h2>
                <ul>
                    {props.platforms?.map((platform, index) => {
                        return(
                            <li key={index}>{platform}</li>
                        )
                    })}
                </ul>
            </div>

            <div>
                <h2> Rating</h2>
                <p>{props.rating}</p>
            </div>

            <div>
                <h2> Released</h2>
                <p>{props.date}</p>
            </div>
        
        </div>
        {props.created && <div className={style.created}>
            <button onClick={handleEdit}>Edit</button>
        </div>}
        {edit? <div>
            {/* name,
            description,
            date,
            rating,
            platforms,
            image */}
        </div> : null}
    </div>
    )
}

export default GameDetails;