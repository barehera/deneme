import { api } from '@/api/axios';
import type { DummyOrder, DummyOrderFilters } from '../types';
import { ROUTE_KEYS } from '@/constants/routes';
import { DUMMY_ORDERS } from '@/constants/dummy';

export const getOrders = async (filters?: DummyOrderFilters) => {
  //TODO: Remove this dummy data
  return Promise.resolve(DUMMY_ORDERS) as Promise<DummyOrder[]>;

  //   const { data } = await api.get<DummyOrder[]>(ROUTE_KEYS.orders.all, {
  //     params: filters,
  //   });
  //   return data;
};

export const getOrderById = async (id: string) => {
  const { data } = await api.get<DummyOrder>(ROUTE_KEYS.orders.byId(id));
  return data;
};
