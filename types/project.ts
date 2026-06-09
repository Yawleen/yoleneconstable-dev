type ProjectStatus =
  | 'Terminé'
  | 'En cours de développement'
  | "En cours d'évolution";

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface ProjectVersion {
  title: string;
  url?: string;
  status: ProjectStatus;
}

export interface Project {
  date?: string;
  category: string;
  status: ProjectStatus;
  title: string;
  images: ProjectImage[];
  description: string;
  goal: string;
  stack: string[];
  versions?: ProjectVersion[];
  projectUrl?: string;
}
