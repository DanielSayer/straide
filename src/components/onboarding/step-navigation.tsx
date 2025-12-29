import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

interface StepNavigationProps {
  onBack?: () => void
  onNext: () => void
  nextLabel?: string
  showBack?: boolean
  nextDisabled?: boolean
}

export function StepNavigation({
  onBack,
  onNext,
  nextLabel = 'Next',
  showBack = true,
  nextDisabled = false,
}: StepNavigationProps) {
  return (
    <div className="mt-8 flex gap-4">
      {showBack && onBack && (
        <Button variant="outline" onClick={onBack} className="flex-1">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      )}
      <Button onClick={onNext} disabled={nextDisabled} className="flex-1">
        {nextLabel}
      </Button>
    </div>
  )
}
