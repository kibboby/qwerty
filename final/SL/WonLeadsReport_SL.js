import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlertIcon from 'react-native-vector-icons/AntDesign';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this._retrieveList();
    this.FocusSubscription = this.props.navigation.addListener(
      'focus', () => {
        this._retrieveList();
      }
    );

  }

  _retrieveList() {
    return fetch('https://poggersfyp.mooo.com/Backend/WonLeads.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        })
      }).catch((error) => {
        console.error(error);
      });
  }

  redirectPage(LD, SN) {
    this.props.navigation.navigate('Lead Detail',
      {
        leadName: LD, SalesName: SN
      })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.firstCol}>Leads</Text>
          <Text style={styles.SecThirdCol}>Quotation Sent</Text>
          <Text style={styles.SecThirdCol}>Quotation Agreed</Text>
        </View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <View style={styles.cardView}>
              <Text style={styles.firstCol}>{item.lead_name}   ({item.lead_company})</Text>
              <Text style={styles.SecThirdCol} >RM{item.Quote_Sent}</Text>
              {item.Quote_Agreed != "" ?
                <Text style={styles.SecThirdCol}>RM{item.Quote_Agreed}</Text>
                :
                <View style={styles.SecThirdColEmpty}>
                  <AlertIcon name="exclamationcircleo" size={15} color="red" style={styles.icon} />
                </View>
              }
            </View>
          }
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    paddingTop: 30,
    backgroundColor: '#fff',
    marginTop: 10
  },
  cardView: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0,
    textAlign: 'center'
  },
  header: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: 'lightgrey'
  },
  SecThirdCol: {
    fontSize: 12,
    width: '30%',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  },
  firstCol: {
    fontSize: 12,
    width: '40%',
    padding: 5,
    textAlign: 'left',
    paddingLeft: 15
  },
  icon: {
    padding: 5,
    marginTop: 2,
    marginLeft: 5,
    alignSelf: 'center'
  },
  SecThirdColEmpty: {
    fontSize: 12,
    width: '30%',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
  },
});