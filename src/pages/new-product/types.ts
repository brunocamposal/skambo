export interface Product {
  [x: string]: any;
}

export interface Data {
  [x: string]: any;
}

export interface TokenDecoded {
  sub: number;
  userId: number;
  exp: Date;
}

export interface Subcategoria {
  name: string;
  content: string[];
}

export interface Session {
  session: { token: string };
}
