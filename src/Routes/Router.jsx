import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import AllArticles from "../pages/AllArticles/AllArticles";
import AddArticles from "../pages/AddArticles/AddArticles";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Subscription from "../pages/Subscription/Subscription";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import MyArticles from "../pages/MyArticles/MyArticles";
import PremiumArticles from "../pages/PremiumArticles/PremiumArticles";
import MyProfile from "../pages/MyProfile/MyProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allArticles',
                element: <AllArticles></AllArticles>
            },
            {
                path: '/addArticles',
                element: <AddArticles></AddArticles>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/myArticles',
                element: <MyArticles></MyArticles>
            },
            {
                path: '/subscription',
                element: <Subscription></Subscription>
            },
            {
                path: '/myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/premiumArticles',
                element: <PremiumArticles></PremiumArticles>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            }

        ]
    },
]);

export default router;