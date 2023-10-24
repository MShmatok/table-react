import { configureStore } from "@reduxjs/toolkit";
import { reducerTable } from "./table/slice";
import { reducerRoot } from "./root/slice";
import { reducerAuth } from "./auth/slice";

export const store = configureStore({
    reducer: {
        contact: reducerTable,
        root: reducerRoot,
        auth: reducerAuth,
    },

});
