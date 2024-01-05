import React from 'react';
import CosmicLogo from './logos/CosmicLogo';

export default function Footer(): JSX.Element {
  return (
    <footer className="mx-auto mt-8 flex w-full max-w-3xl items-center justify-between px-4 py-4 text-xs md:text-sm lg:px-0 lg:text-base">
      <a
        href="https://docs.atomicals.xyz/"
        target="_blank"
        className="no-underline"
      >
        <div className="flex items-center space-x-2">
          <img className="h-8 w-8 rounded-full" src='/atomblue.jpg' />
          <span className="text-zinc-700 dark:text-zinc-300">
            Rejoignez nous
          </span>
        </div>
      </a>
      <div className="text-zinc-700 dark:text-zinc-300">
        &copy;&nbsp;&nbsp;{new Date().getFullYear()} Atomicals France
      </div>
    </footer>
  );
}
