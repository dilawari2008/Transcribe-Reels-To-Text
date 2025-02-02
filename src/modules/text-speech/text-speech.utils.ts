import axios from "axios";
import fs from "fs";
import path from "path";
import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
// import OpenAI from "openai";

// const openai = new OpenAI();

ffmpeg.setFfmpegPath(ffmpegPath || "");

const downloadAndConvertMp4ToMp3 = async (
  url: string,
  mp3Dir: string,
  mp4Dir: string,
  fileName: string
) => {
  try {
    if (!fs.existsSync(mp3Dir)) {
      fs.mkdirSync(mp3Dir, { recursive: true });
    }
    if (!fs.existsSync(mp4Dir)) {
      fs.mkdirSync(mp4Dir, { recursive: true });
    }

    const mp4FilePath = path.join(mp4Dir, `${fileName}.mp4`);
    const mp3FilePath = path.join(mp3Dir, `${fileName}.mp3`);

    // Download the MP4 file
    const response = await axios({
      method: "get",
      url,
      responseType: "stream",
    });

    const writer = fs.createWriteStream(mp4FilePath);

    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", (err) => {
        console.log(err);
        reject();
      });
    });

    await new Promise((resolve, reject) => {
      ffmpeg(mp4FilePath)
        .toFormat("mp3")
        .on("end", resolve)
        .on("error", reject)
        .save(mp3FilePath);
    });

    console.log(`File ${fileName} converted and saved to ${mp3FilePath}`);
  } catch (error) {
    console.error("Error:", error);
    throw new Error();
  }
};

// const audioTranslation = async () => {
//   const translation = await openai.audio.translations.create({
//     file: fs.createReadStream("/path/to/file/german.mp3"),
//     model: "whisper-1",
//   });

//   console.log(translation.text);
// };

const TextSpeechUtils = {
  downloadAndConvertMp4ToMp3,
  // audioTranslation,
};

export default TextSpeechUtils;
