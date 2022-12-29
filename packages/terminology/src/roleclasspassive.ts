/**
 * An association for a playing Entity that is used, known, treated, handled, built, or destroyed, etc. under the auspices of the scoping Entity. The playing Entity is passive in these roles (even though it may be active in other roles), in the sense that the kinds of things done to it in this role happen without an agreement from the playing Entity.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPassive
 */
export const RoleClassPassiveCode = {
  /**
   * access
   */
  access: "ACCESS",

  /**
   * adjacency
   */
  adjacency: "ADJY",

  /**
   * connection
   */
  connection: "CONC",

  /**
   * molecular bond
   */
  molecularbond: "BOND",

  /**
   * continuity
   */
  continuity: "CONY",

  /**
   * Administerable Material
   */
  AdministerableMaterial: "ADMM",

  /**
   * birthplace
   */
  birthplace: "BIRTHPL",

  /**
   * place of death
   */
  placeofdeath: "DEATHPLC",

  /**
   * distributed material
   */
  distributedmaterial: "DST",

  /**
   * retailed material
   */
  retailedmaterial: "RET",

  /**
   * event location
   */
  eventlocation: "EXLOC",

  /**
   * service delivery location
   */
  servicedeliverylocation: "SDLOC",

  /**
   * dedicated service delivery location
   */
  dedicatedservicedeliverylocation: "DSDLOC",

  /**
   * incidental service delivery location
   */
  incidentalservicedeliverylocation: "ISDLOC",

  /**
   * exposed entity
   */
  exposedentity: "EXPR",

  /**
   * held entity
   */
  heldentity: "HLD",

  /**
   * health chart
   */
  healthchart: "HLTHCHRT",

  /**
   * identified entity
   */
  identifiedentity: "IDENT",

  /**
   * manufactured product
   */
  manufacturedproduct: "MANU",

  /**
   * therapeutic agent
   */
  therapeuticagent: "THER",

  /**
   * maintained entity
   */
  maintainedentity: "MNT",

  /**
   * owned entity
   */
  ownedentity: "OWN",

  /**
   * regulated product
   */
  regulatedproduct: "RGPR",

  /**
   * territory of authority
   */
  territoryofauthority: "TERR",

  /**
   * used entity
   */
  usedentity: "USED",

  /**
   * warranted product
   */
  warrantedproduct: "WRTE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPassiveCode =
  typeof RoleClassPassiveCode[keyof typeof RoleClassPassiveCode];
