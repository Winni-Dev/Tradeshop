// import { Product } from '../types';
// import bracelet from '../IMAGES/bracelet_blanc.jpeg'
// import pomade from '../IMAGES/pommade.png'

// export const products: Product[] = [
//   {
//     id: 1,
//     name: 'Bracelet Énergétique',
//     description: 'Bracelet en pierres naturelles pour équilibrer les énergies et réduire le stress.',
//     price: 13000,
//     benefits: [
//       'Réduction du stress',
//       'Équilibre énergétique',
//       'Amélioration du sommeil',
//       'Protection contre les ondes négatives'
//     ],
//     image: bracelet
//   },
//   {
//     id: 2,
//     name: 'Pommade Naturelle',
//     description: 'Pommade 100% naturelle pour les douleurs musculaires et articulaires.',
//     price: 3500,
//     benefits: [
//       'Soulagement des douleurs',
//       'Anti-inflammatoire naturel',
//       'Hydratation profonde',
//       'Sans produits chimiques'
//     ],
//     image: pomade
//   }
// ];

// export const testimonials = [
//   {
//     id: 1,
//     name: 'Marie K.',
//     comment: 'Le bracelet m\'a vraiment aidé avec mon stress quotidien. Je le recommande !',
//     rating: 5
//   },
//   {
//     id: 2,
//     name: 'Jean P.',
//     comment: 'La pommade est magique pour mes douleurs articulaires. Naturelle et efficace.',
//     rating: 5
//   },
//   {
//     id: 3,
//     name: 'Sophie L.',
//     comment: 'Livraison rapide et produits de qualité. Service client très réactif sur WhatsApp.',
//     rating: 4
//   }
// ];

// export const advantages = [
//   {
//     id: 1,
//     title: 'Livraison Rapide',
//     description: 'Livraison sous 24h à Abidjan, 2-3 jours pour l\'intérieur du pays.',
//     icon: '🚚'
//   },
//   {
//     id: 2,
//     title: 'Paiement Sécurisé',
//     description: 'Paiement à la livraison ou acompte sécurisé selon votre localisation.',
//     icon: '🔒'
//   },
//   {
//     id: 3,
//     title: 'Produits Naturels',
//     description: 'Tous nos produits sont 100% naturels et fabriqués avec soin.',
//     icon: '🌿'
//   },
//   {
//     id: 4,
//     title: 'Support Client',
//     description: 'Disponible sur WhatsApp pour répondre à toutes vos questions.',
//     icon: '💬'
//   }
// ];


