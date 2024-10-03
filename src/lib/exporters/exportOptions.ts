import { type SelectOption } from "$lib/selectOptions";

export enum ExportFormat {
  JSON = 0,
  WindowsTerminal,
  Alacritty,
  XResources,
  Kitty,
  WezTerm,
  // Neovim,
  Helix,
}

export const exportSelectOptions: SelectOption[] = [
  { value: ExportFormat.JSON, label: "JSON", group: "General" },
  { value: ExportFormat.Alacritty, label: "Alacritty", group: "Terminal Emulators" },
  { value: ExportFormat.Kitty, label: "Kitty", group: "Terminal Emulators" },
  { value: ExportFormat.WezTerm, label: "WezTerm", group: "Terminal Emulators" },
  { value: ExportFormat.WindowsTerminal, label: "Windows Terminal", group: "Terminal Emulators" },
  { value: ExportFormat.XResources, label: "XResources", group: "Terminal Emulators" },
  // { value: ExportFormat.Neovim, label: "Neovim", group: "Editors" },
  { value: ExportFormat.Helix, label: "Helix", group: "Editors" },
];
