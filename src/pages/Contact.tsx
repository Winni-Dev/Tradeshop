

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';

// const ContactPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const whatsappMessage = `Nouveau message de contact !%0A%0A` +
//       `👤 Nom: ${formData.name}%0A` +
//       `📞 Téléphone: ${formData.phone}%0A` +
//       `%0A📝 Message:%0A${formData.message}`;

//     window.open(`https://wa.me/2250714113978?text=${whatsappMessage}`, '_blank');
//     setFormData({ name: '', phone: '', message: '' });
//   };

//   const contactInfo = [
//     {
//       icon: <Phone size={20} />,
//       title: 'Téléphone / WhatsApp',
//       value: '+225 07 14 11 39 78',
//       link: 'https://wa.me/2250714113978',
//       description: '7j/7 • 8h-20h'
//     },
//     {
//       icon: <Mail size={20} />,
//       title: 'Email',
//       value: 'noevacar@gmail.com',
//       link: 'mailto:noevacar@gmail.com',
//       description: 'Réponse sous 24h'
//     },
//     {
//       icon: <MapPin size={20} />,
//       title: 'Localisation',
//       value: 'Abidjan, Côte d\'Ivoire',
//       description: 'Livraison internationale'
//     }
//   ];

//   return (
//     <div className="min-h-screen px-4 pt-24 pb-20">
//       <div className="container mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-lg mx-auto mb-12 text-center"
//         >
//           <h1 className="mb-3 text-2xl font-medium text-gray-900 md:text-3xl">
//             Nous contacter
//           </h1>
//           <p className="text-sm text-gray-500">
//             Une question ? Notre équipe vous répond rapidement
//           </p>
//         </motion.div>

//         <div className="grid max-w-4xl gap-6 mx-auto lg:grid-cols-2">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="p-6 bg-white border border-gray-100 rounded-xl"
//           >
//             <h2 className="mb-6 text-lg font-medium text-gray-900">
//               Envoyez-nous un message
//             </h2>
            
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block mb-2 text-sm text-gray-600">
//                   Nom complet
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
//                   placeholder="Votre nom"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-2 text-sm text-gray-600">
//                   Téléphone / WhatsApp
//                 </label>
//                 <input
//                   type="tel"
//                   required
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
//                   placeholder="+225 00 00 00 00 ou +33 0 00 00 00 00"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-2 text-sm text-gray-600">
//                   Message
//                 </label>
//                 <textarea
//                   required
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   rows={4}
//                   className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg resize-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
//                   placeholder="Comment pouvons-nous vous aider ?"
//                 />
//               </div>
              
//               <button
//                 type="submit"
//                 className="flex items-center justify-center w-full py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800"
//               >
//                 <Send size={16} className="mr-2" />
//                 Envoyer via WhatsApp
//               </button>
//             </form>
//           </motion.div>

//           {/* Contact Info */}
//           <div className="space-y-6">
//             {/* Contact Cards */}
//             <div className="space-y-4">
//               {contactInfo.map((info, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="p-4 transition-colors bg-white border border-gray-100 rounded-xl hover:border-gray-300"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
//                       index === 0 ? 'bg-green-50' : 
//                       index === 1 ? 'bg-blue-50' : 
//                       'bg-gray-50'
//                     }`}>
//                       <div className={
//                         index === 0 ? 'text-green-600' : 
//                         index === 1 ? 'text-blue-600' : 
//                         'text-gray-600'
//                       }>
//                         {info.icon}
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="mb-1 text-sm font-medium text-gray-600">
//                         {info.title}
//                       </h3>
//                       {info.link ? (
//                         <a
//                           href={info.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="block text-base font-medium text-gray-900 hover:text-gray-700"
//                         >
//                           {info.value}
//                         </a>
//                       ) : (
//                         <p className="text-base font-medium text-gray-900">{info.value}</p>
//                       )}
//                       <p className="mt-1 text-xs text-gray-400">{info.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* WhatsApp Quick Action */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="p-6 bg-gray-900 rounded-xl"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
//                   <MessageCircle size={24} className="text-white" />
//                 </div>
//                 <div>
//                   <h3 className="mb-1 font-medium text-white">Réponse immédiate</h3>
//                   <p className="text-sm text-gray-300">Cliquez pour discuter en direct</p>
//                 </div>
//               </div>
//               <a
//                 href="https://wa.me/2250714113978"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block w-full py-3 text-sm font-medium text-center text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600"
//               >
//                 Ouvrir WhatsApp
//               </a>
//             </motion.div>

