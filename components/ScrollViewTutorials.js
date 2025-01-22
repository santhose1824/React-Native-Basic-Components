import React from 'react';
import {Image, SafeAreaView, ScrollView, Text} from 'react-native';

const ScrollViewTutorials = ()  =>{
    return (
        <SafeAreaView
            style={
                {
                    // flex: 1,
                    backgroundColor: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }
            }
        >
            <ScrollView
                onScroll={()=>{
                    console.log("We are scrolling");
                }}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={
                   {
                      backgroundColor:'red'
                   }
                }
            >
                <Image
                 source={require('../assets/cake.png')}
                 style={
                    {
                        height:600,
                        width:500
                    }
                 }
                />
                <Image
                    source={require('../assets/cake.png')}
                    style={
                        {
                            height:600,
                            width:500
                        }
                    }
                />
                <Image
                    source={require('../assets/cake.png')}
                    style={
                        {
                            height:600,
                            width:500
                        }
                    }
                />
                <Image
                    source={require('../assets/cake.png')}
                    style={
                        {
                            height:500,
                            width:500
                        }
                    }
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default ScrollViewTutorials;
