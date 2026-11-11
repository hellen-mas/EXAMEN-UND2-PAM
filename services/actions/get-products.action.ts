import { productApi } from "../api/product-api";
import type { Product } from "../../infraestructure/interfaces/product.interface";
import type { ProductDto } from "../../infraestructure/responses/product.response";
import { ProductMapper } from "../../infraestructure/mappers/product.mapper";

export const getProductsAction = async (): Promise<Product[]> => {
    const { data } = await productApi.get<ProductDto[]>(
        '/products'
    );

    return data.map(ProductMapper.fromDtoToProduct);
};