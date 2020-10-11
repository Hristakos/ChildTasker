import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ParentStackNavigator from "./ParentStackNavigator";
import ChildStackNavigator from "./ChildStackNavigator";
import colours from "../../config/colours";
import AuthContext from "../../components/auth/context";
import LoginScreen from "../login/LoginScreen";
import SwitchUser from "../login/SwitchUser";

const Tab = createBottomTabNavigator();

function BottomTabNavigator(props) {
  const { user } = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeBackgroundColor: colours.defaultButtonColour,
        activeTintColor: colours.white,
        inactiveBackgroundColor: colours.light,
        inactiveTintColor: "grey",
      }}
    >
      {user.isParent && (
        <Tab.Screen
          name="Parent"
          component={ParentStackNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="human-male-female"
                size={size}
                color={color}
              />
            ),
          }}
        />
      )}
      {!user.isParent && (
        <Tab.Screen
          name="Child"
          component={ChildStackNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="human-child"
                size={size}
                color={color}
              />
            ),
          }}
        />
      )}

      <Tab.Screen
        name="Switch User"
        component={SwitchUser}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default BottomTabNavigator;
