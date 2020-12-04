import React from "react";
import { Switch } from "antd";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeProperties, Theme } from "@types";
import { TodoTable } from "@components/Table";
import { lightTheme, darkTheme } from "@utils";
import { useDarkMode } from "@hooks";

const GlobalStyles = createGlobalStyle<{ theme: ThemeProperties }>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    padding: 30px;
  }`;

export const Page: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();
  const cssTheme = theme === Theme.dark ? darkTheme : lightTheme;
  const isOn = theme === Theme.dark;

  return (
    <ThemeProvider theme={cssTheme}>
      <GlobalStyles />
      <Switch onChange={toggleTheme} checked={isOn} />
      <TodoTable />
    </ThemeProvider>
  );
};
