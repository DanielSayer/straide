import { Button } from '@/components/ui/button'
import { OnboardingMascot } from '../onboarding-mascot'
import { Footprints } from 'lucide-react'

interface CompleteStepProps {
  onStartRunning: () => void
}

export function CompleteStep({ onStartRunning }: CompleteStepProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-12">
      <OnboardingMascot variant="cheer" size="lg" className="mb-8" />

      <div className="flex items-center gap-2 text-primary">
        <Footprints className="h-6 w-6" />
      </div>

      <h1 className="mt-4 text-3xl font-bold text-foreground">
        You're all set!
      </h1>

      <p className="mt-4 max-w-md text-center text-muted-foreground">
        Get personalized running plans, real-time coaching, and track your
        progress.
      </p>

      <Button onClick={onStartRunning} size="lg" className="mt-8 px-12">
        Start Running
      </Button>
    </div>
  )
}
