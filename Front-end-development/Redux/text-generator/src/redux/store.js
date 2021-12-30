import { configureStore } from "@reduxjs/toolkit";
import sentenceSlice from "./sentenceSlice";

export const store = configureStore({
    reducer: {
         sentences: sentenceSlice
    }
})