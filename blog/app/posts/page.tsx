import { Card } from '@/components';
import styles from '../page.module.css';

export default function Posts() {
	return (
		<main className={styles.main}>
			<div className={styles['card-list']}>
				<Card/>
			</div>
		</main>
	);
}
