import { Dispatch } from "react";

export enum Theme {
  dark = "dark",
  light = "light",
}

export type ThemeProperties = {
  body: string;
  text: string;
  toggleBorder: string;
  gradient: string;
  tableBackground: string;
  tableBorder: string;
  tableHeader: string;
};

export enum AppInfoActionTypes {
  toggleTheme = "TOGGLE_THEME",
  setLocalTheme = "SET_LOCAL_THEME",
  setUser = "SET_USER",
  deleteUser = "DELETE_USER",
}

type AppInfoProviderPayloads = {
  [AppInfoActionTypes.toggleTheme]: undefined;
  [AppInfoActionTypes.setLocalTheme]: Theme;
  [AppInfoActionTypes.setUser]: {
    id: number;
    name: string;
  };
  [AppInfoActionTypes.deleteUser]: {
    id: number;
  };
};

export type AppInfoProviderValues = {
  theme: Theme;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export type AppInfoProviderActions = ActionMap<AppInfoProviderPayloads>[keyof ActionMap<AppInfoProviderPayloads>];

export type AppInfoProviderContext = AppInfoProviderValues & {
  dispatch: Dispatch<AppInfoProviderActions>;
};
