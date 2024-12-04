import { toAlacritty } from "./exporters/alacritty";
import { toFoot } from "./exporters/foot";
import { toFzf } from "./exporters/fzf";
import { toGhostty } from "./exporters/ghostty";
import { toHelix } from "./exporters/helix";
import { toITerm } from "./exporters/iterm";
import { toJson } from "./exporters/json";
import { toKitty } from "./exporters/kitty";
import { toWezTerm } from "./exporters/wezterm";
import { toWindowsTerminal } from "./exporters/windows-terminal";
import { toXresources } from "./exporters/xresources";
import { toZellij } from "./exporters/zellij";

export const exporters = {
  Alacritty: { export: toAlacritty },
  Foot: { export: toFoot },
  fzf: { export: toFzf },
  Ghostty: { export: toGhostty },
  Helix: { export: toHelix },
  iTerm: { export: toITerm },
  JSON: { export: toJson },
  Kitty: { export: toKitty },
  WezTerm: { export: toWezTerm },
  WindowsTerminal: { export: toWindowsTerminal },
  Xresources: { export: toXresources },
  Zellij: { export: toZellij },
};

export type Format = keyof typeof exporters;
