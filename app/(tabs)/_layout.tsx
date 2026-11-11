import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ea580c',
                tabBarInactiveTintColor: '#64748b',
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="products"
                options={{
                title: 'Productos',
                }}
            />
        </Tabs>
    );
}