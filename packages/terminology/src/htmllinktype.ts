/**
 * HtmlLinkType values are drawn from HTML 4.0 and describe the relationship between the current document and the anchor that is the target of the link
 * http://terminology.hl7.org/ValueSet/v3-HtmlLinkType
 */
export const HtmlLinkTypeCode = {
  /**
   * alternate
   */
  alternate: "alternate",

  /**
   * appendix
   */
  appendix: "appendix",

  /**
   * bookmark
   */
  bookmark: "bookmark",

  /**
   * chapter
   */
  chapter: "chapter",

  /**
   * contents
   */
  contents: "contents",

  /**
   * copyright
   */
  copyright: "copyright",

  /**
   * glossary
   */
  glossary: "glossary",

  /**
   * help
   */
  help: "help",

  /**
   * index
   */
  index: "index",

  /**
   * next
   */
  next: "next",

  /**
   * prev
   */
  prev: "prev",

  /**
   * section
   */
  section: "section",

  /**
   * start
   */
  start: "start",

  /**
   * stylesheet
   */
  stylesheet: "stylesheet",

  /**
   * subsection
   */
  subsection: "subsection",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HtmlLinkTypeCode =
  typeof HtmlLinkTypeCode[keyof typeof HtmlLinkTypeCode];
