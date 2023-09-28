import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Sandwich: FC = (): JSX.Element => {
  const breadCount = useSelector(
    (state: RootState) => state.sandwich.breadCount
  );
  const cheeseCount = useSelector(
    (state: RootState) => state.sandwich.cheeseCount
  );
  const sausageCount = useSelector(
    (state: RootState) => state.sandwich.sausageCount
  );
  const ingredientsOrder = useSelector(
    (state: RootState) => state.sandwich.ingredientsOrder
  );

  const dispatch = useDispatch();

  // const addCheese = (): void => {
  //   dispatch({ type: "sandwich/addCheese", payload: 1 });
  //   dispatch({ type: "sandwich/changeIngredientsOrder", payload: " bread" });
  // };

  // function addSausage(): void {
  //   dispatch({ type: "sandwich/addSausage", payload: 1 });
  //   dispatch({ type: "sandwich/changeIngredientsOrder", payload: " sausage" });
  // }

  const dispatchAndUpdateIngredients = (
    type: string,
    payload: number,
    ingredientName: string
  ): void => {
    dispatch({ type, payload });
    dispatch({
      type: "sandwich/changeIngredientsOrder",
      payload: ingredientName,
    });
  };

  const addCheese = (): void => {
    dispatchAndUpdateIngredients("sandwich/addCheese", 1, " cheese");
  };

  const addSausage = (): void => {
    dispatchAndUpdateIngredients("sandwich/addSausage", 1, " sausage");
  };

  // console.log({ cheeseCount });

  return (
    <div style={{ paddingLeft: "25px" }}>
      <p style={{ fontSize: "25px" }}>Sandwich ingredients</p>
      <p style={{ fontSize: "20px" }}>
        bread: {breadCount}{" "}
        <button
          type="button"
          onClick={() =>
            dispatchAndUpdateIngredients("sandwich/addBread", 1, " bread")
          }
        >
          add bread
        </button>
      </p>
      <p style={{ fontSize: "20px" }}>
        cheese: {cheeseCount}{" "}
        <button type="button" onClick={() => addCheese()}>
          add cheese
        </button>
      </p>

      <p style={{ fontSize: "20px" }}>
        sausage: {sausageCount}{" "}
        <button type="button" onClick={addSausage}>
          add sausage
        </button>
      </p>

      <p style={{ fontSize: "20px" }}>
        Sandwich ingredients order: <span>{ingredientsOrder}</span>
      </p>
    </div>
  );
};

export default Sandwich;
