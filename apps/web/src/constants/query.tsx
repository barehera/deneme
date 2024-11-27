import type { DummyOrderFilters } from '@/features/orders/types';

export const QUERY_KEYS = {
  orders: {
    all: ['orders'],
    lists: () => [...QUERY_KEYS.orders.all, 'list'],
    list: (filters?: DummyOrderFilters) => [
      ...QUERY_KEYS.orders.lists(),
      { filters },
    ],
    details: () => [...QUERY_KEYS.orders.all, 'detail'],
    detail: (id: string | undefined) => [...QUERY_KEYS.orders.details(), id],
  },
};
