// stores/onboarding-store.ts
import { create } from 'zustand'

export type RunningExperience = 'beginner' | 'intermediate' | 'advanced' | null
export type Goal =
  | 'speed'
  | 'distance'
  | 'consistency'
  | 'endurance'
  | 'strength'
  | 'health'
export type Injury =
  | 'knee'
  | 'ankle'
  | 'shin-splints'
  | 'hips'
  | 'lower-back'
  | 'other'
export type TimeOfDay = 'morning' | 'afternoon' | 'evening'
export type Terrain = 'road' | 'trail' | 'track' | 'treadmill'
export type Distance = 'under-5km' | '5-10km' | 'over-10km'

export interface OnboardingData {
  runningExperience: RunningExperience
  goals: Goal[]
  injuries: Injury[]
  otherInfo: string
  preferredTime: TimeOfDay[]
  preferredTerrain: Terrain[]
  typicalDistance: Distance | null
  garminConnected: boolean
  name: string
  age: string
  email: string
}

interface OnboardingState {
  currentStep: number
  data: OnboardingData
  isComplete: boolean

  // Actions
  setCurrentStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  updateData: (data: Partial<OnboardingData>) => void
  setComplete: () => void
  reset: () => void
}

const initialData: OnboardingData = {
  runningExperience: null,
  goals: [],
  injuries: [],
  otherInfo: '',
  preferredTime: [],
  preferredTerrain: [],
  typicalDistance: null,
  garminConnected: false,
  name: '',
  age: '',
  email: '',
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  currentStep: 0,
  data: initialData,
  isComplete: false,

  setCurrentStep: (step) => set({ currentStep: step }),

  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),

  prevStep: () =>
    set((state) => ({ currentStep: Math.max(0, state.currentStep - 1) })),

  updateData: (newData) =>
    set((state) => ({ data: { ...state.data, ...newData } })),

  setComplete: () => set({ isComplete: true }),

  reset: () => set({ currentStep: 0, data: initialData, isComplete: false }),
}))
