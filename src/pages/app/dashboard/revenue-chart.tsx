import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CustomTooltip } from '@/components/custom-tooltip'

const data = [
  { date: '10/11', revenue: 1200 },
  { date: '11/11', revenue: 1233 },
  { date: '12/11', revenue: 500 },
  { date: '13/11', revenue: 667 },
  { date: '14/11', revenue: 899 },
  { date: '15/11', revenue: 1000 },
  { date: '16/11', revenue: 899 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              }
            />
            <Tooltip content={<CustomTooltip active data={data} />} />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet[500]}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
