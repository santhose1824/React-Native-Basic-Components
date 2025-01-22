import  React,{useState} from 'react';
import {Image, SafeAreaView} from 'react-native';

const ImageTutorials = () => {
    const [image,setImage] = useState({uri:"http://example.com"});
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
            <Image source={image}
                   style={
                       {
                           height:'100%',
                           width:'100%',
                           backgroundColor:'red'
                       }
                   }
                   resizeMode={'center'}
                   onError={()=>{
                       console.log("Error has been detected wjile loading image");
                       setImage(require('../assets/cake.png'))
                   }}
            />

            <Image source={{uri:'https://mrbrownbakery.com/image/images/f24lP3RSG3bbKoZWl8q48yw9cFPobfHF9kQeQcR3.jpeg?p=full'}}
                   style={
                       {   margin:10,
                           height:100,
                           width:100
                       }
                   } />
        </SafeAreaView>
    );
}

export default ImageTutorials;
