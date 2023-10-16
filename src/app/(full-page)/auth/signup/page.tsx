"use client";

import React, { useContext, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { LayoutContext } from "../../../../layout/context/layoutcontext";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Message } from "primereact/message";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { LoginService } from "@/demo/service/LoginService";

const SignUpPage = () => {
   const router = useRouter();

  const [client, setClient] = useState({
    email: "",
    password: "",
    phone_number: "",
    first_name: "",
    last_name: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    phone_number: "",
    first_name: "",
    last_name: "",
  });

  const { layoutConfig } = useContext(LayoutContext);
  const containerClassName = classNames(
    "surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden",
    { "p-input-filled": layoutConfig.inputStyle === "filled" }
  );
  const loginService = new LoginService();

  return (
    <div className={containerClassName}>
      <div className="flex flex-column align-items-center justify-content-center w-full md:w-8 lg:w-5">
        <div
          style={{
            borderRadius: "36px",
            padding: "0.3rem",
            background:
              "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)",
          }}
          className="w-full"
        >
          <div
            className="w-full surface-card py-5 px-5 sm:px-8"
            style={{ borderRadius: "33px" }}
          >
            <div className="text-center mb-5">
              <div className="text-900 text-3xl font-medium mb-3">Sign In</div>
              <span className="text-600 font-medium">
                Sign in to your account
              </span>
            </div>

            <div>
              <div className="field">
                <InputText
                  id="firstName"
                  type="text"
                  value={client.first_name}
                  onChange={(e) =>
                    setClient({ ...client, first_name: e.target.value })
                  }
                  placeholder="First Name"
                  className={`w-full p-3 ${classNames({
                    "p-invalid": !client.first_name,
                  })}`}
                />
                {error?.first_name && (
                  <Message severity="error" text={error.first_name} />
                )}
              </div>
              <div className="field">
                <InputText
                  id="lastname"
                  type="text"
                  value={client.last_name}
                  onChange={(e) =>
                    setClient({ ...client, last_name: e.target.value })
                  }
                  placeholder="Last Name"
                  className={`w-full p-3 ${classNames({
                    "p-invalid": !client.last_name,
                  })}`}
                />
                {error?.last_name && (
                  <Message severity="error" text={error.last_name} />
                )}
              </div>
              <div className="field">
                <InputText
                  id="email"
                  type="text"
                  value={client.email}
                  onChange={(e) =>
                    setClient({ ...client, email: e.target.value })
                  }
                  placeholder="Email"
                  className={`w-full p-3 ${classNames({
                    "p-invalid": !client.email,
                  })}`}
                />
                {error?.email && (
                  <Message severity="error" text={error.email} />
                )}
              </div>
              <div className="field">
                <InputText
                  id="phone_number"
                  type="text"
                  value={client.phone_number}
                  onChange={(e) =>
                    setClient({ ...client, phone_number: e.target.value })
                  }
                  placeholder="Phone No."
                  className={`w-full p-3 ${classNames({
                    "p-invalid": !client.phone_number,
                  })}`}
                />
                {error?.first_name && (
                  <Message severity="error" text={error.phone_number} />
                )}
              </div>
              <div className="field">
                <Password
                  id="password"
                  type="text"
                  value={client.password}
                  onChange={(e) =>
                    setClient({ ...client, password: e.target.value })
                  }
                  toggleMask
                  placeholder="Password"
                  className="w-full "
                  inputClassName={`w-full p-3 ${classNames({
                    "p-invalid": !client.password,
                  })}`}
                />
                {error?.password && (
                  <Message severity="error" text={error.password} />
                )}
              </div>
              <div className="flex align-items-center justify-content-between mb-5 gap-5">
                <Button
                  label="Register"
                  className="p-3 text-xl w-5"
                  onClick={() => {
                    loginService.validateSignUp(client).then((data) => {
                      if (data.data?.error) {
                        setError(data.data.message);
                      }
                      if(data.data?.user){
                        router.push('/auth/login');
                      }
                    //   console.log(data);
                      // router.push('/dashboard');
                    });
                  }}
                ></Button>
              </div>    
              <div className="font-medium text-center">
                Have An Account?
                <Link href={"/auth/login"}>
                  <span
                    className="no-underline ml-2 text-center cursor-pointer"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Sign In
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
