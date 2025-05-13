import CreateForm from '@/components/CreateForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="mb-2.5 text-2xl">Create Post</h1>
      <CreateForm />
    </div>
  );
}
