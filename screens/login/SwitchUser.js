import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppButton from "../../components/appButton";

import AuthContext from "../../components/auth/context";
import screens from "../../config/screens";
import Screen from "../../components/appScreen"
import AppHeading from "../../components/appHeading"
import { UsersContext } from '../../context/UsersContext';
import User from "../../screens/login/User"
import colours from "../../config/colours";
function SwitchUser({ navigation, route }) {
  const { user, setUser, setSwitchUser, setSwitchUserName } = useContext(AuthContext);
  const { users } = useContext(UsersContext)

  const handlePress = () => {

  }
  return (
    <Screen>
      <AppHeading title="Switch User" />
      <View style={styles.container}>
        {users.map((u, index) => (user.username !== u.user_name && <User iconName="human-child" key={index} username={u.user_name} color={"gold"} onPress={() => {
          user.isParent
            ? navigation.jumpTo("Parent")
            : navigation.jumpTo("Child");
          setSwitchUser(true);
          setSwitchUserName(u.user_name)
        }} />))}
        <AppButton
          title="Logout"
          onPress={() => {
            user.isParent
              ? navigation.jumpTo("Parent")
              : navigation.jumpTo("Child");
            setSwitchUser(true);
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SwitchUser;
