
import { Htag, Tag, Date, Like, Ptag, ReadingTime } from '../../components';
import styles from './Card.module.css';
import img from '../../public/img-blog.png';
import Image from 'next/image';
import ArrowRight from '../../public/arrow-more.svg';
import { getPosts } from '@/api/posts';
import LikeClient from '../LikeClient/Like';


export async function Card() {
	const posts = await getPosts();

	return (
		<>
			{posts.map(m => (
				<div key={m.id} className={styles.card}>
					<div className={styles['card__img']}>
						<Image src={img} alt='Превьюшка' />
					</div>
					<div className={styles['card-body']}>
						<div className={styles['card-body__content']}>
							<div className={styles['card-body__top']}>
								<div className={styles['card-body-top__left']}>
									<Tag>Front-end</Tag>
									<span>·</span>
									<Date>1 месяц назад</Date>
								</div>
								<div>
								<LikeClient postId={m.id} />
								</div>
							</div>
							<Htag htag='h3'>{m.title}</Htag>
							<Ptag size='s'>
								{m.body}
							</Ptag>
						</div>
						<div className={styles['card-body__bottom']}>
							<ReadingTime>3 минуты</ReadingTime>
							<div className={styles['more']}>
								<a href='#'>
									Читать
									<ArrowRight />
								</a>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

// тест
