import { createSlice } from "@reduxjs/toolkit";
export const products = [
  {
    id: 1,
    name: "Bơ Sữa Phô Mai Tươi",
    price: "55.000 đ",
    imageUrl:
      "https://product.hstatic.net/1000075078/product/1719929441_bo-sua-pmt_77e27a929b5340e5bc7b83bb1963f0eb_large.jpg",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Dâu Phô Mai Tươi",
    price: "55.000 đ",
    imageUrl:
      "https://product.hstatic.net/1000075078/product/1717387639_dau-pho-mai_de092bfb88614bf1bfe9bd9defc6522f_large.jpg",
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Hi-Tea Vải",
    price: "49.000 đ",
    imageUrl:
      "https://product.hstatic.net/1000075078/product/1669736893_hi-tea-vai_7057577f3717414db7e0255646263516_large.png",
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Cà Phê Sữa Đá",
    price: "29.000 đ",
    imageUrl:
      "https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_e6168b6a38ec45d2b4854d2708b5d542_large.png",
    isBestSeller: true,
  },
  {
    id: 5,
    name: "Cơm Chiên Hải Sản",
    price: "49.000 đ",
    imageUrl:
      "https://product.hstatic.net/1000075078/product/1709023492_com-chien-hai-san_c0c3aef9c6ff4363b55b49ddcaf428cb_large.jpg",
    isBestSeller: true,
  },
  {
    id: 6,
    name: "Mochi Kem Chocolate",
    price: "19.000 đ",
    imageUrl:
      "https://product.hstatic.net/1000075078/product/1655348107_mochi-choco_4e9e4807cb244f4faaddbcdfab9b03c7_large.jpg",
    isBestSeller: true,
  },
];

const bestsellerSlice = createSlice({
  name: "bestseller",
  initialState: {
    products,
  },
  reducers: {},
});

export default bestsellerSlice.reducer;
export const {} = bestsellerSlice.actions;
