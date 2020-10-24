interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  profile_img_url: string;
  name: string;
  description: string;
  banner_img_url: string;
}

interface ISession {
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

type SessionState = {
  sessions: ISession[]
}

type SessionAction = {
  type: string
  session: ISession
}

type DispatchType = (args: SessionAction) => SessionAction
