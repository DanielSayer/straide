import { useOnboardingStore } from '@/stores/onboarding-store'
import { StepHeader } from '../step-header'
import { StepNavigation } from '../step-navigation'
import { OnboardingMascot } from '../onboarding-mascot'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface AccountStepProps {
  onBack: () => void
  onNext: () => void
}

export function AccountStep({ onBack, onNext }: AccountStepProps) {
  const { data, updateData } = useOnboardingStore()

  const isValid = data.name.trim() && data.age.trim() && data.email.trim()

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col bg-background px-6 py-8">
      <div className="flex items-start justify-between gap-4">
        <StepHeader title="Your account" step={5} totalSteps={5} />
        <OnboardingMascot variant="happy" size="sm" />
      </div>

      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">What should we call you?</Label>
          <Input
            id="name"
            placeholder="Your name"
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">How old are you?</Label>
          <Input
            id="age"
            type="number"
            placeholder="Your age"
            value={data.age}
            onChange={(e) => updateData({ age: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">What is your email?</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
          />
        </div>
      </div>

      <StepNavigation
        onBack={onBack}
        onNext={onNext}
        nextLabel="Complete"
        nextDisabled={!isValid}
      />
    </div>
  )
}
