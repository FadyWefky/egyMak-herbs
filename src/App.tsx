import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "./contexts/LanguageContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import { useEffect } from "react";
import { initEnhancedScrolling } from "./utils/smoothScroll";
import { initCountingAnimations } from "./utils/countingAnimation";
import { initScrollAnimations, addScrollAnimationStyles } from "./utils/scrollAnimations";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initEnhancedScrolling();
    initCountingAnimations();
    addScrollAnimationStyles();
    initScrollAnimations();
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Index />
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
