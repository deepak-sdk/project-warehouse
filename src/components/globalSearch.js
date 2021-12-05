import React, { useState}from "react";
import { useAsyncDebounce } from "react-table";

export function GlobalSearch({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
    <div className="search-filter">
          <div className="nav-bar--search">
             
        <input
                  value={value || ""}
                  onChange={(e) => {
                      setValue(e.target.value);
                      onChange(e.target.value);
                  }}
                  placeholder={`${count} records...`}
        />
      </div>
    </div>
  );
}
