// import React from 'react';
// import { motion } from 'framer-motion';
// import { products } from '../data/products';
// import ProductCard from './ProductCard';

// const Products: React.FC = () => {
//   return (
//     <section id="produits" className="py-20 bg-beige-50">
//       <div className="container px-4 mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center"
//         >
//           <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
//             Nos Produits
//           </h2>
//           <p className="max-w-2xl mx-auto text-gray-600">
//             Découvrez nos produits soigneusement sélectionnés pour votre bien-être quotidien.
//           </p>
//         </motion.div>
        
//         <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2">
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <ProductCard product={product}>
//                 <a href={`/produit/${product.id}`} className="block focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-2xl" style={{display:'block', position:'absolute', top:0, left:0, width:'100%', height:'224px', zIndex:2}} aria-label={product.name}></a>
//               </ProductCard>
//             </motion.div>
//           ))}
//         </div>
        
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="max-w-3xl p-8 mx-auto mt-12 bg-white shadow-lg rounded-2xl"
//         >
//           <h3 className="mb-4 text-2xl font-bold text-gray-900">
//             Offre Spéciale
//           </h3>
//           <p className="mb-4 text-gray-600">
//             Commandez les deux produits ensemble et bénéficiez de 5% de réduction !
//           </p>
//           {/* <div className="flex items-center justify-between">
//             <div>
//               <span className="text-gray-500 line-through">43 800 FCFA</span>
//               <span className="ml-4 text-2xl font-bold text-primary-600">37 230 FCFA</span>
//             </div>
//             <button className="px-6 py-2 font-semibold text-white transition-colors rounded-full bg-primary-600 hover:bg-primary-700">
//               Commander le pack
//             </button>
//           </div> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Products;


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  return (
    <section id="produits" className="py-20 bg-beige-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Nos Produits
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez nos bracelets et gourde en cuivre pour votre bien-être quotidien.
          </p>
        </motion.div>
        
        <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product}>
                <Link to={`/produit/${product.id}`} className="block focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-2xl" style={{display:'block', position:'absolute', top:0, left:0, width:'100%', height:'224px', zIndex:2}} aria-label={product.name}></Link>
              </ProductCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl p-8 mx-auto mt-12 bg-white shadow-lg rounded-2xl"
        >
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            Offres Spéciales
          </h3>
          <div className="mb-6 space-y-3">
            <p className="text-gray-600">
              🎁 <strong>Bracelet Acier Inoxydable</strong> : 2 bracelets à <span className="font-bold text-primary-600">10 000 FCFA</span> au lieu de 12 000 FCFA
            </p>
            <p className="text-gray-600">
              🎁 <strong>Bracelet Personnalisé</strong> : 2 bracelets à <span className="font-bold text-primary-600">15 000 FCFA</span> au lieu de 16 000 FCFA
            </p>
            <p className="text-gray-600">
              🎁 <strong>Pack Bien-être</strong> : Bracelet Cuivre + Gourde Cuivre à <span className="font-bold text-primary-600">35 000 FCFA</span> au lieu de 40 000 FCFA
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/2250701006360"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 font-semibold text-white transition-colors bg-green-600 rounded-full hover:bg-green-700"
            >
              Commander sur WhatsApp
            </a>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) {
                  const headerHeight = 80;
                  const elementPosition = contactSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 font-semibold transition-colors border rounded-full border-primary-600 text-primary-600 hover:bg-primary-50"
            >
              Nous contacter
            </button>
          </div>
          <p className="mt-4 text-xs text-center text-gray-500">
            📦 Livraison partout à Abidjan • 🚛 Expédition partout en CI 🇨🇮
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;