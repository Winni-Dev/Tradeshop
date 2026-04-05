// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
// import { testimonials } from '../data/products';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import TE1 from '../IMAGES/TE1.jpg';
// import TE2 from '../IMAGES/TE2.jpg';
// import TE3 from '../IMAGES/TE3.jpg';
// import TE4 from '../IMAGES/TE4.jpg';
// import TE5 from '../IMAGES/TE5.jpg';
// import TE6 from '../IMAGES/TE6.jpg';
// import TE7 from '../IMAGES/TE7.jpg';

// const Testimonials: React.FC = () => {
//   const navigationPrevRef = useRef<HTMLButtonElement>(null);
//   const navigationNextRef = useRef<HTMLButtonElement>(null);
//   const images = [TE1, TE2, TE3, TE4, TE5, TE6, TE7];

//   return (
//     <section id="avis" className="py-20 bg-beige-50">
//       <div className="container px-4 mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 text-center"
//         >
//           <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
//             Ce que disent nos clients
//           </h2>
//           <p className="max-w-2xl mx-auto text-gray-600">
//             Découvrez les témoignages de ceux qui ont déjà expérimenté nos produits
//           </p>
//         </motion.div>

//         <div className="relative max-w-4xl mx-auto">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation={{
//               prevEl: navigationPrevRef.current,
//               nextEl: navigationNextRef.current,
//             }}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000 }}
//             loop={true}
//             onSwiper={(swiper) => {
//               // @ts-ignore
//               swiper.params.navigation.prevEl = navigationPrevRef.current;
//               // @ts-ignore
//               swiper.params.navigation.nextEl = navigationNextRef.current;
//               swiper.navigation.init();
//               swiper.navigation.update();
//             }}
//             className="pb-12"
//           >
//             {testimonials.map((testimonial, index) => (
//               <SwiperSlide key={testimonial.id}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   className="p-8 bg-white shadow-lg rounded-3xl"
//                 >
//                   <img src={images[index]} alt={`Témoignage ${index + 1}`} className="object-cover w-full h-48 md:h-64 rounded-3xl" />
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation buttons */}
//           <div className="flex items-center justify-center mt-8 space-x-4">
//             <button
//               ref={navigationPrevRef}
//               className="flex items-center justify-center w-12 h-12 transition-colors bg-white rounded-full shadow-lg hover:bg-gray-50"
//             >
//               <ChevronLeft size={24} className="text-gray-700" />
//             </button>
//             <button
//               ref={navigationNextRef}
//               className="flex items-center justify-center w-12 h-12 transition-colors bg-white rounded-full shadow-lg hover:bg-gray-50"
//             >
//               <ChevronRight size={24} className="text-gray-700" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import TE1 from '../IMAGES/TE1.jpg';
// import TE2 from '../IMAGES/TE2.jpg';
// import TE3 from '../IMAGES/TE3.jpg';
// import TE4 from '../IMAGES/TE4.jpg';
// import TE5 from '../IMAGES/TE5.jpg';
// import TE6 from '../IMAGES/TE6.jpg';
// import TE7 from '../IMAGES/TE7.jpg';

// import P1 from '../IMAGES/P1.jpg';
// import P2 from '../IMAGES/P2.jpg';
// import P3 from '../IMAGES/P3.jpg';
// import P4 from '../IMAGES/P4.jpg';
// import P5 from '../IMAGES/P5.jpg';
// import P6 from '../IMAGES/P6.jpg';
// import P7 from '../IMAGES/P7.jpg';
// import P8 from '../IMAGES/P8.jpg';
// import P9 from '../IMAGES/P9.jpg';
// import P10 from '../IMAGES/P10.jpg';

// const Testimonials: React.FC = () => {
//   const navigationPrevRef = useRef<HTMLButtonElement>(null);
//   const navigationNextRef = useRef<HTMLButtonElement>(null);
  
