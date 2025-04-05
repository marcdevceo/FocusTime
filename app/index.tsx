import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  _View,
} from "react-native";
import { colors } from "../src/utils/colors";
import { Focus } from "../src/features/Focus";
import { Timer } from "../src/features/Timer";
import { FocusHistory } from "../src/features/FocusHistory";
import { fontSizes, spacing } from "../src/utils/sizes";


export default function App() {
  const [currentSubject, setCurrentSubject] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Focus Time
      </Text>
      {!currentSubject ? (
      <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history as string[]} />        
      </>
      ) : (
      <Timer 
        focusSubject={currentSubject as string}
        onTimerEnd={(subject: string) => {
        setHistory([...history, subject]);
        }}
        clearSubject={() => setCurrentSubject(null)}
      />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.navy,
  },
  header: {
    color: colors.white,
    fontSize: fontSizes.xxl,
    textAlign: "center",
    fontFamily: "Futura",
    fontWeight: "bold",
    padding: spacing.md,
  }
});
