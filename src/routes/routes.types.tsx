import { GiftProps } from "../pages/CreateGIftList";
import { GuestProps } from "../pages/CreateGuest";

export type StackParams = {
  CreateEvent: { guests?: GuestProps[], gifts?: GiftProps[] };
  CreateGuest: { objectId: string };
}