//   const images = [
//     { id: 1, src: TE1, alt: "Témoignage client 1" },
//     { id: 2, src: TE2, alt: "Témoignage client 2" },
//     { id: 3, src: TE3, alt: "Témoignage client 3" },
//     { id: 4, src: TE4, alt: "Témoignage client 4" },
//     { id: 5, src: TE5, alt: "Témoignage client 5" },
//     { id: 6, src: TE6, alt: "Témoignage client 6" },
//     { id: 7, src: TE7, alt: "Témoignage client 7" }
//   ];

//   return (
//     <section id="avis" className="py-10 md:py-14 bg-beige-50">
//       <div className="container px-4 mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-6 text-center"
//         >
//           <h2 className="mb-1 text-lg font-semibold text-gray-900 md:text-xl">
//             Témoignages Clients
//           </h2>
//           <p className="max-w-sm mx-auto text-xs text-gray-500">
//             Avis de nos clients satisfaits
//           </p>
//         </motion.div>

//         <div className="relative max-w-sm mx-auto md:max-w-md">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={16}
//             slidesPerView={1}
//             navigation={{
//               prevEl: navigationPrevRef.current,
//               nextEl: navigationNextRef.current,
//             }}
//             pagination={{ 
//               clickable: true,
//               dynamicBullets: true
//             }}
//             autoplay={{ 
//               delay: 5000,
//               disableOnInteraction: false 
//             }}
//             loop={true}
//             onSwiper={(swiper) => {
//               setTimeout(() => {
//                 if (navigationPrevRef.current && navigationNextRef.current) {
//                   // @ts-ignore
//                   swiper.params.navigation.prevEl = navigationPrevRef.current;
//                   // @ts-ignore
//                   swiper.params.navigation.nextEl = navigationNextRef.current;
//                   swiper.navigation.init();
//                   swiper.navigation.update();
//                 }
//               }, 100);
//             }}
//             className="pb-6"
//           >
//             {images.map((image) => (
//               <SwiperSlide key={image.id}>
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   className="overflow-hidden rounded-lg"
//                 >
//                   {/* Taille réduite et élégante */}
//                   <div className="w-full h-64 md:h-72">
//                     <img 
//                       src={image.src} 
//                       alt={image.alt} 
//                       className="object-contain w-full h-full"
//                     />
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation buttons */}
//           <div className="flex items-center justify-center gap-8 mt-6">
//             <button
//               ref={navigationPrevRef}
//               className="flex items-center justify-center transition-colors bg-gray-800 rounded-full w-7 h-7 md:w-8 md:h-8 hover:bg-gray-700"
//               aria-label="Précédent"
//             >
//               <ChevronLeft size={14} className="text-white" />
//             </button>
            
//             <div className="text-xs text-gray-600">
//               <span className="font-medium">0{images.length}</span>
//               <span className="ml-1">témoignages</span>
//             </div>
            
//             <button
//               ref={navigationNextRef}
//               className="flex items-center justify-center transition-colors bg-gray-800 rounded-full w-7 h-7 md:w-8 md:h-8 hover:bg-gray-700"
//               aria-label="Suivant"
//             >
//               <ChevronRight size={14} className="text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Package, Truck, Globe, CheckCircle } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

