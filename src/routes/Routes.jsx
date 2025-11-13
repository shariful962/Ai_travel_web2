import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Error from "../pages/Error";
import App from "../App";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import ForgotPassword from "../components/auth/ForgotPassword";
import OtpVerify from "../components/auth/OtpVerify";
import ResetPassword from "../components/auth/ResetPassword";

import TripPlanner from "../pages/trip planner/TripPlanner";
import PricingPlans from "../pages/pricing/PricingPlans";
import Profile from "../pages/profile/Profile"
import EditProfile from "../pages/profile/EditProfile";
import PrivacyPolicy from "../pages/profile/PrivacyPolicy";
import Expedition from "../pages/expedition/Expedition";
import Hitlists from "../pages/hitlists/Hitlists";
import TermsCondition from "../pages/profile/TermsCondition";
import HelpSupport from "../pages/profile/HelpSupport";
import FAQ from "../pages/profile/FAQ";



export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <Error />,
        children: [
            {index: true, Component: App},
            {path: 'trip-planner', Component: TripPlanner},
            {path: 'expedition', Component: Expedition},
            {path: 'hitlists', Component: Hitlists},
            {path: 'pricing', Component: PricingPlans},
            {path:'profile', Component: Profile},
            {path:'profile/edit', Component: EditProfile},
            {path:'profile/edit/faq', Component: FAQ},
            {path:'profile/privacy-policy', Component: PrivacyPolicy},
            {path:'profile/terms-condition', Component: TermsCondition},
            {path:'profile/help-support', Component: HelpSupport},
        ]
    },
    {
        Component: AuthLayout,
        children: [
            {path: 'signin', Component: Login},
            {path: 'signup', Component: Signup},
            {path: 'forgotpassword', Component: ForgotPassword},
            {path: 'otp', Component: OtpVerify},
            {path: 'resetpassword', Component: ResetPassword}
        ]
    }
    // {
    //     path: '/home',
    //     Component: MainLayout,
    //     children: [
    //         {index: true, Component: Root},
            
            
    //     ]
        


    // }
])