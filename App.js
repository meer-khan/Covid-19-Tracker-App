import { StatusBar } from "expo-status-bar";
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
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Symptoms from "./components/Symptoms";
import CountryDetails from "./components/CountryDetails";
import world from "./components/world";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import CountryDetails from './components/world ';
import Favlist from './components/Favlist'
const Drawer = createDrawerNavigator();


function DrawerRoute() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "HomeScreen",
          headerStyle: {
            backgroundColor: "#355070",
          },
          headerTitleStyle: {
            color: "#edf6f9",
            fontSize: 30,
          },
        }}
        
      />
      {/* <Drawer.Screen name="world" component={world} /> */}
      <Drawer.Screen name="world" component={world}
      />
      <Drawer.Screen name="Favlist" component={Favlist}
      />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DrawerRoute" component={DrawerRoute} 
      />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          // options={{
          //   title: "Covid",
          //   headerStyle: {
          //     backgroundColor: "#355070",
          //   },
          //   headerTitleStyle: {
          //     color: "#edf6f9",
          //     fontSize: 30,
          //   },
          // }}
        />
        <Stack.Screen name="Symptoms" component={Symptoms} />
        <Stack.Screen name="world" component={world}/>
        <Stack.Screen name="CountryDetails" component={CountryDetails} />
        <Stack.Screen name="Favlist" component={Favlist}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Hommie({ navigation }) {
  return (
    <View>
      <Text>Hey im home</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/all")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/covid.jpg")}
        style={{ width: "100%", height: "40%" }}
      />

      {/* First row of buttons */}
      <View style={{ flexDirection: "row" }}>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("world");
            }}
          >
            <Text style={styles.btntext}>
              Confirmed {"\n"}
              <Text
                style={{ fontWeight: "bold", fontSize: 25, color: "#073b4c" }}
              >
                {data.cases}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text style={styles.btntext}>
              Recovered {"\n"}
              <Text
                style={{ fontWeight: "bold", fontSize: 25, color: "#4361ee" }}
              >
                {data.recovered}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 2nd row of buttons */}
      <View style={{ flexDirection: "row" }}>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text style={styles.btntext}>
              Deaths {"\n"}
              <Text
                style={{ fontWeight: "bold", fontSize: 25, color: "#ef233c" }}
              >
                {data.deaths}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text style={styles.btntext}>
              Active Cases {"\n"}
              <Text
                style={{ fontWeight: "bold", fontSize: 25, color: "#f9c74f" }}
              >
                22008772
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fdc500",
          margin: 8,
          width: "90%",
          height: 110,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#f48c06",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Symptoms");
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "white" }}>
            Symptoms {"\n"}
          </Text>
        </TouchableOpacity>
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
