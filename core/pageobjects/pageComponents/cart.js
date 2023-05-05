class Cart {
    constructor(page) {
        this.page = page;
        this.CartButton = '.top-panel__userbar__cart__item';
        this.FirstItemTitle = '.goods-table-cell__line.goods-table-cell__line_title';
        this.ItemTitle = '.goods-table-cell__line.goods-table-cell__line_title';
        this.ItemCheckbox = '.goods-table__cell.goods-table__cell_first .i-checkbox_large';
        this.CheckAllCheckbox = '.checkAll';
        this.EmptyCartTitle = '.i-textual__plain.i-textual__plain_arrow.i-textual__plain_limited';
        this.CheckoutButton = '.deal-form-footer__control';
        this.DeliveryAddressButton = '.deal-form-main__input_faded.deal-form-main__input_valid';
        this.AddAddressButton = '.i-context-box-main__footer-cell .i-button_gray.i-button_large';
        this.DeliveryStreet = '#i-street';
        this.DeliveryHouse = '#i-house';
        this.DeliveryFlat = '#i-flat';
        this.DeliveryEntrance = '#i-entrance';
        this.DeliveryFloor = '#i-floor';
        this.AddAddress = '.i-context-box-list__input_link';
        this.DeliveryAddressField = '.deal-form-main__input.deal-form-main__input_popup.i-input.i-input_no-border-radius.deal-form-main__input_faded.deal-form-main__input_valid';
        this.NameSurnameErrorMessage = '#enter-fullname .i-popover__main';
        this.NameField = '#enter-fullname .deal-form-main__input';
        this.NameFieldData = '.deal-form-main__placeholder-h';
        this.PaymentMethodField = '#select-payment-link';
        this.PaymentByInstallmentCard = '.payment-methods li:nth-child(2)';
        this.PaymentMethodFieldData = '#select-payment-link .i-input__sub:first-child';
        this.FirstItemInCart = '.goods-table__body :nth-child(2) .i-checkbox.i-checkbox_large';
        this.DeleteItemButton = '.goods-table-cell__sub-cell_button .i-button_small.remove';
        this.DeletionConfirmationButton = '.goods-table-popup__cell .remove-yes';
        this.MoveToFavoritesButton = '.goods-table-cell__sub-cell_button .i-button_small.addto-favs';
        this.ConfirmationMoveToFavoritesButton = '.goods-table-popup__cell .addto-favs-yes';
        this.CheckoutErrorMessage = '.error-main .i-popover__main';
    }

    async moveToFavorites(page) { 
      await page.locator(this.MoveToFavoritesButton).click();
      await page.locator(this.ConfirmationMoveToFavoritesButton).click();
    }
  }
    
    module.exports = {Cart};