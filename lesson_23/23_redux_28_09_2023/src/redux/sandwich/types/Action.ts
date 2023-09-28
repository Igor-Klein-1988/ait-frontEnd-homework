type Action =
  | { type: "sandwich/addBread"; payload: number }
  | { type: "sandwich/addSausage"; payload: number }
  | { type: "sandwich/addCheese"; payload: number }
  | { type: "sandwich/changeIngredientsOrder"; payload: string };

export default Action;
