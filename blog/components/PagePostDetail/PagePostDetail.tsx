import { Comments } from "../Comments/Comments";
import { DetailPost } from "../DetailPost/DetailPost";
import { PagePostDetailProps } from "./PagePostDetail.props";
import styles from "./PagePostDetail.module.css";

export const  PagePostDetail = ({ post, comments }: PagePostDetailProps) => {
	return (
		<div className={styles.postPage}>
			<DetailPost post={post} />
			<Comments comments={comments} />
		</div>
	);
};