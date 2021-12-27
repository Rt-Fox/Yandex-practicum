import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {getUser} from "../services/http/user/getUser";
import {useDispatch} from "react-redux";
import {getData} from "../services/http/getData";
import AppRouter from "./AppRouter";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(getUser())
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(getData())
    }, [dispatch]);

    return (
        <Router>
            <AppRouter/>
        </Router>
    );
}

export default App;

