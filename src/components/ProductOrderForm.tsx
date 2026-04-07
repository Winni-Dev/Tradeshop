
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, MapPin, Globe, Home, AlertCircle, CheckCircle, Info } from 'lucide-react';
// import { Product, OrderFormData } from '../types';
// import toast from 'react-hot-toast';

// interface ProductOrderFormProps {
//   product: Product;
//   quantity: number;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ProductOrderForm: React.FC<ProductOrderFormProps> = ({ product, quantity, isOpen, onClose }) => {
//   const [formData, setFormData] = useState<OrderFormData>({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     location: 'abidjan',
//     country: '',
//     city: '',
//     quartier: '',
//     notes: '',
//   });

//   const getEffectivePrice = () => {
//     return product.price;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const unitPrice = getEffectivePrice();
//     const total = unitPrice * quantity;
    
//     let locationLine = `📍 Localisation: ${getLocationText(formData.location)}%0A`;
//     if (formData.location === 'abidjan') {
//       if (formData.city) locationLine += `🏙️ Commune: ${formData.city}%0A`;
//       if (formData.quartier) locationLine += `🏘️ Quartier: ${formData.quartier}%0A`;
//       locationLine += `📦 Livraison gratuite%0A`;
//     } else {
//       if (formData.city) locationLine += `🏙️ Ville: ${formData.city}%0A`;
//       if (formData.country) locationLine += `🌍 Pays: ${formData.country}%0A`;
//     }
    
//     // Format WhatsApp message
//     const message = `Nouvelle commande de produit !%0A%0A` +
//       `👤 Client: ${formData.firstName} ${formData.lastName}%0A` +
//       `📞 Téléphone: ${formData.phone}%0A` +
//       locationLine +
//       `%0A🛒 Commande:%0A` +
//       `- ${product.name} x${quantity}: ${formatPrice(total)}%0A` +
//       `%0A💰 Total: ${formatPrice(total)}%0A` +
//       `💳 Mode paiement: ${getPaymentMethod(formData.location)}%0A` +
//       (formData.notes ? `%0A📝 Notes: ${formData.notes}` : '');

//     // Redirect to WhatsApp
//     window.open(`https://wa.me/2250714113978?text=${message}`, '_blank');
    
//     // Show success message
//     toast.success('Commande envoyée sur WhatsApp !', {
//       position: 'top-center',
//       style: {
//         borderRadius: '12px',
//         background: '#10B981',
//         color: '#fff',
//       },
//     });
    
//     // Close form and reset
//     onClose();
//     setFormData({
//       firstName: '',
//       lastName: '',
//       phone: '',
//       location: 'abidjan',
//       country: '',
//       city: '',
//       quartier: '',
//       notes: '',
//     });
//   };

//   const getLocationText = (location: string) => {
//     const locations: { [key: string]: string } = {
//       abidjan: 'Abidjan',
//       interior: 'Intérieur du pays',
//       exterior: 'Extérieur du pays',
//     };
//     return locations[location] || location;
//   };

//   const getPaymentMethod = (location: string) => {
//     switch (location) {
//       case 'abidjan': return 'Paiement à la livraison';
//       case 'interior': return 'paiement 100% requis avant expédition';
//       case 'exterior': return 'paiement total + frais d\'expédition requis';
//       default: return '';
//     }
//   };

//   const getPaymentMessage = (location: string) => {
//     switch (location) {
//       case 'abidjan':
//         return {
//           title: 'Paiement à la livraison',
//           description: 'Vous payez directement à la réception de votre commande',
//           color: 'text-green-600',
//           bgColor: 'bg-green-50',
//           icon: CheckCircle
//         };
//       case 'interior':
//         return {
//           title: 'Paiement 100% requis avant expédition',
//           description: 'Un paiement de 100% est requis avant l\'expédition',
//           color: 'text-amber-600',
//           bgColor: 'bg-amber-50',
//           icon: AlertCircle
//         };
//       case 'exterior':
//         return {
//           title: 'Paiement total requis',
//           description: 'Le paiement total + frais d\'expédition est requis avant l\'envoi',
//           color: 'text-blue-600',
//           bgColor: 'bg-blue-50',
//           icon: Info
//         };
//       default:
//         return {
//           title: '',
//           description: '',
//           color: '',
//           bgColor: '',
//           icon: Info
//         };
//     }
//   };

