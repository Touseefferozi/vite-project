function Footer () {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Toonimized. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Made with ❤️ by Toonimized Team
        </p>
      </div>
    </footer>
  );
}
export default Footer;