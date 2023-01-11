import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Margin } from "../GlobalStyles";

const DisableAccount1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.disableAccount1}>
      <Text style={styles.temporarilyDisableAccount}>
        Temporarily disable account?
      </Text>
      <Image
        style={styles.disableAccount1Child}
        resizeMode="cover"
        source={require("../assets/vector-6.png")}
      />
      <Image
        style={styles.disableAccount1Item}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={styles.image18Icon}
        resizeMode="cover"
        source={require("../assets/image-181.png")}
      />
      <Text
        style={[
          styles.successYourAccountContainer,
          styles.continue1Typo,
          styles.disableAccount1InnerPosition,
        ]}
      >
        <Text
          style={styles.successYourAccount}
        >{`Success, your Account `}</Text>
        <Text
          style={styles.hasBeenTemporarily}
        >{`has been temporarily disabled. `}</Text>
      </Text>
      <Image
        style={[
          styles.disableAccount1Inner,
          styles.disableAccount1InnerPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Pressable
        style={styles.continue}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.continue1Typo}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  continue1Typo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
  },
  disableAccount1InnerPosition: {
    left: 73,
    position: "absolute",
  },
  temporarilyDisableAccount: {
    top: 15,
    left: 63,
    color: Color.black,
    width: 207,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  disableAccount1Child: {
    top: 575,
    left: 1,
    width: 359,
    height: 1,
    position: "absolute",
  },
  disableAccount1Item: {
    top: 86,
    left: 42,
    width: 261,
    height: 250,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  image18Icon: {
    top: 121,
    left: 116,
    width: 113,
    height: 100,
    position: "absolute",
  },
  successYourAccount: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  hasBeenTemporarily: {
    margin: Margin.m_md,
  },
  successYourAccountContainer: {
    top: 269,
    width: 214,
    height: 67,
  },
  disableAccount1Inner: {
    top: 384,
    width: 205,
    height: 38,
    borderRadius: Border.br_md,
  },
  continue: {
    left: 145,
    top: 393,
    position: "absolute",
  },
  disableAccount1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default DisableAccount1;
