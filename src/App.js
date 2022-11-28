import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="container mx-auto">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
      </QueryClientProvider>
      <Toaster />
    </div>
  );
}

export default App;
