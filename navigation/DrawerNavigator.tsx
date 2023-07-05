import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import COLORS from "../constants/colors";
import CustomDrawerContent from "../components/CustomDrawerContent";
import DrawerScreenContainer from "../components/DrawerScreenContainer";
import StackNavigator from "./StackNavigator";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        drawerStyle: {
          width: 200,
          backgroundColor: COLORS.primary,
        },
        overlayColor: null,
        drawerLabelStyle: {
          fontWeight: "bold",
        },
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.secondary,
        drawerItemStyle: { backgroundColor: null },
        sceneContainerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={{
          title: "ADOPTION",
          drawerIcon: ({ color }) => (
            <Icon name="paw" size={25} style={{ marginRight: -20, color }} />
          ),
        }}
      >
        {(props) => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="DONATION"
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="gift" size={25} style={{ marginRight: -20, color }} />
          ),
        }}
      >
        {(props) => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="ADD PET"
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name="plus-box"
              size={25}
              style={{ marginRight: -20, color }}
            />
          ),
        }}
      >
        {(props) => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="FAVOURITES"
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="heart" size={25} style={{ marginRight: -20, color }} />
          ),
        }}
      >
        {(props) => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="PROFILE"
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name="account"
              size={25}
              style={{ marginRight: -20, color }}
            />
          ),
        }}
      >
        {(props) => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
