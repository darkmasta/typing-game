import React, { createContext, useContext, ReactNode } from "react";
import useTyper from "../../hooks/useTyper";

const TyperContext = createContext<any>(null);

interface TyperProviderProps {
    children: ReactNode;
}

export function TyperProvider({ children } : TyperProviderProps) {
  const sharedState: null | any = useTyper({});

  return (
    <TyperContext.Provider value={sharedState}>
      {children}
    </TyperContext.Provider>
  );
}

export function useTyperContext(p: {}) {
  return useContext(TyperContext);
}
