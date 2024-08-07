import { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cn from 'classnames';

export const Input = forwardRef(
	(
		{ error, className, placeholder, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className={styles.inputWrapper}>
				<input
					className={cn(className, styles.input, {
						[styles.error]: error
					})}
					{...props}
					ref={ref}
					placeholder={placeholder}
				/>
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);

Input.displayName = 'Input';
