import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game Is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          style={styles.image}
          //   source={require("../assets/success.png")}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zX7BMAj-hX8J5lFX3aRacxFr-ttM2TIieA&usqp=CAU",
          }}
          resizeMode="cover"
        ></Image>
      </View>
      <BodyText>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text > rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <MainButton
        onPress={props.onRestart}
      >NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    transform: [{ translateY: -980 }],
    transform: [{ scale: 1 }]
  },
  imageContainer: {
    borderRadius: 200,
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",

  },
  highlight: {
      color: Colors.primary
  }
});

export default GameOverScreen;
