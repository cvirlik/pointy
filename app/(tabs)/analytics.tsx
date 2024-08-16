import { SegmentedButton } from '@/components/SegmentedButton';
import { PageHeader } from '@/components/PageHeader';
import { PageContainer } from '@/components/PageContainer';
import { OverviewButton } from '@/components/Overview';
import { WeekGraph } from '@/components/Charts';

export default function Tab() {
  return (
    <PageContainer>
      <PageHeader title="Stats Analytics " avatar={false} />
      <SegmentedButton options={['Week', 'Month', 'Year']} onSelect={() => {}} />
      <WeekGraph />
      <OverviewButton />
    </PageContainer>
  );
}
