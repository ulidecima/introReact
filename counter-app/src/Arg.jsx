function formName(developer) {
    return developer.name + " " + developer.surname;
}

function Arg(){
    const developer = {
        name : 'Ulises',
        surname : 'Decima'
    }
    return (
        <h1>
            ¡Hola {formName(developer)}!
        </h1>
    )
}

export default Arg