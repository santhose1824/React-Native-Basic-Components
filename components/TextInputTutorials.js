import React,{useState} from 'react';
import {SafeAreaView, Text,TextInput} from 'react-native';

const TextInputTutorials = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    return (
      <SafeAreaView
          style={
              {
                  flex: 1,
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
              }
          }
      >
          <TextInput
            style={
              {
                  borderWidth:1,
                  borderColor:'black',
                  borderRadius:5,
                  width:300,
                  paddingHorizontal:5,
                  marginBottom:10
              }
            }
            value={name}
            onChangeText={(value)=>{
                setName(value);
            }}
            placeholder={"Please Enter Your Name"}
            autoFocus={true}
            keyboardType={"default"}
            returnKeyType={'done'}
          />
          <TextInput
              style={
                  {
                      borderWidth:1,
                      borderColor:'black',
                      borderRadius:5,
                      width:300,
                      paddingHorizontal:5,
                      marginBottom:10
                  }
              }
              value={password}
              onChangeText={(value)=>{
                  setPassword(value);
              }}
              secureTextEntry={true}
              placeholder={"Please Enter Your Password"}
              autoFocus={true}
              keyboardType={'phone-pad'}
          />
          <Text>My Name is {name}</Text>
          <Text>My Password is {password}</Text>
      </SafeAreaView>
    );
}


export default TextInputTutorials;
