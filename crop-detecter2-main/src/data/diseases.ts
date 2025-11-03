export interface Treatment {
  type: 'fertilizer' | 'pesticide' | 'organic';
  name: string;
  dosage: string;
  application: string;
  timing: string;
}

export interface Disease {
  name: string;
  confidence: number;
  severity: 'Low' | 'Medium' | 'High';
  description: string;
  treatments: Treatment[];
  prevention: string[];
}

export const DISEASE_DATABASE: { [key: string]: Disease[] } = {
  // ✅ Tomato
  'Tomato': [
    {
      name: 'Early Blight',
      confidence: 92,
      severity: 'Medium',
      description:
        'A common fungal disease affecting tomato leaves, causing dark spots with concentric rings. Can reduce yield significantly if left untreated.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Balanced NPK (10-10-10)',
          dosage: '2-3 kg per acre',
          application: 'Soil application around plant base',
          timing: 'Every 2 weeks',
        },
        {
          type: 'pesticide',
          name: 'Chlorothalonil Fungicide',
          dosage: '2ml per liter water',
          application: 'Foliar spray covering all leaves',
          timing: 'Early morning or evening',
        },
        {
          type: 'organic',
          name: 'Neem Oil',
          dosage: '5ml per liter water',
          application: 'Spray on affected areas',
          timing: 'Weekly application',
        },
      ],
      prevention: [
        'Ensure proper air circulation between plants',
        'Avoid overhead watering',
        'Remove infected leaves promptly',
        'Apply mulch to reduce soil splash',
        'Rotate crops every 2-3 years',
      ],
    },
  ],

  // ✅ Rice
  'Rice': [
    {
      name: 'Blast Disease',
      confidence: 87,
      severity: 'High',
      description:
        'A serious fungal disease causing lesions on leaves, stems, and panicles. Can cause significant yield losses in rice crops.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Potassium Chloride',
          dosage: '50 kg per hectare',
          application: 'Basal application before transplanting',
          timing: 'At planting time',
        },
        {
          type: 'pesticide',
          name: 'Tricyclazole',
          dosage: '75g per 100L water',
          application: 'Foliar spray',
          timing: 'At first symptom appearance',
        },
        {
          type: 'organic',
          name: 'Silicon Fertilizer',
          dosage: '100 kg per hectare',
          application: 'Soil application',
          timing: 'Before tillering stage',
        },
      ],
      prevention: [
        'Use resistant rice varieties',
        'Maintain proper water management',
        'Avoid excessive nitrogen fertilizer',
        'Practice field sanitation',
        'Remove infected plants early',
      ],
    },
  ],

  // ✅ Potato
  'Potato': [
    {
      name: 'Late Blight',
      confidence: 94,
      severity: 'High',
      description:
        'A devastating disease caused by Phytophthora infestans that can destroy entire potato crops within days under favorable conditions.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Calcium Nitrate',
          dosage: '200 kg per hectare',
          application: 'Side dressing around plants',
          timing: 'During active growth',
        },
        {
          type: 'pesticide',
          name: 'Metalaxyl + Mancozeb',
          dosage: '2.5g per liter water',
          application: 'Preventive foliar spray',
          timing: 'Every 7-10 days',
        },
        {
          type: 'organic',
          name: 'Copper Oxychloride',
          dosage: '3g per liter water',
          application: 'Foliar spray',
          timing: 'Weekly during humid conditions',
        },
      ],
      prevention: [
        'Plant disease-free seeds',
        'Ensure good drainage and spacing',
        'Remove volunteer potatoes',
        'Monitor humidity and rainfall patterns',
        'Use preventive fungicide sprays',
      ],
    },
  ],

  // ✅ Wheat
  'Wheat': [
    {
      name: 'Rust Disease',
      confidence: 90,
      severity: 'High',
      description:
        'Fungal infection causing orange or brown pustules on leaves, leading to premature drying and yield loss.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Zinc Sulphate',
          dosage: '25 kg per hectare',
          application: 'Soil application',
          timing: 'Tillering stage',
        },
        {
          type: 'pesticide',
          name: 'Propiconazole 25 EC',
          dosage: '1ml per liter water',
          application: 'Foliar spray',
          timing: 'At disease onset',
        },
        {
          type: 'organic',
          name: 'Sulphur Dust',
          dosage: '20 kg per hectare',
          application: 'Dusting on leaves',
          timing: 'Early morning hours',
        },
      ],
      prevention: [
        'Use resistant varieties',
        'Avoid late sowing',
        'Destroy volunteer wheat plants',
        'Maintain field hygiene',
      ],
    },
  ],

  // ✅ Maize
  'Maize': [
    {
      name: 'Turcicum Leaf Blight',
      confidence: 86,
      severity: 'Medium',
      description:
        'Fungal disease forming long, elliptical lesions on leaves, reducing photosynthesis and yield.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Nitrogen Fertilizer (Urea)',
          dosage: '80 kg per hectare',
          application: 'Split dose',
          timing: 'Before and after tasseling',
        },
        {
          type: 'pesticide',
          name: 'Mancozeb 75 WP',
          dosage: '2.5g per liter water',
          application: 'Foliar spray',
          timing: 'At early symptoms',
        },
        {
          type: 'organic',
          name: 'Neem Cake',
          dosage: '250 kg per hectare',
          application: 'Soil incorporation',
          timing: 'Before planting',
        },
      ],
      prevention: [
        'Use resistant hybrids',
        'Rotate crops yearly',
        'Avoid high plant density',
        'Remove crop residues',
      ],
    },
  ],

  // ✅ Cotton
  'Cotton': [
    {
      name: 'Bacterial Blight',
      confidence: 89,
      severity: 'Medium',
      description:
        'Causes angular leaf spots and boll rots, reducing lint quality and yield.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Potash Fertilizer',
          dosage: '60 kg per hectare',
          application: 'Basal dose',
          timing: 'At planting',
        },
        {
          type: 'pesticide',
          name: 'Copper Oxychloride 50 WP',
          dosage: '3g per liter water',
          application: 'Foliar spray',
          timing: 'At symptom appearance',
        },
        {
          type: 'organic',
          name: 'Panchagavya',
          dosage: '30ml per liter water',
          application: 'Foliar spray',
          timing: 'Biweekly',
        },
      ],
      prevention: [
        'Use resistant varieties',
        'Avoid waterlogging',
        'Destroy infected plant debris',
        'Ensure crop rotation',
      ],
    },
  ],

  // ✅ Sugarcane
  'Sugarcane': [
    {
      name: 'Red Rot',
      confidence: 91,
      severity: 'High',
      description:
        'Fungal disease causing reddening of internal tissues and foul odor in stalks.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Urea + Potash mix',
          dosage: '50:50 ratio per hectare',
          application: 'Side dressing',
          timing: 'At tillering stage',
        },
        {
          type: 'pesticide',
          name: 'Carbendazim 50 WP',
          dosage: '1g per liter water',
          application: 'Set treatment before planting',
          timing: 'Before planting',
        },
        {
          type: 'organic',
          name: 'Trichoderma viride',
          dosage: '10 kg per hectare',
          application: 'Soil application',
          timing: 'Planting time',
        },
      ],
      prevention: [
        'Use disease-free seed setts',
        'Rotate with non-host crops',
        'Avoid ratooning infected crops',
      ],
    },
  ],

  // ✅ Banana
  'Banana': [
    {
      name: 'Panama Wilt',
      confidence: 88,
      severity: 'High',
      description:
        'Caused by Fusarium fungus leading to wilting and yellowing of banana leaves.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Calcium Nitrate',
          dosage: '200 g per plant',
          application: 'Soil drenching',
          timing: 'Monthly',
        },
        {
          type: 'pesticide',
          name: 'Carbendazim 50 WP',
          dosage: '1g per liter water',
          application: 'Soil drench at base',
          timing: 'At early wilting signs',
        },
        {
          type: 'organic',
          name: 'Neem Cake',
          dosage: '1 kg per plant',
          application: 'Mixed with soil',
          timing: 'Planting stage',
        },
      ],
      prevention: [
        'Use tissue-cultured plants',
        'Ensure proper drainage',
        'Avoid monocropping',
        'Destroy infected suckers',
      ],
    },
  ],

  // ✅ Mango
  'Mango': [
    {
      name: 'Powdery Mildew',
      confidence: 83,
      severity: 'Medium',
      description:
        'Fungal disease forming white powdery coating on leaves, inflorescences, and fruits.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Micronutrient Spray (Zn + B)',
          dosage: '2g per liter water',
          application: 'Foliar spray',
          timing: 'Pre-flowering stage',
        },
        {
          type: 'pesticide',
          name: 'Wettable Sulphur',
          dosage: '2g per liter water',
          application: 'Foliar spray',
          timing: 'At first symptom',
        },
        {
          type: 'organic',
          name: 'Cow Urine Extract',
          dosage: '1:10 dilution',
          application: 'Foliar spray',
          timing: 'Weekly during infection period',
        },
      ],
      prevention: [
        'Ensure pruning for good airflow',
        'Avoid overcrowding of trees',
        'Monitor flowering stages',
      ],
    },
  ],

  // ✅ Chili
  'Chili': [
    {
      name: 'Leaf Curl Virus',
      confidence: 84,
      severity: 'High',
      description:
        'Caused by whitefly-transmitted virus leading to leaf curling, stunted growth, and reduced fruiting.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Micronutrient Foliar Spray',
          dosage: '5ml per liter water',
          application: 'Spray on foliage',
          timing: 'Fortnightly',
        },
        {
          type: 'pesticide',
          name: 'Imidacloprid 17.8 SL',
          dosage: '0.3ml per liter water',
          application: 'Spray on affected plants',
          timing: 'Weekly until control achieved',
        },
        {
          type: 'organic',
          name: 'Neem Oil',
          dosage: '5ml per liter water',
          application: 'Foliar spray',
          timing: 'Alternate with chemical spray',
        },
      ],
      prevention: [
        'Use virus-free seedlings',
        'Control whiteflies promptly',
        'Remove infected plants',
      ],
    },
  ],

  // ✅ Groundnut
  'Groundnut': [
    {
      name: 'Tikka Leaf Spot',
      confidence: 85,
      severity: 'Medium',
      description:
        'Causes circular brown spots leading to premature defoliation and yield loss.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Gypsum (Calcium Sulphate)',
          dosage: '200 kg per hectare',
          application: 'Broadcast before sowing',
          timing: 'Before planting',
        },
        {
          type: 'pesticide',
          name: 'Chlorothalonil 75 WP',
          dosage: '2g per liter water',
          application: 'Foliar spray',
          timing: 'At disease onset',
        },
        {
          type: 'organic',
          name: 'Trichoderma harzianum',
          dosage: '5 kg per hectare',
          application: 'Seed treatment',
          timing: 'Before sowing',
        },
      ],
      prevention: [
        'Rotate crops every 2 years',
        'Remove diseased leaves promptly',
        'Use resistant varieties',
      ],
    },
  ],

  // ✅ Soybean
  'Soybean': [
    {
      name: 'Rust Disease',
      confidence: 90,
      severity: 'High',
      description:
        'Causes reddish-brown pustules on leaves, leading to defoliation and reduced photosynthesis.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Phosphorus Fertilizer',
          dosage: '60 kg per hectare',
          application: 'Basal application',
          timing: 'At planting',
        },
        {
          type: 'pesticide',
          name: 'Hexaconazole 5 EC',
          dosage: '2ml per liter water',
          application: 'Foliar spray',
          timing: 'At first symptom',
        },
        {
          type: 'organic',
          name: 'Compost Tea',
          dosage: '1:10 dilution',
          application: 'Soil drench',
          timing: 'Biweekly',
        },
      ],
      prevention: [
        'Use certified seeds',
        'Avoid excess nitrogen',
        'Remove plant debris',
      ],
    },
  ],

  // ✅ Grapes
  'Grapes': [
    {
      name: 'Downy Mildew',
      confidence: 88,
      severity: 'High',
      description:
        'A fungal disease causing yellow patches on upper leaves and white mildew growth beneath.',
      treatments: [
        {
          type: 'fertilizer',
          name: 'Potassium Nitrate',
          dosage: '50 kg per hectare',
          application: 'Fertigation',
          timing: 'At fruit development',
        },
        {
          type: 'pesticide',
          name: 'Metalaxyl + Mancozeb',
          dosage: '2g per liter water',
          application: 'Foliar spray',
          timing: 'After rainfall or humidity',
        },
        {
          type: 'organic',
          name: 'Sulphur Dust',
          dosage: '25 kg per hectare',
          application: 'Dusting',
          timing: 'Dry weather only',
        },
      ],
      prevention: [
        'Ensure good canopy ventilation',
        'Avoid overhead irrigation',
        'Remove affected leaves early',
      ],
    },
  ],
};

