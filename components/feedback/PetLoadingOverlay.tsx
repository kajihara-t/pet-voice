import React, { useEffect } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const PetLoadingOverlay = ({ size = 36, color = "#FF6B6B" }) => {
  const rotateAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2400,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

  return (
    <View style={styles.overlayContainer}>
      <View style={styles.loadingBox}>
        <AnimatedIcon
          name="dog"
          size={size}
          color={color}
          style={{
            transform: [{ rotate }],
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
  },
  loadingBox: {
    padding: 30,
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default PetLoadingOverlay;
