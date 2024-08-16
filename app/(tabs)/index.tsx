import { TransactionList } from '@/components/TransactionList';
import { PageHeader } from '@/components/PageHeader';
import { PageContainer } from '@/components/PageContainer';
import { FAB } from '@/components/FAB';
import { BalanceCard } from '@/components/BalanceCard';

export default function Tab() {
  return (
    <>
      <PageContainer>
        <PageHeader title="Hello there!" avatar={true} />
        <BalanceCard />
        <TransactionList />
      </PageContainer>
      <FAB />
    </>
  );
}
