import { Config } from "../../context/ConfigContext";

export async function GET() {
  const config: Config = {
    baseURL: process.env.NEXT_PUBLIC_BLINDBIT_ORACLE_BASE_URL || 'error: not loaded',
    torBaseURL: process.env.NEXT_PUBLIC_BLINDBIT_ORACLE_TOR_BASE_URL || 'error: not loaded',
    port: process.env.NEXT_PUBLIC_BLINDBIT_ORACLE_PORT || 'error: not loaded',
  };
  
  return Response.json(config);
}

export const dynamic = 'force-dynamic'

