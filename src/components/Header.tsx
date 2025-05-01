
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="font-bold text-2xl bg-gradient-to-r from-tool-purple to-tool-blue bg-clip-text text-transparent">
              ToolsHub
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-foreground/90 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/categories" className="font-medium text-foreground/90 hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/tools" className="font-medium text-foreground/90 hover:text-primary transition-colors">
              Tools
            </Link>
            <Link to="/about" className="font-medium text-foreground/90 hover:text-primary transition-colors">
              About Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="font-medium text-foreground/90 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className="font-medium text-foreground/90 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/tools" 
                className="font-medium text-foreground/90 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-foreground/90 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
