import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//
// useEffect(() => {
//     axios(``)
//       .then((res) => res.data)
//       .then(data => setText(data))
//   }, [paras, html])

export const fetchSentences = createAsyncThunk(
  "sentences/getSentences",
  async ({paras, html}) => {
    console.log(html);
    console.log(paras);
    const res = await axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${html}`
    );
    return res.data;
  }
);

export const sentenceSlice = createSlice({
  name: "sentence",
  initialState: {
    items: [],
    status: "idle",
    paras: 2,
    html: "html",
  },
  reducers: {
    setHtml: (state, action) => {
      state.html = action.payload;
    },
  },
  extraReducers: {
    [fetchSentences.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSentences.fulfilled]: (state, action) => {
      state.items = [...action.payload];
      state.status = "succeeded";
    },
    [fetchSentences.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { setHtml } = sentenceSlice.actions;
export default sentenceSlice.reducer;
