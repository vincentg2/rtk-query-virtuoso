import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import "./App.css";
import { pokemonApi } from "./store";
import { TableVirtuoso } from "react-virtuoso";

function PokeApp() {
  const { data: pokemons } = pokemonApi.useGetAllQuery();
  return (
    <div style={{width:350, margin: 'auto'}} >
      <TableVirtuoso
        style={{ height: 500}}
        data={pokemons?.results}
        fixedHeaderContent={() => (
          <tr>
            <th style={{ background: "#152f61", color: "white", padding: "1em" }}>
              Number
            </th>
            <th style={{ width: 250, background: "teal", color: "white" }}>
              Name
            </th>
          </tr>
        )}
        itemContent={(index, data) => (
          <>
            <td
              style={{
                textAlign: "center",
                borderBottom: "2px solid teal",
                padding: "1em",
                fontWeight: "600",
              }}
            >
              #{index + 1}
            </td>
            <td
              style={{
                textAlign: "center",
                borderBottom: "2px solid coral",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              {data.name}
            </td>
          </>
        )}
      />
    </div>
  );
}
function App() {
  return (
    <ApiProvider api={pokemonApi}>
      <PokeApp />
    </ApiProvider>
  );
}
export default App;
