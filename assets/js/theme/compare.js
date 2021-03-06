import PageManager from '../page-manager';
import { showAlertModal } from './global/modal';
// Supermarket Mod
// import compareProducts from './global/compare-products';
import compareProducts from '../papathemes/compare-products';

export default class Compare extends PageManager {
    onReady() {
        // Supermarket Mod
        // compareProducts(this.context.urls);
        compareProducts(this.context);

        const message = this.context.compareRemoveMessage;

        $('body').on('click', '[data-comparison-remove]', event => {
            if (this.context.comparisons.length <= 2) {
                showAlertModal(message);
                event.preventDefault();
            }
        });
    }
}
