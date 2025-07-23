import logo from '../assets/Logo_hafewu.png';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10 border-t rounded-t-3xl min-h-80">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Logo Section */}
        <div className="mb-8 md:mb-0">
          <img src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086643/Logo__nye4vn.png" alt="Company Logo" className="w-60 sepia-18" />
        </div>
        
        {/* Social Media Links */}
  

        {/* Navigation Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4 hover:text-amber-300 ">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-300 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-amber-300 transition-colors">Customize</a></li>
            <li><a href="#" className="hover:text-amber-300 transition-colors">FAQS</a></li>
            <li><a href="#" className="hover:text-amber-300 transition-colors">Contact</a></li>
          </ul>
        </div>
        
        {/* Newsletter Section */}
        <div className="w-full md:w-auto">
          <h3 className="text-xl font-bold mb-4 hover:text-amber-300">Let's keep in touch!</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-2xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-2xl transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="container mx-auto px-4 mt-10 pt-6 border-t border-gray-700 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Toonimized. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Made with ❤️ by Touseef Ferozi
        </p>
      </div>
    </footer>
  );
}

export default Footer;