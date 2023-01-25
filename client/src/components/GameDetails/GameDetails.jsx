import style from "./GameDetails.module.css";
import { useState} from "react";

const GameDetails = (props) => {   

    return (
    <div className={style.card}>
        <h1>{props.name}</h1>
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
        { props.created?
            <div className={style.created}>
                        <button onClick={props.handleEdit}>Edit</button>
            </div>
            : null
        }
    </div>
    )
}

export default GameDetails;