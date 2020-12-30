import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CountryDetails from "./CountryDetails";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function world({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [favbool, setfavbool] = useState(false);

  useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function Fav({ favbool }) {
    if (favbool == false) {
      favbool = true;
      return <Ionicons name="star" size={25} color="red" />;
    } else {
      favbool = false;
      return <Ionicons name="star-outline" size={25} color="black" />;
    }
  }

  function CountryCard({ countryName, totalcases, deaths, recovered, active }) {
    // var favbool = false;
    return (
      <View
        style={{
          borderWidth: 1,
          borderBottomColor: "grey",
          borderTopColor: "#355070",
          borderLeftColor: "#355070",
          borderRightColor: "#355070",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CountryDetails", {
              country: countryName,
              totalcases: totalcases,
              deaths: deaths,
              recovered: recovered,
              active: active,
            });
          }}
          style={{
            height: 50,
            width: 300,
            justifyContent: "center",
            elevation: 4.0,
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 20,
              color: "white",
            }}
          >
            {countryName}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#ecf8f8",
            }}
          >
            {totalcases}
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row-reverse", marginTop: -30 }}>
          <TouchableOpacity
            onPress={() => {
              setfavbool(!favbool );
            }}
          >
            {/* <Fav favbool={favbool}></Fav>
             */}
            {favbool ? (
              <Ionicons name="star" size={25} color="red" />
            ) : (
              <Ionicons name="star-outline" size={25} color="red" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#355070" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.country}
          renderItem={({ item, index }) => {
            return (
              <CountryCard
                countryName={item.country}
                totalcases={item.cases}
                deaths={item.deaths}
                recovered={item.recovered}
                active={item.active}
              ></CountryCard>
            );
            // <Text>{item.country}</Text>;

            // return
          }}
        />
      )}
    </View>
  );
}

// function CountryDetails({navigatoin}){
//   const {countryName} = route.params
//   return(
//     <View>
//       <Text>
//         {countryName}
//       </Text>
//     </View>
//   )
// }
