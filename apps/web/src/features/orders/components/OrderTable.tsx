'use client';

import type { ColumnDef } from '@tanstack/react-table';
import React from 'react';

import { DataTable } from '@/components/DataTable';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/components/ui/dropdown-menu';
import { Button } from '@ui/components/ui/button';
import { MoreHorizontal, ArrowUpDown, Box, Plus } from 'lucide-react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardInfo,
} from '@ui/components/ui/card';

export type Order = {
  id: string;
  createdAt: Date;
  status: 'Pending' | 'Processing' | 'Success' | 'Failed';
  amount: string;
  paymentMethod: string;
};

const data: Order[] = [
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    createdAt: new Date(),
    status: 'Pending',
    amount: '100',
    paymentMethod: 'Credit Card',
  },
  {
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    createdAt: new Date(),
    status: 'Pending',
    amount: '100',
    paymentMethod: 'Credit Card',
  },
];

const OrderTable = () => {
  const { columns } = useOrderColumns();

  return (
    <Card>
      <CardHeader>
        <CardInfo
          icon={<Box />}
          title="Recent Orders"
          description="A list of all recent orders in the database"
        />
        <CardActions>
          <Button size="xs">
            <Plus />
            Create Order
          </Button>
        </CardActions>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
};

export default OrderTable;

const useOrderColumns = () => {
  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: 'id',
      header: 'Order ID',
    },
    {
      accessorKey: 'createdAt',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Created At
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const createdAt = row.getValue('createdAt') as Date;
        return <div>{createdAt.toLocaleString()}</div>;
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'paymentMethod',
      header: 'Payment Method',
    },
    {
      accessorKey: 'amount',
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = Number.parseFloat(row.getValue('amount'));
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'EUR',
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <div className="w-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];

  return { columns };
};
