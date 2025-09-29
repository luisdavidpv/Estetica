import React, { useEffect, useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Phone, 
  Calendar, 
  MessageCircle, 
  Star,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Shield,
  Globe,
  ExternalLink
} from 'lucide-react';

interface Translations {
  [key: string]: {
    [key: string]: string | string[];
  };
}

const translations: Translations = {
  es: {
    // Business Name
    businessName: "Belleza Pies",
    
    // Navigation
    services: "Servicios",
    pricing: "Precios",
    about: "Nosotros",
    testimonials: "Testimonios",
    contact: "Contacto",
    
    // Hero Section
    heroTitle: "Cuidado Profesional para",
    heroTitleAccent: "Tus Pies",
    heroDescription: "Descubre la experiencia única de cuidado podológico profesional. Relajación, bienestar y belleza en cada sesión con productos naturales y técnicas avanzadas.",
    scheduleAppointment: "Agendar Cita",
    callNow: "Llamar Ahora",
    happyClients: "clientes felices",
    
    // Services Section
    servicesTitle: "Nuestros Servicios",
    servicesSubtitle: "Ofrecemos una amplia gama de tratamientos especializados para el cuidado integral de tus pies",
    
    service1Title: "Pedi-Spa (Regular)",
    service1Duration: "Duración: 45 minutos",
    service1Description: "Limpieza de uñas, retiro de piel muerta, hidratación y exfoliación profunda con productos naturales. Manejo con vapor de ozono.",
    
    service2Title: "Pedi-Spa (Parafina)",
    service2Duration: "Duración: 60 minutos",
    service2Description: "Limpieza de uñas, retiro de piel muerta, hidratación y exfoliación de rodilla a pies profunda con productos naturales. Manejo con terapia parafina 8–12 minutos.",
    
    service3Title: "Pedi-Spa (Premium)",
    service3Duration: "Duración: 75 minutos",
    service3Description: "Limpieza de uñas, retiro de piel muerta, hidratación y exfoliación de rodilla a pies profunda con productos naturales. Manejo con terapia parafina y masaje 15 minutos. Hidratación de ozono durante toda la sesión.",
    
    specialNote: "Si hay hongos en las uñas se procede a la limpieza total y tratamientos que se realizarán cada 8 días.",
    
    // Pricing Section
    pricingTitle: "Nuestros Precios",
    pricingSubtitle: "Elige el tratamiento que mejor se adapte a tus necesidades",
    
    regularService: "Pedi-Spa (Regular)",
    regularPolish: "Esmalte regular",
    acrylic: "Acri-pie",
    
    paraffinService: "Pedi-Spa (Parafina)",
    
    premiumService: "Pedi-Spa (Premium)",
    
    // Benefits Section
    whyChooseUs: "¿Por qué elegirnos?",
    whyChooseUsSubtitle: "Somos especialistas en cuidado podológico con años de experiencia y compromiso con la excelencia.",
    
    benefit1Title: "Profesionales Certificados",
    benefit1Description: "Especialistas con años de experiencia en cuidado podológico y estética",
    
    benefit2Title: "Productos Naturales",
    benefit2Description: "Solo utilizamos productos naturales de la más alta calidad para tu bienestar",
    
    benefit3Title: "Técnicas Avanzadas",
    benefit3Description: "Terapias con ozono, parafina y técnicas modernas de relajación",
    
    // Testimonials
    testimonialsTitle: "Lo que dicen nuestros clientes",
    testimonialsSubtitle: "La satisfacción de nuestros clientes es nuestra mejor carta de presentación",
    
    testimonial1Name: "María González",
    testimonial1Text: "Excelente servicio, muy profesionales y el ambiente es súper relajante. Mis pies nunca se habían visto tan bien.",
    
    testimonial2Name: "Carmen López", 
    testimonial2Text: "El mejor lugar para el cuidado de pies en la ciudad. La atención es personalizada y los resultados increíbles.",
    
    testimonial3Name: "Ana Martínez",
    testimonial3Text: "Después de años buscando un buen podólogo, finalmente encontré el lugar perfecto. Totalmente recomendado.",
    
    verifiedClient: "Cliente verificado",
    
    // Contact Section
    contactTitle: "¡Agenda tu cita hoy!",
    contactSubtitle: "Estamos aquí para cuidar de ti. Elige la forma más conveniente para contactarnos.",
    
    bookOnline: "Agendar Online",
    bookOnlineDescription: "Reserva tu cita de forma rápida y sencilla",
    bookNow: "Agendar Ahora",
    
    callUs: "Llamar",
    callDescription: "Habla directamente con nosotros",
    
    whatsapp: "WhatsApp",
    whatsappDescription: "Chatea con nosotros al instante",
    sendMessage: "Enviar Mensaje",
    
    // Footer
    footerDescription: "Tu centro de confianza para el cuidado profesional de pies. Experiencia, calidad y atención personalizada en cada sesión.",
    contactInfo: "Contacto",
    rightsReserved: "Todos los derechos reservados."
  },
  en: {
    // Business Name
    businessName: "Beauty Feet",
    
    // Navigation
    services: "Services",
    pricing: "Pricing", 
    about: "About",
    testimonials: "Testimonials",
    contact: "Contact",
    
    // Hero Section
    heroTitle: "Professional Care for",
    heroTitleAccent: "Your Feet",
    heroDescription: "Discover the unique experience of professional podiatric care. Relaxation, wellness and beauty in every session with natural products and advanced techniques.",
    scheduleAppointment: "Schedule Appointment",
    callNow: "Call Now",
    happyClients: "happy clients",
    
    // Services Section
    servicesTitle: "Our Services",
    servicesSubtitle: "We offer a wide range of specialized treatments for comprehensive foot care",
    
    service1Title: "Pedi-Spa (Regular)",
    service1Duration: "Duration: 45 minutes",
    service1Description: "Nail cleaning, dead skin removal, hydration and deep exfoliation with natural products. Ozone steam treatment.",
    
    service2Title: "Pedi-Spa (Paraffin)",
    service2Duration: "Duration: 60 minutes",
    service2Description: "Nail cleaning, dead skin removal, hydration and deep exfoliation from knee to feet with natural products. Paraffin therapy treatment 8–12 minutes.",
    
    service3Title: "Pedi-Spa (Premium)",
    service3Duration: "Duration: 75 minutes",
    service3Description: "Nail cleaning, dead skin removal, hydration and deep exfoliation from knee to feet with natural products. Paraffin therapy and 15-minute massage treatment. Ozone hydration throughout the entire session.",
    
    specialNote: "If there are nail fungus, we proceed with total cleaning and treatments that will be performed every 8 days.",
    
    // Pricing Section
    pricingTitle: "Our Pricing",
    pricingSubtitle: "Choose the treatment that best suits your needs",
    
    regularService: "Pedi-Spa (Regular)",
    regularPolish: "Regular polish",
    acrylic: "Acrylic",
    
    paraffinService: "Pedi-Spa (Paraffin)",
    
    premiumService: "Pedi-Spa (Premium)",
    
    // Benefits Section
    whyChooseUs: "Why choose us?",
    whyChooseUsSubtitle: "We are specialists in podiatric care with years of experience and commitment to excellence.",
    
    benefit1Title: "Certified Professionals",
    benefit1Description: "Specialists with years of experience in podiatric care and aesthetics",
    
    benefit2Title: "Natural Products",
    benefit2Description: "We only use the highest quality natural products for your wellbeing",
    
    benefit3Title: "Advanced Techniques", 
    benefit3Description: "Ozone, paraffin therapies and modern relaxation techniques",
    
    // Testimonials
    testimonialsTitle: "What our clients say",
    testimonialsSubtitle: "Our clients' satisfaction is our best letter of introduction",
    
    testimonial1Name: "Maria Gonzalez",
    testimonial1Text: "Excellent service, very professional and the atmosphere is super relaxing. My feet have never looked so good.",
    
    testimonial2Name: "Carmen Lopez",
    testimonial2Text: "The best place for foot care in the city. The attention is personalized and the results are incredible.",
    
    testimonial3Name: "Ana Martinez", 
    testimonial3Text: "After years of looking for a good podiatrist, I finally found the perfect place. Totally recommended.",
    
    verifiedClient: "Verified client",
    
    // Contact Section
    contactTitle: "Book your appointment today!",
    contactSubtitle: "We are here to take care of you. Choose the most convenient way to contact us.",
    
    bookOnline: "Book Online",
    bookOnlineDescription: "Reserve your appointment quickly and easily",
    bookNow: "Book Now",
    
    callUs: "Call",
    callDescription: "Speak directly with us",
    
    whatsapp: "WhatsApp",
    whatsappDescription: "Chat with us instantly",
    sendMessage: "Send Message",
    
    // Footer
    footerDescription: "Your trusted center for professional foot care. Experience, quality and personalized attention in every session.",
    contactInfo: "Contact",
    rightsReserved: "All rights reserved."
  }
};

