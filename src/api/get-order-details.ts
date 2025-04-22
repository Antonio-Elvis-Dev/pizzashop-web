import { api } from '@/lib/axios'

export interface GetOrderDetailsParams {
  orderId: string
}
export interface GetOrderDetailResponse {
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  id: string
  createdAt: string //TODO: o Date a vir para o front end ele vem no formato de string e nao de date de fato
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}
export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailResponse>(`/orders/${orderId}`)

  return response.data
}
