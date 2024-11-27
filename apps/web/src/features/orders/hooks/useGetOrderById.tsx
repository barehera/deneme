import React from 'react';
import { QUERY_KEYS } from '@/constants/query';
import { useQuery } from '@tanstack/react-query';
import { getOrderById } from '../api';

const useGetOrderById = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.orders.detail(id),
    queryFn: () => getOrderById(id),
  });
};

export default useGetOrderById;
