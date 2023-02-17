import React from "react";
import { StyleSheet, View } from "react-native";
import { TileProps } from "../constants/CompTypes";

const createTile = ({
  children,
  backgroundColor,
  borderRadius,
  style
}: TileProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      paddingVertical: 18,
      paddingHorizontal: 18
    }
  });

  return (
    <View style={[ styles.container, style ]}>
      { children }
    </View>
  );
}

export default createTile;
