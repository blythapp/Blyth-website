import { STORE_URLS } from "@/lib/appLinks";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.62-1.7-3.19-1.72-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.63 1.11 8.8.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.88.69 1.19-.02 1.94-1.08 2.67-2.14.84-1.23 1.19-2.42 1.21-2.48-.03-.01-2.32-.89-2.33-3.56zM14.17 6.13c.61-.74 1.02-1.76.91-2.78-.88.04-1.94.59-2.57 1.32-.56.65-1.06 1.7-.93 2.7.98.08 1.98-.5 2.59-1.24z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 3.2v17.6c0 .8.9 1.3 1.6.9l15-8.8c.7-.4.7-1.4 0-1.8l-15-8.8C5.9 1.9 5 2.4 5 3.2z" />
    </svg>
  );
}

const STORES = [
  { key: "ios", label: "App Store", href: STORE_URLS.ios, Icon: AppleIcon },
  { key: "android", label: "Google Play", href: STORE_URLS.android, Icon: PlayIcon },
];

export default function StoreLinks() {
  return (
    <>
      {STORES.map(({ key, label, href, Icon }) =>
        href ? (
          <a key={key} className="bl-store" href={href} target="_blank" rel="noopener noreferrer">
            <Icon />
            <b>{label}</b>
          </a>
        ) : (
          <span key={key} className="bl-store" aria-label={`${label}, coming soon`}>
            <Icon />
            <b>{label}</b>
            <small>Soon</small>
          </span>
        ),
      )}
    </>
  );
}
