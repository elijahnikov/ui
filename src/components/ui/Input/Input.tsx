import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { InputHTMLAttributes } from "react";

const input = cva(
	"w-[100%] border-gray-800 bg-slate-700 py-2 px-3 text-black dark:text-white"
);

interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "disabled">,
		VariantProps<typeof input> {
	placeholder?: string;
	label?: string;
	leftInfo?: string;
	disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			children,
			className,
			leftInfo,
			disabled,
			placeholder,
			label,
			...rest
		},
		ref
	) => {
		return (
			<input
				ref={ref}
				disabled={disabled}
				placeholder={placeholder}
				className={input({})}
				{...rest}
			>
				{children}
			</input>
		);
	}
);

Input.displayName = "Input";

export default Input;
