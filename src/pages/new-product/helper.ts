import { Product, Categoria } from './types';

export const defaultProduct: Product = {
  userId: 0,
  views: 0,
  boostPlan: '',
  usability: "Semi Novo",
  value: '0',
  name: "",
  description: "",
  category: "Outros",
  subCategory: "",
  images: [],
  thumbnail: '',
  interests: '',
};

export const formatNumber = (n: string): string => {
  return n
    .replace(/(^0)/, '')
    .replace(/\D/g, "")
    .replace(/(\d{1,})(\d{2})$/g, "$1,$2")
    .replace(/(0)(.{?})(\d{?})$/g, "$3")
    .replace(/(\d{1,})(\d{3}),/g, "$1.$2,")
    .replace(/(\d{1,})(\d{3})\./g, "$1.$2.")
}

export const categorias: Categoria[] = [
  { key: 1, value: 'Vestuarios', text: 'Vestuário' },
  { key: 2, value: 'Bicicletas', text: 'Bicicletas' },
  { key: 3, value: 'Esportes', text: 'Esportes' },
  { key: 4, value: 'Instrumentos_Musicais', text: 'Instrumentos Musicais' },
  { key: 5, value: 'Jogos', text: 'Jogos' },
  { key: 6, value: 'Livros', text: 'Livros' },
  { key: 7, value: 'Moveis', text: 'Móveis' },
  { key: 8, value: 'Outros', text: 'Outros' },
];