class Usuario {

    constructor() {
        this.personas = [];
    }

    addPerso(id, nombre) {

        let persona = { id, nombre };

        //Esto es para añadir una persona al arreglo
        this.personas.push(persona)

        return this.personas;
    }

    getPerson(id) {

        // per es un alias que me recorre el objeto
        // Esto devuelve un arreglo yo solo quiero uno por lo que solo tomo la primera pocision    
        let person = this.personas.filter(per => per.id = id)[0];
        return person




    }

    getAllPeople() {
        return this.personas;
    }

    deletePerson(id) {

        let personaBorrada = this.getPerson(id);
        this.personas = this.personas.filter(per => per.id = !id);
        return personaBorrada

    }
}


module.exports = {
    Usuario
}