import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cn from 'classnames';

export const Tag = ({ children, className, ...props }: TagProps): JSX.Element => {
	return (
		<div className={cn(styles.tag, className)} {...props}>
			{children}
		</div>
	);
};
