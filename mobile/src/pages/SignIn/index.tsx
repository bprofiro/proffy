import React, { useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/auth";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 200,
      height: 200,
      justifyContent: 'center',
    },
  });

const SignIn: React.FC = () => {

    const {signIn} = useAuth();
    
    function  handleSign() {
        signIn();
    }

    return (
      <View style={styles.container}>
        <Button title="Sign In" onPress={handleSign} />
      </View>
    );
  };

export default SignIn;