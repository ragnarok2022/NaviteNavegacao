import { StyleSheet, View, Text, FlatList, Image } from "react-native"
import data from '../data.json'
import styles from "../styles";


export default function Disciplinas() {
    /* const materia = data.disciplinas.nome

    const corCartao = () => {
        if(materia == 'Português'){
            return {color: '#00ffff'}
        }
    } */

    return (
        <View style={styles.containerDisciplinas}>
            <FlatList
            data={data.disciplinas}
            keyExtractor={materia => materia.id}
            renderItem={({item}) => (
                <View style={styles.disciplinaCard}>
                <View style={styles.disciplinaNomeProf}>
                    <Text style={styles.disciplina}>{`${item.nome}`}</Text>
                    <Text style={styles.professor}>Professor(a): {`${item.professor}`}</Text>
                </View>
                <Image style={styles.iconeMateria} source={{ uri: `${item.icone}`}}/>
            </View>
            )}
            
            />
            {/* <View style={styles.disciplinaCard}>
                <View style={styles.disciplinaNomeProf}>
                    <Text style={styles.disciplina}>Matemática</Text>
                    <Text style={styles.professor}>Prof. Fulano</Text>
                </View>
                <MaterialCommunityIcons name="math-compass" size={40} color="black" />
            </View> */}
        </View>

    )
}
