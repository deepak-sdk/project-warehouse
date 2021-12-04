import React from "react";
import { useHistory } from "react-router";
import { useTable } from "react-table";

export function Warehousedata({ warehouse }) {
  const history = useHistory();

  const data = React.useMemo(
    () => [
      {
        name: "Warehouse-165",
        code: "W-00001",
        id: 1,
        city: "Delhi",
        space_available: 1234,
        type: "Leasable Space",
        cluster: "cluster-a-32",
        is_registered: true,
        is_live: false,
      },
      {
        name: "Warehouse-276",
        code: "W-00002",
        id: 2,
        city: "Chennai",
        space_available: 124,
        type: "Warehouse Service",
        cluster: "cluster-a-1",
        is_registered: true,
        is_live: false,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Id", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Code", accessor: "code" },
      { Header: "City", accessor: "city" },
      { Header: "Type", accessor: "type" },
      { Header: "Cluster", accessor: "cluster" },
      { Header: "Space Available", accessor: "space_available" },
    ],
    []
  );

  const warehouseData = React.useMemo(() => [...warehouse], [warehouse]);
  const warehouseColumns = React.useMemo(
    () =>
      warehouse[0]
        ? Object.keys(warehouse[0])
            .filter((key) => key !== "is_live")
            .filter((key) => key !== "is_registered")
            .map((key) => {
              return { Header: key, accessor: key };
            })
        : [],
    [warehouse]
  );

  const tableEditHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Headers: "Edit",
        Cell: ({ row }) => (
          <button onClick={() => history.push("./" + row.values.name)}>
            Edit
          </button>
        ),
      },
    ]);
  };

  const tableInstance = useTable(
    {
      columns: warehouseColumns,
      data: warehouseData,
    },
    tableEditHooks
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
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
    </div>
  );
}
