import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DeleteAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.deleteAccount}>
      <Text style={[styles.deleteAccount1, styles.deleteTypo]}>
        Delete account?
      </Text>
      <Image
        style={styles.deleteAccountChild}
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
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("DisableAccount2")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
      </Pressable>
      <Text style={[styles.deleteAccount2, styles.deleteTypo]}>
        Delete account
      </Text>
      <View style={[styles.deleteAccountItem, styles.deleteLayout]} />
      <View style={[styles.deleteAccountInner, styles.deleteLayout]} />
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
  deleteTypo: {
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  deleteLayout: {
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
  deleteAccount1: {
    width: 207,
    height: 16,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
    left: 63,
    top: 15,
  },
  deleteAccountChild: {
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
  icon1: {
    borderRadius: Border.br_md,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 174,
    width: 205,
    height: 38,
    left: 63,
    position: "absolute",
  },
  deleteAccount2: {
    top: 186,
    left: 108,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
  },
  deleteAccountItem: {
    top: 74,
  },
  deleteAccountInner: {
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
  deleteAccount: {
    backgroundColor: Color.white,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default DeleteAccount;
