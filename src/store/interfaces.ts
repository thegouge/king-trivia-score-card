export interface State {
  metaData: MetaData;
  teams: TeamType[];
}

export interface MetaData {
  [key: string]: string;
  date: string;
  location: string;
  arrive: string;
  start: string;
  end: string;
  teams: string;
  players: string;
  empty: string;
  quizRating: string;
  internal: string;
}

export interface TeamType {
  teamName: string;
  teamNum: string;
  total: number;
  rounds: Round[];
}

export interface Round {
  number: number;
  gained: number;
  graded?: boolean;
  breakdown?: Breakdown;
}

interface Breakdown {
  correctAnswers: number;
  doubleDown: boolean;
  bonus: boolean;
}
