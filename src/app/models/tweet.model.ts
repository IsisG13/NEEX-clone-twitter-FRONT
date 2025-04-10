import { User } from './user.model';
import { Comment } from './comment.model';

export interface TwitterModel {
  id: number;
  content: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  user?: User;
  comments?: Comment[];
}
