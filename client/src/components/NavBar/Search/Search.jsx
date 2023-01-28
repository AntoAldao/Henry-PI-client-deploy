import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getVideogamesByName, setVideogames,setPage} from '../../../redux/actions/index';
import style from './Search.module.css';
import lupa from '../../../assets/lupa3.svg';

const Search = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
        if (e.target.value === "") {
            setName("");
            dispatch(setVideogames());
            dispatch(setPage(1));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getVideogamesByName(name));
        dispatch(setPage(1));
        props.loading(true)
    }

    return (
        <div className={style.search}>
            <input type="text" value={name} onChange = {handleChange} className={style.input}/>
            <button onClick={handleSubmit} className={style.button}>
                <img src={lupa} alt="lupa" width="20px" height="20px"/>
            </button>
        </div>
    );
}
export default Search;