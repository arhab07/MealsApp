import React from "react";

import { StatusBar, StyleSheet, Text, View  , SafeAreaView, Platform} from 'react-native';
import Search from "../../../components/Search";
import { RestaurantInfoCard} from "../components/Restaurants-infoCard.component";

export const RestaurantScreen = () => {
    return(
    <SafeAreaView style={styles.container}>
     <View style={styles.search}>
     <Search />
      </View>
      <View style={styles.list}>
     <RestaurantInfoCard />

      </View>
     </SafeAreaView>
    )
}


const isAndriod = Platform.OS === "android" 
console.log(StatusBar.currentHeight)
const styles = StyleSheet.create({
  container: {
    flex: 1,
marginTop: isAndriod ? StatusBar.currentHeight : 0,
backgroundColor:"#fff"
 },
search:{
  padding: 16,
},
list:{
    flex:1,
    padding: 16,
    backgroundColor:"grey"
} 
})