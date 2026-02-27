import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import HomePage from "./pages/HomePage";
import ShowcasePage from "./pages/ShowcasePage";
import NotFound from "./pages/NotFound";
import QuickStartLayout from "./components/quickstart/QuickStartLayout";
import IntroductionPage from "./pages/quickstart/IntroductionPage";
import InstallPage from "./pages/quickstart/InstallPage";
import UpdatePage from "./pages/quickstart/UpdatePage";
import UninstallPage from "./pages/quickstart/UninstallPage";
import ConfigurationPage from "./pages/quickstart/ConfigurationPage";
import UsagePage from "./pages/quickstart/UsagePage";
import TroubleshootingPage from "./pages/quickstart/TroubleshootingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/showcase" element={<ShowcasePage />} />
            <Route path="/quickstart" element={<QuickStartLayout />}>
              <Route index element={<Navigate to="introduction" replace />} />
              <Route path="introduction" element={<IntroductionPage />} />
              <Route path="install" element={<InstallPage />} />
              <Route path="update" element={<UpdatePage />} />
              <Route path="uninstall" element={<UninstallPage />} />
              <Route path="configuration" element={<ConfigurationPage />} />
              <Route path="usage" element={<UsagePage />} />
              <Route path="troubleshooting" element={<TroubleshootingPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
