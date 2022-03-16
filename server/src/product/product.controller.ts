import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

import { Product } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly producttService : ProductService){}

    @Get()
    getProduct(): Product[] {
        return this.producttService.getAllProducts()
    }
}
