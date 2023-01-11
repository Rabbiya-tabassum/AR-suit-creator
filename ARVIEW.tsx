import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ARVIEW = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.arView}>
      <Image
        style={styles.arViewChild}
        resizeMode="cover"
        source={require("../assets/vector-6.png")}
      />
      <Pressable
        style={styles.image16}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-16.png")}
        />
      </Pressable>
      <Pressable
        style={styles.disableAccount}
        onPress={() => navigation.navigate("DisableAccount1")}
      >
        <Text style={styles.disableAccount1}>Disable account</Text>
      </Pressable>
      <Text style={[styles.fusionAllStars, styles.fusionAllStarsTypo]}>
        Fusion All stars
      </Text>
      <Text style={[styles.previousOrders, styles.fusionAllStarsTypo]}>
        previous orders
      </Text>
      <Image
        style={styles.image19Icon}
        resizeMode="cover"
        source={require("../assets/image-19.png")}
      />
      <Text style={[styles.makeAnOrderContainer, styles.youHaveNoPosition]}>
        <Text style={styles.text}>{`               `}</Text>
        <Text style={styles.makeAnOrder}>Make an order</Text>
      </Text>
      <Text style={[styles.youHaveNo, styles.youHaveNoPosition]}>
        you have no previous orders.Once you submit an order they will show
        here.
      </Text>
      <Text style={[styles.currentOrders, styles.attemptsTypo]}>
        <Text style={styles.currentOrders1}>current orders</Text>
      </Text>
      <Text
        style={[styles.attempts, styles.attemptsPosition, styles.attemptsTypo]}
      >
        Attempts
      </Text>
      <View style={styles.arViewItem} />
      <Image
        style={[styles.image18Icon, styles.attemptsPosition]}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={styles.image19Icon1}
        resizeMode="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image20Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.image21Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-10.png")}
      />
      <Pressable
        style={styles.image22}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-11.png")}
        />
      </Pressable>
      <View style={styles.arViewInner} />
      <Pressable
        style={styles.submitOrder}
        onPress={() => navigation.navigate("DisableAccount1")}
      >
        <Text style={styles.disableAccount1}>Submit Order</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  fusionAllStarsTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  youHaveNoPosition: {
    left: 71,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    position: "absolute",
  },
  attemptsTypo: {
    width: 109,
    color: Color.gray_200,
    fontSize: FontSize.size_lg,
    top: 63,
    height: 21,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
  },
  attemptsPosition: {
    left: 20,
    position: "absolute",
  },
  iconPosition: {
    height: 32,
    top: 590,
    position: "absolute",
  },
  arViewChild: {
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
    top: 15,
    width: 25,
    height: 19,
    position: "absolute",
  },
  disableAccount1: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_xl,
  },
  disableAccount: {
    left: 108,
    top: 186,
    position: "absolute",
  },
  fusionAllStars: {
    top: 18,
    left: 36,
    width: 144,
    height: 22,
  },
  previousOrders: {
    top: 61,
    left: 223,
    width: 113,
    height: 20,
  },
  image19Icon: {
    top: 159,
    left: 154,
    width: 52,
    height: 41,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_xl,
  },
  makeAnOrder: {
    fontSize: 24,
  },
  makeAnOrderContainer: {
    top: 201,
    width: 225,
    height: 22,
  },
  youHaveNo: {
    top: 233,
    fontSize: 15,
    width: 254,
    height: 42,
  },
  currentOrders1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  currentOrders: {
    left: 104,
    height: 21,
    position: "absolute",
  },
  attempts: {
    height: 21,
  },
  arViewItem: {
    top: 577,
    left: 140,
    width: 74,
    height: 63,
    position: "absolute",
    backgroundColor: Color.white,
  },
  image18Icon: {
    top: 578,
    width: 55,
    height: 52,
  },
  image19Icon1: {
    top: 589,
    left: 97,
    width: 29,
    height: 31,
    position: "absolute",
  },
  image20Icon: {
    left: 157,
    width: 35,
  },
  image21Icon: {
    left: 214,
    width: 43,
  },
  image22: {
    left: 279,
    top: 584,
    width: 46,
    height: 43,
    position: "absolute",
  },
  arViewInner: {
    top: 285,
    left: 123,
    borderRadius: Border.br_md,
    backgroundColor: Color.indigo_100,
    width: 121,
    height: 21,
    position: "absolute",
  },
  submitOrder: {
    left: 134,
    top: 287,
    position: "absolute",
  },
  arView: {
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ARVIEW;
