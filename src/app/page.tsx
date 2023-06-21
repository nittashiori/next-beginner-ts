import { Top } from '@/components/Pages/Top';
import { microData } from '@/datas/microcms';

export default function Page() {
  return (
    <Top posts={microData} />
  );
}