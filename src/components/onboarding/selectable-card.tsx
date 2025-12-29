import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface SelectableCardProps {
  icon: React.ReactNode
  label: string
  selected: boolean
  onClick: () => void
  className?: string
}

export function SelectableCard({
  icon,
  label,
  selected,
  onClick,
  className,
}: SelectableCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all duration-200',
        'hover:border-primary/60 hover:bg-primary/5',
        'dark:hover:bg-primary/10',
        selected
          ? 'border-primary bg-primary/10 text-primary dark:bg-primary/20'
          : 'border-border bg-card text-muted-foreground',
        className,
      )}
    >
      {selected && (
        <div className="absolute right-2 top-2">
          <Check className="h-4 w-4 text-primary" />
        </div>
      )}
      <div className={cn('text-2xl', selected && 'text-primary')}>{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}
