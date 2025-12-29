import { useOnboardingStore } from '@/stores/onboarding-store'
import { AnimatePresence, motion } from 'motion/react'
import { AboutYourselfStep } from './steps/about-yourself-step'
import { AccountStep } from './steps/account-step'
import { CompleteStep } from './steps/complete-step'
import { GarminStep } from './steps/garmin-step'
import { InjuriesStep } from './steps/injuries-step'
import { PreferencesStep } from './steps/preferences-step'
import { WelcomeStep } from './steps/welcome-step'

export function OnboardingFlow() {
  const {
    currentStep,
    isComplete,
    nextStep,
    prevStep,
    setComplete,
    setCurrentStep,
    data,
  } = useOnboardingStore()

  const handleGetStarted = () => {
    nextStep()
  }

  const handleHaveAccount = () => {
    console.log('Navigate to login')
  }

  const handleComplete = () => {
    setComplete()
    console.log('Onboarding complete:', data)
  }

  const handleStartRunning = () => {
    console.log('Navigate to main app')
  }

  const renderStep = () => {
    if (isComplete) {
      return <CompleteStep onStartRunning={handleStartRunning} />
    }

    switch (currentStep) {
      case 0:
        return (
          <WelcomeStep
            onGetStarted={handleGetStarted}
            onHaveAccount={handleHaveAccount}
          />
        )
      case 1:
        return (
          <AboutYourselfStep
            onBack={() => setCurrentStep(0)}
            onNext={nextStep}
          />
        )
      case 2:
        return <InjuriesStep onBack={prevStep} onNext={nextStep} />
      case 3:
        return <PreferencesStep onBack={prevStep} onNext={nextStep} />
      case 4:
        return <GarminStep onBack={prevStep} onNext={nextStep} />
      case 5:
        return <AccountStep onBack={prevStep} onNext={handleComplete} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={isComplete ? 'complete' : currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
