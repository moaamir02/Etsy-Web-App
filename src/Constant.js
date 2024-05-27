// ------------------Accessories-------------------------

// import Jewellery from "./Components/Jewellery/Jewellery";



const imageData = [
  {
    id: 1,
    title: "Hats & Caps",
    url: "https://i.etsystatic.com/6152829/c/1666/1666/185/0/il/98afe3/5999931827/il_300x300.5999931827_28br.jpg",
  },
  {
    id: 2,
    title: "Keychains & Lanyards",
    url: "https://i.etsystatic.com/6533658/r/il/80000b/823055428/il_300x300.823055428_q6vu.jpg",
  },
  {
    id: 3,
    title: "Scarves & Wraps",
    url: "https://i.etsystatic.com/5779765/r/il/8a6d0b/2149410663/il_300x300.2149410663_k17s.jpg",
  },
  {
    id: 4,
    title: "Sunglasses & Eyewear",
    url: "https://i.etsystatic.com/5491963/r/il/9fd474/461948355/il_300x300.461948355_64cm.jpg",
  },
  {
    id: 5,
    title: "Patches & Pins",
    url: "https://i.etsystatic.com/32861059/r/il/798b77/3983876348/il_300x300.3983876348_99xs.jpg",
  },
  {
    id: 6,
    title: "Hair Accessories",
    url: "https://i.etsystatic.com/5677341/r/il/5db964/5360747401/il_300x300.5360747401_phau.jpg",
  },
  {
    id: 7,
    title: "Belts & Braces",
    url: "https://i.etsystatic.com/9617243/c/1234/1234/559/1102/il/1118ec/3872142232/il_300x300.3872142232_8ln9.jpg",
  },
  {
    id: 8,
    title: "Costume Accessories",
    url: "https://i.etsystatic.com/5745600/c/662/662/169/15/il/10aa33/1273042987/il_300x300.1273042987_4zd1.jpg",
  },
  {
    id: 9,
    title: "Suit & Tie Accessories",
    url: "https://i.etsystatic.com/6667226/c/1367/1367/0/29/il/1f1413/3693597418/il_300x300.3693597418_k21e.jpg",
  },
  {
    id: 10,
    title: "Baby Accessories",
    url: "https://i.etsystatic.com/6780165/c/1753/1753/0/16/il/96b3c0/5154723432/il_300x300.5154723432_ava7.jpg",
  },
  {
    id: 11,
    title: "Umbrellas & Rain Accessories",
    url: "https://i.etsystatic.com/5247403/r/il/cfae20/5186407387/il_300x300.5186407387_knyk.jpg",
  },
  {
    id: 12,
    title: "Hand Fans",
    url: "https://i.etsystatic.com/14439636/c/745/745/0/178/il/98e618/4838909275/il_300x300.4838909275_ht7h.jpg",
  },
  {
    id: 13,
    title: "Bouquets & Corsages",
    url: "https://i.etsystatic.com/8532870/c/2250/2250/0/64/il/e4d0d2/5687029220/il_300x300.5687029220_pupf.jpg",
  },
  {
    id: 14,
    title: "Gloves & Mittens",
    url: "https://i.etsystatic.com/6373048/r/il/6efd1a/2683501411/il_300x300.2683501411_m6lj.jpg",
  },
  {
    id: 15,
    title: "Face Masks & Coverings",
    url: "https://i.etsystatic.com/22657642/r/il/886cf9/2494448014/il_300x300.2494448014_kbma.jpg",
  },
];



const cardData = [
  {
    id: 1,
    image: 'https://i.etsystatic.com/19999793/c/800/635/0/81/il/b50c3d/5103362867/il_340x270.5103362867_hews.jpg',
    title: 'Embroidered Hat Personalized Dad Cap',
    price: '₹855',
    originalPrice: '₹1,710',
    discount: '50% off',
    rating: 4.748,
    reviews: 4748,
    badge: 'Star Seller',
    adBy: 'tinyhandBabyblanket'
  },
  {
    id: 2,
    image: 'https://i.etsystatic.com/19446116/r/il/ca21cc/6041680691/il_300x300.6041680691_fevk.jpg',
    title: '18K White Gold and Palladium',
    price: '₹399,909',
    originalPrice: '',
    discount: '',
    rating: 4.4,
    reviews: 440,
    badge: '',
    adBy: 'JewelsbyKSBdesigns'
  },
  {
    id: 3,
    image: 'https://i.etsystatic.com/38214603/r/il/ac42f2/5838501897/il_340x270.5838501897_hdi7.jpg',
    title: 'Hair Vine For Bride Crystal Hairpiece',
    price: '₹2,902',
    originalPrice: '₹3,629',
    discount: '20% off',
    rating: 5.15,
    reviews: 515,
    badge: 'Star Seller',
    adBy: 'VivianDesignBtq'
  },
  {
    id: 4,
    image: 'https://i.etsystatic.com/37459069/c/2118/2118/27/153/il/70aa2b/5983359588/il_300x300.5983359588_mdrr.jpg',
    title: 'Custom Engraved Heart Couple Keychain Set',
    price: '₹1,674',
    originalPrice: '₹2,575',
    discount: '35% off',
    rating: 4.5,
    reviews: 1230,
    badge: '',
    adBy: 'OriginalBespokeGifts'
  },
  {
    id: 5,
    image: 'https://i.etsystatic.com/52051704/r/il/095b17/6036520649/il_340x270.6036520649_m7pd.jpg',
    title: 'Parada',
    price: '₹17',
    originalPrice: '',
    discount: '',
    rating: 4.2,
    reviews: 1689,
    badge: '',
    adBy: 'SeanSoloSabers'
  },
  {
    id: 6,
    image: 'https://i.etsystatic.com/27374473/r/il/0bbcaa/5987116174/il_340x270.5987116174_65ou.jpg',
    title: 'Customize Resin Flower Keychain',
    price: '₹60',
    originalPrice: '₹120',
    discount: '50% off',
    rating: 4.8,
    reviews: 128,
    badge: '',
    adBy: 'Qingsnursery'
  },
  {
    id: 7,
    image: 'https://i.etsystatic.com/51931935/r/il/49de2e/6026040711/il_340x270.6026040711_dibt.jpg',
    title: '3D Fairy Bat-Man Keychain',
    price: '₹153',
    originalPrice: '₹192',
    discount: '20% off',
    rating: 5.0,
    reviews: 2,
    badge: '',
    adBy: 'KeyKollective'
  },
  {
    id: 8,
    image: 'https://i.etsystatic.com/51687017/r/il/9a53a8/5986320496/il_340x270.5986320496_juch.jpg',
    title: 'Daddy\'s Team Fist Bump Personalized Acrylic Keychain',
    price: '₹1,287',
    originalPrice: '₹2192',
    discount: '40%',
    rating: 4.7,
    reviews: 1230,
    badge: 'Star Seller',
    adBy: 'IuLigen'
  }
];


