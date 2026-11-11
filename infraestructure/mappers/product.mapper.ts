import type { Product, ProductDetail } from "../interfaces/product.interface";
import type { ProductDto } from "../responses/product.response";

export class ProductMapper {
    static fromDtoToProduct(dto: ProductDto): Product {
        return {
            id: dto.id,
            name: dto.title,
            price: dto.price,
            image: dto.image,
        };
    }

    static fromDtoToProductDetail = (dto: ProductDto): ProductDetail => {
        return {
            id: dto.id,
            name: dto.title,
            price: dto.price,
            image: dto.image,
            description: dto.description,
            category: dto.category,
        }
    }
}