import { useState } from "react";

import { ChangePassword } from "@features/components";

import { Authenticator } from "@aws-amplify/ui-react";

import { signOut as globalSignOut } from "aws-amplify/auth";

import { Button } from "primereact/button";

const Dashboard = () => {
  const [isVisibleChangePassModal, setVisibleChangePassModal] =
    useState<boolean>(false);

  const handleGlobalSignOut = () => {
    globalSignOut({ global: true });
  };

  const handleSendRequest = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
      response.json()
    );
  };

  return (
    <div className="flex flex-column gap-2">
      <div className="flex justify-content-around">Dashboard</div>

      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <Button
              onClick={signOut}
              pt={{
                root: { className: "flex justify-content-around w-full" },
              }}
            >
              Sign Out
            </Button>
            <p>{user?.username}</p>
          </div>
        )}
      </Authenticator>

      <Button
        onClick={handleGlobalSignOut}
        pt={{
          root: { className: "flex justify-content-around" },
        }}
      >
        Global Sign Out
      </Button>

      <Button
        severity="secondary"
        pt={{
          root: { className: "flex justify-content-around" },
        }}
        onClick={() => setVisibleChangePassModal(true)}
      >
        Change password
      </Button>
      <Button
        severity="success"
        pt={{
          root: { className: "flex justify-content-around" },
        }}
        onClick={handleSendRequest}
      >
        Send request
      </Button>
      <ChangePassword
        visible={isVisibleChangePassModal}
        handleClose={() => {
          setVisibleChangePassModal(false);
        }}
      />
    </div>
  );
};

export default Dashboard;
