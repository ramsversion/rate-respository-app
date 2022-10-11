import React from 'react';
import { Image, View, StyleSheet, Platform } from 'react-native';
import StyledText from './StyledText.jsx';
import RepositoryStarts from './RepositoryStarts.jsx'
import theme from '../theme.js';


const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
        <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        </View>
        <View style={{ flex: 1 }}>
            <StyledText fontWeight='bold'>FullName: {fullName} </StyledText>
            <StyledText color='secondary'> {description} </StyledText>
            <StyledText style={styles.language}> {language} </StyledText>
        </View>
    </View>
)

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.containder}>
        <RepositoryItemHeader {...props} />
        <RepositoryStarts {...props} />
    </View>
)

const styles = StyleSheet.create({
    containder: {
        padding: 20,
        paddingVertical:5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        marginVertical: 4,
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