import axios from "axios";
import Config from "../../config";

export const fetchInstaMedia = async (handle: string, after?: string) => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://graph.facebook.com/v16.0/17841454949234073?fields=business_discovery.username(${handle}){media${after?`.after(${after})`:''}{media_type,media_url,caption,timestamp,username,like_count,permalink}}&access_token=${Config.instagram.access_token}`,
  };
  console.log('config', config);
  const res = await axios.request(config);

  return res.data.business_discovery.media;
};