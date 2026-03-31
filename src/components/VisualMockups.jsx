import { useId } from "react";

const servicePalettes = {
  chat: ["#5b78ff", "#8b62ff"],
  workflow: ["#4f8bff", "#53b7ff"],
  knowledge: ["#4f72ff", "#7a88ff"],
  automation: ["#5974ff", "#59d4ff"],
  custom: ["#725fff", "#a35cff"],
  consulting: ["#567bff", "#8e74ff"]
};

const casePalettes = {
  restaurant: ["#6578ff", "#875dff"],
  commerce: ["#4f8bff", "#5ac2ff"],
  service: ["#5372ff", "#7f68ff"],
  internal: ["#4e74ff", "#66a7ff"]
};

export function ServiceArt({ type }) {
  const gradientId = `${useId().replace(/:/g, "")}-service`;
  const [c1, c2] = servicePalettes[type] || servicePalettes.chat;

  return (
    <svg viewBox="0 0 460 280" className="generated-art" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="440" height="260" rx="26" fill="#fff" stroke="#d8e2fb" strokeWidth="2.6" />
      <rect x="34" y="34" width="392" height="32" rx="14" fill={`url(#${gradientId})`} opacity="0.16" />
      <rect x="34" y="84" width="230" height="18" rx="9" fill="#edf2ff" />
      <rect x="34" y="112" width="312" height="18" rx="9" fill="#edf2ff" />
      <rect x="34" y="142" width="134" height="100" rx="18" fill={`url(#${gradientId})`} opacity="0.18" />
      <rect x="182" y="142" width="122" height="100" rx="18" fill={`url(#${gradientId})`} opacity="0.12" />
      <rect x="316" y="142" width="110" height="100" rx="18" fill={`url(#${gradientId})`} opacity="0.22" />
      <circle cx="78" cy="188" r="17" fill={`url(#${gradientId})`} />
      <path d="M106 188h48" stroke="#43538a" strokeWidth="6" strokeLinecap="round" />
      <circle cx="235" cy="188" r="14" fill="#fff" stroke="#95a8df" strokeWidth="3" />
      <path d="M335 188h58" stroke="#354b86" strokeWidth="7" strokeLinecap="round" />
      <path d="M335 206h42" stroke="#5a70ac" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function CaseArt({ type }) {
  const gradientId = `${useId().replace(/:/g, "")}-case`;
  const [c1, c2] = casePalettes[type] || casePalettes.restaurant;

  return (
    <svg viewBox="0 0 340 190" className="case-art" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="324" height="174" rx="20" fill="#fff" stroke="#d8e2fb" strokeWidth="2.3" />
      <rect x="24" y="22" width="292" height="38" rx="12" fill={`url(#${gradientId})`} opacity="0.2" />
      <rect x="24" y="74" width="130" height="94" rx="17" fill={`url(#${gradientId})`} opacity="0.2" />
      <rect x="166" y="74" width="150" height="22" rx="11" fill="#e9efff" />
      <rect x="166" y="106" width="122" height="22" rx="11" fill="#e9efff" />
      <rect x="166" y="138" width="96" height="22" rx="11" fill="#e9efff" />
      <circle cx="61" cy="120" r="18" fill={`url(#${gradientId})`} />
      <path d="M85 120h54" stroke="#42558f" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
