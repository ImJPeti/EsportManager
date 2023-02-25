import * as ImagePicker from "expo-image-picker";
import { element } from "prop-types";
import React, { useState, useEffect } from "react";
import { Button, Image, View, Text } from "react-native";


function ImagePickerComponent({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("Please add an image");
  const [scoreOne, setScoreOne] = useState(null);
  const [scoreTwo, setScoreTwo] = useState(null);
  const regex = /^[0-9]\-[0-9]$/gm;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.uri);
      setText("Loading..");
      const responseData = await onSubmit(result.base64);
      setText(responseData.text);
      let data = responseData.text.split("\n")
      for (let i = 0; i < data.length; i++){
        if (data[i].match(regex)) {
          console.log(data[i])
          let score = data[i].split("-");
          setScoreOne("Player one: "+ score[0]);
          console.log(scoreOne)
          setScoreTwo("Player Two:" + score[1])
        }
      }
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
        <View>
          <Text>{scoreOne}</Text>
          <Text>{scoreTwo}</Text>
        </View>
    </View>
  );
}
export default ImagePickerComponent;