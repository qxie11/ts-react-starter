import { Section } from '../types/types'

interface IState {
  data: string
}

const initialState: IState = {
  data: ''
};

const reducer = (state: IState = initialState, { type, payload }: Section): IState => {
  return state;
};

export default reducer;
