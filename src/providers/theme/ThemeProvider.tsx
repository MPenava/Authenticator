import "./mytheme/theme.scss";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { PrimeReactProvider } from "primereact/api";

type ThemeProviderProps = {
  children?: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
};

export { ThemeProvider };
