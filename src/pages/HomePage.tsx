
import { Button } from "@/components/ui/button";
import ToolCard, { Tool } from "@/components/ToolCard";
import { tools, categories } from "@/data/tools";
import { Link } from "react-router-dom";

const HomePage = () => {
  const featuredTools = tools.slice(0, 4);
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/90 to-accent py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover and Download the Best Tools for Your Workflow
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Explore our collection of powerful software tools to boost your productivity,
              design stunning interfaces, and integrate your apps seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/tools">
                  Browse All Tools
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/categories">
                  Explore Categories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Tools */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Tools</h2>
          <Button variant="ghost" asChild>
            <Link to="/tools">View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTools.map((tool: Tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Browse by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect tools for your specific needs by exploring our curated categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((category) => (
              <Link 
                to={`/categories/${category.id}`} 
                key={category.id} 
                className="block group"
              >
                <div className="bg-white rounded-xl border border-border p-6 transition-all duration-200 
                  hover:shadow-md hover:border-brand-accent group-hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                    <img src={category.icon} alt={category.name} className="w-6 h-6" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <p className="text-xs font-medium text-primary">
                    {category.count} tools available
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-secondary rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're constantly adding new tools to our collection. If there's a specific tool you'd like to see,
              let us know and we'll consider adding it.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Request a Tool</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
