// Catalogue Maison Hatt's Paris — données produits (démo)
// Images sourcées et vérifiées visuellement (Unsplash + Wikimedia Commons)

const unsplash = (id, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

// ───────── Bibliothèque d'images vérifiées ─────────

const SHOES = {
  oxfordBlack1:
    'https://upload.wikimedia.org/wikipedia/commons/9/9b/Crockett_%26_Jones_men%27s_dress_shoes%2C_type_Dalton%2C_black_calf_leather_01.JPG',
  oxfordBlack2:
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/Crockett_%26_Jones_men%27s_dress_shoes%2C_type_Dalton%2C_black_calf_leather_02.JPG',
  derbyBrown:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Dark_brown_Loake_Aldwych_oxfords.jpg/1280px-Dark_brown_Loake_Aldwych_oxfords.jpg',
  brogueBrownOverhead: unsplash('1614253429340-98120bd6d753'),
  loaferTassel:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/A_brown_Loafer_Shoes_from_TODS.jpg/1280px-A_brown_Loafer_Shoes_from_TODS.jpg',
  chelseaClean:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Chelsea_boot%2C_black.jpg/1280px-Chelsea_boot%2C_black.jpg',
  chelseaPair: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/VeggieChelseaBoots.jpg',
  sneakerStudio:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Paar_witte_sneakers%2C_merk_G-Unit%2C_maat_40%2C_objectnr_87415-7.A-B.JPG/1280px-Paar_witte_sneakers%2C_merk_G-Unit%2C_maat_40%2C_objectnr_87415-7.A-B.JPG',
  sneakerLifestyle:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/White_sneakers.jpg/1280px-White_sneakers.jpg',
  flatlayWithDerby: unsplash('1593030761757-71fae45fa0e7'),
}

const LEATHER_GOODS = {
  wallet:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/A_men%27s_wallet.jpg/1280px-A_men%27s_wallet.jpg',
  belt: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Leather_Belt_for_Men_.jpg',
  duffel:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Leather_duffel_bag_on_the_ground_%28Unsplash%29.jpg/1280px-Leather_duffel_bag_on_the_ground_%28Unsplash%29.jpg',
  briefcase:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/ANTORINI_Executive_Leather_Briefcase.jpg/1280px-ANTORINI_Executive_Leather_Briefcase.jpg',
  gloveTan:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Peccary_Driving_Glove.jpg/1280px-Peccary_Driving_Glove.jpg',
  gloveBlack:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Peccary_Driving_Glove_Black.jpg/1280px-Peccary_Driving_Glove_Black.jpg',
}

const SUITS = {
  navyPlaidBlazer: unsplash('1592878904946-b3cd8ae243d0'),
  green: unsplash('1593032465175-481ac7f401a0'),
  bluePlaid3Piece: unsplash('1594938298603-c8148c4dae35'),
  manAdjusting: unsplash('1507679799987-c73779587ccf'),
  fabricMacro:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Businessman-fashion-suit-jacket_%2824300754036%29.jpg/1280px-Businessman-fashion-suit-jacket_%2824300754036%29.jpg',
}

const SHIRTS = {
  foldedThree: unsplash('1602810318383-e386cc2a3ccf'),
  blueClean:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Blue_Business_Shirt.jpg/1280px-Blue_Business_Shirt.jpg',
  whiteFolded:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Camicia_Cottonstir.jpg/1280px-Camicia_Cottonstir.jpg',
  lifestyleBlue: unsplash('1620012253295-c15cc3e65df4'),
}

const BRAND_PHOTOS = {
  hero: unsplash('1519085360753-af0119f7cbe7', 1800),
  brandPortrait: unsplash('1593032465175-481ac7f401a0', 1200),
  atelier: LEATHER_GOODS.duffel,
  craft: SUITS.fabricMacro,
}

export const CATEGORIES = [
  { slug: 'maroquinerie', label: 'Maroquinerie', cover: LEATHER_GOODS.duffel },
  { slug: 'chaussures', label: 'Chaussures', cover: SHOES.brogueBrownOverhead },
  { slug: 'costumes', label: 'Costumes', cover: SUITS.navyPlaidBlazer },
  { slug: 'chemises', label: 'Chemises', cover: SHIRTS.foldedThree },
]

const SHOE_SIZES = ['39', '40', '41', '42', '43', '44', '45', '46']
const SHIRT_SIZES = ['S', 'M', 'L', 'XL']
const SUIT_SIZES = ['44', '46', '48', '50', '52', '54', '56']

const LEATHER_COLORS = [
  { name: 'Noir', hex: '#171311' },
  { name: 'Cognac', hex: '#9c5a2e' },
  { name: 'Havane', hex: '#7a4a26' },
  { name: 'Bordeaux', hex: '#5c1f2a' },
]

const SUIT_COLORS = [
  { name: 'Bleu nuit', hex: '#16213a' },
  { name: 'Anthracite', hex: '#3a3a3a' },
  { name: 'Gris', hex: '#6e6e6e' },
]

const SHIRT_COLORS = [
  { name: 'Blanc', hex: '#f5f3ee' },
  { name: 'Bleu ciel', hex: '#aebed1' },
  { name: 'Marine', hex: '#2e3a59' },
]

export const PRODUCTS = [
  // ───────────── MAROQUINERIE ─────────────
  {
    id: 'm1',
    name: 'Portefeuille bifold',
    subtitle: 'Cuir tannage végétal',
    price: 285,
    category: 'maroquinerie',
    badge: 'BESTSELLER',
    rating: 4.9,
    reviews: 132,
    colors: LEATHER_COLORS.slice(0, 3),
    sizes: [],
    unavailableSizes: [],
    images: [LEATHER_GOODS.wallet, LEATHER_GOODS.belt, LEATHER_GOODS.briefcase, LEATHER_GOODS.duffel],
    description:
      'Façonné à la main à partir d\'un cuir de veau à tannage végétal, ce portefeuille bifold révèle une patine unique au fil du temps. Doublure en cuir d\'agneau, six compartiments cartes et une poche billets.',
    care: 'Cuir pleine fleur — éviter l\'humidité prolongée, nourrir avec une crème incolore tous les six mois.',
    origin: 'Fabriqué à la main en Italie (Toscane).',
  },
  {
    id: 'm2',
    name: 'Ceinture cuir grainé',
    subtitle: 'Boucle dorée signature',
    price: 195,
    category: 'maroquinerie',
    badge: null,
    rating: 4.8,
    reviews: 64,
    colors: LEATHER_COLORS,
    sizes: [],
    unavailableSizes: [],
    images: [LEATHER_GOODS.belt, LEATHER_GOODS.wallet, LEATHER_GOODS.gloveTan, LEATHER_GOODS.gloveBlack],
    description:
      'Ceinture en cuir grainé pleine fleur, boucle laiton finition or mat gravée de nos initiales. Largeur 35mm, coupe ajustable sur mesure en boutique.',
    care: 'Essuyer avec un chiffon doux sec, éviter le contact prolongé avec l\'eau.',
    origin: 'Fabriqué à la main en Italie.',
  },
  {
    id: 'm3',
    name: 'Sac weekender',
    subtitle: 'Cuir havane pleine fleur',
    price: 890,
    category: 'maroquinerie',
    badge: 'NOUVEAU',
    rating: 5.0,
    reviews: 21,
    colors: LEATHER_COLORS.slice(1, 4),
    sizes: [],
    unavailableSizes: [],
    images: [LEATHER_GOODS.duffel, LEATHER_GOODS.briefcase, LEATHER_GOODS.belt, LEATHER_GOODS.wallet],
    description:
      'Le compagnon idéal des escapades courtes. Cuir pleine fleur havane, quincaillerie laiton vieilli, anses portées épaule réglables et fond renforcé.',
    care: 'Conserver dans la housse fournie hors usage, nourrir le cuir une à deux fois par an.',
    origin: 'Fabriqué à la main en Italie.',
  },
  {
    id: 'm4',
    name: 'Porte-cartes slim',
    subtitle: 'Veau lisse',
    price: 145,
    category: 'maroquinerie',
    badge: null,
    rating: 4.7,
    reviews: 88,
    colors: LEATHER_COLORS.slice(0, 3),
    sizes: [],
    unavailableSizes: [],
    images: [LEATHER_GOODS.wallet, LEATHER_GOODS.belt, LEATHER_GOODS.gloveTan, LEATHER_GOODS.briefcase],
    description:
      'Format ultra-plat pour la poche intérieure, en cuir de veau lisse. Quatre fentes cartes et une poche centrale pour les billets pliés.',
    care: 'Cuir lisse — éviter les surfaces abrasives, entretenir avec une crème nourrissante incolore.',
    origin: 'Fabriqué à la main en Italie.',
  },
  {
    id: 'm5',
    name: 'Sac business 24h',
    subtitle: 'Cuir pleine fleur',
    price: 1250,
    category: 'maroquinerie',
    badge: 'BESTSELLER',
    rating: 4.9,
    reviews: 39,
    colors: LEATHER_COLORS.slice(0, 2),
    sizes: [],
    unavailableSizes: [],
    images: [LEATHER_GOODS.briefcase, LEATHER_GOODS.duffel, LEATHER_GOODS.wallet, LEATHER_GOODS.belt],
    description:
      'Sac de travail structuré pensé pour le quotidien : compartiment ordinateur 15", poche documents, anses cuir tressé et bandoulière amovible.',
    care: 'Ranger sur sa base, éviter l\'exposition prolongée au soleil.',
    origin: 'Fabriqué à la main en Italie.',
  },
  {
    id: 'm6',
    name: 'Gants conduite',
    subtitle: 'Cuir nappa',
    price: 320,
    category: 'maroquinerie',
    badge: null,
    rating: 4.8,
    reviews: 27,
    colors: LEATHER_COLORS.slice(0, 3),
    sizes: ['S', 'M', 'L', 'XL'],
    unavailableSizes: ['S'],
    images: [LEATHER_GOODS.gloveTan, LEATHER_GOODS.gloveBlack, LEATHER_GOODS.wallet, LEATHER_GOODS.belt],
    description:
      'Cuir nappa extra-souple, dos ajouré pour la respirabilité, doublure cachemire. Coupe ajustée pensée pour la conduite et la ville.',
    care: 'Nettoyage à sec uniquement.',
    origin: 'Fabriqué à la main en Italie.',
  },

  // ───────────── CHAUSSURES ─────────────
  {
    id: 'c1',
    name: 'Oxford double semelle',
    subtitle: 'Construction Goodyear',
    price: 595,
    category: 'chaussures',
    badge: 'BESTSELLER',
    rating: 4.9,
    reviews: 156,
    colors: LEATHER_COLORS.slice(0, 3),
    sizes: SHOE_SIZES,
    unavailableSizes: ['39', '46'],
    images: [SHOES.oxfordBlack1, SHOES.oxfordBlack2, SHOES.derbyBrown, SHOES.brogueBrownOverhead],
    description:
      'L\'Oxford par excellence : tige lisse fermée, construction Goodyear cousue permettant le ressemelage à vie, double semelle de cuir.',
    care: 'Embauchoirs en cèdre après chaque port, cirage régulier, alterner les paires.',
    origin: 'Fait main en Italie.',
  },
  {
    id: 'c2',
    name: 'Derby brogue',
    subtitle: 'Cuir cognac perforé',
    price: 495,
    category: 'chaussures',
    badge: null,
    rating: 4.8,
    reviews: 94,
    colors: LEATHER_COLORS.slice(1, 4),
    sizes: SHOE_SIZES,
    unavailableSizes: ['40'],
    images: [SHOES.brogueBrownOverhead, SHOES.derbyBrown, SHOES.oxfordBlack1, SHOES.flatlayWithDerby],
    description:
      'Derby à bout fleuri perforé (full brogue), cuir cognac patiné à la main, semelle cuir cousue Blake.',
    care: 'Embauchoirs en cèdre, cirage tous les 10 à 15 ports.',
    origin: 'Fait main en Italie.',
  },
  {
    id: 'c3',
    name: 'Mocassin à glands',
    subtitle: 'Daim camel',
    price: 445,
    category: 'chaussures',
    badge: null,
    rating: 4.7,
    reviews: 58,
    colors: [{ name: 'Camel', hex: '#c9a06a' }, { name: 'Cognac', hex: '#9c5a2e' }],
    sizes: SHOE_SIZES,
    unavailableSizes: [],
    images: [SHOES.loaferTassel, SHOES.derbyBrown, SHOES.brogueBrownOverhead, SHOES.flatlayWithDerby],
    description:
      'Mocassin penny à glands en daim camel, monture souple et semelle fine pour une élégance décontractée.',
    care: 'Brosse à daim après chaque port, traiter avec un imperméabilisant incolore.',
    origin: 'Fait main en Italie.',
  },
  {
    id: 'c4',
    name: 'Chelsea boot',
    subtitle: 'Cuir ciré',
    price: 545,
    category: 'chaussures',
    badge: 'NOUVEAU',
    rating: 4.9,
    reviews: 33,
    colors: LEATHER_COLORS.slice(0, 3),
    sizes: SHOE_SIZES,
    unavailableSizes: ['45', '46'],
    images: [SHOES.chelseaClean, SHOES.chelseaPair, SHOES.oxfordBlack2, SHOES.derbyBrown],
    description:
      'Chelsea boot en cuir ciré, élastiques latéraux invisibles, semelle cuir bord carré. La pièce iconique du vestiaire hivernal.',
    care: 'Cirage à base de cire, tirette en cuir à manipuler avec soin.',
    origin: 'Fait main en Italie.',
  },
  {
    id: 'c5',
    name: 'Derby cuir bordeaux',
    subtitle: 'Bout droit',
    price: 475,
    category: 'chaussures',
    badge: null,
    rating: 4.7,
    reviews: 41,
    colors: LEATHER_COLORS.slice(2, 4),
    sizes: SHOE_SIZES,
    unavailableSizes: [],
    images: [SHOES.derbyBrown, SHOES.brogueBrownOverhead, SHOES.oxfordBlack1, SHOES.chelseaClean],
    description:
      'Derby bout droit en cuir patiné, ligne épurée et patine profonde, semelle cuir cousue Blake.',
    care: 'Embauchoirs en cèdre, cirage tous les 10 à 15 ports.',
    origin: 'Fait main en Italie.',
  },
  {
    id: 'c6',
    name: 'Sneaker minimaliste',
    subtitle: 'Cuir blanc',
    price: 395,
    category: 'chaussures',
    badge: 'NOUVEAU',
    rating: 4.8,
    reviews: 72,
    colors: [{ name: 'Blanc', hex: '#f3f1ec' }, { name: 'Noir', hex: '#171311' }],
    sizes: SHOE_SIZES,
    unavailableSizes: ['39'],
    images: [SHOES.sneakerStudio, SHOES.sneakerLifestyle, SHOES.loaferTassel, SHOES.chelseaClean],
    description:
      'Sneaker en cuir pleine fleur, ligne minimaliste et semelle en gomme naturelle. Le confort du quotidien, l\'élégance en plus.',
    care: 'Nettoyer avec un chiffon humide, traiter avec un protecteur cuir.',
    origin: 'Fait main au Portugal.',
  },

  // ───────────── COSTUMES ─────────────
  {
    id: 's1',
    name: 'Costume 2 pièces',
    subtitle: 'Laine Super 120\'s',
    price: 1890,
    category: 'costumes',
    badge: 'BESTSELLER',
    rating: 4.9,
    reviews: 47,
    colors: SUIT_COLORS,
    sizes: SUIT_SIZES,
    unavailableSizes: ['44'],
    images: [SUITS.navyPlaidBlazer, SUITS.manAdjusting, SUITS.fabricMacro, SUITS.bluePlaid3Piece],
    description:
      'Costume deux pièces en laine Super 120\'s, coupe italienne déstructurée, veste demi-doublée et pantalon à pinces.',
    care: 'Nettoyage à sec recommandé, aérer après chaque port, repassage à la pattemouille.',
    origin: 'Confectionné en Italie.',
  },
  {
    id: 's2',
    name: 'Costume croisé',
    subtitle: 'Bleu nuit',
    price: 2100,
    category: 'costumes',
    badge: 'NOUVEAU',
    rating: 5.0,
    reviews: 18,
    colors: SUIT_COLORS.slice(0, 2),
    sizes: SUIT_SIZES,
    unavailableSizes: ['56'],
    images: [SUITS.bluePlaid3Piece, SUITS.manAdjusting, SUITS.navyPlaidBlazer, SUITS.fabricMacro],
    description:
      'Costume croisé six boutons en laine peignée bleu nuit, revers larges et carrure structurée pour une silhouette affirmée.',
    care: 'Nettoyage à sec recommandé, conserver sur cintre épaule large.',
    origin: 'Confectionné en Italie.',
  },
  {
    id: 's3',
    name: 'Veste en lin',
    subtitle: 'Coupe non doublée',
    price: 890,
    category: 'costumes',
    badge: null,
    rating: 4.6,
    reviews: 29,
    colors: [{ name: 'Écru', hex: '#d8cdb8' }, { name: 'Bleu ciel', hex: '#aebed1' }],
    sizes: SUIT_SIZES,
    unavailableSizes: [],
    images: [SUITS.green, SUITS.manAdjusting, SUITS.fabricMacro, SUITS.navyPlaidBlazer],
    description:
      'Veste en lin non doublée, légère et respirante, parfaite pour les saisons chaudes. Coupe décontractée à trois boutons.',
    care: 'Nettoyage à sec recommandé, le froissé du lin fait partie de son caractère.',
    origin: 'Confectionné en Italie.',
  },
  {
    id: 's4',
    name: 'Costume slim',
    subtitle: 'Gris anthracite',
    price: 1650,
    category: 'costumes',
    badge: null,
    rating: 4.8,
    reviews: 52,
    colors: SUIT_COLORS.slice(1, 3),
    sizes: SUIT_SIZES,
    unavailableSizes: ['46'],
    images: [SUITS.green, SUITS.bluePlaid3Piece, SUITS.manAdjusting, SUITS.navyPlaidBlazer],
    description:
      'Costume coupe slim en laine gris anthracite, veste deux boutons et pantalon droit. Une base intemporelle pour le bureau.',
    care: 'Nettoyage à sec recommandé, repassage vapeur basse température.',
    origin: 'Confectionné en Italie.',
  },

  // ───────────── CHEMISES ─────────────
  {
    id: 'h1',
    name: 'Chemise Oxford',
    subtitle: 'Col français',
    price: 185,
    category: 'chemises',
    badge: 'BESTSELLER',
    rating: 4.8,
    reviews: 103,
    colors: SHIRT_COLORS,
    sizes: SHIRT_SIZES,
    unavailableSizes: ['S'],
    images: [SHIRTS.foldedThree, SHIRTS.blueClean, SHIRTS.whiteFolded, SHIRTS.lifestyleBlue],
    description:
      'Chemise en coton Oxford, col français structuré, coupe ajustée. Le fondamental du vestiaire masculin, à porter avec ou sans cravate.',
    care: 'Lavage 30°C, repassage à chaud sur l\'envers.',
    origin: 'Confectionné au Portugal.',
  },
  {
    id: 'h2',
    name: 'Chemise twill',
    subtitle: 'Blanc pur',
    price: 210,
    category: 'chemises',
    badge: null,
    rating: 4.9,
    reviews: 67,
    colors: [{ name: 'Blanc', hex: '#f5f3ee' }],
    sizes: SHIRT_SIZES,
    unavailableSizes: [],
    images: [SHIRTS.whiteFolded, SHIRTS.foldedThree, SHIRTS.blueClean, SHIRTS.lifestyleBlue],
    description:
      'Chemise en twill de coton blanc pur, finition brillante subtile, col italien rigide. La pièce de cérémonie par excellence.',
    care: 'Lavage 30°C, repassage à chaud, traitement anti-tache recommandé.',
    origin: 'Confectionné au Portugal.',
  },
  {
    id: 'h3',
    name: 'Chemise flanelle',
    subtitle: 'Bleue',
    price: 195,
    category: 'chemises',
    badge: 'NOUVEAU',
    rating: 4.7,
    reviews: 24,
    colors: [{ name: 'Bleu marine', hex: '#2e3a59' }, { name: 'Bleu ciel', hex: '#aebed1' }],
    sizes: SHIRT_SIZES,
    unavailableSizes: ['XL'],
    images: [SHIRTS.blueClean, SHIRTS.lifestyleBlue, SHIRTS.foldedThree, SHIRTS.whiteFolded],
    description:
      'Chemise en flanelle de coton brossé, chaleur et douceur pour la saison froide. Col boutonné, coupe ajustée.',
    care: 'Lavage 30°C cycle délicat, séchage à plat.',
    origin: 'Confectionné au Portugal.',
  },
  {
    id: 'h4',
    name: 'Chemise popeline',
    subtitle: 'Rayée',
    price: 175,
    category: 'chemises',
    badge: null,
    rating: 4.6,
    reviews: 38,
    colors: [{ name: 'Rayures bleues', hex: '#8fa3bf' }, { name: 'Rayures grises', hex: '#9a9a8e' }],
    sizes: SHIRT_SIZES,
    unavailableSizes: [],
    images: [SHIRTS.lifestyleBlue, SHIRTS.foldedThree, SHIRTS.blueClean, SHIRTS.whiteFolded],
    description:
      'Chemise en popeline de coton à fines rayures, col américain souple. Une touche de caractère pour le quotidien.',
    care: 'Lavage 30°C, repassage à chaud sur l\'envers.',
    origin: 'Confectionné au Portugal.',
  },
]

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id)
export const getProductsByCategory = (slug) =>
  PRODUCTS.filter((p) => p.category === slug)
export const getRelatedProducts = (product, count = 3) =>
  PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(
    0,
    count,
  )

export const BRAND_IMAGES = BRAND_PHOTOS
