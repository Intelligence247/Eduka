import { ResultsContent } from "@/components/results/results-content"

export default function ResultsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark-gray">Results</h1>
        <p className="text-gray-500 mt-1">View and manage student exam scores</p>
      </div>
      <ResultsContent />
    </div>
  )
}
