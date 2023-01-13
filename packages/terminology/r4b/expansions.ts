import { CodeableConcept, Coding, ValueSetExpansionContains } from "fhir/r4";
import type { TypedValueSet } from "./typed-valueset";

/**
 * Domain provides codes that qualify the ActEncounterClass (ENC)
 *
 * http://terminology.hl7.org/ValueSet/v3-ActEncounterCode
 */
export const ActEncounterCode: TypedValueSet<{
  ambulatory: "AMB";
  emergency: "EMER";
  field: "FLD";
  homehealth: "HH";
  inpatientencounter: "IMP";
  inpatientacute: "ACUTE";
  inpatientnonacute: "NONAC";
  observationencounter: "OBSENC";
  preadmission: "PRENC";
  shortstay: "SS";
  virtual: "VR";
}> = {
  url: "http://terminology.hl7.org/ValueSet/v3-ActEncounterCode",

  values: {
    ambulatory: {
      code: "AMB",
      coding: <Coding>{
        code: "AMB",
        display: "ambulatory",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "AMB",
            display: "ambulatory",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "ambulatory",
      },
    },

    emergency: {
      code: "EMER",
      coding: <Coding>{
        code: "EMER",
        display: "emergency",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "EMER",
            display: "emergency",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "emergency",
      },
    },

    field: {
      code: "FLD",
      coding: <Coding>{
        code: "FLD",
        display: "field",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "FLD",
            display: "field",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "field",
      },
    },

    homehealth: {
      code: "HH",
      coding: <Coding>{
        code: "HH",
        display: "home health",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "HH",
            display: "home health",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "home health",
      },
    },

    inpatientencounter: {
      code: "IMP",
      coding: <Coding>{
        code: "IMP",
        display: "inpatient encounter",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "IMP",
            display: "inpatient encounter",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "inpatient encounter",
      },
    },

    inpatientacute: {
      code: "ACUTE",
      coding: <Coding>{
        code: "ACUTE",
        display: "inpatient acute",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "ACUTE",
            display: "inpatient acute",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "inpatient acute",
      },
    },

    inpatientnonacute: {
      code: "NONAC",
      coding: <Coding>{
        code: "NONAC",
        display: "inpatient non-acute",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "NONAC",
            display: "inpatient non-acute",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "inpatient non-acute",
      },
    },

    observationencounter: {
      code: "OBSENC",
      coding: <Coding>{
        code: "OBSENC",
        display: "observation encounter",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "OBSENC",
            display: "observation encounter",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "observation encounter",
      },
    },

    preadmission: {
      code: "PRENC",
      coding: <Coding>{
        code: "PRENC",
        display: "pre-admission",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "PRENC",
            display: "pre-admission",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "pre-admission",
      },
    },

    shortstay: {
      code: "SS",
      coding: <Coding>{
        code: "SS",
        display: "short stay",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "SS",
            display: "short stay",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "short stay",
      },
    },

    virtual: {
      code: "VR",
      coding: <Coding>{
        code: "VR",
        display: "virtual",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "VR",
            display: "virtual",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "virtual",
      },
    },
  },

  expansion: <Array<ValueSetExpansionContains>>[
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "AMB",
      display: "ambulatory",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "EMER",
      display: "emergency",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "FLD",
      display: "field",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "HH",
      display: "home health",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "IMP",
      display: "inpatient encounter",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "ACUTE",
      display: "inpatient acute",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "NONAC",
      display: "inpatient non-acute",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "OBSENC",
      display: "observation encounter",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "PRENC",
      display: "pre-admission",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "SS",
      display: "short stay",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "VR",
      display: "virtual",
    },
  ],
} as const;

/**
 * Identifies types of dispensing events
 *
 * http://terminology.hl7.org/ValueSet/v3-ActPharmacySupplyType
 */
