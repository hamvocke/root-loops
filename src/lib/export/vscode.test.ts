import { describe, expect, it } from "vitest";
import { type Recipe, MilkAmount, Flavor, Fruit } from "$lib/ingredients";
import { toVSCode } from "./vscode";

describe("Visual Studio Code export", () => {
  const someRecipe: Recipe = {
    milkAmount: MilkAmount.Glug,
    flavor: Flavor.Intense,
    artificialColors: 2,
    sugar: 3,
    fruit: Fruit.Elderberry,
    sogginess: 2,
  };

  it("exports the right format", () => {
    const config = toVSCode(someRecipe);
    const expected = `
// Add the following config to your ~/.config/Code/Usersettings.json file.
// Root Loops: https://rootloops.sh?sugar=3&colors=2&sogginess=2&flavor=2&fruit=9&milk=2
//
// NOTE: This will override other UI and syntax highlighting colors you
//       might expect to apply from extensions you installed. To use a
//       different color scheme installed via extensions, remove the config
//       below again.

{
  "workbench.colorCustomizations": {
    "activityBar.activeBorder": "#55403c",
    "activityBar.background": "#e5e7ee",
    "activityBar.border": "#d4d9e4",
    "activityBar.foreground": "#0f1219",
    "activityBar.inactiveForeground": "#4e556a",
    "activityBarBadge.background": "#374a4d",
    "activityBarBadge.foreground": "#e5e7ee",
    "badge.background": "#374a4d",
    "badge.foreground": "#e5e7ee",
    "banner.background": "#55403c",
    "breadcrumb.activeSelectionForeground": "#55403c",
    "breadcrumb.background": "#e5e7ee",
    "breadcrumb.focusForeground": "#374a4d",
    "breadcrumb.foreground": "#4e556a",
    "breadcrumbPicker.background": "#e5e7ee",
    "button.background": "#3f4557",
    "button.foreground": "#e5e7ee",
    "button.hoverBackground": "#51586e",
    "button.secondaryBackground": "#d4d9e4",
    "button.secondaryHoverBackground": "#9fa7bd",
    "checkbox.background": "#e5e7ee",
    "checkbox.border": "#3f4557",
    "checkbox.foreground": "#0f1219",
    "commandCenter.activeBackground": "#9fa7bd",
    "commandCenter.background": "#e5e7ee",
    "commandCenter.border": "#9fa7bd",
    "debugIcon.breakpointForeground": "#55403c",
    "descriptionForeground": "#262a37",
    "disabledForeground": "#4e556a",
    "dropdown.background": "#e5e7ee",
    "dropdown.listBackground": "#d4d9e4",
    "editor.background": "#e5e7ee",
    "editor.foreground": "#0f1219",
    "editor.findMatchBackground": "#5f5946",
    "editor.findMatchHighlightBackground": "#4b4536",
    "editor.hoverHighlightBackground": "#9fa7bd",
    "editor.lineHighlightBackground": "#d4d9e4",
    "editor.selectionBackground": "#9fa7bd",
    "editor.selectionHighlightBackground": "#5f5946",
    "editor.wordHighlightBackground": "#9fa7bd",
    "editorCursor.foreground": "#262a37",
    "editorGroup.border": "#9fa7bd",
    "editorGroup.emptyBackground": "#e5e7ee",
    "editorGroupHeader.noTabsBackground": "#e5e7ee",
    "editorGroupHeader.tabsBackground": "#e5e7ee",
    "editorGutter.addedBackground": "#3c4a3e",
    "editorGutter.deletedBackground": "#55403c",
    "editorGutter.modifiedBackground": "#3f4557",
    "editorHoverWidget.background": "#e5e7ee",
    "editorHoverWidget.border": "#9fa7bd",
    "editorHoverWidget.foreground": "#0f1219",
    "editorIndentGuide.activeBackground1": "#9fa7bd",
    "editorIndentGuide.background1": "#d4d9e4",
    "editorLineNumber.activeForeground": "#55403c",
    "editorLineNumber.foreground": "#9fa7bd",
    "editorLink.activeForeground": "#6b524e",
    "editorStickyScrollHover.background": "#9fa7bd",
    "editorSuggestWidget.background": "#e5e7ee",
    "editorSuggestWidget.border": "#9fa7bd",
    "editorSuggestWidget.focusHighlightForeground": "#55403c",
    "editorSuggestWidget.foreground": "#0f1219",
    "editorSuggestWidget.highlightForeground": "#55403c",
    "editorSuggestWidget.selectedBackground": "#d4d9e4",
    "editorSuggestWidget.selectedForeground": "#0f1219",
    "editorSuggestWidget.selectedIconForeground": "#0f1219",
    "editorWidget.background": "#e5e7ee",
    "editorWidget.foreground": "#0f1219",
    "editorWidget.resizeBorder": "#9fa7bd",
    "errorForeground": "#55403c",
    "focusBorder": "#4e556a",
    "foreground": "#0f1219",
    "input.background": "#d4d9e4",
    "input.border": "#d4d9e4",
    "input.foreground": "#0f1219",
    "input.placeholderForeground": "#4e556a",
    "inputOption.activeBackground": "#50404e",
    "inputOption.activeBorder": "#50404e",
    "inputOption.activeForeground": "#e5e7ee",
    "inputOption.hoverBackground": "#9fa7bd",
    "keybindingLabel.background": "#d4d9e4",
    "keybindingLabel.border": "#9fa7bd",
    "keybindingLabel.bottomBorder": "#9fa7bd",
    "list.activeSelectionBackground": "#9fa7bd",
    "list.errorForeground": "#55403c",
    "list.focusOutline": "#9fa7bd",
    "list.hoverBackground": "#d4d9e4",
    "list.inactiveSelectionBackground": "#d4d9e4",
    "list.warningForeground": "#4b4536",
    "menu.background": "#e5e7ee",
    "menu.border": "#9fa7bd",
    "menu.foreground": "#0f1219",
    "menu.selectionBackground": "#d4d9e4",
    "menu.selectionForeground": "#0f1219",
    "menu.separatorBackground": "#d4d9e4",
    "menubar.selectionBackground": "#9fa7bd",
    "notifications.background": "#e5e7ee",
    "notifications.border": "#9fa7bd",
    "notificationToast.border": "#9fa7bd",
    "panel.background": "#e5e7ee",
    "panel.border": "#d4d9e4",
    "panel.dropBorder": "#4e556a",
    "panelInput.border": "#9fa7bd",
    "panelSection.border": "#9fa7bd",
    "panelSection.dropBackground": "#d4d9e4",
    "panelSectionHeader.background": "#e5e7ee",
    "panelSectionHeader.foreground": "#4e556a",
    "panelTitle.activeBorder": "#55403c",
    "panelTitle.activeForeground": "#0f1219",
    "panelTitle.inactiveForeground": "#4e556a",
    "panelTitleBadge.background": "#374a4d",
    "panelTitleBadge.foreground": "#e5e7ee",
    "peekViewEditor.background": "#3c4a3e",
    "progressBar.background": "#55403c",
    "quickInput.background": "#e5e7ee",
    "quickInput.foreground": "#0f1219",
    "quickInputList.focusBackground": "#d4d9e4",
    "quickInputList.focusForeground": "#0f1219",
    "quickInputList.focusIconForeground": "#0f1219",
    "scrollbarSlider.activeBackground": "#55403c",
    "scrollbarSlider.background": "#d4d9e4",
    "scrollbarSlider.hoverBackground": "#9fa7bd",
    "selection.background": "#9fa7bd",
    "settings.dropdownBackground": "#d4d9e4",
    "settings.dropdownBorder": "#3f4557",
    "settings.dropdownForeground": "#0f1219",
    "sideBar.background": "#e5e7ee",
    "sideBar.border": "#d4d9e4",
    "sideBar.dropBackground": "#d4d9e4",
    "sideBar.foreground": "#0f1219",
    "sideBarSectionHeader.background": "#e5e7ee",
    "sideBarSectionHeader.border": "#d4d9e4",
    "sideBarSectionHeader.foreground": "#0f1219",
    "sideBarTitle.foreground": "#0f1219",
    "statusBar.background": "#e5e7ee",
    "statusBar.border": "#e5e7ee",
    "statusBar.debuggingBackground": "#3c4a3e",
    "statusBar.debuggingForeground": "#e5e7ee",
    "statusBar.focusBorder": "#4e556a",
    "statusBar.foreground": "#0f1219",
    "statusBar.noFolderBackground": "#e5e7ee",
    "statusBarItem.activeBackground": "#9fa7bd",
    "statusBarItem.errorBackground": "#55403c",
    "statusBarItem.errorForeground": "#d4d9e4",
    "statusBarItem.hoverBackground": "#d4d9e4",
    "statusBarItem.hoverForeground": "#0f1219",
    "statusBarItem.prominentBackground": "#4b4536",
    "statusBarItem.prominentForeground": "#e5e7ee",
    "statusBarItem.remoteBackground": "#3f4557",
    "statusBarItem.remoteForeground": "#e5e7ee",
    "tab.activeBackground": "#d4d9e4",
    "tab.activeBorder": "#d4d9e4",
    "tab.activeBorderTop": "#55403c",
    "tab.activeForeground": "#0f1219",
    "tab.activeModifiedBorder": "#d4d9e4",
    "tab.border": "#9fa7bd",
    "tab.hoverBackground": "#d4d9e4",
    "tab.inactiveBackground": "#e5e7ee",
    "tab.inactiveForeground": "#4e556a",
    "tab.inactiveModifiedBorder": "#d4d9e4",
    "tab.unfocusedActiveBorder": "#d4d9e4",
    "tab.unfocusedActiveBorderTop": "#9fa7bd",
    "tab.unfocusedActiveModifiedBorder": "#d4d9e4",
    "tab.unfocusedHoverBackground": "#d4d9e4",
    "tab.unfocusedInactiveModifiedBorder": "#d4d9e4",
    "textLink.activeForeground": "#51586e",
    "textLink.foreground": "#3f4557",
    "titleBar.activeBackground": "#d4d9e4",
    "titleBar.activeForeground": "#0f1219",
    "titleBar.border": "#d4d9e4",
    "titleBar.inactiveBackground": "#e5e7ee",
    "titleBar.inactiveForeground": "#0f1219",
    "toolbar.activeBackground": "#d4d9e4",
    "toolbar.hoverBackground": "#d4d9e4",
    "tree.inactiveIndentGuidesStroke": "#d4d9e4",
    "tree.indentGuidesStroke": "#9fa7bd",
    "welcomePage.background": "#e5e7ee",
    "welcomePage.progress.background": "#e5e7ee",
    "welcomePage.progress.foreground": "#0f1219",
    "welcomePage.tileBackground": "#d4d9e4",
    "welcomePage.tileBorder": "#9fa7bd",
    "welcomePage.tileHoverBackground": "#d4d9e4",
    "widget.border": "#9fa7bd",
    "terminal.ansiBlack": "#d4d9e4",
    "terminal.ansiBlue": "#3f4557",
    "terminal.ansiBrightBlack": "#9fa7bd",
    "terminal.ansiBrightBlue": "#51586e",
    "terminal.ansiBrightCyan": "#475e62",
    "terminal.ansiBrightGreen": "#4d5e50",
    "terminal.ansiBrightMagenta": "#655263",
    "terminal.ansiBrightRed": "#6b524e",
    "terminal.ansiBrightWhite": "#262a37",
    "terminal.ansiBrightYellow": "#5f5946",
    "terminal.ansiCyan": "#374a4d",
    "terminal.ansiGreen": "#3c4a3e",
    "terminal.ansiMagenta": "#50404e",
    "terminal.ansiRed": "#55403c",
    "terminal.ansiWhite": "#4e556a",
    "terminal.ansiYellow": "#4b4536",
    "terminal.background": "#e5e7ee",
    "terminal.foreground": "#0f1219",
    "terminalCursor.foreground": "#4e556a"
  },
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "name": "basic text, variable names",
        "scope": [
          "text",
          "source",
          "variable.other.readwrite",
          "punctuation.definition.variable",
          "variable.argument",
          "variable"
        ],
        "settings": {
          "foreground": "#0f1219"
        }
      },
      {
        "name": "parens, brackets, braces",
        "scope": "punctuation",
        "settings": {
          "foreground": "#0f1219"
        }
      },
      {
        "name": "comments",
        "scope": [
          "comment",
          "punctuation.definition.comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#4e556a"
        }
      },
      {
        "name": "strings",
        "scope": [
          "string",
          "punctuation.definition.string"
        ],
        "settings": {
          "foreground": "#3c4a3e"
        }
      },
      {
        "name": "control flow keywords (if, throw, catch, import, export)",
        "scope": [
          "keyword.control"
        ],
        "settings": {
          "foreground": "#50404e"
        }
      },
      {
        "name": "invalid tokens",
        "scope": "invalid",
        "settings": {
          "foreground": "#6b524e"
        }
      },
      {
        "name": "deprecated tokens",
        "scope": "invalid.deprecated",
        "settings": {
          "foreground": "#5f5946"
        }
      },
      {
        "name": "escaped characters",
        "scope": "constant.character.escape",
        "settings": {
          "foreground": "#374a4d"
        }
      },
      {
        "name": "numbers, booleans, constants",
        "scope": [
          "constant.numeric",
          "variable.other.constant",
          "entity.name.constant",
          "constant.language.boolean",
          "constant.language.false",
          "constant.language.true",
          "keyword.other.unit.user-defined",
          "keyword.other.unit.suffix.floating-point"
        ],
        "settings": {
          "foreground": "#4b4536"
        }
      },
      {
        "scope": [
          "keyword",
          "keyword.operator.word",
          "keyword.operator.new",
          "variable.language.super",
          "support.type.primitive",
          "storage.type",
          "storage.modifier",
          "punctuation.definition.keyword"
        ],
        "settings": {
          "foreground": "#50404e"
        }
      },
      {
        "scope": "entity.name.tag.documentation",
        "settings": {
          "foreground": "#9fa7bd"
        }
      },
      {
        "name": "Punctuation",
        "scope": [
          "keyword.operator",
          "punctuation.accessor",
          "punctuation.definition.generic",
          "meta.function.closure punctuation.section.parameters",
          "punctuation.definition.tag",
          "punctuation.separator.key-value"
        ],
        "settings": {
          "foreground": "#374a4d"
        }
      },
      {
        "name": "functions",
        "scope": [
          "entity.name.function",
          "meta.function-call.method",
          "support.function",
          "support.function.misc",
          "variable.function"
        ],
        "settings": {
          "foreground": "#3f4557"
        }
      },
      {
        "name": "classes",
        "scope": [
          "entity.name.class",
          "entity.other.inherited-class",
          "support.class",
          "meta.function-call.constructor",
          "entity.name.struct",
          "meta.selector"
        ],
        "settings": {
          "foreground": "#5f5946"
        }
      },
      {
        "name": "enum",
        "scope": "entity.name.enum",
        "settings": {
          "foreground": "#5f5946"
        }
      },
      {
        "name": "enum member",
        "scope": [
          "meta.enum variable.other.readwrite",
          "variable.other.enummember"
        ],
        "settings": {
          "foreground": "#374a4d"
        }
      },
      {
        "name": "object properties",
        "scope": "meta.property.object",
        "settings": {
          "foreground": "#55403c"
        }
      },
      {
        "name": "property names (JSON, CSS, etc)",
        "scope": [
          "support.type.property-name"
        ],
        "settings": {
          "foreground": "#51586e"
        }
      },
      {
        "name": "property values (e.g. right hand side of CSS)",
        "scope": [
          "support.constant.property-value"
        ],
        "settings": {
          "foreground": "#0f1219"
        }
      },
      {
        "name": "types",
        "scope": [
          "meta.type",
          "meta.type-alias",
          "support.type",
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#4b4536"
        }
      },
      {
        "name": "decorators",
        "scope": [
          "meta.annotation variable.function",
          "meta.annotation variable.annotation.function",
          "meta.annotation punctuation.definition.annotation",
          "meta.decorator",
          "punctuation.decorator"
        ],
        "settings": {
          "foreground": "#50404e"
        }
      },
      {
        "scope": [
          "variable.parameter",
          "meta.function.parameters"
        ],
        "settings": {
          "foreground": "#55403c"
        }
      },
      {
        "name": "built-ins",
        "scope": [
          "constant.language",
          "support.function.builtin"
        ],
        "settings": {
          "foreground": "#55403c"
        }
      },
      {
        "name": "preprocessor directives",
        "scope": [
          "keyword.control.directive",
          "punctuation.definition.directive"
        ],
        "settings": {
          "foreground": "#50404e"
        }
      },
      {
        "name": "type parameters",
        "scope": "punctuation.definition.typeparameters",
        "settings": {
          "foreground": "#5f5946"
        }
      },
      {
        "name": "namespaces",
        "scope": "entity.name.namespace",
        "settings": {
          "foreground": "#374a4d"
        }
      },
      {
        "name": "this, self keyword",
        "scope": [
          "variable.language.this",
          "variable.language.this punctuation.definition.variable"
        ],
        "settings": {
          "foreground": "#55403c"
        }
      },
      {
        "name": "object properties",
        "scope": "variable.object.property",
        "settings": {
          "foreground": "#0f1219"
        }
      },
      {
        "name": "string interpolation variables",
        "scope": [
          "string.template variable",
          "string variable"
        ],
        "settings": {
          "foreground": "#0f1219"
        }
      },
      {
        "scope": "markup.changed.diff",
        "settings": {
          "foreground": "#4b4536"
        }
      },
      {
        "scope": "markup.inserted.diff",
        "settings": {
          "foreground": "#3c4a3e"
        }
      },
      {
        "scope": "markup.deleted.diff",
        "settings": {
          "foreground": "#55403c"
        }
      },
      {
        "name": "HTML, XML tags",
        "scope": "entity.name.tag",
        "settings": {
          "foreground": "#50404e"
        }
      },
      {
        "name": "Components",
        "scope": "support.class.components",
        "settings": {
          "foreground": "#50404e"
        }
      },
      {
        "name": "HTML, XML attributes",
        "scope": [
          "entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#475e62"
        }
      },
      {
        "scope": [
          "punctuation.definition.annotation",
          "storage.type.annotation"
        ],
        "settings": {
          "foreground": "#3f4557"
        }
      },
      {
        "scope": [
          "heading",
          "markup.heading"
        ],
        "settings": {
          "foreground": "#3f4557",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#0f1219"
        }
      },
      {
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#0f1219"
        }
      },
      {
        "scope": "markup.strikethrough",
        "settings": {
          "fontStyle": "strikethrough",
          "foreground": "#0f1219"
        }
      },
      {
        "scope": [
          "punctuation.definition.link",
          "markup.underline.link"
        ],
        "settings": {
          "foreground": "#50404e"
        }
      },
      {
        "scope": [
          "text.html.markdown punctuation.definition.link.title",
          "string.other.link.title.markdown",
          "markup.link",
          "punctuation.definition.constant.markdown",
          "constant.other.reference.link.markdown"
        ],
        "settings": {
          "foreground": "#3f4557"
        }
      },
      {
        "scope": [
          "markup.quote",
          "punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#4b4536"
        }
      },
      {
        "scope": "meta.separator.markdown",
        "settings": {
          "foreground": "#3f4557"
        }
      },
      {
        "scope": [
          "markup.list.bullet"
        ],
        "settings": {
          "foreground": "#374a4d"
        }
      }
    ]
  }
}`;
    expect(config).toEqual(expected);
  });
});
