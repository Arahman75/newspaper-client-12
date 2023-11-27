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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                path: '/premiumArticles',
                element: <PremiumArticles></PremiumArticles>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }

        ]
    },
]);

export default router;