export const GET_CURRENT_USER = "GET_CURRENT_USER"

export type Avatar = {
  url: any;
}

export interface UserInfo {
  objectId: string;
  username: string;
  bio?: string;
  fullname: string;
  avatar?: Avatar;
}

export interface GetUserAction {
  type: typeof GET_CURRENT_USER,
  payload: UserInfo
}