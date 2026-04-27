import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4'>
      <span className='text-6xl font-bold opacity-20'>404</span>
      <span className='text-xl opacity-40'>Page not found</span>
      <Link href='/' className='text-sm underline opacity-60'>
        Back to home
      </Link>
    </div>
  );
}
