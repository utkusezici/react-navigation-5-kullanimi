import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import HomeScreen from "./screens/Home";
import HomeDetail from "./screens/HomeDetail";

const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator initialRouteName="Home">
            <Home.Screen name="Home" component={HomeScreen} />
            <Home.Screen name="HomeDetail" component={HomeDetail} />
        </Home.Navigator>
    );
};

export default () => {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    );
};
