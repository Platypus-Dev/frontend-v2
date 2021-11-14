import { computed } from 'vue';
import useOfficialConfigQuery from '@/composables/queries/useOfficialConfigQuery';
import { OfficialConfig } from '@/services/offical/offical.service';

export default function useOfficialConfig() {
  const officalConfigQuery = useOfficialConfigQuery();

  const officalConfigLoading = computed(
    () => officalConfigQuery.isLoading.value || officalConfigQuery.isIdle.value
  );

  const officalConfig = computed(
    (): OfficialConfig =>
      officalConfigQuery.data.value
        ? officalConfigQuery.data.value
        : { incentivizedPools: [], blacklistedPools: [], pausedPools: [] }
  );

  return {
    officalConfigLoading,
    officalConfig
  };
}
