export default class Persona{
    private firstname: string;
    private lastname: string;

    constructor(firstname:string, lastname:string){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName():string{
        return `${this.firstname} ${this.lastname}`
    }

}