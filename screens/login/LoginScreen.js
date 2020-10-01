import React from "react";
import { View, StyleSheet, SafeAreaView, Button, Text } from "react-native";
import AppTextInput from "../../components/AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../../components/appButton";
import screens from "../../config/screens";

const loginSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={() => {
          navigation.navigate(screens.ParentDashBoard);
        }}
        validationSchema={loginSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              placeholder="Username"
              labelText="Username"
              icon="account"
              onChangeText={handleChange("username")}
              errorStyle={{ color: "red" }}
              error={errors ? errors.username : ""}
            />
            <AppTextInput
              placeholder="Password"
              labelText="Password"
              icon="lock"
              secureTextEntry
              onChangeText={handleChange("password")}
              errorStyle={{ color: "red" }}
              error={errors ? errors.password : ""}
            />
            <AppButton title="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreen;
