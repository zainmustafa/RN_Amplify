/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Button, FlatList, Text, SafeAreaView } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';

import { createEmployee } from './src/graphql/mutations';
import { listEmployees } from './src/graphql/queries';
import config from './aws-exports';
API.configure(config);
PubSub.configure(config);

import { Employee } from "./src/components";

class App extends React.Component {
  state = { employees: [] }

  listAllEmployees = async () => {
    await API.graphql(graphqlOperation(listEmployees))
      .then(res => {
        if (res &&
          res.data &&
          res.data.listEmployees &&
          res.data.listEmployees.items) {
          this.setState({ employees: res.data.listEmployees.items })
        }
      });
  }

  createNewEmployee = async () => {
    const employee = {
      firstName: "Zain",
      lastName: "Mustafa",
      // addresses: {
      //   line1: "abc",
      //   line2: "def",
      //   city: "Karachi",
      //   state: "Sindh",
      //   zipCode: "09453",
      // },
      // skills: {
      //   name: "Coding"
      // }
    }
    await API.graphql(graphqlOperation(createEmployee, { input: employee }))
      .then(res => {
        setTimeout(() => {
          this.listAllEmployees();
        }, 1000)
      });
  }

  render() {
    const { employees } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        {employees && employees.length > 0 ?
          (
            <>
              <Text style={styles.title}>List of Employees</Text>
              <FlatList
                data={employees}
                renderItem={({ item }) => <Employee item={item} />}
                keyExtractor={item => item.id}
              />
              <View style={styles.btnContainer}>
                <Button onPress={this.createNewEmployee} color="#fff" title='Create New Employees' />
              </View>
            </>
          ) :
          (
            <View style={styles.btnContainer}>
              <Button onPress={this.listAllEmployees} color="#fff" title='Get Employees' />
            </View >
          )}
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#243553',
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    padding: 20,

  }
});

export default App;
