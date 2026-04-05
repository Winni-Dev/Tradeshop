// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MessageCircle, Mail } from 'lucide-react';
// import logo from '../IMAGES/logoN.png';

// const Footer: React.FC = () => {
//   return (
//     <footer className="text-white bg-gray-900">
//       <div className="container px-4 py-12 mx-auto">
//         <div className="grid gap-8 md:grid-cols-4">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center mb-4 space-x-2">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full">
//                 {/* <span className="text-xl font-bold text-white">B</span> */}
//                 <img src={logo} alt="Logo" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-bold">Noéva<span className="text-primary-400">care</span></h2>
//                 <p className="text-sm text-gray-400">Bracelet & Pommade</p>
//               </div>
//             </div>
//             <p className="mb-4 text-gray-400">
//               Votre bien-être naturel est notre priorité. Produits de qualité, service personnalisé.
//             </p>
//             {/* <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Instagram size={20} />
//               </a>
//               <a href="https://wa.me/2250714113978" className="text-gray-400 hover:text-white">
//                 <MessageCircle size={20} />
//               </a>
//               <a href="mailto:contact@bienetreshop.ci" className="text-gray-400 hover:text-white">
//                 <Mail size={20} />
//               </a>
//             </div> */}
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
//             <ul className="space-y-2">
//               <li><Link to="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
//               <li><Link to="/#produits" className="text-gray-400 hover:text-white">Produits</Link></li>
//               <li><Link to="/#avis" className="text-gray-400 hover:text-white">Avis clients</Link></li>
//               <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
//               <li><Link to="/panier" className="text-gray-400 hover:text-white">Panier</Link></li>
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">Légal</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-400 hover:text-white">Conditions générales</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white">Mentions légales</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white">Politique de retour</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">Contact rapide</h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-2">
//                 <MessageCircle size={18} className="text-primary-400" />
//                 <a href="https://wa.me/2250714113978" className="text-gray-400 hover:text-white">
//                   WhatsApp: +2250714113978
//                 </a>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Mail size={18} className="text-primary-400" />
//                 <a href="mailto:noevacare@gmail.com" className="text-gray-400 hover:text-white">
//                   noevacare@gmail.com
//                 </a>
//               </div>
//             </div>
            
//             <div className="p-4 mt-6 bg-gray-800 rounded-lg">
//               <p className="text-sm text-gray-300">
//                 ⚡ Livraison rapide selon votre localisation
//               </p>
//               <p className="mt-2 text-sm text-gray-300">
//                 🔒 Paiement sécurisé
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
//           <p>© {new Date().getFullYear()} NoévaCare. Tous droits réservés.</p>
//           {/* <p className="mt-2 text-sm">
//             Site développé avec React, TypeScript et Tailwind CSS
//           </p> */}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import logo from '../IMAGES/logoN.png';

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full">
                <img src={logo} alt="Logo" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Trade<span className="text-primary-400">Shop</span></h2>
                <p className="text-sm text-gray-400">Bracelet & Gourde</p>
              </div>
            </div>
            <p className="mb-4 text-gray-400">
              Votre bien-être naturel est notre priorité. Bracelets en acier inoxydable, cuivre, personnalisés et gourde en cuivre.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Nos produits</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Bracelet Acier Inoxydable - 6 000 FCFA</li>
              <li className="text-gray-400">Bracelet Cuivre - 15 000 FCFA</li>
              <li className="text-gray-400">Bracelet Personnalisé - 8 000 FCFA</li>
              <li className="text-gray-400">Gourde Cuivre - 25 000 FCFA</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
              <li><Link to="/#produits" className="text-gray-400 hover:text-white">Produits</Link></li>
              <li><Link to="/#livraison" className="text-gray-400 hover:text-white">Livraison</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MessageCircle size={18} className="text-primary-400" />
                <a href="https://wa.me/2250701006360" className="text-gray-400 hover:text-white">
                  WhatsApp: +225 0701006360
                </a>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Mail size={18} className="text-primary-400" />
                <a href="mailto:noevacare@gmail.com" className="text-gray-400 hover:text-white">
                  noevacare@gmail.com
                </a>
              </div> */}
            </div>
            
            <div className="p-4 mt-6 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                📦 Livraison partout à Abidjan
              </p>
              <p className="mt-2 text-sm text-gray-300">
                🚛 Expédition partout en CI 🇨🇮
              </p>
              <p className="mt-2 text-sm text-gray-300">
                🔒 Paiement sécurisé
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>© {new Date().getFullYear()} TradeShop. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;