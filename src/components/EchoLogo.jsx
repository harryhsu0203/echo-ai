function EchoLogo({ mode = "full", className = "" }) {
  const icon = (
    <svg className="echo-logo-icon" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="echoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f73ff" />
          <stop offset="100%" stopColor="#8b5dff" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#echoGrad)" />
      <circle cx="24" cy="30" r="4" fill="#fff" />
      <circle cx="40" cy="30" r="4" fill="#fff" />
      <path
        d="M18 40c4.8 4 23.2 4 28 0"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 20c3.8-5.5 8.8-9.2 14.8-11.2"
        fill="none"
        stroke="#cfd8ff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );

  if (mode === "icon") {
    return <span className={`echo-logo echo-logo-only ${className}`}>{icon}</span>;
  }

  return (
    <span className={`echo-logo ${className}`}>
      {icon}
      <span className="echo-logo-text">
        <strong>Echo AI</strong>
        <small>Enterprise Intelligence</small>
      </span>
    </span>
  );
}

export default EchoLogo;
