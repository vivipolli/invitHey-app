import { ActionName } from "../constants";
import { GetUserAction, UserInfo } from "../types/user.types";

export function currentUserAction(payload: UserInfo): GetUserAction {
  const { bio, username, fullname, objectId, avatar } = payload;
  return {
    type: ActionName.GET_CURRENT_USER,
    payload: {
      username,
      bio,
      fullname,
      avatar,
      objectId,
    }
  }
}
