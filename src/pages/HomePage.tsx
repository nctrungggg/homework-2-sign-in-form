import { Navigate } from "react-router-dom";
import { ROUTES } from "../configs/routes";
import SignInPage from "./SignInPage";

type Props = {};

const HomePage = (props: Props) => {
  const authToken = sessionStorage.getItem("access_token");

  if (!authToken)
    return authToken ? <SignInPage /> : <Navigate to={ROUTES.login} />;

  return (
    <div className="h-[100vh] p-20">
      <h1 className="text-3xl text-center">Home Page</h1>
    </div>
  );
};

export default HomePage;
