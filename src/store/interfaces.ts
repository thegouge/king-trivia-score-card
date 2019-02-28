export interface State {
  metaData: MetaData;
  teams: Team[];
}

interface MetaData {
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

interface Team {
  teamName: string;
  teamNum: string;
  total: number;
  rounds: Round[];
}

interface Round {
  number: number;
  gained: number;
  graded?: boolean;
}
