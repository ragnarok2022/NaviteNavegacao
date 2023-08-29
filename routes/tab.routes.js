import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Inicial from "../screens/Inicial";
import Disciplinas from "../screens/Disciplinas";
import Avaliacoes from "../screens/Avaliacoes";
import Biblioteca from "../screens/Biblioteca";

const Tab = createBottomTabNavigator()

// criar a função do arquivo com Emmet
// atalhos: rfc ou rnf

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
        name='Inicial'
        component={Inicial}
        options={{
            tabBarIcon: ({ color, size}) => <Feather name='home' color={color} size={size} />
        }}/>
        <Tab.Screen
        name='Disciplinas'
        component={Disciplinas}
        options={{
            tabBarIcon: ({ color, size}) => <Feather name='book' color={color} size={size} />
        }}
        />
        <Tab.Screen
        name='Avaliações'
        component={Avaliacoes}
        options={{
            tabBarIcon: ({ color, size}) => <Feather name='edit' color={color} size={size} />
        }}/>
        <Tab.Screen
        name='Biblioteca'
        component={Biblioteca}
        options={{
            tabBarIcon: ({ color, size}) => <Feather name='book-open' color={color} size={size} />
        }}/>
    </Tab.Navigator>
  )
}