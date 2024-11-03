import img1 from "./images/hinh1.jpg";

const stores = [
  // TP Hồ Chí Minh
  {
    name: "HCM Signature Store",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "101 Tôn Dật Tiên, Quận 7, TP Hồ Chí Minh",
    district: "Quận 7",
    city: "TP Hồ Chí Minh",
    time: "7:00 - 22:00",
    features: [
      { icon: "🚗", name: "Có chỗ đỗ xe hơi" },
      { icon: "👨‍👩‍👦", name: "Thân thiện với gia đình" },
      { icon: "🥡", name: "Mua mang đi" },
    ],
  },
  {
    name: "HCM The Grace Tower",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "71 Hoàng Văn Thái, Quận 7, TP Hồ Chí Minh",
    district: "Quận 7",
    city: "TP Hồ Chí Minh",
    time: "7:00 - 22:00",
    features: [
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "☕", name: "Có phục vụ cà phê" },
      { icon: "🥡", name: "Mua mang đi" },
    ],
  },
  {
    name: "HCM Bitexco Financial Tower",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "2 Hải Triều, Quận 1, TP Hồ Chí Minh",
    district: "Quận 1",
    city: "TP Hồ Chí Minh",
    time: "8:00 - 23:00",
    features: [
      { icon: "🌆", name: "View toàn cảnh thành phố" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "🚗", name: "Có chỗ đỗ xe hơi" },
    ],
  },
  {
    name: "HCM Vincom Landmark 81",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "208 Nguyễn Hữu Cảnh, Quận Bình Thạnh, TP Hồ Chí Minh",
    district: "Quận Bình Thạnh",
    city: "TP Hồ Chí Minh",
    time: "9:00 - 21:00",
    features: [
      { icon: "🛍️", name: "Trong trung tâm thương mại" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "🥡", name: "Mua mang đi" },
    ],
  },
  {
    name: "HCM Pearl Plaza",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "561A Điện Biên Phủ, Quận Bình Thạnh, TP Hồ Chí Minh",
    district: "Quận Bình Thạnh",
    city: "TP Hồ Chí Minh",
    time: "8:00 - 22:00",
    features: [
      { icon: "🛍️", name: "Trong trung tâm thương mại" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "☕", name: "Có phục vụ cà phê" },
    ],
  },
  {
    name: "HCM Crescent Mall",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "101 Tôn Dật Tiên, Quận 7, TP Hồ Chí Minh",
    district: "Quận 7",
    city: "TP Hồ Chí Minh",
    time: "9:00 - 22:00",
    features: [
      { icon: "👨‍👩‍👦", name: "Thân thiện với gia đình" },
      { icon: "🚗", name: "Có chỗ đỗ xe hơi" },
      { icon: "🥡", name: "Mua mang đi" },
    ],
  },
  {
    name: "HCM Diamond Plaza",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "34 Lê Duẩn, Quận 1, TP Hồ Chí Minh",
    district: "Quận 1",
    city: "TP Hồ Chí Minh",
    time: "8:30 - 21:30",
    features: [
      { icon: "🛍️", name: "Trong trung tâm thương mại" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "🚗", name: "Có chỗ đỗ xe hơi" },
    ],
  },
  {
    name: "HCM Vincom Thảo Điền",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "159 Xa lộ Hà Nội, Quận 2, TP Hồ Chí Minh",
    district: "Quận 2",
    city: "TP Hồ Chí Minh",
    time: "9:00 - 22:00",
    features: [
      { icon: "🛍️", name: "Trong trung tâm thương mại" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "🥡", name: "Mua mang đi" },
    ],
  },
  {
    name: "HCM Nowzone Mall",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "235 Nguyễn Văn Cừ, Quận 5, TP Hồ Chí Minh",
    district: "Quận 5",
    city: "TP Hồ Chí Minh",
    time: "8:30 - 22:00",
    features: [
      { icon: "🛍️", name: "Trong trung tâm thương mại" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "☕", name: "Có phục vụ cà phê" },
    ],
  },
  {
    name: "HCM Saigon Centre",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "65 Lê Lợi, Quận 1, TP Hồ Chí Minh",
    district: "Quận 1",
    city: "TP Hồ Chí Minh",
    time: "8:00 - 22:00",
    features: [
      { icon: "🌆", name: "View đẹp" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "🥡", name: "Mua mang đi" },
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
    address: "120 Cầu Đất, Quận Ngô Quyền, Hải Phòng",
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
    address: "Vinhomes Imperia, Quận Hồng Bàng, Hải Phòng",
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
    address: "42 Lạch Tray, Quận Ngô Quyền, Hải Phòng",
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
    address: "Khu du lịch Đồ Sơn, Quận Đồ Sơn, Hải Phòng",
    district: "Quận Đồ Sơn",
    city: "Hải Phòng",
    time: "8:00 - 22:00",
    features: [
      { icon: "🌊", name: "Gần biển" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "🥡", name: "Mua mang đi" },
    ],
  },

  // Thanh Hóa
  {
    name: "TH Vincom Plaza Thanh Hóa",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "27 Trần Phú, TP Thanh Hóa, Thanh Hóa",
    district: "TP Thanh Hóa",
    city: "Thanh Hóa",
    time: "9:00 - 21:00",
    features: [
      { icon: "🛍️", name: "Trong trung tâm thương mại" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "🚗", name: "Có chỗ đỗ xe hơi" },
    ],
  },
  {
    name: "TH Big C Thanh Hóa",
    images: [
      { src: img1, alt: "Image 1" },
      { src: img1, alt: "Image 2" },
      { src: img1, alt: "Image 3" },
    ],
    address: "Lô 1, Quảng Thắng, TP Thanh Hóa, Thanh Hóa",
    district: "TP Thanh Hóa",
    city: "Thanh Hóa",
    time: "8:00 - 22:00",
    features: [
      { icon: "🛍️", name: "Trong trung tâm thương mại" },
      { icon: "🍽️", name: "Phục vụ tại chỗ" },
      { icon: "🥡", name: "Mua mang đi" },
    ],
  },
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
