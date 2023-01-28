import { Link } from "react-router-dom";
import style from "./ButtonCreate.module.css"
const ButtonCreate = () => {
    return (
        <div className={style.divcreate}>
            <Link to={`/create`}>
                <button className={style.buttoncreate}>Create</button>
            </Link>
        </div> 
    )
}
export default ButtonCreate