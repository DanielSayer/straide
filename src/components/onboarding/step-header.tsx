interface StepHeaderProps {
  title: string
  step: number
  totalSteps: number
  subtitle?: string
}

export function StepHeader({
  title,
  step,
  totalSteps,
  subtitle,
}: StepHeaderProps) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-sm text-muted-foreground">
        Step {step} of {totalSteps}
      </p>
      <h1 className="text-3xl font-bold text-foreground">{title}</h1>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      <div className="mt-4 h-1 w-full rounded-full bg-secondary">
        <div
          className="h-1 rounded-full bg-primary transition-all duration-300"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  )
}
