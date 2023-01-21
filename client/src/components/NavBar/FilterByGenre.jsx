import { useSelector } from "react-redux";
import { filterByGenre } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import {setPage } from "../../redux/actions/index";

const FilterByGenre = () => {
    const genres = useSelector((state) => state.genres);
    const FilteredByGenre= useSelector((state) => state.FilteredByGenre);
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(filterByGenre(e.target.value));
        dispatch(setPage(1));
    };
    return (
        <div >
            <select name="filter" value={FilteredByGenre} onChange={handleChange}>
                <option value="">{FilteredByGenre}</option>
                {genres.map((genre) => {
                    return <option value={genre.name} key={genre.id}>{genre.name}</option>
                }
                )}
            </select>
        </div>
    )
}
export default FilterByGenre;