import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const ARCam = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.arCam}>
      <View style={styles.arCamChild} />
      <Image
        style={styles.image6Icon}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
      <Image
        style={styles.image7Icon}
        resizeMode="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image8Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.image10Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-10.png")}
      />
      <Pressable
        style={styles.image11}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-11.png")}
        />
      </Pressable>
      <Image
        style={styles.arCamItem}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={styles.arCamItem}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={[styles.image17Icon, styles.image17IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-17.png")}
      />
      <View style={[styles.rectangleView, styles.image17IconPosition]} />
      <Text style={styles.showMeasurements}>Show Measurements</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    height: 32,
    top: 590,
    position: "absolute",
  },
  image17IconPosition: {
    left: 4,
    position: "absolute",
  },
  arCamChild: {
    top: 577,
    left: 139,
    backgroundColor: Color.gray_100,
    width: 74,
    height: 63,
    position: "absolute",
  },
  image6Icon: {
    top: 578,
    left: 19,
    width: 55,
    height: 52,
    position: "absolute",
  },
  image7Icon: {
    top: 589,
    left: 96,
    width: 29,
    height: 31,
    position: "absolute",
  },
  image8Icon: {
    left: 156,
    width: 35,
  },
  image10Icon: {
    left: 213,
    width: 43,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image11: {
    left: 278,
    top: 584,
    width: 46,
    height: 43,
    position: "absolute",
  },
  arCamItem: {
    top: 579,
    left: 2,
    width: 358,
    height: 1,
    position: "absolute",
  },
  image17Icon: {
    top: 0,
    width: 359,
    height: 578,
  },
  rectangleView: {
    top: 8,
    borderRadius: Border.br_md,
    backgroundColor: "rgba(99, 97, 221, 0.2)",
    width: 199,
    height: 28,
  },
  showMeasurements: {
    top: 12,
    left: 36,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.abhayaLibre,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  arCam: {
    backgroundColor: Color.white,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default ARCam;
