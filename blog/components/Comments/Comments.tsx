'use client';
import { Htag } from '../index';
import styles from './Comments.module.css';
import { CommentsProps } from './Comments.props';

export function Comments({ comments }: CommentsProps) {
	return (
		<div className={styles.comments}>
			<Htag htag='h2'>Комментарии</Htag>
			<div className={styles.commentsList}>
				{comments &&
					comments.map(c => (
						<div className={styles.comment} key={c.id}>
							<div className={styles.commentTop}>
								<strong>{c.name}</strong>
								<span>·</span>
								<a href={c.email}>{c.email}</a>
							</div>
							<div className={styles.commentBody}>{c.body}</div>
						</div>
					))}
			</div>
		</div>
	);
}
