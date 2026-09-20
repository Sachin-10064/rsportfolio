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
    title: 'Architectural Design',
    tagline: 'Spatial Conception, Massing & Permitting',
    description: 'Bespoke residential and cultural architecture grounded in contextual topography, environmental orientation, and sculptural proportions.',
    deliverables: [
      'Comprehensive Concept Massing & Feasibility Studies',
      'Local Planning Permission & Regulatory Approval Sets',
      'Detailed Architectural Construction Packages (1:20 & 1:5 Details)',
      'Site Coordination & Architectural Quality Supervision'
    ],
    software: ['Revit BIM', 'Rhino 8', 'Grasshopper', 'AutoCAD']
  },
  {
    number: '02',
    title: 'Interior Architecture',
    tagline: 'Material Palette, Millwork & Lighting',
    description: 'Curating intimate atmospheres through custom joinery details, sensory material moodboards, and balanced circadian lighting schemes.',
    deliverables: [
      'Full Interior Spatial Reconfiguration & Layout Plans',
      'Custom Millwork, Cabinetry & Joinery Detailing',
      'Tactile Material, Fixture & Sanitaryware Schedules',
      'Architectural Lighting Design & Circuit Layouts'
    ],
    software: ['SketchUp Pro', 'Revit', 'AutoCAD', 'Enscape']
  },
  {
    number: '03',
    title: '3D CGI Visualization',
    tagline: 'Photorealistic Imagery, Light Studies & VR',
    description: 'Transforming unbuilt concepts into emotionally evocative, hyper-realistic architectural still imagery and immersive cinematic walkthroughs.',
    deliverables: [
      '8K High-Fidelity Exterior & Interior CGI Stills',
      'Solar Path & Daylight Penetration Studies',
      'Interactive 360° VR Spatial Tours for Presentations',
      'Unreal Engine 5 Real-Time Virtual Walkthroughs'
    ],
    software: ['3ds Max', 'Corona Renderer', 'V-Ray 6', 'Unreal Engine 5']
  },
  {
    number: '04',
    title: 'Cinematic Animations',
    tagline: 'Choreographed Cameras & Mood Films',
    description: 'Directing architectural films that tell spatial narratives through light transitions, atmospheric sound design, and micro-movements.',
    deliverables: [
      '4K 60fps Choreographed Architectural Film Sequences',
      'Day-to-Night Architectural Time-Lapse Transitions',
      'Construction Sequence & Structural Assembly Visuals',
      'Curated Sound Design & Original Ambient Audio Stems'
    ],
    software: ['DaVinci Resolve', 'After Effects', 'Phoenix FD', '3ds Max']
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
