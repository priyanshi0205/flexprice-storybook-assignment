import * as React from 'react';
import { cn } from '@/lib/utils';
import Label from '../Label';
import { sizes, SizeVariant } from '@/lib/sizing';
import { ReactNode } from 'react';

type InputVariant = 'text' | 'number' | 'formatted-number' | 'integer';

interface NumberFormatOptions {
	allowNegative?: boolean;
	allowDecimals?: boolean;
	thousandSeparator: string;
	decimalSeparator: string;
}

const DEFAULT_FORMAT_OPTIONS: NumberFormatOptions = {
	allowNegative: false,
	allowDecimals: true,
	thousandSeparator: ',',
	decimalSeparator: '.',
};

export const formatAmount = (amount: string, options: NumberFormatOptions = DEFAULT_FORMAT_OPTIONS): string => {
	if (!amount) return '';

	const { allowNegative, allowDecimals, thousandSeparator, decimalSeparator } = {
		...DEFAULT_FORMAT_OPTIONS,
		...options,
	};

	const isNegative = allowNegative && amount.startsWith('-');
	const absAmount = isNegative ? amount.slice(1) : amount;

	const parts = absAmount.split(decimalSeparator);
	const integerPart = parts[0] || '';
	const decimalPart = parts[1];

	const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);

	let result = formattedInteger;
	if (allowDecimals && decimalPart !== undefined) {
		result += decimalSeparator + decimalPart;
	}

	return isNegative ? '-' + result : result;
};

export const removeFormatting = (amount: string, options: NumberFormatOptions = DEFAULT_FORMAT_OPTIONS): string => {
	const { thousandSeparator } = { ...DEFAULT_FORMAT_OPTIONS, ...options };
	const escapedSeparator = thousandSeparator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	return amount.replace(new RegExp(escapedSeparator, 'g'), '');
};

const getInputPattern = (variant: InputVariant, options: NumberFormatOptions = DEFAULT_FORMAT_OPTIONS): RegExp => {
	const { allowNegative, allowDecimals, decimalSeparator } = { ...DEFAULT_FORMAT_OPTIONS, ...options };

	switch (variant) {
		case 'integer':
			return allowNegative ? /^-?\d*$/ : /^\d*$/;
		case 'number':
		case 'formatted-number':
			return allowNegative
				? new RegExp(`^-?\\d*${allowDecimals ? `\\${decimalSeparator}?\\d*` : ''}$`)
				: new RegExp(`^\\d*${allowDecimals ? `\\${decimalSeparator}?\\d*` : ''}$`);
		default:
			return /.*/;
	}
};

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
	label?: string;
	description?: ReactNode;
	error?: string;
	type?: React.HTMLInputTypeAttribute;
	onChange?: (value: string) => void;
	disabled?: boolean;
	suffix?: ReactNode;
	className?: string;
	placeholder?: string;
	id?: string;
	inputPrefix?: ReactNode;
	labelClassName?: string;
	variant?: InputVariant;
	formatOptions?: NumberFormatOptions;
	size?: SizeVariant;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			type,
			label,
			description,
			error,
			onChange,
			disabled,
			placeholder,
			suffix,
			id,
			value,
			inputPrefix,
			labelClassName,
			variant = 'text',
			size = 'default',
			formatOptions = DEFAULT_FORMAT_OPTIONS,
			...props
		},
		ref,
	) => {
		const inputRef = React.useRef<HTMLInputElement | null>(null);
		const [cursorPosition, setCursorPosition] = React.useState<number | null>(null);

		const isFormattedVariant = variant === 'formatted-number' || variant === 'integer';
		const pattern = React.useMemo(() => getInputPattern(variant, formatOptions), [variant, formatOptions]);

		React.useEffect(() => {
			if (cursorPosition !== null && inputRef.current) {
				inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
				setCursorPosition(null);
			}
		}, [cursorPosition]);

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			let newValue = e.target.value;
			const oldValue = (value as string) || '';
			const currentCursorPosition = e.target.selectionStart || 0;

			if (variant !== 'text') {
				if (isFormattedVariant) {
					newValue = removeFormatting(newValue, formatOptions);
				}

				if (!pattern.test(newValue)) return;

				if (isFormattedVariant) {
					const oldFormatCharCount = (oldValue.slice(0, currentCursorPosition).match(/,/g) || []).length;
					const newFormatCharCount = (formatAmount(newValue, formatOptions).slice(0, currentCursorPosition).match(/,/g) || []).length;
					setCursorPosition(currentCursorPosition + (newFormatCharCount - oldFormatCharCount));
				}
			}

			onChange?.(newValue);
		};

		const getValue = () => {
			if (isFormattedVariant && value) {
				return formatAmount(value as string, {
					...formatOptions,
					allowDecimals: variant !== 'integer',
				});
			}
			return value;
		};

		return (
			<div className='space-y-1 w-full flex flex-col'>
				{label && <Label label={label} disabled={disabled} labelClassName={labelClassName} htmlFor={id} />}

				<div
					className={cn(
						sizes[size].height,
						sizes[size].padding,
						sizes[size].text,
						'w-full flex items-center rounded-[6px] border bg-background',
						error ? 'border-destructive' : 'border-input',
						className,
					)}>
					
					{inputPrefix && <div className='mr-2'>{inputPrefix}</div>}

					<input
						{...props}
						id={id}
						type={type}
						value={getValue()}
						disabled={disabled}
						placeholder={placeholder}
						className={cn(
							'flex-1 bg-transparent outline-none',
							disabled && 'text-zinc-500',
						)}
						onChange={handleChange}
						ref={(el) => {
							inputRef.current = el;
							if (typeof ref === 'function') ref(el);
							else if (ref) ref.current = el;
						}}
					/>

					{suffix && <div className='ml-2 text-muted-foreground'>{suffix}</div>}
				</div>

				{description && <p className='text-sm text-muted-foreground'>{description}</p>}
				{error && <p className='text-sm text-destructive'>{error}</p>}
			</div>
		);
	},
);

Input.displayName = 'Input';

export default Input;