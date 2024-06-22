import styles from './Date.module.css';
import { DateProps } from './Date.props';
import cn from 'classnames';

export const Date = ({ children, className, ...props }: DateProps): JSX.Element => {
	return (
		<div className={cn(styles.date, className)} {...props}>
			{children}
		</div>
	);
};
