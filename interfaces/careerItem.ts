interface CareerProject {
  name: string;
  period: string;
  description: string;
  details: string[];
  skills: string;
}

export default interface ICareerItem {
  companyName: string;
  companyDescription: string;
  position: string;
  period: string;
  projects: CareerProject[];
  experiences?: CareerProject[];
}
