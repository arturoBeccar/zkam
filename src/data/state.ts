export interface InitialState {
  name: number;
}

export interface AppState extends InitialState {
  setName: (name: number) => void;
}

export const initialState: InitialState = {
  name: 1,
};