const ProofOfShipping: React.FC = () => {
  const proofNavigationPrevRef = useRef<HTMLButtonElement>(null);
  const proofNavigationNextRef = useRef<HTMLButtonElement>(null);
  
  const proofImages = [
    { id: 1, src: P1, alt: "Preuve d'expédition 1" },
    { id: 2, src: P2, alt: "Preuve d'expédition 2" },
    { id: 3, src: P3, alt: "Preuve d'expédition 3" },
    { id: 4, src: P4, alt: "Preuve d'expédition 4" },
    { id: 5, src: P5, alt: "Preuve d'expédition 5" },
    { id: 6, src: P6, alt: "Preuve d'expédition 6" },
    { id: 7, src: P7, alt: "Preuve d'expédition 7" },
    { id: 8, src: P8, alt: "Preuve d'expédition 8" },
    { id: 9, src: P9, alt: "Preuve d'expédition 9" },
    { id: 10, src: P10, alt: "Preuve d'expédition 10" }
  ];

  return (
    <section id="livraisons" className="py-10 bg-white md:py-14">
      <div className="container px-4 mx-auto">
        
        {/* Section Preuves d'Expédition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-1.5 rounded-full mb-3 shadow-sm border border-amber-100">
              <Package size={14} className="text-amber-500" />
              <h2 className="text-sm font-semibold text-amber-700">
                Livraisons Confirmées
              </h2>
            </div>
            <p className="max-w-sm mx-auto text-sm text-gray-500">
              Nos colis livrés à Abidjan et dans toute la Côte d'Ivoire
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Truck size={16} className="text-amber-500" />
                <div className="text-xl font-bold text-gray-900">30+</div>
              </div>
              <div className="text-xs text-gray-500">Villes livrées</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Package size={16} className="text-amber-500" />
                <div className="text-xl font-bold text-gray-900">{proofImages.length}+</div>
              </div>
              <div className="text-xs text-gray-500">Expéditions</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Globe size={16} className="text-amber-500" />
                <div className="text-xl font-bold text-gray-900">24/7</div>
              </div>
              <div className="text-xs text-gray-500">Support</div>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24
                }
              }}
              navigation={{
                prevEl: proofNavigationPrevRef.current,
                nextEl: proofNavigationNextRef.current,
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true
              }}
              autoplay={{ 
                delay: 4000,
                disableOnInteraction: false 
              }}
              loop={true}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  if (proofNavigationPrevRef.current && proofNavigationNextRef.current && swiper.params.navigation) {
                    (swiper.params.navigation as any).prevEl = proofNavigationPrevRef.current;
                    (swiper.params.navigation as any).nextEl = proofNavigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                }, 100);
              }}
              className="pb-12"
            >
              {proofImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="p-3 overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg">
                      <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-50">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute px-2 py-1 text-xs font-medium text-white rounded-full shadow-sm top-2 right-2 bg-amber-500">
                          #{image.id}
                        </div>
                        <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle size={10} />
                          <span>Livré</span>
                        </div>
                      </div>
                      <div className="p-3 text-center">
                        <div className="text-xs font-medium text-gray-500">
                          Colis #{image.id} • Expédition confirmée
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <button
              ref={proofNavigationPrevRef}
              className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 transition-all duration-300 -translate-x-3 -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-md top-1/2 md:-translate-x-5 md:w-10 md:h-10 hover:bg-amber-50 hover:shadow-lg"
              aria-label="Précédent"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            
            <button
              ref={proofNavigationNextRef}
              className="absolute right-0 z-10 flex items-center justify-center w-8 h-8 transition-all duration-300 translate-x-3 -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-md top-1/2 md:translate-x-5 md:w-10 md:h-10 hover:bg-amber-50 hover:shadow-lg"
              aria-label="Suivant"
            >
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>

          {/* Indicateur */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-amber-50 border-amber-100">
              <Package size={14} className="text-amber-500" />
              <div className="text-sm text-gray-700">
                <span className="font-semibold text-amber-600">{proofImages.length}</span>
                <span className="ml-1">preuves d'expédition</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="max-w-md p-6 mx-auto border bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-amber-100">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              Commandez en toute confiance
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              📦 Livraison partout à Abidjan<br />
              🚛 Expédition dans toute la Côte d'Ivoire 🇨🇮
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/2250701006360"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-white text-sm px-6 py-2.5 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Commander sur WhatsApp
              </a>
              <button
                onClick={() => {
                  const productsSection = document.getElementById('produits');
                  if (productsSection) {
                    const headerHeight = 80;
                    const elementPosition = productsSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="border border-amber-500 text-amber-600 text-sm px-6 py-2.5 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300"
              >
                Voir nos produits
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofOfShipping;