import React, { ReactChild, ReactChildren } from "react";

import {
    TouchableOpacity,
    GestureResponderEvent,
    StyleSheet,
} from "react-native";

interface ButtonProps {
    onClick: (event: GestureResponderEvent) => void;
    children: ReactChild | ReactChildren;
}

const CounterButton = ({ onClick, children }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#f0f0f0",
        padding: 50,
        borderRadius: 25,
    },
});

export default CounterButton;
