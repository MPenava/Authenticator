import { useState } from "react";

import { AccountSettings, Authenticator } from "@aws-amplify/ui-react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const Dashboard = () => {
  const [isVisibleChangePassModal, setVisibleChangePassModal] =
    useState<boolean>(false);

  const handleSuccess = () => {
    // eslint-disable-next-line no-alert
    alert("Password is successfully deleted!");
    setVisibleChangePassModal(false);
  };
  return (
    <div className="flex flex-column gap-2">
      <div className="flex justify-content-around">Dashboard</div>

      <Authenticator>
        {({ signOut }) => (
          <Button
            onClick={signOut}
            pt={{
              root: { className: "flex justify-content-around" },
            }}
          >
            Sign Out
          </Button>
        )}
      </Authenticator>

      <Button
        severity="secondary"
        pt={{
          root: { className: "flex justify-content-around" },
        }}
        onClick={() => setVisibleChangePassModal(true)}
      >
        Change password
      </Button>
      <Dialog
        visible={isVisibleChangePassModal}
        onHide={() => setVisibleChangePassModal(false)}
        pt={{
          header: { className: "p-0 border-none" },
          content: { className: "p-5" },
        }}
      >
        <AccountSettings.ChangePassword onSuccess={handleSuccess} />
      </Dialog>
    </div>
  );
};

export default Dashboard;
