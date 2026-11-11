import { productApi } from "../api/product-api";
import type { ProductDetail } from "../../infraestructure/interfaces/product.interface";
import type { ProductDto } from "../../infraestructure/responses/product.response";
import { ProductMapper } from "../../infraestructure/mappers/product.mapper";

export const getProductByIdAction = async (
    id: number
): Promise<ProductDetail> => {
    const { data } = await productApi.get<ProductDto>(
        `/products/${id}`
    );

    return ProductMapper.fromDtoToProductDetail(data);
};