function App() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [isVisible, setIsVisible] = useState({});

  const t = (key: string): string | string[] => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t('service1Title'),
      duration: t('service1Duration'),
      description: t('service1Description')
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('service2Title'),
      duration: t('service2Duration'),
      description: t('service2Description')
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('service3Title'),
      duration: t('service3Duration'),
      description: t('service3Description')
    }
  ];

  const pricingPlans = [
    {
      title: t('regularService'),
      regularPrice: '$50',
      acrylicPrice: '$70'
    },
    {
      title: t('paraffinService'),
      regularPrice: '$80',
      acrylicPrice: '$100'
    },
    {
      title: t('premiumService'),
      regularPrice: '$100',
      acrylicPrice: '$120'
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t('benefit1Title'),
      description: t('benefit1Description')
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('benefit2Title'),
      description: t('benefit2Description')
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t('benefit3Title'),
      description: t('benefit3Description')
    }
  ];

  const testimonials = [
    {
      name: t('testimonial1Name'),
      text: t('testimonial1Text'),
      rating: 5
    },
    {
      name: t('testimonial2Name'),
      text: t('testimonial2Text'),
      rating: 5
    },
    {
      name: t('testimonial3Name'),
      text: t('testimonial3Text'),
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                {t('businessName')}
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">{t('services')}</a>
              <a href="#precios" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">{t('pricing')}</a>
              <a href="#nosotros" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">{t('about')}</a>
              <a href="#testimonios" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">{t('testimonials')}</a>
              <a href="#contacto" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">{t('contact')}</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    language === 'es' 
                      ? 'bg-rose-500 text-white shadow-sm' 
                      : 'text-gray-600 hover:text-rose-600'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    language === 'en' 
                      ? 'bg-rose-500 text-white shadow-sm' 
                      : 'text-gray-600 hover:text-rose-600'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {t('heroTitle')}
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"> {t('heroTitleAccent')}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://calendar.google.com/calendar/u/0/r?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 inline mr-2" />
                  {t('scheduleAppointment')}
                </a>
                <a 
                  href="tel:+19146198124"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-rose-500 hover:text-rose-500 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  {t('callNow')}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-pink-200 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional foot care" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">500+ {t('happyClients')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="services-title" 
            data-animate 
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['services-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('servicesTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                id={`service-${index}`}
                data-animate
                className={`group bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible[`service-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-rose-500 mb-6 group-hover:text-pink-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-rose-600 font-semibold mb-4">{service.duration}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Special Note */}
                <div className="bg-rose-100 border-l-4 border-rose-500 p-4 rounded-r-lg">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5 mr-2" />
                    <p className="text-sm text-rose-700 font-medium">
                      <strong>{language === 'es' ? 'Nota importante:' : 'Important note:'}</strong> {t('specialNote')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="pricing-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['pricing-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pricingTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pricingSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                id={`pricing-${index}`}
                data-animate
                className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index === 1 ? 'ring-2 ring-rose-500 scale-105' : ''
                } ${isVisible[`pricing-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-rose-50 rounded-lg">
                    <span className="font-medium text-gray-700">{t('regularPolish')}</span>
                    <span className="text-2xl font-bold text-rose-600">{plan.regularPrice}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                    <span className="font-medium text-gray-700">{t('acrylic')}</span>
                    <span className="text-2xl font-bold text-pink-600">{plan.acrylicPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Foot spa treatment" 
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div 
              id="benefits"
              data-animate
              className={`transition-all duration-1000 ${isVisible['benefits'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('whyChooseUs')}</h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('whyChooseUsSubtitle')}
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="testimonials-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['testimonials-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonialsTitle')}</h2>
            <p className="text-xl text-gray-600">{t('testimonialsSubtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 ${isVisible[`testimonial-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    {typeof testimonial.name === 'string' ? testimonial.name.charAt(0) : 'C'}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{t('verifiedClient')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('contactTitle')}</h2>
            <p className="text-xl opacity-90">{t('contactSubtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('bookOnline')}</h3>
              <p className="text-white/80 mb-6">{t('bookOnlineDescription')}</p>
              <a 
                href="https://calendar.google.com/calendar/u/0/r?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                {t('bookNow')}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('callUs')}</h3>
              <p className="text-white/80 mb-6">{t('callDescription')}</p>
              <a 
                href="tel:+19146198124"
                className="bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                +1 (914) 619-8124
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('bookNow')}</h3>
              <p className="text-white/80 mb-6">{language === 'es' ? 'Elige tu opción preferida' : 'Choose your preferred option'}</p>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/19146198124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  {t('whatsapp')}
                </a>
                <a 
                  href="tel:+19146198124"
                  className="block bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'es' ? 'Llamada' : 'Phone Call'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{t('businessName')}</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('footerDescription')}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:misolspa2025@gmail.com" className="bg-gray-800 p-3 rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-110">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">{t('contactInfo')}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-rose-400" />
                  <span className="text-gray-300">New York, NY</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-rose-400" />
                  <span className="text-gray-300">+1 (914) 619-8124</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-rose-400" />
                  <span className="text-gray-300">misolspa2025@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {t('businessName')}. {t('rightsReserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;