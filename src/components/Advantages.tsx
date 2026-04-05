// import React from 'react';
// import { motion } from 'framer-motion';
// import { Truck, Shield, Leaf, Headphones } from 'lucide-react';
// import { advantages } from '../data/products';

// const Advantages: React.FC = () => {
//   const icons = [Truck, Shield, Leaf, Headphones];

//   return (
//     <section className="py-20 bg-white">
//       <div className="container px-4 mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center"
//         >
//           <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
//             Pourquoi nous choisir ?
//           </h2>
//           <p className="max-w-2xl mx-auto text-gray-600">
//             Nous nous engageons à vous offrir la meilleure expérience d'achat possible
//           </p>
//         </motion.div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {advantages.map((advantage, index) => {
//             const Icon = icons[index];
//             return (
//               <motion.div
//                 key={advantage.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="p-6 transition-all shadow-lg bg-gradient-to-br from-white to-gray-50 rounded-2xl hover:shadow-xl"
//               >
//                 <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl">
//                   <Icon className="text-primary-600" size={28} />
//                 </div>
                
//                 <h3 className="mb-3 text-xl font-bold text-gray-900">
//                   {advantage.title}
//                 </h3>
                
//                 <p className="text-gray-600">
//                   {advantage.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Trust badges */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="max-w-4xl p-8 mx-auto mt-16 bg-gradient-to-r from-primary-50 to-beige-50 rounded-3xl"
//         >
//           <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
//             {[
//               { number: '500+', label: 'Clients satisfaits' },
//               { number: '98%', label: 'Satisfaction' },
//               { number: '24h', label: 'Support réactif' },
//               { number: '100%', label: 'Naturel' }
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="mb-2 text-3xl font-bold text-primary-600">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Advantages;


import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Leaf, Headphones } from 'lucide-react';
import { advantages } from '../data/products';

const Advantages: React.FC = () => {
  const icons = [Truck, Shield, Leaf, Headphones];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 mb-4 border border-gray-200 rounded-full bg-white/50">
            <span className="text-sm font-medium text-gray-500">Pourquoi NoévaCare ?</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Pourquoi nous choisir ?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500">
            Nous nous engageons à vous offrir la meilleure expérience d'achat possible
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md"
              >
                <div className="flex items-center justify-center mb-5 w-14 h-14 bg-amber-50 rounded-xl">
                  <Icon className="text-amber-500" size={26} />
                </div>
                
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {advantage.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-gray-500">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badges - Style épuré */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl p-8 mx-auto mt-16 border border-gray-100 bg-gray-50 rounded-2xl"
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { number: '500+', label: 'Clients satisfaits', icon: '😊' },
              { number: '98%', label: 'Satisfaction', icon: '⭐' },
              { number: '24h', label: 'Support réactif', icon: '💬' },
              { number: '100%', label: 'Naturel', icon: '🌿' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-2xl">{stat.icon}</div>
                <div className="mb-1 text-2xl font-bold text-amber-600">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Separator and additional info */}
          <div className="pt-6 mt-6 text-center border-t border-gray-200">
            <p className="text-xs text-gray-400">
              🔒 Paiement sécurisé • 📦 Livraison partout à Abidjan • 🚛 Expédition CI
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;