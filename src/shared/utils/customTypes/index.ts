export declare type IGameParticipant = {
  buyIns: string;
  finalPosition: string;
  name: string;
};

export declare type IPlayer = {
  iban: string;
  name: string;
  preferredPayment: string;
};

export interface IGame {
  buyIn: string;
  date: Date;
  gameLink: string;
  participants: IGameParticipant[];
  table: string;
  zoomLink: string;
}
