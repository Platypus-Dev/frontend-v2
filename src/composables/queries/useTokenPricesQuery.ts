import { reactive, ref, Ref } from 'vue';
import { useQuery } from 'vue-query';
import { UseQueryOptions } from 'react-query/types';
import QUERY_KEYS from '@/constants/queryKeys';
import {
  officalService,
  TokenPrices
} from '@/services/offical/offical.service';

/**
 * Fetches token prices for all provided addresses.
 */
export default function useTokenPricesQuery(
  addresses: Ref<string[]> = ref([]),
  options: UseQueryOptions<TokenPrices> = {}
) {
  const queryKey = reactive(QUERY_KEYS.Tokens.Prices(addresses));

  const queryFn = async () => {
    return officalService.getTokenPrices();
  };

  const queryOptions = reactive({
    enabled: true,
    ...options
  });

  return useQuery<TokenPrices>(queryKey, queryFn, queryOptions);
}
