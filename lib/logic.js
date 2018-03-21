/**
 * Track the trade of a passport from one trader to another
 * @param {org.acme.biznet.Trade_Passport} tradepassport - the tradepassport to be processed
 * @transaction
 */
function tradepassport(tradepassport) {
    tradepassport.passport.owner = tradepassport.newOwner;
    return getAssetRegistry('org.acme.biznet.Passport')
        .then(function (assetRegistry) {
            return assetRegistry.update(tradepassport.passport);
        });
}
/**
 * Track the trade of a aadhar from one trader to another
 * @param {org.acme.biznet.Trade_Aadhar} tradeaadhar - the tradeaadhar to be processed
 * @transaction
 */
function tradeaadhar(tradeaadhar) {
    tradeaadhar.aadhar.owner = tradeaadhar.newOwner;
    return getAssetRegistry('org.acme.biznet.Aadhar')
        .then(function (assetRegistry) {
            return assetRegistry.update(tradeaadhar.aadhar);
        });
}
/**
 * Track the trade of a pan from one trader to another
 * @param {org.acme.biznet.Trade_Pan} tradepan - the tradepan to be processed
 * @transaction
 */
function tradepan(tradepan) {
    tradepan.pan.owner = tradepan.newOwner;
    return getAssetRegistry('org.acme.biznet.Pan')
        .then(function (assetRegistry) {
            return assetRegistry.update(tradepan.pan);
        });
}
