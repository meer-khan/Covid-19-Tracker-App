import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  AsyncStorage,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Favlist({ navigation }) {
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    loaddata();
  }, []);

  loaddata = async () => {
    try {
      console.log("LOADING");
      //   const value = await AsyncStorage.getItem("World");
      //   console.log(value);
      const keys = await AsyncStorage.getAllKeys();
      for (let i = 0; i < keys.length; i++) {
        const countryItem = await AsyncStorage.getItem(keys[i]);
        const countryItemParse = JSON.parse(countryItem);
        // console.log(countryItemParse.country);
        // savedList[i] = countryItemParse;
      }
    } catch (error) {
      console.log("couldnot load");
    }
  };

  return (
    <View>
      <FlatList
        data={savedList}
        renderItem={({ item }) => {
          return <Text>{item.country}</Text>
        }}
        keyExtractor={(item) => item.country}
      />
    </View>
  );
}

// const [savedList, setSavedList] = useState([]);
//     useEffect(() => { fetchAllItems() }, []);

//     const fetchAllItems = async () => {
//         try {
//             const keys = await AsyncStorage.getAllKeys();
//             for (let i = 0; i < keys.length; i++) {
//                 const countryItem = await AsyncStorage.getItem(keys[i]);
//                 const countryItemParse = JSON.parse(countryItem);
//                 savedList[i] = countryItemParse;
//             }
//         } catch (error) {
//             console.log(error, "problemo")
//         }
//     }
