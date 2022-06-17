export class Persona {

    private name:string;
    private surname:string;

    constructor(name:string, surname:string) {
        this.name = name;
        this.surname = surname;
    }

    getFullName = ():string => {
        return `${this.name} ${this.surname}`;
    }
}