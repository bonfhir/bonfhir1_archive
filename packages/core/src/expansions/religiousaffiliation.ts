/**
 * Assigment of spiritual faith affiliation
 * http://terminology.hl7.org/ValueSet/v3-ReligiousAffiliation
 */
export const ReligiousAffiliationCode = {
  /**
   * Adventist
   */
  "1001": "1001",

  /**
   * African Religions
   */
  "1002": "1002",

  /**
   * Afro-Caribbean Religions
   */
  "1003": "1003",

  /**
   * Agnosticism
   */
  "1004": "1004",

  /**
   * Anglican
   */
  "1005": "1005",

  /**
   * Animism
   */
  "1006": "1006",

  /**
   * Atheism
   */
  "1007": "1007",

  /**
   * Babi & Baha'I faiths
   */
  "1008": "1008",

  /**
   * Baptist
   */
  "1009": "1009",

  /**
   * Bon
   */
  "1010": "1010",

  /**
   * Cao Dai
   */
  "1011": "1011",

  /**
   * Celticism
   */
  "1012": "1012",

  /**
   * Christian (non-Catholic, non-specific)
   */
  "1013": "1013",

  /**
   * Confucianism
   */
  "1014": "1014",

  /**
   * Cyberculture Religions
   */
  "1015": "1015",

  /**
   * Divination
   */
  "1016": "1016",

  /**
   * Fourth Way
   */
  "1017": "1017",

  /**
   * Free Daism
   */
  "1018": "1018",

  /**
   * Gnosis
   */
  "1019": "1019",

  /**
   * Hinduism
   */
  "1020": "1020",

  /**
   * Humanism
   */
  "1021": "1021",

  /**
   * Independent
   */
  "1022": "1022",

  /**
   * Islam
   */
  "1023": "1023",

  /**
   * Jainism
   */
  "1024": "1024",

  /**
   * Jehovah's Witnesses
   */
  "1025": "1025",

  /**
   * Judaism
   */
  "1026": "1026",

  /**
   * Latter Day Saints
   */
  "1027": "1027",

  /**
   * Lutheran
   */
  "1028": "1028",

  /**
   * Mahayana
   */
  "1029": "1029",

  /**
   * Meditation
   */
  "1030": "1030",

  /**
   * Messianic Judaism
   */
  "1031": "1031",

  /**
   * Mitraism
   */
  "1032": "1032",

  /**
   * New Age
   */
  "1033": "1033",

  /**
   * non-Roman Catholic
   */
  "1034": "1034",

  /**
   * Occult
   */
  "1035": "1035",

  /**
   * Orthodox
   */
  "1036": "1036",

  /**
   * Paganism
   */
  "1037": "1037",

  /**
   * Pentecostal
   */
  "1038": "1038",

  /**
   * Process, The
   */
  "1039": "1039",

  /**
   * Reformed/Presbyterian
   */
  "1040": "1040",

  /**
   * Roman Catholic Church
   */
  "1041": "1041",

  /**
   * Satanism
   */
  "1042": "1042",

  /**
   * Scientology
   */
  "1043": "1043",

  /**
   * Shamanism
   */
  "1044": "1044",

  /**
   * Shiite (Islam)
   */
  "1045": "1045",

  /**
   * Shinto
   */
  "1046": "1046",

  /**
   * Sikism
   */
  "1047": "1047",

  /**
   * Spiritualism
   */
  "1048": "1048",

  /**
   * Sunni (Islam)
   */
  "1049": "1049",

  /**
   * Taoism
   */
  "1050": "1050",

  /**
   * Theravada
   */
  "1051": "1051",

  /**
   * Unitarian-Universalism
   */
  "1052": "1052",

  /**
   * Universal Life Church
   */
  "1053": "1053",

  /**
   * Vajrayana (Tibetan)
   */
  "1054": "1054",

  /**
   * Veda
   */
  "1055": "1055",

  /**
   * Voodoo
   */
  "1056": "1056",

  /**
   * Wicca
   */
  "1057": "1057",

  /**
   * Yaohushua
   */
  "1058": "1058",

  /**
   * Zen Buddhism
   */
  "1059": "1059",

  /**
   * Zoroastrianism
   */
  "1060": "1060",

  /**
   * Assembly of God
   */
  "1061": "1061",

  /**
   * Brethren
   */
  "1062": "1062",

  /**
   * Christian Scientist
   */
  "1063": "1063",

  /**
   * Church of Christ
   */
  "1064": "1064",

  /**
   * Church of God
   */
  "1065": "1065",

  /**
   * Congregational
   */
  "1066": "1066",

  /**
   * Disciples of Christ
   */
  "1067": "1067",

  /**
   * Eastern Orthodox
   */
  "1068": "1068",

  /**
   * Episcopalian
   */
  "1069": "1069",

  /**
   * Evangelical Covenant
   */
  "1070": "1070",

  /**
   * Friends
   */
  "1071": "1071",

  /**
   * Full Gospel
   */
  "1072": "1072",

  /**
   * Methodist
   */
  "1073": "1073",

  /**
   * Native American
   */
  "1074": "1074",

  /**
   * Nazarene
   */
  "1075": "1075",

  /**
   * Presbyterian
   */
  "1076": "1076",

  /**
   * Protestant
   */
  "1077": "1077",

  /**
   * Protestant, No Denomination
   */
  "1078": "1078",

  /**
   * Reformed
   */
  "1079": "1079",

  /**
   * Salvation Army
   */
  "1080": "1080",

  /**
   * Unitarian Universalist
   */
  "1081": "1081",

  /**
   * United Church of Christ
   */
  "1082": "1082",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReligiousAffiliationCode =
  typeof ReligiousAffiliationCode[keyof typeof ReligiousAffiliationCode];
