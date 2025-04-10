// interface PayloadProps {
//   value: string
// }

// interface TooltipProps {
//   payload: PayloadProps[]
//   label: string
//   active: boolean
// }

// interface CustomTooltipProps{
//     data:TooltipProps[]
// }
export function CustomTooltip({ active, payload, label }: any) {
  if (active) {
    return (
      <div className="rounded-md border p-2 shadow text-muted-foreground  ">
        <p className="font-semibold text-sm">{label}</p>
        {payload[0] === 'revenue' ? (
          <p className="text-sm">
            Receita:{' '}
            {payload[0].value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        ) : (
          <p className="text-sm">Produtos {payload[0].value.toLocaleString('pt-BR')}</p>
        )}
      </div>
    )
  }

  return null
}
