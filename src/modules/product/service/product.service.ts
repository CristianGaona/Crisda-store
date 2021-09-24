import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  private counterId: number = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Productc 1',
      description: 'Es un producto',
      price: 122,
      stock: 2,
      image: 'url de la imagen',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: any){
    const product = this.findOne(id);
    if (product){
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload
      }
      return this.products[index];
    }
    return null;
  }


}
