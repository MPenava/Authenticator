import { createContext, useContext, useEffect, useMemo, useState } from "react";

type TActivity = {
  isActive: boolean;
};

type TActivityProps = {
  children: JSX.Element;
};

const UserActivityContext = createContext<TActivity | undefined>(undefined);

export const useUserActivity = () => useContext(UserActivityContext);

const UserActivityProvider = ({ children }: TActivityProps) => {
  const [isActive, setIsActive] = useState(() => {
    const savedStatus = localStorage.getItem("userActive");
    return savedStatus !== null ? JSON.parse(savedStatus) : true;
  });

  useEffect(() => {
    let timeout: number | undefined;
    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsActive(false);
        localStorage.setItem("userActive", JSON.stringify(false));
      }, 300000);
    };

    const handleActivity = () => {
      resetTimeout();
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keypress", handleActivity);
    window.addEventListener("touchstart", handleActivity);

    resetTimeout();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keypress", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
    };
  }, []);

  return (
    <UserActivityContext.Provider
      value={useMemo(() => ({ isActive }), [isActive])}
    >
      {children}
    </UserActivityContext.Provider>
  );
};

export { UserActivityProvider };
