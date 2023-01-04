import { createContext, useContext } from "react";
import useTyper from "../../hooks/useTyper";

const TyperContext = createContext<any>(null);

// @ts-ignore
export function TyperProvider({ children }) {
  const sharedState: null | any = useTyper({});

  // @ts-ignore
  return (
    <TyperContext.Provider value={sharedState}>
      {children}
    </TyperContext.Provider>
  );
}

export function useTyperContext(p: {}) {
  return useContext(TyperContext);
}
