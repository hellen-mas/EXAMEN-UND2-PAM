import { Stack, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { Image, View, Text, ActivityIndicator, ScrollView } from "react-native";
import { ProductDetail } from "../../../infraestructure/interfaces/product.interface";
import { getProductByIdAction } from "../../../services/actions/get-product-by-id.action";

const MovieScreen = () => {
    const [ product, setProduct ] = useState<ProductDetail>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const {id} = useLocalSearchParams();

    useEffect(() => {
        let active = true;

        const loadProductDetail = async () => {
            try {
                const result = await getProductByIdAction(Number(id));
                if (active) setProduct(result);
            } catch (error) {
                if (active) setError("No se pudo cargar los productos");
            } finally {
                if (active) setLoading(false);
            }
        }

        loadProductDetail();

        return () => {
            active = false;
        }
    }, [id]);

    if (loading) {
        return (
            <View className='flex-1 items-center justify-center'>
                <ActivityIndicator size='large' />
                <Text className='mt-3'>Cargando productos...</Text>
            </View>
        )
    }

    if (error) {
        return (
            <View className='flex-1 items-center justify-center'>
                <Text className='text-center'>{error}</Text>
            </View>
        )
    }

    if (!product) return null;

    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <Stack.Screen options={{ title: product.name }} />

                <Image
                    source={{ uri: product.image }}
                    style={{ width: '100%', height: 250 }}
                />

                <View style={{ padding: 20, gap: 12 }}>
                    <Text
                    style={{ fontSize: 26, fontWeight: 'bold' }}
                    >
                    {product.name}
                    </Text>

                    <Text>Descripcion: {product.description}</Text>
                    <Text>Precio: {product.price}</Text>
                    <Text>Categoria: {product.category}</Text>  
                </View>
                </ScrollView>
        </>
    )
}

export default MovieScreen;