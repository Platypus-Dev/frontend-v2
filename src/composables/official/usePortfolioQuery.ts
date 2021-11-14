import { computed, reactive } from 'vue';
import { useQuery } from 'vue-query';
import { QueryObserverOptions } from 'react-query/core';
import QUERY_KEYS from '@/constants/queryKeys';
import useApp from '../useApp';
import { UserPortfolio } from '@/services/official/official-types';
import useWeb3 from '@/services/web3/useWeb3';
import { officialService } from '@/services/official/official.service';

export default function usePortfolioQuery(
  options: QueryObserverOptions<UserPortfolio> = {}
) {
  const { appLoading } = useApp();
  const { account, chainId, isLoadingProfile } = useWeb3();

  const enabled = computed(
    () => !appLoading.value && !isLoadingProfile.value && !!account.value
  );

  const queryKey = reactive(QUERY_KEYS.Account.Portfolio(account, chainId));

  const queryFn = async () => {
    const response = await officialService.getUserPortfolio(account.value);

    return response;
  };

  const queryOptions = reactive({
    enabled,
    ...options
  });

  return useQuery<UserPortfolio>(queryKey, queryFn, queryOptions);
}
