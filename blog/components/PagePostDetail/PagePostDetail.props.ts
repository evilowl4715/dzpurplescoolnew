import { CommentsModel } from "@/interface/comments.interface";
import { PostsModel } from "@/interface/posts.interface";

export interface PagePostDetailProps {
    post: PostsModel
    comments: CommentsModel[]
}
