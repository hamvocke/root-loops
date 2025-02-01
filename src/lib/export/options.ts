import { type SelectOption } from "$lib/selectOptions";
import { type Format } from "$lib/export/formats";

interface ExportOption extends SelectOption {
  value: Format;
}

export const exportSelectOptions: ExportOption[] = [
  { value: "JSON", label: "JSON", group: "General" },
  { value: "Alacritty", label: "Alacritty", group: "Terminal Emulators" },
  { value: "Foot", label: "foot", group: "Terminal Emulators" },
  { value: "Ghostty", label: "ghostty", group: "Terminal Emulators" },
  { value: "iTerm", label: "iTerm2", group: "Terminal Emulators" },
  { value: "Kitty", label: "kitty", group: "Terminal Emulators" },
  { value: "WezTerm", label: "WezTerm", group: "Terminal Emulators" },
  { value: "WindowsTerminal", label: "Windows Terminal", group: "Terminal Emulators" },
  { value: "Xresources", label: "Xresources", group: "Terminal Emulators" },
  { value: "fzf", label: "fzf", group: "CLI Tools" },
  { value: "Helix", label: "Helix", group: "CLI Tools" },
  { value: "neovim", label: "neovim", group: "CLI Tools" },
  { value: "vim", label: "vim", group: "CLI Tools" },
  { value: "Zellij", label: "Zellij", group: "CLI Tools" },
];
