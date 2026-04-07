


// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { products } from '../data/products';
// import ProductOrderForm from '../components/ProductOrderForm';
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   ArrowLeft,
//   CheckCircle,
//   Truck,
//   Shield,
//   Star,
//   Heart,
//   Zap,
//   Leaf,
//   Sparkles,
//   ShoppingCart,
//   Minus,
//   Plus
// } from 'lucide-react';

// // Import testimonial images
// import TE1 from '../IMAGES/TE1.jpg';
// import TE2 from '../IMAGES/TE2.jpg';
// import TE3 from '../IMAGES/TE3.jpg';
// import TE4 from '../IMAGES/TE4.jpg';
// import TE5 from '../IMAGES/TE5.jpg';
// import TE6 from '../IMAGES/TE6.jpg';
// import TE7 from '../IMAGES/TE7.jpg';

// // Import proof of shipping images
// import P1 from '../IMAGES/P1.jpeg';
// import P2 from '../IMAGES/P2.jpeg';
// import P3 from '../IMAGES/P3.jpeg';
// import P4 from '../IMAGES/P4.jpeg';
// import P5 from '../IMAGES/P5.jpeg';
// import P6 from '../IMAGES/P6.jpeg';
// import P7 from '../IMAGES/P7.jpeg';
// import P8 from '../IMAGES/P8.jpeg';
// import P9 from '../IMAGES/P9.jpeg';
// import P10 from '../IMAGES/P10.jpeg';

// const ProductDetail: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const product = products.find((p) => p.id === Number(id));
//   const [quantity, setQuantity] = useState(1);
//   const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
//   const [currentProofIndex, setCurrentProofIndex] = useState(0);
//   const [isImageLoading, setIsImageLoading] = useState(true);

//   // Testimonial and proof images based on product
//   const testimonialImages = product?.id === 1 ? [TE1, TE2, TE3, TE4, TE5, TE6, TE7] : [TE4, TE5, TE6, TE7];
//   const proofImages = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10];

//   // Auto-rotate testimonial carousel
//   useEffect(() => {
//     if (product?.id !== 1) return;
//     const interval = setInterval(() => {
//       setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [testimonialImages.length, product?.id]);

//   // Auto-rotate proof carousel for all products
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [proofImages.length]);

//   const handleOpenOrder = () => {
//     setIsOrderFormOpen(true);
//   };

//   const nextTestimonial = useCallback(() => {
//     setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialImages.length);
//   }, [testimonialImages.length]);

//   const prevTestimonial = useCallback(() => {
//     setCurrentTestimonialIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
//   }, [testimonialImages.length]);

//   const nextProof = useCallback(() => {
//     setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
//   }, [proofImages.length]);

//   const prevProof = useCallback(() => {
//     setCurrentProofIndex((prev) => (prev - 1 + proofImages.length) % proofImages.length);
//   }, [proofImages.length]);

//   if (!product) {
//     return (
//       <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-b from-beige-50 to-white">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="w-full max-w-md p-8 text-center bg-white shadow-2xl rounded-3xl"
//         >
//           <h2 className="mb-4 text-2xl font-bold text-gray-900">Produit introuvable</h2>
//           <button
//             onClick={() => navigate(-1)}
//             className="px-6 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:shadow-lg"
//           >
//             ← Retour aux produits
//           </button>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
//       {/* Header */}
//       <div className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur-md">
//         <div className="max-w-4xl px-4 py-3 mx-auto">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center space-x-2 text-gray-700 transition-colors group hover:text-primary-600"
//           >
//             <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
//             <span className="text-sm font-medium">Retour</span>
//           </button>
//         </div>
//       </div>

//       {/* Main Product Card - Single card for mobile */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-4xl px-4 py-4 mx-auto"
//       >
//         {/* Mobile: Single Card Layout */}
//         <div className="overflow-hidden bg-white border border-gray-100 shadow-xl lg:hidden rounded-3xl">
//           {/* Product Image */}
//           <div className="relative">
//             {isImageLoading && (
//               <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
//             )}
//             <img
//               src={product.image}
//               alt={product.name}
//               className={`w-full h-[250px] object-cover transition-opacity duration-300 ${
//                 isImageLoading ? 'opacity-0' : 'opacity-100'
//               }`}
//               onLoad={() => setIsImageLoading(false)}
//             />
//             <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
//               <span className="text-xs font-semibold text-primary-600">Nouveau</span>
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="p-5">
//             <h1 className="mb-2 text-2xl font-bold text-gray-900">{product.name}</h1>
//             <p className="mb-4 text-sm text-gray-600">{product.description}</p>
            
//             {/* Ratings */}
//             <div className="flex items-center mb-4 space-x-2">
//               <div className="flex">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
//                 ))}
//               </div>
//               <span className="text-xs text-gray-600">4.8 (2.5k+ avis)</span>
//             </div>

//             {/* Price */}
//             <div className="p-4 mb-4 bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="mb-1 text-xs text-gray-600">Prix unitaire</p>
//                   <div className="flex items-baseline gap-2">
//                     <p className="text-xl font-bold text-primary-600">
//                       {product.price.toLocaleString()} FCFA
//                     </p>
//                     <span className="text-xs text-gray-500 line-through">
//                       {(product.price * 1.3).toLocaleString()} FCFA
//                     </span>
//                   </div>
//                 </div>
//                 <div className="px-2 py-1 text-green-800 bg-green-100 rounded-lg">
//                   <p className="text-xs font-semibold">-30%</p>
//                 </div>
//               </div>
//             </div>

