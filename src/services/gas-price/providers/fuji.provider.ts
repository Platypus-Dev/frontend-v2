import axios from 'axios';

import { GWEI_UNIT } from '@/constants/units';

import { GasPrice } from './types';

type TxSpeedOptions = 'safeLow' | 'standard' | 'fast' | 'fast' | 'fastest';

interface FujiGasStationResponse {
  safeLow: number;
  standard: number;
  fast: number;
  fastest: number;
  blockTime: number;
  blockNumber: number;
}

export default class FujiProvider {
  public async getLatest(
    txSpeed: TxSpeedOptions = 'standard'
  ): Promise<GasPrice | null> {
    try {
      /*const { data } = await axios.get<PolygonGasStationResponse>(
        'https://gasstation-mainnet.matic.network'
      );*/
      return { price: 225 * GWEI_UNIT };
    } catch (error) {
      console.log('[Fuji] Gas Platform Error', error);
      return null;
    }
  }
}
