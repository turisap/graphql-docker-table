import React, {
  useState,
  useMemo,
  PropsWithChildren,
  MouseEventHandler,
} from "react";
import { useTodos } from "@hooks";
import {
  useTable,
  useFilters,
  Column,
  Row,
  TableInstance,
  TableOptions,
} from "react-table";
import { TodoModel } from "@generated";
import { Styles } from "./Styles";

export interface Table<T extends object = {}> extends TableOptions<T> {
  name: string;
  onAdd?: (instance: TableInstance<T>) => MouseEventHandler;
  onDelete?: (instance: TableInstance<T>) => MouseEventHandler;
  onEdit?: (instance: TableInstance<T>) => MouseEventHandler;
  onClick?: (row: Row<T>) => void;
}

export const TodoTable: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const { loading, error, todos } = useTodos();

  const columns = useMemo<Column<TodoModel>[]>(
    () => [
      {
        Header: "X",
        accessor: "todo_id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "State",
        accessor: (originalRow) => originalRow.filter?.title,
        id: "filter",
      },
      {
        Header: "Initiator",
        accessor: (originalRow) => originalRow.initiator?.title,
        id: "initiator",
      },
    ],
    []
  );

  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading..</p>;

  return (
    <div onClick={() => setCounter(counter + 1)}>
      <h2>My first Apollo app 🚀 {counter}</h2>

      <TableBlueprint<TodoModel>
        data={todos}
        columns={columns}
        name="todoTable"
      />
    </div>
  );
};

function TableBlueprint<T extends object>(props: PropsWithChildren<Table<T>>) {
  const tableInstance = useTable<T>(
    {
      columns: props.columns,
      data: props.data,
    },
    useFilters
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <Styles>
      <table {...getTableProps()} style={{ borderRadius: "5px" }}>
        <thead>
          {
            /* eslint-disable react/jsx-key */
            headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
}
