export interface product {
  user_id: number;
  views: number;
  usersAccess: number;
  condition: string;
  val: string;
  boost: string;
  name: string;
  description: string;
  thumbnail: null | string;
  category: any;
  images: string[];
  interests: string[];
}

export interface token_decoded {
  user_id: number;
  exp: Date;
}

export interface categoria {
  key: number;
  value: string;
  text: string;
}
