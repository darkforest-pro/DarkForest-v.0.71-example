import 'dotenv/config';

if (!process.env.PRIVATE_KEY) {
  throw new Error(
    'PRIVATE_KEY is not defined and must be set in the .env file'
  );
}

export const config = {
  /**
   * @description PRIVATE_KEY is the private key of the account that will be used to sign transactions
   */
  PRIVATE_KEY: process.env.PRIVATE_KEY!,

  /**
   * @description JSON RPC endpoint
   * @type {string}
   */
  JSON_RPC: process.env.JSON_RPC!,

  /**
   * @description WSS_URL is the websocket endpoint of the WSS  endpoint
   */

  WSS_URL: process.env.WSS_URL!,

  /**
   * @description Contract address
   * @type {string}
   */
  CONTRACT_ADDRESS: 'PRIVATE CODE',

  /**
   * STABLE TOKENS addresses e.g BUSD, USDT, USDC, etc
   */
  STABLE_TOKENS: ['0x55d398326f99059fF775485246999027B3197955',
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  '0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9',
  '0xd17479997f34dd9156deef8f95a52d81d265be9c',
  '0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094',
  '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
  '0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40'],

  /**
   * @description Explorer URL
   */
  EXPLORER_URL: 'https://bscscan.com',

  /**
   * @description Telegram Bot Token
   */

  ////////////// FALLBACK VALUES /////////////////

  /**
   * @description DEFAULT_GAS_LIMIT that we use in transactions
   */
  DEFAULT_GAS_LIMIT: 700_000 * 3,

  /**
   * @description MIN_SLIPPAGE_THRESHOLD is the minimum slippage threshold that we allow
   * @type {number}
   * @default 1%
   */
  MIN_SLIPPAGE_THRESHOLD: 0.8,

  /**
   * @description GAS_FACTOR that we use in front-running the target
   */
  GAS_FACTOR: 3.9,

  //////////////// TRADE CONFIG /////////////////

  /**
   * @description WETH address
   * @type {string}
   * @default 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
   */
  WETH_ADDRESS: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',

  /**
   * @description Uniseap Router address
   * @type {string}
   * @default 0x10ED43C718714eb63d5aA57B78B54704E256024E
   */
  ROUTER_ADDRESS: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',

  /**
   * @description Trade Config
   * @type MIN_PROFIT_THRESHOLD is the minimum profit threshold that we allow
   * @type {number}
   */
  MIN_PROFIT_THRESHOLD: parseFloat(process.env.MIN_PROFIT_THRESHOLD || '0.01'),
};
