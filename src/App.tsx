/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Instagram, Globe, MapPin, Calculator, Info, ShieldCheck, Camera } from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { PremiumHeader } from './components/PremiumHeader';
import { LinkCard } from './components/LinkCard';

export default function App() {
  const cards = [
    {
      id: 'orcamento',
      title: 'Solicitar Orçamento',
      subtitle: 'Descubra quanto sua obra pode economizar com nosso sistema inteligente.',
      buttonText: 'WhatsApp Imediato',
      image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=800&q=80', // Modern House Detail
      popOutImage: 'https://images.unsplash.com/photo-1590059132718-50854497bc3e?auto=format&fit=crop&w=400&q=80', // Brick detail texture
      link: 'https://wa.me/553192020603',
      isWhatsApp: true
    },
    {
      id: 'projetos',
      title: 'Projetos Realizados',
      subtitle: 'Veja obras reais e modernas construídas com tijolo ecológico aparente.',
      buttonText: 'Ver Galeria',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', // High end architecture
      popOutImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=400&q=80', // House facade
      link: 'https://wa.me/553192020603',
      isWhatsApp: true
    },
    {
      id: 'site',
      title: 'Visitar o Site',
      subtitle: 'Conheça todos os detalhes técnicos e as vantagens da construção ecológica.',
      buttonText: 'Acessar Agora',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80', // Tech/Engineering
      popOutImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80', // Smartphone premium
      link: 'https://wa.me/553192020603',
      isWhatsApp: true
    },
    {
      id: 'funcionamento',
      title: 'Como Funciona',
      subtitle: 'Sistema inteligente de encaixe que reduz tempo de obra e desperdício.',
      buttonText: 'Entenda o Sistema',
      image: 'https://images.unsplash.com/photo-1503387762-592dea58fe21?auto=format&fit=crop&w=800&q=80', // Architectural blueprint
      popOutImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=400&q=80', // Construction detail
      link: 'https://wa.me/553192020603',
      isWhatsApp: true
    },
    {
      id: 'beneficios',
      title: 'Benefícios Reais',
      subtitle: 'Muito além de um tijolo comum: economia, rapidez e conforto térmico.',
      buttonText: 'Lista de Vantagens',
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80', // Cozy interior/Home
      popOutImage: 'https://images.unsplash.com/photo-1635443916428-1f33f920f269?auto=format&fit=crop&w=400&q=80', // Trophy/Badge
      link: 'https://wa.me/553192020603',
      isWhatsApp: true
    },
    {
      id: 'localizacao',
      title: 'Localização',
      subtitle: 'Três Marias, MG — Rua Serra Verde, 39205-000.',
      buttonText: 'Ver no Mapa',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80', // Warehouse/Industry
      popOutImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=80', // Map pin detail
      link: 'https://www.google.com/maps/search/?api=1&query=Rua+Serra+Verde+Tres+Marias+MG+39205-000',
      isWhatsApp: false
    },
    {
      id: 'especialista',
      title: 'Falar com Especialista',
      subtitle: 'Atendimento humanizado e especializado para tirar suas dúvidas.',
      buttonText: 'Chamar Agora',
      image: 'https://picsum.photos/seed/terrabricks-consultant/800/600',
      popOutImage: 'https://picsum.photos/seed/terrabricks-plan-pop/400/300',
      link: 'https://wa.me/553192020603',
      isWhatsApp: true
    }
  ];

  return (
    <div className="relative min-h-screen selection:bg-terrabricks-copper selection:text-white">
      <ParticleBackground />
      
      <main className="relative z-10 w-full">
        <PremiumHeader />
        
        <section className="px-6 pb-32 -mt-20">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {cards.map((card, index) => (
              <LinkCard 
                key={card.id}
                index={index}
                title={card.title}
                subtitle={card.subtitle}
                buttonText={card.buttonText}
                image={card.image}
                popOutImage={card.popOutImage}
                link={card.link}
                isWhatsApp={card.isWhatsApp}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-terrabricks-black/80 border-t border-white/5 pt-20 pb-12 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display font-black text-3xl mb-4">
              TERRA<span className="text-terrabricks-copper">BRICKS</span>
            </h3>
            <p className="text-gray-500 max-w-sm mx-auto mb-10">
              Construção inteligente, econômica e sustentável para um futuro melhor.
            </p>
            
            <div className="flex justify-center gap-6 mb-12">
              <a href="#" className="p-3 bg-white/5 hover:bg-terrabricks-copper/20 rounded-full transition-colors group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-terrabricks-copper" />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-terrabricks-copper/20 rounded-full transition-colors group">
                <Globe className="w-5 h-5 text-gray-400 group-hover:text-terrabricks-copper" />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-terrabricks-copper/20 rounded-full transition-colors group">
                <MapPin className="w-5 h-5 text-gray-400 group-hover:text-terrabricks-copper" />
              </a>
            </div>

            <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
              &copy; 2024 TERRABRICKS — Todos os direitos reservados.
            </div>
          </div>
          
          {/* Subtle glowing elements in footer */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-terrabricks-copper rounded-full blur-[80px] opacity-10" />
        </footer>
      </main>

      {/* Floating CTA */}
      <AnimatePresence>
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/553192020603"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-900/40 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
          <MessageCircle className="w-6 h-6" />
          <span className="font-bold text-sm sm:text-base whitespace-nowrap">Solicitar Orçamento</span>
        </motion.a>
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
