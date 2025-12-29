import {
  useOnboardingStore,
  type RunningExperience,
  type Goal,
} from '@/stores/onboarding-store'
import { SelectableCard } from '../selectable-card'
import { StepHeader } from '../step-header'
import { StepNavigation } from '../step-navigation'
import { OnboardingMascot } from '../onboarding-mascot'
import {
  User,
  TrendingUp,
  Award,
  Zap,
  Target,
  Dumbbell,
  Heart,
} from 'lucide-react'

interface AboutYourselfStepProps {
  onBack: () => void
  onNext: () => void
}

const experienceOptions: {
  value: RunningExperience
  label: string
  icon: React.ReactNode
}[] = [
  { value: 'beginner', label: 'Beginner', icon: <User className="h-6 w-6" /> },
  {
    value: 'intermediate',
    label: 'Intermediate',
    icon: <TrendingUp className="h-6 w-6" />,
  },
  { value: 'advanced', label: 'Advanced', icon: <Award className="h-6 w-6" /> },
]

const goalOptions: { value: Goal; label: string; icon: React.ReactNode }[] = [
  { value: 'speed', label: 'Speed', icon: <Zap className="h-6 w-6" /> },
  {
    value: 'distance',
    label: 'Distance',
    icon: <Target className="h-6 w-6" />,
  },
  {
    value: 'consistency',
    label: 'Consistency',
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    value: 'endurance',
    label: 'Endurance',
    icon: <Dumbbell className="h-6 w-6" />,
  },
  {
    value: 'strength',
    label: 'Strength',
    icon: <Dumbbell className="h-6 w-6" />,
  },
  { value: 'health', label: 'Health', icon: <Heart className="h-6 w-6" /> },
]

export function AboutYourselfStep({ onBack, onNext }: AboutYourselfStepProps) {
  const { data, updateData } = useOnboardingStore()

  const handleExperienceSelect = (experience: RunningExperience) => {
    updateData({ runningExperience: experience })
  }

  const handleGoalToggle = (goal: Goal) => {
    const currentGoals = data.goals
    const newGoals = currentGoals.includes(goal)
      ? currentGoals.filter((g) => g !== goal)
      : [...currentGoals, goal]
    updateData({ goals: newGoals })
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col bg-background px-6 py-8">
      <div className="flex items-start justify-between gap-4">
        <StepHeader title="Tell us about yourself" step={1} totalSteps={5} />
        <OnboardingMascot variant="think" size="sm" />
      </div>

      <div className="flex-1 space-y-8">
        <div>
          <h3 className="mb-4 font-semibold text-foreground">
            Running Experience
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {experienceOptions.map((option) => (
              <SelectableCard
                key={option.value}
                icon={option.icon}
                label={option.label}
                selected={data.runningExperience === option.value}
                onClick={() => handleExperienceSelect(option.value)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-foreground">
            What are your goals?
          </h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {goalOptions.map((option) => (
              <SelectableCard
                key={option.value}
                icon={option.icon}
                label={option.label}
                selected={data.goals.includes(option.value)}
                onClick={() => handleGoalToggle(option.value)}
              />
            ))}
          </div>
        </div>
      </div>

      <StepNavigation
        onBack={onBack}
        onNext={onNext}
        nextDisabled={!data.runningExperience}
      />
    </div>
  )
}
