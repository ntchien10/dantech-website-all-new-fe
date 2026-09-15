export const siteConfig = {
  name: "DANTECH",
  fullName: "Công ty Giải pháp Công nghệ DANTECH",
  fullNameEn: "DANTECH Technology Solutions",
  tagline: "Kiến tạo thành công số của bạn",
  taglineEn: "Building Your Digital Success",
  description:
    "DANTECH đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số — từ website thương hiệu đến hệ thống quản lý toàn diện.",
  descriptionEn:
    "DANTECH partners with businesses on their digital transformation journey — from brand websites to comprehensive management systems.",
  phone: "0981397246",
  phoneHref: "tel:+84981397246",
  email: "chiennt@dantech.com.vn",
  address: "Số 7 Liền kề 7, Tổng cục V Yên Xá, Thanh Liệt, Hà Nội",
  addressEn: "No. 7, Alley 7, Tong cuc V Yen Xa, Thanh Liet, Hanoi",
  city: "Hà Nội",
  zaloUrl: "https://zalo.me/0981397246",
  facebookUrl: "https://www.facebook.com/profile.php?id=61594251032862",
  logoPath: "/images/logo/logo_DANTECH_PNG.png",
  logoDarkPath: "/images/logo/logo_DANTECH_dark.png",
  openingHours: {
    weekdays: { days: "Thứ 2 – Thứ 6", hours: "08:00 – 17:30" },
    saturday: { days: "Thứ 7", hours: "08:00 – 12:00" },
    sunday: { days: "Chủ nhật", hours: "Nghỉ" },
  },
  stats: [
    { value: "98%", labelVi: "Hiệu suất", labelEn: "Performance" },
    { value: "+120%", labelVi: "Chuyển đổi", labelEn: "Conversion" },
    { value: "50+", labelVi: "Dự án", labelEn: "Projects" },
    { value: "5★", labelVi: "Đánh giá", labelEn: "Rating" },
  ],
} as const;

export const navLinks = [
  { href: '#services', labelVi: 'Dịch vụ', labelEn: 'Services' },
  { href: '#projects', labelVi: 'Dự án', labelEn: 'Projects' },
  { href: '#tech', labelVi: 'Công nghệ', labelEn: 'Technology' },
  { href: '#process', labelVi: 'Quy trình', labelEn: 'Process' },
  { href: '#about', labelVi: 'Về chúng tôi', labelEn: 'About Us' },
  { href: '#contact', labelVi: 'Liên hệ', labelEn: 'Contact' },
] as const;

