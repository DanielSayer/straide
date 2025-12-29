import { Mascot } from '@/components/mascot'
import { cn } from '@/lib/utils'

type MascotVariants =
  | 'cheer'
  | 'happy'
  | 'idle'
  | 'point'
  | 'proud'
  | 'sleep'
  | 'stern'
  | 'think'
  | 'thumbsup'
  | 'wave'

interface OnboardingMascotProps {
  variant: MascotVariants
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: { width: 96, height: 96 },
  md: { width: 160, height: 160 },
  lg: { width: 224, height: 224 },
}

export function OnboardingMascot({
  variant,
  size = 'md',
  className,
}: OnboardingMascotProps) {
  const dimensions = sizeMap[size]

  return (
    <div className={cn('shrink-0', className)}>
      <Mascot
        type={variant}
        width={dimensions.width}
        height={dimensions.height}
        alt={`Dash the kangaroo - ${variant}`}
      />
    </div>
  )
}