// -----------------Art & Collectibles ---------------


const Art_CollectiblesData = [
  {
    id: 1,
    title: "Prints",
    url: "https://i.etsystatic.com/7923668/c/998/998/1/0/il/3e9953/1440705435/il_300x300.1440705435_ec5o.jpg",
  },
  {
    id: 2,
    title: "Painting",
    url: "https://i.etsystatic.com/6996104/c/1140/1140/92/38/il/2fd2b5/5532101087/il_300x300.5532101087_611q.jpg",
  },
  {
    id: 3,
    title: "Sculpture",
    url: "https://i.etsystatic.com/37142812/r/il/681104/4908658418/il_300x300.4908658418_53sz.jpg",
  },
  {
    id: 4,
    title: "Glass Art",
    url: "https://i.etsystatic.com/11991447/c/426/426/0/32/il/a3bd71/2751062303/il_300x300.2751062303_92dj.jpg",
  },
  {
    id: 5,
    title: "Drawing & Illustration",
    url: "https://i.etsystatic.com/14409281/r/il/e81b60/4651013203/il_300x300.4651013203_2j18.jpg",
  },
  {
    id: 6,
    title: "Collectibles",
    url: "https://i.etsystatic.com/28239647/r/il/7e7b9c/4316976210/il_300x300.4316976210_6hok.jpg",
  },
  {
    id: 7,
    title: "Photography",
    url: "https://i.etsystatic.com/28239647/r/il/7e7b9c/4316976210/il_300x300.4316976210_6hok.jpg",
  },
  {
    id: 8,
    title: "Fibre Arts",
    url: "https://i.etsystatic.com/15269997/r/il/193265/2839953956/il_300x300.2839953956_e608.jpg",
  },
  {
    id: 9,
    title: "Mixed Media & Collage",
    url: "https://i.etsystatic.com/13701209/c/2250/2250/0/298/il/cd5c4c/1378217145/il_300x300.1378217145_8xk8.jpg",
  },
  {
    id: 10,
    title: "Dolls & Miniatures",
    url: "https://i.etsystatic.com/19543961/r/il/de905a/5536239830/il_300x300.5536239830_skyn.jpg",
  },
  {
    id: 11,
    title: "Fine Art Ceramics",
    url: "https://i.etsystatic.com/14575056/c/727/727/71/0/il/3d184d/2376694449/il_300x300.2376694449_fwyg.jpg",
  },
  {
    id: 12,
    title: "Artist Trading Cards",
    url: "https://i.etsystatic.com/5926119/c/1275/1275/0/0/il/9d1b70/1931813040/il_300x300.1931813040_ihjr.jpg",
  }
]


