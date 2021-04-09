// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { 
  StyleSheet, StatusBar,
  Text, View, 
  Image, TextInput, 
  KeyboardAvoidingView, 
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        
        <StatusBar style="auto" />

        <KeyboardAvoidingView 
          keyboardVerticalOffset={-500} 
          behavior='padding' 
          style={styles.container}>

          <TouchableWithoutFeedback style={styles.container}
            onPress={Keyboard.dismiss}>

            <View style={styles.container}>
              
              <View style={styles.logo_container}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
                <Text style={{fontSize:25, color: '#000', fontWeight:'bold', letterSpacing:11}}>Engineer</Text>
              </View>

              <View style={styles.login_container}>
                <TextInput style={styles.input} 
                  placeholder="Enter Login ID"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={ ()=> this.refs.txtPassword.focus() }
                />
                <TextInput style={styles.input} 
                  placeholder="Enter Password"
                  returnKeyType="next"
                  autoCorrect={false}
                  secureTextEntry={true}
                  ref={"txtPassword"}
                />

                <TouchableOpacity style={styles.button_container}>
                  <Text style={styles.button_text}>LOGIN</Text>
                </TouchableOpacity>

              </View>

            </View>

          </TouchableWithoutFeedback>

        </KeyboardAvoidingView>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },

  logo_container:{
    alignItems: 'center',
    marginVertical: 40
    // justifyContent: 'center',
    // flex: 1
  },

  login_container:{
    position:'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    height: 200,
    padding: 20,
    // backgroundColor: 'green'
  },

  input:{
    height:50,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingLeft:20,
    marginBottom:10,
    fontSize:16
  },

  button_container:{
    backgroundColor: 'green',
    paddingVertical: 15
  },

  button_text:{
    textAlign:'center',
    color: '#fff',
    fontSize: 18,
    // fontWeight: 'bold'
  }

});


// export default Login;