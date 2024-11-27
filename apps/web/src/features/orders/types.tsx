export enum DummyOrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export interface DummyOrderFilters {
  status: string;
}

export interface DummyOrder {
  id: string;
  createdAt: Date;
  status: DummyOrderStatus;
  amount: string;
  paymentMethod: string;
}
