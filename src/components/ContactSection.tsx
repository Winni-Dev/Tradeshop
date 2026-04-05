// import React from 'react';
// import { motion } from 'framer-motion';
// import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const ContactSection: React.FC = () => {
//   const contactInfo = [
//     {
//       icon: <Phone className="text-primary-600" size={24} />,
//       title: 'Téléphone',
//       value: '+2250714113978',
//       description: 'Disponible sur WhatsApp'
//     },
//     {
//       icon: <Mail className="text-primary-600" size={24} />,
//       title: 'Email',
//       value: 'noevacare@gmail.com',
//       description: 'Réponse sous 24h'
//     },
//     {
//       icon: <MapPin className="text-primary-600" size={24} />,
//       title: 'Localisation',
//       value: 'Abidjan, Côte d\'Ivoire',
//       description: 'Livraison nationale et internationale'
//     }
//   ];

//   return (
//     <section id="contact-section" className="py-20 bg-beige-50">
//       <div className="container px-4 mx-auto">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* Contact info */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
//               Besoin d'aide ?
//             </h2>
            
//             <p className="mb-8 text-gray-600">
//               Notre équipe est disponible pour répondre à toutes vos questions. 
//               Contactez-nous par WhatsApp pour une réponse rapide, ou utilisez 
//               notre formulaire de contact pour les demandes détaillées.
//             </p>
            
//             <div className="mb-8 space-y-6">
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="flex items-start space-x-4">
//                   <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-white shadow-sm rounded-xl">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">{info.title}</h3>
//                     <p className="font-medium text-gray-900">{info.value}</p>
//                     <p className="text-sm text-gray-600">{info.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* WhatsApp button */}
//             <a
//               href="https://wa.me/2250714113978"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center px-6 py-3 mb-4 mr-4 font-semibold text-white transition-colors bg-green-600 rounded-full hover:bg-green-700"
//             >
//               <MessageCircle className="mr-2" size={20} />
//               WhatsApp
//             </a>
            
//             {/* Contact page link */}
//             <Link
//               to="/contact"
//               className="inline-flex items-center px-6 py-3 font-semibold transition-colors border rounded-full border-primary-600 text-primary-600 hover:bg-primary-50"
//             >
//               Page Contact
//             </Link>
//           </motion.div>
          
//           {/* FAQ */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="p-8 bg-white shadow-lg rounded-3xl"
//           >
//             <h3 className="mb-6 text-2xl font-bold text-gray-900">
//               Questions fréquentes
//             </h3>
            
//             <div className="space-y-6">
//               {[
//                 {
//                   question: 'Combien de temps dure la livraison ?',
//                   answer: 'À Abidjan : 24h. Intérieur du pays : 2-3 jours. International : 5-7 jours.'
//                 },
//                 {
//                   question: 'Puis-je payer à la livraison ?',
//                   answer: 'Oui, uniquement pour les commandes à Abidjan. Pour l\'intérieur et l\'international, la totalité est requise.'
//                 },
//                 {
//                   question: 'Les produits sont-ils garantis ?',
//                   answer: 'Oui, tous nos produits sont garantis 30 jours. Si vous n\'êtes pas satisfait, contactez-nous.'
//                 },
//                 {
//                   question: 'Comment passer commande ?',
//                   answer: 'Ajoutez les produits au panier, cliquez sur "Commander", remplissez le formulaire et nous vous contacterons sur WhatsApp.'
//                 }
//               ].map((faq, index) => (
//                 <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
//                   <h4 className="mb-2 font-semibold text-gray-900">{faq.question}</h4>
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
            
//             <div className="p-4 mt-8 bg-primary-50 rounded-xl">
//               <p className="text-sm text-primary-700">
//                 💡 <strong>Astuce :</strong> Pour une réponse immédiate, contactez-nous directement 
//                 sur WhatsApp. Notre équipe est disponible du lundi au samedi de 8h à 20h.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-primary-600" size={24} />,
      title: 'Téléphone / WhatsApp',
      value: '+225 0701006360',
      description: 'Disponible pour vos commandes'
    },
    // {
    //   icon: <Mail className="text-primary-600" size={24} />,
    //   title: 'Email',
    //   value: 'noevacare@gmail.com',
    //   description: 'Réponse sous 24h'
    // },
    {
      icon: <MapPin className="text-primary-600" size={24} />,
      title: 'Localisation',
      value: 'Abidjan, Côte d\'Ivoire',
      description: 'Livraison partout à Abidjan et expédition dans toute la CI 🇨🇮'
    }
  ];

  return (
    <section id="contact-section" className="py-20 bg-beige-50">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Besoin d'aide ?
            </h2>
            
            <p className="mb-8 text-gray-600">
              Notre équipe est disponible pour répondre à toutes vos questions. 
              Contactez-nous par WhatsApp pour une réponse rapide, ou utilisez 
              notre formulaire de contact pour les demandes détaillées.
            </p>
            
            <div className="mb-8 space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-white shadow-sm rounded-xl">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    <p className="font-medium text-gray-900">{info.value}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* WhatsApp button */}
            <a
              href="https://wa.me/2250701006360"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 mb-4 mr-4 font-semibold text-white transition-colors bg-green-600 rounded-full hover:bg-green-700"
            >
              <MessageCircle className="mr-2" size={20} />
              Commander sur WhatsApp
            </a>
            
            {/* Contact page link */}
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 font-semibold transition-colors border rounded-full border-primary-600 text-primary-600 hover:bg-primary-50"
            >
              Page Contact
            </Link>
          </motion.div>
          
          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white shadow-lg rounded-3xl"
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Questions fréquentes
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Combien de temps dure la livraison ?',
                  answer: 'À Abidjan : livraison rapide. Intérieur du pays : 2-3 jours. International : 5-7 jours.'
                },
                {
                  question: 'Puis-je payer à la livraison ?',
                  answer: 'Oui, uniquement pour les commandes à Abidjan. Pour l\'intérieur et l\'international, le paiement total est requis avant expédition.'
                },
                {
                  question: 'Les produits sont-ils garantis ?',
                  answer: 'Oui, tous nos produits sont garantis. Les bracelets ne noircissent pas et ne déteignent pas.'
                },
                {
                  question: 'Comment passer commande ?',
                  answer: 'Ajoutez les produits au panier, cliquez sur "Commander", ou contactez-nous directement sur WhatsApp au +225 0701006360.'
                }
              ].map((faq, index) => (
                <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                  <h4 className="mb-2 font-semibold text-gray-900">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="p-4 mt-8 bg-primary-50 rounded-xl">
              <p className="text-sm text-primary-700">
                💡 <strong>Astuce :</strong> Pour une réponse immédiate, contactez-nous directement 
                sur WhatsApp au <strong className="text-primary-800">+225 0701006360</strong>. Notre équipe est disponible du lundi au samedi de 8h à 20h.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;