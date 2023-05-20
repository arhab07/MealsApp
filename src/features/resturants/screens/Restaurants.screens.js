import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import styled from "styled-components/native";
import Search from "../../../components/Search";
import { RestaurantInfoCard } from "../components/Restaurants-infoCard.component";

const isAndriod = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color:${props => props.theme.colors.ui.quaternary};
`;

const SearchView = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const ViewList = styled(View)`
  flex: 1;
  padding: ${props => props.theme.space[3]};
  background-color: grey;
`;

const Container = styled(SafeArea)`
  margin-top: ${isAndriod ? StatusBar.currentHeight + "px" : "0"};
`;
console.log(StatusBar.currentHeight);
export const RestaurantScreen = () => {
  return (
    <Container>
      <SearchView>
        <Search />
      </SearchView>
      <ViewList>
        <RestaurantInfoCard />
      </ViewList>
    </Container>
  );
};
