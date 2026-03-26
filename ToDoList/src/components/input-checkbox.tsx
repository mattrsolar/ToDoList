import { cva, type VariantProps } from "class-variance-authority";
import CheckIcon from "../assets/icons/Check.svg?react";
import Icon from "./icon";
import Skeleton from "./skeleton";

export const inputCheckboxWrapperVariants = cva("inline-flex items-center justify-center relative group transition");

export const inputCheckboxVariants = cva(
    `
    appearance-none peer flex items-center cursor-pointer justify-center transition overflow-hidden rounded-sm
    
    `,
    {
        variants: {
            variant: {
                none: "",
                default:`
                    border-2 border-solid
                     border-green-base hover:border-green-dark hover:bg-green-dark/20
                     checked:bg-green-base checked:border-green-base
                     group-hover:checked:bg-green-dark group-hover:checked:border-green-dark
                `
            },
            size: {
                md: "w-5 h-5",
            },
            disabled: {
                true: "pointer-events-none opacity-50"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "md",
            disabled: false
        }
    }
);

export const inputCheckboxIconVariants = cva("absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-white", 
    {
        variants: {
            size: {
                md: "w-3 h-3"
            }
        },
        defaultVariants: {
            size: "md"
        }
    }
);

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled">{
        loading?: boolean;
    }

export default function InputCheckbox({size, variant, disabled, className, loading, ...props}: InputCheckboxProps){
    
    if(loading){
        return <Skeleton rounded="sm" className={inputCheckboxVariants({variant:"none",size, disabled, className})} />
    }
    
    return(
        <label className={inputCheckboxWrapperVariants({className})}>
            <input type="checkbox" className={inputCheckboxVariants({variant, size, disabled})} {...props}/>
            <Icon svg={CheckIcon} className={inputCheckboxIconVariants({size})}/>
        </label>
    );
}
