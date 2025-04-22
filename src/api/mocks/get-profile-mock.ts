import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>('/me', () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    name: 'John Doe',
    email: 'teste@teste.com',
    phone: '3312312321',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null,
  })
})
