import styles from './Header.module.css';
import GitIcon from '../../public/github.svg';

export const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
                <a href="/">PowerWeb</a>
            </div>
			<div className={styles.git}>
                <a href="https://github.com/evilowl4715" target='_blank'><GitIcon /></a>
			</div>
		</header>
	);
};
