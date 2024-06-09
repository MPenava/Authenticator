import {
  AuthProvider,
  QueryProvider,
  ThemeProvider,
  UserActivityProvider,
} from "@providers";

import { Router } from "@routes";
import "@aws-amplify/ui-react/styles.css";

const App = () => {
  return (
    <AuthProvider>
      <UserActivityProvider>
        <ThemeProvider>
          <QueryProvider>
            <Router />
          </QueryProvider>
        </ThemeProvider>
      </UserActivityProvider>
    </AuthProvider>
  );
};

export { App };
