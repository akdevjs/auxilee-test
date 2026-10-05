import Link from "next/link";
export default function NotFound(){return <main className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center text-foreground"><h1 className="font-display text-7xl">404</h1><p className="mt-4 text-xl">Page not found</p><Link href="/" className="mt-8 bg-primary px-5 py-3 text-sm text-primary-foreground">Go home</Link></main>;}