export const ActPharmacySupplyType: TypedValueSet<{
  DailyFill: "DF";
  EmergencySupply: "EM";
  ScriptOwing: "SO";
  FirstFill: "FF";
  feeforservice: "FFS";
  firstfillpartfillpartialstrength: "FFPS";
  firstfillcompletepartialstrength: "FFCS";
  trialfillpartialstrength: "TFS";
  FirstFillComplete: "FFC";
  FirstFillPartFill: "FFP";
  firstfillpartialstrength: "FFSS";
  TrialFill: "TF";
  Floorstock: "FS";
  ManufacturerSample: "MS";
  Refill: "RF";
  UnitDose: "UD";
  RefillComplete: "RFC";
  refillcompletepartialstrength: "RFCS";
  RefillFirstfillthisfacility: "RFF";
  refillpartialstrengthfirstfillthisfacility: "RFFS";
  RefillPartFill: "RFP";
  refillpartfillpartialstrength: "RFPS";
  refillpartialstrength: "RFS";
  TrialBalance: "TB";
  trialbalancepartialstrength: "TBS";
  unitdoseequivalent: "UDE";
}> = {
  url: "http://terminology.hl7.org/ValueSet/v3-ActPharmacySupplyType",

  values: {
    DailyFill: {
      code: "DF",
      coding: <Coding>{
        code: "DF",
        display: "Daily Fill",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "DF",
            display: "Daily Fill",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Daily Fill",
      },
    },

    EmergencySupply: {
      code: "EM",
      coding: <Coding>{
        code: "EM",
        display: "Emergency Supply",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "EM",
            display: "Emergency Supply",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Emergency Supply",
      },
    },

    ScriptOwing: {
      code: "SO",
      coding: <Coding>{
        code: "SO",
        display: "Script Owing",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "SO",
            display: "Script Owing",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Script Owing",
      },
    },

    FirstFill: {
      code: "FF",
      coding: <Coding>{
        code: "FF",
        display: "First Fill",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "FF",
            display: "First Fill",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "First Fill",
      },
    },

    feeforservice: {
      code: "FFS",
      coding: <Coding>{
        code: "FFS",
        display: "fee for service",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "FFS",
            display: "fee for service",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "fee for service",
      },
    },

    firstfillpartfillpartialstrength: {
      code: "FFPS",
      coding: <Coding>{
        code: "FFPS",
        display: "first fill, part fill, partial strength",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "FFPS",
            display: "first fill, part fill, partial strength",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "first fill, part fill, partial strength",
      },
    },

    firstfillcompletepartialstrength: {
      code: "FFCS",
      coding: <Coding>{
        code: "FFCS",
        display: "first fill complete, partial strength",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "FFCS",
            display: "first fill complete, partial strength",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "first fill complete, partial strength",
      },
    },

    trialfillpartialstrength: {
      code: "TFS",
      coding: <Coding>{
        code: "TFS",
        display: "trial fill partial strength",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "TFS",
            display: "trial fill partial strength",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "trial fill partial strength",
      },
    },

    FirstFillComplete: {
      code: "FFC",
      coding: <Coding>{
        code: "FFC",
        display: "First Fill - Complete",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "FFC",
            display: "First Fill - Complete",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "First Fill - Complete",
      },
    },

    FirstFillPartFill: {
      code: "FFP",
      coding: <Coding>{
        code: "FFP",
        display: "First Fill - Part Fill",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "FFP",
            display: "First Fill - Part Fill",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "First Fill - Part Fill",
      },
    },

    firstfillpartialstrength: {
      code: "FFSS",
      coding: <Coding>{
        code: "FFSS",
        display: "first fill, partial strength",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "FFSS",
            display: "first fill, partial strength",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "first fill, partial strength",
      },
    },

    TrialFill: {
      code: "TF",
      coding: <Coding>{
        code: "TF",
        display: "Trial Fill",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "TF",
            display: "Trial Fill",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Trial Fill",
      },
    },

    Floorstock: {
      code: "FS",
      coding: <Coding>{
        code: "FS",
        display: "Floor stock",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "FS",
            display: "Floor stock",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Floor stock",
      },
    },

    ManufacturerSample: {
      code: "MS",
      coding: <Coding>{
        code: "MS",
        display: "Manufacturer Sample",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "MS",
            display: "Manufacturer Sample",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Manufacturer Sample",
      },
    },

    Refill: {
      code: "RF",
      coding: <Coding>{
        code: "RF",
        display: "Refill",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "RF",
            display: "Refill",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Refill",
      },
    },

    UnitDose: {
      code: "UD",
      coding: <Coding>{
        code: "UD",
        display: "Unit Dose",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "UD",
            display: "Unit Dose",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Unit Dose",
      },
    },

    RefillComplete: {
      code: "RFC",
      coding: <Coding>{
        code: "RFC",
        display: "Refill - Complete",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "RFC",
            display: "Refill - Complete",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Refill - Complete",
      },
    },

    refillcompletepartialstrength: {
      code: "RFCS",
      coding: <Coding>{
        code: "RFCS",
        display: "refill complete partial strength",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "RFCS",
            display: "refill complete partial strength",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "refill complete partial strength",
      },
    },

    RefillFirstfillthisfacility: {
      code: "RFF",
      coding: <Coding>{
        code: "RFF",
        display: "Refill (First fill this facility)",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "RFF",
            display: "Refill (First fill this facility)",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Refill (First fill this facility)",
      },
    },

    refillpartialstrengthfirstfillthisfacility: {
      code: "RFFS",
      coding: <Coding>{
        code: "RFFS",
        display: "refill partial strength (first fill this facility)",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "RFFS",
            display: "refill partial strength (first fill this facility)",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "refill partial strength (first fill this facility)",
      },
    },

    RefillPartFill: {
      code: "RFP",
      coding: <Coding>{
        code: "RFP",
        display: "Refill - Part Fill",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "RFP",
            display: "Refill - Part Fill",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Refill - Part Fill",
      },
    },

    refillpartfillpartialstrength: {
      code: "RFPS",
      coding: <Coding>{
        code: "RFPS",
        display: "refill part fill partial strength",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "RFPS",
            display: "refill part fill partial strength",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "refill part fill partial strength",
      },
    },

    refillpartialstrength: {
      code: "RFS",
      coding: <Coding>{
        code: "RFS",
        display: "refill partial strength",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "RFS",
            display: "refill partial strength",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "refill partial strength",
      },
    },

    TrialBalance: {
      code: "TB",
      coding: <Coding>{
        code: "TB",
        display: "Trial Balance",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "TB",
            display: "Trial Balance",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "Trial Balance",
      },
    },

    trialbalancepartialstrength: {
      code: "TBS",
      coding: <Coding>{
        code: "TBS",
        display: "trial balance partial strength",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "TBS",
            display: "trial balance partial strength",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "trial balance partial strength",
      },
    },

    unitdoseequivalent: {
      code: "UDE",
      coding: <Coding>{
        code: "UDE",
        display: "unit dose equivalent",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "UDE",
            display: "unit dose equivalent",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          },
        ],
        text: "unit dose equivalent",
      },
    },
  },

  expansion: <Array<ValueSetExpansionContains>>[
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "DF",
      display: "Daily Fill",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "EM",
      display: "Emergency Supply",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "SO",
      display: "Script Owing",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "FF",
      display: "First Fill",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      inactive: true,
      code: "FFS",
      display: "fee for service",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "FFPS",
      display: "first fill, part fill, partial strength",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "FFCS",
      display: "first fill complete, partial strength",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "TFS",
      display: "trial fill partial strength",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "FFC",
      display: "First Fill - Complete",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "FFP",
      display: "First Fill - Part Fill",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "FFSS",
      display: "first fill, partial strength",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "TF",
      display: "Trial Fill",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "FS",
      display: "Floor stock",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "MS",
      display: "Manufacturer Sample",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "RF",
      display: "Refill",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "UD",
      display: "Unit Dose",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "RFC",
      display: "Refill - Complete",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "RFCS",
      display: "refill complete partial strength",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "RFF",
      display: "Refill (First fill this facility)",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "RFFS",
      display: "refill partial strength (first fill this facility)",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "RFP",
      display: "Refill - Part Fill",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "RFPS",
      display: "refill part fill partial strength",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "RFS",
      display: "refill partial strength",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "TB",
      display: "Trial Balance",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "TBS",
      display: "trial balance partial strength",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "UDE",
      display: "unit dose equivalent",
    },
  ],
} as const;

