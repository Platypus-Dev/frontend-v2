import { Config } from '@/lib/config';
import { JsonRpcProvider } from '@ethersproject/providers';
import { default as MasterChefAbi } from '@/lib/abi/OfficialMasterChef.json';
import { rpcProviderService as _rpcProviderService } from '@/services/rpc-provider/rpc-provider.service';
import { configService as _configService } from '@/services/config/config.service';
import MasterChef from './contracts/master-chef';
import OfficialToken from '@/services/farm/contracts/offical-token';
import HndRewarder from '@/services/farm/contracts/hnd-rewarder';

export default class MasterChefContractsService {
  masterChef: MasterChef;
  hndRewarder: HndRewarder;
  officalToken: OfficialToken;
  config: Config;
  provider: JsonRpcProvider;

  constructor(
    readonly configService = _configService,
    readonly rpcProviderService = _rpcProviderService
  ) {
    this.provider = this.rpcProviderService.jsonProvider;
    this.config = this.configService.network;

    // Init contracts
    this.masterChef = new MasterChef(this);
    this.officalToken = new OfficialToken(this);
    this.hndRewarder = new HndRewarder(this);
  }

  // Combine all the ABIs and remove duplicates
  public get allABIs() {
    return Object.values(
      Object.fromEntries([...MasterChefAbi].map(row => [row.name, row]))
    );
  }
}

export const masterChefContractsService = new MasterChefContractsService();
