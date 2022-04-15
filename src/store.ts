import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Pokemon = {
  name: string;
  url: string;
}
export type Result = {
    count: number;
    next: null;
    previous: null;
    results: Pokemon[];
  }

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
    tagTypes: ["Pokemons"],
    endpoints: (builder) => ({
        getAll: builder.query<Result, void>({
            query: () => `pokemon?limit=1126`,
            providesTags: [{type: 'Pokemons', id: "LIST"}]
        }),
    })
});
