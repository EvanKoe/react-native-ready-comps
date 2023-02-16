import React, { useEffect } from "react";
import { StyleSheet, Text } from 'react-native';
import { TitleProps } from "../constants/CompTypes";

const createTitle = ({
  children,
  style,
  bold,
  size,
  color
}: TitleProps) => {
  const [sizeToPx, setSizeToPx] = React.useState<number>(18);

  useEffect(() => {
    switch (size) {
      case ('XS'): setSizeToPx(14); break;
      case ('S'): setSizeToPx(16); break;
      case ('M'): setSizeToPx(22); break;
      case ('L'): setSizeToPx(28); break;
      case ('XL'): setSizeToPx(32); break;
      case ('XXL'): setSizeToPx(45); break;
    }
  }, []);

  const styles = StyleSheet.create({
    title: {
      fontSize: sizeToPx,
      color: color,
      fontWeight: bold ? 'bold' : '400'
    }
  });

  return (
    <Text style={[styles.title, style]}>{ children }</Text>
  );
}

export default createTitle;
