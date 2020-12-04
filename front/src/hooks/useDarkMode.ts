import { useLayoutEffect } from "react";
import { useAppInfo } from "@providers";
import { Theme, AppInfoActionTypes } from "@types";

export const useDarkMode = () => {
  const { theme, dispatch } = useAppInfo();

  const toggleTheme = () => {
    dispatch({ type: AppInfoActionTypes.toggleTheme });

    const newTheme = theme === Theme.light ? Theme.dark : Theme.light;
    localStorage.setItem("theme", newTheme);
  };

  const setLocalTheme = () => {
    const localTheme = window.localStorage.getItem("theme") as Theme;

    if (localTheme) {
      dispatch({
        type: AppInfoActionTypes.setLocalTheme,
        payload: localTheme,
      });
    }
  };

  useLayoutEffect(setLocalTheme, []);

  return { theme, toggleTheme };
};
