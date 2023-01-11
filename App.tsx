const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
false;
import SignUp from "./screens/SignUp";
import ARCam from "./screens/ARCam";
import DeleteAccount from "./screens/DeleteAccount";
import ARVIEW from "./screens/ARVIEW";
import DisableAccount from "./screens/DisableAccount";
import DisableAccount2 from "./screens/DisableAccount2";
import DisableAccount1 from "./screens/DisableAccount1";
import ShopRegistration from "./screens/ShopRegistration";
import ShopRegistration1 from "./screens/ShopRegistration1";
import EditProfile from "./screens/EditProfile";
import Profile from "./screens/Profile";
import SignIn from "./screens/SignIn";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ARCam"
              component={ARCam}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeleteAccount"
              component={DeleteAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ARVIEW"
              component={ARVIEW}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DisableAccount"
              component={DisableAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DisableAccount2"
              component={DisableAccount2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DisableAccount1"
              component={DisableAccount1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShopRegistration"
              component={ShopRegistration}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShopRegistration1"
              component={ShopRegistration1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
