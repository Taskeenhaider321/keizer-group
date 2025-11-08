"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const customButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-medium',
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-md",
        outline:
          "border border-primary text-primary hover:bg-primary/10 bg-transparent",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/50",
        "gradient-alt":
          "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg",

        // ✅ Added new variants
        primary:
          "bg-[#004B8D] text-white hover:bg-blue-700 rounded-full hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-600",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg dark:bg-red-500 dark:hover:bg-red-600",
      },
      size: {
        xs: "h-7 px-2.5 text-xs font-jakarta rounded gap-1",
        sm: "h-8 px-3 text-sm font-jakarta rounded-md gap-1.5 has-[>svg]:px-2",
        default: "h-9 px-4 py-2 font-jakarta rounded-md has-[>svg]:px-3",
        lg: "h-10 px-6 rounded-full font-jakarta text-semibold text-white text-base has-[>svg]:px-4",
        xl: "h-11 px-8 rounded-full font-jakarta text-semibold text-base has-[>svg]:px-5",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        rounded: "full",
        className: "rounded-full",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "md",
      fullWidth: false,
    },
  }
);

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      fullWidth,
      asChild = false,
      loading = false,
      icon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    return (
      <Comp
        ref={ref}
        disabled={isDisabled}
        className={cn(
          customButtonVariants({
            variant,
            size,
            rounded,
            fullWidth,
            className,
          })
        )}
        {...props}
      >
        {loading ? (
          <>
            <div className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            {children && <span>{children}</span>}
          </>
        ) : (
          <>
            {icon && <span className="flex items-center">{icon}</span>}
            {children}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "CustomButton";

export { Button, customButtonVariants };
export type { CustomButtonProps };
