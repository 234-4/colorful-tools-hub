
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "productivity" | "design" | "development" | "communication" | "marketing";
  downloads: number;
  rating: number;
  downloadUrl: string;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "productivity":
      return "bg-tool-green";
    case "design":
      return "bg-tool-purple";
    case "development":
      return "bg-tool-blue";
    case "communication":
      return "bg-tool-orange";
    case "marketing":
      return "bg-tool-pink";
    default:
      return "bg-gray-500";
  }
};

const ToolCard = ({ tool }: { tool: Tool }) => {
  return (
    <div className="tool-card p-4">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mr-4">
          <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-medium text-lg">{tool.name}</h3>
          <div className="flex items-center mt-1">
            <span className={`category-pill ${getCategoryColor(tool.category)}`}>
              {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}
            </span>
            <span className="ml-2 text-xs text-muted-foreground">
              {tool.downloads.toLocaleString()} downloads
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {tool.description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i}
              className={`w-4 h-4 ${i < Math.floor(tool.rating) ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="text-primary border-primary hover:bg-primary/10 flex items-center"
          onClick={() => window.open(tool.downloadUrl, "_blank")}
        >
          <Download className="h-4 w-4 mr-1" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default ToolCard;
