
import { Navigate } from "react-router-dom";

const Index = () => {
  // Redirect to HomePage with absolute path to ensure consistent navigation
  return <Navigate to="/" replace />;
};

export default Index;
