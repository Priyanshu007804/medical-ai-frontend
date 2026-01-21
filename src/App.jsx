import { useState } from "react";
import { Activity, Brain, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { SymptomForm } from "./components/Symptom-form";
import { ResultCard } from "./components/ResultCard";

// const mockDiseaseDatabase = {
//   fever: {
//     disease: "Common Flu (Influenza)",
//     description: "Influenza is a viral infection that attacks your respiratory system. It's commonly called the flu and is different from stomach flu viruses that cause diarrhea and vomiting.",
//     precautions: [
//       "Get plenty of rest and sleep",
//       "Stay hydrated with water, juice, and warm soups",
//       "Take over-the-counter fever reducers as directed",
//       "Stay home to prevent spreading the infection",
//     ],
//     severity: "medium",
//   },
//   headache: {
//     disease: "Tension Headache",
//     description: "A tension headache is generally a diffuse, mild to moderate pain that's often described as feeling like a tight band around your head. It's the most common type of headache.",
//     precautions: [
//       "Take a break from screens and rest your eyes",
//       "Apply a warm or cold compress to your head or neck",
//       "Practice relaxation techniques and stress management",
//       "Ensure you're getting adequate sleep each night",
//     ],
//     severity: "low",
//   },
//   chest: {
//     disease: "Respiratory Infection",
//     description: "A respiratory infection affects the lungs and airways, causing symptoms like coughing, chest discomfort, and difficulty breathing. It can be caused by viruses or bacteria.",
//     precautions: [
//       "Seek medical attention if breathing becomes difficult",
//       "Use a humidifier to ease breathing",
//       "Avoid smoking and secondhand smoke exposure",
//       "Take prescribed medications as directed by your doctor",
//     ],
//     severity: "high",
//   },
// };

const features = [
  { icon: Brain, label: "AI-Powered Analysis" },
  { icon: Clock, label: "Instant Results" },
  { icon: Shield, label: "Privacy First" },
];

function App() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async () => {
    setIsLoading(true);
    setResult(null);

   const response = await fetch('https://medical-ai-chatbot-backend-2.onrender.com/predict',{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      symptoms: symptoms
    })
   })
const prediction= await response.json()

    setResult(prediction);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-(--background)">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-(--border)">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-linear-to-br from-teal-500 to-cyan-500 text-white">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-(--foreground)">MediCheck AI</h1>
              <p className="text-xs text-gray-500">Intelligent Symptom Analysis</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-(--foreground)">
            What symptoms are you experiencing?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Describe your symptoms in detail and our AI will analyze them to provide potential conditions and recommended precautions.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-(--border) text-sm text-gray-600"
                >
                  <Icon className="h-4 w-4 text-(--primary)" />
                  {feature.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* Symptom Input Card */}
        <Card>
          <CardHeader>
            <CardTitle>Symptom Checker</CardTitle>
            <CardDescription>
              Enter your symptoms below for an AI-powered health assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SymptomForm
              onSubmit={handlePredict}
              isLoading={isLoading}
              symptoms={symptoms}
              setSymptoms={setSymptoms}
            />
          </CardContent>
        </Card>

        {/* Result Card */}
        <ResultCard result={result} />
      </main>
    </div>
  );
}

export default App;