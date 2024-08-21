import Layout from './layout/layout';
import Head from 'next/head';

export default function Users() {
  return (
    <Layout>
      <Head>
        <title>Users</title>
      </Head>
      <div className="flex min-h-[600px] ml-14 flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <LoaderIcon className="mx-auto h-12 w-12 animate-spin text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Users</h1>
        <p className="mt-4 text-muted-foreground">
          We're working hard to bring you a brand new experience. Please check back soon.
        </p>
      </div>
    </div>
  

    </Layout>
  );
}

function LoaderIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  )
}
