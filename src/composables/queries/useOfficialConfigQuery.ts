import { reactive } from 'vue';
import { useQuery } from 'vue-query';
import { UseQueryOptions } from 'react-query/types';
import QUERY_KEYS from '@/constants/queryKeys';
import { FETCH_ONCE_OPTIONS } from '@/constants/vue-query';
import {
  OfficialConfig,
  officialService
} from '@/services/official/official.service';

/**
 * Fetch all token lists, should only happen once.
 */
export default function useOfficialConfigQuery(
  options: UseQueryOptions<OfficialConfig> = {}
) {
  const queryKey = reactive(QUERY_KEYS.Config.All);

  const queryFn = async () => {
    console.log('Fetching official config');
    return officialService.getOfficialConfig();
  };

  const queryOptions = reactive({
    enabled: true,
    ...FETCH_ONCE_OPTIONS,
    ...options
  });

  return useQuery<OfficialConfig>(queryKey, queryFn, queryOptions);
}
