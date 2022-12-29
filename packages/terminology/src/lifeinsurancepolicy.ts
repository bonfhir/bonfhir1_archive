/**
 * **Definition:** A policy under which the insurer agrees to pay a sum of money upon the occurrence of the covered partys death. In return, the policyholder agrees to pay a stipulated amount called a premium at regular intervals. Life insurance indemnifies the beneficiary for the loss of the insurable interest that a beneficiary has in the life of a covered party. For persons related by blood, a substantial interest established through love and affection, and for all other persons, a lawful and substantial economic interest in having the life of the insured continue. An insurable interest is required when purchasing life insurance on another person. Specific exclusions are often written into the contract to limit the liability of the insurer; for example claims resulting from suicide or relating to war, riot and civil commotion.

*Discussion:*A life insurance policy may be used by the covered party as a source of health care coverage in the case of a viatical settlement, which is the sale of a life insurance policy by the policy owner, before the policy matures. Such a sale, at a price discounted from the face amount of the policy but usually in excess of the premiums paid or current cash surrender value, provides the seller an immediate cash settlement. Generally, viatical settlements involve insured individuals with a life expectancy of less than two years. In countries without state-subsidized healthcare and high healthcare costs (e.g. United States), this is a practical way to pay extremely high health insurance premiums that severely ill people face. Some people are also familiar with life settlements, which are similar transactions but involve insureds with longer life expectancies (two to fifteen years).
 * http://terminology.hl7.org/ValueSet/v3-LifeInsurancePolicy
 */
export const LifeInsurancePolicyCode = {
  /**
   * life insurance policy
   */
  lifeinsurancepolicy: "LIFE",

  /**
   * annuity policy
   */
  annuitypolicy: "ANNU",

  /**
   * term life insurance policy
   */
  termlifeinsurancepolicy: "TLIFE",

  /**
   * universal life insurance policy
   */
  universallifeinsurancepolicy: "ULIFE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LifeInsurancePolicyCode =
  typeof LifeInsurancePolicyCode[keyof typeof LifeInsurancePolicyCode];
