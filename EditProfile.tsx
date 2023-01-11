import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfile}>
      <View style={[styles.editProfileChild, styles.editLayout]} />
      <View style={[styles.editProfileItem, styles.editLayout]} />
      <View style={[styles.editProfileInner, styles.editLayout]} />
      <Text
        style={[styles.jorge123gmailcom, styles.jorgeTypo, styles.jorgeTypo1]}
      >
        Jorge123@gmail.com
      </Text>
      <Text
        style={[
          styles.jorge123,
          styles.jorgeContainerPosition,
          styles.jorgeTypo,
          styles.jorgeTypo1,
        ]}
      >
        Jorge_123
      </Text>
      <Text
        style={[
          styles.jorge,
          styles.jorgeContainerPosition,
          styles.jorgeTypo,
          styles.jorgeTypo1,
        ]}
      >
        Jorge
      </Text>
      <Text style={[styles.username, styles.nameTypo]}>Username</Text>
      <Text style={[styles.email, styles.nameTypo]}>Email</Text>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Pressable
        style={[
          styles.switchToProfessionalContainer,
          styles.jorgeContainerPosition,
        ]}
        onPress={() => navigation.navigate("ShopRegistration1")}
      >
        <Text style={styles.editPictureTypo}>
          Switch to professional account
        </Text>
      </Pressable>
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.editPicture, styles.editPictureTypo]}>
        Edit picture
      </Text>
      <Text style={[styles.editProfile1, styles.jorgeTypo]}>Edit profile</Text>
      <Pressable
        style={[styles.image3, styles.imagePosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image4, styles.imagePosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.accountSetting,
          styles.accountTypo,
          styles.jorgeContainerPosition,
        ]}
      >
        Account setting
      </Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector-6.png")}
      />
      <Text
        style={[
          styles.switchToPersonal,
          styles.accountTypo,
          styles.jorgeContainerPosition,
        ]}
      >
        Switch to personal account
      </Text>
      <Pressable
        style={[
          styles.temporarilyDisableAccountContainer,
          styles.jorgeContainerPosition,
        ]}
        onPress={() => navigation.navigate("DisableAccount")}
      >
        <Text style={styles.accountTypo}>Temporarily disable account?</Text>
      </Pressable>
      <Pressable
        style={[styles.deleteAccount, styles.jorgeContainerPosition]}
        onPress={() => navigation.navigate("DeleteAccount")}
      >
        <Text style={styles.accountTypo}>Delete account?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  editLayout: {
    height: 23,
    width: 188,
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_md,
    left: 65,
    position: "absolute",
  },
  jorgeTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
  },
  jorgeTypo1: {
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.abhayaLibre,
  },
  jorgeContainerPosition: {
    left: 73,
    position: "absolute",
  },
  nameTypo: {
    color: Color.gray_200,
    left: 73,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  editPictureTypo: {
    color: Color.indigo_300,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_base,
  },
  imagePosition: {
    height: 21,
    top: 13,
    position: "absolute",
  },
  accountTypo: {
    color: Color.indigo_200,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibre,
    fontSize: FontSize.size_base,
  },
  editProfileChild: {
    top: 268,
  },
  editProfileItem: {
    top: 309,
  },
  editProfileInner: {
    top: 351,
  },
  jorge123gmailcom: {
    top: 355,
    left: 76,
    position: "absolute",
  },
  jorge123: {
    top: 313,
  },
  jorge: {
    top: 272,
  },
  username: {
    top: 295,
  },
  email: {
    top: 337,
  },
  name: {
    top: 254,
  },
  switchToProfessionalContainer: {
    top: 384,
  },
  image2Icon: {
    top: 82,
    left: 118,
    width: 125,
    height: 126,
    position: "absolute",
  },
  editPicture: {
    top: 208,
    left: 152,
    position: "absolute",
  },
  editProfile1: {
    top: 15,
    left: 63,
    fontSize: FontSize.size_xl,
    width: 74,
    height: 16,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image3: {
    left: 14,
    width: 24,
  },
  image4: {
    left: 316,
    width: 19,
  },
  accountSetting: {
    top: 556,
  },
  vectorIcon: {
    top: 575,
    left: 1,
    width: 359,
    height: 1,
    position: "absolute",
  },
  switchToPersonal: {
    top: 398,
  },
  temporarilyDisableAccountContainer: {
    top: 412,
  },
  deleteAccount: {
    top: 426,
  },
  editProfile: {
    backgroundColor: Color.white,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default EditProfile;
