import {
  useOnboardingStore,
  type TimeOfDay,
  type Terrain,
  type Distance,
} from '@/stores/onboarding-store'
import { SelectableCard } from '../selectable-card'
import { StepHeader } from '../step-header'
import { StepNavigation } from '../step-navigation'
import { OnboardingMascot } from '../onboarding-mascot'
import {
  Sun,
  Sunset,
  Moon,
  LineSquiggle,
  Trees,
  Circle,
  Home,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface PreferencesStepProps {
  onBack: () => void
  onNext: () => void
}

const timeOptions: {
  value: TimeOfDay
  label: string
  icon: React.ReactNode
}[] = [
  { value: 'morning', label: 'Morning', icon: <Sun className="h-6 w-6" /> },
  {
    value: 'afternoon',
    label: 'Afternoon',
    icon: <Sunset className="h-6 w-6" />,
  },
  { value: 'evening', label: 'Evening', icon: <Moon className="h-6 w-6" /> },
]

const terrainOptions: {
  value: Terrain
  label: string
  icon: React.ReactNode
}[] = [
  { value: 'road', label: 'Road', icon: <LineSquiggle className="h-6 w-6" /> },
  { value: 'trail', label: 'Trail', icon: <Trees className="h-6 w-6" /> },
  { value: 'track', label: 'Track', icon: <Circle className="h-6 w-6" /> },
  {
    value: 'treadmill',
    label: 'Treadmill',
    icon: <Home className="h-6 w-6" />,
  },
]

const distanceOptions: { value: Distance; label: string }[] = [
  { value: 'under-5km', label: '< 5 km' },
  { value: '5-10km', label: '5-10 km' },
  { value: 'over-10km', label: '10+ km' },
]

export function PreferencesStep({ onBack, onNext }: PreferencesStepProps) {
  const { data, updateData } = useOnboardingStore()

  const handleTimeToggle = (time: TimeOfDay) => {
    const current = data.preferredTime
    const updated = current.includes(time)
      ? current.filter((t) => t !== time)
      : [...current, time]
    updateData({ preferredTime: updated })
  }

  const handleTerrainToggle = (terrain: Terrain) => {
    const current = data.preferredTerrain
    const updated = current.includes(terrain)
      ? current.filter((t) => t !== terrain)
      : [...current, terrain]
    updateData({ preferredTerrain: updated })
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col bg-background px-6 py-8">
      <div className="flex items-start justify-between gap-4">
        <StepHeader title="Your preferences" step={3} totalSteps={5} />
        <OnboardingMascot variant="point" size="sm" />
      </div>

      <div className="flex-1 space-y-8">
        <div>
          <h3 className="mb-4 font-semibold text-foreground">
            When do you prefer to run?
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {timeOptions.map((option) => (
              <SelectableCard
                key={option.value}
                icon={option.icon}
                label={option.label}
                selected={data.preferredTime.includes(option.value)}
                onClick={() => handleTimeToggle(option.value)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-foreground">
            Preferred terrain
          </h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {terrainOptions.map((option) => (
              <SelectableCard
                key={option.value}
                icon={option.icon}
                label={option.label}
                selected={data.preferredTerrain.includes(option.value)}
                onClick={() => handleTerrainToggle(option.value)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-foreground">
            Typical running distance
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {distanceOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => updateData({ typicalDistance: option.value })}
                className={cn(
                  'rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all',
                  data.typicalDistance === option.value
                    ? 'border-primary bg-primary/10 text-primary dark:bg-primary/20'
                    : 'border-border text-muted-foreground hover:border-primary/60',
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <StepNavigation onBack={onBack} onNext={onNext} />
    </div>
  )
}
