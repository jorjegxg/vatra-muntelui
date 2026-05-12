export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  priceLei: number;
  imageUrl: string;
  category: string;
};

/** Unsplash CDN: folosește ixlib + auto=format; ID-urile sunt verificate (200). */
const sq = (id: string) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=900&q=80`;

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "miere-salcam-bio",
    name: "Miere de salcâm bio",
    shortDescription: "Miere cremoasă, recoltată responsabil din stupi montani.",
    longDescription:
      "Mierea de salcâm este apreciată pentru gustul delicat și cristalizare lentă. Provine din zone nepoluate, fără tratamente chimice la stupi. Ideală pentru ceaiuri fine sau pâine artizanală.",
    priceLei: 42,
    imageUrl: sq("1558642452-9d2a7deb7f62"),
    category: "Dulce natural",
  },
  {
    id: "2",
    slug: "ceai-plante-munte",
    name: "Amestec de ceaiuri din plante de munte",
    shortDescription: "Mușețel, tei și sunătoare uscate manual.",
    longDescription:
      "Combinație echilibrată de plante culese la altitudine. Infuzie aurie, aromă florală calmantă. Fără arome artificiale sau conservanți.",
    priceLei: 28,
    imageUrl: sq("1564890369478-c89ca6d9cde9"),
    category: "Băuturi",
  },
  {
    id: "3",
    slug: "ulei-masline-extra-vergine",
    name: "Ulei de măsline extra virgin",
    shortDescription: "Presat la rece, aciditate scăzută, note de ierburi verzi.",
    longDescription:
      "Ulei obținut din măsline culese timpurii. Potrivit pentru salate, legume la grătar și dressing-uri simple. Sticlă închisă la culoare pentru protecție.",
    priceLei: 56,
    imageUrl: sq("1474979266404-7eaacbcd87c5"),
    category: "Uleiuri",
  },
  {
    id: "4",
    slug: "sapun-lavanda-artizanal",
    name: "Săpun artizanal cu lavandă",
    shortDescription: "Bază vegetală, uleiuri esențiale și flori de lavandă.",
    longDescription:
      "Săpun lucrat manual, cu ulei de măsline și unt de shea. Spumă bogată, parfum discret de lavandă. Fără parabeni sau sulfati agresivi.",
    priceLei: 22,
    imageUrl: sq("1484723091739-30a097e8f929"),
    category: "Îngrijire",
  },
  {
    id: "5",
    slug: "condimente-ierburi-uscate",
    name: "Set condimente din ierburi uscate",
    shortDescription: "Rozmarin, cimbru și oregano în borcane reutilizabile.",
    longDescription:
      "Ierburi uscate lent pentru a păstra uleiurile esențiale. Perfecte pentru bucătărie mediteraneană și grătare. Ambalaj minimal, etichetat manual.",
    priceLei: 35,
    imageUrl: sq("1498837167922-ddd27525d352"),
    category: "Bucătărie",
  },
  {
    id: "6",
    slug: "nuci-mix-crud",
    name: "Mix de nuci crude",
    shortDescription: "Alune, nuci și migdale — fără sare sau zaharuri adăugate.",
    longDescription:
      "Seleție de nuci prăjite ușor sau crude, bogate în grăsimi bune. Gustare sănătoasă între mese sau topping pentru iaurt și ovăz.",
    priceLei: 48,
    imageUrl: sq("1546069901-ba9599a7e63c"),
    category: "Snacks",
  },
  {
    id: "7",
    slug: "sirop-aronia-miere",
    name: "Sirop de aronia cu miere",
    shortDescription: "Concentrat natural, diluat în apă sau ceai.",
    longDescription:
      "Aronia bogată în antociani, îndulcită discret cu miere de albine. Fără coloranți. Păstrați la rece după deschidere.",
    priceLei: 39,
    imageUrl: sq("1559056199-641a0ac8b55e"),
    category: "Dulce natural",
  },
  {
    id: "8",
    slug: "ceai-verde-jasmin",
    name: "Ceai verde cu iasomie",
    shortDescription: "Frunze întregi, aromă florală delicată.",
    longDescription:
      "Ceai verde infuzat tradițional cu petale de iasomie. Conținut moderat de cofeină. Ambalat în pungi care păstrează prospețimea.",
    priceLei: 31,
    imageUrl: sq("1504674900247-0877df9cc836"),
    category: "Băuturi",
  },
  {
    id: "9",
    slug: "fulgi-ovaz-bio",
    name: "Fulgi de ovăz bio",
    shortDescription: "Mic dejun consistent, sursă de fibre.",
    longDescription:
      "Ovăz integral, măcinat gros pentru textură cremoasă la fiert. Potrivit pentru clătite, smoothie-uri și prăjituri sănătoase.",
    priceLei: 14,
    imageUrl: sq("1512621776951-a57141f2eefd"),
    category: "Cereale",
  },
  {
    id: "10",
    slug: "miere-poliflora-cremoasa",
    name: "Miere polifloră cremoasă",
    shortDescription: "Textură fină, note florale diverse din livadă.",
    longDescription:
      "Miere obținută din nectarul mai multor specii de plante. Gust complex, ușor dulce. Excelentă pe toast sau în rețete de desert.",
    priceLei: 38,
    imageUrl: sq("1504754524776-8f4f37790ca0"),
    category: "Dulce natural",
  },
  {
    id: "11",
    slug: "ulei-cocos-presat-la-rece",
    name: "Ulei de cocos presat la rece",
    shortDescription: "Pentru gătit la temperaturi medii și îngrijire.",
    longDescription:
      "Ulei virgin de cocos, aromă discretă de nucă de cocos. Solid sub 24°C. Util în bucătărie vegană și pentru hidratarea pielii.",
    priceLei: 44,
    imageUrl: sq("1628088062854-d1870b4553da"),
    category: "Uleiuri",
  },
  {
    id: "12",
    slug: "ceai-fructe-padure",
    name: "Infuzie de fructe de pădure",
    shortDescription: "Fără cofeină, aromă dulce naturală.",
    longDescription:
      "Mere uscate, mure și fragi în amestec echilibrat. Potrivită pentru copii și seri reci. Fără zahăr adăugat în compoziție.",
    priceLei: 26,
    imageUrl: sq("1542838132-92c53300491e"),
    category: "Băuturi",
  },
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(count = 4): Product[] {
  return PRODUCTS.slice(0, count);
}
