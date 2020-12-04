import produce, { Draft } from "immer";
import React, { useContext, useReducer, useMemo, createContext } from "react";
import {
  Theme,
  AppInfoProviderContext,
  AppInfoProviderValues,
  AppInfoActionTypes,
  AppInfoProviderActions,
} from "@types";
import { nothing } from "@utils";

const defaultValues: AppInfoProviderContext = {
  theme: Theme.light,
  dispatch: nothing,
};

const AppInfoContext = createContext<AppInfoProviderContext>(defaultValues);

const appInfoReducer = produce(
  (draft: Draft<AppInfoProviderValues>, action: AppInfoProviderActions) => {
    switch (action.type) {
      case AppInfoActionTypes.toggleTheme: {
        const currentTheme = draft.theme;

        draft.theme = currentTheme === Theme.light ? Theme.dark : Theme.light;
        break;
      }
      case AppInfoActionTypes.setLocalTheme: {
        draft.theme = action.payload;
        break;
      }
      default:
        return draft;
    }
  }
);

export const AppInfoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appInfoReducer, defaultValues);

  const appInfo = useMemo<AppInfoProviderContext>(
    () => ({
      ...state,
      dispatch,
    }),
    [state, dispatch]
  );

  return (
    <AppInfoContext.Provider value={appInfo}>
      {children}
    </AppInfoContext.Provider>
  );
};

export const useAppInfo = () =>
  useContext<AppInfoProviderContext>(AppInfoContext);

AppInfoProvider.displayName = "APP_INFO_PROVIDER";
