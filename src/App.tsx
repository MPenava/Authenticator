import { Router } from "@routes";
import { QueryProvider, ThemeProvider } from "@providers";

const App = () => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <Router />
      </QueryProvider>
    </ThemeProvider>
  );
};

export { App };
