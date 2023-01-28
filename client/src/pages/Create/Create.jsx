import CreateGame from '../../components/CreateGame/CreateGame.jsx'
import { Link } from "react-router-dom"
import style from './Create.module.css'
const Create = () => {
    return (
        <div className={style.divgeneral}>
            <Link to={"/home"}>
                <button className={style.back}>Back</button>
            </Link>
            <CreateGame />
        </div>
    )
}

export default Create