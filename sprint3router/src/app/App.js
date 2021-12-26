import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {NotFound404} from "../pages/NotFound/NotFound404";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import ForgotPasswordPage from "../pages/Auth/ForgotPasswordPage";
import ResetPasswordPage from "../pages/Auth/ResetPasswordPage";
import ProfilePage from "../pages/ProfilePage";
import ConstructorPage from "../pages/ConstructorPage";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import AppHeader from "../components/Header/AppHeader";
import IngredientPage from "../pages/IngredientPage";


function App() {

    return (
        <div className="App">
            <Router>
                <AppHeader/>
                <Switch>
                    <ProtectedRoute path="/profile" exact={true}>
                        <ProfilePage />
                    </ProtectedRoute>
                    <ProtectedRoute path="/profile/orders" exact={true}>
                        <ProfilePage />
                    </ProtectedRoute>
                    <Route path="/ingredients/:id">
                        <IngredientPage />
                    </Route>
                    <Route path="/" exact={true}>
                        <ConstructorPage />
                    </Route>
                    <Route path="/login" exact={true}>
                        <LoginPage />
                    </Route>
                    <Route path="/register" exact={true}>
                        <RegisterPage />
                    </Route>
                    <Route path="/forgot-password" exact={true}>
                        <ForgotPasswordPage />
                    </Route>
                    <Route path="/reset-password" exact={true}>
                        <ResetPasswordPage />
                    </Route>
                    <Route>
                        <NotFound404 />
                    </Route>
                </Switch>

            </Router>
        </div>
  );
}

export default App;

