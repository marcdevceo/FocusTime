import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export const Timing = ({ onChangeTime}) => {
    return (
        <View style={styles.timimgButton}>
            <RoundedButton 
                size={75} 
                title={10} 
                onPress={() => onChangeTime(10)}
            />
            <RoundedButton 
                size={75} 
                title={15} 
                onPress={() => onChangeTime(15)}
            />
            <RoundedButton 
                size={75} 
                title={30} 
                onPress={() => onChangeTime(30)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    timimgButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItmes: 'center',
    },
})