//   const formatPrice = (price: number) => `${price.toLocaleString()} FCFA`;

//   const paymentInfo = getPaymentMessage(formData.location);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//           />
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ type: 'spring', damping: 25, stiffness: 300 }}
//             className="fixed inset-0 z-50 flex items-end justify-center p-4 md:items-center"
//           >
//             <div className="bg-white rounded-t-3xl md:rounded-3xl w-full md:max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
//               {/* Header */}
//               <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-white border-b border-gray-100 rounded-t-3xl md:rounded-t-3xl">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-900">Confirmer votre commande</h2>
//                   <p className="mt-1 text-sm text-gray-500">Remplissez vos informations de livraison</p>
//                 </div>
//                 <button
//                   onClick={onClose}
//                   className="p-2 transition-colors rounded-lg hover:bg-gray-100"
//                   aria-label="Fermer"
//                 >
//                   <X size={22} className="text-gray-600" />
//                 </button>
//               </div>

//               {/* Product Summary */}
//               <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-primary-50 to-beige-50">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="object-cover w-20 h-20 shadow-sm rounded-xl"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-bold text-gray-900">{product.name}</h3>
//                     <div className="flex items-center justify-between mt-2">
//                       <div>
//                         <p className="text-sm text-gray-600">Quantité: <span className="font-semibold">{quantity}</span></p>
//                         <p className="text-sm text-gray-600">Prix unitaire: <span className="font-semibold">{formatPrice(getEffectivePrice())}</span></p>
//                         {formData.location === 'abidjan' && (
//                           <p className="text-xs font-medium text-green-600">📦 Livraison gratuite à Abidjan</p>
//                         )}
//                       </div>
//                       <div className="text-right">
//                         <p className="text-lg font-bold text-primary-600">{formatPrice(getEffectivePrice() * quantity)}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="p-5 space-y-5">
//                 {/* Name fields */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block mb-2 text-sm font-medium text-gray-700">
//                       Prénom *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.firstName}
//                       onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                       className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                       placeholder="Votre prénom"
//                     />
//                   </div>
//                   <div>
//                     <label className="block mb-2 text-sm font-medium text-gray-700">
//                       Nom *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.lastName}
//                       onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                       className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                       placeholder="Votre nom"
//                     />
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="block mb-2 text-sm font-medium text-gray-700">
//                     Téléphone / WhatsApp *
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     placeholder="+225 00 00 00 00 ou +33 0 00 00 00 00"
//                   />
//                 </div>

//                 {/* Location */}
//                 <div className="space-y-3">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Localisation de livraison *
//                   </label>
                  
//                   <div className="space-y-3">
//                     {[
//                       { value: 'abidjan', label: 'Abidjan', icon: Home, description: 'Livraison dans toute la ville' },
//                       { value: 'interior', label: 'Intérieur du pays', icon: MapPin, description: 'Hors Abidjan (Côte d\'Ivoire)' },
//                       { value: 'exterior', label: 'Extérieur du pays', icon: Globe, description: 'À l\'international' },
//                     ].map((option) => {
//                       const Icon = option.icon;
//                       return (
//                         <label 
//                           key={option.value} 
//                           className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${
//                             formData.location === option.value 
//                               ? 'border-primary-500 bg-primary-50' 
//                               : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
//                           }`}
//                         >
//                           <input
//                             type="radio"
//                             name="location"
//                             value={option.value}
//                             checked={formData.location === option.value}
//                             onChange={(e) => setFormData({ ...formData, location: e.target.value as any, city: '', country: '', quartier: '' })}
//                             className="w-4 h-4 mt-1 text-primary-600"
//                           />
//                           <div className="flex-1 ml-4">
//                             <div className="flex items-center">
//                               <Icon size={20} className="mr-3 text-gray-600" />
//                               <span className="font-semibold text-gray-900">{option.label}</span>
//                             </div>
//                             <p className="mt-1 text-sm text-gray-500 ml-7">{option.description}</p>
//                           </div>
//                         </label>
//                       );
//                     })}
//                   </div>

