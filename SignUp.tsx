import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View
        style={[
          styles.signUpChild,
          styles.signChildLayout,
          styles.signChildLayout1,
        ]}
      />
      <View
        style={[
          styles.signUpItem,
          styles.signChildLayout,
          styles.signChildLayout1,
        ]}
      />
      <Text
        style={[styles.confirmPassword, styles.enterTypo, styles.enterPosition]}
      >
        Confirm Password
      </Text>
      <View
        style={[
          styles.signUpInner,
          styles.signChildLayout,
          styles.signChildLayout1,
        ]}
      />
      <View
        style={[
          styles.rectangleView,
          styles.signChildLayout,
          styles.signChildLayout1,
        ]}
      />
      <View
        style={[
          styles.signUpChild1,
          styles.signChildLayout,
          styles.signChildLayout1,
        ]}
      />
      <Text
        style={[styles.enterFirstName, styles.enterTypo, styles.enterPosition]}
      >
        Enter first name
      </Text>
      <Text
        style={[styles.enterLastName, styles.enterTypo, styles.enterPosition]}
      >
        Enter last name
      </Text>
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
        style={[styles.emailOrPhone, styles.enterTypo, styles.enterPosition]}
      >{`Email or phone number  `}</Text>
      <Image
        style={[styles.rectangleIcon, styles.signChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Pressable
        style={styles.signUp1}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={[styles.signUp2, styles.enterTypo]}>Sign up</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={[styles.or, styles.enterTypo]}>OR</Text>
      <Text
        style={[styles.enterPassword, styles.enterTypo, styles.enterPosition]}
      >
        Enter Password
      </Text>
      <Image
        style={[styles.signUpChild2, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Pressable
        style={[styles.haveAnAccountContainer, styles.enterTypo]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.haveAnAccount}> have an account?</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.signIn}>Sign in.</Text>
      </Pressable>
      <Text style={[styles.signup, styles.enterTypo]}>SIGNUP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signChildLayout: {
    height: 38,
    width: 205,
    borderRadius: Border.br_md,
    left: 73,
    position: "absolute",
  },
  signChildLayout1: {
    backgroundColor: Color.gray_100,
    width: 205,
    borderRadius: Border.br_md,
    left: 73,
  },
  enterTypo: {
    fontFamily: FontFamily.abhayaLibre,
    textAlign: "left",
  },
  enterPosition: {
    left: 78,
    color: Color.gray_200,
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  vectorIconPosition: {
    height: 1,
    top: 593,
    position: "absolute",
  },
  signUpChild: {
    top: 365,
  },
  signUpItem: {
    top: 458,
  },
  confirmPassword: {
    top: 470,
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
  },
  signUpInner: {
    top: 271,
  },
  rectangleView: {
    top: 411,
  },
  signUpChild1: {
    top: 317,
  },
  enterFirstName: {
    top: 330,
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
  },
  enterLastName: {
    top: 380,
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
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
  emailOrPhone: {
    top: 283,
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
  },
  rectangleIcon: {
    top: 507,
    width: 205,
    borderRadius: Border.br_md,
    left: 73,
  },
  signUp2: {
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  signUp1: {
    left: 157,
    top: 519,
    position: "absolute",
  },
  vectorIcon: {
    left: 15,
    width: 141,
  },
  or: {
    top: 586,
    left: 168,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  enterPassword: {
    top: 423,
    textAlign: "left",
    color: Color.gray_200,
    fontSize: FontSize.size_base,
  },
  signUpChild2: {
    left: 198,
    width: 137,
  },
  haveAnAccount: {
    color: Color.gray_200,
  },
  text: {
    color: Color.black,
  },
  signIn: {
    color: Color.green_100,
  },
  haveAnAccountContainer: {
    top: 600,
    left: 115,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  signup: {
    top: 252,
    left: 147,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  signUp: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default SignUp;
