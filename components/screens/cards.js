import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';


const stylesHeader = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",

    },
    row1: {
        flex: 2,
        backgroundColor: "white"
    },
    row2: {
        flex: 1,
        backgroundColor: "white",

    },
    userContainer: {
        flex: 1,
        paddingLeft: 20,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    bienvenida: {
        fontSize: 13,
        color: "grey"
    },
    nombreUsuario: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold"
    }
})

const Header = () => {
    return (
        <View style={stylesHeader.container}>
            <View style={stylesHeader.row1}>
                <View style={stylesHeader.userContainer}>
                    <Text style={stylesHeader.bienvenida}>Buenos dias</Text>
                    <Text style={stylesHeader.nombreUsuario}>Dua Lipa</Text>
                </View>
            </View>
            <View style={stylesHeader.row2}>
                <View style={{
                    flex: 1, alignItems: "center", justifyContent: "space-around", flexDirection: "row", paddingRight: 20,
                }}>
                    <Icon
                        name='bell'
                        type='font-awesome'
                        size={20}
                        color='black' />
                    <Avatar
                        rounded
                        size="medium"
                        source={{
                            uri:
                                'data:image/jpeg;base64,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',
                        }}
                    />
                </View>
            </View>


        </View>
    )
}

export default Header;
