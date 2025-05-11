export const getDiscountCode = (discountValue: string) => {
  return cy.fixture("discountCodes").then((discountCodes) => {
    switch (discountValue) {
      case "10%":
        return discountCodes.discountCode10;
      default:
        throw new Error(
          `Discount code value: ${discountValue} is not supported`
        );
    }
  });
};
