import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DisableAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.disableAccount}>
      <Text style={[styles.temporarilyDisableAccount, styles.disableTypo]}>
        Temporarily disable account?
      </Text>
      <Image
        style={styles.disableAccountChild}
        resizeMode="cover"
        source={require("../assets/vector-6.png")}
      />
      <Pressable
        style={styles.image16}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-16.png")}
        />
      </Pressable>
      <Image
        style={styles.disableAccountItem}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Pressable
        style={styles.disableAccount1}
        onPress={() => navigation.navigate("DisableAccount1")}
      >
        <Text style={[styles.disableAccount2, styles.disableTypo]}>
          Disable account
        </Text>
      </Pressable>
      <View style={[styles.disableAccountInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={styles.jorge123gmailcom}>Jorge123@gmail.com</Text>
      <Text style={styles.jorge123}>Jorge_123</Text>
      <Text style={[styles.enterYourUsername, styles.enterTypo]}>
        Enter your username
      </Text>
      <Text style={[styles.enterEmail, styles.enterTypo]}>Enter email</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  disableTypo: {
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
  },
  rectangleViewLayout: {
    height: 23,
    width: 188,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_md,
    left: 63,
    position: "absolute",
  },
  enterTypo: {
    color: Color.gray_200,
    left: 71,
    height: 14,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    position: "absolute",
  },
  temporarilyDisableAccount: {
    width: 207,
    height: 16,
    color: Color.black,
    left: 63,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
    top: 15,
    position: "absolute",
  },
  disableAccountChild: {
    top: 575,
    left: 1,
    width: 359,
    height: 1,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image16: {
    left: 7,
    width: 25,
    height: 19,
    top: 15,
    position: "absolute",
  },
  disableAccountItem: {
    top: 174,
    width: 205,
    height: 38,
    borderRadius: Border.br_md,
    left: 63,
    position: "absolute",
  },
  disableAccount2: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
  },
  disableAccount1: {
    left: 108,
    top: 186,
    position: "absolute",
  },
  disableAccountInner: {
    top: 74,
  },
  rectangleView: {
    top: 116,
  },
  jorge123gmailcom: {
    top: 120,
    left: 74,
    width: 104,
    height: 14,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
    position: "absolute",
  },
  jorge123: {
    top: 78,
    width: 48,
    left: 71,
    height: 14,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
    position: "absolute",
  },
  enterYourUsername: {
    top: 60,
    width: 121,
  },
  enterEmail: {
    top: 102,
    width: 74,
  },
  disableAccount: {
    backgroundColor: Color.white,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default DisableAccount;
