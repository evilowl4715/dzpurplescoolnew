import { Input, Textarea, Htag } from '../index';
import styles from './Comments.module.css';

const comments = [
	{
		id: 1,
		fio: 'Василий Пупкин',
		email: 'pupkin@gmail.com',
		text: 'Отличная статья,  но не хватает информации о том, как лучше реализовать на гридах более сложные онструкции, например layout для интернет магазина.'
	},

	{
		id: 2,
		fio: 'Ксения морожкина',
		email: 'ууу@gmail.com',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eveniet?'
	}
];

export const Comments = () => {
	return (
		<div className={styles.comments}>
			<Htag htag="h2">Комментарии</Htag>
			<div className={styles.commentsList}>
				{comments.map(c => (
					<div className={styles.comment} key={c.id}>
						<div className={styles.commentTop}>
							<strong>{c.fio}</strong>
							<span>·</span>
							<a href={c.email}>{c.email}</a>
						</div>
						<div className={styles.commentBody}>{c.text}</div>
					</div>
				))}
			</div>
			<div className={styles.commentsForm}>
				<Input placeholder='Имя' />
				<Textarea placeholder='Комментарий' />
                <button type='button' className={styles.submit}>Отправить</button>
			</div>
		</div>
	);
};
