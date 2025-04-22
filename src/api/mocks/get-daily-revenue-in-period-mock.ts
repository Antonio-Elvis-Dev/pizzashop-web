import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2025', receipt: 3000 },
    { date: '02/01/2025', receipt: 2000 },
    { date: '03/01/2025', receipt: 2500 },
    { date: '04/01/2025', receipt: 1945 },
    { date: '05/01/2025', receipt: 1500 },
    { date: '06/01/2025', receipt: 2015 },
    { date: '07/01/2025', receipt: 2999 },
    { date: '08/01/2025', receipt: 4333 },
    { date: '09/01/2025', receipt: 2333 },
    { date: '10/01/2025', receipt: 3223 },
  ])
})
