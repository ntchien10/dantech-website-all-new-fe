export interface TechStackItem {
  name: string
  label: string
  category: 'frontend' | 'backend' | 'database' | 'devops'
  highlight?: boolean
}

export const techCategories = [
  {
    id: "frontend",
    labelVi: "Frontend",
    labelEn: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    id: "backend",
    labelVi: "Backend & API",
    labelEn: "Backend & API",
    items: ["Java Spring Boot", "Node.js", "Python", "Apache Kafka"],
  },
  {
    id: "database",
    labelVi: "Cơ sở dữ liệu",
    labelEn: "Database",
    items: ["PostgreSQL", "Oracle", "MySQL", "Redis"],
  },
  {
    id: "devops",
    labelVi: "Cloud & DevOps",
    labelEn: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Vercel", "Nginx"],
  },
] as const;

export const whyReasons = [
  {
    icon: "users",
    titleVi: "Đội ngũ chuyên nghiệp",
    titleEn: "Expert Team",
    descVi:
      "Kỹ sư và designer có nhiều năm kinh nghiệm, am hiểu thị trường Việt Nam và công nghệ quốc tế.",
    descEn:
      "Engineers and designers with years of experience, understanding Vietnamese market and international technologies.",
  },
  {
    icon: "check-circle",
    titleVi: "Quy trình minh bạch",
    titleEn: "Transparent Process",
    descVi:
      "Cập nhật tiến độ hàng tuần, báo cáo rõ ràng và giao tiếp trực tiếp với team phát triển.",
    descEn:
      "Weekly progress updates, clear reporting, and direct communication with the development team.",
  },
  {
    icon: "zap",
    titleVi: "Hiệu suất cao",
    titleEn: "High Performance",
    descVi:
      "Cam kết website đạt Core Web Vitals tốt, tốc độ tải nhanh và điểm Google PageSpeed cao.",
    descEn:
      "Commitment to good Core Web Vitals, fast loading speed, and high Google PageSpeed scores.",
  },
  {
    icon: "shield",
    titleVi: "Bảo mật & Ổn định",
    titleEn: "Security & Stability",
    descVi:
      "Kiến trúc bảo mật từ nền tảng, HTTPS, backup định kỳ và uptime 99.9% được đảm bảo.",
    descEn:
      "Security-first architecture, HTTPS, regular backups, and guaranteed 99.9% uptime.",
  },
] as const;
