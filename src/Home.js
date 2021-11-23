import React from 'react'
import {  View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Images from './Images'

let deviceHeight=Dimensions.get('window').height
let deviceWidth=Dimensions.get('window').width

const Home=(props)=> {
    return (
        <ScrollView >
        <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                {
                Images.map((image,index)=>(
                    <TouchableOpacity key={index} onPress=
                    {()=>props.navigation.navigate('ShowImage',{url:image.url})}>
                    <Image source={image.url}
                    style={{height:deviceHeight/4,
                    width:deviceWidth/3-6,
                    borderRadius:10,
                    margin:2
                }}
                    />
                    </TouchableOpacity>
                ))
                }
        </View>
        </ScrollView>
    )
}

export default Home
