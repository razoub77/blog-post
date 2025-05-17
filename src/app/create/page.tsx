import CreateForm from '@/components/CreateForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create',
};

export default function Page() {
  return (
    <main className="flex flex-col items-start justify-center w-full min-h-full p-12 md:w-3/4 md:mx-auto">
      <div className="flex flex-col w-full gap-4">
        <h1 className="mb-2.5 text-2xl">Create Post</h1>
        <CreateForm />
      </div>
    </main>
  );
}