//                   {/* Payment Method Info */}
//                   {paymentInfo.title && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className={`${paymentInfo.bgColor} rounded-xl p-4 mt-3 border ${paymentInfo.color.replace('text-', 'border-')}/20`}
//                     >
//                       <div className="flex items-start">
//                         <paymentInfo.icon className={`w-5 h-5 mt-0.5 mr-3 ${paymentInfo.color}`} />
//                         <div>
//                           <p className={`font-semibold ${paymentInfo.color}`}>{paymentInfo.title}</p>
//                           <p className="mt-1 text-sm text-gray-700">{paymentInfo.description}</p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </div>

//                 {/* Commune + Quartier (if abidjan) */}
//                 {formData.location === 'abidjan' && (
//                   <>
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="overflow-hidden"
//                     >
//                       <label className="block mb-2 text-sm font-medium text-gray-700">
//                         Commune *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={formData.city}
//                         onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//                         className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                         placeholder="Ex: Cocody, Yopougon, Plateau..."
//                       />
//                     </motion.div>
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="overflow-hidden"
//                     >
//                       <label className="block mb-2 text-sm font-medium text-gray-700">
//                         Quartier *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={formData.quartier || ''}
//                         onChange={(e) => setFormData({ ...formData, quartier: e.target.value })}
//                         className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                         placeholder="Ex: Angré, Riviera, Adjamé..."
//                       />
//                       <p className="mt-2 text-xs text-gray-500">Précisez votre quartier pour une livraison gratuite et rapide</p>
//                     </motion.div>
//                   </>
//                 )}

//                 {/* City (if interior) */}
//                 {formData.location === 'interior' && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="overflow-hidden"
//                   >
//                     <label className="block mb-2 text-sm font-medium text-gray-700">
//                       Ville de livraison *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.city}
//                       onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//                       className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                       placeholder="Ex: Bouaké, Yamoussoukro, San Pedro..."
//                     />
//                     <p className="mt-2 text-xs text-gray-500">Précisez votre ville pour une meilleure organisation de la livraison</p>
//                   </motion.div>
//                 )}

//                 {/* Country (if exterior) */}
//                 {formData.location === 'exterior' && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="overflow-hidden"
//                   >
//                     <label className="block mb-2 text-sm font-medium text-gray-700">
//                       Pays de livraison *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.country}
//                       onChange={(e) => setFormData({ ...formData, country: e.target.value })}
//                       className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                       placeholder="Ex: France, Canada, Sénégal..."
//                     />
//                     <p className="mt-2 text-xs text-gray-500">Les frais d'expédition internationaux seront calculés après confirmation</p>
//                   </motion.div>
//                 )}

//                 {/* Notes */}
//                 <div>
//                   <label className="block mb-2 text-sm font-medium text-gray-700">
//                     Notes supplémentaires (optionnel)
//                   </label>
//                   <textarea
//                     value={formData.notes}
//                     onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//                     rows={3}
//                     className="w-full px-4 py-3 transition-all border border-gray-300 resize-none rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     placeholder="Instructions spéciales, préférences de livraison, questions..."
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   className="flex items-center justify-center w-full py-4 space-x-3 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-green-600 to-green-700 rounded-xl hover:shadow-lg"
//                 >
//                   <span>📱</span>
//                   <span>Envoyer la commande sur WhatsApp</span>
//                 </motion.button>

//                 {/* Info */}
//                 <p className="text-xs text-center text-gray-500">
//                   Vous serez redirigé vers WhatsApp pour finaliser votre commande
//                 </p>
//               </form>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ProductOrderForm;




import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Home, AlertCircle, CheckCircle, Info, Gift } from 'lucide-react';
import { Product, OrderFormData } from '../types';
import toast from 'react-hot-toast';

interface ProductOrderFormProps {
  product: Product;
  quantity: number;
  isOpen: boolean;
  onClose: () => void;
}

