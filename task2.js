export class FriendNames {
    // El constructor toma tres argumentos: name1, name2 y name3
    constructor(name1, name2, name3) {
        // Asignamos los valores a las propiedades correspondientes
        this.name1 = name1;
        this.name2 = name2;
        this.name3 = name3;
    }
}

// Aquí se crea una nueva instancia de la clase FriendNames utilizando 'new'
const friendNames = new FriendNames('Karim', 'Uli', 'Georgina');

// Imprimimos la instancia creada
console.log(friendNames);
