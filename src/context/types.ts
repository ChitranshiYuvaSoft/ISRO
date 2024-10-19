import React from "react";

// Isro Context Types
export interface IsroContextType {
  someState: string;
  setSomeState: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<ActionType>;
  centresData: CentresData[];
  launchersData: LaunchersData[];
  satellitesData: SatellitesData[];
  spaceCraftsData: SpaceCraftsData[];
  // isLoading: boolean;
}

export interface CentresData {
  id: string;
  name: string;
  Place: string;
  State: string;
}

export interface LaunchersData {
  id: number;
}

export interface SatellitesData {
  id : string;
  country : string;
  launch_date : string;
  mass : string;
  launcher : string;
}

export interface SpaceCraftsData {
  id : string;
  name : string;
}

// Isro Reducer Types

export interface StateType {
  someState: string;
}

export type ActionType =
  | { type: "SET_STATE"; payload: string }
  | { type: "SET_CENTRES_DATA"; payload: CentresData[] }
  | { type: "SET_LAUNCHERS_DATA"; payload: LaunchersData[] }
  | { type: "SET_SATELLITES_DATA"; payload: LaunchersData[] }
  | { type: "SET_SPACECRAFTS_DATA"; payload: SpaceCraftsData[] }
  | { type: "RESET_STATE" };