const products = [
    {
        id: 1,
        image: 'https://i.etsystatic.com/50097294/r/il/027ffc/5930774136/il_794xN.5930774136_fh1p.jpg',
        title: "Set of Three Eucalyptus Botanical Prints, Watercolor Art in Soft Green, Digital Download Wall Art, Eucalyptus Botanical Art Prints Set",
        price: '₹1,287',
        originalPrice: '₹2,192',
        discount: '40%',
        rating: 4.7,
        reviews: 1230,
        badge: 'Star Seller',
        adBy: 'IuLigen'
    },
    {
        id: 2,
        image: 'https://i.etsystatic.com/19346590/r/il/ef14ad/3880477590/il_340x270.3880477590_j9lk.jpg',
        title: "Goldfinch in a summer meadow, retro midcentury 1960s Illustration print/poster - bird poster - nature",
        price: '₹586',
        originalPrice: '₹2,345',
        discount: '75%',
        rating: 4.8,
        reviews: 821,
        badge: 'Star Seller',
        adBy: 'SageWillowArtPrints'
    },
    {
        id: 3,
        image: 'https://i.etsystatic.com/26843029/c/1250/992/382/30/il/566e6e/5844778628/il_340x270.5844778628_m1fo.jpg',
        title: "Enchanting Rose Garden: Luxurious Floral Canvas Art, Lush Blooms in Rich Hues for Elegant Bedroom Decor, Sophisticated Large Wall Accent",
        price: '₹1,751',
        originalPrice: null,
        discount: null,
        rating: 5.0,
        reviews: 1807,
        badge: 'Star Seller',
        adBy: 'YvePrintCo'
    },
    {
        id: 4,
        image: 'https://i.etsystatic.com/44905843/r/il/908ccd/5479445843/il_340x270.5479445843_48t0.jpg',
        title: "Yoga PNG Bundle, Sublimation Designs, Trendy Yoga PNG, Meditation PNG, Chakra, Lotus Flower png, Spiritual Art, Zen Design png,",
        price: '₹691',
        originalPrice: '₹1,728',
        discount: '60%',
        rating: 4.5,
        reviews: 35,
        badge: 'FREE delivery',
        adBy: 'BettyPawtrait'
    },
    {
        id: 5,
        image: 'https://i.etsystatic.com/48529796/r/il/58e7c9/6038566783/il_340x270.6038566783_c50f.jpg',
        title: "VINTAGE MATCHBOX PRINT, Trendy Matches Poster, Retro Matchbook Wall Art, Funky Aesthetic Print Apartment, Instant Digital Download Poster",
        price: '₹5,072',
        originalPrice: '₹5,638',
        discount: '10%',
        rating: 5.0,
        reviews: 405,
        badge: 'FREE delivery',
        adBy: 'MSSCrafts'
    },
    {
        id: 6,
        image: 'https://i.etsystatic.com/43615263/c/2694/2139/0/536/il/a1cb83/6038081139/il_340x270.6038081139_fh2a.jpg',
        title: "Vinland Saga poster, Thorfinn, colored Manga Poster, Digital 4K Wall Print, Manga Van Gogh Style Painting, Japanese Wall Art, Forgiven",
        price: '₹775',
        originalPrice: null,
        discount: null,
        rating: null,
        reviews: null,
        badge: 'Digital Download',
        adBy: 'HaruNordDesign'
    },
    {
        id: 7,
        image: 'https://i.etsystatic.com/52127687/c/2016/1601/211/328/il/911a7e/6036964943/il_340x270.6036964943_g9c2.jpg',
        title: "Live Music Wall Art, Woman Jazz Vocalist, Vibrant Colours, Musician Portrait, Music Lover Gift, Inspirational Art",
        price: '₹505',
        originalPrice: null,
        discount: null,
        rating: 5.0,
        reviews: 121,
        badge: 'Star Seller',
        adBy: 'DGItalyYours'
    },
    {
        id: 8,
        image: 'https://i.etsystatic.com/52319732/r/il/aa3c8e/6038217503/il_794xN.6038217503_jxl1.jpg',
        title: "Flower Print, Japanese Wall Art, Digital Download, Beige, Pastel, Neutral Modern Wall Art, Minimalist Art Prints, Printable, Scandinavian",
        price: '₹800',
        originalPrice: null,
        discount: null,
        rating: 2.0,
        reviews: 1,
        badge: 'Digital Download',
        adBy: 'Sevilatricolor'
    },
  ]




  // ---------------------------Clothing----------------------------



  const ClothingData = [
    {
      id: 1,
      title: "Women's Western Clothing",
      url: "https://i.etsystatic.com/17774346/r/il/161ad5/2663702011/il_300x300.2663702011_otj1.jpg",
    },
    {
      id: 2,
      title: "Men's Western Clothing",
      url: "https://i.etsystatic.com/8920958/c/1369/1369/251/322/il/1fced6/4356189253/il_300x300.4356189253_5nk4.jpg",
    },
    {
      id: 3,
      title: "Gender-Neutral Adult Clothing",
      url: "https://i.etsystatic.com/32577737/r/il/c6cd43/4311517989/il_300x300.4311517989_7zqm.jpg",
    },
    {
      id: 4,
      title: "Girls' Western Clothing",
      url: "https://i.etsystatic.com/22053040/r/il/09d7af/3472967547/il_300x300.3472967547_iyso.jpg",
    },
    {
      id: 5,
      title: "Boys' Western Clothing",
      url: "https://i.etsystatic.com/5951669/r/il/99060e/4958255064/il_300x300.4958255064_g1rg.jpg",
    },
    {
      id: 6,
      title: "Gender-Neutral Kids' Clothing",
      url: "https://i.etsystatic.com/31350947/c/1334/1334/0/222/il/d26d30/4322348477/il_300x300.4322348477_f8se.jpg",
    },
    {
      id: 7,
      title: "Indian Ethnic Clothing",
      url: "https://i.etsystatic.com/34337042/r/il/0716fe/4584599546/il_300x300.4584599546_iszt.jpg",
    },
    {
      id: 8,
      title: "Indian Ethnic Clothing",
      url: "https://i.etsystatic.com/34337042/r/il/0716fe/4584599546/il_300x300.4584599546_iszt.jpg",
    },

  ];
  

  const Cloth_Product = [
    {
        id: 1,
        image: 'https://i.etsystatic.com/13008011/c/2000/1589/0/794/il/ba2144/2049808201/il_340x270.2049808201_48rq.jpg',
        title: "Mens linen shirt, Dress shirt, White shirt, Wedding linen shirt, Band collar shirt, Flax shirt, Gift for him, Beach shirt, Mens style",
        price: '₹1,287',
        originalPrice: '₹2,192',
        discount: '40%',
        rating: 4.7,
        reviews: 1230,
        badge: 'Star Seller',
        adBy: 'IuLigen'
    },
    {
        id: 2,
        image: 'https://i.etsystatic.com/44225587/c/2727/2167/244/0/il/717b4e/5882148834/il_340x270.5882148834_7lns.jpg',
        title: "Comfort Colors® Flower Bouquet Shirt, Flower T Shirt, Retro Floral Shirt, Watercolor Flower Shirt, Plant Ladies Shirt, Gift for Women",
        price: '₹586',
        originalPrice: '₹2,345',
        discount: '75%',
        rating: 4.8,
        reviews: 821,
        badge: 'Star Seller',
        adBy: 'SageWillowArtPrints'
    },
    {
        id: 3,
        image: 'https://i.etsystatic.com/51974077/r/il/000e52/5981904206/il_794xN.5981904206_k8ct.jpg',
        title: "Anime Embroidered Washed Tee - Streetwear Oversized T-shirt for Men, Manga Graphic Gojo Acid Washed, Vintage Baggy Fit",
        price: '₹1,751',
        originalPrice: null,
        discount: null,
        rating: 5.0,
        reviews: 1807,
        badge: 'Star Seller',
        adBy: 'YvePrintCo'
    },
    {
        id: 4,
        image: 'https://i.etsystatic.com/51885023/c/900/714/0/33/il/9df44f/6033077111/il_340x270.6033077111_i7xb.jpg',
        title: "Boho Romper Summer Jumpsuit: Flight Suit, Loungewear for Casual Techwear Style | Harem Jumpsuit, Kimono Wrap Dress, Hippie Lounge Wear",
        price: '₹691',
        originalPrice: '₹1,728',
        discount: '60%',
        rating: 4.5,
        reviews: 35,
        badge: 'FREE delivery',
        adBy: 'BettyPawtrait'
    },
    {
        id: 5,
        image: 'https://i.etsystatic.com/6822943/r/il/6aaf81/4883728721/il_794xN.4883728721_ho5r.jpg',
        title: "Mid-sleeved Maxi Dress with Inverted Pleat A92135",
        price: '₹5,072',
        originalPrice: '₹5,638',
        discount: '10%',
        rating: 5.0,
        reviews: 405,
        badge: 'FREE delivery',
        adBy: 'MSSCrafts'
    },
    {
        id: 6,
        image: 'https://i.etsystatic.com/51999307/r/il/4d6621/6031364543/il_794xN.6031364543_b4fz.jpg',
        title: "Men Black Banned Military Drummer Parade Jacket Goth Punk Adam Ant Style",
        price: '₹775',
        originalPrice: null,
        discount: null,
        rating: null,
        reviews: null,
        badge: 'Digital Download',
        adBy: 'HaruNordDesign'
    },
    {
        id: 7,
        image: 'https://i.etsystatic.com/51946387/r/il/fa9528/6022582339/il_794xN.6022582339_b1k9.jpg',
        title: "Natural linen pants, Summer pants, Womens pants, Latte pants, Pajama pants for woman, Linen jogger, Linen loungewear, Yoga pants linen  ",
        price: '₹505',
        originalPrice: null,
        discount: null,
        rating: 5.0,
        reviews: 121,
        badge: 'Star Seller',
        adBy: 'DGItalyYours'
    },
    {
        id: 8,
        image: 'https://i.etsystatic.com/51805665/r/il/1a28cd/6028912027/il_794xN.6028912027_ljpp.jpg',
        title: "WhiteFox Hoodie - White Fox Dupe, 8 Colours/Colors, Pullover, Bubbly Writing, 3D, Leisure Hoodie",
        price: '₹1800',
        originalPrice: null,
        discount: null,
        rating: 2.0,
        reviews: 6,
        badge: 'Digital Download',
        adBy: 'Sevilatricolor'
    },
  ]



// -------------------Jewellery---------------------------

