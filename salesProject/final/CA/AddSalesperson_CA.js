import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import {firebase} from './firebase.js';
export default class App extends Component {

    constructor() {
        super();
        this.state = {
            Name: '',
            password: '',
            designation: '',
            email: '',
            contact: '',
        }
    }

    _onPressCancel() {
        alert('Cancel')
    }

    _onPressSave() {
        alert('Save')
    }

    updateInputVal = (val, prop) =>{
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    registerUser = () =>{
        var db = firebase.firestore();
        db.collection("users").add({
            name: this.state.Name,
            password: this.state.password,
            designation: this.state.designation,
            email: this.state.email,
            contact: this.state.contact
        })
        .then((docRef) =>{
            console.log("Document written with ID:", docRef.id);
        })
        .catch((error)=>{
            console.log("Error adding document:", error);
        });
    }

    // _Insert_Data_Into_MySQL() {
    //     const url = 'http://localhost:80/BAckend/salespersonRegister.php';
    //     fetch( url,
    //         {
    //             method: 'POST',
    //             headers:
    //             {
    //                 'Origin': '*',
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(
    //                 {
    //                     username: this.state.SALES_username,
    //                     Designation: this.state.SALES_designation,
    //                     sales_name: this.state.SALES_name,
    //                     sales_email: this.state.SALES_email,
    //                     sales_contact: this.state.SALES_contact
    //                 })

    //         }).then((response) => response.json()).then((responseJsonFromServer) => {
    //             alert(responseJsonFromServer);

    //         }).catch((error) => {
    //             console.log(error);
    //         });
    // }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.instruction}>Name</Text>
                    <TextInput
                        //secureTextEntry={true} 
                        style={styles.input}
                        onChangeText={(val) => this.updateInputVal(val, 'Name')}
                    />

                    <Text style={styles.instruction}>Password</Text>
                    <TextInput
                        //secureTextEntry={true} 
                        style={styles.input}
                        onChangeText={(val) => this.updateInputVal(val, 'password')}
                    />

                    <Text style={styles.instruction}>Contact</Text>
                    <TextInput
                        //secureTextEntry={true} 
                        style={styles.input}
                        onChangeText={(val) => this.updateInputVal(val, 'contact')}
                    />

                    <Text style={styles.instruction}>Email</Text>
                    <TextInput
                        //secureTextEntry={true} 
                        style={styles.input}
                        onChangeText={(val) => this.updateInputVal(val, 'email')}
                    />

                    <Text style={styles.instruction}>Designation</Text>
                    <TextInput
                        //secureTextEntry={true} 
                        style={styles.input}
                        onChangeText={(val) => this.updateInputVal(val, 'designation')}
                    />


                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.Button}
                            //onPress={this._onPressLoginButton}
                            //disabled={!this.state.isFormValid}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Text style={styles.ButtonContent}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.Button}
                            //onPress={this._onPressLoginButton}
                            //disabled={!this.state.isFormValid}
                            onPress={() => this.registerUser()}
                        >
                            <Text style={styles.ButtonContent}>Save</Text>
                        </TouchableOpacity>
                    </View>

                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: "10%",
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    instruction: {
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
    },

    input: {
        backgroundColor: "lightgrey",
        //width:'100%',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 20,
    },

    row: {
        flexDirection: "row",
        justifyContent: 'space-around',
    },

    Button: {
        backgroundColor: "black",
        padding: 10,
        width: 130,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    ButtonContent: {
        textAlign: 'center',
        color: "white",
        fontWeight: 'bold',
    },

});
