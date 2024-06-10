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
      <ThemeProvider>
        <QueryProvider>
          <UserActivityProvider>
            <Router />
          </UserActivityProvider>
        </QueryProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export { App };
