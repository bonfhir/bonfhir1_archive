/**
 * This relationship indicates the source Role is available to the target Role as a backup. An entity in a backup role will be available as a substitute or replacement in the event that the entity assigned the role is unavailable. In medical roles where it is critical that the function be performed and there is a possibility that the individual assigned may be ill or otherwise indisposed, another individual is assigned to cover for the individual originally assigned the role. A backup may be required to be identified, but unless the backup is actually used, he/she would not assume the assigned entity role.
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkIsBackupFor
 */
export const RoleLinkIsBackupForCode = {
  /**
   * is backup for
   */
  isbackupfor: "BACKUP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkIsBackupForCode =
  typeof RoleLinkIsBackupForCode[keyof typeof RoleLinkIsBackupForCode];
