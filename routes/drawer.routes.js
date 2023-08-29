import { createDrawerNavigator } from "@react-navigation/drawer";

import { Feather } from '@expo/vector-icons';

import TabRoutes from "../routes/tab.routes";
import StackRoutes from "./stack.routes";

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator screenOptions={{ title: ''}}>
            <Drawer.Screen
            name="inicio"
            component={TabRoutes}
            options={{
                drawerLabel: "Início",
                drawerIcon: ({ color, size}) => <Feather name='home' color={color} size={size} />
            }}
            />
            <Drawer.Screen
            name="disciplinas"
            component={StackRoutes}
            options={{
                drawerLabel: "Disciplinas",
                drawerIcon: ({ color, size}) => <Feather name='book' color={color} size={size} />
            }}
            />
            <Drawer.Screen
            name="avaliacoes"
            component={StackRoutes}
            options={{
                drawerLabel: "Avaliações",
                drawerIcon: ({ color, size}) => <Feather name='edit' color={color} size={size} />
            }}
            />
            <Drawer.Screen
            name="biblioteca"
            component={TabRoutes}
            options={{
                drawerLabel: "Biblioteca",
                drawerIcon: ({ color, size}) => <Feather name='book-open' color={color} size={size} />
            }}
            />
        </Drawer.Navigator>
    )
}
