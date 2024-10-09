import { Text, StyleSheet } from "react-native";

export function StyledText({children }) {
  return (
    <Text style={styles.text}>
      {children}
    </Text>
  )
} 

const styles = StyleSheet.create({
  text: {
    fontSize: 16, 
    fontFamily: 'Lato', 
    fontWeight: 400, 
    lineHeight: 18
  }
})