export interface IClient {
  id: string;
  name: string;
  username: string;
  biography: string;
  profilePictureUrl: string;
  deleted?: boolean;
}