// ✅ Function to get random disease
export const getRandomDisease = (cropType: string): Disease => {
  const diseases = DISEASE_DATABASE[cropType];
  if (diseases && diseases.length > 0) {
    return diseases[Math.floor(Math.random() * diseases.length)];
  }

  // Default fallback
  return {
    name: 'Fungal Leaf Spot',
    confidence: 78,
    severity: 'Medium',
    description:
      'A common fungal infection causing circular spots on leaves. Can be managed with proper fungicide application and cultural practices.',
    treatments: [
      {
        type: 'fertilizer',
        name: 'Balanced NPK (15-15-15)',
        dosage: '25 kg per acre',
        application: 'Broadcast and incorporate into soil',
        timing: 'Monthly application',
      },
      {
        type: 'pesticide',
        name: 'Copper-based Fungicide',
        dosage: '2-3g per liter water',
        application: 'Foliar spray on affected areas',
        timing: 'Every 10-14 days',
      },
      {
        type: 'organic',
        name: 'Compost Tea',
        dosage: '1:10 ratio with water',
        application: 'Soil drench around plants',
        timing: 'Bi-weekly application',
      },
    ],
    prevention: [
      'Maintain proper spacing',
      'Remove infected leaves',
      'Avoid overhead watering',
      'Apply mulch to suppress pathogens',
      'Rotate crops with non-host plants',
    ],
  };
};
