import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../hooks/Api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const CreateRegister = async (userData) => {
    try {

      const res = await api.post("/auth/register", userData);

      return res.data;

    } catch (error) {

      console.log(error);
      throw error;
    }
  };

  const CreateLogin = async (userData) => {
    try {

      const res = await api.post("/auth/login", userData);

   
      localStorage.setItem("token", res.data.token);

    
      setUser(res.data.user);

      return res.data;

    } catch (error) {

      console.log(error);
      throw error;
    }
  };

  const getMyProfile = async () => {
    try {

      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      const res = await api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.data);

    } catch (error) {

      console.log(error);
      setUser(null);

    } finally {

      setLoading(false);
    }
  };


  const logout = () => {

    localStorage.removeItem("token");
    setUser(null);
  };


  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        CreateRegister,
        CreateLogin,
        getMyProfile,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };