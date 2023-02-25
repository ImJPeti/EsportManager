import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import { Button, Image, View, Text } from "react-native";


function ImagePickerComponent({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("Please add an image");
  const [scoreOne, setScoreOne] = useState(null);
  const [scoreTwo, setScoreTwo] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.uri);
      console.log(result.uri)
      setText("Loading..");
      const responseData = await onSubmit(result.base64);
      setText(responseData.text);
      console.log(responseData.text)
    }
  };
    return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 300, resizeMode: "contain" }}
        />
      )}
      <Text>{text}</Text>
    </View>
  );
}
export default ImagePickerComponent;