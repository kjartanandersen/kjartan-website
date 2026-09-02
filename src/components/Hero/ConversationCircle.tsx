import React from "react";

/**
 * An F-formation: five agents standing in a conversation circle.
 *
 * Each agent shows two orientation vectors — a heavier one for the chest and a
 * lighter one for gaze — which deliberately disagree, because holding several
 * social relations at once is the point of the thesis this diagram comes from.
 * The amber ring advances around the circle as the speaking turn passes.
 */

const CENTRE = 130;
const RADIUS = 84;
const AGENT_COUNT = 5;
const CYCLE_SECONDS = 9;

// Per-agent angular disagreement between chest and gaze, in degrees. Zero means
// fully committed to the centre of the circle; larger values read as a glance
// away while the body stays in the conversation.
const CHEST_OFFSET = [0, -24, 14, 0, 30];
const GAZE_OFFSET = [26, 8, -34, 18, -12];

const toRadians = (deg: number) => (deg * Math.PI) / 180;

const ConversationCircle: React.FC = () => {
  const agents = Array.from({ length: AGENT_COUNT }, (_, i) => {
    const angle = -90 + i * (360 / AGENT_COUNT);
    const x = CENTRE + RADIUS * Math.cos(toRadians(angle));
    const y = CENTRE + RADIUS * Math.sin(toRadians(angle));

    // Facing the centre of the circle, then rotated by the disagreement above.
    const inward = angle + 180;
    const chest = toRadians(inward + CHEST_OFFSET[i]);
    const gaze = toRadians(inward + GAZE_OFFSET[i]);

    return {
      x,
      y,
      chestX: x + 30 * Math.cos(chest),
      chestY: y + 30 * Math.sin(chest),
      gazeX: x + 46 * Math.cos(gaze),
      gazeY: y + 46 * Math.sin(gaze),
      delay: (i * CYCLE_SECONDS) / AGENT_COUNT,
    };
  });

  return (
    <svg
      viewBox="0 0 260 260"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of five agents in a conversation circle, each oriented toward different participants"
    >
      {/* o-space: the shared area the group encloses */}
      <circle
        cx={CENTRE}
        cy={CENTRE}
        r={RADIUS}
        fill="none"
        stroke="var(--color-line)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />

      {agents.map((agent, i) => (
        <g key={i}>
          {/* gaze — lighter, reaches further */}
          <line
            x1={agent.x}
            y1={agent.y}
            x2={agent.gazeX}
            y2={agent.gazeY}
            stroke="var(--color-accent-dim)"
            strokeWidth="1"
          />
          {/* chest — heavier, shorter */}
          <line
            x1={agent.x}
            y1={agent.y}
            x2={agent.chestX}
            y2={agent.chestY}
            stroke="var(--color-line-hi)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* the speaking turn passes from agent to agent */}
          <circle
            className="agent-ring"
            style={{ animationDelay: `${agent.delay}s` }}
            cx={agent.x}
            cy={agent.y}
            r="13"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
          />
          <circle
            cx={agent.x}
            cy={agent.y}
            r="6.5"
            fill="var(--color-panel-hi)"
            stroke="var(--color-body)"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
};

export default ConversationCircle;
