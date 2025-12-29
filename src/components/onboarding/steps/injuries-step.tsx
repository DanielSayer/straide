import { useOnboardingStore, type Injury } from '@/stores/onboarding-store'
import { SelectableCard } from '../selectable-card'
import { StepHeader } from '../step-header'
import { StepNavigation } from '../step-navigation'
import { OnboardingMascot } from '../onboarding-mascot'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface InjuriesStepProps {
  onBack: () => void
  onNext: () => void
}

const injuryOptions: { value: Injury; label: string; icon: string }[] = [
  { value: 'knee', label: 'Knee', icon: '🦵' },
  { value: 'ankle', label: 'Ankle', icon: '🦶' },
  { value: 'shin-splints', label: 'Shin Splints', icon: '🦴' },
  { value: 'hips', label: 'Hips', icon: '🦴' },
  { value: 'lower-back', label: 'Lower Back', icon: '🔙' },
  { value: 'other', label: 'Other', icon: '➕' },
]

export function InjuriesStep({ onBack, onNext }: InjuriesStepProps) {
  const { data, updateData } = useOnboardingStore()

  const handleInjuryToggle = (injury: Injury) => {
    const currentInjuries = data.injuries
    const newInjuries = currentInjuries.includes(injury)
      ? currentInjuries.filter((i) => i !== injury)
      : [...currentInjuries, injury]
    updateData({ injuries: newInjuries })
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col bg-background px-6 py-8">
      <div className="flex items-start justify-between gap-4">
        <StepHeader
          title="Any injuries or pain?"
          step={2}
          totalSteps={5}
          subtitle="Let us know about past injuries"
        />
        <OnboardingMascot variant="stern" size="sm" />
      </div>

      <div className="flex-1 space-y-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {injuryOptions.map((option) => (
            <SelectableCard
              key={option.value}
              icon={<span className="text-2xl">{option.icon}</span>}
              label={option.label}
              selected={data.injuries.includes(option.value)}
              onClick={() => handleInjuryToggle(option.value)}
            />
          ))}
        </div>

        <div className="space-y-2">
          <Label htmlFor="otherInfo" className="text-foreground">
            Other important information
          </Label>
          <p className="text-sm text-muted-foreground">
            Add any other information or related notes to assist with your
            training.
          </p>
          <Textarea
            id="otherInfo"
            placeholder="Start typing..."
            value={data.otherInfo}
            onChange={(e) => updateData({ otherInfo: e.target.value })}
            className="min-h-30 resize-none"
          />
        </div>
      </div>

      <StepNavigation onBack={onBack} onNext={onNext} />
    </div>
  )
}
