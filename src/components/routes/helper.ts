import { Home, Login, Register, NewProduct } from '../../pages';
import UserSearch from '../../pages/user-search';

export const routesNotAuth = [
  { path: '/', name: 'Home', page: Home },
  { path: '/login', name: 'Login', page: Login },
  { path: '/register', name: 'Register', page: Register },
  { path: '/new-product', name: 'New Product', page: NewProduct }, // on Auth for testing purposes only
  { path: '/user-search/:search', name: 'UserSearch', page: UserSearch },
  // { path: '/my-sales', name: 'UserSales', page: UserSales }
];

/*
export const routesAuth = [
  { path: '/', name: 'Timeline', page: Timeline },
  { path: '/new-product', name: 'New Product', page: NewProduct },
]; */
