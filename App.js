/*
from udemy
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
*/

import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as SplashScreen from "expo-splash-screen";

import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { Feather, FontAwesome } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";

import colors from "./assets/colors/colors";

import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import CustomersScreen from "./src/screens/CustomersScreen";
import MeScreen from "./src/screens/MeScreen";
import LocateItemScreen from "./src/screens/CustomerDetails/LocateItemScreen";
import CustomerDetailScreen from "./src/screens/CustomerDetails/CustomerDetailScreen";
import RecommendedItemsCardsScreen from "./src/screens/CustomerDetails/RecommendedItemsCardsScreen";
import CustomerUpdateDetailsScreen from "./src/screens/CustomerDetails/CustomerUpdateDetailsScreen";

import { useFonts } from "expo-font";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn); // it's good to explicitly catch and inspect any error

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: styles.tabBar,
        tabBarActiveTintColor: colors.theme,
        tabBarInactiveTintColor: colors.grey,
        tabBarShowLabel: true,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="lightning-bolt-outline"
              size={32}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Customers"
        component={CustomersScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="diamond" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={MeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="star-o" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="info" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  // componentDidMount() {
  //   // Hides native splash screen after 1s
  //   setTimeout(async () => {
  //     await SplashScreen.hideAsync();
  //   }, 200);
  // }

  let [fontsLoaded] = useFonts({
    Bodoni: require("./assets/fonts/Bodoni.ttf"),
    BodoniBold: require("./assets/fonts/Bodoni-bold.ttf"),
  });

  useEffect(() => {
    // Hides native splash screen after 1s
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 200);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{
              title: "Eureka Screen",
              headerShown: false,
              headerStyle: {
                backgroundColor: colors.theme,
              },
              headerTitleStyle: { color: "white" },
              headerTintColor: colors.white,
            }}
          />
          <Stack.Screen
            name="CustomerDetailScreen"
            component={CustomerDetailScreen}
            options={{
              title: "Customer Detail Screen",
              headerShown: false,
              headerStyle: {
                backgroundColor: colors.theme,
              },
              headerTitleStyle: { color: "white" },
              headerTintColor: colors.white,
            }}
          />
          <Stack.Screen
            name="RecommendedItemsCardsScreen"
            // Default card shows first item
            initialParams={{ itemClicked: 1 }}
            component={RecommendedItemsCardsScreen}
            options={{
              title: "Recommended Items Cards Screen",
              headerShown: false,
              headerStyle: {
                backgroundColor: colors.theme,
              },
              headerTitleStyle: { color: "white" },
              headerTintColor: colors.white,
            }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="LocateItemScreen"
            component={LocateItemScreen}
            options={{
              title: "Locate Item",
              headerShown: true,
              headerStyle: {
                backgroundColor: colors.theme,
              },
              headerTitleStyle: { color: "white" },
              headerTintColor: colors.white,
              headerBackTitleVisible: false,
              cardStyle: {
                backgroundColor: "#FFFFFF",
              },
              headerLeft: () => <View></View>,
            }}
          />
          <Stack.Screen
            name="CustomerUpdateDetailsScreen"
            component={CustomerUpdateDetailsScreen}
            options={{
              title: "Update Customer Details",
              headerShown: true,
              headerStyle: {
                backgroundColor: colors.theme,
              },
              headerTitleStyle: { color: "white" },
              headerTintColor: colors.white,
              headerBackTitleVisible: false,
              cardStyle: {
                backgroundColor: "#FFFFFF",
              },
              headerLeft: () => <View></View>,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.theme,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App;

/*
This was the way done by udemy
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Test: TestScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "eureka",
    },
  }
);

export default createAppContainer(navigator);

*/
