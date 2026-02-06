
export type UserRole = 'user' | 'admin';
export type Language = 'ko' | 'en';

export interface UserData {
  name: string;
  email: string;
  role: UserRole;
  joinDate: string;
  status: string;
  points: number;
  paymentStatus: 'Paid' | 'Pending' | 'Overdue';
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
