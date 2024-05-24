import React from 'react';
import { View, Text, StyleSheet } from 'react-native';




const Sobre = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre mim</Text>
            <Text style={styles.texto}>Me chamo Priscila, tenho 21 anos e sou estudante do 3º período de Ads pelo embarque digital</Text>
            <Text style={styles.titulo}>Formação</Text>
            <Text style={styles.texto}>FACULDADE SENAC PERNAMBUCO</Text>
            <Text style={styles.texto}>Março de 2023 - PRESENTE</Text>
            <Text style={styles.titulo}>Habilidades</Text>
            <Text style={styles.texto}>Minha principal habilidade é com prototipação no figma</Text>
            <Text style={styles.titulo}>Idiomas</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    texto: {
        justifyContent:'center',
        padding:10,
        fontSize: 15,
    },
});

export default Sobre;
