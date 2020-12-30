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
  ImageBackground,
  AsyncStorage,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

// Persisting storage

// Country Deatils functions

export default function CountryDetails({ route, navigation }) {
  var cases, country;

  savaData = async (key1, value1) => {
    await AsyncStorage.setItem(key1, value1);

    console.log("saving Done");
  };

  loaddata = async () => {
    console.log("Loading!");
    cases = await AsyncStorage.getItem(countryName.country);
    // country =await  AsyncStorage.getItem("country")
    console.log(cases);
  };

  const countryName = route.params;
  const totalcases = route.params;
  const deaths = route.params;
  const recovered = route.params;
  const active = route.params;
  const [favbool, setfavbool] = useState(false);

  var cases = totalcases.totalcases;
  console.log(typeof countryName + "this is country name type");
  var name = countryName.country;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/corona2.jpg")}
        style={{ width: "100%", height: "40%", borderRadius: 1 }}
      />
      {/* First row of buttons */}
      <View
        style={{
          backgroundColor: "#457b9d",
          margin: 8,
          width: "90%",
          height: 110,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#a8dadc",
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              color: "white",
              marginTop: 22,
            }}
          >
            {countryName.country} {"\n"}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setfavbool(!favbool);
              savaData(countryName.country, JSON.stringify(countryName));
              // savaData("total_cases",cases.toString())
              loaddata();
            }}
            style={{ marginTop: -26.66 }}
          >
            {favbool ? (
              <Ionicons name="star" size={25} color="red" />
            ) : (
              <Ionicons name="star-outline" size={25} color="black" />
            )}
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.btn}>
          <Text style={styles.btntext}>
            Confirmed {"\n"}
            <Text
              style={{ fontWeight: "bold", fontSize: 25, color: "#073b4c" }}
            >
              {totalcases.totalcases}
            </Text>
          </Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.btntext}>
            Recovered {"\n"}
            <Text
              style={{ fontWeight: "bold", fontSize: 25, color: "#4361ee" }}
            >
              {recovered.recovered}
            </Text>
          </Text>
        </View>
      </View>

      {/* 2nd row of buttons */}
      <View style={{ flexDirection: "row" }}>
        <View style={styles.btn}>
          <Text style={styles.btntext}>
            Deaths {"\n"}
            <Text
              style={{ fontWeight: "bold", fontSize: 25, color: "#ef233c" }}
            >
              {deaths.deaths}
            </Text>
          </Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.btntext}>
            Active Cases {"\n"}
            <Text
              style={{ fontWeight: "bold", fontSize: 25, color: "#f9c74f" }}
            >
              {active.active}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#355070",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#52b788",
    margin: 8,
    width: "43%",
    height: 110,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#74c69d",
  },
  btntext: {
    color: "white",
    fontSize: 18,
  },
  btnnumberstyle: {
    fontWeight: "bold",
    fontSize: 23,
  },
});
