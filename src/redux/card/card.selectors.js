import { createSelector } from "reselect";

const selectCart = (state) => state.card;

export const selectCardItems = createSelector(
  [selectCart],
  (card) => card.cardItems
);

export const selectCardItemsCount = createSelector(
  [selectCardItems],
  (cardItems) =>
    cardItems.reduce(
      (accumulatedQuantity, cardItem) =>
        accumulatedQuantity + cardItem.quantity,
      0
    )
);
