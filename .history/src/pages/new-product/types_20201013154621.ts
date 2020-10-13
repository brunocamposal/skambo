export interface Product extends Data {
  // [x?: string]: number | string | string[];
  userId?: number | string;
  views?: number;
  usersAccess?: number;
  usability: string;
  value: string;
  boost?: string;
  name: string;
  description: string;
  images?: string[];
  thumbnail?: null | string;
  category: string;
  interests?: string;
}
export interface Data {
  [x: string]: string | string[];
  // usability: string;
  // value: string;
  // name: string;
  // description: string;
  // category: string;
  // interests?: string;
}

export interface TokenDecoded {
  sub: number;
  userId: number;
  exp: Date;
}

export interface Categoria {
  key: number;
  value: string;
  text: string;
}

export interface Session {
  session: { token: string };
}