const JewelleryData = [
  {
    id: 1,
    title: "Rings",
    url: "https://i.etsystatic.com/17107351/r/il/1f8152/2741303449/il_300x300.2741303449_ihum.jpg",
  },
  {
    id: 2,
    title: "Necklaces",
    url: "https://i.etsystatic.com/7770785/r/il/d55a82/4328838368/il_300x300.4328838368_iyyu.jpg",
  },
  {
    id: 3,
    title: "Earrings",
    url: "https://i.etsystatic.com/17246174/r/il/2cf410/2546323062/il_300x300.2546323062_d78f.jpg",
  },
  {
    id: 4,
    title: "Bracelets",
    url: "https://i.etsystatic.com/7565205/r/il/98d05f/536825143/il_300x300.536825143_6vs0.jpg",
  },
  {
    id: 5,
    title: "Watches",
    url: "https://i.etsystatic.com/7704307/r/il/ed36fc/2341970317/il_300x300.2341970317_gqku.jpg",
  },
  {
    id: 6,
    title: "Jewellery Sets",
    url: "https://i.etsystatic.com/10204022/c/2857/2857/97/143/il/e743d8/5594322025/il_300x300.5594322025_rva0.jpg",
  },
  {
    id: 7,
    title: "Cremation & Memorial Jewellery",
    url: "https://i.etsystatic.com/10204022/c/2586/2586/320/142/il/09c121/2731910039/il_300x300.2731910039_d8wd.jpg",
  },
  {
    id: 8,
    title: "Body Jewellery",
    url: "https://i.etsystatic.com/5325754/c/2445/2445/122/124/il/d33cdd/5989453365/il_300x300.5989453365_crdc.jpg",
  },
  {
    id: 9,
    title: "Jewellery Storage",
    url: "https://i.etsystatic.com/5171371/r/il/109ad7/4181201190/il_300x300.4181201190_r59h.jpg",
  },
  {
    id: 10,
    title: "Brooches, Pins & Clips",
    url: "https://i.etsystatic.com/5163302/r/il/486e11/2740699475/il_300x300.2740699475_f0o1.jpg",
  },
  {
    id: 11,
    title: "Smart Jewellery",
    url: "https://i.etsystatic.com/6956363/r/il/84a950/637537763/il_300x300.637537763_nwii.jpg",
  },
  {
    id: 12,
    title: "Cuff Links & Tie Clips",
    url: "https://i.etsystatic.com/5246485/c/1773/1773/618/56/il/18bfe5/1409212315/il_300x300.1409212315_acf7.jpg",
  },
];



const Jewellery_Products = [
  {
    id: 1,
    image: 'https://i.etsystatic.com/9905383/r/il/d59816/3818831627/il_340x270.3818831627_ha6r.jpg',
    title: '1.00 Carat VS F Three Stone Engagement Ring Round Lab Grown Diamond Prong Set 14K White Yellow Rose Gold 2.00 mm',
    price: '₹60,224',
    originalPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 256,
    badge: null,
    adBy: 'DiamondForGood'
  },
  {
    id: 2,
    image: 'https://i.etsystatic.com/10980056/c/800/635/0/165/il/791dc9/6012801714/il_340x270.6012801714_5ia5.jpg',
    title: 'Moldavite & Moldavite Super Nova Crystal Pendant',
    price: '₹201,167',
    originalPrice: '₹223,518',
    discount: '10%',
    rating: 4.7,
    reviews: 3088,
    badge: 'Star Seller',
    adBy: 'DoorwayToPower'
  },
  {
    id: 3,
    image: 'https://i.etsystatic.com/19032496/r/il/b33439/6060725155/il_340x270.6060725155_gx2u.jpg',
    title: 'Natural Faceted Opal Beads | Gemstone Opal',
    price: '₹9,195',
    originalPrice: '₹36,778',
    discount: '75%',
    rating: 4.8,
    reviews: 528,
    badge: null,
    adBy: 'FutureGemsCo'
  },
  {
    id: 4,
    image: 'https://i.etsystatic.com/39416564/r/il/480048/6060857833/il_340x270.6060857833_a9d5.jpg',
    title: '14K Gold Cable Chain, Man Chain, Women\'s Chain',
    price: '₹14,626',
    originalPrice: '₹29,252',
    discount: '50%',
    rating: 4.7,
    reviews: 14,
    badge: 'Star Seller',
    adBy: 'PointGoldTR'
  },
  {
    id: 5,
    image: 'https://i.etsystatic.com/23353677/r/il/e6108a/5913392724/il_340x270.5913392724_96w6.jpg',
    title: 'Natural Stone Stretchy Chip Bracelet',
    price: '₹65',
    originalPrice: '₹86',
    discount: '25%',
    rating: 4.8,
    reviews: 1215,
    badge: 'Star Seller',
    adBy: 'HiYarnmy'
  },
  {
    id: 6,
    image: 'https://i.etsystatic.com/34379934/c/2000/1589/0/264/il/628644/4796937795/il_340x270.4796937795_qnr6.jpg',
    title: 'Custom Name Necklace, 18K Gold Plated Name Necklace',
    price: '₹1,093',
    originalPrice: '₹2,186',
    discount: '50%',
    rating: 4.8,
    reviews: 25181,
    badge: 'Star Seller',
    adBy: 'AnyaShopStudio'
  },
  {
    id: 7,
    image: 'https://i.etsystatic.com/28887394/c/1000/940/0/0/il/f37a02/6007744736/il_340x270.6007744736_e5fo.jpg',
    title: 'VVS1 Moissanite 925 Silver Tennis Chain Diamond Necklace',
    price: '₹16,320',
    originalPrice: '₹27,200',
    discount: '40%',
    rating: 4.8,
    reviews: 343,
    badge: 'Star Seller',
    adBy: 'ZoomJewels'
  },
  {
    id: 8,
    image: 'https://i.etsystatic.com/14255084/r/il/c3237f/5986160520/il_340x270.5986160520_makk.jpg',
    title: 'Celestial Pandora Sun & Moon Ring Set | Pandora Ring',
    price: '₹856',
    originalPrice: '₹1,714',
    discount: '50%',
    rating: 4.8,
    reviews: 400,
    badge: 'Star Seller',
    adBy: 'IraShineDesigns'
  }
];


// ----------------------------------Shoes--------------------------------