//             {/* Quantity and Order Section - On same card */}
//             <div className="pt-4 space-y-4 border-t border-gray-100">
//               {/* Quantity Selector */}
//               <div className="flex items-center justify-between">
//                 <p className="font-medium text-gray-900">Quantité</p>
//                 <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-3 py-1.5">
//                   <button
//                     onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                     className="flex items-center justify-center text-gray-700 transition-colors bg-white rounded-full shadow-sm w-7 h-7 hover:bg-gray-100"
//                     aria-label="Diminuer la quantité"
//                   >
//                     <Minus size={14} />
//                   </button>
//                   <span className="text-lg font-bold text-gray-900 min-w-[30px] text-center">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity((q) => q + 1)}
//                     className="flex items-center justify-center text-gray-700 transition-colors bg-white rounded-full shadow-sm w-7 h-7 hover:bg-gray-100"
//                     aria-label="Augmenter la quantité"
//                   >
//                     <Plus size={14} />
//                   </button>
//                 </div>
//               </div>

//               {/* Total Price */}
//               <div className="flex items-center justify-between py-2">
//                 <span className="text-gray-600">Total :</span>
//                 <div className="text-right">
//                   <p className="text-xl font-bold text-primary-600">
//                     {(product.price * quantity).toLocaleString()} FCFA
//                   </p>
//                   <p className="text-xs text-gray-500">Livraison incluse</p>
//                 </div>
//               </div>

//               {/* Order Button */}
//               <motion.button
//                 whileTap={{ scale: 0.98 }}
//                 onClick={handleOpenOrder}
//                 className="flex items-center justify-center w-full py-3 space-x-2 font-bold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg"
//               >
//                 <ShoppingCart size={20} />
//                 <span>Commander maintenant</span>
//               </motion.button>

//               {/* Quick Info */}
//               <div className="grid grid-cols-3 gap-2 mt-4">
//                 <div className="p-2 text-center rounded-lg bg-gray-50">
//                   <Truck className="w-4 h-4 mx-auto mb-1 text-primary-600" />
//                   <p className="text-xs text-gray-700">2-5 jours</p>
//                 </div>
//                 <div className="p-2 text-center rounded-lg bg-gray-50">
//                   <Shield className="w-4 h-4 mx-auto mb-1 text-primary-600" />
//                   <p className="text-xs text-gray-700">Sécurisé</p>
//                 </div>
//                 <div className="p-2 text-center rounded-lg bg-gray-50">
//                   <CheckCircle className="w-4 h-4 mx-auto mb-1 text-primary-600" />
//                   <p className="text-xs text-gray-700">Garanti</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Desktop: Two Column Layout */}
//         <div className="items-start hidden gap-6 lg:grid lg:grid-cols-2">
//           {/* Left Column - Product Image */}
//           <div className="overflow-hidden bg-white border border-gray-100 shadow-xl rounded-3xl">
//             <div className="relative">
//               {isImageLoading && (
//                 <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
//               )}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className={`w-full h-[400px] object-cover transition-opacity duration-300 ${
//                   isImageLoading ? 'opacity-0' : 'opacity-100'
//                 }`}
//                 onLoad={() => setIsImageLoading(false)}
//               />
//               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                 <span className="text-sm font-semibold text-primary-600">Nouveau</span>
//               </div>
//             </div>
            
//             {/* Trust Badges */}
//             <div className="grid grid-cols-3 gap-3 p-4">
//               <div className="p-3 text-center bg-gray-50 rounded-xl">
//                 <Truck className="w-6 h-6 mx-auto mb-1 text-primary-600" />
//                 <p className="text-xs font-medium text-gray-700">Livraison rapide</p>
//               </div>
//               <div className="p-3 text-center bg-gray-50 rounded-xl">
//                 <Shield className="w-6 h-6 mx-auto mb-1 text-primary-600" />
//                 <p className="text-xs font-medium text-gray-700">Paiement sécurisé</p>
//               </div>
//               <div className="p-3 text-center bg-gray-50 rounded-xl">
//                 <CheckCircle className="w-6 h-6 mx-auto mb-1 text-primary-600" />
//                 <p className="text-xs font-medium text-gray-700">Garantie satisfait</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Product Info with Order */}
//           <div className="p-6 overflow-hidden bg-white border border-gray-100 shadow-xl rounded-3xl">
//             <div className="space-y-6">
//               {/* Product Header */}
//               <div>
//                 <h1 className="mb-3 text-3xl font-bold text-gray-900">{product.name}</h1>
//                 <p className="text-gray-600">{product.description}</p>
                
//                 {/* Ratings */}
//                 <div className="flex items-center mt-4 space-x-2">
//                   <div className="flex">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                   <span className="font-medium text-gray-600">4.8 (2.5k+ avis)</span>
//                 </div>
//               </div>

//               {/* Price */}
//               <div className="p-5 bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="mb-1 text-sm text-gray-600">Prix unitaire</p>
//                     <div className="flex items-baseline gap-3">
//                       <p className="text-2xl font-bold text-primary-600">
//                         {product.price.toLocaleString()} FCFA
//                       </p>
//                       <span className="text-sm text-gray-500 line-through">
//                         {(product.price * 1.3).toLocaleString()} FCFA
//                       </span>
//                     </div>
//                   </div>
//                   <div className="px-3 py-2 text-green-800 bg-green-100 rounded-lg">
//                     <p className="text-sm font-semibold">Économisez 30%</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Quantity and Order */}
//               <div className="space-y-6">
//                 {/* Quantity Selector */}
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between">
//                     <p className="font-medium text-gray-900">Quantité</p>
//                     <div className="flex items-center px-4 py-2 space-x-3 rounded-full bg-gray-50">
//                       <button
//                         onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                         className="flex items-center justify-center w-8 h-8 text-gray-700 transition-colors bg-white rounded-full shadow-sm hover:bg-gray-100"
//                         aria-label="Diminuer la quantité"
//                       >
//                         <Minus size={16} />
//                       </button>
//                       <span className="text-xl font-bold text-gray-900 min-w-[40px] text-center">{quantity}</span>
//                       <button
//                         onClick={() => setQuantity((q) => q + 1)}
//                         className="flex items-center justify-center w-8 h-8 text-gray-700 transition-colors bg-white rounded-full shadow-sm hover:bg-gray-100"
//                         aria-label="Augmenter la quantité"
//                       >
//                         <Plus size={16} />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Total Price */}
//                   <div className="pt-4 border-t border-gray-200">
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-600">Total :</span>
//                       <div className="text-right">
//                         <p className="text-2xl font-bold text-primary-600">
//                           {(product.price * quantity).toLocaleString()} FCFA
//                         </p>
//                         <p className="text-sm text-gray-500">Livraison incluse</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Order Button */}
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={handleOpenOrder}
//                     className="flex items-center justify-center w-full py-4 space-x-3 text-lg font-bold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-xl"
//                   >
//                     <ShoppingCart size={24} />
//                     <span>Commander maintenant</span>
//                   </motion.button>

