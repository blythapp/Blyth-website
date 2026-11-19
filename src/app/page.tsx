import HomePage from "@/components/site/HomePage";
import { shareQrCodeSvg } from "@/lib/qrCode";
import { isComingSoon } from "@/lib/siteStatus";
import ComingSoon from "@/components/ComingSoon";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blythapp.com";

export default async function Home() {
  if (await isComingSoon()) return <ComingSoon />;

  const qrSvg = await shareQrCodeSvg(SITE_URL);

  return <HomePage qrSvg={qrSvg} />;
}
