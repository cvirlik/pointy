import { TransactionList } from '@/components/TransactionList';
import { PageHeader } from '@/components/PageHeader';
import { PageContainer } from '@/components/PageContainer';
import { BalanceCard } from '@/components/BalanceCard';
import { FAB } from '@/components/FAB';

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