const ShoesData = [
  {
    id: 1,
    title: "Women's Shoes",
    url: "https://i.etsystatic.com/7340438/r/il/273bee/887057436/il_300x300.887057436_o1rg.jpg",
  },
  {
    id: 2,
    title: "Men's Shoes",
    url: "https://i.etsystatic.com/13946940/r/il/fecf11/1138726127/il_300x300.1138726127_7ioz.jpg",
  },
  {
    id: 3,
    title: "Girls' Shoes",
    url: "https://i.etsystatic.com/5196590/c/872/872/128/525/il/9f8b43/674254809/il_300x300.674254809_lfxu.jpg",
  },
  {
    id: 4,
    title: "Boys' Shoes",
    url: "https://i.etsystatic.com/13803770/r/il/7fa5c7/1339583561/il_300x300.1339583561_ffxw.jpg",
  },
  {
    id: 5,
    title: "Insoles & Accessories",
    url: "https://i.etsystatic.com/6100505/c/719/719/117/52/il/3ca595/1373400053/il_300x300.1373400053_da5k.jpg",
  },

];



const Shoes_Products = [
  {
    id: 1,
    image: 'https://i.etsystatic.com/49205555/r/il/8b4b4b/5932046566/il_340x270.5932046566_ltf6.jpg',
    title: 'Summer Slippers | Summer Footwear | Decorated ...',
    price: '₹2,330',
    originalPrice: null,
    discount: null,
    rating: 5.0,
    reviews: 14,
    badge: 'FREE delivery',
    adBy: 'FlipFlopnRoll'
  },
  {
    id: 2,
    image: 'https://i.etsystatic.com/23968709/r/il/1796f7/6055754755/il_340x270.6055754755_akd3.jpg',
    title: 'Metal Shelf For Storing Shoes, Loft Shoe Rack, Me...',
    price: '₹4,332',
    originalPrice: '₹5,415',
    discount: '20% off',
    rating: 5.0,
    reviews: 825,
    badge: null,
    adBy: 'MDAdesignStore'
  },
  {
    id: 3,
    image: 'https://i.etsystatic.com/33972258/r/il/4510ed/5821752684/il_340x270.5821752684_oj5a.jpg',
    title: 'Custom Embroidered Wedding Converse, White F...',
    price: '₹7,362',
    originalPrice: '₹12,270',
    discount: '40% off',
    rating: 5.0,
    reviews: 376,
    badge: null,
    adBy: 'AdroitlyBeeCorner'
  },
  {
    id: 4,
    image: 'https://i.etsystatic.com/18827814/r/il/dd0151/4724078220/il_340x270.4724078220_nfhr.jpg',
    title: 'Personalized for Brides, Bridal Sneakers, Special a...',
    price: '₹8,048',
    originalPrice: '₹10,060',
    discount: '20% off',
    rating: 4.5,
    reviews: 4233,
    badge: 'FREE delivery',
    adBy: 'StiloShoes'
  },
  {
    id: 5,
    image: 'https://i.etsystatic.com/33512181/r/il/d2a9e2/6020691537/il_340x270.6020691537_psov.jpg',
    title: 'Air force 1 Custom - Custom Air Force 1 Drip Red ...',
    price: '₹10,315',
    originalPrice: '₹17,194',
    discount: '40% off',
    rating: 4.5,
    reviews: 283,
    badge: null,
    adBy: 'MooSuka'
  },
  {
    id: 6,
    image: 'https://i.etsystatic.com/19176677/r/il/72dcb7/6060026933/il_340x270.6060026933_7e8j.jpg',
    title: 'Jordan 4 Black Cat',
    price: '₹10,701',
    originalPrice: '₹14,288',
    discount: '25% off',
    rating: 5.0,
    reviews: 155,
    badge: null,
    adBy: 'ZeusJuiceOnline'
  },
  {
    id: 7,
    image: 'https://i.etsystatic.com/52184820/r/il/7c744c/6048193749/il_340x270.6048193749_c6mc.jpg',
    title: 'Personalized Name Metal Shoelace Charm Custo...',
    price: '₹1,461',
    originalPrice: null,
    discount: null,
    rating: 5.0,
    reviews: 46,
    badge: 'FREE delivery',
    adBy: 'Larannacustomdepot'
  },
  {
    id: 8,
    image: 'https://i.etsystatic.com/35841136/r/il/dc9d75/5970761663/il_340x270.5970761663_62uw.jpg',
    title: 'write personalised name on shoes',
    price: '₹1,095',
    originalPrice: null,
    discount: null,
    rating: 5.0,
    reviews: 26,
    badge: 'FREE delivery',
    adBy: 'InfinitySavage'
  }
];



// ------------------------------Baby-----------------------------

const BabyData = [
  {
    id: 1,
    title: "Nursery Decor",
    url: "https://i.etsystatic.com/7083424/c/1938/1938/74/480/il/48cff9/4028195680/il_300x300.4028195680_lcre.jpg",
  },
  {
    id: 2,
    title: "Baby Toys",
    url: "https://i.etsystatic.com/5772639/c/1315/1315/44/1/il/90fe01/2677190884/il_300x300.2677190884_fngj.jpg",
  },
  {
    id: 3,
    title: "Baby Clothes",
    url: "https://i.etsystatic.com/5951669/r/il/1d0a21/6055227193/il_300x300.6055227193_ahfu.jpg",
  },
  {
    id: 4,
    title: "Baby Care",
    url: "https://i.etsystatic.com/5831985/c/2000/2000/342/0/il/cd706f/3452459894/il_300x300.3452459894_2xxi.jpg",
  },
  {
    id: 5,
    title: "Nursery Furniture",
    url: "https://i.etsystatic.com/6619806/r/il/fe7af3/5000644146/il_300x300.5000644146_ady6.jpg",
  },
  {
    id: 6,
    title: "Cot Bedding",
    url: "https://i.etsystatic.com/5158454/r/il/73690b/831922905/il_300x300.831922905_2sms.jpg",
  },

];





