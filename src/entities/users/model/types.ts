export interface Image {
  id: string;
  url: string;
  width: string;
  height: string;
}

export interface User {
  name: string;
  email: string;
  slug: string;
  description: string | null;
  image: Image | null;
  cover: Image | null;
}
