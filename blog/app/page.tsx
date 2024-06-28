import { Card } from '@/components';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles['card-list']}>
				<Card/>
			</div>
		</main>
	);
}
