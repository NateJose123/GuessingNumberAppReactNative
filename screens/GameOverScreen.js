import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Colors from "../constants/colors";

const GameOverScreen = props => {
    return <View style={styles.screen}>
        <Text>The Game Is Over!</Text>
        <Text>Number of rounds: {props.roundsNumber}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <Button color={Colors.primary} title="New Game" onPress={props.onRestart}/>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default GameOverScreen;