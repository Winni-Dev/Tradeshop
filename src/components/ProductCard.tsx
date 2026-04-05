
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Plus, Minus, Check } from 'lucide-react';
// import { Product } from '../types';
// import { useCart } from '../hooks/useCart';
// import toast from 'react-hot-toast';

// interface ProductCardProps {
//   product: Product;
//   children?: React.ReactNode;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, children }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [adding, setAdding] = useState(false);
//   const { addItem } = useCart();

//   const handleAddToCart = () => {
//     setAdding(true);
//     addItem(product, quantity);
//     toast.success('Ajouté au panier', {
//       position: 'top-right',
//       style: {
//         borderRadius: '12px',
//         background: '#10B981',
//         color: '#fff',
//       },
//     });
//     setTimeout(() => setAdding(false), 800);
//     setQuantity(1);
//   };

//   // Simple price formatting (no currency style for XOF)
//   const formatPrice = (price: number) => `${price.toLocaleString()} FCFA`;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -6 }}
//       className="relative h-full group"
//     >
//       <div className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl">
//         {/* Image container */}
//         <div className="relative">
//           <div className="relative h-56 overflow-hidden">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
//             />
//             {children}
//           </div>
//         </div>
//         {/* Content */}
//         <div className="flex flex-col flex-1 p-4">
//           {/* Title and description */}
//           <div className="flex-1 mb-3">
//             <h3 className="text-lg font-bold text-gray-900 mb-1.5 line-clamp-1">
//               {product.name}
//             </h3>
//             <p className="text-sm leading-relaxed text-gray-600 line-clamp-2">
//               {product.description}
//             </p>
//           </div>
//           {/* Price section */}
//           <div className="pt-3 mb-4 border-t border-gray-100">
//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="flex items-baseline">
//                   <span className="text-xl font-bold text-gray-900">
//                     {formatPrice(product.price)}
//                   </span>
//                 </div>
//                 {product.price > 25000 && (
//                   <div className="flex items-center mt-0.5">
//                     <span className="mr-1 text-xs text-gray-400 line-through">
//                       {formatPrice(product.price * 1.25)}
//                     </span>
//                     <span className="text-xs font-semibold text-red-600">
//                       Économie
//                     </span>
//                   </div>
//                 )}
//               </div>
//               {/* Quantity control */}
//               <div className="flex items-center space-x-1.5 bg-gray-50 rounded-full p-1">
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="flex items-center justify-center transition-colors bg-white rounded-full shadow-xs w-7 h-7 hover:bg-gray-100"
//                   aria-label="Réduire la quantité"
//                 >
//                   <Minus size={14} className="text-gray-600" />
//                 </button>
//                 <span className="w-6 text-sm font-bold text-center text-gray-900">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="flex items-center justify-center transition-colors bg-white rounded-full shadow-xs w-7 h-7 hover:bg-gray-100"
//                   aria-label="Augmenter la quantité"
//                 >
//                   <Plus size={14} className="text-gray-600" />
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* Add to cart button */}
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={handleAddToCart}
//             disabled={adding}
//             className={`w-full py-2.5 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-sm ${
//               adding
//                 ? 'bg-green-600 text-white shadow'
//                 : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-md'
//             }`}
//           >
//             {adding ? (
//               <>
//                 <div className="w-4 h-4 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin" />
//                 <span>Ajouté</span>
//               </>
//             ) : (
//               <>
//                 <span className="mr-2">Ajouter au panier</span>
//                 <Check size={16} />
//               </>
//             )}
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  children?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, children }) => {
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    setAdding(true);
    addItem(product, quantity);
    toast.success(`${quantity} x ${product.name} ajouté au panier`, {
      position: 'top-right',
      duration: 2000,
      icon: '🛒',
      style: {
        borderRadius: '12px',
        background: '#fff',
        color: '#333',
        border: '1px solid #f0f0f0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      },
    });
    setTimeout(() => setAdding(false), 800);
    setQuantity(1);
  };

  // Simple price formatting
  const formatPrice = (price: number) => `${price.toLocaleString()} FCFA`;

  // Vérifier si le produit a une promotion (2 bracelets)
  const hasPromo = () => {
    const name = product.name.toLowerCase();
    return name.includes('acier') || name.includes('personnalisé');
  };

  const getPromoText = () => {
    const name = product.name.toLowerCase();
    if (name.includes('acier')) return '2 bracelets à 10 000 FCFA';
    if (name.includes('personnalisé')) return '2 bracelets à 15 000 FCFA';
    return '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="relative h-full group"
    >
      <div className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md">
        {/* Image container */}
        <div className="relative">
          <div className="relative h-56 overflow-hidden bg-gray-50">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
              loading="lazy"
            />
            {children}
            
            {/* Badge promotion */}
            {hasPromo() && (
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-amber-700 bg-amber-100 rounded-full">
                  🎁 Promotion
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          {/* Title and description */}
          <div className="flex-1 mb-3">
            <h3 className="text-base font-semibold text-gray-900 mb-1.5 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs leading-relaxed text-gray-500 line-clamp-2">
              {product.description}
            </p>
          </div>
          
          {/* Price section */}
          <div className="pt-3 mb-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex flex-wrap items-baseline gap-1">
                  <span className="text-xl font-bold text-amber-600">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                {/* Promo text */}
                {hasPromo() && (
                  <p className="mt-1 text-xs font-medium text-amber-600">
                    {getPromoText()}
                  </p>
                )}
              </div>
              
              {/* Quantity control */}
              <div className="flex items-center p-1 space-x-1 rounded-full bg-gray-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex items-center justify-center transition-colors bg-white rounded-full shadow-sm w-7 h-7 hover:bg-gray-100"
                  aria-label="Réduire la quantité"
                >
                  <Minus size={14} className="text-gray-500" />
                </button>
                <span className="w-6 text-sm font-semibold text-center text-gray-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex items-center justify-center transition-colors bg-white rounded-full shadow-sm w-7 h-7 hover:bg-gray-100"
                  aria-label="Augmenter la quantité"
                >
                  <Plus size={14} className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Add to cart button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            disabled={adding}
            className={`w-full py-2.5 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center text-sm ${
              adding
                ? 'bg-green-500 text-white shadow-sm'
                : 'bg-amber-500 text-white hover:bg-amber-600 hover:shadow-sm'
            }`}
          >
            {adding ? (
              <>
                <div className="w-4 h-4 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin" />
                <span>Ajouté !</span>
              </>
            ) : (
              <>
                <ShoppingBag size={16} className="mr-2" />
                <span>Ajouter au panier</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;