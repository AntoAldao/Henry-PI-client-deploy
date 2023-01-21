import { useState } from "react"
import {filterByCreatedOrApi} from "../../redux/actions/index"
import { useDispatch } from "react-redux";
const FilterByCreatedOrApi = () => {

    const filters = [ "Created", "Existing",]
    const [filter, setFilter] = useState("")
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setFilter(e.target.value)
        dispatch(filterByCreatedOrApi(e.target.value))
    }


    return (
        <div >
            <select name="filter" value={filter} onChange={handleChange}>
            <option value="">Filter by ...</option>
                {filters.map((filter) => {
                    return <option value={filter}>{filter}</option>
                }
                )}
            </select>
        </div>
    )
}
export default FilterByCreatedOrApi;
    