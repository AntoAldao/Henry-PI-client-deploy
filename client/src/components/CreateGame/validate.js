function isUrl(s) {   
    var regexp = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    return regexp.test(s);
}
function isDate(s) {
    var regexp = /(\d{4})-(\d{2})-(\d{2})/g;
    return regexp.test(s);
}
const  validate = (game) => {
    console.log(game.image)
    const errors = {}
    if (!game.name  ) {
        errors.name ="Name is required"
    }
    else if (!isUrl(game.image) && game.image !== "") {
        errors.image = "image must be a valid URL"
    }
    else if (!game.description  ) {
        errors.description="Description is required"
    }
    else if ( !game.genres.length) {
        errors.genres = "Genre is required"
    }
    else if ( !game.platforms.length) {
        errors.platforms = "Platform is required"
    }
    else if (String(parseInt(game.rating)) === "NaN" && game.rating !== ""){
        errors.rating = "Rating must be a number"
    }
    else if (parseInt(game.rating) < 0 || parseInt(game.rating) > 5) {
        errors.rating = "Rating must be between 0 and 5"
    }
    else if (!game.released ) {
        errors.released = "Release date is required"
    }
    else if (!isDate(game.released) && game.released !== "") {
        errors.released = "Release date must be a valid date (YYYY-MM-DD)"
    }

    
    
    return errors
}
export default validate;