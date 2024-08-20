import Layout from './layout/layout';
import Head from 'next/head';

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-blue-800">Dashboard</h1>
        <p className="text-lg text-blue-600 mt-4">This page is currently under construction.</p>
        <div className="mt-6">
          <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
      </div>
    </Layout>
  );
}
