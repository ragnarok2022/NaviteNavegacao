import { StyleSheet, View, Text } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';


export default function Avaliacoes(){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Avaliações</Text>
            <SimpleLineIcons name="note" size={50} color="black" />
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
