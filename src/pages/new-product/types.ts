export interface product {
  productID: string;
  userId: number;
  views: number;
  usersAccess: number;
  usability: string;
  value: string;
  boost: string;
  name: string;
  description: string;
  thumbnail: null | string;
  category: any;
  images: string[];
  interests: string[];
}

export interface token_decoded {
  sub: number;
  user_id: number;
  exp: Date;
}

export interface categoria {
  key: number;
  value: string;
  text: string;
}
