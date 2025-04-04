import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";
export function App() {
  return (
    <HelmetProvider>
      <Toaster richColors closeButton />
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  );
}