//             {/* Opening Hours */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="p-5 bg-white border border-gray-100 rounded-xl"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg">
//                   <Clock size={16} className="text-gray-600" />
//                 </div>
//                 <h3 className="text-sm font-medium text-gray-900">Horaires</h3>
//               </div>
//               <div className="space-y-2">
//                 {[
//                   { day: 'Lun - Dim', hours: '24H/24' },
//                   // { day: 'Samedi', hours: '9h - 18h' },
//                   // { day: 'Dimanche', hours: '10h - 16h' }
//                 ].map((schedule, index) => (
//                   <div key={index} className="flex items-center justify-between text-sm">
//                     <span className="text-gray-600">{schedule.day}</span>
//                     <span className="font-medium text-gray-900">{schedule.hours}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="max-w-4xl mx-auto mt-12"
//         >
//           <h2 className="mb-6 text-lg font-medium text-center text-gray-900">
//             Questions fréquentes
//           </h2>
//           <div className="grid gap-4 sm:grid-cols-2">
//             {[
//               {
//                 question: 'Comment suivre ma commande ?',
//                 answer: 'Numéro de suivi envoyé par WhatsApp après expédition.'
//               },
//               {
//                 question: 'Délai de livraison ?',
//                 answer: '24-48h à Abidjan, 3-5 jours ailleurs en Côte d\'Ivoire.'
//               },
//               {
//                 question: 'Politique de retour ?',
//                 answer: '14 jours pour retourner un produit non utilisé.'
//               },
//               {
//                 question: 'Modes de paiement ?',
//                 answer: 'Wave, Mobile Money, cash à la livraison.'
//               }
//             ].map((faq, index) => (
//               <div key={index} className="p-4 rounded-lg bg-gray-50">
//                 <h4 className="mb-2 text-sm font-medium text-gray-900">{faq.question}</h4>
//                 <p className="text-sm text-gray-600">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Clock, CheckCircle, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `📞 NOUVEAU MESSAGE NoévaCare 📞%0A%0A` +
      `👤 Nom: ${formData.name}%0A` +
      `📱 Téléphone: ${formData.phone}%0A` +
      `%0A📝 Message:%0A${formData.message}%0A%0A` +
      `---%0AMessage envoyé depuis le site NoévaCare`;

    window.open(`https://wa.me/2250701006360?text=${whatsappMessage}`, '_blank');
    setFormData({ name: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MessageCircle size={20} />,
      title: 'WhatsApp',
      value: '+225 07 01 00 63 60',
      link: 'https://wa.me/2250701006360',
      description: 'Réponse immédiate',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    // {
    //   icon: <Mail size={20} />,
    //   title: 'Email',
    //   value: 'noevacare@gmail.com',
    //   link: 'mailto:noevacare@gmail.com',
    //   description: 'Réponse sous 24h',
    //   bgColor: 'bg-amber-50',
    //   iconColor: 'text-amber-600'
    // },
    {
      icon: <MapPin size={20} />,
      title: 'Localisation',
      value: 'Abidjan, Côte d\'Ivoire',
      description: 'Livraison partout à Abidjan • Expédition CI 🇨🇮',
      bgColor: 'bg-gray-50',
      iconColor: 'text-gray-600'
    }
  ];

  const faqs = [
    {
      question: 'Comment passer commande ?',
      answer: 'Ajoutez vos produits au panier, remplissez le formulaire de commande, et nous vous contacterons sur WhatsApp pour confirmer.'
    },
    {
      question: 'Délai de livraison ?',
      answer: 'À Abidjan : livraison rapide. Intérieur du pays : 2-3 jours. International : 5-7 jours.'
    },
    {
      question: 'Quels modes de paiement ?',
      answer: 'Cash à la livraison (Abidjan uniquement), Mobile Money, Wave, ou virement bancaire.'
    },
    {
      question: 'Les bracelets sont-ils de qualité ?',
      answer: 'Oui, nos bracelets en acier inoxydable ne noircissent pas et ne déteignent pas. Le cuivre est 100% naturel.'
    }
  ];

  return (
    <div className="min-h-screen px-4 pt-24 pb-20 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto mb-12 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 mb-4 border border-gray-200 rounded-full bg-white/50">
            <MessageCircle size={14} className="mr-2 text-amber-500" />
            <span className="text-xs font-medium text-gray-500">Contactez-nous</span>
          </div>
          <h1 className="mb-3 text-2xl font-semibold text-gray-900 md:text-3xl">
            Nous contacter
          </h1>
          <p className="text-sm text-gray-500">
            Une question ? Notre équipe vous répond rapidement sur WhatsApp
          </p>
        </motion.div>

        <div className="grid max-w-4xl gap-8 mx-auto lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl"
          >
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm transition-all border border-gray-200 rounded-lg focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Téléphone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 text-sm transition-all border border-gray-200 rounded-lg focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  placeholder="+225 00 00 00 00"
                />
                <p className="mt-1 text-xs text-gray-400">Nous vous contacterons sur ce numéro</p>
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 text-sm transition-all border border-gray-200 rounded-lg resize-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center w-full py-3 text-sm font-medium text-white transition-all rounded-lg bg-amber-500 hover:bg-amber-600 hover:shadow-sm"
              >
                <Send size={16} className="mr-2" />
                Envoyer via WhatsApp
              </button>
            </form>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400">
                📱 Vous serez redirigé vers WhatsApp pour envoyer votre message
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-5">
            {/* Contact Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 transition-all bg-white border border-gray-100 rounded-xl hover:shadow-sm hover:border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${info.bgColor}`}>
                      <div className={info.iconColor}>
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-xs font-medium tracking-wider text-gray-500 uppercase">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-base font-semibold text-gray-900 transition-colors hover:text-amber-600"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-gray-900">{info.value}</p>
                      )}
                      <p className="mt-1 text-xs text-gray-400">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Quick Action */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">Réponse immédiate</h3>
                  <p className="text-sm text-white/80">Cliquez pour discuter en direct</p>
                </div>
              </div>
              <a
                href="https://wa.me/2250701006360"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-sm font-medium text-center transition-colors bg-white rounded-lg text-amber-600 hover:bg-gray-50"
              >
                Ouvrir WhatsApp
              </a>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-5 bg-white border border-gray-100 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50">
                  <Clock size={16} className="text-amber-500" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">Service client</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Lundi - Samedi</span>
                  <span className="font-medium text-gray-900">8h - 20h</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Dimanche</span>
                  <span className="font-medium text-gray-900">9h - 18h</span>
                </div>
                <div className="flex items-center gap-2 pt-2 mt-2 border-t border-gray-100">
                  <CheckCircle size={12} className="text-green-500" />
                  <p className="text-xs text-gray-500">Réponse garantie sous 30 minutes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="mb-6 text-center">
            <div className="inline-flex items-center px-4 py-2 mb-3 border border-gray-200 rounded-full">
              <span className="text-xs font-medium text-gray-500">FAQ</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Questions fréquentes
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-4 transition-all bg-gray-50 rounded-xl hover:bg-gray-100"
              >
                <h4 className="mb-2 text-sm font-semibold text-gray-900">{faq.question}</h4>
                <p className="text-sm leading-relaxed text-gray-500">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto mt-10 text-center"
        >
          <p className="text-xs text-gray-400">
            📦 Livraison partout à Abidjan • 🚛 Expédition partout en Côte d'Ivoire 🇨🇮
          </p>
          <p className="mt-2 text-xs text-gray-400">
            📲 Service client WhatsApp : <span className="font-medium text-amber-600">+225 07 01 00 63 60</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;