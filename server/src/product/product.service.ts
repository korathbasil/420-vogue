import { Injectable } from '@nestjs/common';

export class Product {
    id: string
    name: string

    constructor(_id: string, _name: string) {
        this.id = _id;
        this.name = _name;
    }
}

@Injectable()
export class ProductService {
    getAllProducts(): Product[] {
        const products = [
            new Product("23232", "James")
        ];

        return products;
    }
}
