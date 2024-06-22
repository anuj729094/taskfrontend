// https://precious-cuff-mite.cyclic.app

import { configureStore } from "@reduxjs/toolkit";
import { authreducer } from "./reducers/authreduucer";

export const store = configureStore({
    reducer:{
        auth:authreducer
    }
})