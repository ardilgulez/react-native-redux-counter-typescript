import React, { ReactNode, ReactChildren, ReactChild } from "react";

import { View } from "react-native";

interface TextProps {
    children: ReactChild | ReactChildren;
}

const CounterText = ({ children }: TextProps) => <View>{children}</View>;

export default CounterText;
