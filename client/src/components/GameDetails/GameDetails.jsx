import style from "./GameDetails.module.css";
import { useState, useRef, useEffect} from "react";


const GameDetails = (props) => {   

    const [showInfo , setShowInfo] = useState(false);
    const [show, setShow] = useState("");
    const descriptionRef = useRef(null);
    const genresRef = useRef(null);
    const platformsRef = useRef(null);
    const ratingRef = useRef(null);
    const releasedRef = useRef(null);

    const listRef = [descriptionRef, genresRef, platformsRef, ratingRef, releasedRef];
    const [selectedRef,setSelectedRef] = useState(0)
    

    const handleShow = (e) => {
        setShowInfo(!showInfo);
        setShow(e.target.value)
    }


    const navigateMenu = (e) => {
        // listRef[selectedRef].current.style.visibility = "none";
        console.log(selectedRef)
        if(e.key === "ArrowDown"){
            if(selectedRef < listRef.length-1){
                setSelectedRef(selectedRef + 1)
            }
            else{
                setSelectedRef(0)
            }
        }
        if(e.key === "ArrowUp"){
            if(selectedRef > 0){
                setSelectedRef(selectedRef - 1)
            }
            else{
                setSelectedRef(listRef.length-1)
            }
        }
        listRef[selectedRef].current.style.visibility = "none";
        if(e.key === "Enter"){
            console.log(selectedRef)
            listRef[selectedRef].current.click();
        }
    }

    useEffect(() => {
        setSelectedRef(0)
    },[showInfo])

    useEffect(() => {
        if(!showInfo){
            listRef[selectedRef].current.focus()
        }
    },[selectedRef])
    
    return (    
        <div className={style.general}>
            <div className={style.card}>
                <div className={style.imyname}>
                    <div className={style.divimage}>
                        <img src={props.image} alt={props.name} className={style.image}/>
                    </div>
                    <h1 className={style.name}>{props.name}</h1>
                    
                </div>
                {!showInfo? 
                    <ul className={style.buttonsinfo} onKeyDown={navigateMenu}> 
                        <li className={style.liinfo}>
                            <button value ="Description" onClick={handleShow} autoFocus className={style.binfo}  ref={descriptionRef} >
                                <span>
                                    ›
                                </span>
                            </button>
                            <span >Descripion</span>
                        </li>
                        <li className={style.liinfo}>
                            <button value ="Genres" onClick={handleShow} className={style.binfo} ref={genresRef}  >
                                <span>
                                    ›
                                </span>
                            </button>
                            <span >Genres</span>
                        </li >
                        <li className={style.liinfo}>
                            <button value ="Platforms" onClick={handleShow} className={style.binfo} ref={platformsRef}  >
                                <span>
                                    ›
                                </span>
                            </button>
                            <span >Platforms</span>
                        </li>
                        <li className={style.liinfo}>
                            <button value ="Rating" onClick={handleShow} className={style.binfo} ref={ratingRef} >
                                <span>
                                    ›
                                </span>
                            </button>
                            <span >Rating</span>
                        </li>
                        <li className={style.liinfo}>
                            <button value = "Released" onClick={handleShow} className={style.binfo} ref={releasedRef}  >
                                <span>
                                    ›
                                </span>
                            </button>
                            <span >Released</span>
                        </li>
                    </ul>
                    : 
                    <div>
                        {show === "Description" && 
                            <div dangerouslySetInnerHTML={{__html:props.description}} className={style.description}/>
                        }
                        {show === "Genres" &&
                            <div className={style.genres}>
                                <h2> Genres</h2>
                                <ul className={style.list}>
                                    {props.genres?.map((genre, index) => {
                                        return(
                                            <li key={index}>{genre}</li>
                                        )
                                    })}
        
                                </ul>
                            </div>
                        }
                        {show === "Platforms" &&
                        <div className={style.platforms}>
                            <h2> Platforms</h2>
                            <ul className={style.list}>
                                {props.platforms?.map((platform, index) => {
                                    return(
                                        <li key={index}>{platform}</li>
                                    )
                                })}
                        </ul>
                        </div>
                        }
                        {show === "Rating" &&
                            <div className={style.rating}>
                                <h2> Rating</h2>
                                <p>{props.rating}</p>
                            </div>
                        }
                        {show === "Released" &&
                            <div className={style.released}>
                                <h2> Released</h2>
                                <p>{props.date}</p>
                            </div>
                            }
                        <button onClick={handleShow}>Close</button>
                    </div>
                }
                { props.created?
                    <div className={style.created}>
                                <button onClick={props.handleEdit}>Edit</button>
                    </div>
                    : null
                }
            </div>
        </div>
        
    )
}

export default GameDetails;