import { Home, Login, Register, CategorieSearch, UserSearch } from '../../pages';


export const routesNotAuth = [
  { path: '/', name: 'Home', page: Home },
  { path: '/login', name: 'Login', page: Login },
  { path: '/register', name: 'Register', page: Register },
  { path: '/user-search/:search', name: 'UserSearch', page: UserSearch },
  { path: '/category/:name', name: 'CaregorieSearch', page: CategorieSearch },
];

/*
export const routesAuth = [
  { path: '/', name: 'Timeline', page: Timeline },
]; */
