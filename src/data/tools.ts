
import { Tool } from "../components/ToolCard";

// Add base path for images so they work with GitHub Pages deployment
const BASE_PATH = "/colorful-tools-hub";

export const tools: Tool[] = [
  {
    id: "1",
    name: "Slack",
    description: "A messaging app for business that connects people to the information they need",
    icon: `${BASE_PATH}/placeholder.svg`,
    category: "communication",
    downloads: 25000000,
    rating: 4.5,
    downloadUrl: "https://slack.com/downloads"
  },
  {
    id: "2",
    name: "Figma",
    description: "A vector graphics editor and prototyping tool which is primarily web-based",
    icon: `${BASE_PATH}/placeholder.svg`,
    category: "design",
    downloads: 18000000,
    rating: 4.8,
    downloadUrl: "https://www.figma.com/downloads"
  },
  {
    id: "3",
    name: "VS Code",
    description: "A source-code editor made by Microsoft with the Electron Framework",
    icon: `${BASE_PATH}/placeholder.svg`,
    category: "development",
    downloads: 30000000,
    rating: 4.9,
    downloadUrl: "https://code.visualstudio.com/download"
  },
  {
    id: "4",
    name: "Notion",
    description: "An all-in-one workspace for your notes, tasks, wikis, and databases",
    icon: `${BASE_PATH}/placeholder.svg`,
    category: "productivity",
    downloads: 22000000,
    rating: 4.7,
    downloadUrl: "https://www.notion.so/desktop"
  },
  {
    id: "5",
    name: "Mailchimp",
    description: "An all-in-one marketing platform for small businesses",
    icon: `${BASE_PATH}/placeholder.svg`,
    category: "marketing",
    downloads: 15000000,
    rating: 4.2,
    downloadUrl: "https://mailchimp.com/download"
  },
  {
    id: "6",
    name: "GitHub Desktop",
    description: "Focus on what matters instead of fighting with Git",
    icon: `${BASE_PATH}/placeholder.svg`,
    category: "development",
    downloads: 20000000,
    rating: 4.6,
    downloadUrl: "https://desktop.github.com"
  },
  {
    id: "7",
    name: "Adobe XD",
    description: "A vector-based user experience design tool for web and mobile apps",
    icon: `${BASE_PATH}/placeholder.svg`,
    category: "design",
    downloads: 17000000,
    rating: 4.4,
    downloadUrl: "https://www.adobe.com/products/xd.html"
  },
  {
    id: "8",
    name: "Trello",
    description: "A web-based Kanban-style list-making application",
    icon: `${BASE_PATH}/placeholder.svg`,
    category: "productivity",
    downloads: 19000000,
    rating: 4.5,
    downloadUrl: "https://trello.com/platforms"
  }
];

export const categories = [
  {
    id: "productivity",
    name: "Productivity",
    description: "Tools to help you get more done in less time",
    icon: `${BASE_PATH}/placeholder.svg`,
    color: "bg-tool-green",
    count: tools.filter(tool => tool.category === "productivity").length
  },
  {
    id: "design",
    name: "Design",
    description: "Tools for creating beautiful designs and interfaces",
    icon: `${BASE_PATH}/placeholder.svg`,
    color: "bg-tool-purple",
    count: tools.filter(tool => tool.category === "design").length
  },
  {
    id: "development",
    name: "Development",
    description: "Tools for developers to build and ship code faster",
    icon: `${BASE_PATH}/placeholder.svg`,
    color: "bg-tool-blue",
    count: tools.filter(tool => tool.category === "development").length
  },
  {
    id: "communication",
    name: "Communication",
    description: "Tools to help teams collaborate and communicate better",
    icon: `${BASE_PATH}/placeholder.svg`,
    color: "bg-tool-orange",
    count: tools.filter(tool => tool.category === "communication").length
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Tools to help you grow your audience and business",
    icon: `${BASE_PATH}/placeholder.svg`,
    color: "bg-tool-pink",
    count: tools.filter(tool => tool.category === "marketing").length
  }
];
