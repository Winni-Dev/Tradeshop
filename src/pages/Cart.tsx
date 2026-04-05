


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ChevronRight } from 'lucide-react';
// import { useCart } from '../hooks/useCart';
// import { useNavigate } from 'react-router-dom';
// import OrderPopup from '../components/OrderPopup';
// import toast from 'react-hot-toast';

// const CartPage: React.FC = () => {
//   const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();
//   const [showOrderPopup, setShowOrderPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleSeeProducts = () => {
//     navigate('/#produits');
//   };

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('fr-CI', {
//       style: 'currency',
//       currency: 'XOF',
//       minimumFractionDigits: 0,
//     }).format(price);
//   };

//   const handleRemoveItem = (productId: number, productName: string) => {
//     removeItem(productId);
//     toast.success(`${productName} retiré du panier`, {
//       position: 'bottom-right',
//     });
//   };

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen px-4 pt-24 pb-20">
//         <div className="container mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-md pt-16 mx-auto text-center"
//           >
//             <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gray-50">
//               <ShoppingBag className="text-gray-300" size={32} />
//             </div>
//             <h2 className="mb-3 text-2xl font-medium text-gray-800">
//               Panier vide
//             </h2>
//             <p className="mb-8 text-sm text-gray-500">
//               Ajoutez des produits pour commencer vos achats
//             </p>
//             <button
//               onClick={handleSeeProducts}
//               className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all bg-gray-900 rounded-full hover:bg-gray-800"
//             >
//               Explorer les produits
//               <ChevronRight size={16} />
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-24 pb-20 bg-gray-50">
//       <div className="container px-4 mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="max-w-6xl mx-auto"
//         >
//           {/* Header */}
//           <div className="mb-8">
//             <button
//               onClick={handleSeeProducts}
//               className="inline-flex items-center mb-4 text-gray-600 transition-colors hover:text-gray-800"
//             >
//               <ArrowLeft size={18} className="mr-2" />
//               <span className="text-sm">Retour aux produits</span>
//             </button>
//             <h1 className="text-2xl font-medium text-gray-900">Mon Panier</h1>
//             <p className="mt-1 text-sm text-gray-500">
//               {items.length} {items.length > 1 ? 'articles' : 'article'}
//             </p>
//           </div>

//           <div className="grid gap-6 lg:grid-cols-3">
//             {/* Cart Items */}
//             <div className="space-y-4 lg:col-span-2">
//               {items.map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   className="p-4 transition-shadow bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md"
//                 >
//                   <div className="flex gap-4">
//                     {/* Product Image */}
//                     <div className="flex-shrink-0 w-20 h-20">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="object-cover w-full h-full rounded-lg"
//                       />
//                     </div>

//                     {/* Product Info */}
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-start justify-between">
//                         <div>
//                           <h3 className="mb-1 font-medium text-gray-900 line-clamp-1">
//                             {item.name}
//                           </h3>
//                           <p className="mb-3 text-sm text-gray-500 line-clamp-2">
//                             {item.description}
//                           </p>
//                         </div>
//                         <button
//                           onClick={() => handleRemoveItem(item.id, item.name)}
//                           className="p-1 text-gray-400 transition-colors hover:text-red-500"
//                         >
//                           <Trash2 size={18} />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                           {/* Quantity Controls */}
//                           <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50">
//                             <button
//                               onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                               className="p-1 text-gray-500 transition-colors hover:text-gray-700"
//                             >
//                               <Minus size={14} />
//                             </button>
//                             <span className="w-6 text-sm font-medium text-center">
//                               {item.quantity}
//                             </span>
//                             <button
//                               onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                               className="p-1 text-gray-500 transition-colors hover:text-gray-700"
//                             >
//                               <Plus size={14} />
//                             </button>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-medium text-gray-900">
//                             {formatPrice(item.price * item.quantity)}
//                           </div>
//                           <div className="text-xs text-gray-400">
//                             {formatPrice(item.price)} / unité
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Order Summary */}
//             <div className="lg:col-span-1">
//               <div className="sticky p-5 bg-white border border-gray-100 shadow-sm rounded-xl top-24">
//                 <h2 className="mb-5 font-medium text-gray-900">Récapitulatif</h2>

//                 {/* Order Items List */}
//                 <div className="pr-2 mb-4 space-y-3 overflow-y-auto max-h-60">
//                   {items.map(item => (
//                     <div key={item.id} className="flex justify-between text-sm">
//                       <div className="flex-1">
//                         <span className="text-gray-600">{item.name}</span>
//                         <span className="ml-2 text-gray-400">×{item.quantity}</span>
//                       </div>
//                       <span className="font-medium">
//                         {formatPrice(item.price * item.quantity)}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="pt-4 mb-5 border-t">
//                   <div className="flex justify-between text-base font-medium">
//                     <span>Total</span>
//                     <span className="text-gray-900">{formatPrice(getTotal())}</span>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="space-y-3">
//                   <button
//                     onClick={() => setShowOrderPopup(true)}
//                     className="w-full py-3 text-sm font-medium text-white transition-all bg-gray-900 rounded-full hover:bg-gray-800"
//                   >
//                     Commander maintenant
//                   </button>

//                   <button
//                     onClick={handleSeeProducts}
//                     className="w-full py-3 text-sm font-medium text-gray-600 transition-all border border-gray-200 rounded-full hover:bg-gray-50"
//                   >
//                     Ajouter d'autres produits
//                   </button>

//                   <button
//                     onClick={() => {
//                       clearCart();
//                       toast.success('Panier vidé');
//                     }}
//                     className="w-full py-2 text-sm font-medium text-red-500 transition-colors hover:text-red-600"
//                   >
//                     Vider le panier
//                   </button>
//                 </div>

//                 {/* Info Box */}
//                 <div className="pt-5 mt-6 border-t border-gray-100">
//                   <div className="flex items-start gap-2 mb-3">
//                     <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-blue-50">
//                       <span className="text-xs text-blue-500">🚚</span>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       Livraison rapide selon votre localisation
//                     </p>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-green-50">
//                       <span className="text-xs text-green-500">💬</span>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       Finalisation via WhatsApp pour un suivi personnalisé
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <OrderPopup
//         isOpen={showOrderPopup}
//         onClose={() => setShowOrderPopup(false)}
//       />
//     </div>
//   );
// };

// export default CartPage;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import OrderPopup from '../components/OrderPopup';
import toast from 'react-hot-toast';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const navigate = useNavigate();

  const handleSeeProducts = () => {
    navigate('/#produits');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CI', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleRemoveItem = (productId: number, productName: string) => {
    removeItem(productId);
    toast.success(`${productName} retiré du panier`, {
      position: 'bottom-right',
      icon: '🗑️',
      style: {
        borderRadius: '12px',
        background: '#fff',
        color: '#333',
      },
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen px-4 pt-24 pb-20 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md pt-16 mx-auto text-center"
          >
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gray-50">
              <ShoppingBag className="text-gray-300" size={32} />
            </div>
            <h2 className="mb-3 text-2xl font-medium text-gray-800">
              Panier vide
            </h2>
            <p className="mb-8 text-sm text-gray-500">
              Ajoutez des produits pour commencer vos achats
            </p>
            <button
              onClick={handleSeeProducts}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all rounded-full bg-amber-500 hover:bg-amber-600"
            >
              Explorer les produits
              <ChevronRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={handleSeeProducts}
              className="inline-flex items-center mb-4 text-gray-500 transition-colors hover:text-amber-600 group"
            >
              <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm">Retour aux produits</span>
            </button>
            <h1 className="text-2xl font-medium text-gray-900">Mon Panier</h1>
            <p className="mt-1 text-sm text-gray-500">
              {items.length} {items.length > 1 ? 'articles' : 'article'}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 transition-all bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg bg-gray-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="mb-1 font-medium text-gray-900 line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="mb-3 text-sm text-gray-500 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="p-1 text-gray-400 transition-colors rounded-lg hover:text-red-500 hover:bg-red-50"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 text-gray-500 transition-colors rounded-full hover:text-amber-600 hover:bg-white"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-6 text-sm font-medium text-center text-gray-700">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-gray-500 transition-colors rounded-full hover:text-amber-600 hover:bg-white"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-amber-600">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                          <div className="text-xs text-gray-400">
                            {formatPrice(item.price)} / unité
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky p-6 bg-white border border-gray-100 shadow-sm rounded-xl top-24">
                <h2 className="mb-5 text-lg font-semibold text-gray-900">Récapitulatif</h2>

                {/* Order Items List */}
                <div className="pr-2 mb-4 space-y-3 overflow-y-auto max-h-60">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div className="flex-1">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="ml-2 text-gray-400">×{item.quantity}</span>
                      </div>
                      <span className="font-medium text-gray-700">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 mb-6 border-t border-gray-100">
                  <div className="flex justify-between text-base">
                    <span className="font-medium text-gray-700">Total</span>
                    <span className="text-xl font-bold text-amber-600">{formatPrice(getTotal())}</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Livraison calculée à la validation</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => setShowOrderPopup(true)}
                    className="w-full py-3 text-sm font-medium text-white transition-all rounded-full bg-amber-500 hover:bg-amber-600 hover:shadow-md"
                  >
                    Commander maintenant
                  </button>

                  <button
                    onClick={handleSeeProducts}
                    className="w-full py-3 text-sm font-medium text-gray-600 transition-all border border-gray-200 rounded-full hover:border-amber-300 hover:text-amber-600 hover:bg-amber-50"
                  >
                    Ajouter d'autres produits
                  </button>

                  <button
                    onClick={() => {
                      clearCart();
                      toast.success('Panier vidé', {
                        position: 'bottom-right',
                        icon: '🗑️',
                        style: {
                          borderRadius: '12px',
                          background: '#fff',
                          color: '#333',
                        },
                      });
                    }}
                    className="w-full py-2 text-sm font-medium text-gray-400 transition-colors hover:text-red-500"
                  >
                    Vider le panier
                  </button>
                </div>

                {/* Info Box */}
                <div className="pt-5 mt-6 border-t border-gray-100">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-amber-50">
                      <span className="text-xs text-amber-500">🚚</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Livraison partout à Abidjan • Expédition partout en CI 🇨🇮
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-green-50">
                      <span className="text-xs text-green-500">💬</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Finalisation via WhatsApp au <span className="font-medium text-amber-600">+225 0701006360</span>
                    </p>
                  </div>
                </div>

                {/* Trust badge */}
                <div className="mt-4 text-center">
                  <p className="text-[10px] text-gray-400">
                    🔒 Paiement 100% sécurisé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <OrderPopup
        isOpen={showOrderPopup}
        onClose={() => setShowOrderPopup(false)}
      />
    </div>
  );
};

export default CartPage;