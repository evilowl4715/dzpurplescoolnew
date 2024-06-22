import styles from './ReadingTime.module.css';
import { ReadingTimeProps } from './ReadingTime.props';
import cn from 'classnames';

export const ReadingTime = ({ children, className, ...props }: ReadingTimeProps): JSX.Element => {
	return (
		<div className={cn(styles['reading-time'], className)} {...props}>
			{children}
		</div>
	);
};
