import React from "react";
import Texto from "../../../components/texto";
import { StyleSheet, View, Image } from 'react-native';

export default function Item({ item: { nome, imagem } }) {

    return <>
        <View style={styles.item}>
            <Image source={imagem} style={styles.imagem} />
            <Texto style={styles.nome}>{nome}</Texto>
        </View>
    </>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal:16,
        alignItems: "center",
    },
    imagem: {
        height: 46,
        width: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    },
})