import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Botao from "../../../components/botao";
import Texto from '../../../components/texto';

export default function Detalhes({ logoFazenda, nomeCesta, nomeFazenda, descricao, preco, botao }) {
    return <>
        <View style={styles.cesta}>
            <Texto style={styles.nome}>{nomeCesta} </Texto>
            <View style={styles.fazenda}>
                <Image source={logoFazenda} style={styles.imagemFazenda} />
                <Texto style={styles.nomefazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={styles.descricao}>{descricao}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            <Botao style={styles.botao} onPress={() => { alert('Compra Mizeraver') }}>{botao}</Botao>
        </View>
    </>
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomefazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
    }
});