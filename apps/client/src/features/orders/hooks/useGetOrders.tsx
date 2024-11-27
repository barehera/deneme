import { QUERY_KEYS } from '@/constants/query';
import { useQuery } from '@tanstack/react-query';
import { getOrders } from '../api';
import type { DummyOrderFilters } from '../types';

const useGetOrders = () => {
  const dummyFilters: DummyOrderFilters = {
    status: 'active',
  };

  return useQuery({
    queryKey: QUERY_KEYS.orders.all,
    queryFn: () => getOrders(dummyFilters),
  });
};

export default useGetOrders;
