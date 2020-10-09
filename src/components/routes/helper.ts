import { Home, Login, Register, UserSearch, ProductPage } from '../../pages';

export const routesNotAuth = [
  { path: '/', name: 'Home', page: Home },
  { path: '/login', name: 'Login', page: Login },
  { path: '/register', name: 'Register', page: Register },
  { path: '/user-search/:search', name: 'UserSearch', page: UserSearch },
  { path: '/products/:id', name: 'ProductPage', page: ProductPage },
];

/*
export const routesAuth = [
  { path: '/', name: 'Timeline', page: Timeline },
]; */
