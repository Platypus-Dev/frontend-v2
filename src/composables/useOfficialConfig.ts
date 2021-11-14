import { computed } from 'vue';
import useOfficialConfigQuery from '@/composables/queries/useOfficialConfigQuery';
import { OfficialConfig } from '@/services/official/official.service';

export default function useOfficialConfig() {
  const officialConfigQuery = useOfficialConfigQuery();

  const officialConfigLoading = computed(
    () =>
      officialConfigQuery.isLoading.value || officialConfigQuery.isIdle.value
  );

  const officialConfig = computed(
    (): OfficialConfig =>
      officialConfigQuery.data.value
        ? officialConfigQuery.data.value
        : { incentivizedPools: [], blacklistedPools: [], pausedPools: [] }
  );

  return {
    officialConfigLoading,
    officialConfig
  };
}
