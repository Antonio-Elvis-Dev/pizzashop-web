import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<never, never, GetPopularProductsResponse>(
  '/metrics/popular-products',
  () => {
    return HttpResponse.json([
      { product: 'Pizza de Calabreza', amount: 40 },
      { product: 'Pizza de Gorgonzola', amount: 20 },
      { product: 'Pizza de 4 Queijos', amount: 16 },
      { product: 'Pizza de Mafiosa', amount: 34 },
      { product: 'Pizza de Peperoni', amount: 23 },
    ])
  },
)
