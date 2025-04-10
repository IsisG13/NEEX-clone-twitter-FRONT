import { User } from "./user.model";

export interface Comment {
  id: number;
  content: string;
  user_id: number;
  tweet_id: number;
  created_at: string;
  updated_at: string;
  user?: User;
  }
