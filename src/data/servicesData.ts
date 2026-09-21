import { ServiceItem } from '../types';

export interface ProcessStage {
  step: string;
  name: string;
  category: string;
  title: string;
  description: string;
  image: string;
  deliverable: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    title: 'Architecture',
    tagline: 'Residential Architecture, Villa Design & Space Planning',
    description: "Residential architecture designed around functionality, site conditions and the client's lifestyle.",
    deliverables: [
      'Villa Design',
      'Residential Planning',
      'Floor Plans',
      'Elevations',
      'Sections',
      'Exterior Design',
      'Space Planning'
    ],
    software: ['AutoCAD', 'Revit']
  },
  {
    number: '02',
    title: 'Interior Design',
    tagline: 'Thoughtful Planning, Materials, Lighting & Furniture',
    description: 'Contemporary and personalized interiors designed with thoughtful planning, materials, lighting and furniture.',
    deliverables: [
      'Living Room Design',
      'Bedroom Design',
      'Modular Kitchen Design',
      'Dining Areas',
      'TV Lounges',
      'False Ceiling Design',
      'Furniture Planning',
      'Material Selection',
      'Lighting Design'
    ],
    software: ['AutoCAD', '3ds Max', 'V-Ray', 'D5 Render']
  },
  {
    number: '03',
    title: '3D Visualization',
    tagline: 'Photorealistic Rendering & Architectural Walkthroughs',
    description: 'Transforming architectural concepts into realistic visual experiences.',
    deliverables: [
      'Exterior Rendering',
      'Interior Rendering',
      'Photorealistic Visualization',
      'Architectural Walkthroughs',
      'Design Presentations',
      '3D Concept Visualization'
    ],
    software: ['3ds Max', 'V-Ray', 'D5 Render', 'Photoshop']
  },
  {
    number: '04',
    title: '2D Drawings & Documentation',
    tagline: 'Clear & Accurate Architectural Drawing Sets',
    description: 'Clear and detailed drawings that communicate the design accurately.',
    deliverables: [
      'Floor Plans',
      'Furniture Layouts',
      'Elevations',
      'Sections',
      'Ceiling Plans',
      'Electrical Layouts',
      'Working Drawings'
    ],
    software: ['AutoCAD', 'Revit']
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    name: 'Ideation & Brief',
    category: 'Discovery',
    title: 'Site Analysis & Spatial Program Formulation',
    description: 'Analyzing micro-climates, solar paths, sightlines, and client lifestyle rituals to define the architectural design thesis.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    deliverable: 'Design Thesis & Spatial Program Matrix'
  },
  {
    step: '02',
    name: '2D Drafting',
    category: 'Architecture',
    title: 'Orthographic Plans & Circulation Flow',
    description: 'Developing millimeter-accurate floor plans, sightline alignments, and programmatic adjacencies in CAD/BIM.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    deliverable: '1:50 Schematic Floor Plans & Elevations'
  },
  {
    step: '03',
    name: '3D Clay Massing',
    category: 'Form Studies',
    title: 'Volumetric Massing & Sightline Validation',
    description: 'Evaluating architectural volume, ceiling heights, and shadow geometry using untextured clay models in 3D.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    deliverable: '3D Volumetric Digital Model & Massing Renders'
  },
  {
    step: '04',
    name: 'Materiality',
    category: 'Tactility',
    title: 'Physically Based Shading & Textural Balance',
    description: 'Assigning PBR scans of Roman travertine, brushed bronze, and fumed oak with accurate roughness and normal maps.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    deliverable: 'Material Specification Board & Shader Library'
  },
  {
    step: '05',
    name: 'Illumination',
    category: 'Lighting',
    title: 'Circadian Light & Daylight Calculation',
    description: 'Balancing soft morning daylight with atmospheric 2700K indirect cove lighting to craft warm, meditative moods.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    deliverable: 'Lighting Mood Matrix & Lux Distribution Renders'
  },
  {
    step: '06',
    name: '8K Visualization',
    category: 'Production',
    title: 'Raytraced Global Illumination & Detailing',
    description: 'Final multi-pass rendering capturing micro-imperfections, ambient occlusion, and photorealistic depth of field.',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85',
    deliverable: 'High-Resolution 8K CGI Master Renders'
  },
  {
    step: '07',
    name: 'Spatial Reality',
    category: 'Delivery',
    title: 'Execution Documentation & Final Handover',
    description: 'Translating visualizations into construction-ready documentation, schedules, and contractor-aligned drawing packs.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    deliverable: 'Final Construction Detail & Specification Pack'
  }
];
