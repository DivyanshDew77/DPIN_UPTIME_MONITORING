"use client";
import React, { useState, useEffect } from 'react';
import { Activity, Bell, Zap, Clock, BarChart, Globe, Server, Shield, Wrench, 
  ChevronDown, ChevronUp, Menu, X, ArrowRight, Check, Mail, Phone, MapPin, 
  Facebook, Twitter, Instagram, Linkedin, Search, Settings } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [pricingPeriod, setPricingPeriod] = useState<'monthly' | 'annually'>('monthly');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Button Component
  const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    onClick 
  }: {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
  }) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none';
    
    const variantStyles = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-teal-500 hover:bg-teal-600 text-white',
      outline: 'border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white',
      text: 'text-blue-400 hover:text-blue-300'
    };
    
    const sizeStyles = {
      sm: 'text-sm px-3 py-1.5',
      md: 'px-4 py-2',
      lg: 'text-lg px-6 py-3'
    };

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  // Status Badge Component
  const StatusBadge = ({ 
    status, 
    pulse = true,
    className = '' 
  }: {
    status: 'operational' | 'degraded' | 'outage' | 'maintenance';
    pulse?: boolean;
    className?: string;
  }) => {
    const statusConfig = {
      operational: {
        bg: 'bg-green-900',
        text: 'text-green-300',
        dot: 'bg-green-500',
        label: 'Operational'
      },
      degraded: {
        bg: 'bg-yellow-900',
        text: 'text-yellow-300',
        dot: 'bg-yellow-500',
        label: 'Degraded'
      },
      outage: {
        bg: 'bg-red-900',
        text: 'text-red-300',
        dot: 'bg-red-500',
        label: 'Outage'
      },
      maintenance: {
        bg: 'bg-blue-900',
        text: 'text-blue-300',
        dot: 'bg-blue-500',
        label: 'Maintenance'
      }
    };

    const config = statusConfig[status];

    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text} ${className}`}>
        <span className={`relative flex h-2 w-2 mr-1.5`}>
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.dot} opacity-75 ${!pulse && 'hidden'}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${config.dot}`}></span>
        </span>
        {config.label}
      </span>
    );
  };

  const features = [
    {
      icon: <Bell className="h-6 w-6 text-white" />,
      title: "Instant Alerts",
      description: "Get notified immediately via SMS, email, Slack, or Discord when your services experience downtime.",
      accentColor: "bg-blue-600"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Performance Metrics",
      description: "Track page load times, API response rates, and other critical performance indicators.",
      accentColor: "bg-teal-500"
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Uptime History",
      description: "View historical uptime data and identify patterns to prevent future issues.",
      accentColor: "bg-indigo-500"
    },
    {
      icon: <BarChart className="h-6 w-6 text-white" />,
      title: "Detailed Reports",
      description: "Generate comprehensive reports to share with stakeholders or analyze internally.",
      accentColor: "bg-purple-500"
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Global Monitoring",
      description: "Check your services from multiple locations worldwide for a comprehensive view.",
      accentColor: "bg-green-500"
    },
    {
      icon: <Server className="h-6 w-6 text-white" />,
      title: "API Monitoring",
      description: "Set up advanced monitoring for your APIs with custom request validation.",
      accentColor: "bg-orange-500"
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "SSL Certificate Checks",
      description: "Get alerted before your SSL certificates expire to avoid security warnings.",
      accentColor: "bg-red-500"
    },
    {
      icon: <Wrench className="h-6 w-6 text-white" />,
      title: "Custom Integrations",
      description: "Connect with your existing tools and services via webhooks and our extensive API.",
      accentColor: "bg-gray-700"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: {
        monthly: 29,
        annually: 25,
      },
      description: "Perfect for small websites and personal projects.",
      features: [
        "10 websites or endpoints",
        "Checks every 5 minutes",
        "Email notifications",
        "7-day data retention",
        "Basic reporting",
        "1 team member"
      ],
      highlighted: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: {
        monthly: 79,
        annually: 69,
      },
      description: "Ideal for growing businesses with multiple services.",
      features: [
        "50 websites or endpoints",
        "Checks every 1 minute",
        "Email, SMS & Slack notifications",
        "30-day data retention",
        "Advanced reporting",
        "5 team members",
        "API access",
        "Custom check parameters"
      ],
      highlighted: true,
      buttonText: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: {
        monthly: 199,
        annually: 179,
      },
      description: "For large organizations with critical infrastructure.",
      features: [
        "Unlimited websites or endpoints",
        "Checks every 30 seconds",
        "All notification channels",
        "1-year data retention",
        "Custom reporting",
        "Unlimited team members",
        "Priority support",
        "SSO Authentication",
        "Dedicated IP addresses"
      ],
      highlighted: false,
      buttonText: "Contact Sales",
    }
  ];

  const testimonials = [
    {
      quote: "UptimeMonitor has been a game-changer for our DevOps team. The instant alerts and detailed reporting have reduced our incident response time by over 70%.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "As an e-commerce business, downtime directly impacts our revenue. UptimeMonitor has helped us maintain 99.9% uptime over the past year, which has been crucial for our growth.",
      author: "Michael Chen",
      role: "Engineering Manager",
      company: "ShopWave",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "The global monitoring capabilities allow us to ensure our services are performing well for all our international customers. The insights we've gained have been invaluable.",
      author: "Emma Rodriguez",
      role: "DevOps Lead",
      company: "GlobalServe",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const faqs = [
    {
      question: "What exactly does UptimeMonitor track?",
      answer: "UptimeMonitor tracks the availability, response time, and performance of your websites, APIs, and services. We check your endpoints from multiple locations worldwide to ensure they're accessible and performing well for all your users."
    },
    {
      question: "How frequently do you check my services?",
      answer: "Check frequency depends on your plan. Our Starter plan checks every 5 minutes, Professional every 1 minute, and Enterprise every 30 seconds. Custom check frequencies are available for Enterprise customers."
    },
    {
      question: "How do notifications work?",
      answer: "You can receive notifications via email, SMS, Slack, Discord, PagerDuty, OpsGenie, and webhooks. You can set up alert conditions based on downtime, response time thresholds, SSL expiration, and more."
    },
    {
      question: "Can I monitor internal services behind a firewall?",
      answer: "Yes, we offer a lightweight agent that you can install on your internal network to monitor services that aren't publicly accessible. The agent securely communicates with our platform while keeping your internal services private."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Never miss a <span className="text-blue-400">beat</span> in your app's performance
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Comprehensive uptime monitoring with real-time alerts. Know the moment your services go down, before your customers do.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Instant downtime notifications',
                    '99.9% monitoring uptime SLA',
                    'Multi-region global checks',
                    'Detailed performance metrics'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg">
                    Start Monitoring <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    View Demo
                  </Button>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                  <div className="bg-gray-900 py-3 px-4 flex items-center">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-gray-400 text-sm font-medium">
                      Dashboard Preview
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-700/50 p-4 rounded-lg">
                        <div className="text-sm text-gray-400 mb-1">Uptime</div>
                        <div className="text-2xl font-bold text-blue-400">99.98%</div>
                        <div className="text-green-400 text-sm mt-2 flex items-center">
                          <Check className="h-4 w-4 mr-1" />
                          All systems operational
                        </div>
                      </div>
                      <div className="bg-gray-700/50 p-4 rounded-lg">
                        <div className="text-sm text-gray-400 mb-1">Response Time</div>
                        <div className="text-2xl font-bold text-gray-100">187ms</div>
                        <div className="text-blue-400 text-sm mt-2">↓ 12ms from yesterday</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { name: 'API Gateway', status: 'Operational', time: '23ms', uptime: '100%' },
                        { name: 'Web Dashboard', status: 'Operational', time: '187ms', uptime: '99.9%' },
                        { name: 'Database Cluster', status: 'Operational', time: '42ms', uptime: '99.98%' },
                        { name: 'Authentication Service', status: 'Operational', time: '56ms', uptime: '99.95%' },
                      ].map((service, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700">
                          <div>
                            <div className="font-medium text-gray-200">{service.name}</div>
                            <div className="text-sm text-green-400 flex items-center">
                              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                              {service.status}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-gray-300">{service.time}</div>
                            <div className="text-sm text-gray-400">{service.uptime}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Monitoring Features
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to ensure your services are always running at peak performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.accentColor} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-400">
                Choose the plan that fits your monitoring needs.
              </p>
              
              <div className="mt-8 inline-flex p-1 bg-gray-800 rounded-lg">
                <button
                  className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    pricingPeriod === 'monthly' 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setPricingPeriod('monthly')}
                >
                  Monthly Billing
                </button>
                <button
                  className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    pricingPeriod === 'annually' 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setPricingPeriod('annually')}
                >
                  Annual Billing
                  <span className="ml-2 bg-green-900 text-green-300 text-xs px-1.5 py-0.5 rounded-full">
                    Save 15%
                  </span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl ${
                    plan.highlighted 
                      ? 'bg-gray-800 border-blue-500 border-2 transform md:-translate-y-4' 
                      : 'bg-gray-800 border border-gray-700'
                  } overflow-hidden transition-all`}
                >
                  {plan.highlighted && (
                    <div className="bg-blue-600 text-white py-2 text-sm font-medium text-center">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold">${plan.price[pricingPeriod]}</span>
                      <span className="text-gray-400">/mo</span>
                      
                      {pricingPeriod === 'annually' && (
                        <div className="mt-2 text-sm text-green-400">
                          Save {((plan.price.monthly * 12 - plan.price.annually * 12) / (plan.price.monthly * 12) * 100).toFixed(0)}% with annual billing
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      variant={plan.highlighted ? 'primary' : 'outline'} 
                      className="w-full mb-8"
                    >
                      {plan.buttonText}
                    </Button>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check className={`h-5 w-5 ${plan.highlighted ? 'text-blue-400' : 'text-green-400'} mr-3 mt-0.5`} />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Leading Companies
              </h2>
              <p className="text-xl text-gray-400">
                See what our customers are saying about UptimeMonitor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-14 h-14 object-cover rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                  
                  
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to know about UptimeMonitor.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-700"
                >
                  <button
                    className="flex justify-between items-center w-full py-5 text-left"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    {openFaqIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Zap className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to stay ahead of downtime?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of companies that trust UptimeMonitor to keep their services running smoothly.
                Get started with a 14-day free trial, no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-blue-600"
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-blue-700"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Activity className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-xl font-bold">UptimeMonitor</span>
              </div>
              <p className="text-gray-400 mb-4">
                Real-time monitoring and alerts for your websites and applications.
                Stay ahead of downtime and performance issues.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-400">support@uptimemonitor.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                  <span className="text-gray-400">
                    123 Monitoring Street<br />
                    San Francisco, CA 94103
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} UptimeMonitor. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;