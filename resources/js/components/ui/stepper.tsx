"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

export interface ProgressStepperProps extends React.HTMLAttributes<HTMLDivElement> {
  activeStep?: number
  children: React.ReactNode
}

export function ProgressStepper({ activeStep = 0, className, children, ...props }: ProgressStepperProps) {
  const [currentStep, setCurrentStep] = React.useState(activeStep)
  const [completed, setCompleted] = React.useState<Set<number>>(new Set<number>())

  // Count the number of Step children
  const childrenArray = React.Children.toArray(children)
  const steps = childrenArray.length

  // Update internal state when prop changes
  React.useEffect(() => {
    setCurrentStep(activeStep)
  }, [activeStep])

  // Context to share state with child components
  const contextValue = React.useMemo(
    () => ({
      activeStep: currentStep,
      setActiveStep: setCurrentStep,
      steps,
      completed,
      setCompleted,
    }),
    [currentStep, steps, completed],
  )

  return (
    <ProgressStepperContext.Provider value={contextValue}>
      <div className={cn("space-y-8", className)} {...props}>
        {children}
      </div>
    </ProgressStepperContext.Provider>
  )
}

// Context for sharing state between components
const ProgressStepperContext = React.createContext<{
  activeStep: number
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
  steps: number
  completed: Set<number>
  setCompleted: React.Dispatch<React.SetStateAction<Set<number>>>
}>({
  activeStep: 0,
  setActiveStep: () => {},
  steps: 0,
  completed: new Set<number>(),
  setCompleted: () => {},
})

export interface ProgressStepProps extends React.HTMLAttributes<HTMLDivElement> {
  year: string
  name: string
  description: string
//   icon: React.ReactNode
  isCompleted?: boolean
}

export function ProgressStep({ year, name, description,  isCompleted, className, ...props }: ProgressStepProps) {
  const { activeStep, completed } = React.useContext(ProgressStepperContext)
  const stepRef = React.useRef<HTMLDivElement>(null)
  const [stepIndex, setStepIndex] = React.useState(-1)

  // Find the index of this step
  React.useEffect(() => {
    const parent = stepRef.current?.parentElement
    if (parent) {
      const children = Array.from(parent.children)
      setStepIndex(children.indexOf(stepRef.current as HTMLDivElement))
    }
  }, [])

  const isActive = stepIndex === activeStep
  const isComplete = isCompleted !== undefined ? isCompleted : completed.has(stepIndex)
  const isPast = stepIndex < activeStep

  return (
    <div ref={stepRef} className={cn("relative pl-10", className)} {...props}>
      {isComplete && (
        <div className="absolute left-6 top-8 bottom-0 w-px bg-border h-full" />
      )}

      <div
        className={cn(
          "absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2  bg-primary",
         
        )}
      >
      </div>

      <div className="space-y-1 ml-5">
        <div className="text-lg pt-2 font-bold text-muted-foreground ">{year}</div>
        <h3 className={cn("text-base font-medium", isActive && "text-primary", isPast && "text-black")}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
