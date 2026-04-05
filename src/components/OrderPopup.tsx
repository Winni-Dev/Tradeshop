// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, MapPin, Globe, Home } from 'lucide-react';
// import { useCart } from '../hooks/useCart';
// import { OrderFormData } from '../types';

// interface OrderPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const OrderPopup: React.FC<OrderPopupProps> = ({ isOpen, onClose }) => {
//   const { items, clearCart } = useCart();
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

//   const getEffectivePrice = (item: { id: number; name: string; price: number }) => {
//     return item.price;
//   };

//   const getTotalWithLocation = () => {
//     return items.reduce((sum, item) => sum + getEffectivePrice(item) * item.quantity, 0);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const totalDisplay = getTotalWithLocation();
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
//     const message = `Nouvelle commande !%0A%0A` +
//       `👤 Client: ${formData.firstName} ${formData.lastName}%0A` +
//       `📞 Téléphone: ${formData.phone}%0A` +
//       locationLine +
//       `%0A🛒 Commande:%0A` +
//       items.map(item => `- ${item.name} x${item.quantity}: ${formatPrice(getEffectivePrice(item) * item.quantity)}`).join('%0A') +
//       `%0A%0A💰 Total: ${formatPrice(totalDisplay)}%0A` +
//       `💳 Mode paiement: ${getPaymentMethod(formData.location)}%0A` +
//       (formData.notes ? `%0A📝 Notes: ${formData.notes}` : '');

//     // Redirect to WhatsApp
//     window.open(`https://wa.me/2250714113978?text=${message}`, '_blank');
    
//     // Clear cart and close popup
//     clearCart();
//     onClose();
    
//     // Reset form
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
//     switch (location) {
//       case 'abidjan': return 'Abidjan';
//       case 'interior': return 'Intérieur du pays';
//       case 'exterior': return 'Extérieur du pays';
//       default: return '';
//     }
//   };