const Baby_Products = [
  {
    id: 1,
    image: 'https://i.etsystatic.com/34938995/r/il/9f45d8/5947207054/il_794xN.5947207054_6sbe.jpg',
    title: 'Mouse Reading Book - 3d Mouse Sticker - Mouse Wall Decal - Book Lover Gift- Kids Room Sticker - Cute Mousehole Sticker - Mouse Wall Sticker',
    price: '₹601',
    originalPrice: null,
    discount: null,
    rating: 4.9,
    reviews: 6722,
    badge: 'Bestseller',
    adBy: 'Miceartpiece'
  },
  {
    id: 2,
    image: 'https://i.etsystatic.com/48532660/c/2000/1588/0/76/il/0c8e47/5825919885/il_340x270.5825919885_pf5m.jpg',
    title: 'Custom Baby Name Blanket, Personalized Embroidered Knit Blanket, Baby Shower Gift, Soft and Cozy Baby Blanket, Newborn Gift, Infant Blanket',
    price: '₹1,673',
    originalPrice: '₹3,345',
    discount: '50% off',
    rating: 4.8,
    reviews: 126,
    badge: null,
    adBy: 'CocoBloomm'
  },
  {
    id: 3,
    image: 'https://i.etsystatic.com/50978280/c/1968/1564/201/311/il/981d77/6036818303/il_340x270.6036818303_cq8d.jpg',
    title: 'Hand embroidered Name Baby Sweater Personalized Knit Sweater Newborn Clothes, Baby Shower Gift, Infant Outfit',
    price: '₹2,183',
    originalPrice: '₹4,367',
    discount: '50% off',
    rating: 4.7,
    reviews: 3,
    badge: null,
    adBy: 'VisimArtCrafts'
  },
  {
    id: 4,
    image: 'https://i.etsystatic.com/39529403/r/il/38ce5d/5984509434/il_340x270.5984509434_h8pp.jpg',
    title: 'Super Cute & Cuddly Teddy Sherpa Plush Pacifier Clip, Baby Shower Gift, Newborn Gift, Personalized Pacifier Holder',
    price: '₹2,149',
    originalPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 34,
    badge: 'Star Seller',
    adBy: 'LIMISBABIES'
  },
  {
    id: 5,
    image: 'https://i.etsystatic.com/36819687/r/il/cbc86a/5133125756/il_340x270.5133125756_qnry.jpg',
    title: 'Bunny Soft Rattle Crochet PDF Pattern, Easter Baby Rattle, Amigurumi Crochet Pattern, Baby Shower Gift',
    price: '₹167',
    originalPrice: '₹355',
    discount: '53% off',
    rating: 4.9,
    reviews: 613,
    badge: null,
    adBy: 'Handmadetoya40'
  },
  {
    id: 6,
    image: 'https://i.etsystatic.com/50483734/r/il/31bd72/6004647590/il_340x270.6004647590_mwxc.jpg',
    title: 'Alligator Crochet Animal Pattern Amigurumi Alligator, Crochet PDF Pattern, Baby Toy, Baby Shower Gift, Newborn Gift',
    price: '₹44',
    originalPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 144,
    badge: null,
    adBy: 'ModaMing'
  },
  {
    id: 7,
    image: 'https://i.etsystatic.com/33431746/c/1999/1588/0/36/il/e2e0b8/5976040836/il_340x270.5976040836_sh8d.jpg',
    title: 'Toy Car Storage For 60 Cars 1:64 Car Shelf | Wall Display Storage Rack for Hot Wheels and Matchbox Cars',
    price: '₹142',
    originalPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 187,
    badge: null,
    adBy: 'NoktaAjna'
  },
  {
    id: 8,
    image: 'https://i.etsystatic.com/50293219/r/il/51d973/6032742137/il_340x270.6032742137_iogy.jpg',
    title: 'Personalized Knit Baby Blanket | Embroidered Baby Name Blanket, Soft and Cozy Baby Blanket, Newborn Gift, Baby Shower Gift',
    price: '₹2,799',
    originalPrice: '₹5,599',
    discount: '50% off',
    rating: 5.0,
    reviews: 1,
    badge: null,
    adBy: 'TheWelcomingShop'
  }
];







// ------------------------------Gifts-------------------------------------

const GiftsData = [
  {
    id: 1,
    url: 'https://i.etsystatic.com/5258371/r/il/24b6e7/4891720258/il_300x300.4891720258_ia0t.jpg',
    title: 'Housewarming Gifts',
  },
  {
    id: 2,
    url: 'https://i.etsystatic.com/5317447/r/il/ceae93/1238498405/il_300x300.1238498405_rpgx.jpg',
    title: 'Father\'s Day Gifts',
  },
  {
    id: 3,
    url: 'https://i.etsystatic.com/15535258/r/il/3d47bb/2612391697/il_300x300.2612391697_12sg.jpg',
    title: 'Gifts Under $30',
  },
  {
    id: 4,
    url: 'https://i.etsystatic.com/5316724/r/il/9bb744/1980841780/il_300x300.1980841780_3ydl.jpg',
    title: 'Anniversary Gifts',
  },
  {
    id: 5,
    url: 'https://i.etsystatic.com/5519021/r/il/bbbfab/6004328504/il_300x300.6004328504_l9uk.jpg',
    title: 'Mother\'s Day Gifts',
  },
  {
    id: 6,
    url: 'https://i.etsystatic.com/5158405/r/il/08fc6b/5597275017/il_300x300.5597275017_t0gj.jpg',
    title: 'Gifts for Her',
  },
  {
    id: 7,
    url: 'https://i.etsystatic.com/10585104/r/il/908605/3829656522/il_300x300.3829656522_c9un.jpg',
    title: 'Personalised Gifts',
  },
  {
    id: 8,
    url: 'https://i.etsystatic.com/6906788/c/1111/1111/200/259/il/f206c7/1774237632/il_300x300.1774237632_kh2s.jpg',
    title: 'Gifts for Him',
  },
  {
    id: 9,
    url: 'https://i.etsystatic.com/17625258/r/il/88b366/4719359856/il_300x300.4719359856_rlh2.jpg',
    title: 'Gifts for Couples',
  },
  {
    id: 10,
    url: 'https://i.etsystatic.com/5115995/r/il/43abde/653677099/il_300x300.653677099_g14d.jpg',
    title: 'Gifts for Friends',
  },
  {
    id: 11,
    url: 'https://i.etsystatic.com/20274676/c/2252/2252/387/0/il/4d6440/4319935436/il_300x300.4319935436_ik3f.jpg',
    title: 'Gifts for Pets',
  },
  {
    id: 12,
    url: 'https://i.etsystatic.com/39185519/c/3000/3000/0/0/il/8382a7/4895239320/il_300x300.4895239320_dycm.jpg',
    title: 'Gifts for Kids',
  },
  {
    id: 13,
    url: 'https://i.etsystatic.com/5811672/r/il/87932e/3008072665/il_300x300.3008072665_t5pb.jpg',
    title: 'Valentine\'s Day Gifts',
  },
  {
    id: 14,
    url: 'https://i.etsystatic.com/5195896/r/il/32bdb1/1909656461/il_300x300.1909656461_sr41.jpg',
    title: 'Birthday Gifts',
  },
  {
    id: 15,
    url: 'https://i.etsystatic.com/15989265/c/1709/1709/168/145/il/5923f3/5065629948/il_300x300.5065629948_swpg.jpg',
    title: 'Last Minute Gifts',
  },
  {
    id: 16,
    url: 'https://i.etsystatic.com/5249171/r/il/415460/2295532460/il_300x300.2295532460_sye3.jpg',
    title: 'Gifts for Teachers',
  },
  {
    id: 17,
    url: 'https://i.etsystatic.com/5930147/r/il/3de643/3369254398/il_300x300.3369254398_i8s1.jpg',
    title: 'Christmas Gifts',
  },
];




