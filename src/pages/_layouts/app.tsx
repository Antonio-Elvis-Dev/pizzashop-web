import { Outlet } from 'react-router-dom'

import { useTitleFromRouter } from '@/hooks/useTitleFromRouter'

export function AppLayout() {
  const helmet = useTitleFromRouter()
  return (
    <div>
      <h1>Cabeçalho</h1>
      <div>
        {helmet}
        <Outlet />
      </div>
    </div>
  )
}
