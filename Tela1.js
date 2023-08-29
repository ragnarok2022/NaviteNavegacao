import { StyleSheet, View, Text } from "react-native"


export default function Tela1(){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Essa é a tela 1</Text>
            <Text>OI</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    titulo: {
        color: 'white'
    }
})