//                   {/* Safety Message */}
//                   <p className="mt-2 text-sm text-center text-gray-500">
//                     Paiement 100% sécurisé • Livraison sous 2-5 jours
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Product Description Sections */}
//       <div className="max-w-4xl px-4 pb-8 mx-auto">
//         {product.id === 1 ? (
//           <BraceletDescription />
//         ) : (
//           <CreamDescription />
//         )}

//         {/* Testimonials Section - Only for product 1 */}
//         {product.id === 1 && (
//           <TestimonialsSection
//             images={testimonialImages}
//             currentIndex={currentTestimonialIndex}
//             onNext={nextTestimonial}
//             onPrev={prevTestimonial}
//           />
//         )}

//         {/* Proof of Shipping Section */}
//         <ProofSection
//           images={proofImages}
//           currentIndex={currentProofIndex}
//           onNext={nextProof}
//           onPrev={prevProof}
//         />
//       </div>

//       {/* Order Form Modal */}
//       <ProductOrderForm 
//         product={product} 
//         quantity={quantity} 
//         isOpen={isOrderFormOpen} 
//         onClose={() => setIsOrderFormOpen(false)} 
//       />
//     </div>
//   );
// };

// // Sub-components for better organization
// const BraceletDescription: React.FC = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className="mt-6 overflow-hidden bg-white border border-gray-100 shadow-lg lg:mt-8 rounded-2xl"
//   >
//     <div className="p-5 lg:p-8">
//       <div className="mb-6 text-center lg:mb-8">
//         <h2 className="mb-2 text-xl font-bold text-gray-900 lg:text-2xl lg:mb-3">Un équilibre retrouvé</h2>
//         <p className="text-sm text-gray-600 lg:text-base">
//           Découvrez comment notre bracelet harmonise votre bien-être au quotidien
//         </p>
//       </div>

//       {/* Benefits Grid */}
//       <div className="grid gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4 lg:mb-8">
//         {[
//           { icon: Heart, title: "Circulation", benefits: ["Optimisation sanguine", "Oxygénation tissulaire"] },
//           { icon: Zap, title: "Énergie", benefits: ["Fatigue réduite", "Récupération améliorée"] },
//           { icon: Leaf, title: "Équilibre", benefits: ["Stress diminué", "Harmonie émotionnelle"] },
//           { icon: Sparkles, title: "Design", benefits: ["Élégant et discret", "Adapté au quotidien"] },
//         ].map((benefit, index) => (
//           <motion.div
//             key={benefit.title}
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             className="p-4 shadow-sm bg-gradient-to-br from-white to-primary-50 rounded-xl"
//           >
//             <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg lg:w-12 lg:h-12 bg-primary-100">
//               <benefit.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary-600" />
//             </div>
//             <h3 className="mb-2 text-base font-bold text-gray-900 lg:text-lg">{benefit.title}</h3>
//             <ul className="space-y-1">
//               {benefit.benefits.map((item, idx) => (
//                 <li key={idx} className="flex items-center text-sm text-gray-600">
//                   <CheckCircle className="flex-shrink-0 w-3 h-3 mr-2 text-green-500 lg:w-4 lg:h-4" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>

//       {/* Stats */}
//       <div className="p-5 text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl lg:p-6">
//         <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
//           {[
//             { value: "2.5k+", label: "Clients satisfaits" },
//             { value: "94%", label: "Amélioration" },
//             { value: "30+", label: "Pays desservis" },
//             { value: "24/7", label: "Support client" },
//           ].map((stat) => (
//             <div key={stat.label} className="text-center">
//               <div className="mb-1 text-xl font-bold lg:text-2xl">{stat.value}</div>
//               <p className="text-xs text-primary-100 lg:text-sm">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// const CreamDescription: React.FC = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className="mt-6 overflow-hidden bg-white border border-gray-100 shadow-lg lg:mt-8 rounded-2xl"
//   >
//     <div className="p-5 lg:p-8">
//       <div className="mb-6 text-center lg:mb-8">
//         <h2 className="mb-2 text-xl font-bold text-gray-900 lg:text-2xl lg:mb-3">Crème Noéva™</h2>
//         <p className="text-sm text-gray-600 lg:text-base">Soulagement articulaire & rajeunissement cutané</p>
//       </div>

//       {/* Hero Statement */}
//       <div className="p-4 mb-6 bg-gradient-to-r from-primary-50 to-beige-50 rounded-xl lg:p-6 lg:mb-8">
//         <p className="text-base font-semibold text-center text-gray-900 lg:text-lg">
//           "Un confort retrouvé au quotidien"
//         </p>
//       </div>

