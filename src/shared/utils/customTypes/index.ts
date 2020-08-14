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
  id?: string;
}

export interface INextGameData {
  icon: JSX.Element | Element;
  text: string;
  textFromDb?: string;
  inputValue?: string;
  copyId?: string;
  copiedStatus?: boolean;
  copyButton?: boolean;
  copiedMessage?: string;
}
