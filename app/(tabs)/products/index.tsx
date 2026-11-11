import { Image, FlatList, View, Text, ActivityIndicator, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Product } from "../../../infraestructure/interfaces/product.interface";
import { getProductsAction } from "../../../services/actions/get-products.action";
import { router } from "expo-router";


const MoviesScreen = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;
        const loadProducts = async () => {
            try {
                const result = await getProductsAction();
                if (active) setProducts(result);
            } catch(error) {
                if (active) setError("No se pudo cargar las películas");
            } finally {
                if (active) setLoading(false);
            }
        }

        loadProducts();

        return () => {
            active = false;
        }
    }, [])

    if (loading) {
        return (
            <View className='flex-1 align-items-center justify-content-center'>
                <ActivityIndicator size='large' />
                <Text className='mt-3'>Cargando productos...</Text>
            </View>
        )
    }

    if (error) {
        return (
            <View className='flex-1 align-items-center justify-content-center'>
                <Text className='text-center'>{error}</Text>
            </View>
        )
    }

    return (
        <View className='flex-1'>
            <FlatList
                numColumns={2}
                data = {products}
                keyExtractor={(m) => String(m.id)}
                renderItem={({item}) => (
                    <Pressable
                        className="flex-1 p-2"
                        onPress={() => router.push({
                            pathname: './products/[id]',
                            params: { id: item.id.toString()}
                        })}
                    >
                        <View className='flex-1 p-2'>
                            <Image 
                                source={{ uri:item.image }}
                                className='w-full aspect-[2/3] rounded-xl'
                            />
                            <Text className='font-bold'>{item.name}</Text>
                            <Text className='text-slate-400'>{item.price}</Text>
                        </View>
                    </Pressable>
                    
                )}
            />
        </View>
    )
}

export default MoviesScreen;