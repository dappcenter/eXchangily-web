import * as Btc from 'bitcoinjs-lib';
export const environment = {
    production: true,
    endpoints: {
        blockchaingate: 'https://blockchaingate.com/v2/',
        coingecko: 'https://api.coingecko.com/',
        kanban: 'http://169.45.42.108:4000',
        BTC: {
            exchangily: 'http://18.188.32.168:8000/'
        },
        FAB: {
            exchangily: 'http://52.60.97.159:8000/'
        },                
        ETH: {
            exchangily: 'http://35.183.164.127:3000/',
            etherscan: 'https://api.etherscan.io/'
        }        
    },
    CoinType: {
        BTC: 0,
        ETH: 60,
        FAB: 1150
    },
    addresses: {
        smartContract: {
            EXG: '0x867480ba8e577402fa44f43c33875ce74bdc5df6',
            USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            SCAR: '',
            EXCHANGILY: ''
        },
        exchangilyOfficial: [
            {name: 'EXG', address: '0x64161c648e16fb1e25a31abc9b27c35d02fd36ff'},
            {name: 'FAB', address: 'ms5Ddek7XudLoRtzeNyFsThMCdMkjZh94T'},
            {name: 'BTC', address: 'mmSziWwxpTsoHDVcP9yo3vBmA9RCJpsES9'},
            {name: 'ETH', address: '0xb2e8bac11afe8762fb6a1ab56c36084d2fbbd48a'},
            {name: 'USDT', address: '0x7ece14d72a8600d29f486eab1377e33c3266b001'}
        ],        
    },
    bitcoin_network: Btc.networks.bitcoin        
};
