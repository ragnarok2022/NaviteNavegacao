import { StyleSheet, View, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'


export default function Biblioteca(){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Biblioteca</Text>
            <Ionicons name="library" size={50}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    titulo: {
        fontSize: 30
    }
})