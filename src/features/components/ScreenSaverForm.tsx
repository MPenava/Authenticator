/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

import profileImage from "@assets/image.svg";

import { signOut } from "aws-amplify/auth";

import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Password } from "primereact/password";

const ScreenSaverForm = () => {
  const [passcode, setPasscode] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handlePasscode = () => {
    if (passcode === "123456") {
      setError(null);
      localStorage.setItem("userActive", "true");
      window.location.reload();
    } else {
      setError("Wrong passcode!");
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="flex w-20rem">
      <div className="flex flex-column gap-5 mt-7 w-20rem">
        <div className="flex justify-content-center">
          <Avatar
            image={profileImage}
            imageAlt="Profile image"
            shape="circle"
            pt={{
              root: {
                className: "w-10rem h-10rem",
              },
              image: {
                style: { objectFit: "cover" },
              },
            }}
          />
        </div>
        <div className="flex flex-column gap-5">
          <p className="text-white text-4xl font-bold">Carolyn Coolridge</p>
          <div className="flex flex-column gap-2">
            <div className="flex flex-column">
              <label htmlFor="passcode" className="text-white">
                Passcode
              </label>
              <Password
                id="passcode"
                icon="pi pi-lock"
                placeholder="Passcode"
                value={passcode}
                feedback={false}
                onChange={(e) => setPasscode(e.target.value)}
                pt={{ input: { className: "mt-1 w-full" } }}
              />
              <small id="passcode" className="text-red-500 h-1rem">
                {error}
              </small>
            </div>
            <Button
              disabled={passcode.length !== 6}
              pt={{
                root: {
                  className:
                    "flex justify-content-center border-none text-center",
                  style: { backgroundColor: "#B2CBE6", color: "#7F97B1" },
                },
                label: { className: "text-lg" },
              }}
              onClick={handlePasscode}
            >
              Log in
            </Button>
          </div>
        </div>
        <div className="flex flex-column gap-4">
          <Divider
            align="center"
            pt={{
              root: { className: "m-0" },
              content: {
                className: "px-3",
                style: { backgroundColor: "#053547" },
              },
            }}
          >
            <div className="inline-flex align-items-center">
              <p className="text-white">Not you</p>
            </div>
          </Divider>
          <Button
            pt={{
              root: {
                className:
                  "flex justify-content-center border-2 border-white text-center",
                style: { backgroundColor: "transparent" },
              },
              label: { className: "text-lg" },
            }}
            onClick={handleSignOut}
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ScreenSaverForm };
