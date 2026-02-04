
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
