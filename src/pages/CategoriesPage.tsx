
import { Link } from "react-router-dom";
import { categories } from "@/data/tools";

const CategoriesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Tool Categories</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our comprehensive collection of tools organized by category to find exactly what you need
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link 
            to={`/categories/${category.id}`} 
            key={category.id} 
            className="block group"
          >
            <div className="bg-white rounded-xl border border-border p-8 transition-all duration-200 
              hover:shadow-md hover:border-brand-accent group-hover:-translate-y-1 h-full">
              <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-6`}>
                <img src={category.icon} alt={category.name} className="w-8 h-8" />
              </div>
              <h2 className="font-medium text-xl mb-3">{category.name}</h2>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-medium text-primary">
                  {category.count} tools available
                </span>
                <span className="text-sm font-medium text-primary flex items-center">
                  Browse Tools
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
