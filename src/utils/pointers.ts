export const userPointer = (userId: string) => {
  return ({
    __type: 'Pointer',
    className: '_User',
    objectId: userId,
  })
};

export const eventPointer = (eventId: string) => {
  return ({
    __type: 'Pointer',
    className: 'Event',
    objectId: eventId,
  })
};