import React from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./redux/reducers";

import Counter from "./components/counter";

const store = createStore(reducers);

export default function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}
