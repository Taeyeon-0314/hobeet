import { cn } from "@/utils/cn/util";
import { cva, type VariantProps } from "class-variance-authority";
import Text from "../Text/Text";

const buttonVariants = cva(
  // 기본 스타일
  "flex justify-center items-center w-full max-w-[358px] px-[10px] py-[14px] disabled:bg-gray-100 disabled:text-gray-500",
  {
    variants: {
      // 버튼 타입 variants
      colorType: {
        black: "bg-gray-800 text-white",
        orange: "bg-primary-500 text-gray-900",
        yellow: "bg-primary-300 text-gray-900"
      },
      borderType: {
        circle: "rounded-[25px]",
        rectangle: "rounded-[8px]"
      }
    },
    defaultVariants: {
      borderType: "circle"
    }
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, colorType, borderType, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ colorType, borderType }), className)} {...props}>
      <Text variant="subtitle-16">{children}</Text>
    </button>
  );
};
