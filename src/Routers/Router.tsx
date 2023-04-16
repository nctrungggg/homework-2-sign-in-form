import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../configs/routes";

const SignInPage = lazy(() => import("../pages/SignInPage"));
const HomePage = lazy(() => import("../pages/HomePage"));

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route path={ROUTES.login} element={<SignInPage />}></Route>

        <Route path={ROUTES.home} element={<HomePage />}></Route>

        <Route path="/" element={<SignInPage />}></Route>
      </Routes>
    </Suspense>
  );
};
