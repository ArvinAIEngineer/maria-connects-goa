import { Button } from "@/components/ui/button";
import { Calendar, Users, Info, Sparkles } from "lucide-react";

interface QuickSuggestionsProps {
  suggestions: Array<{
    category: string;
    icon: React.ReactNode;
    items: string[];
  }>;
  onSuggestionClick: (suggestion: string) => void;
}

export const QuickSuggestions = ({ suggestions, onSuggestionClick }: QuickSuggestionsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 px-2 md:px-0">
      {suggestions.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="bg-gradient-card rounded-2xl p-4 md:p-6 shadow-md border border-border/10 animate-fade-in-up hover:shadow-lg transition-all duration-300"
          style={{ animationDelay: `${categoryIndex * 150}ms` }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-xl flex-shrink-0">
              {category.icon}
            </div>
            <h4 className="text-base font-semibold text-foreground">{category.category}</h4>
          </div>
          <div className="space-y-2">
            {category.items.map((suggestion, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => onSuggestionClick(suggestion)}
                className="w-full justify-start text-left text-sm bg-background/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-xl p-3 h-auto whitespace-normal border border-transparent hover:border-primary/20 active:scale-98"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};