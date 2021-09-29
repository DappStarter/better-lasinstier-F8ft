require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet renew magic honey hover option bottom ski'; 
let testAccounts = [
"0xad3a88c62d20b8debfe07fe2e5dd93a6c3960dff7f80a2e34dd9d81080e8e765",
"0x5303d3579c650cdf29d1844b559a4e3622e17a5a4b9503678185fffe6231c9e0",
"0x24174a13324d1626f27ae81fa861291ca72e848d339f67af9cb232f3a1fc1c15",
"0xf58e407105b722b6bbaa9a9281979bbf45df0ddc1985ed9115eca45d10ab7390",
"0x41a32787ae7b59461513cfd4456fae03f96ef3828cca50eebdb85330093b014b",
"0x58f65d18e21f6129f67a358d302265662fb293a64406b602efdf5480065965e4",
"0x31f6db4f4d2389ea63b03226ab7c0dd3d38e2c56adc8a8cdb4b248459c3e3537",
"0x10b2fd48f914ebaa47c35a579f32e9abe1fda8d9e1bd77dcde523238abf8e7b8",
"0x3ae9aa5b6e1fd9e3eb9d6e469045c52239650438081efdd4a61abcb829b7fe0c",
"0x508633ad9a843816e32d6a6f9ef95dd05cc0966d6ccb23bcb2e7f1cf895fea15"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

