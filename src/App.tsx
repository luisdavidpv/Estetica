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
  Shield
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({});

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
      title: "Pedicura Clásica",
      description: "Tratamiento completo para el cuidado y embellecimiento de tus pies",
      price: "Desde $25.000"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pedicura Spa",
      description: "Experiencia relajante con exfoliación, masaje y hidratación profunda",
      price: "Desde $35.000"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tratamiento Podológico",
      description: "Cuidado especializado para problemas específicos de los pies",
      price: "Desde $40.000"
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Profesionales Certificados",
      description: "Especialistas con años de experiencia en cuidado podológico"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Higiene y Seguridad",
      description: "Protocolos estrictos de limpieza y esterilización"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Productos Premium",
      description: "Solo utilizamos productos de la más alta calidad"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      text: "Excelente servicio, muy profesionales y el ambiente es súper relajante. Mis pies nunca se habían visto tan bien.",
      rating: 5
    },
    {
      name: "Carmen López",
      text: "El mejor lugar para el cuidado de pies en la ciudad. La atención es personalizada y los resultados increíbles.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      text: "Después de años buscando un buen podólogo, finalmente encontré el lugar perfecto. Totalmente recomendado.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-teal-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-teal-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-teal-600 bg-clip-text text-transparent">
                Belleza Pies
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">Servicios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">Nosotros</a>
              <a href="#testimonios" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">Testimonios</a>
              <a href="#contacto" className="text-gray-700 hover:text-rose-600 transition-colors duration-200">Contacto</a>
            </nav>
            <button className="bg-gradient-to-r from-rose-500 to-teal-500 text-white px-6 py-2 rounded-full hover:from-rose-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
              Agendar Cita
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Cuidado Profesional para
                <span className="bg-gradient-to-r from-rose-600 to-teal-600 bg-clip-text text-transparent"> Tus Pies</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Descubre la experiencia única de cuidado podológico profesional. 
                Relajación, bienestar y belleza en cada sesión.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gradient-to-r from-rose-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-rose-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Agendar Cita
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-rose-500 hover:text-rose-500 transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Llamar Ahora
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-teal-200 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Cuidado profesional de pies" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">500+ clientes felices</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de tratamientos especializados para el cuidado integral de tus pies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                id={`service-${index}`}
                data-animate
                className={`group bg-gradient-to-br from-rose-50 to-teal-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible[`service-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-rose-500 mb-6 group-hover:text-teal-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-teal-600 bg-clip-text text-transparent">
                    {service.price}
                  </span>
                  <button className="bg-white text-rose-500 p-3 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="nosotros" className="py-20 bg-gradient-to-r from-rose-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Ambiente profesional" 
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div 
              id="benefits"
              data-animate
              className={`transition-all duration-1000 ${isVisible['benefits'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué elegirnos?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Somos especialistas en cuidado podológico con años de experiencia y compromiso con la excelencia.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-500 to-teal-500 rounded-full flex items-center justify-center text-white">
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
      <section id="testimonios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="testimonials-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['testimonials-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">La satisfacción de nuestros clientes es nuestra mejor carta de presentación</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`bg-gradient-to-br from-rose-50 to-teal-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 ${isVisible[`testimonial-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">Cliente verificado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-rose-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">¡Agenda tu cita hoy!</h2>
            <p className="text-xl opacity-90">Estamos aquí para cuidar de ti. Elige la forma más conveniente para contactarnos.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Agendar Online</h3>
              <p className="text-white/80 mb-6">Reserva tu cita de forma rápida y sencilla</p>
              <button className="bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Agendar Ahora
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Llamar</h3>
              <p className="text-white/80 mb-6">Habla directamente con nosotros</p>
              <button className="bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                +56 9 1234 5678
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">WhatsApp</h3>
              <p className="text-white/80 mb-6">Chatea con nosotros al instante</p>
              <button className="bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-teal-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Belleza Pies</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Tu centro de confianza para el cuidado profesional de pies. 
                Experiencia, calidad y atención personalizada en cada sesión.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-110">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-rose-400" />
                  <span className="text-gray-300">Av. Principal 123, Santiago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-rose-400" />
                  <span className="text-gray-300">+56 9 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-rose-400" />
                  <span className="text-gray-300">info@bellezapies.cl</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Horarios</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-rose-400" />
                  <div>
                    <p className="text-gray-300">Lun - Vie: 9:00 - 19:00</p>
                    <p className="text-gray-300">Sáb: 9:00 - 17:00</p>
                    <p className="text-gray-300">Dom: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Belleza Pies. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;