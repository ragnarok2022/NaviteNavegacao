import { StyleSheet, View, Text } from "react-native"

export default function Tela2(){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Essa é a tela 2</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    titulo: {
        color: 'white'
    }
})