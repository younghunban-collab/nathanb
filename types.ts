
export type UserRole = 'user' | 'admin';
export type Language = 'ko' | 'en';

export interface UserData {
  id: string; // 사용자 아이디
  email: string;
  name: string;
  role: UserRole;
  joinDate: string;
  status: string;
  points: number;
  paymentStatus: 'Paid' | 'Pending' | 'Overdue';
  birthDate?: string; // 생년월일
  phone?: string; // 전화번호
  address?: string; // 주소
  interestedCourse?: string; // 듣고 싶은 강좌
}

export interface Mentor {
  id: string;
  name: string;
  specialty: string;
  description: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  userName: string;
  content: string;
  rating: number;
}

export interface EducationItem {
  title: string;
  description: string;
  icon: string;
}