/**
 * A code or set of codes (e.g., for routine, emergency,) specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen. *Discussion:* This attribute is used in orders to indicate the ordered priority, and in event documentation it indicates the actual priority used to perform the act. In definition mood it indicates the available priorities.
 *
 * http://terminology.hl7.org/ValueSet/v3-ActPriority
 */
export const ActPriority: TypedValueSet<{
  ASAP: "A";
  callbackresults: "CR";
  elective: "EL";
  emergency: "EM";
  preop: "P";
  asneeded: "PRN";
  routine: "R";
  rushreporting: "RR";
  stat: "S";
  timingcritical: "T";
  useasdirected: "UD";
  urgent: "UR";
  callbackforscheduling: "CS";
  callbackplacerforscheduling: "CSP";
  contactrecipientforscheduling: "CSR";
}> = {
  url: "http://terminology.hl7.org/ValueSet/v3-ActPriority",

  values: {
    ASAP: {
      code: "A",
      coding: <Coding>{
        code: "A",
        display: "ASAP",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "A",
            display: "ASAP",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "ASAP",
      },
    },

    callbackresults: {
      code: "CR",
      coding: <Coding>{
        code: "CR",
        display: "callback results",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "CR",
            display: "callback results",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "callback results",
      },
    },

    elective: {
      code: "EL",
      coding: <Coding>{
        code: "EL",
        display: "elective",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "EL",
            display: "elective",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "elective",
      },
    },

    emergency: {
      code: "EM",
      coding: <Coding>{
        code: "EM",
        display: "emergency",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "EM",
            display: "emergency",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "emergency",
      },
    },

    preop: {
      code: "P",
      coding: <Coding>{
        code: "P",
        display: "preop",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "P",
            display: "preop",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "preop",
      },
    },

    asneeded: {
      code: "PRN",
      coding: <Coding>{
        code: "PRN",
        display: "as needed",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "PRN",
            display: "as needed",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "as needed",
      },
    },

    routine: {
      code: "R",
      coding: <Coding>{
        code: "R",
        display: "routine",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "R",
            display: "routine",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "routine",
      },
    },

    rushreporting: {
      code: "RR",
      coding: <Coding>{
        code: "RR",
        display: "rush reporting",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "RR",
            display: "rush reporting",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "rush reporting",
      },
    },

    stat: {
      code: "S",
      coding: <Coding>{
        code: "S",
        display: "stat",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "S",
            display: "stat",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "stat",
      },
    },

    timingcritical: {
      code: "T",
      coding: <Coding>{
        code: "T",
        display: "timing critical",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "T",
            display: "timing critical",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "timing critical",
      },
    },

    useasdirected: {
      code: "UD",
      coding: <Coding>{
        code: "UD",
        display: "use as directed",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "UD",
            display: "use as directed",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "use as directed",
      },
    },

    urgent: {
      code: "UR",
      coding: <Coding>{
        code: "UR",
        display: "urgent",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "UR",
            display: "urgent",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "urgent",
      },
    },

    callbackforscheduling: {
      code: "CS",
      coding: <Coding>{
        code: "CS",
        display: "callback for scheduling",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "CS",
            display: "callback for scheduling",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "callback for scheduling",
      },
    },

    callbackplacerforscheduling: {
      code: "CSP",
      coding: <Coding>{
        code: "CSP",
        display: "callback placer for scheduling",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "CSP",
            display: "callback placer for scheduling",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "callback placer for scheduling",
      },
    },

    contactrecipientforscheduling: {
      code: "CSR",
      coding: <Coding>{
        code: "CSR",
        display: "contact recipient for scheduling",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "CSR",
            display: "contact recipient for scheduling",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
          },
        ],
        text: "contact recipient for scheduling",
      },
    },
  },

  expansion: <Array<ValueSetExpansionContains>>[
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "A",
      display: "ASAP",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "CR",
      display: "callback results",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "EL",
      display: "elective",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "EM",
      display: "emergency",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "P",
      display: "preop",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "PRN",
      display: "as needed",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "R",
      display: "routine",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "RR",
      display: "rush reporting",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "S",
      display: "stat",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "T",
      display: "timing critical",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "UD",
      display: "use as directed",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "UR",
      display: "urgent",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "CS",
      display: "callback for scheduling",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "CSP",
      display: "callback placer for scheduling",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority",
      code: "CSR",
      display: "contact recipient for scheduling",
    },
  ],
} as const;

