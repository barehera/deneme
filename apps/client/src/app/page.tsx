import Shortcuts from '@/components/Shortcuts';
import WelcomeCard from '@/components/WelcomeCard';
import OrderTable from '@/features/orders/components/OrderTable';
import { Separator } from '@ui/components/ui/separator';

export default function Page() {
  return (
    <div>
      <WelcomeCard />
      <Separator />
      <Shortcuts />
      <Separator visible={false} />
      <OrderTable />
    </div>
  );
}
