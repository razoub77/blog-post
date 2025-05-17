import EditForm from '@/components/EditForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <main className="flex flex-col items-start justify-center w-full min-h-full p-12 md:w-3/4 md:mx-auto">
      <div className="flex flex-col w-full gap-4">
        <h1 className="mb-2.5 text-2xl">Edit Post</h1>
        <EditForm id={id} />
      </div>
    </main>
  );
}
