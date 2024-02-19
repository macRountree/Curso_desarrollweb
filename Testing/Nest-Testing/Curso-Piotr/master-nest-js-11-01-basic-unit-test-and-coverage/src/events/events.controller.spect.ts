/**
 * * Agrupación
 */

import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { ListEvents } from './input/list.events';
import { User } from 'src/auth/user.entity';
import { NotFoundException } from '@nestjs/common';

// *Llamamos describe y describimos el grupo quue queremos testear

describe('EventsController', () => {
  let eventsController: EventsController;
  let eventsService: EventsService;
  let eventsRepository: Repository<Event>;
  beforeAll(() => console.log('logged')); //*Esta se ejecuta una vez para todo el grupo de funciones que testearemos
  beforeEach(() => {
    //*este callbalc se llama cada vez que se ejecute una prueba dentro de este grupo
    eventsService = new EventsService(eventsRepository); //*si queremos testear los eventService debemos importar la clase evento y el repository

    eventsController = new EventsController(eventsService);
    console.log('Logged twice');
  });

  it('Should return a list of events', async () => {
    // *Antes de agrupar los eventos debemos hacer configuraciones
    // * Primero  realizamos el Setup y el Desmontaje

    const result = { first: 1, last: 1, limit: 10, data: [] };

    //*Podemos simular el trabajo de una funcion con mocks .. para una falsta implementacion y no tener que estar consultando la DB

    // eventsService.getEventsWithAttendeeCountFilteredPaginated = jest
    //   .fn()
    //   .mockImplementation((): any => result);

    const spy = jest
      .spyOn(eventsService, 'getEventsWithAttendeeCountFilteredPaginated')
      .mockImplementation((): any => result);
    expect(await eventsController.findAll(new ListEvents())).toEqual(result); //*Estamos esperando que findAll devuelva la data/metodos en un cierto formato
    expect(spy).toBeCalledTimes(1);
  });

  it('Borra un eventos', async () => {
    const deleteSpy = jest.spyOn(eventsService, 'deleteEvent');
    const findSpy = jest
      .spyOn(eventsService, 'findOne')
      .mockImplementation((): any => undefined);

    try {
      await eventsController.remove(1, new User());
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });
});
