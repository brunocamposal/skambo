import { Home, Login, Register, UserSales } from '../../pages';
import UserSearch from '../../pages/user-search';

export const routesNotAuth = [
  { path: '/', name: 'Home', page: Home },
  { path: '/login', name: 'Login', page: Login },
  { path: '/register', name: 'Register', page: Register },
  { path: '/user-search/:search', name: 'UserSearch', page: UserSearch },
];

/*
export const routesAuth = [
  { path: '/', name: 'Timeline', page: Timeline },
]; */
