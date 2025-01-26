import { Navigate } from "react-router-dom";



export const PrivateRouter = ({children }) => {
    const user = localStorage.getItem('token')
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };