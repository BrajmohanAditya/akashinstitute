import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top CTA Section */}
      <div className="bg-purple-900 border-b border-purple-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Ready to clear your dream exam?
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-purple-200">
              Join thousands of students who have trusted Akash Institute for their Bank and Government job preparations.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-start lg:justify-end">
            <form className="sm:flex w-full max-w-md">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="w-full px-5 py-3 border border-transparent placeholder-slate-400 text-slate-900 rounded-l-md focus:ring-2 focus:ring-white focus:border-white focus:outline-none sm:max-w-xs" 
                placeholder="Enter your email" 
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:flex-shrink-0">
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-r-md text-purple-900 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                >
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-purple-600 p-2 rounded-lg">
                <span className="text-2xl font-bold text-white tracking-wider">A</span>
              </div>
              <span className="text-2xl font-bold text-white">Akash Institute</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              The premier destination for banking and government job preparation. We provide top-quality study materials, live tests, and expert guidance to help you succeed.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5.838a4.162 4.162 0 1 0 0 8.324 4.162 4.162 0 0 0 0-8.324zm0 6.915a2.753 2.753 0 1 1 0-5.506 2.753 2.753 0 0 1 0 5.506zm5.222-6.52a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6 border-b border-slate-700 pb-3">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-sm hover:text-purple-400 transition-colors">All Courses</Link></li>
              <li><Link to="/quizeDetail?type=Free" className="text-sm hover:text-purple-400 transition-colors">Free Quizzes</Link></li>
              <li><Link to="/quizeDetail?type=Paid" className="text-sm hover:text-purple-400 transition-colors">Premium Tests</Link></li>
              <li><Link to="/success-board" className="text-sm hover:text-purple-400 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Study Resources */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6 border-b border-slate-700 pb-3">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-purple-400 transition-colors">Daily Current Affairs</a></li>
              <li><a href="#" className="text-sm hover:text-purple-400 transition-colors">Previous Year Papers</a></li>
              <li><a href="#" className="text-sm hover:text-purple-400 transition-colors">Free PDF Bundles</a></li>
              <li><a href="#" className="text-sm hover:text-purple-400 transition-colors">Live Video Classes</a></li>
              <li><a href="#" className="text-sm hover:text-purple-400 transition-colors">Exam Notifications</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6 border-b border-slate-700 pb-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                <span className="text-sm text-slate-400">123 Education Lane, Knowledge Park,<br />New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 h-5 w-5 text-purple-500 mr-3" />
                <span className="text-sm text-slate-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 h-5 w-5 text-purple-500 mr-3" />
                <span className="text-sm text-slate-400">support@akashinstitute.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Akash Institute. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
