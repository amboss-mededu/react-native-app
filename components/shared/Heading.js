import { Text, StyleSheet } from "react-native";

export function Heading({level = 1, children }) {
  return (
    <Text style={[styles.base, styles[`h${level}`]]}>
      {children}
    </Text>
  )
} 

const styles = StyleSheet.create({
  base: {
    fontFamily: 'Lato', 
  },
  h1: {
    fontSize: 26,
    fontWeight: 900,
    lineHeight: 30
  },
  h2: {
    fontSize: 24,
    fontWeight: 900,
    lineHeight: 28
  },
  h3: {
    fontSize: 20,
    fontWeight: 900,
    lineHeight: 26
  }
})