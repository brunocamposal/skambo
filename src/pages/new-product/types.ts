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

export interface Categoria {
  key: number;
  value: any;
  text: any;
}

export interface Session {
  session: { token: string };
}