import { fetchInstaMedia } from "../handlers";
import { Post } from "./models";
import { IPost } from "./objects";


const fetchAndUpsertPosts = async (handle: string, after?: string) => {
  const { data, paging } = await fetchInstaMedia(handle, after);

  const posts = data.map((obj: any) => {
    const post: IPost = {
      id: obj.id,
      username: obj.username,
      mediaType: obj.media_type,
      mediaUrl: obj.media_url,
      caption: obj.caption,
      permalink: obj.permalink,
      timestamp: obj.timestamp,
    };

    return post;
  });

  const bulkUpsertItems = async (posts: IPost[]) => {
    try {
      const bulkOps = posts.map((post: IPost) => ({
        updateOne: {
          filter: { id: post.id },
          update: { $set: post },
          upsert: true,
        }
      }));
  
      await Post.bulkWrite(bulkOps);
      console.log('Bulk upsert successful');
    } catch (error) {
      console.error('Bulk upsert error:', error);
    }
  }

  await bulkUpsertItems(posts);

  if (paging?.cursors?.after) {
    await fetchAndUpsertPosts(handle, paging?.cursors?.after);
  }
};

const fetchMedia = async (handle: string) => {
  try {
    await fetchAndUpsertPosts(handle);
  } catch (error: any) {
    console.error("Error message:", error?.message);
  }
};

const InstagramService = {
  fetchMedia,
};

export default InstagramService;
