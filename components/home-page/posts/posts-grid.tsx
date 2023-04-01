import PostItem from './post-item';
import classes from './posts-grid.module.css';
import { Post } from './post-item';

interface PostProps {
  posts: Post[];
}

const PostsGrid = ({ posts }: PostProps) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post: Post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
};

export default PostsGrid;
