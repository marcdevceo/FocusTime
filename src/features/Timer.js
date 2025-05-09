import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";
import { colors } from "../utils/colors";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { spacing, fontSizes } from "../utils/sizes";
import { Timing } from "./Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
]

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
    useKeepAwake();
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);

    const onEnd = (reset) => {
        Vibration.vibrate(PATTERN);
        setIsStarted(false);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject);
    }

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                minutes={minutes}
                isPaused ={!isStarted}
                onProgress={setProgress}
                onEnd={onEnd}
                />
                <View style={{paddingTop: spacing.xxl}}>
                    <Text style={styles.title}>
                        Focusing on:
                    </Text>
                    <Text style={styles.task}>
                        {focusSubject}
                    </Text>
                </View>
            </View>
            <View style={styles.timingWrapper}>
                <Timing 
                    onChangeTime={setMinutes}
                    onPress={() => setIsStarted(false)}
                />
            </View>
            <View style={{paddingTop: spacing.xxl}}>
                <ProgressBar 
                    progress={progress} 
                    color={colors.red} 
                    style={{height: spacing.sm}} 
                />
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted ? (
                    <RoundedButton 
                        title={"Start"} 
                        size={125} 
                        onPress={() => setIsStarted(true)}
                    />
                ) : (
                    <RoundedButton 
                        title={"Pause"} 
                        size={125} 
                        onPress={() => setIsStarted(false)}
                    />
                )}
            </View>
            <View style={styles.clearSubjectWrapper}>
                <RoundedButton
                    title={"-"} 
                    size={75} 
                    onPress={clearSubject}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    countdown: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonWrapper: {
        flex: 0.3,
        padding: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    timingWrapper: {
        flex: 0.1,
        paddingTop: spacing.md,
        flexDirection: "row",
    },
    clearSubjectWrapper: {
        flexDirection: "row",
        justifyContent: "center",
    },
    title: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: fontSizes.xl,
        textAlign: "center",
    },
    task: {
        color: colors.white,
        fontSize: fontSizes.lg,
        textAlign: "center",
    },
});
