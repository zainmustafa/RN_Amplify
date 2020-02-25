import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';

import { deleteEmployee } from '../graphql/mutations';

async function createNewEmployee() {
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
    await API.graphql(graphqlOperation(deleteEmployee, { input: employee }))
        .then(res => {
            console.log({ res })
        });
}

const Employee = ({ item }) => {
    return (
        <View style={styles.employeeContainer}>
            <Text style={styles.sectionDescription}>{item.firstName} {item.lastName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    employeeContainer: {
        flex: 1,
        height: 60,
        paddingHorizontal: 24,
        justifyContent: 'center',
        borderBottomColor: "#000",
        backgroundColor: '#ddeeff',
        borderRadius: 8,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    sectionDescription: {
        fontSize: 18,
        fontWeight: '400',
    }
});

export default Employee;
