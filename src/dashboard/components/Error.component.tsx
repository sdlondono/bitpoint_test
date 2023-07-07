import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";
type ErrorComponentProps = {
  message: string;
};
const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => (
  <View style={styles.container} testID="error">
    <Text style={styles.h1}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray900,
  },
  h1: {
    fontFamily: "FiraCode_500Medium",
    color: theme.colors.zinc300,
    fontSize: 16,
  },
});

export default ErrorComponent;
