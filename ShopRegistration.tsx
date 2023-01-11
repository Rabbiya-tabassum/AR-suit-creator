import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const ShopRegistration = () => {
  return (
    <View style={styles.shopRegistration}>
      <Text style={styles.switchToProfessional}>
        Switch to professional account
      </Text>
      <Image
        style={styles.shopRegistrationChild}
        resizeMode="cover"
        source={require("../assets/vector-6.png")}
      />
      <Image
        style={[styles.shopRegistrationItem, styles.shopLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={styles.image18Icon}
        resizeMode="cover"
        source={require("../assets/image-181.png")}
      />
      <Text
        style={[styles.congratulationsYourShopContainer, styles.continueTypo]}
      >
        <Text
          style={styles.congratulationsYourShop}
        >{`Congratulations, your shop `}</Text>
        <Text
          style={styles.hasBeenSuccessfully}
        >{`has been successfully registered. `}</Text>
      </Text>
      <Image
        style={[styles.shopRegistrationInner, styles.shopLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shopLayout: {
    borderRadius: Border.br_md,
    position: "absolute",
  },
  continueTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  switchToProfessional: {
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
  shopRegistrationChild: {
    top: 575,
    left: 1,
    width: 359,
    height: 1,
    position: "absolute",
  },
  shopRegistrationItem: {
    top: 86,
    left: 42,
    width: 261,
    height: 250,
  },
  image18Icon: {
    top: 121,
    left: 116,
    width: 113,
    height: 100,
    position: "absolute",
  },
  congratulationsYourShop: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  hasBeenSuccessfully: {
    margin: Margin.m_md,
  },
  congratulationsYourShopContainer: {
    top: 269,
    width: 214,
    height: 67,
    left: 73,
  },
  shopRegistrationInner: {
    top: 384,
    width: 205,
    height: 38,
    left: 73,
  },
  continue: {
    top: 393,
    left: 145,
  },
  shopRegistration: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default ShopRegistration;
