import type { Project, SkillCategory } from "../types";

export const projects: Project[] = [
  {
    id: "uge-engine",
    title: "Uge Engine",
    context: "Custom game engine — personal project",
    year: "2025–2026",
    summary:
      "A game engine built from scratch in C++ — renderer abstraction over OpenGL, entity-component scenes, a C# scripting layer, and its own editor.",
    description:
      "A game engine written from scratch in C++, structured around a renderer abstraction that keeps the engine core independent of its OpenGL backend. Separate 2D and 3D renderers handle meshes and model loading, framebuffers, uniform buffers, textures and MSDF-based font rendering, built on an event system and layer stack. An entity-component scene system with scene and project serialisation persists full scenes between sessions, and a native scripting engine binds into a managed C# script core that exposes entities, components, input and vector maths to gameplay code. Ships with UgeEditor, an ImGui-based editor with scene hierarchy and content browser panels.",
    techStack: ["C++", "OpenGL", "GLSL", "C#", "ImGui", "premake5", "Lua"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/kjartanandersen/UgeEngine",
      },
    ],
  },
  {
    id: "metahuman-social-maneuvering",
    title: "Subtle Social Maneuvering for MetaHumans",
    context:
      "MSc thesis, Reykjavík University — advisor: Hannes Högni Vilhjálmsson",
    year: "2025",
    summary:
      "Virtual agents that orient gaze, head, chest and feet independently to express degrees of social commitment inside a group conversation.",
    description:
      "A system that lets virtual agents perform realistic non-verbal social maneuvers, built on the MetaHuman framework in Unreal Engine. Gaze, head and chest are oriented independently, alongside a novel feet-orientation subsystem, letting an agent hold several social relations at once — chest toward one participant, feet toward another — to express low- and high-commitment engagement. Eye gaze runs through the MetaHuman facial Control Rig, driving the eye bones toward a world-space target, while the feet system uses Unreal's motion matching with chooser tables across thirteen orientation and transition states. A behaviour component coordinates these motions according to social dynamics, and a group conversation system handles turn-taking within conversation circles. The design is grounded in the social theories of Scheflen and Kendon, particularly interpersonal spacing and F-formations.",
    techStack: [
      "Unreal Engine 5",
      "MetaHuman",
      "Blueprints",
      "Control Rig",
      "Motion matching",
      "Cascadeur",
    ],
    links: [
      {
        label: "Video demonstration",
        url: "https://youtu.be/Rv-hVHBgsSc",
      },
      {
        label: "Read the thesis",
        url: "https://skemman.is/handle/1946/51604?locale=en",
      },
    ],
  },
  {
    id: "the-holy-hook",
    title: "The Holy Hook",
    context: "Team project — Advanced Game Design & Development, Reykjavík University",
    year: "2024",
    summary:
      "A released action game about a priest with a grappling hook. I built the swing mechanics, the player controller and the audio.",
    description:
      "A released action game in which the player is a priest armed with the Holy Hook, a grappling hook granted by divine intervention. Swing at speed through a castle filled with traps and undead minions to reach and defeat a king who has turned to necromancy to protect his reign. Built by a four-person team for the Advanced Game Design & Development course, together with Ágúst Máni Þorsteinsson, Hermann Helgi Þrastarson and Poomi Krua-Aim.",
    role:
      "General gameplay programming, audio, and the swing mechanics the whole game is built around. I built the first-person player controller on Unity's Input System with controller support, and developed the movement around the hook — double jump with finer air control, hook retraction, and chaining a jump out of a swing — as well as the background music, enemy sounds and footstep effects.",
    techStack: ["Unity", "C#", "Gameplay programming", "Team project"],
    links: [
      {
        label: "Play on itch.io",
        url: "https://hermannhelgi.itch.io/the-holy-hook",
      },
    ],
  },
  {
    id: "in-a-bind",
    title: "In a Bind",
    context: "BSc thesis, Reykjavík University — advisor: Torfi Ásgeirsson",
    year: "2021",
    summary:
      "A physics-based rope puzzle platformer, released for Windows. I built the entire audio, puzzle elements and level design.",
    description:
      "A physics-based puzzle platformer built around rope physics, released for Windows. Levels are filled with puzzles the player solves primarily with rope — creating, attaching and dragging ropes to reach a solution in any way they can, combined with platforming to navigate the environment. Developed with Ólafur Diðrik Halldórsson and Thomas Ari Bech.",
    role:
      "General gameplay programming, audio and level design. I designed and implemented the game's entire audio, including sound effects for every rope capability with the rope's sound responding dynamically to its length, plus ambience and per-level music, and built physics-driven puzzle elements such as a seesaw and a wrecking ball.",
    techStack: ["Unity", "C#", "Physics simulation", "Level design"],
    links: [
      {
        label: "Read the thesis",
        url: "https://skemman.is/handle/1946/37535?locale=en",
      },
      {
        label: "Play on itch.io",
        url: "https://olafur97.itch.io/in-a-bind",
      },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Engine & Graphics",
    skills: ["C++", "OpenGL", "Vulkan", "GLSL", "ImGui", "Renderer architecture"],
  },
  {
    name: "Game Development",
    skills: ["Unity", "Unreal Engine", "MetaHuman", "C#", "Physics systems"],
  },
  {
    name: "Languages",
    skills: ["C#", "C++", "C", "Python", "Java", "SQL"],
  },
  {
    name: "Web",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", ".NET"],
  },
  {
    name: "Tools & Workflow",
    skills: ["Git", "premake5", "Jira", "Figma"],
  },
];
