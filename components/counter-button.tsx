import React, { ReactChild, ReactChildren } from "react";

import { TouchableOpacity, GestureResponderEvent } from "react-native";

interface ButtonProps {
    onClick: (event: GestureResponderEvent) => void;
    children: ReactChild | ReactChildren;
}

const CounterButton = ({ onClick, children }: ButtonProps) => {
    return <TouchableOpacity onPress={onClick}>{children}</TouchableOpacity>;
};

export default CounterButton;
