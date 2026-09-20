import { Project, VideoSource } from '../types';

export const VIDEO_SOURCES: VideoSource[] = [
  {
    id: 'hero-cinematic',
    title: 'Kinetic Spatial Transformation',
    url: '/videos/input.mp4',
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
    description: 'A seamless journey from architectural blueprints to 3D wireframes and atmospheric photorealistic spaces.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-01',
    slug: 'casa-travertino',
    title: 'Casa Travertino',
    category: 'Architecture',
    subtitle: 'Monolithic Cantilevers & Roman Stone',
    year: '2025',
    location: 'Sienna, Italy',
    area: '620 m²',
    status: 'Under Construction',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    layoutVariant: 'large-left',
    brief: 'A multi-generational private residence integrated into a sloping olive grove, prioritizing horizontal sightlines toward the Tuscan horizon.',
    concept: 'Three staggered travertine plateaus carved into the hillside, creating shaded courtyards and expansive floor-to-ceiling glass apertures.',
    disciplines: ['Architecture', 'Landscape Integration', '3D Visualization'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        caption: 'South elevation cantilever hovering over natural travertine reflecting pool.',
        type: 'exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Living pavilion with double-height frameless corner glazing.',
        type: 'interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
        caption: 'Detailed junction between honed travertine facade and bronze anodized mullions.',
        type: 'detail'
      }
    ],
    floorPlanDetails: {
      totalArea: '620 m²',
      levels: '2 Levels + Subterranean Wine Cellar',
      orientation: 'South-Southwest (Optimized Solar Gain)',
      rooms: [
        { name: 'Grand Living & Dining Pavilion', dimension: '14.2m × 8.5m' },
        { name: 'Primary Master Suite & Bath', dimension: '9.0m × 6.4m' },
        { name: 'Subterranean Stone Gallery', dimension: '11.0m × 4.8m' }
      ]
    },
    visualizationNotes: 'Raytraced in Corona 11 using accurate HDR environment maps recorded on site during golden hour.'
  },
  {
    id: 'proj-02',
    slug: 'atelier-nocturne',
    title: 'Atelier Nocturne',
    category: 'Interior Design',
    subtitle: 'Minimalist Penthouse with Fumed Oak & Raw Iron',
    year: '2024',
    location: 'Zürich, Switzerland',
    area: '340 m²',
    status: 'Completed',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    layoutVariant: 'offset-right',
    brief: 'Complete internal gut renovation of a brutalist penthouse apartment overlooking Lake Zürich for an art collector.',
    concept: 'A deliberate reduction of elements down to monolithic bespoke millwork partitions in fumed oak and hand-burnished steel plates.',
    disciplines: ['Interior Architecture', 'Custom Millwork', 'Lighting Curation'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
        caption: 'Main salon with custom low-slung seating and microcement floor.',
        type: 'interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
        caption: 'Concealed kitchen island milled from a single block of Vals quartzite.',
        type: 'detail'
      }
    ],
    floorPlanDetails: {
      totalArea: '340 m²',
      levels: 'Single Penthouse Floor with 360° Terrace',
      orientation: 'East-West Cross-Ventilated',
      rooms: [
        { name: 'Curated Art Salon', dimension: '12.0m × 7.2m' },
        { name: 'Chef Kitchen & Breakfast Bar', dimension: '6.5m × 4.5m' },
        { name: 'Private Study & Library', dimension: '5.2m × 4.0m' }
      ]
    }
  },
  {
    id: 'proj-03',
    slug: 'the-monolith-pavilion',
    title: 'The Monolith Pavilion',
    category: '3D Visualization',
    subtitle: 'Sculptural Concrete Gallery in Nordic Pine Forest',
    year: '2025',
    location: 'Oslo, Norway',
    area: '1,200 m²',
    status: 'Concept Study',
    coverImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85',
    layoutVariant: 'cinematic-full',
    brief: 'Speculative architectural visualization exploring raw tactile board-marked concrete structures nestled in snow-draped pine woodland.',
    concept: 'Contrasting the unyielding geometric purity of mineral concrete against the delicate organic randomness of snow and evergreen branches.',
    disciplines: ['3D CGI Visuals', 'Volumetric Lighting', 'Environmental Shading'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85',
        caption: 'Low-angle dusk composition with warm 2400K interior glow spilling onto snow.',
        type: 'exterior'
      }
    ],
    visualizationNotes: 'Rendered at 8K resolution with procedural snow displacement and volumetric mist particles.'
  },
  {
    id: 'proj-04',
    slug: 'kura-cultural-center',
    title: 'Kura Cultural Center',
    category: 'Commercial',
    subtitle: 'Laminated Timber Lattice & Meditative Courtyards',
    year: '2024',
    location: 'Kyoto, Japan',
    area: '2,800 m²',
    status: 'Competition Winner',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    layoutVariant: 'asymmetric-pair',
    brief: 'A community exhibition hall and tea ceremony pavilion celebrating regional cedar craftsmanship through advanced timber engineering.',
    concept: 'A self-supporting reciprocal timber grid-shell roof inspired by traditional Kura storehouse joinery, framing a central reflecting courtyard.',
    disciplines: ['Parametric Architecture', 'Timber Engineering', 'BIM Coordination'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
        caption: 'Central meditative court reflecting the parametric timber soffit.',
        type: 'exterior'
      }
    ]
  }
];
