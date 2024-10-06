import { toAlacritty } from "./exporters/alacritty";
import { toFoot } from "./exporters/foot";
import { toFzf } from "./exporters/fzf";
import { toGhostty } from "./exporters/ghostty";
import { toHelix } from "./exporters/helix";
import { toJson } from "./exporters/json";
import { toKitty } from "./exporters/kitty";
import { toWezTerm } from "./exporters/wezterm";
import { toWindowsTerminal } from "./exporters/windows-terminal";
import { toXresources } from "./exporters/xresources";

export const exporters = {
  Alacritty: { export: toAlacritty },
  Foot: { export: toFoot },
  FZF: { export: toFzf }, // TODO: not yet exposed, need to figure out better gray shades first
  Ghostty: { export: toGhostty },
  Helix: { export: toHelix },
  JSON: { export: toJson },
  Kitty: { export: toKitty },
  WezTerm: { export: toWezTerm },
  WindowsTerminal: { export: toWindowsTerminal },
  Xresources: { export: toXresources },
};

export type Format = keyof typeof exporters;
