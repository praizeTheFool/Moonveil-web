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
import InstallPage from "./pages/quickstart/InstallPage";
import ConfigurationPage from "./pages/quickstart/ConfigurationPage";
import UsagePage from "./pages/quickstart/UsagePage";
import TroubleshootingPage from "./pages/quickstart/TroubleshootingPage";
import ArchitecturePage from "./pages/quickstart/ArchitecturePage";
import ContributingPage from "./pages/quickstart/ContributingPage";
import ProjectPage from "./pages/quickstart/ProjectPage";
import CreditsPage from "./pages/quickstart/CreditsPage";

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
              <Route index element={<Navigate to="install" replace />} />
              <Route path="install" element={<InstallPage />} />
              <Route path="configuration" element={<ConfigurationPage />} />
              <Route path="usage" element={<UsagePage />} />
              <Route path="architecture" element={<ArchitecturePage />} />
              <Route path="project" element={<ProjectPage />} />
              <Route path="contributing" element={<ContributingPage />} />
              <Route path="credits" element={<CreditsPage />} />
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
