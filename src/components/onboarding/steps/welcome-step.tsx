import { Button } from '@/components/ui/button'
import { OnboardingMascot } from '../onboarding-mascot'
import { Footprints } from 'lucide-react'

interface WelcomeStepProps {
  onGetStarted: () => void
  onHaveAccount: () => void
}

export function WelcomeStep({ onGetStarted, onHaveAccount }: WelcomeStepProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background px-6 py-12">
      <div className="flex flex-col items-center">
        <div className="mb-4 flex items-center gap-2">
          <Footprints className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">Joggernaut</span>
        </div>
        <p className="text-muted-foreground">
          Run relentlessly, with confidence.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <OnboardingMascot variant="wave" size="lg" />
        <p className="mt-6 text-center text-muted-foreground">
          Hi! I am Dash,
          <br />
          your personal running coach.
        </p>
      </div>

      <div className="w-full max-w-sm space-y-3">
        <Button onClick={onGetStarted} className="w-full py-6 text-lg">
          Get Started
        </Button>
        <Button
          variant="ghost"
          onClick={onHaveAccount}
          className="w-full text-muted-foreground"
        >
          I have an account
        </Button>
      </div>
    </div>
  )
}
