import React from 'react';
import AppHeader from "../components/Header/AppHeader";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import ConstructorPage from "../pages/ConstructorPage";
import IngredientPage from "../pages/IngredientPage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import ForgotPasswordPage from "../pages/Auth/ForgotPasswordPage";
import ResetPasswordPage from "../pages/Auth/ResetPasswordPage";
import {NotFound404} from "../pages/NotFound/NotFound404";
import Modal from "../components/Modal/Modal";
import IngredientDetails from "../components/BurgerIngredients/Ingredients/IngredientDetails";

function AppRouter() {
    const location = useLocation();
    const history = useHistory();

    const background = location.state && location.state.background;

    const handleClickClose = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div className="App">
            <AppHeader/>
            <Switch location={background || location}>
                <ProtectedRoute path="/profile" exact={true}>
                    <ProfilePage/>
                </ProtectedRoute>
                <ProtectedRoute path="/profile/orders" exact={true}>
                    <ProfilePage/>
                </ProtectedRoute>
                <Route path="/" exact={true}>
                    <ConstructorPage/>
                </Route>
                <Route path="/ingredients/:id">
                    <IngredientPage/>
                </Route>
                <Route path="/login" exact={true}>
                    <LoginPage/>
                </Route>
                <Route path="/register" exact={true}>
                    <RegisterPage/>
                </Route>
                <Route path="/forgot-password" exact={true}>
                    <ForgotPasswordPage/>
                </Route>
                <Route path="/reset-password" exact={true}>
                    <ResetPasswordPage/>
                </Route>
                <Route>
                    <NotFound404/>
                </Route>
            </Switch>
            {background &&
                <Route path="/ingredients/:id">
                    <Modal children={<IngredientDetails/>} handleClickClose={handleClickClose} header={'Детали ингредиента'}/>
                </Route>
            }
        </div>
    );
}

export default AppRouter;