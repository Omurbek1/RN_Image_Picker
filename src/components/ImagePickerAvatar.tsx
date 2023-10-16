import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const background=require('../assets/images/whatsapp-background.jpg')
const avatar=require('../assets/images/avatar.jpg')
const addButton=require('../assets/images/add-button.png')

interface ImagePickerAvatarInterface{
    uri:any,
    onPress:() => void
}
const ImagePickerAvatar = ({uri, onPress}:ImagePickerAvatarInterface) => {
  return (
    <ImageBackground
    style={styles.imageBackground}
    source={background}>
    <View style={styles.avatar}>
      <ImageBackground
        style={styles.avatarImage}
        source={uri ? { uri } : avatar}
      />
      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Image style={styles.addButtonIcon} source={addButton} />
      </TouchableOpacity>
      <Text style={styles.usernameText}>Omurbek Mamytbekov</Text>
    </View>
  </ImageBackground>
  )
}

export default ImagePickerAvatar

const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
    },
    avatar: {
      alignItems: 'center',
      marginTop: '40%',
    },
    avatarImage: {
      height: 260,
      width: 260,
      overflow: 'hidden',
      borderColor: '#ffffff',
      borderWidth: 4,
      borderRadius: 260 / 2,
    },
    addButton: {
      height: 54,
      width: 54,
      backgroundColor: '#f2f2fC',
      borderRadius: 50,
      position: 'absolute',
      right: 104,
      bottom: 40,
    },
    addButtonIcon: {
      height: 54,
      width: 54,
    },
    usernameText: {
      fontSize: 24,
      fontWeight: '700',
      color: '#ffffff',
      marginTop: 12,
    },
  });