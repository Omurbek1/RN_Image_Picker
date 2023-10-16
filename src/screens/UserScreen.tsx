import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { ImagePickerHeader } from '../components/ImagePickerHeader'
import ImagePickerAvatar from '../components/ImagePickerAvatar'
import { ImagePickerModal } from '../components/ImagePickerModal'
import * as ImagePicker from 'react-native-image-picker'
const UserScreen = () => {
    const [pickerResponse, setPickerResponse] = useState<any>(null);
    const [visible, setVisible] = useState(false);
    const onImageLibraryPress = useCallback(() => {
        const options:any = {
          selectionLimit: 1,
          mediaType: 'photo',
          includeBase64: false,
        };
        ImagePicker.launchImageLibrary(options, setPickerResponse);
      }, []);

      const onCameraPress = useCallback(() => {
        const options = {
          saveToPhotos: true,
          mediaType: 'photo',
          includeBase64: false,
        };
        ImagePicker.launchCamera(options, setPickerResponse);
      }, []);
      const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  return (
    <>
        <ImagePickerHeader/>
        <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)}/>
        <ImagePickerModal    isVisible={visible}
        onCameraPress={onCameraPress}
         onClose={() => setVisible(false)}
         onImageLibraryPress={onImageLibraryPress}/>
     
    </>
  )
}

export default UserScreen

const styles = StyleSheet.create({})