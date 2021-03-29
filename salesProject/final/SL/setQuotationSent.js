import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput,
   TouchableOpacity, FlatList, Alert } from 'react-native';


//export default function App() {
export default class EditRemarks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lead_id: '',
      Quote: ''
    }
  }

  componentDidMount() {
    this.setState({
      lead_id: this.props.route.params.leads_id,
    })
    this.retrieve_QuoteSent();
  }

  retrieve_QuoteSent() {
    const url = `https://poggersfyp.mooo.com/Backend/retrieveRemarks.php?lead_id=${encodeURIComponent(this.props.route.params.leads_id)}`;
    fetch(url, {
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          quote: responseJson,
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  _Insert_Data_Into_MySQL() {
    if (this.validateQuote(this.state.Quote)) {
      const url = 'https://poggersfyp.mooo.com/Backend/setQuote.php';
      fetch(url,
        {
          method: 'POST',
          headers:
          {
            'Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              LD: this.state.lead_id,
              quote: this.state.Quote,
            })

        }).then((response) => response.json()).then((responseJsonFromServer) => {
          alert(responseJsonFromServer);

        }).catch((error) => {
          console.log(error);
        });
      this.props.navigation.navigate('Dashboard');
    } else {
      Alert.alert("Warning!", "Quote should only contain numbers!")
    }
  }

  validateQuote = (Quote) => {
    var re = /^[0-9]*$/;
    return re.test(Quote);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={this.state.quote}
            renderItem={({ item }) =>
              <View style={styles.RemarksC}>
                <Text style={styles.Remarks}>Quotation Sent</Text>
                <View style={styles.inputR}>
                  <Text style={{ marginTop: 6 }}>RM</Text>
                  {item.Quote_Sent != "" ?
                    <TextInput
                      defaultValue={item.Quote_Sent}
                      autoFocus={true}
                      editable={true}
                      keyboardShouldPersistTaps={handled}
                      keyboardType={'phone-pad'}
                      onChangeText={text => this.setState({ Quote: text })} />
                    :
                    <TextInput
                      placeholder="500"
                      autoFocus={true}
                      editable={true}
                      keyboardShouldPersistTaps={handled}
                      keyboardType={'phone-pad'}
                      onChangeText={text => this.setState({ Quote: text })}
                    />
                  }
                </View>
              </View>
            }
          />
          <View style={{ flexDirection: "row", alignSelf: 'center' }}>
            <TouchableOpacity
              style={styles.SubmitButtonR}
              onPress={() => { this.props.navigation.goBack() }}
            >
              <Text style={styles.SubmitR} >Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SubmitButtonR}
              onPress={() => { this._Insert_Data_Into_MySQL() }}
            >
              <Text style={styles.SubmitR} >Confirm</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: "10%"
  },

  RemarksC: {
    backgroundColor: "white",
  },

  Remarks: {
    color: "black",
    fontWeight: "bold",
  },

  inputR: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgrey',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row'
  },

  SubmitButtonR: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    width: '35%'
  },

  SubmitR: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },

});