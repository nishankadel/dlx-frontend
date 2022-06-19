import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ProductAPI from "./productAPI";

export const allProducts = createAsyncThunk(
  "/all-products",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await ProductAPI.getAllProducts();

      return data.products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const singleProduct = createAsyncThunk(
  "/single-product",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await ProductAPI.getSingleProduct(id);
    
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    productList: [],
    singleProductList: {},
    error: null,
  },
  extraReducers: {
    [allProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [allProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productList = action.payload;
    },
    [allProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },

    [singleProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [singleProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singleProductList = action.payload;
    },
    [singleProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const getProducts = (state) => state.products;
export default productSlice.reducer;
