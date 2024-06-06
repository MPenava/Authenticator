import { AuthProvider, QueryProvider, ThemeProvider } from "@providers";

import { Router } from "@routes";
import "@aws-amplify/ui-react/styles.css";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <QueryProvider>
          <Router />
        </QueryProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export { App };
