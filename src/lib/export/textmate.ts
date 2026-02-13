import type { Cereals } from "$lib/cereals";

/**
 *  Textmate ("TM") syntax is used by many editors and syntax highlighting engines.
 *  While Textmate itself doesn't play a huge role anymore, Visual Studio Code, Sublime Text,
 *  Shiki (JS syntax highlighter) an many others are compatible with this syntax.
 */

interface TextmateRule {
  scope: string[] | string;
  name?: string;
  settings: {
    foreground: string;
    fontStyle?: "bold" | "italic" | "underline" | "strikethrough";
  };
}

export function textmateSyntaxRules(cereals: Cereals) {
  const tmRules: TextmateRule[] = [
    {
      name: "basic text, variable names",
      scope: [
        "text",
        "source",
        "variable.other.readwrite",
        "punctuation.definition.variable",
        "variable.argument",
        "variable",
      ],
      settings: {
        foreground: cereals.foreground.color_hex,
      },
    },
    {
      name: "parens, brackets, braces",
      scope: "punctuation",
      settings: {
        foreground: cereals.foreground.color_hex,
      },
    },
    {
      name: "comments",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        fontStyle: "italic",
        foreground: cereals.white.color_hex,
      },
    },
    {
      name: "strings",
      scope: ["string", "punctuation.definition.string"],
      settings: {
        foreground: cereals.green.color_hex,
      },
    },
    {
      name: "control flow keywords (if, throw, catch, import, export)",
      scope: ["keyword.control"],
      settings: {
        foreground: cereals.magenta.color_hex,
      },
    },
    {
      name: "invalid tokens",
      scope: "invalid",
      settings: {
        foreground: cereals.brightRed.color_hex,
      },
    },
    {
      name: "deprecated tokens",
      scope: "invalid.deprecated",
      settings: {
        foreground: cereals.brightYellow.color_hex,
      },
    },
    {
      name: "escaped characters",
      scope: "constant.character.escape",
      settings: {
        foreground: cereals.cyan.color_hex,
      },
    },
    {
      name: "numbers, booleans, constants",
      scope: [
        "constant.numeric",
        "variable.other.constant",
        "entity.name.constant",
        "constant.language.boolean",
        "constant.language.false",
        "constant.language.true",
        "keyword.other.unit.user-defined",
        "keyword.other.unit.suffix.floating-point",
      ],
      settings: {
        foreground: cereals.yellow.color_hex,
      },
    },
    {
      scope: [
        "keyword",
        "keyword.operator.word",
        "keyword.operator.new",
        "variable.language.super",
        "support.type.primitive",
        "storage.type",
        "storage.modifier",
        "punctuation.definition.keyword",
      ],
      settings: {
        foreground: cereals.magenta.color_hex,
      },
    },
    {
      scope: "entity.name.tag.documentation",
      settings: {
        foreground: cereals.brightBlack.color_hex,
      },
    },
    {
      name: "Punctuation",
      scope: [
        "keyword.operator",
        "punctuation.accessor",
        "punctuation.definition.generic",
        "meta.function.closure punctuation.section.parameters",
        "punctuation.definition.tag",
        "punctuation.separator.key-value",
      ],
      settings: {
        foreground: cereals.cyan.color_hex,
      },
    },
    {
      name: "functions",
      scope: [
        "entity.name.function",
        "meta.function-call.method",
        "support.function",
        "support.function.misc",
        "variable.function",
      ],
      settings: {
        foreground: cereals.blue.color_hex,
      },
    },
    {
      name: "classes",
      scope: [
        "entity.name.class",
        "entity.other.inherited-class",
        "support.class",
        "meta.function-call.constructor",
        "entity.name.struct",
        "meta.selector",
      ],
      settings: {
        foreground: cereals.brightYellow.color_hex,
      },
    },
    {
      name: "enum",
      scope: "entity.name.enum",
      settings: {
        foreground: cereals.brightYellow.color_hex,
      },
    },
    {
      name: "enum member",
      scope: ["meta.enum variable.other.readwrite", "variable.other.enummember"],
      settings: {
        foreground: cereals.cyan.color_hex,
      },
    },
    {
      name: "object properties",
      scope: "meta.property.object",
      settings: {
        foreground: cereals.red.color_hex,
      },
    },
    {
      name: "property names (JSON, CSS, etc)",
      scope: ["support.type.property-name"],
      settings: {
        foreground: cereals.brightBlue.color_hex,
      },
    },
    {
      name: "property values (e.g. right hand side of CSS)",
      scope: ["support.constant.property-value"],
      settings: {
        foreground: cereals.foreground.color_hex,
      },
    },
    {
      name: "types",
      scope: ["meta.type", "meta.type-alias", "support.type", "entity.name.type"],
      settings: {
        foreground: cereals.yellow.color_hex,
      },
    },
    {
      name: "decorators",
      scope: [
        "meta.annotation variable.function",
        "meta.annotation variable.annotation.function",
        "meta.annotation punctuation.definition.annotation",
        "meta.decorator",
        "punctuation.decorator",
      ],
      settings: {
        foreground: cereals.magenta.color_hex,
      },
    },
    {
      scope: ["variable.parameter", "meta.function.parameters"],
      settings: {
        foreground: cereals.red.color_hex,
      },
    },
    {
      name: "built-ins",
      scope: ["constant.language", "support.function.builtin"],
      settings: {
        foreground: cereals.red.color_hex,
      },
    },

    {
      name: "preprocessor directives",
      scope: ["keyword.control.directive", "punctuation.definition.directive"],
      settings: {
        foreground: cereals.magenta.color_hex,
      },
    },
    {
      name: "type parameters",
      scope: "punctuation.definition.typeparameters",
      settings: {
        foreground: cereals.brightYellow.color_hex,
      },
    },
    {
      name: "namespaces",
      scope: "entity.name.namespace",
      settings: {
        foreground: cereals.cyan.color_hex,
      },
    },
    {
      name: "this, self keyword",
      scope: ["variable.language.this", "variable.language.this punctuation.definition.variable"],
      settings: {
        foreground: cereals.red.color_hex,
      },
    },
    {
      name: "object properties",
      scope: "variable.object.property",
      settings: {
        foreground: cereals.foreground.color_hex,
      },
    },
    {
      name: "string interpolation variables",
      scope: ["string.template variable", "string variable"],
      settings: {
        foreground: cereals.foreground.color_hex,
      },
    },

    {
      scope: "markup.changed.diff",
      settings: {
        foreground: cereals.yellow.color_hex,
      },
    },
    {
      scope: "markup.inserted.diff",
      settings: {
        foreground: cereals.green.color_hex,
      },
    },
    {
      scope: "markup.deleted.diff",
      settings: {
        foreground: cereals.red.color_hex,
      },
    },
    {
      name: "HTML, XML tags",
      scope: "entity.name.tag",
      settings: {
        foreground: cereals.magenta.color_hex,
      },
    },
    {
      name: "Components",
      scope: "support.class.components",
      settings: {
        foreground: cereals.magenta.color_hex,
      },
    },
    {
      name: "HTML, XML attributes",
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: cereals.brightCyan.color_hex,
      },
    },
    {
      scope: ["punctuation.definition.annotation", "storage.type.annotation"],
      settings: {
        foreground: cereals.blue.color_hex,
      },
    },
    {
      scope: ["heading", "markup.heading"],
      settings: {
        foreground: cereals.blue.color_hex,
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: cereals.foreground.color_hex,
      },
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
        foreground: cereals.foreground.color_hex,
      },
    },
    {
      scope: "markup.strikethrough",
      settings: {
        fontStyle: "strikethrough",
        foreground: cereals.foreground.color_hex,
      },
    },
    {
      scope: ["punctuation.definition.link", "markup.underline.link"],
      settings: {
        foreground: cereals.magenta.color_hex,
      },
    },
    {
      scope: [
        "text.html.markdown punctuation.definition.link.title",
        "string.other.link.title.markdown",
        "markup.link",
        "punctuation.definition.constant.markdown",
        "constant.other.reference.link.markdown",
      ],
      settings: {
        foreground: cereals.blue.color_hex,
      },
    },
    {
      scope: ["markup.quote", "punctuation.definition.quote.begin"],
      settings: {
        foreground: cereals.yellow.color_hex,
      },
    },
    {
      scope: "meta.separator.markdown",
      settings: {
        foreground: cereals.blue.color_hex,
      },
    },
    {
      scope: ["markup.list.bullet"],
      settings: {
        foreground: cereals.cyan.color_hex,
      },
    },
  ];

  return tmRules;
}
