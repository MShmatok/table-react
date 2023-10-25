import { configureStore } from "@reduxjs/toolkit";
import { reducerTable } from "./table/slice";
import { reducerRoot } from "./root/slice";
import { reducerAuth } from "./auth/slice";

export const store = configureStore({
    reducer: {
        table: reducerTable,
        root: reducerRoot,
        auth: reducerAuth,
    },

});
