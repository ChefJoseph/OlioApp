export interface IProduct {
  name?: string | undefined,
  region?: string | undefined,
  location?: string | undefined,
  price?: number | undefined,
  description?: string | undefined,
  id?: number | undefined,
  image_url?: string | undefined,
  organic?: boolean | undefined,
  flavored?: boolean| undefined,
  forcooking?: boolean | undefined,
  active?: boolean | undefined,
}

export const EmptyProductValue = {
  results: '',
  autofocus: '',
  name: '',
  region: '',
  location: '',
  price: 0,
  description: '',
  id: -1,
  image_url: '',
  active: true,
} as IProduct;
