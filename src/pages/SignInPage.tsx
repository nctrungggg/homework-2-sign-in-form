import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginParams } from "../models/auth";
import SignInForm from "../modules/auth/components/SignInForm";
import { login } from "../modules/auth/redux/AuthSlice";
import { useState } from "react";
import { ROUTES } from "../configs/routes";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const user = useSelector((state: any) => state.auth);
  console.log("user:", user);

  const handleSubmitForm = async (values: ILoginParams) => {
    try {
      setLoading(true);

      const action = login(values);

      const resultAction = await dispatch<any>(action);
      unwrapResult(resultAction);

      setTimeout(() => {
        setLoading(false);

        toast.success("Logged in successfully!!");

        navigate(ROUTES.home);
      }, 2000);
    } catch (error: any) {
      setTimeout(() => {
        setLoading(false);

        toast.error("Wrong Email or Password!");
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center p-12">
      <div className="rounded-xl w-[450px] shadow-md h-[600px] py-10 px-14">
        <h1 className="mb-10 text-3xl font-semibold text-center">Sign In</h1>

        <SignInForm onSubmitForm={handleSubmitForm} loading={loading} />
      </div>

      <div className="w-[450px] shadow-xl h-[600px] hidden lg:block">
        <img
          className="object-cover w-full h-full rounded-xl"
          src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignInPage;
