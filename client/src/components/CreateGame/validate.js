const  validate = (game) => {
    const errors = {}
    if (!game.name  ) {
        errors.name ="Name is required"
    }
    else if (!game.description  ) {
        errors.description="Description is required"
    }
    else if (!game.released ) {
        errors.released = "Release date is required"
    }
    else if ( !game.genre ) {
        errors.genres = "Genre is required"
    }
    else if ( !game.platform ) {
        errors.platforms = "Platform is required"
    }
    return errors
}
export default validate;