// data/products.ts
import { Product } from '../types';
import braceletAcierArgent from '../IMAGES/BRACpro.jpg';
import braceletAcier from '../IMAGES/ACCIER.jpg';
import braceletCuivre from '../IMAGES/BRACCuipro.jpg';
import braceletPersonnalise from '../IMAGES/BRAPERSpro.jpg';
import braceletPersonnaliseArgent from '../IMAGES/BRPacc.jpg';
import braceletPersonnaliseO from '../IMAGES/BRACEadldor.jpg';
import braceletPersonnaliseArgentA from '../IMAGES/BRACEadlargent.jpg';
import gourdeCuivre from '../IMAGES/GOURDpro.jpg';
import braceletCuivreN2 from '../IMAGES/BRACEcuiN2.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: 'Bracelet Acier Inoxydable',
    price: 6000,
    originalPrice: 8000,
    description: 'Bracelet en acier inoxydable qui ne noircit pas et ne déteint pas. Élégant et durable.',
    longDescription: 'Notre bracelet en acier inoxydable est conçu pour durer. Il ne noircit pas avec le temps et ne déteint pas sur la peau. Disponible en deux couleurs élégantes : Or et Argent. Parfait pour un usage quotidien, il convient aussi bien aux hommes qu\'aux femmes.',
    features: [
      'Ne noircit pas ❌',
      'Ne déteint pas ❌',
      'Couleurs : Or et Argent',
      'Pour Homme et Femme',
      'Résistant à l\'eau',
      'Hypoallergénique'
    ],
    image: braceletAcier,
    category: 'bracelet',
    promo: '2 bracelets à 10 000 FCFA',
    colors: ['Or', 'Argent'],
    variants: [
      {
        color: 'Or',
        image: braceletAcier,
        descriptionSuffix: 'Version dorée',
      },
      {
        color: 'Argent',
        image: braceletAcierArgent,
        descriptionSuffix: 'Version argentée',
      }
    ],
    target: 'Homme & Femme'
  },
  {
    id: 2,
    name: 'Bracelet Cuivre Naturel',
    price: 15000,
    originalPrice: 20000,
    description: 'Bracelet en cuivre naturel qui aide à soulager les douleurs articulaires.',
    longDescription: 'Le bracelet en cuivre naturel est reconnu pour ses bienfaits sur la santé. Il aide à soulager les douleurs articulaires, favorise la circulation sanguine et réduit le stress et la fatigue. Résistant et durable, il ne déteint pas et ne noircit pas.',
    features: [
      'Ne déteint pas ❌',
      'Ne noircit pas ❌',
      'Aide à soulager les douleurs articulaires',
      'Favorise la circulation sanguine',
      'Réduit le stress et la fatigue',
      'Résistant et durable dans le temps',
      'Couleur : Cuivre naturel',
      'Pour Homme et Femme'
    ],
    image: braceletCuivre,
    category: 'bracelet',
    colors: ['Cuivre naturel N1', 'Cuivre naturel N2'],
     variants: [
      {
        color: 'Cuivre naturel N1',
        image: braceletCuivre,
        descriptionSuffix: 'Version cuivre naturel N1',
      },
      {
        color: 'Cuivre naturel N2',
        image: braceletCuivreN2,
        descriptionSuffix: 'Version cuivre naturel N2',
      }
    ],
    target: 'Homme & Femme'
  },
  {
    id: 3,
    name: 'Bracelet Personnalisé Enfant',
    price: 8000,
    originalPrice: 10000,
    description: 'Bracelet personnalisable à votre image. Ne noircit pas et ne déteint pas.',
    longDescription: 'Offrez-vous un bracelet unique à votre image. Personnalisez-le selon vos envies. Comme notre bracelet acier, il ne noircit pas et ne déteint pas. Disponible en Or et Argent.',
    features: [
      'Ne noircit pas ❌',
      'Ne déteint pas ❌',
      'Personnalisation possible',
      'Couleurs : Or et Argent',
      'Pour Garçon et Fille',
    ],
    image: braceletPersonnalise,
    category: 'bracelet',
    promo: '2 bracelets à 15 000 FCFA',
    colors: ['Or', 'Argent'],
    variants: [
      {
        color: 'Or',
        image: braceletPersonnalise,
        descriptionSuffix: 'Version dorée personnalisée',
      },
      {
        color: 'Argent',
        image: braceletPersonnaliseArgent,
        descriptionSuffix: 'Version argentée personnalisée',
      }
    ],
    target: 'Homme & Femme'
  },
    {
  id: 4,
    name: 'Bracelet Personnalisé Adulte',
    price: 8000,
    originalPrice: 10000,
    description: 'Bracelet personnalisable à votre image. Ne noircit pas et ne déteint pas.',
    longDescription: 'Offrez-vous un bracelet unique à votre image. Personnalisez-le selon vos envies. Comme notre bracelet acier, il ne noircit pas et ne déteint pas. Disponible en Or et Argent.',
    features: [
      'Ne noircit pas ❌',
      'Ne déteint pas ❌',
      'Personnalisation possible',
      'Couleurs : Or et Argent',
      'Pour Homme et Femme',
    ],
    image: braceletPersonnalise,
    category: 'bracelet',
    promo: '2 bracelets à 15 000 FCFA',
    colors: ['Or', 'Argent'],
    variants: [
      {
        color: 'Or',
        image: braceletPersonnaliseO,
        descriptionSuffix: 'Version dorée personnalisée',
      },
      {
        color: 'Argent',
        image: braceletPersonnaliseArgentA,
        descriptionSuffix: 'Version argentée personnalisée',
      }
    ],
    target: 'Homme & Femme'
  },
  {
    id: 5,
    name: 'Gourde Cuivre Naturel',
    price: 25000,
    originalPrice: 35000,
    description: 'Gourde en cuivre naturel qui purifie l\'eau et offre de nombreux bienfaits pour la santé.',
    longDescription: 'La gourde en cuivre naturel est un allié santé au quotidien. Elle purifie l\'eau naturellement grâce à ses propriétés antibactériennes. Elle favorise une bonne digestion, renforce le système immunitaire et conserve l\'eau fraîche plus longtemps. Écologique et durable, elle ne déteint pas et ne noircit pas.',
    features: [
      'Aide à purifier l\'eau naturellement',
      'Propriétés antibactériennes',
      'Favorise une bonne digestion',
      'Renforce le système immunitaire',
      'Conserve l\'eau fraîche plus longtemps',
      'Durable et écologique ♻️',
      'Ne déteint pas ❌',
      'Ne noircit pas ❌',
      'Couleur : Cuivre naturel'
    ],
    image: gourdeCuivre,
    category: 'gourde',
    colors: ['Cuivre naturel'],
    target: 'Unisexe'
  }
];

// Dans data/products.ts - Mise à jour des avantages

export const advantages = [
  {
    id: 1,
    title: 'Livraison rapide',
    description: 'Livraison sous 24h à Abidjan et 2-3 jours dans toute la Côte d\'Ivoire'
  },
  {
    id: 2,
    title: 'Paiement sécurisé',
    description: 'Paiement à la livraison à Abidjan ou par Mobile Money'
  },
  {
    id: 3,
    title: 'Produits de qualité',
    description: 'Bracelets qui ne noircissent pas et ne déteignent pas'
  },
  {
    id: 4,
    title: 'Support 7j/7',
    description: 'Une équipe disponible pour répondre à vos questions sur WhatsApp'
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};