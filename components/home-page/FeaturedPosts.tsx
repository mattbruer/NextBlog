import classes from './featuredPosts.module.css';
import PostsGrid from './posts/posts-grid';
import { Post } from './posts/post-item';

interface Props {
  posts: Post[];
}
const FeaturedPosts = (props: Props) => {
  console.log(props);
  return (
    <div className={classes.latest}>
      <h2>Featured posts</h2>
      <PostsGrid posts={props.posts} />
    </div>
  );
};

export default FeaturedPosts;
