import Action from "./types/Action";
import { SandwichState } from "./types/SandwichState";

const initialState: SandwichState = {
  breadCount: 0,
  sausageCount: 0,
  cheeseCount: 0,
  ingredientsOrder: "",
};

export default function counterReducer(
  state: SandwichState = initialState,
  action: Action
): SandwichState {
  switch (action.type) {
    case "sandwich/addBread":
      return { ...state, breadCount: state.breadCount + action.payload };
    case "sandwich/addCheese":
      return { ...state, cheeseCount: state.cheeseCount + action.payload };
    case "sandwich/addSausage":
      return { ...state, sausageCount: state.sausageCount + action.payload };
    case "sandwich/changeIngredientsOrder":
      return {
        ...state,
        ingredientsOrder: state.ingredientsOrder + action.payload,
      };
    default:
      return state;
  }
}
