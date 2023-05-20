import React from "react";
import { StyleSheet } from "react-native";
import { Text , Card} from "react-native-paper";

export const RestaurantInfoCard= ({restaurant ={}}) => {
    const {
        name = "Spades Restaurant",
        icon,
        photo=[
            "https://www.thequickfinder.com/wp-content/uploads/2021/05/spades-lagos-18.jpg"
        ],
        address="50 - spades of gray",
        isOpenNow= true,
        rating = 5,
        isClosedTemporarily=false

    } = restaurant

    return (
        <>
    <Card elevation={5} style={styles.card}>
    <Card.Cover key={name} source={{ uri:  photo[0] }} style={styles.cover} />
    {/* <Card.Title title={name}/> */}
    {/* <Text>{name}</Text> */}
    <Card.Content>
      <Text variant="titleLarge">{name}</Text>
    </Card.Content>
   
  </Card>
   
   
   
        </>
    )
}

const styles = StyleSheet.create({
    card: {
backgroundColor:"#fff",
    },
    cover:{
        padding:16,
        backgroundColor:"#fff"
    }
})