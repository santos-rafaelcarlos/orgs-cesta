import React from "react";
import Detalhes from "./components/detalhes";
import Item from "./components/item";
import Topo from './components/topo';
import { FlatList, StyleSheet } from 'react-native';
import Texto from "../../components/texto";
export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <Detalhes {...detalhes} />
                    <Texto style={styles.titulo}>{itens.titulo}</Texto>
                </>
            }} />
    </>
}

const styles = StyleSheet.create({
    titulo: {
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8,
        textAlign: "center",
    },
});