//       {/* Features Grid */}
//       <div className="grid gap-4 mb-6 md:grid-cols-3 lg:mb-8">
//         {[
//           {
//             icon: "🌿",
//             title: "Arnica",
//             description: "Détente musculaire après l'effort",
//             color: "from-green-50 to-white"
//           },
//           {
//             icon: "💪",
//             title: "Glucosamine",
//             description: "Confort articulaire optimal",
//             color: "from-blue-50 to-white"
//           },
//           {
//             icon: "✨",
//             title: "Vitamine K2",
//             description: "Peau nourrie et souple",
//             color: "from-purple-50 to-white"
//           }
//         ].map((feature) => (
//           <div
//             key={feature.title}
//             className={`bg-gradient-to-br ${feature.color} rounded-xl p-4 shadow-sm border border-gray-100`}
//           >
//             <div className="mb-3 text-3xl">{feature.icon}</div>
//             <h3 className="mb-2 text-base font-bold text-gray-900 lg:text-lg">{feature.title}</h3>
//             <p className="text-sm text-gray-600 lg:text-base">{feature.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* How it works */}
//       <div className="space-y-4">
//         <h3 className="mb-4 text-lg font-bold text-gray-900 lg:text-xl">Mode d'action</h3>
//         {[
//           { step: "01", title: "Effet chauffant", description: "Augmente la circulation sanguine locale" },
//           { step: "02", title: "Anti-inflammatoire", description: "Réduit les cytokines pro-inflammatoires" },
//           { step: "03", title: "Soulagement rapide", description: "Diminue l'ankylose et améliore la mobilité" },
//           { step: "04", title: "Soins anti-âge", description: "Effets liftants et raffermissants" },
//         ].map((step) => (
//           <div
//             key={step.step}
//             className="flex items-start p-3 space-x-4 transition-colors rounded-lg hover:bg-gray-50"
//           >
//             <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg lg:w-10 lg:h-10 bg-primary-600">
//               <span className="text-sm font-bold text-white">{step.step}</span>
//             </div>
//             <div>
//               <h4 className="mb-1 text-base font-bold text-gray-900">{step.title}</h4>
//               <p className="text-sm text-gray-600 lg:text-base">{step.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </motion.div>
// );

// const TestimonialsSection: React.FC<{
//   images: string[];
//   currentIndex: number;
//   onNext: () => void;
//   onPrev: () => void;
// }> = ({ images, currentIndex, onNext, onPrev }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className="mt-6 lg:mt-8"
//   >
//     <div className="mb-4 text-center lg:mb-6">
//       <h3 className="mb-1 text-lg font-bold text-gray-900 lg:text-xl lg:mb-2">Témoignages clients</h3>
//       <p className="text-sm text-gray-600 lg:text-base">Découvrez les retours de nos clients satisfaits</p>
//     </div>
    
//     <div className="relative max-w-2xl mx-auto overflow-hidden shadow-lg bg-gradient-to-br from-primary-50 to-white rounded-2xl">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           src={images[currentIndex]}
//           alt="Témoignage client"
//           className="w-full h-[250px] lg:h-[300px] object-cover"
//         />
//       </AnimatePresence>
      
//       {/* Navigation */}
//       <div className="absolute inset-0 flex items-center justify-between px-3 lg:px-4">
//         <button
//           onClick={onPrev}
//           className="flex items-center justify-center w-8 h-8 transition-all rounded-full shadow-md lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm hover:bg-white"
//         >
//           <ChevronLeft size={18} className="text-gray-900" />
//         </button>
//         <button
//           onClick={onNext}
//           className="flex items-center justify-center w-8 h-8 transition-all rounded-full shadow-md lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm hover:bg-white"
//         >
//           <ChevronRight size={18} className="text-gray-900" />
//         </button>
//       </div>
      
//       {/* Counter */}
//       <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
//         <p className="text-xs font-medium text-gray-900">
//           {currentIndex + 1}/{images.length}
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// const ProofSection: React.FC<{
//   images: string[];
//   currentIndex: number;
//   onNext: () => void;
//   onPrev: () => void;
// }> = ({ images, currentIndex, onNext, onPrev }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className="mt-6 lg:mt-8"
//   >
//     <div className="mb-4 text-center lg:mb-6">
//       <h3 className="mb-1 text-lg font-bold text-gray-900 lg:text-xl lg:mb-2">Livraisons confirmées</h3>
//       <p className="text-sm text-gray-600 lg:text-base">Preuves d'expédition à travers le monde</p>
//     </div>
    
//     <div className="relative max-w-2xl mx-auto overflow-hidden shadow-lg bg-gradient-to-br from-beige-50 to-white rounded-2xl">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           src={images[currentIndex]}
//           alt="Preuve d'expédition"
//           className="w-full h-[200px] lg:h-[250px] object-cover"
//         />
//       </AnimatePresence>
      
//       {/* Navigation */}
//       <div className="absolute inset-0 flex items-center justify-between px-3 lg:px-4">
//         <button
//           onClick={onPrev}
//           className="flex items-center justify-center w-8 h-8 transition-all rounded-full shadow-md lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm hover:bg-white"
//         >
//           <ChevronLeft size={18} className="text-gray-900" />
//         </button>
//         <button
//           onClick={onNext}
//           className="flex items-center justify-center w-8 h-8 transition-all rounded-full shadow-md lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm hover:bg-white"
//         >
//           <ChevronRight size={18} className="text-gray-900" />
//         </button>
//       </div>
      
//       {/* Footer */}
//       <div className="p-3 bg-white lg:p-4">
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm font-medium text-gray-900">Suivi en temps réel</p>
//             <p className="text-xs text-gray-600">Colis {currentIndex + 1}/{images.length}</p>
//           </div>
//           <div className="flex items-center space-x-1 text-green-600">
//             <CheckCircle size={16} />
//             <span className="text-sm font-medium">Livré</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// export default ProductDetail;


