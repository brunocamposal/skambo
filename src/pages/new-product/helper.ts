import { Product, Categoria, Subcategoria } from './types';

export const defaultProduct: Product = {
  userId: 0,
  views: 0,
  usersAccess: 0,
  boost: '',
  usability: '3',
  value: '0',
  name: '',
  description: '',
  category: 'Outros',
  images: [],
  thumbnail: '',
  interests: '',
};

export const formatNumber = (n: string): string => {
  return n
    .replace(/(^0)/, '')
    .replace(/\D/g, '')
    .replace(/(\d{1,})(\d{2})$/g, '$1,$2')
    .replace(/(0)(.{?})(\d{?})$/g, '$3')
    .replace(/(\d{1,})(\d{3}),/g, '$1.$2,')
    .replace(/(\d{1,})(\d{3})\./g, '$1.$2.');
};

export const categorias: Categoria[] = [
  { value: 'Vestuarios', text: 'Vestuário' },
  { value: 'Bicicletas', text: 'Bicicletas' },
  { value: 'Esportes', text: 'Esportes' },
  { value: 'Instrumentos_Musicais', text: 'Instrumentos Musicais' },
  { value: 'Jogos', text: 'Jogos' },
  { value: 'Livros', text: 'Livros' },
  { value: 'Moveis', text: 'Móveis' },
  { value: 'Outros', text: 'Outros' },
];

export const subcategorias: Subcategoria[] = [
  { name: 'Jogos', content: ['PS4', 'Xbox One'] },
  { name: 'Livros', content: ['Fantasia', 'Sociologia'] },
  { name: 'Vestuário', content: ['Moletom', 'Calça'] },
  { name: 'Bicicletas', content: ['Infantil', 'Adulto'] },
  { name: 'Esportes', content: ['Futebol', 'Basquete'] },
  { name: 'Instrumentos Musicais', content: ['Violão', 'Teclado Eletrônico'] },
  { name: 'Móveis', content: ['Sala de Estar', 'Quarto'] },
  { name: 'Eletrônicos', content: ['Celular', 'Console'] },
];
