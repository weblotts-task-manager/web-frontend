import { createRoot } from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import "../src/assets/css/index.css";
import App from "./App.tsx";
import store from "./app/store.ts";
import { ThemeProvider } from "./features/theme/ThemeProvider.tsx";

import "../src/assets/css/Dashboard.css";
import queryClient from "./utils/queryClient.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      {/* <PersistGate loading="null" persistor={persistor}> */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
      {/* </PersistGate> */}
    </QueryClientProvider>
  </Provider>
);
