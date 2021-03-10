import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, List, Divider } from 'react-native-paper';
const SalespersonAccountSuperAdmin = () => {
    return (
        <View
            style={{
                flex: 1,
                padding:'10%'
            }}>
            <ImageBackground source={require('./img/backgroundImg.png')}
                style={styles.backgroundImage}>
            <Text style={{color:'white', fontSize:25}}>This is leads Task Page</Text>
            </ImageBackground>
        </View>
    )
};

export default SalespersonAccountSuperAdmin;

const styles = StyleSheet.create({
    profileImg: {
        borderRadius: 50,
        marginStart: 10,
        marginTop: 2.5,
        height: 70,
        width: 70,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1,
        paddingStart: 15,
        paddingTop: 4
    },

    backgroundImage: {
        flex: 1,
        resizeMode: "cover"
      },

    Username: {
        marginTop: 10,
        fontSize: 20,
        alignItems: 'center'
    },
    designation: {
        fontSize: 12,
    },
    Icon:{
        flexDirection: 'row',
        marginTop: 10,
    }    ,
    Direction: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'baseline'
    },
    Text: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 14,
        marginBottom: 5
    },
    Info: {
        width: 200,
        marginTop: 2.5,
        marginStart: 35,
        fontSize: 14,
    },
    card2: {
      margin: 10,
      borderRadius: 20,
      borderWidth:  1,
  },
});