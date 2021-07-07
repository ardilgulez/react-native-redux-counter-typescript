import React, { ReactNode, ReactChildren, ReactChild } from "react";

import { View, StyleSheet } from "react-native";

interface TextProps {
    children: ReactChild | ReactChildren;
}

const CounterText = ({ children }: TextProps) => (
    <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
    },
});

export default CounterText;
