import { Product, Categoria, Subcategoria } from './types';

export const defaultProduct: Product = {
  userId: 0,
  views: 0,
  boostPlan: '',
  usability: 'Semi Novo',
  value: '0',
  name: '',
  description: '',
  category: 'Outros',
  subCategory: '',
  images: ['https://www.tibs.org.tw/images/default.jpg'],
  thumbnail: 'https://www.tibs.org.tw/images/default.jpg',
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
