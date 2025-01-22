import  React from 'react';
import {SafeAreaView, View} from 'react-native';

const FlexBoxTutorials = ()=>{
    return (
        <View
         style={{
             flex: 1,
             backgroundColor:'red'
         }}
        >
          <View
           style={{
               flex: 1,
               backgroundColor:'yellow',
           }}
          ></View><View
                style={{
                    flex: 3,
                    backgroundColor:'green',
                }}
            >
            </View>
        </View>
    );
}

export default FlexBoxTutorials;
