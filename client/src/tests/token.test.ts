import { describe, expect, afterAll, test, jest } from '@jest/globals';
import { providers } from 'ethers';
import { config } from '../config';
import { fetchTokenData } from '../helpers';

describe('token functions', () => {
  test('should fetch token data', async () => {
    let path = [
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',

    ];

    let provider = new providers.JsonRpcProvider(config.JSON_RPC);

    let [token0, token1] = await fetchTokenData(provider, path);

    expect(token0.decimals).toBe(18);
    expect(token0.symbol).toBe('WETH');
    expect(token0.name).toBe('Wrapped ETH');

  });

  test('should fetch token data test 2', async () => {
    jest.setTimeout(10000);
    let path = [
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',

    ];

    let provider = new providers.JsonRpcProvider(config.JSON_RPC);

    let [token0, token1] = await fetchTokenData(provider, path);

    expect(token0.decimals).toBe(18);
    expect(token0.symbol).toBe('WETH');
    expect(token0.name).toBe('Wrapped eth');

 
});
