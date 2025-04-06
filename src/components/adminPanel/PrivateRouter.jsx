import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";



export const PrivateRouter = ({ children }) => {
  const token = localStorage.getItem('token');

  // Если токена нет, сразу редиректим на /login
  if (!token) {
      return <Navigate to="/login" replace />;
  }

  try {
      const { exp } = jwtDecode(token);
      const isTokenExpired = exp < Date.now() / 1000;

      if (isTokenExpired) {
          // Токен просрочен — редирект + можно очистить localStorage
          localStorage.removeItem('token');
          return <Navigate to="/login" replace />;
      }

      // Токен валидный — разрешаем доступ
      return children;
  } catch (error) {
      // Если токен битый (некорректный формат) — редирект
      console.error('Invalid token:', error);
      localStorage.removeItem('token');
      return <Navigate to="/login" replace />;
  }
};