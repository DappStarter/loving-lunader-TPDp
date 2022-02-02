require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index renew stick slow good clog metal gather'; 
let testAccounts = [
"0x5864b09afd6e947a0336983ca9a4a122a08ae82378a2894b670694e3d34b3f93",
"0x6462b38a16d9737f26ceaabc717a2f9c3531d03808f0641b94b84363e75121fa",
"0x9ab7b943bf9024c51fe4ab3b9e0d7a89f4d66fdcc0324e0615c16ac5c16863a4",
"0x1b5fccf5734866c015287f5c59f2d98af43c2e039503554565ee1235e75f8701",
"0xe2157214e275783bcf9f3afbe7dcb47a8127c05f5ee595be3eeb5a479ee3c424",
"0x1a33836adfeef2efc977da56bc8dfc8f508bca48f22050a7f195c2f83a42cdc8",
"0xe00ad4cef3ad2e4fea968e865a23da730e4806b774e3d9b47a13ec839e434096",
"0x299b19ba36d158bbc2b31ede72b2b69e12ba118a939883c8ba2c662b2395d91e",
"0x7620e2f2ffdd0aa0d6b8a9aed30d49c3457852fe0c29894a3b6dbe3ceea27816",
"0x118d28374d45189a89d57f9ddd3abd8e54764bd7741d67e1d835af071b3a8034"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


