export type Treatment = {
  id: string;
  catalog: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  duration: string;
  price: string;
  image: string;
  imageAlt: string;
};

export const treatments: Treatment[] = [
  {
    id: "dysport",
    catalog: "Injectabile",
    title: "Tratament Anti-Riduri",
    subtitle: "Injectare cu Dysport®",
    description:
      "Procedură minim invazivă de relaxare musculară pentru netezirea ridurilor de expresie (frunte, contur ochilor), oferind un aspect natural, întinerit și odihnit.",
    benefits: [
      "Durată 20 min",
      "Efect vizibil în 3–5 zile",
      "Rezultat de lungă durată",
    ],
    duration: "20 min",
    price: "de la 1.200 lei",
    image: "/treatments/dysport.webp",
    imageAlt:
      "Medic estetician aplicând tratament injectabil anti-riduri cu Dysport",
  },
  {
    id: "powershape",
    catalog: "Corp",
    title: "Anticelulită & Remodelare",
    subtitle: "Powershape™2",
    description:
      "Tehnologie avansată ce combină radiofrecvența, vacuumul și laserul lipolitic pentru reducerea celulitei, drenaj limfatic intens și tonifierea pielii.",
    benefits: [
      "Fără timp de recuperare",
      "Remodelare vizibilă pe zonele problemă",
      "Tonifiere și drenaj limfatic",
    ],
    duration: "45–60 min",
    price: "de la 650 lei",
    image: "/treatments/powershape.webp",
    imageAlt:
      "Ședință de remodelare corporală cu aparat Powershape pe zona coapsei",
  },
  {
    id: "epilare",
    catalog: "Laser",
    title: "Epilare Definitivă Full Body",
    subtitle: "Fără limite de zone",
    description:
      "Sistem laser de ultimă generație pentru îndepărtarea eficientă și nedureroasă a părului nedorit pe termen lung, potrivit pentru orice tip de piele.",
    benefits: [
      "Confort maxim prin sistem de răcire integrat",
      "Pachet complet fără restricții de zone",
      "Potrivit pentru orice tip de piele",
    ],
    duration: "60–90 min",
    price: "pachet full body",
    image: "/treatments/epilare.webp",
    imageAlt: "Epilare laser full body cu sistem de răcire integrat",
  },
  {
    id: "hifu",
    catalog: "Lifting",
    title: "Lifting Facial Total",
    subtitle: "HIFU – Microson™ Pen",
    description:
      "Ultrasunete focalizate de înaltă intensitate pentru un efect de lifting facial nechirurgical, stimulând natural producția de colagen în profunzime.",
    benefits: [
      "Redefinirea conturului facial",
      "Efect tensor imediat și progresiv",
      "Fără incizii, fără recuperare",
    ],
    duration: "60 min",
    price: "de la 2.400 lei",
    image: "/treatments/hifu.webp",
    imageAlt: "Lifting facial nechirurgical cu ultrasunete HIFU Microson Pen",
  },
  {
    id: "octoline",
    catalog: "Facial",
    title: "Curățare & Hidratare Profundă",
    subtitle: "Tratament Octoline",
    description:
      "Terapie facială complexă multifuncțională ce asigură curățarea în profunzime a porilor, exfoliere delicată și infuzie intensă de ingrediente active hidratante.",
    benefits: [
      "Piele revigorată",
      "Luminozitate instantanee",
      "Textură catifelată",
    ],
    duration: "50 min",
    price: "de la 480 lei",
    image: "/treatments/octoline.webp",
    imageAlt: "Tratament facial Octoline pentru curățare și hidratare profundă",
  },
];
