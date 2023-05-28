import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import { CustomDivider, } from './CustomDivider';
import { CustomDividerText } from "./CustomDivider";
import colors from '../../assets/theme/colors'

type defaultProps = {
  positionLeft?: boolean;
  title: string
  imgSource: any,
  navigation: any
};

export default function CustomCard({
  positionLeft,
  title,
  imgSource,
  navigation
}: defaultProps) {
  return (
    <View style={{ marginBottom: 25, marginTop: 25 }}>
      <TouchableHighlight onPress={() => (navigation.navigate("Test"))} underlayColor='#F5C1B2' style={{ borderRadius: 7 }}>
        <Card style={[Styles.container, { alignSelf: positionLeft ? 'flex-start' : 'flex-end', }]}>
          <Card.Content >
            {positionLeft ? (
              <View style={{ flexDirection: "row", alignItems: 'center', }}>
                <Title>Iniciar análisis</Title>
                <Card.Cover source={imgSource} style={[Styles.CardImage, { marginLeft: 8, marginRight: -80 }]} />
              </View>
            ) : (
              <View style={{ flexDirection: "row", alignItems: 'center', }}>
                <Card.Cover source={imgSource} style={[Styles.CardImage, { marginLeft: -50, marginRight: 8 }]} />
                <Title>Iniciar análisis</Title>
              </View>)}
          </Card.Content>

        </Card>
      </TouchableHighlight>
      <View >
        <CustomDividerText positionLeft={!positionLeft} text={title} />
        <CustomDivider />
      </View>
    </View >
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: colors.primary,
    borderWidth: 1,
    width: '80%',
    marginBottom: 5,
    marginTop: 5
  },
  CardImage: {
    width: 150,
    height: 150
  },
})
