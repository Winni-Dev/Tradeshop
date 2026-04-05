


import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Globe, CreditCard, Package } from 'lucide-react';
import wave from '../IMAGES/wave.png';

const Delivery: React.FC = () => {
  const deliveryOptions = [
    {
      id: 1,
      title: 'Abidjan',
      icon: <MapPin className="text-green-600" size={24} />,
      description: 'Livraison sous 24 heures',
      price: 'Frais de livraison à votre charge',
      payment: 'Paiement à la livraison',
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      id: 2,
      title: 'Intérieur du pays',
      icon: <Truck className="text-blue-600" size={24} />,
      description: 'Expédition partout en Côte d\'Ivoire',
      price: 'Frais selon localisation',
      payment: 'Paiement total requis avant expédition',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      id: 3,
      title: 'International',
      icon: <Globe className="text-purple-600" size={24} />,
      description: 'Expédition mondiale',
      price: 'Sur devis',
      payment: 'Paiement total + frais d\'expédition',
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Bracelet Acier Inoxydable',
      price: '6 000 FCFA',
      promo: '2 bracelets à 10 000 FCFA',
      colors: 'Or et Argent'
    },
    {
      id: 2,
      name: 'Bracelet Cuivre Naturel',
      price: '15 000 FCFA',
      promo: '',
      colors: 'Cuivre naturel'
    },
    {
      id: 3,
      name: 'Bracelet Personnalisé',
      price: '8 000 FCFA',
      promo: '2 bracelets à 15 000 FCFA',
      colors: 'Or et Argent'
    },
    {
      id: 4,
      name: 'Gourde Cuivre Naturel',
      price: '25 000 FCFA',
      promo: '',
      colors: 'Cuivre naturel'
    }
  ];

  const paymentMethods = [
    { id: 1, name: 'Cash à la livraison', icon: '💵', available: 'Abidjan uniquement' },
    { id: 2, name: 'Mobile Money', icon: '📱', available: 'Partout' },
    { id: 3, name: 'Virement bancaire', icon: '🏦', available: 'Partout' },
    { id: 4, name: 'Wave', icon: <img src={wave} alt="Wave" className="w-24 h-10 mx-auto" />, available: 'Partout' }
  ];

  return (
    <section id="livraison" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Livraison & Paiement
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Livraison partout à Abidjan et expédition dans toute la Côte d'Ivoire 🇨🇮
          </p>
        </motion.div>

        {/* Grille des prix produits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="mb-6 text-2xl font-bold text-center text-gray-900">Nos tarifs</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 text-center transition-all border border-gray-200 shadow-lg bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl"
              >
                <Package className="mx-auto mb-4 text-primary-600" size={32} />
                <h4 className="mb-2 text-lg font-bold text-gray-900">{product.name}</h4>
                <div className="mb-2 text-2xl font-bold text-primary-600">{product.price}</div>
                {product.promo && (
                  <p className="mb-2 text-sm font-medium text-green-600">{product.promo}</p>
                )}
                <p className="text-sm text-gray-500">Couleurs : {product.colors}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Delivery options */}
        <div className="grid gap-8 mb-16 md:grid-cols-3">
          {deliveryOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${option.color} rounded-2xl p-6 border ${option.borderColor} shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white shadow-sm rounded-xl">
                  {option.icon}
                </div>
                <span className="text-lg font-semibold text-gray-700">
                  {option.price}
                </span>
              </div>
              
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {option.title}
              </h3>
              
              <p className="mb-4 text-gray-600">
                {option.description}
              </p>
              
              <div className="flex items-center space-x-2 text-sm">
                <CreditCard size={16} className="text-gray-500" />
                <span className="font-medium">{option.payment}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informations supplémentaires */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl p-8 mx-auto mb-12 bg-gradient-to-r from-primary-50 to-beige-50 rounded-3xl"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">📦 Bracelet Acier Inoxydable</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Ne noircit pas</li>
                <li>✓ Ne déteint pas</li>
                <li>✓ Couleurs : Or et Argent</li>
                <li>✓ Pour Homme et Femme</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">🟤 Bracelet Cuivre Naturel</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Ne déteint pas</li>
                <li>✓ Ne noircit pas</li>
                <li>✓ Aide à soulager les douleurs articulaires</li>
                <li>✓ Favorise la circulation sanguine</li>
                <li>✓ Réduit le stress et la fatigue</li>
                <li>✓ Résistant et durable</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Payment methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl p-8 mx-auto bg-gradient-to-r from-primary-50 to-beige-50 rounded-3xl"
        >
          <h3 className="mb-6 text-2xl font-bold text-center text-gray-900">
            Méthodes de paiement acceptées
          </h3>
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="p-4 text-center transition-shadow bg-white shadow-sm rounded-xl hover:shadow-md"
              >
                <div className="mb-2 text-3xl">{method.icon}</div>
                <div className="font-medium text-gray-900">{method.name}</div>
                <div className="mt-1 text-xs text-gray-500">{method.available}</div>
              </div>
            ))}
          </div>
          
          <div className="p-4 mt-8 bg-white rounded-xl">
            <p className="text-center text-gray-600">
              <span className="font-semibold">📲 Contact : +225 0701006360</span>
            </p>
            <p className="mt-2 text-sm text-center text-gray-500">
              Livraison gratuite à Abidjan pour le bracelet en cuivre ✅
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Delivery;