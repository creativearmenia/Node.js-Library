const {WH_EVENT: EVENT} = require('../../../consts');
const BaseWebHook = require('../../../common/blockchain/base-web-hook');

class ETCWebHook extends BaseWebHook {

    /**
     * Create Token WebHook Endpoint
     *
     * @async
     * @desc Simplifies listening to confirmations on all token transfers for a given address up to a provided threshold.
     *      The payload is a json object with the token transfer information.
     *
     * @param {string} callbackURL - Webhook callback url
     *
     * @returns {*|Promise<any | never>}
     */
    createTokenWebHook(callbackURL) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', {
            event: EVENT.ETH.TOKEN,
            url: callbackURL
        });
    }

    /**
     * Create Tx pool WebHook Endpoint
     *
     * @async
     * @desc Similar to ADDRESS Webhook, differes in that it is for a given address found in the transactions in the txpool
     *      of the Ethereum Blockchain. The payload is a list with transactions from the txpool for the particular address.
     *
     * @param {string} callbackURL - Webhook callback url
     *
     * @returns {*|Promise<any | never>}
     */
    createTxPoolWebHook(callbackURL) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', {
            event: EVENT.ETH.TXPOOL,
            url: callbackURL
        });
    }

}

module.exports = ETCWebHook;
