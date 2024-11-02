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
              size: ["S", "M", "L"],
              description: "A rich blend of Arabica beans with butter flavor, offering a unique twist on traditional Vietnamese coffee."
            },
            {
              id: 2,
              name: "Đường Đen Sữa Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "Vietnamese iced milk coffee with a hint of brown sugar syrup for a sweet finish."
            },
            {
              id: 3,
              name: "The Coffee House Sữa Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "Classic Vietnamese milk coffee served over ice, perfect for a refreshing break."
            },
            {
              id: 4,
              name: "Cà Phê Sữa Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "A delicious blend of coffee and milk served over ice, for a strong yet smooth taste."
            },
            {
              id: 5,
              name: "Bạc Sỉu",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "Traditional Vietnamese coffee with a higher milk content, creating a sweeter, creamy taste."
            },
            {
              id: 6,
              name: "Cà Phê Đen Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "Strong black coffee served over ice, ideal for coffee lovers who prefer it bold."
            },
            {
              id: 7,
              name: "Cà Phê Đen Nóng",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "Hot black coffee, rich in flavor and perfect for a quick energy boost."
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
              size: ["S", "M", "L"],
              description: "A delightful latte with marble patterns of brown sugar, giving it a unique, sweet flavor."
            },
            {
              id: 9,
              name: "Caramel Macchiato Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "Iced caramel macchiato with a smooth, layered taste of espresso and caramel."
            },
            {
              id: 10,
              name: "Caramel Macchiato Nóng",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "Hot caramel macchiato for a warm, sweet coffee experience."
            },
            {
              id: 11,
              name: "Latte Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "Iced latte with a smooth and creamy texture, perfect for cooling down."
            },
            {
              id: 12,
              name: "Latte Nóng",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "Hot latte with a rich, smooth taste of coffee and steamed milk."
            },
            {
              id: 13,
              name: "Americano Đá",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "Iced Americano, a refreshing take on a classic black coffee."
            },
            {
              id: 14,
              name: "Americano Nóng",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "Hot Americano, perfect for those who enjoy a bold coffee taste."
            },
            {
              id: 15,
              name: "Espresso Nóng",
              price: 30000,
              image: img,
              size: ["S", "M", "L"],
              description: "A strong shot of espresso to kickstart your day."
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
              size: ["M", "L"],
              description: "Refreshing cold brew with a hint of kumquat for a citrusy twist."
            },
            {
              id: 17,
              name: "Cold Brew Phúc Bồn Tử",
              price: 65000,
              image: img,
              size: ["M", "L"],
              description: "A fruity twist with raspberry flavor, perfect for summer."
            },
            {
              id: 18,
              name: "Cold Brew Sữa Tươi",
              price: 65000,
              image: img,
              size: ["M", "L"],
              description: "Cold brew coffee with fresh milk for a balanced and creamy taste."
            },
            {
              id: 19,
              name: "Cold Brew Truyền Thống",
              price: 65000,
              image: img,
              size: ["M", "L"],
              description: "Classic cold brew with a smooth, robust flavor."
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
              size: ["S", "M", "L"],
              description: "Creamy avocado smoothie with fresh cheese for a nutritious drink."
            },
            {
              id: 21,
              name: "Dâu Phô Mai Tươi",
              price: 49000,
              image: img,
              size: ["S", "M", "L"],
              description: "Strawberry smoothie with fresh cheese, perfect for a sweet treat."
            },
            {
              id: 22,
              name: "Mận Phô Mai Tươi",
              price: 49000,
              image: img,
              size: ["S", "M", "L"],
              description: "Plum smoothie with fresh cheese, a refreshing fruity blend."
            },
            {
              id: 23,
              name: "Mãng Cầu Phô Mai Tươi",
              price: 49000,
              image: img,
              size: ["S", "M", "L"],
              description: "Soursop smoothie with fresh cheese for a unique flavor."
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
              size: ["S", "M", "L"],
              description: "Oolong tea with kumquat and pearls, refreshing and unique."
            },
            {
              id: 25,
              name: "Oolong Tứ Quý Vải",
              price: 49000,
              image: img,
              size: ["S", "M", "L"],
              description: "Oolong tea with lychee for a fruity twist."
            },
            {
              id: 26,
              name: "Trà Đào Cam Sả - Đá",
              price: 49000,
              image: img,
              size: ["S", "M", "L"],
              description: "Peach, orange, and lemongrass tea served over ice."
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
              size: ["S", "M", "L"],
              description: "Peach kombucha tea, a healthy and refreshing drink."
            },
            {
              id: 28,
              name: "Hi-Tea Yuzu Trân Châu",
              price: 49000,
              image: img,
              size: ["S", "M", "L"],
              description: "Hi-Tea with yuzu and pearls for a delightful citrus taste."
            },
            {
              id: 29,
              name: "Hi-Tea Vải",
              price: 49000,
              image: img,
              size: ["S", "M", "L"],
              description: "Lychee Hi-Tea, a sweet and aromatic experience."
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
              size: ["S", "M", "L"],
              description: "Oolong milk tea with a creamy avocado flavor."
            },
            {
              id: 31,
              name: "Trà Sữa Oolong Nướng Sương Sáo",
              price: 49000,
              image: img,
              size: ["S", "M", "L"],
              description: "Roasted oolong milk tea with grass jelly for added texture."
            },
            {
              id: 32,
              name: "Trà Đen Macchiato",
              price: 49000,
              image: img,
              size: ["S", "M", "L"],
              description: "Black tea topped with creamy macchiato foam."
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
              size: ["S", "M", "L"],
              description: "A unique green tea latte served with a traditional lantern."
            },
            {
              id: 38,
              name: "Lồng Đèn - Trà Xanh Latte Sữa Yến Mạch (L)",
              price: 49000,
              image: img,
              size: ["S", "M", "L"],
              description: "Green tea latte with oat milk, served with a lantern."
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
              size: ["S", "M", "L"],
              description: "Warm, rich, and creamy hot chocolate."
            },
            {
              id: 42,
              name: "Chocolate Đá",
              price: 49000,
              image: img,
              size: ["S", "M", "L"],
              description: "Iced chocolate, perfect for a refreshing treat."
            }
          ]
        }
      ]
    }
  ]
};

export default menuData;
