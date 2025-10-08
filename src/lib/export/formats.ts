import { type SelectOption } from "$lib/selectOptions";

import { toAlacritty } from "./alacritty";
import { toFoot } from "./foot";
import { toFzf } from "./fzf";
import { toGhostty } from "./ghostty";
import { toHelix } from "./helix";
import { toITerm } from "./iterm";
import { toJson } from "./json";
import { toKitty } from "./kitty";
import { toNeovim } from "./neovim";
import { toNix } from "./nix";
import { toTabby } from "./tabby";
import { toVim } from "./vim";
import { toVSCode } from "./vscode";
import { toWarp } from "./warp";
import { toWezTerm } from "./wezterm";
import { toWindowsTerminal } from "./windows-terminal";
import { toXresources } from "./xresources";
import { toZellij } from "./zellij";

/**
 * Declares which export function to call for a given named exporter that is selected in the UI
 */
export const exporters = {
  Alacritty: { export: toAlacritty },
  Foot: { export: toFoot },
  fzf: { export: toFzf },
  Ghostty: { export: toGhostty },
  Helix: { export: toHelix },
  iTerm: { export: toITerm },
  JSON: { export: toJson },
  Kitty: { export: toKitty },
  neovim: { export: toNeovim },
  Nix: { export: toNix },
  Tabby: { export: toTabby },
  vim: { export: toVim },
  VSCode: { export: toVSCode },
  Warp: { export: toWarp },
  WezTerm: { export: toWezTerm },
  WindowsTerminal: { export: toWindowsTerminal },
  Xresources: { export: toXresources },
  Zellij: { export: toZellij },
};

export type Format = keyof typeof exporters;

interface ExportOption extends SelectOption {
  value: Format;
}

/**
 *  Defines how export options show up in <select> elements in the UI.
 *  * label: the label used for the <option> element
 *  * group: can be used to group <options> in the <select> widget
 *  * value: the exporter to be used to generate configuration from cereals (see 'exporters')
 */
export const exportSelectOptions: ExportOption[] = [
  { value: "JSON", label: "JSON", group: "General" },
  { value: "Nix", label: "Nix", group: "General" },
  { value: "Alacritty", label: "Alacritty", group: "Terminal Emulators" },
  { value: "Foot", label: "foot", group: "Terminal Emulators" },
  { value: "Ghostty", label: "ghostty", group: "Terminal Emulators" },
  { value: "iTerm", label: "iTerm2", group: "Terminal Emulators" },
  { value: "Kitty", label: "kitty", group: "Terminal Emulators" },
  { value: "Tabby", label: "Tabby", group: "Terminal Emulators" },
  { value: "Warp", label: "Warp", group: "Terminal Emulators" },
  { value: "WezTerm", label: "WezTerm", group: "Terminal Emulators" },
  { value: "WindowsTerminal", label: "Windows Terminal", group: "Terminal Emulators" },
  { value: "VSCode", label: "Visual Studio Code", group: "Terminal Emulators" },
  { value: "Xresources", label: "Xresources", group: "Terminal Emulators" },
  { value: "fzf", label: "fzf", group: "CLI Tools" },
  { value: "Helix", label: "Helix", group: "CLI Tools" },
  { value: "neovim", label: "neovim", group: "CLI Tools" },
  { value: "vim", label: "vim", group: "CLI Tools" },
  { value: "Zellij", label: "Zellij", group: "CLI Tools" },
];
