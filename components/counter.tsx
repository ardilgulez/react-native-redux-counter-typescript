import React from "react";
import { View, Text, StyleSheet, GestureResponderEvent } from "react-native";
import CounterButton from "./counter-button";
import CounterText from "./counter-text";

import { increaseCount, decreaseCount } from "../redux/actions/counter-actions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CounterState from "../redux/constants/state/counter-state";

interface CounterProps {
    handleIncrease: (event: GestureResponderEvent) => void;
    handleDecrease: (event: GestureResponderEvent) => void;
    count: number;
}

const Counter = ({ handleIncrease, handleDecrease, count }: CounterProps) => (
    <View style={styles.container}>
        <CounterButton onClick={handleIncrease}>
            <Text style={styles.text}>+</Text>
        </CounterButton>
        <CounterText>
            <Text style={styles.text}>{count}</Text>
        </CounterText>
        <CounterButton onClick={handleDecrease}>
            <Text style={styles.text}>-</Text>
        </CounterButton>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 36,
    },
});

const mapStateToProps = (state: { counter: CounterState }) => {
    return {
        count: state.counter.count,
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            handleIncrease: increaseCount,
            handleDecrease: decreaseCount,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
