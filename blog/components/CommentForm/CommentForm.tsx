'use client';
import { CommentFormProps } from './CommentForm.props';
import styles from './CommentForm.module.css';
import { Input, Textarea } from '../index';
import { useForm } from 'react-hook-form';
import {
	ICommentForm,
	ICommentFormSentResponse
} from './CommentForm.interface';
import { useState } from 'react';
import { API } from '@/app/api';

export const CommentForm = ({
	postId,
	...props
}: CommentFormProps): JSX.Element => {
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ICommentForm>();

	const onSubmit = async (formData: ICommentForm) => {
		try {
			const response = await fetch(API.comments, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ ...formData, postId })
			});

			const responseData: ICommentFormSentResponse = await response.json();

			console.log('Response data:', responseData); // Отладочная информация

			if (response.ok) {
				setIsSuccess(true);
				setError(undefined);
				reset();
			} else {
				setError(
					'Что-то пошло не так: ' +
						(responseData.message || 'Неизвестная ошибка')
				);
				setIsSuccess(false);
			}
		} catch (err) {
			setError('Ошибка сети или сервер недоступен');
			setIsSuccess(false);
		}
	};

	console.log('isSuccess:', isSuccess); // Отладочное сообщение
	console.log('error:', error); // Отладочное сообщение

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.commentsForm} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' }
					})}
					placeholder='Имя'
					error={errors.name}
				/>
				<Textarea
					{...register('description', {
						required: { value: true, message: 'Заполните описание' }
					})}
					error={errors.description}
					placeholder='Комментарий'
				/>
				<button type='submit' className={styles.submit}>
					Отправить
				</button>
			</div>
			{isSuccess && (
				<div className={styles.success}>
					<div className={styles.successTitle}>Спасибо за отзыв</div>
				</div>
			)}
			{error && <div className={styles.error}>{error}</div>}
		</form>
	);
};
