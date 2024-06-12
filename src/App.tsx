import {
  AuthProvider,
  QueryProvider,
  ThemeProvider,
  ToastProvider,
} from "@providers";

import { Router } from "@routes";
import "@aws-amplify/ui-react/styles.css";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ToastProvider>
          <QueryProvider>
            <Router />
          </QueryProvider>
        </ToastProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export { App };
