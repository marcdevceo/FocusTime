import React from "react";
import {View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes } from "../utils/sizes";
import { spacing } from "../utils/sizes";

export const FocusHistory = ({ history  }) => {
    if (!history || !history.length) return (
        <Text style={styles.title}>
            We haven't focused on anything yet!
        </Text>
    );

    const renderItem = ({ item }) => <Text style={styles.task}>{item}</Text>
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Things we have focused on:
            </Text>
            <FlatList 
                data={history}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.md,
        justifyContent: "center",
    },
    title: {
        color: colors.white,
        fontSize: fontSizes.md,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: spacing.xl,
    },
    task: {
        color: colors.white,
        fontSize: fontSizes.md,
        paddingLeft: spacing.sm,
        paddingTop: spacing.sm,
        paddingBottom: spacing.sm,
        borderColor: colors.white,
        borderWidth: 1,
        marginVertical: spacing.sm,
        marginHorizontal: spacing.md,
    },
})