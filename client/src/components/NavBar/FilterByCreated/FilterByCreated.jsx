import { useSelector } from "react-redux";
import {filterByCreatedOrApi} from "../../../redux/actions/index"
import { useDispatch } from "react-redux";
import {setPage } from "../../../redux/actions/index";
import style from "./FilterByCreated.module.css";

const FilterByCreatedOrApi = () => {

    const filters = [ "Created", "Existing",]
    
    const filter = useSelector((state) => state.FilteredByCreatedOrApi);
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(filterByCreatedOrApi(e.target.value))
        dispatch(setPage(1));
    }


    return (
        <div className={style.divFilterC}>
            <select name="filter" value={filter} onChange={handleChange} className={style.selecfilterC}>
            <option value="">Filter by ▼ </option>
                {filters.map((filter) => {
                    return <option value={filter} key={filter} className={style.options}>{filter}</option>
                }
                )}
            </select>
        </div>
    )
}
export default FilterByCreatedOrApi;
    