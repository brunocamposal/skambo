import { Home, Login, Register, NewProduct } from '../../pages';

export const routesNotAuth = [
  { path: '/', name: 'Home', page: Home },
  { path: '/login', name: 'Login', page: Login },
  { path: '/register', name: 'Register', page: Register },
  { path: '/new-product', name: 'New Product', page: NewProduct }, // on Auth for testing pirposes only
];

/*
export const routesAuth = [
  { path: '/', name: 'Timeline', page: Timeline },
  { path: '/new-product', name: 'New Product', page: NewProduct },
]; */
