/**
 * A highlight group takes the name of a vim highlight group (see :h highlight-default) and assigns a background color, foreground color, optional style modifier, and optional undercurl color.
 * The style modifier can either be "NONE", one of the allowed values, or a string combining multiple values in a comma-separated way, e.g. "bold,underline".
 * The undercurl color is only supported in certain vim distributions (gvim on Mac as far as I'm aware) and will only take effect if the style modifier includes the value "undercurl".
 */
export type HighlightGroup = {
  group: string;
  bg?: ColorDefinition | "NONE" | "fg" | "bg";
  fg?: ColorDefinition | "NONE" | "fg" | "bg";
  style?: "NONE" | "bold" | "underline" | "reverse" | "italic" | "standout" | "undercurl" | string;
  undercurl?: ColorDefinition;
};

/**
 * Links two highlight groups. "group" will inherit the styles of "targetGroup"
 */
export type LinkedHighlightGroup = { group: string; targetGroup: string };

function isLinkedHighlightGroup(
  group: HighlightGroup | LinkedHighlightGroup,
): group is LinkedHighlightGroup {
  return "targetGroup" in group;
}

export type HighlightGroups = Array<HighlightGroup | LinkedHighlightGroup>;

type ColorMode = "ANSI" | "Truecolor";

export type ColorDefinition = {
  hex: string; // used for true-color terminals
  ansi: number | "NONE"; // used when 'notermguicolors' is set
};

export function hi(group: HighlightGroup, mode: ColorMode): string {
  let command = "hi";
  command += ` ${group.group}`;

  if (group.bg) {
    command += ` ctermbg=${typeof group.bg === "string" ? group.bg : (group.bg as ColorDefinition).ansi}`;
  }

  if (group.fg) {
    command += ` ctermfg=${typeof group.fg === "string" ? group.fg : (group.fg as ColorDefinition).ansi}`;
  }

  if (group.style) {
    command += ` cterm=${group.style}`;
  }

  if (mode === "Truecolor") {
    if (group.bg) {
      command += ` guibg=${typeof group.bg === "string" ? group.bg : (group.bg as ColorDefinition).hex}`;
    }

    if (group.fg) {
      command += ` guifg=${typeof group.fg === "string" ? group.fg : (group.fg as ColorDefinition).hex}`;
    }

    if (group.style) {
      command += ` gui=${group.style}`;
    }

    if (group.undercurl) {
      command += ` guisp=${typeof group.undercurl === "string" ? group.undercurl : (group.undercurl as ColorDefinition).hex}`;
    }
  }
  return command;
}

export function renderHighlights(highlights: HighlightGroups, mode: ColorMode) {
  return highlights
    .filter((h) => !isLinkedHighlightGroup(h))
    .map((h) => `    ${hi(h, mode)}`)
    .join("\n");
}

export function renderLinkedHighlights(highlights: HighlightGroups) {
  return highlights
    .filter((h) => isLinkedHighlightGroup(h))
    .map((link) => `hi link ${link.group} ${link.targetGroup}`)
    .join("\n");
}
