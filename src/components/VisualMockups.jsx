const servicePalettes = {
  chat: ["#5f78ff", "#8d62ff", "#59d2ff"],
  workflow: ["#4f8bff", "#52bbff", "#6f6bff"],
  knowledge: ["#4f72ff", "#7a88ff", "#5ec9ff"],
  automation: ["#5974ff", "#59d4ff", "#7c65ff"],
  custom: ["#725fff", "#a35cff", "#5f95ff"],
  consulting: ["#567bff", "#8e74ff", "#52c3ff"]
};

const casePalettes = {
  restaurant: ["#6578ff", "#875dff", "#5ac4ff"],
  commerce: ["#4f8bff", "#5ac2ff", "#6f6bff"],
  service: ["#5372ff", "#7f68ff", "#5ed2ff"],
  internal: ["#4e74ff", "#66a7ff", "#7c62ff"]
};

const toStyleVars = (palette) => ({
  "--tone-a": palette[0],
  "--tone-b": palette[1],
  "--tone-c": palette[2]
});

function ChatMockup({ palette }) {
  const messages = [
    { id: 1, role: "user", avatar: "U", text: "請問今天還有晚餐預約嗎？", time: "09:41" },
    { id: 2, role: "ai", avatar: "AI", text: "今晚 19:30 還有 2 位名額，可直接保留。", time: "09:41" },
    { id: 3, role: "user", avatar: "U", text: "可同步到 CRM 嗎？", time: "09:42" },
    { id: 4, role: "ai", avatar: "AI", text: "已同步，並更新顧客標籤與跟進提醒。", time: "09:42" }
  ];

  return (
    <div className="generated-art mockup-art mockup-chat" style={toStyleVars(palette)} aria-hidden="true">
      <div className="mockup-orb orb-a" />
      <div className="mockup-orb orb-b" />
      <div className="mockup-window">
        <div className="mockup-topbar">
          <div className="dot-group">
            <span />
            <span />
            <span />
          </div>
          <strong>EchoChat Console</strong>
          <small>Live</small>
        </div>
        <div className="chat-thread">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-line ${msg.role === "ai" ? "is-ai" : "is-user"}`}>
              <span className="chat-avatar">{msg.avatar}</span>
              <div className="chat-bubble-wrap">
                <p>{msg.text}</p>
                <small>{msg.time}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowMockup({ palette }) {
  const nodes = ["LINE", "Intent Router", "Knowledge Base", "CRM Sync"];
  const stats = [
    { label: "Flow Success", value: "98%" },
    { label: "Avg Runtime", value: "1.8s" },
    { label: "Automation", value: "72%" }
  ];

  return (
    <div className="generated-art mockup-art mockup-workflow" style={toStyleVars(palette)} aria-hidden="true">
      <div className="mockup-orb orb-a" />
      <div className="mockup-orb orb-b" />
      <div className="mockup-window">
        <div className="mockup-topbar">
          <div className="dot-group">
            <span />
            <span />
            <span />
          </div>
          <strong>Automation Flow</strong>
          <small>Stable</small>
        </div>
        <div className="flow-layout">
          <div className="flow-track">
            {nodes.map((node) => (
              <div key={node} className="flow-node">
                <span />
                <p>{node}</p>
              </div>
            ))}
          </div>
          <div className="flow-stats">
            {stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup({ palette }) {
  const bars = [86, 72, 64, 91, 58, 76];
  const metrics = [
    { label: "Response", value: "63%" },
    { label: "Knowledge", value: "2.7x" },
    { label: "Accuracy", value: "94%" }
  ];

  return (
    <div className="generated-art mockup-art mockup-dashboard" style={toStyleVars(palette)} aria-hidden="true">
      <div className="mockup-orb orb-a" />
      <div className="mockup-orb orb-b" />
      <div className="mockup-window">
        <div className="mockup-topbar">
          <div className="dot-group">
            <span />
            <span />
            <span />
          </div>
          <strong>AI Insights</strong>
          <small>Realtime</small>
        </div>
        <div className="dashboard-layout">
          <div className="dashboard-chart">
            {bars.map((height, index) => (
              <span key={`${height}-${index}`} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="dashboard-metrics">
            {metrics.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceArt({ type }) {
  const palette = servicePalettes[type] || servicePalettes.chat;

  if (type === "chat") {
    return <ChatMockup palette={palette} />;
  }

  if (type === "workflow" || type === "automation") {
    return <WorkflowMockup palette={palette} />;
  }

  return <DashboardMockup palette={palette} />;
}

export function CaseArt({ type }) {
  const palette = casePalettes[type] || casePalettes.restaurant;
  const bars = [70, 54, 84, 63];

  return (
    <div className="case-art" style={toStyleVars(palette)} aria-hidden="true">
      <div className="case-orb case-orb-a" />
      <div className="case-orb case-orb-b" />
      <div className="case-frame">
        <div className="case-head">
          <strong>Scenario Outcome</strong>
          <span>AI + Workflow</span>
        </div>
        <div className="case-body">
          <div className="case-chart-bars">
            {bars.map((height, index) => (
              <span key={`${height}-${index}`} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="case-kpis">
            <div>
              <strong>+41%</strong>
              <span>解題率</span>
            </div>
            <div>
              <strong>3.2s</strong>
              <span>回覆速度</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>服務覆蓋</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
