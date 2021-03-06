import React, { useMemo, useContext } from "react";
import { useHistory } from "react-router";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import { GlobalSearch } from "./globalSearch";
import AppContext from "../context/app-context";
import Button from "../UI/Button";
import { API_URL } from "../MOCK_API";

export function WareHouseData() {
  const ctx = useContext(AppContext);

  const history = useHistory();

  //   const data = React.useMemo(
  //     () => [
  //       {
  //         name: "Warehouse-165",
  //         code: "W-00001",
  //         id: 1,
  //         city: "Delhi",
  //         space_available: 1234,
  //         type: "Leasable Space",
  //         cluster: "cluster-a-32",
  //         is_registered: true,
  //         is_live: false,
  //       },
  //       {
  //         name: "Warehouse-276",
  //         code: "W-00002",
  //         id: 2,
  //         city: "Chennai",
  //         space_available: 124,
  //         type: "Warehouse Service",
  //         cluster: "cluster-a-1",
  //         is_registered: true,
  //         is_live: false,
  //       },
  //     ],
  //     []
  //   );

  //   const columns = React.useMemo(
  //     () => [
  //       { Header: "Id", accessor: "id" },
  //       { Header: "Name", accessor: "name" },
  //       { Header: "Code", accessor: "code" },
  //       { Header: "City", accessor: "city" },
  //       { Header: "Type", accessor: "type" },
  //       { Header: "Cluster", accessor: "cluster" },
  //       { Header: "Space Available", accessor: "space_available" },
  //     ],
  //     []
  //   );

  const warehouseData = useMemo(() => [...ctx.warehouse], [ctx.warehouse]);
  const warehouseColumns = useMemo(
    () =>
      ctx.warehouse[0]
        ? Object.keys(ctx.warehouse[0])
            .filter((key) => key !== "is_live")
            .filter((key) => key !== "is_registered")
            .map((key) => {
              // console.log({Header:key, accessor: key})
              return { Header: key, accessor: key };
            })
        : [],
    [ctx.warehouse]
  );

  // console.log(warehouse[0])
  const tableEditHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit ID",
        Header: "Edit",
        Cell: ({ row }) => (
          <Button onClick={() => history.push("/edit/" + row.values.id)}>
            Edit
          </Button>
        ),
      },
      {
        id: "Delete ID",
        Header: "",
        Cell: ({ row }) => (
          <Button
            className="delete-warehouse"
            onClick={() => {
              // console.log((row.values.code))
              fetch(`${API_URL}/${row.values.id}`, { method: "DELETE" });
            }}
          >
            Delete
          </Button>
        ),
      },
    ]);
  };

  const tableInstance = useTable(
    {
      data: warehouseData,
      columns: warehouseColumns,
    },
    useGlobalFilter,
    tableEditHooks,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;
  return (
    <>
      <GlobalSearch
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      />
      <div className="warehousedata-table">
        <table {...getTableProps()}>
          {/* {ctx.loading && <h1>A moment please...</h1>}
          {ctx.error && (
            <div>{`There is a problem fetching the post data - ${ctx.error}`}</div>
          )} */}
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      borderBottom: "solid 3px red",
                    }}
                  >
                    {column.render("Header")}
                    {"  "}
                    {column.isSorted ? (column.isSortedDesc ? "??????" : "??????") : ""}
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
    </>
  );
}
