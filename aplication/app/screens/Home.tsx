import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, ActivityIndicator, Button, TouchableOpacity } from 'react-native';


export default function HomeScreen() {
    return (
        <View style={styles.containerHome} >
            <View style={styles.containerDataHome} >
                <Text>aksndkjasnd</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    containerHome: {
        backgroundColor: "white",
    },
    containerDataHome: {
        padding: 1,
        paddingTop: 0
    }
});
