export class ShoppingCart {
    name: string;
    imageUrl:  string;
    quantity: number;
    
    constructor(name: string, imageUrl: string, quantity: number) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.quantity = quantity;
    }
}