//   const getPaymentMethod = (location: string) => {
//     switch (location) {
//       case 'abidjan': return 'Paiement à la livraison';
//       case 'interior': return 'paiement 100% requis avant expédition';
//       case 'exterior': return 'paiement total + frais d\'expédition requis';
//       default: return '';
//     }
//   };

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('fr-CI', {
//       style: 'currency',
//       currency: 'XOF',
//       minimumFractionDigits: 0,
//     }).format(price);
//   };

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       <div className="fixed inset-0 z-50 overflow-y-auto">
//         <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 z-40 transition-opacity bg-black bg-opacity-50"
//           />

//           {/* Modal */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             className="relative z-50 inline-block overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl rounded-2xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
//           >
//             <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   Finaliser la commande
//                 </h3>
//                 <button
//                   onClick={onClose}
//                   className="text-gray-400 hover:text-gray-500"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               {/* Order summary */}
//               <div className="p-4 mb-6 bg-gray-50 rounded-xl">
//                 <h4 className="mb-3 font-semibold text-gray-900">Récapitulatif</h4>
//                 {items.map(item => (
//                   <div key={item.id} className="flex justify-between mb-2">
//                     <span className="text-gray-600">
//                       {item.name} x{item.quantity}
//                     </span>
//                     <span className="font-medium">
//                       {formatPrice(getEffectivePrice(item) * item.quantity)}
//                     </span>
//                   </div>
//                 ))}
//                 <div className="pt-2 mt-2 border-t">
//                   <div className="flex justify-between text-lg font-bold">
//                     <span>Total</span>
//                     <span className="text-primary-600">{formatPrice(getTotalWithLocation())}</span>
//                   </div>
//                   <div className="mt-2 text-sm text-gray-500">
//                     Mode de paiement: {getPaymentMethod(formData.location)}
//                     {formData.location === 'abidjan' && (
//                       <span className="block mt-1 font-medium text-green-600">📦 Livraison gratuite</span>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block mb-1 text-sm font-medium text-gray-700">
//                       Nom
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.lastName}
//                       onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block mb-1 text-sm font-medium text-gray-700">
//                       Prénom
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.firstName}
//                       onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block mb-1 text-sm font-medium text-gray-700">
//                     Téléphone (WhatsApp)
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     placeholder="Ex: +225701234567 (ou +33XXXXXXXXX)"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-1 text-sm font-medium text-gray-700">
//                     Localisation
//                   </label>
//                   <select
//                     value={formData.location}
//                     onChange={(e) => setFormData({ 
//                       ...formData, 
//                       location: e.target.value as OrderFormData['location'],
//                       city: '',
//                       country: '',
//                       quartier: ''
//                     })}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                   >
//                     <option value="abidjan">Abidjan</option>
//                     <option value="interior">Intérieur du pays</option>
//                     <option value="exterior">Extérieur du pays</option>
//                   </select>
//                   <div className="p-3 mt-2 rounded-lg bg-blue-50">
//                     <div className="flex items-start">
//                       <MapPin className="mt-1 mr-2 text-blue-500" size={16} />
//                       <span className="text-sm text-blue-700">
//                         {formData.location === 'abidjan' && 'Paiement à la livraison disponible'}
//                         {formData.location === 'interior' && 'paiement 100% requis avant expédition'}
//                         {formData.location === 'exterior' && 'paiement total + frais d\'expédition requis'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {formData.location === 'exterior' && (
//                   <div>
//                     <label className="block mb-1 text-sm font-medium text-gray-700">
//                       Pays
//                     </label>
//                     <div className="relative">
//                       <Globe className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={18} />
//                       <input
//                         type="text"
//                         required
//                         value={formData.country}
//                         onChange={(e) => setFormData({ ...formData, country: e.target.value })}
//                         className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {(formData.location === 'abidjan' || formData.location === 'interior') && (
//                   <div>
//                     <label className="block mb-1 text-sm font-medium text-gray-700">
//                       {formData.location === 'abidjan' ? 'Commune' : 'Ville'}
//                     </label>
//                     <div className="relative">
//                       <Home className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={18} />
//                       <input
//                         type="text"
//                         required
//                         value={formData.city}
//                         onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//                         className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                         placeholder={formData.location === 'abidjan' ? 'Ex: Cocody, Yopougon, Plateau...' : undefined}
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {formData.location === 'abidjan' && (
//                   <div>
//                     <label className="block mb-1 text-sm font-medium text-gray-700">
//                       Quartier *
//                     </label>
//                     <div className="relative">
//                       <MapPin className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={18} />
//                       <input
//                         type="text"
//                         required
//                         value={formData.quartier || ''}
//                         onChange={(e) => setFormData({ ...formData, quartier: e.target.value })}
//                         className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                         placeholder="Ex: Angré, Riviera, Adjamé..."
//                       />
//                     </div>
//                   </div>
//                 )}

//                 <div>
//                   <label className="block mb-1 text-sm font-medium text-gray-700">
//                     Notes supplémentaires (optionnel)
//                   </label>
//                   <textarea
//                     value={formData.notes}
//                     onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//                     rows={3}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                     placeholder="Précisions sur l'adresse, préférences de livraison..."
//                   />
//                 </div>

//                 <div className="p-4 bg-gray-50 rounded-xl">
//                   <div className="flex items-start">
//                     <div className="text-sm text-gray-600">
//                       <p className="mb-2">✅ Vos informations sont utilisées uniquement pour la commande</p>
//                       <p>✅ Pas de stockage sensible côté serveur</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <button
//                     type="button"
//                     onClick={onClose}
//                     className="flex-1 px-6 py-3 font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
//                   >
//                     Annuler
//                   </button>
//                   <button
//                     type="submit"
//                     className="flex-1 px-6 py-3 font-semibold text-white rounded-lg bg-primary-600 hover:bg-primary-700"
//                   >
//                     Commander sur WhatsApp
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default OrderPopup;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Globe, Home, CheckCircle, Gift } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { OrderFormData } from '../types';

interface OrderPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderPopup: React.FC<OrderPopupProps> = ({ isOpen, onClose }) => {
  const { items, clearCart } = useCart();
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
  const getEffectivePrice = (item: { id: number; name: string; price: number; quantity: number }) => {
    const productName = item.name.toLowerCase();
    const quantity = item.quantity;
    
    // Réduction pour le bracelet acier inoxydable (2 bracelets à 10 000 FCFA)
    if ((productName.includes('acier') || productName.includes('inoxydable')) && quantity >= 2) {
      return 5000; // 10 000 / 2 = 5 000 par bracelet
    }
    
    // Réduction pour le bracelet personnalisé (2 bracelets à 15 000 FCFA)
    if (productName.includes('personnalisé') && quantity >= 2) {
      return 7500; // 15 000 / 2 = 7 500 par bracelet
    }
    
    // Pas de réduction pour les autres produits
    return item.price;
  };

  // Calcul du total avec réductions
  const getTotalWithLocation = () => {
    return items.reduce((sum, item) => {
      const effectivePrice = getEffectivePrice(item);
      return sum + effectivePrice * item.quantity;
    }, 0);
  };

  // Vérifier s'il y a des réductions appliquées
  const hasDiscount = () => {
    return items.some(item => {
      const productName = item.name.toLowerCase();
      const quantity = item.quantity;
      return ((productName.includes('acier') || productName.includes('inoxydable')) && quantity >= 2) ||
             (productName.includes('personnalisé') && quantity >= 2);
    });
  };

  // Message de réduction global
  const getDiscountMessage = () => {
    const discounts = [];
    for (const item of items) {
      const productName = item.name.toLowerCase();
      const quantity = item.quantity;
      if ((productName.includes('acier') || productName.includes('inoxydable')) && quantity >= 2) {
        discounts.push(`🎁 Bracelet Acier : ${quantity} bracelets à ${formatPrice(quantity * 5000)} (au lieu de ${formatPrice(quantity * 6000)})`);
      }
      if (productName.includes('personnalisé') && quantity >= 2) {
        discounts.push(`🎁 Bracelet Personnalisé : ${quantity} bracelets à ${formatPrice(quantity * 7500)} (au lieu de ${formatPrice(quantity * 8000)})`);
      }
    }
    return discounts;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const totalDisplay = getTotalWithLocation();
    const discounts = getDiscountMessage();
    
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
    let message = `🛍️ NOUVELLE COMMANDE TradeSop 🛍️%0A%0A` +
      `👤 Client: ${formData.firstName} ${formData.lastName}%0A` +
      `📞 Téléphone: ${formData.phone}%0A` +
      locationLine +
      `%0A📦 DÉTAIL DE LA COMMANDE:%0A` +
      `━━━━━━━━━━━━━━━━━━%0A`;
    
    // Ajouter chaque article avec son prix réel
    items.forEach(item => {
      const effectivePrice = getEffectivePrice(item);
      const originalPrice = item.price;
      const hasItemDiscount = effectivePrice !== originalPrice;
      
      message += `🔹 ${item.name} x${item.quantity}`;
      if (hasItemDiscount) {
        message += ` → ${formatPrice(effectivePrice * item.quantity)} (promo)`;
      } else {
        message += ` → ${formatPrice(effectivePrice * item.quantity)}`;
      }
      message += `%0A`;
    });
    
    message += `━━━━━━━━━━━━━━━━━━%0A` +
      `💰 TOTAL: ${formatPrice(totalDisplay)}%0A` +
      `%0A💳 MODE DE PAIEMENT:%0A` +
      `━━━━━━━━━━━━━━━━━━%0A` +
      `${getPaymentMethod(formData.location)}%0A`;
    
    // Ajouter les messages de réduction
    if (discounts.length > 0) {
      message += `%0A🎁 OFFRE APPLIQUÉE:%0A` +
        `━━━━━━━━━━━━━━━━━━%0A`;
      discounts.forEach(d => {
        message += `${d}%0A`;
      });
    }
    
    // Ajouter les notes si présentes
    if (formData.notes) {
      message += `%0A📝 Notes: ${formData.notes}%0A`;
    }

    message += `%0A⏰ Commande envoyée depuis le site TradeSop %0A` +
      `📲 +225 0701006360`;

    // Rediriger vers WhatsApp avec le bon numéro
    window.open(`https://wa.me/2250701006360?text=${message}`, '_blank');
    
    // Clear cart and close popup
    clearCart();
    onClose();
    
    // Reset form
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
    switch (location) {
      case 'abidjan': return 'Abidjan';
      case 'interior': return 'Intérieur de la Côte d\'Ivoire';
      case 'exterior': return 'Extérieur du pays';
      default: return '';
    }
  };

  const getPaymentMethod = (location: string) => {
    switch (location) {
      case 'abidjan': return '💵 Paiement à la livraison';
      case 'interior': return '💰 Paiement 100% requis avant expédition';
      case 'exterior': return '🌍 Paiement total + frais d\'expédition requis';
      default: return '';
    }
  };

  const getPaymentInfo = (location: string) => {
    switch (location) {
      case 'abidjan':
        return {
          text: 'Paiement à la livraison disponible',
          color: 'text-amber-600',
          bgColor: 'bg-amber-50',
          icon: CheckCircle
        };
      case 'interior':
        return {
          text: 'Paiement 100% requis avant expédition',
          color: 'text-amber-600',
          bgColor: 'bg-amber-50',
          icon: CheckCircle
        };
      case 'exterior':
        return {
          text: 'Paiement total + frais d\'expédition requis',
          color: 'text-amber-600',
          bgColor: 'bg-amber-50',
          icon: CheckCircle
        };
      default:
        return {
          text: '',
          color: '',
          bgColor: '',
          icon: CheckCircle
        };
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CI', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const paymentInfo = getPaymentInfo(formData.location);
  const discounts = getDiscountMessage();
  const hasActiveDiscount = hasDiscount();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 transition-opacity bg-black bg-opacity-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-50 inline-block overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl rounded-2xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Finaliser la commande
                </h3>
                <button
                  onClick={onClose}
                  className="p-1 text-gray-400 transition-colors rounded-lg hover:text-gray-500 hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Order summary */}
              <div className="p-4 mb-6 bg-gray-50 rounded-xl">
                <h4 className="mb-3 font-semibold text-gray-900">Récapitulatif</h4>
                {items.map(item => {
                  const effectivePrice = getEffectivePrice(item);
                  const hasItemDiscount = effectivePrice !== item.price;
                  const itemTotal = effectivePrice * item.quantity;
                  const originalTotal = item.price * item.quantity;
                  
                  return (
                    <div key={item.id} className="flex justify-between mb-2">
                      <span className="text-gray-600">
                        {item.name} x{item.quantity}
                      </span>
                      <div className="text-right">
                        {hasItemDiscount ? (
                          <>
                            <span className="font-medium text-amber-600">
                              {formatPrice(itemTotal)}
                            </span>
                            <span className="ml-2 text-xs text-gray-400 line-through">
                              {formatPrice(originalTotal)}
                            </span>
                          </>
                        ) : (
                          <span className="font-medium text-gray-700">
                            {formatPrice(itemTotal)}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
                
                {/* Discount banner */}
                {hasActiveDiscount && (
                  <div className="pt-3 mt-3 border-t border-gray-200">
                    {discounts.map((discount, idx) => (
                      <div key={idx} className="flex items-center gap-2 mb-1 text-sm text-amber-600">
                        <Gift size={14} />
                        <span>{discount}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="pt-3 mt-3 border-t">
                  <div className="flex items-baseline justify-between">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-amber-600">
                      {formatPrice(getTotalWithLocation())}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className={`${paymentInfo.bgColor} rounded-lg p-3`}>
                      <div className="flex items-start">
                        <paymentInfo.icon className={`${paymentInfo.color} mt-0.5 mr-2 flex-shrink-0`} size={16} />
                        <span className={`text-sm ${paymentInfo.color}`}>
                          {paymentInfo.text}
                        </span>
                      </div>
                    </div>
                    {formData.location === 'abidjan' && (
                      <p className="mt-2 text-xs text-gray-500">
                        📦 Livraison à vos frais à Abidjan
                      </p>
                    )}
                    {formData.location === 'interior' && (
                      <p className="mt-2 text-xs text-gray-500">
                        🚛 Expédition partout en Côte d'Ivoire
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Prénom
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2 transition-all border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2 transition-all border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Téléphone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 transition-all border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="+225 00 00 00 00"
                  />
                  <p className="mt-1 text-xs text-gray-400">Nous vous contacterons sur ce numéro</p>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Localisation de livraison
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      location: e.target.value as OrderFormData['location'],
                      city: '',
                      country: '',
                      quartier: ''
                    })}
                    className="w-full px-4 py-2 transition-all border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="abidjan">📍 Abidjan</option>
                    <option value="interior">🚛 Intérieur de la Côte d'Ivoire</option>
                    <option value="exterior">🌍 Extérieur du pays</option>
                  </select>
                </div>

                {formData.location === 'exterior' && (
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Pays
                    </label>
                    <div className="relative">
                      <Globe className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={18} />
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-2 pl-10 transition-all border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Ex: France, Canada, Sénégal..."
                      />
                    </div>
                  </div>
                )}

                {(formData.location === 'abidjan' || formData.location === 'interior') && (
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      {formData.location === 'abidjan' ? 'Commune' : 'Ville'}
                    </label>
                    <div className="relative">
                      <Home className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={18} />
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2 pl-10 transition-all border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder={formData.location === 'abidjan' ? 'Ex: Cocody, Yopougon, Plateau...' : 'Ex: Bouaké, Yamoussoukro...'}
                      />
                    </div>
                  </div>
                )}

                {formData.location === 'abidjan' && (
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Quartier
                    </label>
                    <div className="relative">
                      <MapPin className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={18} />
                      <input
                        type="text"
                        required
                        value={formData.quartier || ''}
                        onChange={(e) => setFormData({ ...formData, quartier: e.target.value })}
                        className="w-full px-4 py-2 pl-10 transition-all border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Ex: Angré, Riviera, Adjamé..."
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Notes supplémentaires (optionnel)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 transition-all border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Instructions spéciales, préférences de livraison, questions..."
                  />
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-600">
                      <p>✅ Vos informations sont utilisées uniquement pour la commande</p>
                      <p className="mt-1">✅ Pas de stockage sensible côté serveur</p>
                      <p className="mt-1">✅ Vous serez redirigé vers WhatsApp pour finaliser</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 font-medium text-gray-600 transition-all border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 font-semibold text-white transition-all rounded-lg bg-amber-500 hover:bg-amber-600 hover:shadow-md"
                  >
                    Commander sur WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default OrderPopup;