const Gift_Products = [
  {
    id: 1,
    image: 'https://i.etsystatic.com/46527595/c/1999/1588/0/270/il/548ec1/6011415428/il_340x270.6011415428_slhq.jpg',
    title: 'Book Nook Library Kit Magic Craft Kit Wizard Bookstore Booknook Bookshelf Insert Decor Alley DIY Book Nook Kit Gift',
    price: '₹4,271',
    originalPrice: '₹5,695',
    discount: '25% off',
    rating: 4.8,
    reviews: 205,
    badge: null,
    adBy: 'HandcraftedByOtavia'
  },
  {
    id: 2,
    image: 'https://i.etsystatic.com/43509066/r/il/6e3271/6039049329/il_340x270.6039049329_kg1k.jpg',
    title: 'Triangle Book Stand Docking Station | Kindle Holder | Tablet Stand | Bedside Table Accessory | Book Lover Gift',
    price: '₹1,886',
    originalPrice: null,
    discount: null,
    rating: 4.7,
    reviews: 19,
    badge: null,
    adBy: 'EliteLeather3D'
  },
  {
    id: 3,
    image: 'https://i.etsystatic.com/21588687/r/il/e4bac9/2695157707/il_340x270.2695157707_rtyj.jpg',
    title: 'Surgical Steel Ear Crawler Earrings, Opal Climber Earrings, Minimalist Earrings, Unique Gift For Her',
    price: '₹1,679',
    originalPrice: '₹2,398',
    discount: '30% off',
    rating: 4.8,
    reviews: 13162,
    badge: 'Star Seller',
    adBy: 'TitaniumFashion'
  },
  {
    id: 4,
    image: 'https://i.etsystatic.com/36446924/c/2385/1895/234/142/il/f1fd00/5538957196/il_340x270.5538957196_em6d.jpg',
    title: 'Tiny Climber Stud Earrings CZ Dainty Earrings Gold Climber Earrings, Minimalist Earrings, Gift For Her',
    price: '₹1,577',
    originalPrice: null,
    discount: null,
    rating: 4.0,
    reviews: 28,
    badge: null,
    adBy: 'GlitteryGlama'
  },
  {
    id: 5,
    image: 'https://i.etsystatic.com/46527595/r/il/55b37c/6014974854/il_340x270.6014974854_64eu.jpg',
    title: 'Book Nook Japanese Town Craft Kit Japan Kawaii Bookstore Booknook Bookshelf Insert Decor Alley DIY Book Nook Kit Gift',
    price: '₹4,271',
    originalPrice: '₹5,695',
    discount: '25% off',
    rating: 4.8,
    reviews: 205,
    badge: null,
    adBy: 'HandcraftedByOtavia'
  },
  {
    id: 6,
    image: 'https://i.etsystatic.com/52625222/r/il/2c5b3f/6014928050/il_340x270.6014928050_9hos.jpg',
    title: 'Baby set',
    price: '₹2,331',
    originalPrice: null,
    discount: null,
    rating: 4.9,
    reviews: 3,
    badge: null,
    adBy: 'ArtisanacaveCrafts'
  },
  {
    id: 7,
    image: 'https://i.etsystatic.com/47354190/r/il/af6174/6058135741/il_340x270.6058135741_pcua.jpg',
    title: 'Baby shower personalized gift basket, baby Gift Basket, Newborn gift, Baby Hamper, Personalized Baby Basket, Baby Shower Gift',
    price: '₹1,631',
    originalPrice: null,
    discount: null,
    rating: 5.0,
    reviews: 10,
    badge: null,
    adBy: 'lelCharme'
  },
  {
    id: 8,
    image: 'https://i.etsystatic.com/51926404/r/il/75534b/6046161685/il_340x270.6046161685_kzar.jpg',
    title: '100 Tips for a Successful Couples Life',
    price: '₹102',
    originalPrice: null,
    discount: null,
    rating: 4.7,
    reviews: 8,
    badge: null,
    adBy: 'MooccoProducts'
  }
];





// -----------------------------ToysGames----------------------------------

const ToysGamesData = [
  {
    id: 1,
    url: 'https://i.etsystatic.com/5542284/c/1840/1840/301/567/il/05f882/1708355727/il_300x300.1708355727_tp5r.jpg',
    title: 'Games & Puzzles',
  },
  {
    id: 2,
    url: 'https://i.etsystatic.com/5522422/r/il/0e448b/5108404330/il_300x300.5108404330_fgdu.jpg',
    title: 'Sports & Outdoor Recreation',
  },
  {
    id: 3,
    url: 'https://i.etsystatic.com/6592432/r/il/d8542d/3554355687/il_300x300.3554355687_619t.jpg',
    title: 'Toys',
  },
  
];




const ToysGames_Products = [
  {
    id: 1,
    image: 'https://i.etsystatic.com/27054861/r/il/70acf7/5918922671/il_340x270.5918922671_1b0n.jpg',
    title: 'Moon Headphone Stand - Elevate Your Desk Setu...',
    price: '₹3,905',
    originalPrice: '₹4,594',
    discount: '15% off',
    rating: 5.0,
    reviews: 697,
    badge: 'Star Seller',
    adBy: 'HelloOregano'
  },
  {
    id: 2,
    image: 'https://i.etsystatic.com/18930629/c/1999/1588/0/0/il/89be3a/5287115209/il_340x270.5287115209_r5g6.jpg',
    title: 'Montessori Bed Canopy, Kids Bed Canopy, Monte...',
    price: '₹4,729',
    originalPrice: null,
    discount: null,
    rating: 5.0,
    reviews: 846,
    badge: 'Bestseller',
    adBy: 'PastelyaKidsTepee'
  },
  {
    id: 3,
    image: 'https://i.etsystatic.com/34549479/r/il/3ab8d7/6065995457/il_340x270.6065995457_s6rb.jpg',
    title: 'Gorgeous Starry Liquid Core DnD Dice Set for Ro...',
    price: '₹1,032',
    originalPrice: '₹2,064',
    discount: '50% off',
    rating: 4.9,
    reviews: 6178,
    badge: null,
    adBy: 'GameDiceArtShop'
  },
  {
    id: 4,
    image: 'https://i.etsystatic.com/21167009/r/il/c95b56/5975088858/il_340x270.5975088858_a9pr.jpg',
    title: 'DND 7-in-1 Metal Fingertip Gyro D&D Dice for Dun...',
    price: '₹2,155',
    originalPrice: '₹2,694',
    discount: '20% off',
    rating: 5.0,
    reviews: 2202,
    badge: 'Star Seller',
    adBy: 'RedcatBoutiqueCo'
  },
  {
    id: 5,
    image: 'https://i.etsystatic.com/51751729/r/il/a54ae5/5970430910/il_340x270.5970430910_f2rn.jpg',
    title: '11000 Preschool Kindergarten Printable Activity ...',
    price: '₹202',
    originalPrice: '₹673',
    discount: '70% off',
    rating: 4.8,
    reviews: 64,
    badge: 'Digital Download',
    adBy: 'RosebudPrintablesCo'
  },
  {
    id: 6,
    image: 'https://i.etsystatic.com/50680521/r/il/81b875/6012561534/il_340x270.6012561534_aj5p.jpg',
    title: 'DIY Cat & House Paper Toy - Printable PDF Craft K...',
    price: '₹365',
    originalPrice: '₹609',
    discount: '40% off',
    rating: 4.9,
    reviews: 24,
    badge: 'Digital Download',
    adBy: 'LeMaFun'
  },
  {
    id: 7,
    image: 'https://i.etsystatic.com/46966675/r/il/aff90a/6012669298/il_340x270.6012669298_7afb.jpg',
    title: 'Ghost of Tsushima Directors Cut | PC game | Digit...',
    price: '₹554',
    originalPrice: '₹791',
    discount: '30% off',
    rating: 4.8,
    reviews: 201,
    badge: 'Digital Download',
    adBy: 'AbstractArtByDi'
  },
  {
    id: 8,
    image: 'https://i.etsystatic.com/52168287/c/282/223/0/68/il/77587a/6013237835/il_340x270.6013237835_ju4j.jpg',
    title: 'Need for Speed Most Wanted PC game-Digital Do...',
    price: '₹405',
    originalPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 4,
    badge: 'Digital Download',
    adBy: 'PCGameforLess'
  }
];





