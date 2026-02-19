import { useState, useEffect } from "react";

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem("admin_authenticated") === "true");
    setLoading(false);
  }, []);

  const signOut = () => {
    sessionStorage.removeItem("admin_authenticated");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, loading, signOut };
}
