import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ShopRegistration1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.shopRegistration}>
      <Text style={[styles.switchToProfessional, styles.register1Typo]}>
        Switch to professional account
      </Text>
      <Image
        style={styles.shopRegistrationChild}
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
      <Text style={[styles.enterShopName, styles.enterTypo]}>
        Enter shop name
      </Text>
      <View style={[styles.shopRegistrationItem, styles.shopLayout]} />
      <Text style={[styles.arSuitCreators, styles.textTypo]}>
        Ar suit creators
      </Text>
      <Text style={[styles.enterShopEmail, styles.enterTypo]}>
        Enter shop email address
      </Text>
      <View style={[styles.shopRegistrationInner, styles.shopLayout]} />
      <Text style={[styles.enterShopPhone, styles.enterTypo]}>
        Enter shop phone number
      </Text>
      <View style={[styles.rectangleView, styles.shopLayout]} />
      <Text style={[styles.text, styles.textTypo]}>(051) 2381119</Text>
      <Text style={[styles.enterShopLocation, styles.enterTypo]}>
        Enter shop location
      </Text>
      <View style={[styles.shopRegistrationChild1, styles.shopLayout]} />
      <Text style={[styles.theCentaurusMall, styles.textTypo]}>
        The Centaurus Mall, Jinnah Avenue
      </Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Pressable
        style={styles.register}
        onPress={() => navigation.navigate("ShopRegistration")}
      >
        <Text style={[styles.register1, styles.register1Typo]}>Register</Text>
      </Pressable>
      <Text style={[styles.arsuitcreatorsgmailcom, styles.textTypo]}>
        Arsuitcreators@gmail.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  register1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
  },
  enterTypo: {
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    left: 63,
    position: "absolute",
  },
  shopLayout: {
    height: 23,
    width: 188,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_md,
    left: 63,
    position: "absolute",
  },
  textTypo: {
    left: 67,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
    position: "absolute",
  },
  switchToProfessional: {
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
  shopRegistrationChild: {
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
  enterShopName: {
    top: 54,
  },
  shopRegistrationItem: {
    top: 68,
  },
  arSuitCreators: {
    top: 73,
  },
  enterShopEmail: {
    top: 165,
  },
  shopRegistrationInner: {
    top: 179,
  },
  enterShopPhone: {
    top: 128,
  },
  rectangleView: {
    top: 142,
  },
  text: {
    top: 147,
  },
  enterShopLocation: {
    top: 91,
  },
  shopRegistrationChild1: {
    top: 105,
  },
  theCentaurusMall: {
    top: 110,
  },
  rectangleIcon: {
    top: 225,
    left: 56,
    width: 205,
    height: 38,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  register1: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
  },
  register: {
    left: 119,
    top: 234,
    position: "absolute",
  },
  arsuitcreatorsgmailcom: {
    top: 184,
  },
  shopRegistration: {
    backgroundColor: Color.white,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default ShopRegistration1;
