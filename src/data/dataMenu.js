import img from '../assets/images/traxanh.webp';

const menuData = {
  categories: [
    {
      name: "Cà Phê",
      types: [
        {
          type: "Cà Phê Việt Nam",
          items: [
            {
              id: 1,
              name: "Bơ Arabica",
              price: 35000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 2,
              name: "Đường Đen Sữa Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 3,
              name: "The Coffee House Sữa Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 4,
              name: "Cà Phê Sữa Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 5,
              name: "Bạc Sỉu",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 6,
              name: "Cà Phê Đen Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 7,
              name: "Cà Phê Đen Nóng",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            }
          ]
        },
        {
          type: "Cà Phê Pha Máy",
          items: [
            {
              id: 8,
              name: "Đường Đen Marble Latte",
              price: 55000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 9,
              name: "Caramel Macchiato Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 10,
              name: "Caramel Macchiato Nóng",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 11,
              name: "Latte Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 12,
              name: "Latte Nóng",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 13,
              name: "Americano Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 14,
              name: "Americano Nóng",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 15,
              name: "Espresso Nóng",
              price: 30000,
              image: img,
              size: ["S", "M", "L"]
            }
          ]
        },
        {
          type: "Cold Brew",
          items: [
            {
              id: 16,
              name: "Cold Brew Kim Quất",
              price: 60000,
              image: img,
              size: ["M", "L"]
            },
            {
              id: 17,
              name: "Cold Brew Phúc Bồn Tử",
              price: 65000,
              image: img,
              size: ["M", "L"]
            },
            {
              id: 18,
              name: "Cold Brew Sữa Tươi",
              price: 65000,
              image: img,
              size: ["M", "L"]
            },
            {
              id: 19,
              name: "Cold Brew Truyền Thống",
              price: 65000,
              image: img,
              size: ["M", "L"]
            }
          ]
        }
      ]
    },
    {
      name: "Trái Cây Xay 0°C",
      types: [
        {
          type: "Trái Cây Xay 0°C",
          items: [
            {
              id: 20,
              name: "Bơ Sữa Phô Mai Tươi",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 21,
              name: "Dâu Phô Mai Tươi",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 22,
              name: "Mận Phô Mai Tươi",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 23,
              name: "Mãng Cầu Phô Mai Tươi",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            }
          ]
        }
      ]
    },
    {
      name: "Trà Trái Cây - HiTea",
      types: [
        {
          type: "Trà Trái Cây",
          items: [
            {
              id: 24,
              name: "Oolong Tứ Quý Kim Quất Trân Châu",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 25,
              name: "Oolong Tứ Quý Vải",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 26,
              name: "Trà Đào Cam Sả - Đá",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            }
          ]
        },
        {
          type: "Hi-Tea",
          items: [
            {
              id: 27,
              name: "Hi-Tea Đào Kombucha",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 28,
              name: "Hi-Tea Yuzu Trân Châu",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 29,
              name: "Hi-Tea Vải",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            }
          ]
        }
      ]
    },
    {
      name: "Trà Sữa",
      types: [
        {
          type: "Trà Sữa",
          items: [
            {
              id: 30,
              name: "Trà Sữa Oolong Tứ Quý Bơ",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 31,
              name: "Trà Sữa Oolong Nướng Sương Sáo",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 32,
              name: "Trà Đen Macchiato",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 33,
              name: "Hồng Trà Sữa Trân Châu",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 34,
              name: "Trà sữa Oolong Nướng Trân Châu",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 35,
              name: "Trà sữa Oolong Nướng (Nóng)",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 36,
              name: "Hồng Trà Sữa Nóng",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            }
          ]
        }
      ]
    },
    {
      name: "Trà Xanh - Chocolate",
      types: [
        {
          type: "Trà Xanh Tây Bắc",
          items: [
            {
              id: 37,
              name: "Lồng Đèn - Trà Xanh Latte (L)",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 38,
              name: "Lồng Đèn - Trà Xanh Latte Sữa Yến Mạch (L)",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 39,
              name: "Trà Xanh Latte Sữa Yến Mạch (Không kèm đèn lồng)",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 40,
              name: "Trà Xanh Latte Đậm Vị (Không kèm đèn lồng)",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            }
          ]
        },
        {
          type: "Chocolate",
          items: [
            {
              id: 41,
              name: "Chocolate Nóng",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            },
            {
              id: 42,
              name: "Chocolate Đá",
              price: 49000,
              image: img,
              size: ["S", "M", "L"]
            }
          ]
        }
      ]
    }
  ]
};

export default menuData;
