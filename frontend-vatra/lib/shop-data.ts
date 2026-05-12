export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  priceLei: number;
  imageUrl: string;
  category: string;
  /** Listă scurtă, vizibilă pe card și în detaliu — fără arome/nume comerciale inventate. */
  ingredients: string[];
};

/** Unsplash CDN: ixlib + auto=format; ID-uri verificate. */
const sq = (id: string) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=900&q=80`;

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "sampon-natural-delicat",
    name: "Șampon natural delicat",
    shortDescription: "Curăță blând, fără sulfati puternici — potrivit pentru spălări dese.",
    longDescription:
      "Formulă ultra-natură pentru scalp sensibil. Spumă moderată, parfum discret din uleiuri esențiale. Fără siliconi grei sau coloranți sintetici. Ambalaj refilabil.",
    priceLei: 48,
    imageUrl: sq("1523381210434-271e8be1f52b"),
    category: "Îngrijire păr",
    ingredients: [
      "Apă demineralizată",
      "Tenside din nucă de cocos (glucozide)",
      "Glicerină vegetală",
      "Extract de mesteacăn",
      "Pantenol",
      "Acid citric",
      "Sorbát de potasiu",
    ],
  },
  {
    id: "2",
    slug: "strugurel-balsam-buze",
    name: "Strugurel — balsam de buze",
    shortDescription: "Balsam cu ulei din sâmburi de struguri și ceară de albine.",
    longDescription:
      "„Strugurel” e balsamul nostru emblematic: textură fină, protecție la vânt și frig, gust discret de struguri roșii din extract natural. Fără petrolatum sau parfum sintetic.",
    priceLei: 22,
    imageUrl: sq("1558642452-9d2a7deb7f62"),
    category: "Îngrijire buze",
    ingredients: [
      "Ulei de sâmburi de struguri",
      "Unt de shea nerafinat",
      "Ceară de albine",
      "Ulei de migdale dulci",
      "Vitamina E naturală",
      "Extract de struguri roșii",
    ],
  },
  {
    id: "3",
    slug: "pasta-dinti-naturala",
    name: "Pastă de dinți naturală",
    shortDescription: "Curățare cu minerale fine și mentă — fără fluor (variantă de prezentare).",
    longDescription:
      "Pastă cremoasă cu abrazivitate joasă, respectă smalțul. Mentă și eucalipt pentru respirație proaspătă. Fără triclosan, fără coloranți artificiali.",
    priceLei: 32,
    imageUrl: sq("1515378791036-0648a3ef77b2"),
    category: "Igienă orală",
    ingredients: [
      "Carbonat de calciu fin",
      "Glicerină vegetală",
      "Apă",
      "Ulei esențial de mentă",
      "Ulei esențial de eucalipt",
      "Xantan (gelifiant natural)",
      "Sorbát de potasiu",
    ],
  },
  {
    id: "4",
    slug: "sapun-solid-shea",
    name: "Săpun solid cu unt de shea",
    shortDescription: "Săpunat manual, pH echilibrat pentru piele, spumă bogată.",
    longDescription:
      "Bază din uleiuri vegetale saponificate lent. Unt de shea pentru hidratare. Lavandă și rozmarin din distilare. Ideal pentru mâini și corp.",
    priceLei: 18,
    imageUrl: sq("1556228578-0d85b1a4d571"),
    category: "Săpunuri",
    ingredients: [
      "Ulei de măsline saponificat",
      "Ulei de cocos saponificat",
      "Unt de shea",
      "Apă distilată",
      "Glicerină (rezultată natural din săpunare)",
      "Ulei esențial de lavandă",
      "Ulei esențial de rozmarin",
    ],
  },
  {
    id: "5",
    slug: "detergent-rufe-lichid-eco",
    name: "Detergent de rufe lichid eco",
    shortDescription: "Concentrat pe bază de plante — rufe albe și colorate.",
    longDescription:
      "Putere de curățare la temperaturi joase. Biodegradabilitate ridicată. Fără fosfați, fără înălbitori optici. Parfum discret din lavandă.",
    priceLei: 42,
    imageUrl: sq("1576091160550-2173dba999ef"),
    category: "Menaj rufe",
    ingredients: [
      "Apă",
      "Tenside vegetale (glucozide, betaină de coc)",
      "Săpun de potasiu lichid",
      "Carbonat de sodiu",
      "Borax (mineral)",
      "Ulei esențial de lavandă",
      "Acid citric",
    ],
  },
  {
    id: "6",
    slug: "detergent-rufe-piele-sensibila",
    name: "Detergent de rufe — piele sensibilă",
    shortDescription: "Fără parfum adăugat, fără coloranți — lenjerie și bebeluși.",
    longDescription:
      "Formula cea mai blândă din linie. Spălare eficientă la 30–40 °C. Potrivit pentru piele atopică și textile delicate. Certificări eco afișate pe eticheta reală (exemplu de prezentare).",
    priceLei: 46,
    imageUrl: sq("1507003211169-0a1dd7228f2d"),
    category: "Menaj rufe",
    ingredients: [
      "Apă",
      "Tenside din nucă de cocos",
      "Săpun de potasiu",
      "Bicarbonat de sodiu",
      "Glicerină vegetală",
      "Fără parfum",
      "Fără coloranți",
    ],
  },
  {
    id: "7",
    slug: "detergent-vase-concentrat",
    name: "Detergent de vase concentrat",
    shortDescription: "Degresare puternică din tenside vegetale — picături puține.",
    longDescription:
      "Concentrat: câteva picături per spălare. Taie grăsimea fără solvenți petrolieri. Parfum citric din uleiuri esențiale. Sticlă cu dop dozator.",
    priceLei: 28,
    imageUrl: sq("1474979266404-7eaacbcd87c5"),
    category: "Menaj bucătărie",
    ingredients: [
      "Apă",
      "Tenside din ulei de cocos",
      "Betaină de coc",
      "Sare",
      "Ulei esențial de lămâie",
      "Acid citric",
      "Sorbát de potasiu",
    ],
  },
  {
    id: "8",
    slug: "balsam-rufe-natural",
    name: "Balsam de rufe natural",
    shortDescription: "Înmoaie textilele cu uleiuri vegetale — miros discret de ierburi.",
    longDescription:
      "Înlocuitor natural pentru balsamii cu silicon. Reduce electricitatea statică. Ulei de rapiță și parfum plante uscate. Ultimul clătire.",
    priceLei: 38,
    imageUrl: sq("1498837167922-ddd27525d352"),
    category: "Menaj rufe",
    ingredients: [
      "Apă",
      "Emulsifiant vegetal",
      "Ulei de rapiță",
      "Glicerină",
      "Acid lactic",
      "Ulei esențial de cimbru",
      "Conservant eco",
    ],
  },
  {
    id: "9",
    slug: "gel-dus-natural",
    name: "Gel de duș natural",
    shortDescription: "Curățare blândă, pH neutru, hidratare din aloe.",
    longDescription:
      "Gel transparent, spumă fină. Aloe vera și extract de ovăz calmant. Fără SLS agresiv. Potrivit întregii familii.",
    priceLei: 36,
    imageUrl: sq("1628088062854-d1870b4553da"),
    category: "Îngrijire corp",
    ingredients: [
      "Apă",
      "Tenside din glucoză de porumb",
      "Glicerină",
      "Gel de aloe vera",
      "Extract de ovăz coloidal",
      "Ulei esențial de bergamotă",
      "Acid citric",
    ],
  },
  {
    id: "10",
    slug: "deodorant-stick-natural",
    name: "Deodorant stick natural",
    shortDescription: "Bicarbonat fin, unt de shea și ceară — fără aluminiu.",
    longDescription:
      "Protecție împotriva mirosului, nu blochează transpirația. Textură cremoasă la aplicare. Mentă și tea tree în doză blândă.",
    priceLei: 34,
    imageUrl: sq("1484723091739-30a097e8f929"),
    category: "Îngrijire corp",
    ingredients: [
      "Unt de shea",
      "Ceară de albine",
      "Ulei de cocos",
      "Bicarbonat de sodiu fin",
      "Amidon de porumb",
      "Ulei esențial de mentă",
      "Ulei esențial de tea tree",
    ],
  },
  {
    id: "11",
    slug: "crema-maini-migdale",
    name: "Cremă de mâini cu migdale",
    shortDescription: "Absorbție rapidă, fără silicon — după spălatul des.",
    longDescription:
      "Mâini uscate sau crăpate: ulei de migdale dulci, alantoină vegetală și unt de cacao. Parfum foarte discret.",
    priceLei: 29,
    imageUrl: sq("1504754524776-8f4f37790ca0"),
    category: "Îngrijire mâini",
    ingredients: [
      "Apă",
      "Emulsifiant din ulei de porumb",
      "Ulei de migdale dulci",
      "Unt de cacao",
      "Glicerină",
      "Alantoină",
      "Vitamina E",
    ],
  },
  {
    id: "12",
    slug: "sapun-lichid-maini-masline",
    name: "Săpun lichid pentru mâini (măsline)",
    shortDescription: "Săpun lichid din ulei de măsline — blând, biodegradabil.",
    longDescription:
      "Potrivit pentru bucătărie și baie. Miros proaspăt de măsline verzi. Refil în recipient de sticlă.",
    priceLei: 26,
    imageUrl: sq("1542838132-92c53300491e"),
    category: "Săpunuri",
    ingredients: [
      "Apă",
      "Săpun de potasiu din ulei de măsline",
      "Glicerină",
      "Sare",
      "Ulei esențial de bergamotă",
      "Acid citric",
      "Sorbát de potasiu",
    ],
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
