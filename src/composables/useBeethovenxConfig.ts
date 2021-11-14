import { computed } from 'vue';
import useOfficialConfigQuery from '@/composables/queries/useOfficialConfigQuery';
import { OfficialConfig } from '@/services/beethovenx/beethovenx.service';

export default function useOfficialConfig() {
  const beethovenxConfigQuery = useOfficialConfigQuery();

  const beethovenxConfigLoading = computed(
    () =>
      beethovenxConfigQuery.isLoading.value ||
      beethovenxConfigQuery.isIdle.value
  );

  const beethovenxConfig = computed(
    (): OfficialConfig =>
      beethovenxConfigQuery.data.value
        ? beethovenxConfigQuery.data.value
        : { incentivizedPools: [], blacklistedPools: [], pausedPools: [] }
  );

  return {
    beethovenxConfigLoading,
    beethovenxConfig
  };
}
