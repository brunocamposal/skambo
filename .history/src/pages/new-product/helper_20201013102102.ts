import { Product, Categoria } from './types';

export const defaultProduct: Product = {
    usability: "3",
    value: '0',
    name: "",
    description: "",
    category: "Outros",
    images: [],
    thumbnail: '',
    interests: [],
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
    { key: 1, value: 'Eletronicos', text: 'Eletrônicos' },
    { key: 2, value: 'Escritorio', text: 'Escritório' },
    { key: 3, value: 'Esportes', text: 'Esportes' },
    { key: 4, value: 'Instrumentos_Musicais', text: 'Instrumentos Musicais' },
    { key: 5, value: 'Jogos', text: 'Jogos' },
    { key: 6, value: 'Lazer', text: 'Lazer' },
    { key: 7, value: 'Livros', text: 'Livros' },
    { key: 8, value: 'Moveis', text: 'Móveis' },
    { key: 9, value: 'Saude', text: 'Saúde' },
    { key: 10, value: 'Servicos', text: 'Serviços' },
    { key: 11, value: 'Vestuario', text: 'Vestuário' },
    { key: 12, value: 'Outros', text: 'Outros'},
  ];