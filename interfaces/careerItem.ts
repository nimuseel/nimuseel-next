export interface CareerProject {
  name: string;
  period: string;
  description: string;
  details: string[];
  skills: string;
}

export interface ICareerItem {
  companyName: string;
  companyDescription: string;
  position: string;
  period: string;
  projects: CareerProject[];
}

export interface Experiences {
  experiences?: CareerProject[];
}
