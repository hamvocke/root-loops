import { toAlacritty } from "./alacritty";
import { toFoot } from "./foot";
import { toGhostty } from "./ghostty";
import { toHelix } from "./helix";
import { toJson } from "./json";
import { toKitty } from "./kitty";
import { toWezTerm } from "./wezterm";
import { toWindowsTerminal } from "./windows-terminal";
import { toXresources } from "./xresources";

export const availableExports = {
  Alacritty: { export: toAlacritty },
  Foot: { export: toFoot },
  Ghostty: { export: toGhostty },
  Helix: { export: toHelix },
  JSON: { export: toJson },
  Kitty: { export: toKitty },
  WezTerm: { export: toWezTerm },
  WindowsTerminal: { export: toWindowsTerminal },
  Xresources: { export: toXresources },
};

export type Format = keyof typeof availableExports;