import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductOrderForm from '../components/ProductOrderForm';
import { Product } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft,
  CheckCircle,
  Truck,
  Shield,
  Star,
  Heart,
  Leaf,
  Sparkles,
  ShoppingCart,
  Minus,
  Plus,
  Droplet,
  ShieldCheck,
  Battery,
  Droplets,
  Activity,
  Moon
} from 'lucide-react';

// Import proof of shipping images
import P1 from '../IMAGES/P1.jpg';
import P2 from '../IMAGES/P2.jpg';
import P3 from '../IMAGES/P3.jpg';
import P4 from '../IMAGES/P4.jpg';
import P5 from '../IMAGES/P5.jpg';
import P6 from '../IMAGES/P6.jpg';
import P7 from '../IMAGES/P7.jpg';
import P8 from '../IMAGES/P8.jpg';
import P9 from '../IMAGES/P9.jpg';
import P10 from '../IMAGES/P10.jpg';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [currentProofIndex, setCurrentProofIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const variants = product?.variants ?? [];
  const activeVariant = variants[selectedVariantIndex];
  const displayedImage = activeVariant?.image ?? product?.image ?? '';
  const displayedDescription = activeVariant?.descriptionSuffix
    ? `${product?.description ?? ''} ${activeVariant.descriptionSuffix}`
    : product?.description ?? '';
  const selectedColor = activeVariant?.color ?? product?.selectedColor;

  useEffect(() => {
    setIsImageLoading(true);
  }, [displayedImage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const orderProduct = product
    ? {
        ...product,
        selectedColor,
        image: displayedImage,
      }
    : ({} as Product);

  const proofImages = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10];

  // Auto-rotate proof carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [proofImages.length]);

  const handleOpenOrder = () => {
    setIsOrderFormOpen(true);
  };

  const nextProof = useCallback(() => {
    setCurrentProofIndex((prev) => (prev + 1) % proofImages.length);
  }, [proofImages.length]);

  const prevProof = useCallback(() => {
    setCurrentProofIndex((prev) => (prev - 1 + proofImages.length) % proofImages.length);
  }, [proofImages.length]);

  // Couleurs dynamiques selon le produit - UTILISATION DE COULEURS VISIBLES
  const getProductBorderColor = () => {
    if (product?.name.includes('Acier')) return 'border-metal-200';
    if (product?.name.includes('Cuivre')) return 'border-amber-200';
    if (product?.name.includes('Personnalisé')) return 'border-amber-200';
    if (product?.name.includes('Gourde')) return 'border-amber-200';
    return 'border-orange-200';
  };

  const getPriceColor = () => {
    if (product?.name.includes('Acier')) return 'text-metal-600';
    if (product?.name.includes('Cuivre')) return 'text-orange-600';
    if (product?.name.includes('Personnalisé')) return 'text-orange-600';
    if (product?.name.includes('Gourde')) return 'text-orange-600';
    return 'text-orange-600';
  };

  const getBgGradient = () => {
    if (product?.name.includes('Acier')) return 'from-metal-50 to-beige-50';
    if (product?.name.includes('Cuivre')) return 'from-orange-50 to-amber-50';
    if (product?.name.includes('Personnalisé')) return 'from-orange-50 to-amber-50';
    if (product?.name.includes('Gourde')) return 'from-orange-50 to-amber-50';
    return 'from-orange-50 to-beige-50';
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-b from-beige-50 to-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-8 text-center bg-white shadow-2xl rounded-3xl"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Produit introuvable</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 font-semibold text-white transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:shadow-xl"
          >
            ← Retour aux produits
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-beige-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-4xl px-4 py-3 mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-700 transition-colors group hover:text-orange-600"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Retour</span>
          </button>
        </div>
      </div>

      {/* Main Product Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl px-4 py-4 mx-auto"
      >
        {/* Mobile Layout */}
        <div className="overflow-hidden bg-white border shadow-xl border-beige-100 lg:hidden rounded-3xl">
          {/* Product Image */}
          <div className="relative">
            {isImageLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-beige-200 to-beige-300 animate-pulse" />
            )}
            <img
              src={displayedImage}
              alt={`${product.name} ${selectedColor ?? ''}`.trim()}
              loading="eager"
              className={`w-full h-[250px] object-cover transition-opacity duration-300 ${
                isImageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setIsImageLoading(false)}
              onError={() => setIsImageLoading(false)}
            />
            <div className={`absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full ${getProductBorderColor()}`}>
              <span className={`text-xs font-semibold ${getPriceColor()}`}>Nouveau</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-5">
            <h1 className="mb-2 text-2xl font-bold text-gray-900">{product.name}</h1>
            <p className="mb-4 text-sm text-gray-600">{displayedDescription}</p>
            {variants.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {variants.map((variant, index) => (
                  <button
                    key={variant.color}
                    type="button"
                    onClick={() => setSelectedVariantIndex(index)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition border ${
                      index === selectedVariantIndex
                        ? 'bg-orange-600 text-white border-orange-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {variant.color}
                  </button>
                ))}
              </div>
            )}
            
            {/* Ratings */}
            <div className="flex items-center mb-4 space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-600">4.8 (2.5k+ avis)</span>
            </div>

            {/* Price */}
            <div className={`p-4 mb-4 rounded-xl bg-gradient-to-r ${getBgGradient()}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="mb-1 text-xs text-gray-600">Prix unitaire</p>
                  <div className="flex items-baseline gap-2">
                    <p className={`text-xl font-bold ${getPriceColor()}`}>
                      {product.price.toLocaleString()} FCFA
                    </p>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        {product.originalPrice.toLocaleString()} FCFA
                      </span>
                    )}
                  </div>
                </div>
                {product.originalPrice && (
                  <div className="px-2 py-1 text-green-800 bg-green-100 rounded-lg">
                    <p className="text-xs font-semibold">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Quantity and Order Section */}
            <div className="pt-4 space-y-4 border-t border-beige-100">
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-900">Quantité</p>
                <div className="flex items-center space-x-3 bg-beige-50 rounded-full px-3 py-1.5">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex items-center justify-center text-gray-700 transition-colors bg-white rounded-full shadow-sm w-7 h-7 hover:bg-beige-100"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-lg font-bold text-gray-900 min-w-[30px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex items-center justify-center text-gray-700 transition-colors bg-white rounded-full shadow-sm w-7 h-7 hover:bg-beige-100"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Total :</span>
                <div className="text-right">
                  <p className={`text-xl font-bold ${getPriceColor()}`}>
                    {(product.price * quantity).toLocaleString()} FCFA
                  </p>
                  <p className="text-xs text-gray-500">Livraison incluse</p>
                </div>
              </div>

              {/* BOUTON COMMANDER - COULEUR ORANGE TRÈS VISIBLE */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleOpenOrder}
                className="flex items-center justify-center w-full py-3 space-x-2 font-bold text-white transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 hover:shadow-xl"
              >
                <ShoppingCart size={20} />
                <span>Commander maintenant</span>
              </motion.button>

              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="p-2 text-center rounded-lg bg-beige-50">
                  <Truck className="w-4 h-4 mx-auto mb-1 text-orange-600" />
                  <p className="text-xs text-gray-700">Livraison rapide</p>
                </div>
                <div className="p-2 text-center rounded-lg bg-beige-50">
                  <Shield className="w-4 h-4 mx-auto mb-1 text-orange-600" />
                  <p className="text-xs text-gray-700">Sécurisé</p>
                </div>
                <div className="p-2 text-center rounded-lg bg-beige-50">
                  <CheckCircle className="w-4 h-4 mx-auto mb-1 text-orange-600" />
                  <p className="text-xs text-gray-700">Garanti</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="items-start hidden gap-6 lg:grid lg:grid-cols-2">
          {/* Left Column - Product Image */}
          <div className="overflow-hidden bg-white border shadow-xl border-beige-100 rounded-3xl">
            <div className="relative">
              {isImageLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-beige-200 to-beige-300 animate-pulse" />
              )}
              <img
                src={displayedImage}
                alt={`${product.name} ${selectedColor ?? ''}`.trim()}
                loading="eager"
                className={`w-full h-[400px] object-cover transition-opacity duration-300 ${
                  isImageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setIsImageLoading(false)}
                onError={() => setIsImageLoading(false)}
              />
              <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full ${getProductBorderColor()}`}>
                <span className={`text-sm font-semibold ${getPriceColor()}`}>Nouveau</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 p-4">
              <div className="p-3 text-center bg-beige-50 rounded-xl">
                <Truck className="w-6 h-6 mx-auto mb-1 text-orange-600" />
                <p className="text-xs font-medium text-gray-700">Livraison rapide</p>
              </div>
              <div className="p-3 text-center bg-beige-50 rounded-xl">
                <Shield className="w-6 h-6 mx-auto mb-1 text-orange-600" />
                <p className="text-xs font-medium text-gray-700">Paiement sécurisé</p>
              </div>
              <div className="p-3 text-center bg-beige-50 rounded-xl">
                <CheckCircle className="w-6 h-6 mx-auto mb-1 text-orange-600" />
                <p className="text-xs font-medium text-gray-700">Garantie satisfait</p>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="p-6 overflow-hidden bg-white border shadow-xl border-beige-100 rounded-3xl">
            <div className="space-y-6">
              <div>
                <h1 className="mb-3 text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-gray-600">{displayedDescription}</p>
                {variants.length > 1 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {variants.map((variant, index) => (
                      <button
                        key={variant.color}
                        type="button"
                        onClick={() => setSelectedVariantIndex(index)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition border ${
                          index === selectedVariantIndex
                            ? 'bg-orange-600 text-white border-orange-600'
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {variant.color}
                      </button>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center mt-4 space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-gray-600">4.8 (2.5k+ avis)</span>
                </div>
              </div>

              <div className={`p-5 rounded-xl bg-gradient-to-r ${getBgGradient()}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-sm text-gray-600">Prix unitaire</p>
                    <div className="flex items-baseline gap-3">
                      <p className={`text-2xl font-bold ${getPriceColor()}`}>
                        {product.price.toLocaleString()} FCFA
                      </p>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice.toLocaleString()} FCFA
                        </span>
                      )}
                    </div>
                  </div>
                  {product.originalPrice && (
                    <div className="px-3 py-2 text-green-800 bg-green-100 rounded-lg">
                      <p className="text-sm font-semibold">
                        Économisez {Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">Quantité</p>
                    <div className="flex items-center px-4 py-2 space-x-3 rounded-full bg-beige-50">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="flex items-center justify-center w-8 h-8 text-gray-700 transition-colors bg-white rounded-full shadow-sm hover:bg-beige-100"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-xl font-bold text-gray-900 min-w-[40px] text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="flex items-center justify-center w-8 h-8 text-gray-700 transition-colors bg-white rounded-full shadow-sm hover:bg-beige-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-beige-200">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total :</span>
                      <div className="text-right">
                        <p className={`text-2xl font-bold ${getPriceColor()}`}>
                          {(product.price * quantity).toLocaleString()} FCFA
                        </p>
                        <p className="text-sm text-gray-500">Livraison incluse</p>
                      </div>
                    </div>
                  </div>

                  {/* BOUTON COMMANDER DESKTOP - COULEUR ORANGE TRÈS VISIBLE */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOpenOrder}
                    className="flex items-center justify-center w-full py-4 space-x-3 text-lg font-bold text-white transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 hover:shadow-xl"
                  >
                    <ShoppingCart size={24} />
                    <span>Commander maintenant</span>
                  </motion.button>

                  <p className="mt-2 text-sm text-center text-gray-500">
                    Paiement 100% sécurisé • Livraison sous 2-5 jours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Product Description Sections */}
      <div className="max-w-4xl px-4 pb-8 mx-auto">
        {/* Section selon le type de produit */}
        {product.name.includes('Acier') && <AcierDescription />}
        {product.name.includes('Cuivre') && !product.name.includes('Gourde') && <CuivreDescription />}
        {product.name.includes('Personnalisé') && <PersonnaliseDescription />}
        {product.name.includes('Gourde') && <GourdeDescription />}

        {/* Proof of Shipping Section */}
        <ProofSection
          images={proofImages}
          currentIndex={currentProofIndex}
          onNext={nextProof}
          onPrev={prevProof}
        />
      </div>

      {/* Order Form Modal */}
      <ProductOrderForm 
        product={orderProduct} 
        quantity={quantity} 
        isOpen={isOrderFormOpen} 
        onClose={() => setIsOrderFormOpen(false)} 
      />
    </div>
  );
};

// Section Bracelet Acier Inoxydable
const AcierDescription: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 overflow-hidden bg-white border shadow-lg border-beige-100 lg:mt-8 rounded-2xl"
  >
    <div className="p-5 lg:p-8">
      <div className="mb-6 text-center lg:mb-8">
        <h2 className="mb-2 text-xl font-bold text-gray-900 lg:text-2xl lg:mb-3">Bracelet Acier Inoxydable</h2>
        <p className="text-sm text-gray-600 lg:text-base">Qualité et élégance au quotidien</p>
      </div>

      <div className="grid gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4 lg:mb-8">
        {[
          { icon: ShieldCheck, title: "Ne noircit pas", benefits: ["Conserve son éclat", "Longue durée"] },
          { icon: Droplet, title: "Ne déteint pas", benefits: ["Sans trace sur la peau", "Sécurité absolue"] },
          { icon: Heart, title: "Hypoallergénique", benefits: ["Convient à toutes", "Peau sensible"] },
          { icon: Battery, title: "Ultra résistant", benefits: ["Eau & chocs", "Durable"] },
        ].map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-4 shadow-sm bg-gradient-to-br from-white to-metal-50 rounded-xl"
          >
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-lg lg:w-12 lg:h-12 bg-metal-100">
              <benefit.icon className="w-5 h-5 lg:w-6 lg:h-6 text-metal-600" />
            </div>
            <h3 className="mb-2 text-base font-bold text-gray-900 lg:text-lg">{benefit.title}</h3>
            <ul className="space-y-1">
              {benefit.benefits.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="flex-shrink-0 w-3 h-3 mr-2 text-green-500 lg:w-4 lg:h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="p-5 text-white rounded-xl bg-gradient-to-r from-metal-600 to-metal-800 lg:p-6">
        <div className="grid grid-cols-2 gap-4 text-center lg:grid-cols-4">
          <div><div className="text-xl font-bold lg:text-2xl">Or & Argent</div><p className="text-xs text-metal-200">Couleurs disponibles</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">Homme/Femme</div><p className="text-xs text-metal-200">Style universel</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">98%</div><p className="text-xs text-metal-200">Satisfaction</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">24/7</div><p className="text-xs text-metal-200">Support</p></div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Section Bracelet Cuivre Naturel
const CuivreDescription: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 overflow-hidden bg-white border shadow-lg border-beige-100 lg:mt-8 rounded-2xl"
  >
    <div className="p-5 lg:p-8">
      <div className="mb-6 text-center lg:mb-8">
        <h2 className="mb-2 text-xl font-bold text-gray-900 lg:text-2xl lg:mb-3">Bracelet Cuivre Naturel</h2>
        <p className="text-sm text-gray-600 lg:text-base">Bienfaits naturels pour votre santé</p>
      </div>

      <div className="grid gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4 lg:mb-8">
        {[
          { icon: Activity, title: "Douleurs articulaires", benefits: ["Soulage l'arthrose", "Aide les tendinites"] },
          { icon: Heart, title: "Circulation sanguine", benefits: ["Meilleure oxygénation", "Vitalité accrue"] },
          { icon: Moon, title: "Stress & Fatigue", benefits: ["Détente profonde", "Récupération"] },
          { icon: Shield, title: "Durabilité", benefits: ["Résistant", "Longue durée"] },
        ].map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-4 shadow-sm bg-gradient-to-br from-white to-orange-50 rounded-xl"
          >
            <div className="flex items-center justify-center w-10 h-10 mb-3 bg-orange-100 rounded-lg lg:w-12 lg:h-12">
              <benefit.icon className="w-5 h-5 text-orange-600 lg:w-6 lg:h-6" />
            </div>
            <h3 className="mb-2 text-base font-bold text-gray-900 lg:text-lg">{benefit.title}</h3>
            <ul className="space-y-1">
              {benefit.benefits.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="flex-shrink-0 w-3 h-3 mr-2 text-green-500 lg:w-4 lg:h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="p-5 text-white rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 lg:p-6">
        <div className="grid grid-cols-2 gap-4 text-center lg:grid-cols-4">
          <div><div className="text-xl font-bold lg:text-2xl">Ne déteint pas</div><p className="text-xs text-orange-100">Sans trace</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">Ne noircit pas</div><p className="text-xs text-orange-100">Longue durée</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">Homme/Femme</div><p className="text-xs text-orange-100">Universel</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">95%</div><p className="text-xs text-orange-100">Satisfaction</p></div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Section Bracelet Personnalisé
const PersonnaliseDescription: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 overflow-hidden bg-white border shadow-lg border-beige-100 lg:mt-8 rounded-2xl"
  >
    <div className="p-5 lg:p-8">
      <div className="mb-6 text-center lg:mb-8">
        <h2 className="mb-2 text-xl font-bold text-gray-900 lg:text-2xl lg:mb-3">Bracelet Personnalisé</h2>
        <p className="text-sm text-gray-600 lg:text-base">À votre image, selon vos envies</p>
      </div>

      <div className="grid gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-3 lg:mb-8">
        {[
          { icon: Sparkles, title: "Personnalisation", benefits: ["Choix de la couleur", "Gravure possible", "Modèle unique"] },
          { icon: Shield, title: "Qualité", benefits: ["Ne noircit pas", "Ne déteint pas", "Hypoallergénique"] },
          { icon: Heart, title: "Style", benefits: ["Or & Argent", "Homme & Femme", "Tendance"] },
        ].map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-4 shadow-sm bg-gradient-to-br from-white to-orange-50 rounded-xl"
          >
            <div className="flex items-center justify-center w-10 h-10 mb-3 bg-orange-100 rounded-lg lg:w-12 lg:h-12">
              <benefit.icon className="w-5 h-5 text-orange-600 lg:w-6 lg:h-6" />
            </div>
            <h3 className="mb-2 text-base font-bold text-gray-900 lg:text-lg">{benefit.title}</h3>
            <ul className="space-y-1">
              {benefit.benefits.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="flex-shrink-0 w-3 h-3 mr-2 text-green-500 lg:w-4 lg:h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="p-5 text-white rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 lg:p-6">
        <div className="grid grid-cols-2 gap-4 text-center lg:grid-cols-4">
          <div><div className="text-xl font-bold lg:text-2xl">Or & Argent</div><p className="text-xs text-orange-100">Couleurs</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">8 000 FCFA</div><p className="text-xs text-orange-100">L'unité</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">15 000 FCFA</div><p className="text-xs text-orange-100">2 bracelets</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">100%</div><p className="text-xs text-orange-100">Personnalisable</p></div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Section Gourde Cuivre
const GourdeDescription: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 overflow-hidden bg-white border shadow-lg border-beige-100 lg:mt-8 rounded-2xl"
  >
    <div className="p-5 lg:p-8">
      <div className="mb-6 text-center lg:mb-8">
        <h2 className="mb-2 text-xl font-bold text-gray-900 lg:text-2xl lg:mb-3">Gourde Cuivre Naturel</h2>
        <p className="text-sm text-gray-600 lg:text-base">Votre allié santé au quotidien</p>
      </div>

      <div className="grid gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-3 lg:mb-8">
        {[
          { icon: Droplets, title: "Purification", benefits: ["Purifie l'eau", "Propriétés antibactériennes", "Eau fraîche"] },
          { icon: Activity, title: "Digestion", benefits: ["Favorise la digestion", "Renforce l'immunité", "Bien-être"] },
          { icon: Leaf, title: "Écologique", benefits: ["Durable", "Éco-responsable", "Réutilisable"] },
        ].map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-4 shadow-sm bg-gradient-to-br from-white to-orange-50 rounded-xl"
          >
            <div className="flex items-center justify-center w-10 h-10 mb-3 bg-orange-100 rounded-lg lg:w-12 lg:h-12">
              <benefit.icon className="w-5 h-5 text-orange-600 lg:w-6 lg:h-6" />
            </div>
            <h3 className="mb-2 text-base font-bold text-gray-900 lg:text-lg">{benefit.title}</h3>
            <ul className="space-y-1">
              {benefit.benefits.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="flex-shrink-0 w-3 h-3 mr-2 text-green-500 lg:w-4 lg:h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="p-5 text-white rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 lg:p-6">
        <div className="grid grid-cols-2 gap-4 text-center lg:grid-cols-4">
          <div><div className="text-xl font-bold lg:text-2xl">25 000 FCFA</div><p className="text-xs text-orange-100">Prix</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">1.5L</div><p className="text-xs text-orange-100">Capacité</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">100%</div><p className="text-xs text-orange-100">Naturel</p></div>
          <div><div className="text-xl font-bold lg:text-2xl">♻️</div><p className="text-xs text-orange-100">Éco-friendly</p></div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Section Preuves de livraison
const ProofSection: React.FC<{
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}> = ({ images, currentIndex, onNext, onPrev }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 lg:mt-8"
  >
    <div className="mb-4 text-center lg:mb-6">
      <h3 className="mb-1 text-lg font-bold text-gray-900 lg:text-xl lg:mb-2">Livraisons confirmées</h3>
      <p className="text-sm text-gray-600 lg:text-base">Preuves d'expédition à travers le monde</p>
    </div>
    
    <div className="relative max-w-2xl mx-auto overflow-hidden shadow-lg bg-gradient-to-br from-orange-50 to-white rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          src={images[currentIndex]}
          alt="Preuve d'expédition"
          className="w-full h-[200px] lg:h-[250px] object-cover"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 flex items-center justify-between px-3 lg:px-4">
        <button
          onClick={onPrev}
          className="flex items-center justify-center w-8 h-8 transition-all rounded-full shadow-md lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm hover:bg-white"
        >
          <ChevronLeft size={18} className="text-gray-900" />
        </button>
        <button
          onClick={onNext}
          className="flex items-center justify-center w-8 h-8 transition-all rounded-full shadow-md lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm hover:bg-white"
        >
          <ChevronRight size={18} className="text-gray-900" />
        </button>
      </div>
      
      <div className="p-3 bg-white lg:p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">Suivi en temps réel</p>
            <p className="text-xs text-gray-600">Colis {currentIndex + 1}/{images.length}</p>
          </div>
          <div className="flex items-center space-x-1 text-green-600">
            <CheckCircle size={16} />
            <span className="text-sm font-medium">Livré</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProductDetail;