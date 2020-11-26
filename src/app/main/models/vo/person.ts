export class Person {
    public id: string = undefined;
    public name: string = undefined;
    public surname: string = undefined;
    public phoneNumber: string = undefined;

    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     */
    static selectId: (item: Person) => string = item => item.id;
}
