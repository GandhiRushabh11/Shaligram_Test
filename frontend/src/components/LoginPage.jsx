import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-xl bg-white w-96 text-center h-max px-4">
            <div className="text-4xl font-bold pt-6">Login</div>
            <div className="text-base text-slate-400 pt-2">
              Enter your credentials to access your account
            </div>

            <InputBox
              label="UserName"
              placeholder={"Enter Your Username"}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <InputBox
              label="Password"
              placeholder={"Enter Your Password"}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <div className="py-4">
              <Button
                label={"Login"}
                onClick={async () => {
                  try {
                    const data = await axios.post(
                      "http://localhost:5000/api/v1/users/login",
                      { email: username, password }
                    );
                    localStorage.setItem("token", data.data.token);
                    navigate("/dashboard");
                    console.log(data);
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
