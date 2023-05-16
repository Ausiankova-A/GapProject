const { BaseElements } = require("../baseElements");

class Cart extends BaseElements {
  constructor(page) {
    super();
    this.page = page;
    this.cartButton = ".top-panel__userbar__cart__item";
    this.firstItemTitle =
      ".goods-table-cell__line.goods-table-cell__line_title";
    this.itemTitle = ".goods-table-cell__line.goods-table-cell__line_title";
    this.itemCheckbox =
      ".goods-table__cell.goods-table__cell_first .i-checkbox_large";
    this.checkAllCheckbox = ".checkAll";
    this.emptyCartTitle =
      ".i-textual__plain.i-textual__plain_arrow.i-textual__plain_limited";
    this.checkoutButton = ".deal-form-footer__control";
    this.deliveryAddressButton =
      ".deal-form-main__input_faded.deal-form-main__input_valid";
    this.addAddressButton =
      ".i-context-box-main__footer-cell .i-button_gray.i-button_large";
    this.deliveryStreet = "#i-street";
    this.deliveryHouse = "#i-house";
    this.deliveryFlat = "#i-flat";
    this.deliveryEntrance = "#i-entrance";
    this.deliveryFloor = "#i-floor";
    this.addAddress = ".i-context-box-list__input_link";
    this.deliveryAddressField =
      ".deal-form-main__input.deal-form-main__input_popup.i-input.i-input_no-border-radius.deal-form-main__input_faded.deal-form-main__input_valid";
    this.nameSurnameErrorMessage = "#enter-fullname .i-popover__main";
    this.nameField = "#enter-fullname .deal-form-main__input";
    this.nameFieldData = ".deal-form-main__placeholder-h";
    this.paymentMethodField = "#select-payment-link";
    this.paymentByInstallmentCard = ".payment-methods li:nth-child(2)";
    this.paymentMethodFieldData =
      "#select-payment-link .i-input__sub:first-child";
    this.firstItemInCart =
      ".goods-table__body :nth-child(2) .i-checkbox.i-checkbox_large";
    this.deleteItemButton =
      ".goods-table-cell__sub-cell_button .i-button_small.remove";
    this.deletionConfirmationButton = ".goods-table-popup__cell .remove-yes";
    this.moveToFavoritesButton =
      ".goods-table-cell__sub-cell_button .i-button_small.addto-favs";
    this.confirmationMoveToFavoritesButton =
      ".goods-table-popup__cell .addto-favs-yes";
    this.checkoutErrorMessage = ".error-main .i-popover__main";
  }

  async moveToFavorites() {
    await this.page.locator(this.moveToFavoritesButton).click();
    await this.page.locator(this.confirmationMoveToFavoritesButton).click();
  }
}

module.exports = { Cart };
