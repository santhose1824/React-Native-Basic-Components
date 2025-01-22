import React, {useState} from 'react';
import {Pressable, SafeAreaView, Switch, Text, TextInput, View} from 'react-native';

const SwitchComponentTutorials = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(true);
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
            <View
                style={
                    {   height: 300,
                        width: 400,
                        borderRadius:10,
                        elevation: 5,
                        backgroundColor: '#fefefe',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal:10,
                        paddingVertical:10,
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
                            paddingVertical:10,
                            paddingLeft:10,
                            marginBottom:10,
                        }
                    }
                    value={email}
                    onChangeText={(value)=>{
                        setEmail(value);
                    }}
                    placeholder={"Please Enter the Email"}
                    keyboardType={'email-address'}
                />
                <TextInput
                    style={
                        {
                            borderWidth:1,
                            borderColor:'black',
                            borderRadius:5,
                            width:300,
                            paddingHorizontal:5,
                            paddingVertical:10,
                            paddingLeft:10,
                            marginBottom:10,
                        }
                    }
                    value={password}
                    onChangeText={(value)=>{
                        setPassword(value);
                    }}
                    secureTextEntry={true}
                    placeholder={"Please Enter the Password"}
                />
                <View
                    style={
                       {
                           display: 'flex',
                           flexDirection: 'row',
                           alignItems: 'center', // Center items vertically
                           justifyContent: 'space-between', // Adjust spacing between items
                           width: 300, // Set width to align with other elements
                       }
                    }
                >
                    <Text>Keep me Logged In</Text>
                    <Switch
                        value={loggedIn}
                        onValueChange={(value)=>{
                            setLoggedIn(value);
                        }}
                    />
                </View>
                <Pressable
                    style={
                        [
                            {
                                backgroundColor:'red',
                                color:'white',
                                width:300,
                                paddingHorizontal:20,
                                paddingVertical:15,
                                borderRadius:5,
                            },
                            (email.length === 0 || password.length === 0) && {opacity:0.5},
                        ]
                    }
                    onPress={()=>{
                        alert("The Enter Email is"+email+"and Password is "+password)
                    }}
                    disabled={email.length === 0 || password.length === 0}
                >
                    <Text style={{color:'white',textAlign:'center'}}>Submit</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default SwitchComponentTutorials;
