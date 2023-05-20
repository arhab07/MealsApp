import React from "react";
import { StyleSheet, View  } from "react-native";
import styled from "styled-components/native";
import { Text, Card} from "react-native-paper";

const Title = styled(Text)`
  font-size: ${ props  => props.theme.fontSizes.title};
  
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.ui.primary};
`;


const RestaurantCard = styled(Card)`
background-color:${props => props.theme.colors.ui.quaternary};

`

const RestaurantCover =styled(Card.Cover)`
  
  backgroundColor:${props => props.theme.colors.ui.quaternary};
`
const Info = styled(View)`
    padding:${props => props.theme.space[3]};
`
const Address = styled(Text)`
font-size: ${props => props.theme.fontSizes.caption};
font-family: ${({theme}) => theme.fonts.body};
`
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
         <RestaurantCard elevation={5}>
            <RestaurantCover key={name} source={{ uri:  photo[0] }}/>
            <Info>
                <Title>{name}</Title>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    </>
        )
}

