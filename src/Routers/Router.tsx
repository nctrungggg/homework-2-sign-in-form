import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../configs/routes";
import PageNotFound from "../components/pageNotFound/PageNotFound";

const SignInPage = lazy(() => import("../pages/SignInPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const HomePage = lazy(() => import("../pages/HomePage"));

export const Router = () => {
  
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />}></Route>
        <Route path={ROUTES.login} element={<SignInPage />}></Route>
        <Route path={ROUTES.register} element={<SignUpPage />}></Route>
        <Route path={ROUTES.pageNotFound} element={<PageNotFound />}></Route>

        {/* <ProtectedRoute path={ROUTES.home} element={<HomePage />} /> */}
      </Routes>
    </Suspense>
  );
};
