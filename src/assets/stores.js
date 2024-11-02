import img1 from "./images/hinh1.jpg";

const stores = [
  // Nha Trang
  {
    name: "NT Tran Phu Beachfront",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "40 Trần Phú, Phường Lộc Thọ, Quận Nha Trang, Khánh Hòa",
    district: "Quận Nha Trang",
    city: "Nha Trang",
    time: "7:00 - 22:00",
    features: [
      { icon: "🌊", name: "Gần biển" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "🥡", name: "Mua mang đi" },
    ],
  },
  {
    name: "NT Vincom Plaza",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "Vĩnh Hòa, Phường Vĩnh Hải, Quận Nha Trang, Khánh Hòa",
    district: "Quận Nha Trang",
    city: "Nha Trang",
    time: "8:00 - 22:00",
    features: [
      { icon: "🛍️", name: "Trong trung tâm thương mại" },
      { icon: "👨‍👩‍👦", name: "Thân thiện với gia đình" },
      { icon: "🥡", name: "Mua mang đi" },
    ],
  },
  {
    name: "NT Vĩnh Điềm Trung",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address:
      "Khu đô thị Vĩnh Điềm Trung, Phường Vĩnh Hiệp, Quận Diên Khánh, Khánh Hòa",
    district: "Quận Diên Khánh",
    city: "Nha Trang",
    time: "8:00 - 22:00",
    features: [
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "☕", name: "Có phục vụ cà phê" },
      { icon: "🚗", name: "Có chỗ đỗ xe hơi" },
    ],
  },

  // Tây Ninh
  {
    name: "TN Châu Thành Center",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address:
      "12 Nguyễn Thái Học, Thị trấn Châu Thành, Huyện Châu Thành, Tây Ninh",
    district: "Huyện Châu Thành",
    city: "Tây Ninh",
    time: "7:30 - 21:30",
    features: [
      { icon: "🚗", name: "Có chỗ đỗ xe hơi" },
      { icon: "🥡", name: "Mua mang đi" },
      { icon: "👨‍👩‍👦", name: "Thân thiện với gia đình" },
    ],
  },

  // Hải Phòng
  {
    name: "HP Cầu Đất",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "120 Cầu Đất, Phường Cầu Đất, Quận Ngô Quyền, Hải Phòng",
    district: "Quận Ngô Quyền",
    city: "Hải Phòng",
    time: "7:00 - 22:00",
    features: [
      { icon: "🚗", name: "Có chỗ đỗ xe hơi" },
      { icon: "🥡", name: "Mua mang đi" },
      { icon: "☕", name: "Có phục vụ cà phê" },
    ],
  },
  {
    name: "HP Vincom Imperia",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "Vinhomes Imperia, Phường Thượng Lý, Quận Hồng Bàng, Hải Phòng",
    district: "Quận Hồng Bàng",
    city: "Hải Phòng",
    time: "8:00 - 22:00",
    features: [
      { icon: "🛍️", name: "Trong trung tâm thương mại" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "🚗", name: "Có chỗ đỗ xe hơi" },
    ],
  },
  {
    name: "HP Lạch Tray",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "42 Lạch Tray, Phường Lạch Tray, Quận Ngô Quyền, Hải Phòng",
    district: "Quận Ngô Quyền",
    city: "Hải Phòng",
    time: "7:30 - 21:30",
    features: [
      { icon: "🚗", name: "Có chỗ đỗ xe hơi" },
      { icon: "🥡", name: "Mua mang đi" },
      { icon: "👨‍👩‍👦", name: "Thân thiện với gia đình" },
    ],
  },
  {
    name: "HP Đồ Sơn",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "Khu du lịch Đồ Sơn, Phường Vạn Hương, Quận Đồ Sơn, Hải Phòng",
    district: "Quận Đồ Sơn",
    city: "Hải Phòng",
    time: "8:00 - 22:00",
    features: [
      { icon: "🌊", name: "Gần biển" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "🥡", name: "Mua mang đi" },
    ],
  },

  // Nghệ An
  {
    name: "NA Vinh Center",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "30 Quang Trung, Phường Quang Trung, Thành phố Vinh, Nghệ An",
    district: "Thành phố Vinh",
    city: "Nghệ An",
    time: "7:30 - 21:30",
    features: [
      { icon: "🚗", name: "Có chỗ đỗ xe hơi" },
      { icon: "🥡", name: "Mua mang đi" },
      { icon: "☕", name: "Có phục vụ cà phê" },
    ],
  },
];

export default stores;
