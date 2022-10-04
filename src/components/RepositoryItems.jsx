import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containder: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5,
    }
});
const RepositoryItem = (props) => (
    <View key={props.id} style={styles.containder}>
        <Text style={styles.strong}>id: {props.id} </Text>
        <Text>FullName: {props.fullName} </Text>
        <Text>Description: {props.description} </Text>
        <Text>Language: {props.language} </Text>
        <Text>Stars: {props.stargazersCount} </Text>
        <Text>Forks: {props.forksCount} </Text>
        <Text>Review: {props.reviewCount} </Text>
        <Text>Rating: {props.ratingAverage} </Text>
    </View>
)

export default RepositoryItem;