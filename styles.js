import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerInicial: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    titulo: {
        fontSize: 30
    },
    alunos: {
        fontSize: 16
    },
    containerDisciplinas: {
        backgroundColor: '#fff',
        alignItems: 'flex-start'
    },
    titulo: {
        fontSize: 30
    },
    disciplinaCard: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginVertical: 180,
        marginHorizontal: 20,
    },
    disciplina: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    professor: {
        fontSize: 18
    },
    iconeMateria: {
        width: 40,
        height: 40
    }
})

export default styles

