import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import StyledText from './StyledText.jsx';
import RepositoryStarts from './RepositoryStarts.jsx'
import theme from '../theme.js';


const RepositoryItem = (props) => (
    <View key={props.id} style={styles.containder}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
        <StyledText fontSize='subheading' fontWeight='bold'>FullName: {props.fullName} </StyledText>
        <StyledText> {props.description} </StyledText>
        <StyledText style={styles.language}> {props.language} </StyledText>
        <RepositoryStarts {...props} />
    </View>
)

const styles = StyleSheet.create({
    containder: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
});
export default RepositoryItem;