import styled from "styled-components";
import { ThemeProperties } from "@types";

export const Styles = styled.div`
  table {
    background: ${({ theme }: { theme: ThemeProperties }) =>
      theme.tableBackground};
    border-radius: 4px;
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th:first-child {
      border-radius: 4px 0 0 0;
    }

    th:last-child {
      border-radius: 0 4px 0 0;
    }

    th,
    td {
      padding: 0.5rem;
      border-bottom: 1px solid
        ${({ theme }: { theme: ThemeProperties }) => theme.tableBorder};
      border-right: 1px solid
        ${({ theme }: { theme: ThemeProperties }) => theme.tableBorder};

      :last-child {
        border-right: 0;
      }
    }

    th {
      background: ${({ theme }: { theme: ThemeProperties }) =>
        theme.tableHeader};
      color: white;
      font-weight: bold;
    }
  }
`;
