import { Authenticator } from "@aws-amplify/ui-react";

import { Button } from "primereact/button";

const Dashboard = () => {
  return (
    <div className="flex flex-column">
      <div>Dashboard</div>

      <Authenticator>
        {({ signOut }) => <Button onClick={signOut}>Sign Out</Button>}
      </Authenticator>
    </div>
  );
};

export default Dashboard;
