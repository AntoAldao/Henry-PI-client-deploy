import { Link } from "react-router-dom"
import CreateGame from "../CreateGame/CreateGame"
const ButtonCreate = () => {
    return (
        <div>
            <Link to={`/create`}>
                <button>Create</button>
            </Link>
        </div> 
    )
}
export default ButtonCreate