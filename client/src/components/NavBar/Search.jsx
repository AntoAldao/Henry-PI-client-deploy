import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getVideogamesByName, setVideogames,setPage} from '../../redux/actions/index';

const Search = () => {
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
    }

    return (
        <div className="search">
            <input type="text" value={name} onChange = {handleChange}/>
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
}
export default Search;