const ProductOrderForm: React.FC<ProductOrderFormProps> = ({ product, quantity, isOpen, onClose }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    location: 'abidjan',
    country: '',
    city: '',
    quartier: '',
    notes: '',
  });

  // Calcul du prix effectif avec réduction pour 2 bracelets
  const getEffectivePrice = () => {
    const productName = product.name.toLowerCase();
    
    // Réduction pour le bracelet acier inoxydable (2 bracelets à 10 000 FCFA)
    if (productName.includes('acier') && quantity >= 2) {
      return 5000; // 10 000 / 2 = 5 000 par bracelet
    }
    
    // Réduction pour le bracelet personnalisé (2 bracelets à 15 000 FCFA)
    if (productName.includes('personnalisé') && quantity >= 2) {
      return 7500; // 15 000 / 2 = 7 500 par bracelet
    }
    
    // Pas de réduction pour les autres produits ou quantités < 2
    return product.price;
  };

  // Calcul du total avec réduction
  const getTotalPrice = () => {
    const unitPrice = getEffectivePrice();
    return unitPrice * quantity;
  };

  // Message de réduction à afficher
  const getDiscountMessage = () => {
    const productName = product.name.toLowerCase();
    
    if (productName.includes('acier') && quantity >= 2) {
      return `🎁 Offre spéciale : 2 bracelets à 10 000 FCFA (économie de ${(product.price * 2 - 10000).toLocaleString()} FCFA)`;
    }
    
    if (productName.includes('personnalisé') && quantity >= 2) {
      return `🎁 Offre spéciale : 2 bracelets à 15 000 FCFA (économie de ${(product.price * 2 - 15000).toLocaleString()} FCFA)`;
    }
    
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const unitPrice = getEffectivePrice();
    const total = getTotalPrice();
    const discountMessage = getDiscountMessage();
    
    let locationLine = `📍 Localisation: ${getLocationText(formData.location)}%0A`;
    if (formData.location === 'abidjan') {
      if (formData.city) locationLine += `🏙️ Commune: ${formData.city}%0A`;
      if (formData.quartier) locationLine += `🏘️ Quartier: ${formData.quartier}%0A`;
      locationLine += `📦 Livraison: à vos frais%0A`;
    } else if (formData.location === 'interior') {
      if (formData.city) locationLine += `🏙️ Ville: ${formData.city}%0A`;
      locationLine += `🚛 Expédition: partout en CI 🇨🇮%0A`;
    } else {
      if (formData.city) locationLine += `🏙️ Ville: ${formData.city}%0A`;
      if (formData.country) locationLine += `🌍 Pays: ${formData.country}%0A`;
    }
    
    // Format WhatsApp message
    let message = `🛍️ COMMANDE TradeSop%0A` +
      `👤 ${formData.firstName} ${formData.lastName}%0A` +
      `📞 ${formData.phone}%0A` +
      locationLine +
      `📦 ${product.name}%0A` +
      `${product.selectedColor ? `🔹 Couleur: ${product.selectedColor}%0A` : ''}` +
      `🔹 Qté: ${quantity}%0A` +
      `🔹 Prix: ${formatPrice(unitPrice)}%0A`;

    if (discountMessage) {
      message += `🔹 ${discountMessage}%0A`;
    }

    message += `💰 Total: ${formatPrice(total)}%0A` +
      `💳 ${getPaymentMethod(formData.location)}%0A` +
      `${formData.notes ? `📝 ${formData.notes}%0A` : ''}` +
      `📲 +225 0701006360`;

    // Ajouter le message de réduction si applicable
    if (discountMessage) {
      message += `🎁 ${discountMessage}%0A`;
    }

    // Ajouter les notes si présentes
    if (formData.notes) {
      message += `📝 Notes: ${formData.notes}%0A`;
    }

    message += `%0A⏰ Commande envoyée depuis le site TradeSop  %0A` +
      `📲 +225 0701006360`;

    // Rediriger vers WhatsApp avec le bon numéro
    window.open(`https://wa.me/2250701006360?text=${message}`, '_blank');
    
    // Show success message
    toast.success('Commande envoyée sur WhatsApp !', {
      position: 'top-center',
      style: {
        borderRadius: '12px',
        background: '#10B981',
        color: '#fff',
      },
    });
    
    // Close form and reset
    onClose();
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      location: 'abidjan',
      country: '',
      city: '',
      quartier: '',
      notes: '',
    });
  };

  const getLocationText = (location: string) => {
    const locations: { [key: string]: string } = {
      abidjan: 'Abidjan',
      interior: 'Intérieur de la Côte d\'Ivoire',
      // exterior: 'Extérieur du pays',
    };
    return locations[location] || location;
  };

  const getPaymentMethod = (location: string) => {
    switch (location) {
      case 'abidjan': return '💵 Paiement à la livraison';
      case 'interior': return '💰 Paiement 100% requis avant expédition';
      case 'exterior': return '🌍 Paiement total + frais d\'expédition requis';
      default: return '';
    }
  };

  const getPaymentMessage = (location: string) => {
    switch (location) {
      case 'abidjan':
        return {
          title: 'Paiement à la livraison',
          description: 'Vous payez directement à la réception de votre commande à Abidjan',
          color: 'text-copper-600',
          bgColor: 'bg-copper-50',
          icon: CheckCircle
        };
      case 'interior':
        return {
          title: 'Paiement 100% requis avant expédition',
          description: 'Le paiement total est requis avant l\'expédition vers l\'intérieur du pays',
          color: 'text-amber-600',
          bgColor: 'bg-amber-50',
          icon: AlertCircle
        };
      case 'exterior':
        return {
          title: 'Paiement total requis',
          description: 'Le paiement total + frais d\'expédition est requis pour les livraisons internationales',
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          icon: Info
        };
      default:
        return {
          title: '',
          description: '',
          color: '',
          bgColor: '',
          icon: Info
        };
    }
  };

  const formatPrice = (price: number) => `${price.toLocaleString()} FCFA`;

  const paymentInfo = getPaymentMessage(formData.location);
  const discountMessage = getDiscountMessage();
  const effectivePrice = getEffectivePrice();
  const totalPrice = getTotalPrice();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-end justify-center p-4 md:items-center"
          >
            <div className="bg-white rounded-t-3xl md:rounded-3xl w-full md:max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-white border-b border-beige-100 rounded-t-3xl md:rounded-t-3xl">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Confirmer votre commande</h2>
                  <p className="mt-1 text-sm text-gray-500">Remplissez vos informations de livraison</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 transition-colors rounded-lg hover:bg-beige-100"
                  aria-label="Fermer"
                >
                  <X size={22} className="text-gray-600" />
                </button>
              </div>

              {/* Product Summary */}
              <div className="p-5 border-b border-beige-100 bg-gradient-to-r from-copper-50 to-beige-50">
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-20 h-20 shadow-sm rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{product.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <p className="text-sm text-gray-600">Quantité: <span className="font-semibold">{quantity}</span></p>
                        {product.selectedColor && (
                          <p className="text-sm text-gray-600">Couleur: <span className="font-semibold">{product.selectedColor}</span></p>
                        )}
                        {effectivePrice !== product.price && quantity >= 2 ? (
                          <>
                            <p className="text-sm text-gray-500 line-through">
                              Prix unitaire: {formatPrice(product.price)}
                            </p>
                            <p className="text-sm font-semibold text-copper-600">
                              Prix promo: {formatPrice(effectivePrice)}
                            </p>
                          </>
                        ) : (
                          <p className="text-sm text-gray-600">
                            Prix unitaire: <span className="font-semibold">{formatPrice(effectivePrice)}</span>
                          </p>
                        )}
                        {formData.location === 'abidjan' && (
                          <p className="text-xs font-medium text-copper-600">📦 Livraison à vos frais</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-copper-600">{formatPrice(totalPrice)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Discount Banner */}
                {discountMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-3 py-2 mt-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50"
                  >
                    <Gift size={16} className="text-green-600" />
                    <p className="text-xs font-medium text-green-700">{discountMessage}</p>
                  </motion.div>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-5">
                {/* Name fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                    placeholder="+225 00 00 00 00"
                  />
                  <p className="mt-1 text-xs text-gray-500">Nous vous contacterons sur ce numéro WhatsApp</p>
                </div>

                {/* Location */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Localisation de livraison *
                  </label>
                  
                  <div className="space-y-3">
                    {[
                      { value: 'abidjan', label: 'Abidjan', icon: Home, description: 'Livraison partout à Abidjan' },
                      { value: 'interior', label: 'Intérieur de la Côte d\'Ivoire', icon: MapPin, description: 'Expédition partout en CI 🇨🇮' },
                      // { value: 'exterior', label: 'Extérieur du pays', icon: Globe, description: 'Expédition internationale' },
                    ].map((option) => {
                      const Icon = option.icon;
                      return (
                        <label 
                          key={option.value} 
                          className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            formData.location === option.value 
                              ? 'border-copper-500 bg-copper-50' 
                              : 'border-gray-200 hover:border-copper-200 hover:bg-beige-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="location"
                            value={option.value}
                            checked={formData.location === option.value}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value as any, city: '', country: '', quartier: '' })}
                            className="w-4 h-4 mt-1 text-copper-600"
                          />
                          <div className="flex-1 ml-4">
                            <div className="flex items-center">
                              <Icon size={20} className="mr-3 text-gray-600" />
                              <span className="font-semibold text-gray-900">{option.label}</span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 ml-7">{option.description}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>

                  {/* Payment Method Info */}
                  {paymentInfo.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`${paymentInfo.bgColor} rounded-xl p-4 mt-3 border ${paymentInfo.color.replace('text-', 'border-')}/20`}
                    >
                      <div className="flex items-start">
                        <paymentInfo.icon className={`w-5 h-5 mt-0.5 mr-3 ${paymentInfo.color}`} />
                        <div>
                          <p className={`font-semibold ${paymentInfo.color}`}>{paymentInfo.title}</p>
                          <p className="mt-1 text-sm text-gray-700">{paymentInfo.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Commune + Quartier (if abidjan) */}
                {formData.location === 'abidjan' && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Commune *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                        placeholder="Ex: Cocody, Yopougon, Plateau..."
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Quartier *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.quartier || ''}
                        onChange={(e) => setFormData({ ...formData, quartier: e.target.value })}
                        className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                        placeholder="Ex: Angré, Riviera, Adjamé..."
                      />
                      <p className="mt-2 text-xs text-gray-500">Précisez votre quartier pour une livraison rapide</p>
                    </motion.div>
                  </>
                )}

                {/* City (if interior) */}
                {formData.location === 'interior' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Ville de livraison *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                      placeholder="Ex: Bouaké, Yamoussoukro, San Pedro..."
                    />
                    <p className="mt-2 text-xs text-gray-500">Expédition partout en Côte d'Ivoire 🇨🇮</p>
                  </motion.div>
                )}

                {/* Country (if exterior) */}
                {formData.location === 'exterior' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Pays de livraison *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                      placeholder="Ex: France, Canada, Sénégal..."
                    />
                    <p className="mt-2 text-xs text-gray-500">Les frais d'expédition internationaux seront calculés après confirmation</p>
                  </motion.div>
                )}

                {/* Notes */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Notes supplémentaires (optionnel)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 transition-all border border-gray-300 resize-none rounded-xl focus:ring-2 focus:ring-copper-500 focus:border-transparent"
                    placeholder="Instructions spéciales, préférences de livraison, questions..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex items-center justify-center w-full py-4 space-x-3 text-lg font-bold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:shadow-lg"
                >
                  <span>📱</span>
                  <span>Envoyer la commande sur WhatsApp</span>
                </motion.button>

                {/* Info */}
                <p className="text-xs text-center text-gray-500">
                  Vous serez redirigé vers WhatsApp pour finaliser votre commande
                </p>
                <p className="text-xs text-center text-gray-400">
                  📲 Notre service client : +225 0701006360
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductOrderForm;