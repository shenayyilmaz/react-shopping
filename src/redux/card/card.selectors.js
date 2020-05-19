import { createSelector } from "reselect";

const selectCard = (state) => state.card;

export const selectCardItems = createSelector(
  [selectCard],
  (card) => card.cardItems
);

export const selectCardHidden = createSelector(
  [selectCard],
  (card) => card.hidden
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

export const selectTotalPrice = createSelector([selectCardItems], (cardItems) =>
  cardItems.reduce(
    (accumulatedQuantity, cardItem) =>
      accumulatedQuantity + cardItem.quantity * cardItem.price,
    0
  )
);
