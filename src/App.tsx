import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Toaster richColors closeButton />
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  )
}
