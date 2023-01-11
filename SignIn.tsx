import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <View
        style={[styles.signInChild, styles.signLayout, styles.signLayout1]}
      />
      <View
        style={[styles.signInItem, styles.signLayout, styles.signLayout1]}
      />
      <Text style={styles.arSuitCreatorContainer}>
        <Text style={styles.arSuitCreator}>
          <Text style={styles.arSuitCreator1}>{`AR SUIT CREATOR `}</Text>
        </Text>
        <Text style={styles.yourDigitalTailor}>
          <Text style={styles.yourDigitalTailor1}>Your Digital Tailor</Text>
        </Text>
      </Text>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Text
        style={[
          styles.emailOrUsername,
          styles.loginContainerTypo,
          styles.passwordPosition,
        ]}
      >{`Email or username `}</Text>
      <Pressable
        style={[styles.signInInner, styles.signLayout]}
        onPress={() => navigation.navigate("ARCam")}
      />
      <Text style={[styles.logIn, styles.loginContainerTypo]}>Log in</Text>
      <Text
        style={[
          styles.forgotYourLoginContainer,
          styles.loginContainerTypo,
          styles.passwordPosition,
        ]}
      >
        <Text style={styles.forgotYourLogin}>Forgot your login details?</Text>
        <Text style={styles.getHelpLogging}>Get help logging in</Text>
        <Text style={styles.text}>.</Text>
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={[styles.or, styles.loginContainerTypo]}>OR</Text>
      <Text
        style={[
          styles.password,
          styles.loginContainerTypo,
          styles.passwordPosition,
        ]}
      >
        Password
      </Text>
      <Image
        style={[styles.signInChild1, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Pressable
        style={[styles.dontHaveAnContainer, styles.loginContainerTypo]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.forgotYourLogin}>Don’t have an account?</Text>
        <Text style={styles.text1}>{` `}</Text>
        <Text style={styles.getHelpLogging}>Sign up.</Text>
      </Pressable>
      <Text style={[styles.login, styles.loginContainerTypo]}>LOGIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signLayout: {
    height: 38,
    width: 205,
    borderRadius: Border.br_md,
    left: 78,
    position: "absolute",
  },
  signLayout1: {
    backgroundColor: Color.gray_100,
    width: 205,
    borderRadius: Border.br_md,
    left: 78,
  },
  loginContainerTypo: {
    fontFamily: FontFamily.abhayaLibre,
    textAlign: "left",
    position: "absolute",
  },
  passwordPosition: {
    left: 86,
    fontFamily: FontFamily.abhayaLibre,
  },
  vectorIconPosition: {
    height: 1,
    top: 593,
    position: "absolute",
  },
  signInChild: {
    top: 367,
  },
  signInItem: {
    top: 314,
  },
  arSuitCreator1: {
    fontFamily: FontFamily.atkinsonHyperlegible,
    color: Color.indigo_300,
    fontSize: FontSize.size_base,
  },
  arSuitCreator: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  yourDigitalTailor1: {
    fontFamily: FontFamily.amstelvarAlpha,
    color: Color.green_100,
    fontSize: FontSize.size_sm,
  },
  yourDigitalTailor: {
    margin: Margin.m_md,
  },
  arSuitCreatorContainer: {
    top: 214,
    left: 129,
    width: 116,
    height: 34,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    position: "absolute",
  },
  image1Icon: {
    top: 68,
    left: 90,
    width: 170,
    height: 146,
    position: "absolute",
  },
  emailOrUsername: {
    top: 326,
    color: Color.gray_200,
    fontSize: FontSize.size_base,
  },
  signInInner: {
    top: 422,
    backgroundColor: Color.indigo_300,
    width: 205,
    borderRadius: Border.br_md,
    left: 78,
  },
  logIn: {
    top: 434,
    left: 164,
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  forgotYourLogin: {
    color: Color.gray_200,
  },
  getHelpLogging: {
    color: Color.green_100,
  },
  text: {
    color: "#146a06",
  },
  forgotYourLoginContainer: {
    top: 468,
    fontSize: FontSize.size_sm,
  },
  vectorIcon: {
    left: 15,
    width: 141,
  },
  or: {
    top: 586,
    left: 168,
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  password: {
    top: 379,
    color: Color.gray_200,
    fontSize: FontSize.size_base,
  },
  signInChild1: {
    left: 198,
    width: 137,
  },
  text1: {
    color: Color.black,
  },
  dontHaveAnContainer: {
    top: 600,
    left: 115,
    fontSize: FontSize.size_sm,
  },
  login: {
    top: 283,
    left: 159,
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  signIn: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default SignIn;
