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

const defaultHighlightValues = {
  bg: "NONE",
  fg: "NONE",
  style: "NONE",
};

/**
 * Links two highlight groups. "group" will inherit the styles of "targetGroup"
 */
export type LinkedHighlightGroup = { group: string; targetGroup: string };

export function isLinkedHighlightGroup(
  group: HighlightGroup | LinkedHighlightGroup,
): group is LinkedHighlightGroup {
  return "targetGroup" in group;
}

export type HighlightGroups = Array<HighlightGroup | LinkedHighlightGroup>;

type ColorMode = "ANSI" | "Truecolor";

type ColorDefinition = {
  hex: string; // used for true-color terminals
  ansi: number | "NONE"; // used when 'notermguicolors' is set
};

export function hi(highlightGroup: HighlightGroup, mode: ColorMode): string {
  const group = { ...defaultHighlightValues, ...highlightGroup };
  let command = "hi";
  command += ` ${group.group}`;
  command += ` ctermbg=${typeof group.bg === "string" ? group.bg : (group.bg as ColorDefinition).ansi}`;
  command += ` ctermfg=${typeof group.fg === "string" ? group.fg : (group.fg as ColorDefinition).ansi}`;
  command += ` cterm=${group.style}`;

  if (mode === "Truecolor") {
    command += ` guibg=${typeof group.bg === "string" ? group.bg : (group.bg as ColorDefinition).hex}`;
    command += ` guifg=${typeof group.fg === "string" ? group.fg : (group.fg as ColorDefinition).hex}`;
    command += ` gui=${group.style}`;

    if (group.undercurl) {
      command += ` guisp=${typeof group.undercurl === "string" ? group.undercurl : (group.undercurl as ColorDefinition).hex}`;
    }
  }
  return command;
}

export function renderAnsiHighlights(highlights: HighlightGroups) {
  // I wish I could write this as a .filter().map().join() statement,
  // but I can't figure out how to make TypeScript's type predicates play well with .filter()

  let template = "";
  for (const group of highlights) {
    if (!isLinkedHighlightGroup(group)) {
      template += `    ${hi(group, "ANSI")}\n`;
    }
  }
  return template;
}

export function renderTruecolorHighlights(highlights: HighlightGroups) {
  let template = "";
  for (const group of highlights) {
    if (!isLinkedHighlightGroup(group)) {
      template += `    ${hi(group, "Truecolor")}\n`;
    }
  }
  return template;
}

export function renderLinkedHighlights(highlights: HighlightGroups) {
  let template = "";
  for (const link of highlights) {
    if (isLinkedHighlightGroup(link)) {
      template += `  hi link ${link.group} ${link.targetGroup}\n`;
    }
  }
  return template;
}
