import { Event } from './event.entity';

test('Event should be initialized through constructor', () => {
  // *Creamos una isntancia de nuestro entity
  // * manejamos las diferentes eventos de nuestro entity
  const event = new Event({
    name: 'Interesting event',
    description: 'That was fun',
  });
  //*expect esperamos el valor recibido que se encontró de nuestro evento
  expect(event).toEqual({
    name: 'Interesting event',
    description: 'That was fun',
    id: undefined,
    when: undefined,
    address: undefined,
    attendees: undefined,
    organizer: undefined,
    organizerId: undefined,
    event: undefined,
    attendeeCount: undefined,
    attendeeRejected: undefined,
    attendeeMaybe: undefined,
    attendeeAccepted: undefined,
  });
});
