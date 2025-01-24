import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary" | "destructive" | "default";
  variant?: "default" | "outlined" | "light";
  className?: string;
  isIcon?: boolean;
  disabled?: boolean;
  loading?: boolean;
  startContent?: ReactNode;
}

export default function button({
  children,
  onClick,
  color = "default",
  variant = "default",
  className,
  isIcon,
  disabled,
  loading,
  startContent,
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        className,
        "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-50 w-min",
        {
          "bg-primary text-white hover:bg-primary/80 border-2  border-primary hover:border-transparent":
            color == "primary" && variant == "default",
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-2  border-secondary hover:border-transparent":
            color == "secondary" && variant == "default",
          "bg-destructive text-white hover:bg-destructive/80 border-2  border-destructive hover:border-transparent":
            color == "destructive" && variant == "default",
          "bg-foreground text-background hover:bg-foreground/80 border-2 border-foreground hover:border-transparent":
            color == "default" && variant == "default",
        },
        {
          "border-2 border-primary text-primary hover:bg-primary hover:text-foreground":
            color == "primary" && variant == "outlined",
          "border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary":
            color == "secondary" && variant == "outlined",
          "border-2 border-destructive text-destructive hover:bg-destructive hover:text-foreground":
            color == "destructive" && variant == "outlined",
          "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background":
            color == "default" && variant == "outlined",
        },
        {
          "hover:bg-primary/30 border-2 border-background hover:border-transparent":
            color == "primary" && variant == "light",
          "hover:bg-secondary-foreground/30 border-2 border-background hover:border-transparen":
            color == "secondary" && variant == "light",
          "hover:bg-destructive/30 border-2 border-background hover:border-transparen":
            color == "destructive" && variant == "light",
          "hover:bg-foreground/30 border-2 border-background hover:border-transparen":
            color == "default" && variant == "light",
        },
        {
          "px-4 py-2": !isIcon,
          "p-3": isIcon,
        }
      )}
    >
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : startContent ? (
        startContent
      ) : null}
      {children}
    </button>
  );
}
