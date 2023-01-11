import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={[styles.profileChild, styles.profileLayout]} />
      <View style={styles.profileItem} />
      <Text style={[styles.measurements, styles.viewOrdersTypo]}>
        Measurements
      </Text>
      <Text style={[styles.jorge123, styles.jorgeTypo, styles.jorgePosition]}>
        Jorge_123
      </Text>
      <Text style={[styles.jorge, styles.jorgeTypo, styles.jorgePosition]}>
        Jorge
      </Text>
      <Text style={[styles.username, styles.nameTypo]}>Username</Text>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-23.png")}
      />
      <Pressable
        style={styles.editPicture}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={styles.viewOrdersTypo}>Edit picture</Text>
      </Pressable>
      <Pressable
        style={[styles.profileInner, styles.profileLayout]}
        onPress={() => navigation.navigate("ARVIEW")}
      />
      <Text style={[styles.viewOrders, styles.viewOrdersTypo]}>
        View Orders
      </Text>
      <Text style={[styles.profile1, styles.image16Position, styles.jorgeTypo]}>
        Profile
      </Text>
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
      <Pressable
        style={[styles.image8, styles.image8Position]}
        onPress={() => navigation.navigate("ARCam")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-8.png")}
        />
      </Pressable>
      <Image
        style={[styles.image10Icon, styles.image8Position]}
        resizeMode="cover"
        source={require("../assets/image-10.png")}
      />
      <Pressable
        style={styles.image11}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-11.png")}
        />
      </Pressable>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <Pressable
        style={[styles.image16, styles.image16Position]}
        onPress={() => navigation.navigate("ARCam")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-16.png")}
        />
      </Pressable>
      <Image
        style={styles.image15Icon}
        resizeMode="cover"
        source={require("../assets/image-15.png")}
      />
      <Image
        style={[styles.image13Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-13.png")}
      />
      <Image
        style={[styles.image12Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    height: 23,
    width: 170,
    backgroundColor: Color.indigo_100,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  viewOrdersTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_base,
  },
  jorgeTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
  },
  jorgePosition: {
    left: 23,
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  nameTypo: {
    color: Color.gray_200,
    left: 23,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  image16Position: {
    top: 15,
    position: "absolute",
  },
  image8Position: {
    height: 32,
    top: 590,
    position: "absolute",
  },
  iconPosition: {
    top: 266,
    position: "absolute",
  },
  profileChild: {
    top: 230,
    left: 100,
  },
  profileItem: {
    top: 500,
    left: 46,
    width: 141,
    height: 22,
    backgroundColor: Color.indigo_100,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  measurements: {
    top: 504,
    left: 85,
    position: "absolute",
  },
  jorge123: {
    top: 54,
  },
  jorge: {
    top: 197,
  },
  username: {
    top: 44,
  },
  name: {
    top: 183,
  },
  image2Icon: {
    top: 68,
    left: 0,
    width: 112,
    height: 110,
    position: "absolute",
  },
  editPicture: {
    left: 156,
    top: 234,
    position: "absolute",
  },
  profileInner: {
    top: 123,
    left: 168,
  },
  viewOrders: {
    top: 127,
    left: 224,
    position: "absolute",
  },
  profile1: {
    left: 63,
    fontSize: FontSize.size_xl,
    width: 74,
    height: 16,
  },
  image6Icon: {
    top: 578,
    left: 27,
    width: 55,
    height: 52,
    position: "absolute",
  },
  image7Icon: {
    top: 589,
    left: 104,
    width: 29,
    height: 31,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image8: {
    left: 164,
    width: 35,
  },
  image10Icon: {
    left: 221,
    width: 43,
  },
  image11: {
    left: 286,
    top: 584,
    width: 46,
    height: 43,
    position: "absolute",
  },
  vectorIcon: {
    top: 579,
    left: 2,
    width: 358,
    height: 1,
    position: "absolute",
  },
  image16: {
    left: 12,
    width: 25,
    height: 19,
  },
  image15Icon: {
    top: 321,
    left: 38,
    width: 154,
    height: 173,
    position: "absolute",
  },
  image13Icon: {
    left: 66,
    width: 37,
    height: 34,
  },
  image12Icon: {
    left: 253,
    width: 44,
    height: 40,
  },
  profile: {
    backgroundColor: Color.white,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
