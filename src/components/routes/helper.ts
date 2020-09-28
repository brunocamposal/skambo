import { Home, Login, Register } from "../../pages";

export const routesNotAuth = [
  { path: "/", name: "Home", page: Home },
  { path: "/login", name: "Login", page: Login },
  { path: "/register", name: "Register", page: Register },
];

/*
export const routesAuth = [
  { path: '/', name: 'Timeline', page: Timeline },
]; */
