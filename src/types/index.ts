export interface IGameParticipant {
  buyIns: string;
  finalPosition: string;
  name: string;
  id: string;
}

export interface IPlayer {
  iban: string;
  name: string;
  preferredPayment: string;
}

export interface IRawDate {
  seconds: number;
  nanoseconds: number;
}

export interface IGame {
  buyIn: string;
  date: any;
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

export interface IPlayerWithStats extends IPlayer {
  numberOfGamesPlayed: number;
  numberOfBuyIns: number;
  numberOfBuyBacks: number;
  arrOfFinalPositions: number[];
  averageFinalPosition: number;
  bestFinish: number;
  worstFinish: number;
  numberOfBest: number;
  numberOfWorst: number;
  id: string;
  games: IGame[];
  stats: IGameParticipant[];
}
