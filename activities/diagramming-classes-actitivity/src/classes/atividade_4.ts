// Sistema de Reserva de Hotel

import { randomUUID } from 'crypto';

type Status = 'RELEASED' | 'PENDING' | 'CHECKIN COMPLETED' | 'CHECKOUT COMPLETED' | 'CANCELLED';
type RoomStatus = 'RELEASED' | 'RESERVED';

class Hotel {
  private id: string;
  private name: string;
  private rooms: Room[] = [];

  constructor( name: string) {
    this.id = randomUUID();
    this.name = name;
  }

  public addRoom(room: Room): void {
    this.rooms.push(room);
  }

  public makeReservation(guest: Guest, checkInDate: Date, checkOutDate: Date): Reserve | undefined  {
    const room = this.rooms.find((room) => room.status === 'RELEASED');

    if (!room) {
      return undefined;
    }

    const reserve = new Reserve(guest, checkInDate, checkOutDate, room);
    room.status = 'RESERVED';
    reserve.status = 'PENDING';
    
    return reserve;
  }
}

class Guest {
  private id: string;
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.id = randomUUID();
    this.name = name;
    this.age = age;
  }

  public makeCheckIn(reserve: Reserve) {
    reserve.status = 'CHECKIN COMPLETED';
  }

  public makeCheckOut(reserve: Reserve): void {
    reserve.status = 'CHECKOUT COMPLETED';
    reserve.room.status = 'RELEASED';
  }

  public cancelReservation(reserve: Reserve): void {
    reserve.status = 'CANCELLED';
    reserve.room.status = 'RELEASED';
  }
}

class Room {
  private id: string;
  public numberRoom: number;
  public status: RoomStatus;

  constructor(numberRoom: number) {
    this.id = randomUUID();
    this.numberRoom = numberRoom;
    this.status = 'RELEASED';
  }
}

class Reserve {
  private id: string;
  private guest: Guest;
  private checkInDate: Date;
  private checkOutDate: Date;
  private itsPayd: boolean;
  private _status: Status;
  private _room: Room;

  constructor(guest: Guest, checkInDate: Date, checkOutDate: Date, room: Room) {
    this.id = randomUUID();
    this.guest = guest;
    this.checkInDate = checkInDate;
    this.checkOutDate = checkOutDate;
    this.itsPayd = false;
    this._status = 'RELEASED';
    this._room = room;   
  }

  public get status(): Status {
    return this._status;
  }

  public set status(status: Status) {
    this._status = status;
  }

  public get room(): Room {
    return this._room;
  }

  public makePayment(): void {
    this.itsPayd = true;
  }
}

export { Guest, Hotel, Room };

