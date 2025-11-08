import * as React from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Container.displayName = "Container"

export { Container }