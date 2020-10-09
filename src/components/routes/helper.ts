import { Home, Login, Register, UserSales } from '../../pages';
import UserSearch from '../../pages/user-search';
import ChangeProfile from '../change-profile';

export const routesNotAuth = [
  { path: '/', name: 'Home', page: Home },
  { path: '/login', name: 'Login', page: Login },
  { path: '/register', name: 'Register', page: Register },
  { path: '/user-search/:search', name: 'UserSearch', page: UserSearch },
  { path: '/my-sales', name: 'UserSales', page: UserSales },
  { path: '/change-profile', name: 'ChangeProfile', page: ChangeProfile },
];

/*
export const routesAuth = [
  { path: '/', name: 'Timeline', page: Timeline },
]; */
