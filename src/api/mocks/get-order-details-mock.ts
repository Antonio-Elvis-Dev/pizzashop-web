import { http, HttpResponse } from 'msw'

import { GetOrderDetailResponse, GetOrderDetailsParams } from './../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'teste@teste.com',
      phone: '4234234234',
    },
    totalInCents: 36000,
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 12000,
        product: { name: 'Pizza Lombo' },
        quantity: 3,
      },
    ],
  })
})
