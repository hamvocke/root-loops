import { type SelectOption } from "$lib/selectOptions";

export enum ExportFormat {
  JSON = 0,
  WindowsTerminal = 1,
  Alacritty = 2,
  XResources = 3,
  Kitty = 4,
  WezTerm = 5,
  Neovim = 6,
}

export const exportSelectOptions: SelectOption[] = [
  { value: ExportFormat.JSON, label: "JSON", group: "General" },
  { value: ExportFormat.WindowsTerminal, label: "Windows Terminal", group: "Terminal Emulators" },
  { value: ExportFormat.Alacritty, label: "Alacritty", group: "Terminal Emulators" },
  { value: ExportFormat.XResources, label: "XResources", group: "Terminal Emulators" },
  { value: ExportFormat.Kitty, label: "Kitty", group: "Terminal Emulators" },
  { value: ExportFormat.WezTerm, label: "WezTerm", group: "Terminal Emulators" },
  { value: ExportFormat.Neovim, label: "Neovim", group: "Editors" },
];