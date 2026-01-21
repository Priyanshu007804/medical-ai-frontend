import { Stethoscope, Loader2 } from "lucide-react";
import { Button } from "./ui/Button";

export function SymptomForm({ onSubmit, isLoading, symptoms, setSymptoms }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (symptoms.trim()) {
      onSubmit(symptoms);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="symptoms" className="text-sm font-medium text-[var(--foreground)]">
          Describe Your Symptoms
        </label>
        <textarea
          id="symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Example: I have a headache, mild fever, and sore throat for the past 2 days..."
          className="w-full min-h-[140px] p-4 rounded-xl border border-[var(--border)] bg-white text-[var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
          disabled={isLoading}
        />
      </div>
      <Button type="submit" disabled={isLoading || !symptoms.trim()} className="w-full py-3">
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Analyzing Symptoms...
          </>
        ) : (
          <>
            <Stethoscope className="h-5 w-5" />
            Predict Condition
          </>
        )}
      </Button>
    </form>
  );
}
