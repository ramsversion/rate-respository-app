import React from 'react';;
import { View } from 'react-native';
import StyledText from './StyledText.jsx';

const parseThousands = value => {
    return value >= 1000
        ? `${Math.round(value / 100) / 100}k`
        : String(value)
}

const RepositoryStarts = props => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <StyledText aling='center' fontWeight='bold'>{parseThousands(props.stargazersCount)} </StyledText>
                <StyledText aling='center' >Stars</StyledText>
            </View>
            <View>
                <StyledText aling='center' fontWeight='bold'>{parseThousands(props.forksCount)} </StyledText>
                <StyledText aling='center' >Forks</StyledText>
            </View>
            <View>
                <StyledText aling='center' fontWeight='bold'>{parseThousands(props.reviewCount)} </StyledText>
                <StyledText aling='center'>Review</StyledText>
            </View>
            <View>
                <StyledText aling='center' fontWeight='bold'>{parseThousands(props.reviewCount)}</StyledText>
                <StyledText aling='center'>Review</StyledText>
            </View>
        </View>
    );
};

export default RepositoryStarts;