"use client";

import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2",
          language === "en" ? "text-primary font-bold" : "text-muted-foreground"
        )}
      >
        EN
      </Button>
      <div className="h-4 w-px bg-border" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("tr")}
        className={cn(
          "px-2",
          language === "tr" ? "text-primary font-bold" : "text-muted-foreground"
        )}
      >
        TR
      </Button>
    </div>
  );
}
