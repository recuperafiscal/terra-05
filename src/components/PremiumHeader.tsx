import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function PremiumHeader() {
  return (
    <header className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-12 pb-20 px-6 overflow-hidden">
      {/* Background Hero */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Eco-brick Villa"
          className="w-full h-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-terrabricks-black/90 via-terrabricks-black/20 to-terrabricks-black" />
      </div>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        <div className="mb-12 relative">
          <motion.h1 
            className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-tighter leading-none text-white drop-shadow-2xl"
          >
            TERRA<span className="text-terrabricks-copper">BRICKS</span>
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'circOut' }}
            className="h-2 w-full bg-linear-to-r from-transparent via-terrabricks-copper to-transparent mt-2 sm:mt-0"
          />
          
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-terrabricks-copper/20 rounded-full blur-3xl" />
        </div>
          <p className="mt-4 font-medium text-terrabricks-copper/80 tracking-[0.3em] uppercase text-xs sm:text-sm">
            Fábrica de Tijolos Ecológicos
          </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold font-display mb-6 leading-tight">
            Construa <span className="text-gradient-copper italic">gastando menos.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto font-light leading-relaxed mb-10 px-4">
            Mais rapidez, economia e sustentabilidade para sua obra com o melhor tijolo ecológico do mercado.
          </p>
          
          <a 
            href="#orcamento"
            className="inline-flex items-center gap-3 px-8 py-4 bg-terrabricks-copper hover:bg-terrabricks-orange text-white rounded-full font-bold text-lg transition-all duration-300 shadow-[0_10px_40px_rgba(184,115,51,0.3)] hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Elements Backdrop */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-10 w-24 h-24 hidden lg:block opacity-20"
      >
        <div className="w-full h-full border border-terrabricks-copper rounded-lg rotate-12" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-40 right-10 w-32 h-32 hidden lg:block opacity-10"
      >
        <div className="w-full h-full border border-white rounded-full" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </header>
  );
}
