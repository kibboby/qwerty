import React, { Component } from 'react';
// import Navigation from './navigation_SA.js';
import {
    StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class MAIN extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./img/backgroundImg.png')}
                    style={styles.backgroundImage}>
                    <View flexDirection='row'>
                        <Text style={styles.text}>Report</Text>
                    </View>

                    <ScrollView style={styles.bckground}>
                        <View style={styles.box}>
                            <View flexDirection="row" justifyContent="space-between" style={{ margin: 5 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}> 2 / 03 / 2021</Text>
                                <Text style={{ color: '#F8C018', fontSize: 14 }}>Mon</Text>
                            </View>
                            <TouchableOpacity style={{ paddingLeft: 5, paddingTop: 10, flexDirection: "row", margin: 5 }}>
                                <Icon name="triangle" size={10} color="#F8C018" style={{ paddingTop: 5, paddingRight: 5 }} />
                                <Text>0 8 : 0 0 </Text>
                                <Text style={{ color: '#F8C018', paddingLeft: 5 }}>Call</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingLeft: 5, paddingTop: 10, flexDirection: "row", margin: 5 }}>
                                <Icon name="triangle" size={10} color="#F8C018" style={{ paddingTop: 5, paddingRight: 5 }} />
                                <Text>0 8 : 0 0 </Text>
                                <Text style={{ color: '#F8C018', paddingLeft: 5 }}>Appointment</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                    <TouchableOpacity style={styles.roundButton3} >
                        <Icon name="filter" size={30} color="black" style={styles.icon} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover"
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: '3%',
        flex: 1
    },
    bckground: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: "80%",
        height: "70%",
        alignSelf: 'center',
        marginTop: '13%',
        borderRadius: 10,
        marginBottom: '6%'
    },

    roundButton3: {
        width: 41,
        height: 41,
        borderRadius: 41,
        marginTop: "3%",
        marginRight: '5%',
        marginBottom: '6%',
        backgroundColor: '#F8C018',
        alignSelf: 'flex-end',
    },
    icon: {
        alignSelf: 'center',
        marginTop: 5
    },
    box: {
        alignSelf: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        width: "91%",
        maxHeight: "50%",
        justifyContent: 'space-evenly',
    },
})
