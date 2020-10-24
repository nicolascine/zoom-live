export interface User {
  id: number;
  first_name: string;
  last_name: string;
  profile_img_url: string;
  name: string;
  description: string;
  banner_img_url: string;
}

export interface Session {
  id: number;
  user_id: number;
  name: string;
  description: string;
  start_time: number;
  cost: number;
  duration: number;
  meeting_url: {
    value: string;
  };
  profile_img_url: string;
  tags: string;
  is_draft: any;
  zoom_meeting_join_url: string;
  user: User;
}
