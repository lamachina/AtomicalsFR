import Link from 'next/link';
import OBMLogo from './OBMLogo';
import { GlobalData } from '../../lib/types';

export default function SiteLogo(): JSX.Element {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between px-4 py-4 md:flex-row lg:px-0">
      <h1 className="flex items-center space-x-2">
        <Link
          href="/"
          className="bg-gradient-to-r from-zinc-700 to-cyan-900 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-zinc-300 dark:to-blue-200"
        >
          AtomicalsFR
        </Link>
      </h1>
      <span className="relative hidden text-lg tracking-wide text-zinc-500 dark:text-zinc-200 md:flex">
        <img className="h-8 w-8 rounded-full" src='/atomblack.jpg' />
      </span>
    </div>
  );
}
