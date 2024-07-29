import { Comments } from "../Comments/Comments";
import { DetailPost } from "../DetailPost/DetailPost";
import { PagePostDetailProps } from "./PagePostDetail.props";
import styles from "./PagePostDetail.module.css";
import { CommentForm } from "../CommentForm/CommentForm";

export const  PagePostDetail = ({ post, comments }: PagePostDetailProps) => {
	return (
		<div className={styles.postPage}>
			<DetailPost post={post} />
			<Comments comments={comments} />
			<CommentForm postId={post.id}/>
		</div>
	);
};