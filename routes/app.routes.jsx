import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ROUTES } from "../constants/routes";

import { MovieList, MovieDetails, CreateMovie } from "../features/movies";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.MOVIE_LIST}>
        
        <Stack.Screen
          name={ROUTES.MOVIE_LIST}
          component={MovieList}
          options={{ title: "Filmes" }}
        />

        <Stack.Screen
          name={ROUTES.MOVIE_DETAILS}
          component={MovieDetails}
          options={{ title: "Detalhes do Filme" }}
        />

        <Stack.Screen
          name={ROUTES.CREATE_MOVIE}
          component={CreateMovie}
          options={{ title: "Cadastrar Filme" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

