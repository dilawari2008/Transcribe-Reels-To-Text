import { Post } from "../instagram/models";
import TextSpeechUtils from "./text-speech.utils";

const mp4ToMp3 = async (username: string) => {
  let page = 0;
  let hasMore = true;
  const pageSize = 50;

  const failed: string[] = [];

  while (hasMore) {
    const items = await Post.find({ username })
      .skip(page * pageSize)
      .limit(pageSize);

    if (items.length > 0) {
      console.log(`Page ${page + 1}:`);

      // Collect all download and conversion promises
      const promises = items
        .filter(item => item.mediaType === "VIDEO")
        .map(async (item) => {
          try {
            await TextSpeechUtils.downloadAndConvertMp4ToMp3(
              item.mediaUrl,
              `/Users/vagishdilawari/Documents/storage/${item.username}/mp3`,
              `/Users/vagishdilawari/Documents/storage/${item.username}/mp4`,
              `${item.username}_${item.id}`
            );
          } catch (err) {
            failed.push(item.mediaUrl);
          }
        });

      // Wait for all promises to complete
      await Promise.allSettled(promises);
    } else {
      hasMore = false;
    }

    page++;
  }

  console.log(`failed: ${JSON.stringify(failed)}`);
};


const TextToSpeechService = {
  mp4ToMp3,
};

export default TextToSpeechService;
