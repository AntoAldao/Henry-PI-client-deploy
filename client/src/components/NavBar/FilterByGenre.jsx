import { useSelector } from "react-redux";
import { useState } from "react";

const FilterByGenre = () => {
    const genres = useSelector((state) => state.genres);
    const [genre, setGenre] = useState("");
    const handleChange = (e) => {
        setGenre(e.target.value);
    };
    return (
        <div >
            <select name="filter" value={genre} onChange={handleChange}>
                <option value="">Filter by genre</option>
                {genres.map((genre) => {
                    return <option value={genre.name}>{genre.name}</option>
                }
                )}
            </select>
        </div>
    )
}
export default FilterByGenre;