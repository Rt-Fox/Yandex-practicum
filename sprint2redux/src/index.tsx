import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from "./app/App";
import {Provider} from "react-redux";
import {store} from "./services";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

ReactDOM.render(
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <App/>
        </DndProvider>
    </Provider>,
    document.getElementById('root')
);
