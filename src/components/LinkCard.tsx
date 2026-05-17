import { motion } from 'motion/react';
import { ExternalLink, MessageCircle } from 'lucide-react';

interface LinkCardProps {
  key?: string | number;
  title: string;
  subtitle: string;
  buttonText?: string;
  image: string;
  popOutImage?: string;
  popOutAlt?: string;
  link: string;
  index: number;
  isWhatsApp?: boolean;
}

export function LinkCard({ 
  title, 
  subtitle, 
  buttonText, 
  image, 
  popOutImage, 
  popOutAlt,
  link, 
  index,
  isWhatsApp
}: LinkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="relative group w-full max-w-2xl mx-auto mb-12 sm:mb-20"
    >
      <div className="relative h-[240px] sm:h-[320px] w-full rounded-2xl overflow-visible bg-terrabricks-brown/20 border border-white/5 transition-all duration-500 group-hover:border-terrabricks-copper/50 group-hover:shadow-[0_0_50px_rgba(184,115,51,0.2)]">
        {/* Background Image Container */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-terrabricks-black via-terrabricks-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
          <motion.h3 
            className="font-display text-2xl sm:text-3xl font-bold mb-1 group-hover:text-terrabricks-copper transition-colors"
          >
            {title}
          </motion.h3>
          <p className="text-gray-400 text-sm sm:text-base mb-4 max-w-xs sm:max-w-md">
            {subtitle}
          </p>
          
          {buttonText && (
            <div className="flex items-center gap-3">
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  isWhatsApp 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20' 
                  : 'bg-terrabricks-copper hover:bg-terrabricks-orange text-white'
                }`}
              >
                {isWhatsApp ? <MessageCircle className="w-5 h-5" /> : <ExternalLink className="w-4 h-4" />}
                {buttonText}
              </a>
            </div>
          )}
        </div>

        {/* Pop-out Image Element */}
        {popOutImage && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, x: 20 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (index * 0.1) + 0.3 }}
            className="absolute -top-10 -right-4 sm:-right-8 w-32 sm:w-48 h-auto pointer-events-none z-20 drop-shadow-2xl"
          >
            <img 
              src={popOutImage} 
              alt={popOutAlt || "popout"} 
              className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
