
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Tool } from './ToolCard';

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

const ToolTable = ({ tools }: { tools: Tool[] }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Tool</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Downloads</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tools.map((tool) => (
            <TableRow key={tool.id}>
              <TableCell>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded bg-brand-light flex items-center justify-center mr-3">
                    <img src={tool.icon} alt={tool.name} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">{tool.name}</div>
                    <div className="text-xs text-muted-foreground line-clamp-1 max-w-[200px]">
                      {tool.description}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className={`category-pill ${getCategoryColor(tool.category)}`}>
                  {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}
                </span>
              </TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>{tool.downloads.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-primary border-primary hover:bg-primary/10"
                  onClick={() => window.open(tool.downloadUrl, "_blank")}
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ToolTable;
