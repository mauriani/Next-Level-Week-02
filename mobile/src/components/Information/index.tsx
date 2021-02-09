import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

interface PageInformationProps {
  title: string;
}

const Information: React.FC<PageInformationProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Information;
