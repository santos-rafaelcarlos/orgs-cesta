import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import topo from '../../../../assets/topo.png'
import Texto from '../../../components/texto';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
    return <>
        <Image source={topo} style={styles.topo} />
        <Texto style={styles.titulo}>{titulo}</Texto>
    </>

}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: width,
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
});