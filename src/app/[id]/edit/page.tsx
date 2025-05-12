import EditForm from '@/components/edit-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="mb-2.5 text-2xl">Edit Post</h1>
      <EditForm id={id} />
    </div>
  );
}