/**
 * ***No description***
 *
 * http://terminology.hl7.org/ValueSet/v3-ActSubstanceAdminSubstitutionCode
 */
export const ActSubstanceAdminSubstitutionCode: TypedValueSet<{
  equivalent: "E";
  equivalentcomposition: "EC";
  brandcomposition: "BC";
  genericcomposition: "G";
  therapeuticalternative: "TE";
  therapeuticbrand: "TB";
  therapeuticgeneric: "TG";
  formulary: "F";
  none: "N";
}> = {
  url: "http://terminology.hl7.org/ValueSet/v3-ActSubstanceAdminSubstitutionCode",

  values: {
    equivalent: {
      code: "E",
      coding: <Coding>{
        code: "E",
        display: "equivalent",
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "E",
            display: "equivalent",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          },
        ],
        text: "equivalent",
      },
    },

    equivalentcomposition: {
      code: "EC",
      coding: <Coding>{
        code: "EC",
        display: "equivalent composition",
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "EC",
            display: "equivalent composition",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          },
        ],
        text: "equivalent composition",
      },
    },

    brandcomposition: {
      code: "BC",
      coding: <Coding>{
        code: "BC",
        display: "brand composition",
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "BC",
            display: "brand composition",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          },
        ],
        text: "brand composition",
      },
    },

    genericcomposition: {
      code: "G",
      coding: <Coding>{
        code: "G",
        display: "generic composition",
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "G",
            display: "generic composition",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          },
        ],
        text: "generic composition",
      },
    },

    therapeuticalternative: {
      code: "TE",
      coding: <Coding>{
        code: "TE",
        display: "therapeutic alternative",
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "TE",
            display: "therapeutic alternative",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          },
        ],
        text: "therapeutic alternative",
      },
    },

    therapeuticbrand: {
      code: "TB",
      coding: <Coding>{
        code: "TB",
        display: "therapeutic brand",
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "TB",
            display: "therapeutic brand",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          },
        ],
        text: "therapeutic brand",
      },
    },

    therapeuticgeneric: {
      code: "TG",
      coding: <Coding>{
        code: "TG",
        display: "therapeutic generic",
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "TG",
            display: "therapeutic generic",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          },
        ],
        text: "therapeutic generic",
      },
    },

    formulary: {
      code: "F",
      coding: <Coding>{
        code: "F",
        display: "formulary",
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "F",
            display: "formulary",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          },
        ],
        text: "formulary",
      },
    },

    none: {
      code: "N",
      coding: <Coding>{
        code: "N",
        display: "none",
        system:
          "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "N",
            display: "none",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
          },
        ],
        text: "none",
      },
    },
  },

  expansion: <Array<ValueSetExpansionContains>>[
    {
      system:
        "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      code: "E",
      display: "equivalent",
    },
    {
      system:
        "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      code: "EC",
      display: "equivalent composition",
    },
    {
      system:
        "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      code: "BC",
      display: "brand composition",
    },
    {
      system:
        "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      code: "G",
      display: "generic composition",
    },
    {
      system:
        "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      code: "TE",
      display: "therapeutic alternative",
    },
    {
      system:
        "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      code: "TB",
      display: "therapeutic brand",
    },
    {
      system:
        "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      code: "TG",
      display: "therapeutic generic",
    },
    {
      system:
        "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      code: "F",
      display: "formulary",
    },
    {
      system:
        "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
      code: "N",
      display: "none",
    },
  ],
} as const;

