import { View, StyleSheet, ActivityIndicator } from "react-native";
import { theme } from "../../theme";
const LoadingComponent = () => (
  <View style={styles.container} testID="loading">
    <ActivityIndicator color="white" size="large" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray900,
  },
});

export default LoadingComponent;
