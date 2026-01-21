import { AlertCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

export function ResultCard({ result }) {
  if (!result) return null;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-linear-to-r from-teal-50 to-cyan-50 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-(--primary) text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-xl text-(--foreground)">
                {result.disease}
              </CardTitle>
              <CardDescription>Predicted Condition</CardDescription>
              <span className="inline-block mt-2 px-4 py-1 
bg-teal-100 text-teal-800 
rounded-full font-semibold">
  {result.predicted_disease}
</span>
            </div>
          </div>
          
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        <div>
          <h4 className="font-medium text-(--foreground) mb-2 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-(--primary)" />
            Description
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {result?.description}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-(--foreground) mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-(--primary)" />
            Recommended Precautions
          </h4>
          <ul className="space-y-2">
            {result?.precautions?.map((precaution, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="shrink-0 w-6 h-6 rounded-full bg-teal-100 text-(--primary) flex items-center justify-center text-xs font-medium">
                  {index + 1}
                </span>
                {precaution}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-(--border)">
          <p className="text-xs text-gray-400 italic">
            Disclaimer: This is an AI-based prediction and should not replace professional medical advice.
            Please consult a healthcare provider for accurate diagnosis.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
