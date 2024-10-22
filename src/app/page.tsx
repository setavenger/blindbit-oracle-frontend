'use client'
import { ConfigProvider } from './context/ConfigContext';
import { ConnectionInfo } from './components';

export default function Home() {
  return (
    <ConfigProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">BlindBit Oracle Connection Viewer</h1>
        <ConnectionInfo />
      </div>
    </ConfigProvider>
  );
}