/**
 * ***No description***
 *
 * http://terminology.hl7.org/ValueSet/v3-SubstanceAdminSubstitutionReason
 */
export const SubstanceAdminSubstitutionReason: TypedValueSet<{
  continuingtherapy: "CT";
  formularypolicy: "FP";
  outofstock: "OS";
  regulatoryrequirement: "RR";
}> = {
  url: "http://terminology.hl7.org/ValueSet/v3-SubstanceAdminSubstitutionReason",

  values: {
    continuingtherapy: {
      code: "CT",
      coding: <Coding>{
        code: "CT",
        display: "continuing therapy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "CT",
            display: "continuing therapy",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          },
        ],
        text: "continuing therapy",
      },
    },

    formularypolicy: {
      code: "FP",
      coding: <Coding>{
        code: "FP",
        display: "formulary policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "FP",
            display: "formulary policy",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          },
        ],
        text: "formulary policy",
      },
    },

    outofstock: {
      code: "OS",
      coding: <Coding>{
        code: "OS",
        display: "out of stock",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "OS",
            display: "out of stock",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          },
        ],
        text: "out of stock",
      },
    },

    regulatoryrequirement: {
      code: "RR",
      coding: <Coding>{
        code: "RR",
        display: "regulatory requirement",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
      },
      codeableConcept: <CodeableConcept>{
        coding: [
          {
            code: "RR",
            display: "regulatory requirement",
            system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          },
        ],
        text: "regulatory requirement",
      },
    },
  },

  expansion: <Array<ValueSetExpansionContains>>[
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
      code: "CT",
      display: "continuing therapy",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
      code: "FP",
      display: "formulary policy",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
      code: "OS",
      display: "out of stock",
    },
    {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
      code: "RR",
      display: "regulatory requirement",
    },
  ],
} as const;
