export type ProjectCategory = 'All' | 'Architecture' | 'Interior Design' | '3D Visualization' | 'Commercial';

export interface ProjectImage {
  url: string;
  caption: string;
  type: 'exterior' | 'interior' | 'floorplan' | 'detail' | 'render3d' | 'clay';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Architecture' | 'Interior Design' | '3D Visualization' | 'Commercial';
  subtitle: string;
  year: string;
  location: string;
  area: string;
  status: string;
  coverImage: string;
  layoutVariant: 'large-left' | 'offset-right' | 'cinematic-full' | 'asymmetric-pair';
  brief: string;
  concept: string;
  disciplines: string[];
  images: ProjectImage[];
  floorPlanDetails?: {
    totalArea: string;
    levels: string;
    orientation: string;
    rooms: { name: string; dimension: string }[];
  };
  visualizationNotes?: string;
}

export interface MaterialItem {
  id: string;
  code: string;
  name: string;
  category: string;
  description: string;
  finish: string;
  origin: string;
  imageUrl: string;
  textureNote: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  software: string[];
}

export interface VideoSource {
  id: string;
  title: string;
  url: string;
  poster: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  projectLocation: string;
  approxScale: string;
  timeline: string;
  message: string;
}
