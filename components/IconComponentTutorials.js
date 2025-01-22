import React, {useState} from 'react';
import {Pressable, SafeAreaView, Switch, Text, TextInput, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
const IconComponentTutorials = () => {
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
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 5,
                        width: 300,
                        marginBottom: 10,
                        paddingHorizontal: 5,
                    }}
                >
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: 'gray', marginRight: 5,marginLeft:5 }} />
                    <TextInput
                        style={{
                            flex: 1, // Take remaining space
                            paddingVertical: 10,
                            paddingLeft: 10,
                        }}
                        value={email}
                        onChangeText={(value) => {
                            setEmail(value);
                        }}
                        placeholder="Please Enter the Email"
                        keyboardType="email-address"
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 5,
                        width: 300,
                        marginBottom: 10,
                        paddingHorizontal: 5,
                    }}
                >
                    <FontAwesomeIcon icon={faLock} style={{ color: 'gray', marginRight: 5,marginLeft:5 }} />
                    <TextInput
                        style={{
                            flex: 1, // Take remaining space
                            paddingVertical: 10,
                            paddingLeft: 10,
                        }}
                        value={password}
                        onChangeText={(value) => {
                            setPassword(value);
                        }}
                        secureTextEntry={true}
                        placeholder="Please Enter the Password"
                    />
                </View>

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
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                    }}>
                        <Text style={{color:'white',textAlign:'center'}}>Submit</Text>
                        <FontAwesomeIcon icon={faCheck} style={{color:'white'}}/>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default IconComponentTutorials;
