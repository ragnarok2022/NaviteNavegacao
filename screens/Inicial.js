import { StyleSheet, View, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import data from '../data.json/'
import styles from '../styles/'


export default function Inicial(){
    return (
        <View style={styles.containerInicial}>
            {data.alunos.map(aluno => (
                <View>
                    <Text style={styles.alunos} key={aluno.id}>Aluno(a): {`${aluno.nome}`}</Text>
                    <Text style={styles.alunos} key={aluno.id}>Turma: {`${aluno.turma}`}</Text>
                </View>
            ))}
        </View>
        
    )
}