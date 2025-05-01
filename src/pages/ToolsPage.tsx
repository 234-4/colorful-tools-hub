
import { useState } from "react";
import { tools } from "@/data/tools";
import ToolTable from "@/components/ToolTable";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";

const ToolsPage = () => {
  const [view, setView] = useState<"grid" | "table">("grid");

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">All Tools</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our complete collection of powerful tools to enhance your workflow
        </p>
      </div>
      
      <div className="flex justify-end mb-6">
        <div className="flex rounded-lg border border-border overflow-hidden">
          <Button 
            variant={view === "grid" ? "default" : "ghost"}
            size="sm" 
            className={view === "grid" ? "" : "text-muted-foreground"}
            onClick={() => setView("grid")}
          >
            Grid View
          </Button>
          <Button 
            variant={view === "table" ? "default" : "ghost"}
            size="sm"
            className={view === "table" ? "" : "text-muted-foreground"}
            onClick={() => setView("table")}
          >
            Table View
          </Button>
        </div>
      </div>
      
      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <ToolTable tools={tools} />
      )}
    </div>
  );
};

export default ToolsPage;
