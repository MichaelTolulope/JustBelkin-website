import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import welcomeImage from '../assets/imgs/welcome-image.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const shapesRef = useRef([]);
  const statsRef = useRef([]);
  const subHeroRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const content = contentRef.current;
    const shapes = shapesRef.current;
    const stats = statsRef.current;
    const subHero = subHeroRef.current;
    const image = imageRef.current;
    const features = featuresRef.current;

    // Hero content animation
    gsap.fromTo(content, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Stats cards animation
    gsap.fromTo(stats, 
      { opacity: 0, y: 30, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.6, 
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 0.8
      }
    );

    // Sub-hero section animation
    if (subHero) {
      gsap.fromTo(subHero, 
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: subHero,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Image animation
    if (image) {
      gsap.fromTo(image, 
        { opacity: 0, scale: 0.8, rotation: -5 },
        { 
          opacity: 1, 
          scale: 1, 
          rotation: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Features animation
    gsap.fromTo(features, 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: features[0],
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating animation for shapes
    shapes.forEach((shape, index) => {
      if (shape) {
        gsap.to(shape, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          rotation: "random(-5, 5)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Main Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 via-primary-700 to-accent-900 pt-20">
        {/* Additional Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent-900/30 via-transparent to-primary-900/30"></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            ref={el => shapesRef.current[0] = el}
            className="absolute top-20 right-20 w-20 h-20 border-2 border-accent-400/30 rounded-full"
          ></div>
          <div 
            ref={el => shapesRef.current[1] = el}
            className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent-400/20 rounded-lg rotate-45"
          ></div>
          <div 
            ref={el => shapesRef.current[2] = el}
            className="absolute bottom-1/4 right-10 w-12 h-12 border-2 border-secondary-400/40 rounded-full"
          ></div>
          <div 
            ref={el => shapesRef.current[3] = el}
            className="absolute top-1/2 right-1/3 w-8 h-8 bg-secondary-400/30 rounded-full"
          ></div>
          <div 
            ref={el => shapesRef.current[4] = el}
            className="absolute top-1/4 left-20 w-14 h-14 border-2 border-accent-300/25 rounded-lg rotate-12"
          ></div>
          <div 
            ref={el => shapesRef.current[5] = el}
            className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-primary-400/20 rounded-full"
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div ref={contentRef} className=" mx-auto text-center">
            {/* Main Headlines */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="block">
                Premium{' '}
                <span className="text-gradient-light bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 bg-clip-text text-transparent">Cleaning</span>
              </span>
              <span className="block bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
              Transform your space with our professional, eco-friendly cleaning solutions. 
              <span className="text-accent-300 font-semibold block mt-2">Trusted by 1000+ satisfied customers across the region.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center">
              <button className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-500/25">
                Book Now - Free Quote
              </button>
              <button 
                onClick={scrollToServices}
                className="border-2 border-white/70 text-white hover:bg-white hover:text-primary-900 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5"
              >
                View Services
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div 
                ref={el => statsRef.current[0] = el}
                className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">1000+</div>
                <div className="text-sm text-gray-300 font-medium">Happy Clients</div>
              </div>
              <div 
                ref={el => statsRef.current[1] = el}
                className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">5★</div>
                <div className="text-sm text-gray-300 font-medium">Average Rating</div>
              </div>
              <div 
                ref={el => statsRef.current[2] = el}
                className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-300 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Hero Section with Image */}
      <section ref={subHeroRef} className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-transparent to-accent-50/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img 
                ref={imageRef}
                src={welcomeImage}
                alt="Professional cleaning service" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-primary-600/10 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 via-transparent to-transparent rounded-2xl"></div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">BeKlin?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience the difference with our professional cleaning services that prioritize quality, reliability, and your satisfaction.
              </p>
              
              <div className="space-y-6">
                <div 
                  ref={el => featuresRef.current[0] = el}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary-50 to-transparent hover:from-primary-100 hover:to-primary-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Insured</h3>
                    <p className="text-gray-600">Complete peace of mind with comprehensive insurance coverage for all our services.</p>
                  </div>
                </div>
                
                <div 
                  ref={el => featuresRef.current[1] = el}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-transparent hover:from-green-100 hover:to-green-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
                    <p className="text-gray-600">Safe, non-toxic products that protect your family and the environment.</p>
                  </div>
                </div>
                
                <div 
                  ref={el => featuresRef.current[2] = el}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-accent-50 to-transparent hover:from-accent-100 hover:to-accent-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock customer service for all your cleaning needs and questions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;