import { Stack } from "expo-router";

export default function ProductsLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                title: 'Productos',
                }}
            />

            <Stack.Screen
                name="[id]"
                options={{
                title: 'Detalle de producto',
                }}
            />
        </Stack>
    );
}