import { GiftProps } from "../pages/CreateGIftList";
import { GuestProps } from "../pages/CreateGuest";
import { EventProps } from "../pages/Event";

export type StackParams = {
  CreateEvent: { guests?: GuestProps[], gifts?: GiftProps[] };
  CreateGuest: { event: EventProps, currentUser: string };
  Event: { eventId: string };
  Home: undefined;
}