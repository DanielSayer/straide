import { useOnboardingStore } from '@/stores/onboarding-store'
import { StepHeader } from '../step-header'
import { StepNavigation } from '../step-navigation'
import { OnboardingMascot } from '../onboarding-mascot'
import { Button } from '@/components/ui/button'
import { Watch, Check } from 'lucide-react'

interface GarminStepProps {
  onBack: () => void
  onNext: () => void
}

export function GarminStep({ onBack, onNext }: GarminStepProps) {
  const { data, updateData } = useOnboardingStore()

  const handleConnect = () => {
    updateData({ garminConnected: true })
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col bg-background px-6 py-8">
      <div className="flex items-start justify-between gap-4">
        <StepHeader
          title="Connect your Garmin"
          step={4}
          totalSteps={5}
          subtitle="Connect your Garmin device to automatically sync your activities and adjust AI recommendations based on your performance."
        />
        <OnboardingMascot variant="thumbsup" size="sm" />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-secondary">
          <Watch className="h-16 w-16 text-muted-foreground" />
        </div>

        {data.garminConnected ? (
          <div className="flex items-center gap-2 text-primary">
            <Check className="h-5 w-5" />
            <span className="font-medium">Connected to Garmin</span>
          </div>
        ) : (
          <Button onClick={handleConnect} size="lg" className="px-8">
            Connect to Garmin
          </Button>
        )}

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Don't have a Garmin? No problem! You can skip this step and connect
          later.
        </p>
      </div>

      <StepNavigation
        onBack={onBack}
        onNext={onNext}
        nextLabel={data.garminConnected ? 'Next' : 'Skip'}
      />
    </div>
  )
}