const BooksFilmsData = [
  {
    id: 1,
    url: 'https://i.etsystatic.com/5174925/r/il/917dd7/4847128224/il_300x300.4847128224_7gvc.jpg',
    title: 'Books',
  },
  {
    id: 2,
    url: 'https://i.etsystatic.com/6292388/r/il/ace784/2054257229/il_300x300.2054257229_cnag.jpg',
    title: 'Music',
  },
  {
    id: 3,
    url: 'https://i.etsystatic.com/7383933/r/il/3ac799/5934379386/il_300x300.5934379386_t8z2.jpg',
    title: 'Movies',
  },
  {
    id: 4,
    url: 'https://i.etsystatic.com/5275355/r/il/3604cd/5967236234/il_300x300.5967236234_p0qk.jpg',
    title: 'Video Cases & Tins',
  },
]



const BooksFilms_Products = [
  {
    id: 1,
    image: 'https://i.etsystatic.com/36255609/c/3000/2384/0/358/il/1634ef/5652786117/il_340x270.5652786117_s9xt.jpg',
    title: 'Real Birth Flower Book Page Holder, Floral Resin Thumb Book Page Holder, Personalized Resin Bookmark, Unique Gift For Book Lovers',
    price: '₹1,094',
    originalPrice: '₹1,684',
    discount: '35% off',
    rating: 4.9,
    reviews: 441,
    badge: null,
    adBy: 'MuaTreasure'
  },
  {
    id: 2,
    image: 'https://i.etsystatic.com/45558264/r/il/dcccd4/5966353097/il_340x270.5966353097_f6ao.jpg',
    title: 'Name Acrylic Bookmark with Cotton Tassel - Custom Personalized Name Bookmark - Gift for Book Lovers',
    price: '₹609',
    originalPrice: '₹761',
    discount: '20% off',
    rating: 4.8,
    reviews: 345,
    badge: null,
    adBy: 'CooperClubDesigns'
  },
  {
    id: 3,
    image: 'https://i.etsystatic.com/47814361/r/il/bd96a1/5450498352/il_340x270.5450498352_koig.jpg',
    title: 'Vintage Handmade Leather Journal, Antique Handmade Deckle Edge Paper, Personalized Leather Notebook, Gift for Writers',
    price: '₹2,669',
    originalPrice: '₹3,559',
    discount: '25% off',
    rating: 4.8,
    reviews: 330,
    badge: 'Star Seller',
    adBy: 'LeatherLaby'
  },
  {
    id: 4,
    image: 'https://i.etsystatic.com/22572550/r/il/22b035/5990510574/il_340x270.5990510574_l0zx.jpg',
    title: 'How To Sell Products And Rank 1st On Etsy Search With ChatGPT - May 2024 Version - Etsy SEO Tips - Digital Download',
    price: '₹194',
    originalPrice: '₹646',
    discount: '70% off',
    rating: 4.8,
    reviews: 21967,
    badge: 'Star Seller',
    adBy: 'Upstrider'
  },
  {
    id: 5,
    image: 'https://i.etsystatic.com/22572550/r/il/b088c0/6038275397/il_340x270.6038275397_46a6.jpg',
    title: '1000+ Easy Digital Products Ideas To Create And Sell Today With ChatGPT - May 2024 Version - Digital Download',
    price: '₹77',
    originalPrice: '₹257',
    discount: '70% off',
    rating: 4.8,
    reviews: 21967,
    badge: 'Star Seller',
    adBy: 'Upstrider'
  },
  {
    id: 6,
    image: 'https://i.etsystatic.com/51145258/r/il/2edc51/5996220598/il_340x270.5996220598_ncvl.jpg',
    title: 'PLR 601+ Captivating Kid Stories, eBooks and Animated Videos, Kids Reading, Bedtime Stories, Digital Download',
    price: '₹405',
    originalPrice: '₹1,620',
    discount: '75% off',
    rating: 4.9,
    reviews: 6,
    badge: null,
    adBy: 'ArtsCraftLearning'
  },
  {
    id: 7,
    image: 'https://i.etsystatic.com/52314051/c/940/746/0/0/il/38634c/6007640584/il_340x270.6007640584_atvf.jpg',
    title: 'How To Escape The Matrix - Insights from Andrew Tate - Digital Download',
    price: '₹329',
    originalPrice: null,
    discount: null,
    rating: 4.7,
    reviews: 18,
    badge: null,
    adBy: 'RichAdvice'
  },
  {
    id: 8,
    image: 'https://i.etsystatic.com/52563159/r/il/52894c/6056517097/il_340x270.6056517097_gn9e.jpg',
    title: 'THE VIBEY GUIDE To London - Digital Download',
    price: '₹1,291',
    originalPrice: null,
    discount: null,
    rating: 4.7,
    reviews: 10,
    badge: null,
    adBy: 'THEVIBEYGUIDE'
  }
];



export { imageData, cardData, Art_CollectiblesData, products, ClothingData, Cloth_Product, JewelleryData, Jewellery_Products, ShoesData, Shoes_Products, BabyData, Baby_Products, GiftsData, Gift_Products, ToysGamesData, ToysGames_Products, BooksFilmsData, BooksFilms_Products };