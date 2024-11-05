"use client";

import { createContext, useReducer, ReactNode, useContext } from "react";
import {
  CentresData,
  IsroContextType,
  LaunchersData,
  SatellitesData,
  SpaceCraftsData,
} from "./types";
import IsroReducer from "./IsroReducer";
import { getspacecraftsData } from "./IsroAction";

interface InitialState {
  centresData: CentresData[];
  launchersData: LaunchersData[];
  satellitesData: SatellitesData[];
  spaceCraftsData: SpaceCraftsData[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

const initialState: InitialState = {
  centresData: [],
  launchersData: [],
  satellitesData: [],
  spaceCraftsData: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const IsroContext = createContext<IsroContextType | undefined>(undefined);

export const IsroProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(IsroReducer, initialState);


  return (
    <IsroContext.Provider value={{ ...state, dispatch }}>
      {children}
    </IsroContext.Provider>
  );
};


// Custom Hook
export const useIsroContext = () => {
  const context = useContext(IsroContext);
  if (!context) {
    throw new Error("useIsroContext must be used within an IsroProvider");
  }
  return context;
};

export default IsroContext;
