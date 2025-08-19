import { Button } from "@/components/ui/button";

interface QuickSuggestionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export const QuickSuggestions = ({ suggestions, onSuggestionClick }: QuickSuggestionsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {suggestions.map((suggestion, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={() => onSuggestionClick(suggestion)}
          className="text-xs bg-gradient-elegant hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/20 hover:border-primary shadow-chat hover:shadow-elegant"
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
};