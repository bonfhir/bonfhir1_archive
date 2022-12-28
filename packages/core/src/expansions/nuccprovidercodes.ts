/**
 * In the absence of an all-encompassing Provider Classification System, both X12N and the National Provider System Workgroup from the Centers for Medicare and Medicaid Services (CMS) commenced work on identifying and coding an external provider table that would be able to codify provider type and provider area of specialization for all medical related providers. CMS' intent was to provide a single coding structure to support work on the National Provider System, while X12N needed a single common table for trading partner use. The two projects worked independently to some extent until April 1996 when the lists were coordinated and a single taxonomy was proposed. A sub-group of the X12N TG2 WG 15 was charged with resolving differences in the two proposed taxonomies. Their work resulted in a single taxonomy that both CMS and members of X12N found meaningful, easy to use, and functional for electronic transactions.

The sub-group initially started with the CMS draft taxonomy. This list incorporated all types of providers associated with medical care in various ways. Many of the providers listed, such as technologists or technicians, support or repair equipment/machinery. A number of the providers offer medical services, in concert with others, and do not or cannot bill independently for their portion. The amount of research to validate and classify all providers using the proposed hierarchical structure was enormous. The X12N sub-group focused on medical providers who are licensed practitioners, those who bill for health-related services rendered, and those who appeared on the Medicare CMS Provider Specialty listing. This included providers who were licensed to practice medicine via state licensure agencies. In addition, a very broad definition of "areas of specialization" was used, which included nationally recognized specialties, provider self-designated specialties, areas of practice focus, and any request by any agency or trading partner submitted before the first taxonomy release. This level of detail captured specialty information in categories detailed enough to support those trading credentialing information, yet broad enough to support those wishing to trade directory level specialization information.

In 2001, ANSI ASC X12N asked the NUCC to become the official maintainer of the Health Care Provider Taxonomy List. The NUCC has a formal operating protocol and its membership includes representation from key provider and payer organizations, as well as state and federal agencies, standard development organizations and the National Uniform Billing Committee (NUBC). Criteria for membership includes a national scope and representation of a unique constituency affected by health care electronic commerce, with an emphasis on maintaining a provider/payer balance.
 * http://terminology.hl7.org/ValueSet/v3-NUCCProviderCodes
 */
export const NUCCProviderCodesCode = {
  /**
   * Drama Therapist
   */
  "101200000X": "101200000X",

  /**
   * Counselor
   */
  "101Y00000X": "101Y00000X",

  /**
   * Addiction (Substance Use Disorder) Counselor
   */
  "101YA0400X": "101YA0400X",

  /**
   * Mental Health Counselor
   */
  "101YM0800X": "101YM0800X",

  /**
   * Pastoral Counselor
   */
  "101YP1600X": "101YP1600X",

  /**
   * Professional Counselor
   */
  "101YP2500X": "101YP2500X",

  /**
   * School Counselor
   */
  "101YS0200X": "101YS0200X",

  /**
   * Psychoanalyst
   */
  "102L00000X": "102L00000X",

  /**
   * Poetry Therapist
   */
  "102X00000X": "102X00000X",

  /**
   * Clinical Neuropsychologist
   */
  "103G00000X": "103G00000X",

  /**
   * Deactivated - Clinical Neuropsychologist
   */
  "103GC0700X": "103GC0700X",

  /**
   * Behavioral Analyst
   */
  "103K00000X": "103K00000X",

  /**
   * Psychologist
   */
  "103T00000X": "103T00000X",

  /**
   * Addiction (Substance Use Disorder) Psychologist
   */
  "103TA0400X": "103TA0400X",

  /**
   * Adult Development & Aging Psychologist
   */
  "103TA0700X": "103TA0700X",

  /**
   * Cognitive & Behavioral Psychologist
   */
  "103TB0200X": "103TB0200X",

  /**
   * Clinical Psychologist
   */
  "103TC0700X": "103TC0700X",

  /**
   * Counseling Psychologist
   */
  "103TC1900X": "103TC1900X",

  /**
   * Clinical Child & Adolescent Psychologist
   */
  "103TC2200X": "103TC2200X",

  /**
   * Deactivated - Psychologist
   */
  "103TE1000X": "103TE1000X",

  /**
   * Exercise & Sports Psychologist
   */
  "103TE1100X": "103TE1100X",

  /**
   * Family Psychologist
   */
  "103TF0000X": "103TF0000X",

  /**
   * Forensic Psychologist
   */
  "103TF0200X": "103TF0200X",

  /**
   * Health Psychologist
   */
  "103TH0004X": "103TH0004X",

  /**
   * Health Service Psychologist
   */
  "103TH0100X": "103TH0100X",

  /**
   * Deactivated - Psychologist Men & Masculinity
   */
  "103TM1700X": "103TM1700X",

  /**
   * Intellectual & Developmental Disabilities Psychologist
   */
  "103TM1800X": "103TM1800X",

  /**
   * Prescribing (Medical) Psychologist
   */
  "103TP0016X": "103TP0016X",

  /**
   * Psychoanalysis Psychologist
   */
  "103TP0814X": "103TP0814X",

  /**
   * Deactivated - Psychologist Psychotherapy
   */
  "103TP2700X": "103TP2700X",

  /**
   * Group Psychotherapy Psychologist
   */
  "103TP2701X": "103TP2701X",

  /**
   * Rehabilitation Psychologist
   */
  "103TR0400X": "103TR0400X",

  /**
   * School Psychologist
   */
  "103TS0200X": "103TS0200X",

  /**
   * Deactivated - Psychotherapy Women
   */
  "103TW0100X": "103TW0100X",

  /**
   * Social Worker
   */
  "104100000X": "104100000X",

  /**
   * Clinical Social Worker
   */
  "1041C0700X": "1041C0700X",

  /**
   * School Social Worker
   */
  "1041S0200X": "1041S0200X",

  /**
   * Assistant Behavior Analyst
   */
  "106E00000X": "106E00000X",

  /**
   * Marriage & Family Therapist
   */
  "106H00000X": "106H00000X",

  /**
   * Behavior Technician
   */
  "106S00000X": "106S00000X",

  /**
   * Chiropractor
   */
  "111N00000X": "111N00000X",

  /**
   * Independent Medical Examiner Chiropractor
   */
  "111NI0013X": "111NI0013X",

  /**
   * Internist Chiropractor
   */
  "111NI0900X": "111NI0900X",

  /**
   * Neurology Chiropractor
   */
  "111NN0400X": "111NN0400X",

  /**
   * Nutrition Chiropractor
   */
  "111NN1001X": "111NN1001X",

  /**
   * Pediatric Chiropractor
   */
  "111NP0017X": "111NP0017X",

  /**
   * Radiology Chiropractor
   */
  "111NR0200X": "111NR0200X",

  /**
   * Rehabilitation Chiropractor
   */
  "111NR0400X": "111NR0400X",

  /**
   * Sports Physician Chiropractor
   */
  "111NS0005X": "111NS0005X",

  /**
   * Thermography Chiropractor
   */
  "111NT0100X": "111NT0100X",

  /**
   * Occupational Health Chiropractor
   */
  "111NX0100X": "111NX0100X",

  /**
   * Orthopedic Chiropractor
   */
  "111NX0800X": "111NX0800X",

  /**
   * Dentist
   */
  "122300000X": "122300000X",

  /**
   * Public Health Dentist
   */
  "1223D0001X": "1223D0001X",

  /**
   * Dentist Anesthesiologist
   */
  "1223D0004X": "1223D0004X",

  /**
   * Endodontist
   */
  "1223E0200X": "1223E0200X",

  /**
   * General Practice Dentistry
   */
  "1223G0001X": "1223G0001X",

  /**
   * Oral and Maxillofacial Pathology Dentist
   */
  "1223P0106X": "1223P0106X",

  /**
   * Pediatric Dentist
   */
  "1223P0221X": "1223P0221X",

  /**
   * Periodontist
   */
  "1223P0300X": "1223P0300X",

  /**
   * Prosthodontist
   */
  "1223P0700X": "1223P0700X",

  /**
   * Oral and Maxillofacial Surgery (Dentist)
   */
  "1223S0112X": "1223S0112X",

  /**
   * Oral and Maxillofacial Radiology Dentist
   */
  "1223X0008X": "1223X0008X",

  /**
   * Orthodontics and Dentofacial Orthopedic Dentist
   */
  "1223X0400X": "1223X0400X",

  /**
   * Orofacial Pain Dentist
   */
  "1223X2210X": "1223X2210X",

  /**
   * Denturist
   */
  "122400000X": "122400000X",

  /**
   * Dental Hygienist
   */
  "124Q00000X": "124Q00000X",

  /**
   * Dental Therapist
   */
  "125J00000X": "125J00000X",

  /**
   * Advanced Practice Dental Therapist
   */
  "125K00000X": "125K00000X",

  /**
   * Oral Medicinist
   */
  "125Q00000X": "125Q00000X",

  /**
   * Dental Assistant
   */
  "126800000X": "126800000X",

  /**
   * Dental Laboratory Technician
   */
  "126900000X": "126900000X",

  /**
   * Dietary Manager
   */
  "132700000X": "132700000X",

  /**
   * Nutritionist
   */
  "133N00000X": "133N00000X",

  /**
   * Nutrition Education Nutritionist
   */
  "133NN1002X": "133NN1002X",

  /**
   * Registered Dietitian
   */
  "133V00000X": "133V00000X",

  /**
   * Pediatric Nutrition Registered Dietitian
   */
  "133VN1004X": "133VN1004X",

  /**
   * Renal Nutrition Registered Dietitian
   */
  "133VN1005X": "133VN1005X",

  /**
   * Metabolic Nutrition Registered Dietitian
   */
  "133VN1006X": "133VN1006X",

  /**
   * Gerontological Nutrition Registered Dietitian
   */
  "133VN1101X": "133VN1101X",

  /**
   * Obesity and Weight Management Nutrition Registered Dietitian
   */
  "133VN1201X": "133VN1201X",

  /**
   * Oncology Nutrition Registered Dietitian
   */
  "133VN1301X": "133VN1301X",

  /**
   * Pediatric Critical Care Nutrition Registered Dietitian
   */
  "133VN1401X": "133VN1401X",

  /**
   * Sports Dietetics Nutrition Registered Dietitian
   */
  "133VN1501X": "133VN1501X",

  /**
   * Registered Dietetic Technician
   */
  "136A00000X": "136A00000X",

  /**
   * Personal Emergency Response Attendant
   */
  "146D00000X": "146D00000X",

  /**
   * Paramedic
   */
  "146L00000X": "146L00000X",

  /**
   * Intermediate Emergency Medical Technician
   */
  "146M00000X": "146M00000X",

  /**
   * Basic Emergency Medical Technician
   */
  "146N00000X": "146N00000X",

  /**
   * Optometrist
   */
  "152W00000X": "152W00000X",

  /**
   * Corneal and Contact Management Optometrist
   */
  "152WC0802X": "152WC0802X",

  /**
   * Low Vision Rehabilitation Optometrist
   */
  "152WL0500X": "152WL0500X",

  /**
   * Pediatric Optometrist
   */
  "152WP0200X": "152WP0200X",

  /**
   * Sports Vision Optometrist
   */
  "152WS0006X": "152WS0006X",

  /**
   * Vision Therapy Optometrist
   */
  "152WV0400X": "152WV0400X",

  /**
   * Occupational Vision Optometrist
   */
  "152WX0102X": "152WX0102X",

  /**
   * Technician/Technologist
   */
  "156F00000X": "156F00000X",

  /**
   * Contact Lens Technician/Technologist
   */
  "156FC0800X": "156FC0800X",

  /**
   * Contact Lens Fitter
   */
  "156FC0801X": "156FC0801X",

  /**
   * Ophthalmic Technician/Technologist
   */
  "156FX1100X": "156FX1100X",

  /**
   * Ophthalmic Assistant
   */
  "156FX1101X": "156FX1101X",

  /**
   * Optometric Assistant Technician
   */
  "156FX1201X": "156FX1201X",

  /**
   * Optometric Technician
   */
  "156FX1202X": "156FX1202X",

  /**
   * Ocularist
   */
  "156FX1700X": "156FX1700X",

  /**
   * Optician
   */
  "156FX1800X": "156FX1800X",

  /**
   * Orthoptist
   */
  "156FX1900X": "156FX1900X",

  /**
   * Registered Nurse
   */
  "163W00000X": "163W00000X",

  /**
   * Addiction (Substance Use Disorder) Registered Nurse
   */
  "163WA0400X": "163WA0400X",

  /**
   * Administrator Registered Nurse
   */
  "163WA2000X": "163WA2000X",

  /**
   * Critical Care Medicine Registered Nurse
   */
  "163WC0200X": "163WC0200X",

  /**
   * Case Management Registered Nurse
   */
  "163WC0400X": "163WC0400X",

  /**
   * College Health Registered Nurse
   */
  "163WC1400X": "163WC1400X",

  /**
   * Community Health Registered Nurse
   */
  "163WC1500X": "163WC1500X",

  /**
   * Continuing Education/Staff Development Registered Nurse
   */
  "163WC1600X": "163WC1600X",

  /**
   * Continence Care Registered Nurse
   */
  "163WC2100X": "163WC2100X",

  /**
   * Cardiac Rehabilitation Registered Nurse
   */
  "163WC3500X": "163WC3500X",

  /**
   * Diabetes Educator Registered Nurse
   */
  "163WD0400X": "163WD0400X",

  /**
   * Peritoneal Dialysis Registered Nurse
   */
  "163WD1100X": "163WD1100X",

  /**
   * Emergency Registered Nurse
   */
  "163WE0003X": "163WE0003X",

  /**
   * Enterostomal Therapy Registered Nurse
   */
  "163WE0900X": "163WE0900X",

  /**
   * Flight Registered Nurse
   */
  "163WF0300X": "163WF0300X",

  /**
   * General Practice Registered Nurse
   */
  "163WG0000X": "163WG0000X",

  /**
   * Gastroenterology Registered Nurse
   */
  "163WG0100X": "163WG0100X",

  /**
   * Gerontology Registered Nurse
   */
  "163WG0600X": "163WG0600X",

  /**
   * Home Health Registered Nurse
   */
  "163WH0200X": "163WH0200X",

  /**
   * Hemodialysis Registered Nurse
   */
  "163WH0500X": "163WH0500X",

  /**
   * Hospice Registered Nurse
   */
  "163WH1000X": "163WH1000X",

  /**
   * Infusion Therapy Registered Nurse
   */
  "163WI0500X": "163WI0500X",

  /**
   * Infection Control Registered Nurse
   */
  "163WI0600X": "163WI0600X",

  /**
   * Lactation Consultant (Registered Nurse)
   */
  "163WL0100X": "163WL0100X",

  /**
   * Maternal Newborn Registered Nurse
   */
  "163WM0102X": "163WM0102X",

  /**
   * Medical-Surgical Registered Nurse
   */
  "163WM0705X": "163WM0705X",

  /**
   * Nurse Massage Therapist (NMT)
   */
  "163WM1400X": "163WM1400X",

  /**
   * Neonatal Intensive Care Registered Nurse
   */
  "163WN0002X": "163WN0002X",

  /**
   * Low-Risk Neonatal Registered Nurse
   */
  "163WN0003X": "163WN0003X",

  /**
   * Nephrology Registered Nurse
   */
  "163WN0300X": "163WN0300X",

  /**
   * Neuroscience Registered Nurse
   */
  "163WN0800X": "163WN0800X",

  /**
   * Nutrition Support Registered Nurse
   */
  "163WN1003X": "163WN1003X",

  /**
   * Pain Management Registered Nurse
   */
  "163WP0000X": "163WP0000X",

  /**
   * Pediatric Registered Nurse
   */
  "163WP0200X": "163WP0200X",

  /**
   * Pediatric Oncology Registered Nurse
   */
  "163WP0218X": "163WP0218X",

  /**
   * Child & Adolescent Psychiatric/Mental Health Registered Nurse
   */
  "163WP0807X": "163WP0807X",

  /**
   * Psychiatric/Mental Health Registered Nurse
   */
  "163WP0808X": "163WP0808X",

  /**
   * Adult Psychiatric/Mental Health Registered Nurse
   */
  "163WP0809X": "163WP0809X",

  /**
   * Perinatal Registered Nurse
   */
  "163WP1700X": "163WP1700X",

  /**
   * Ambulatory Care Registered Nurse
   */
  "163WP2201X": "163WP2201X",

  /**
   * Registered Nurse First Assistant
   */
  "163WR0006X": "163WR0006X",

  /**
   * Rehabilitation Registered Nurse
   */
  "163WR0400X": "163WR0400X",

  /**
   * Reproductive Endocrinology/Infertility Registered Nurse
   */
  "163WR1000X": "163WR1000X",

  /**
   * Plastic Surgery Registered Nurse
   */
  "163WS0121X": "163WS0121X",

  /**
   * School Registered Nurse
   */
  "163WS0200X": "163WS0200X",

  /**
   * Urology Registered Nurse
   */
  "163WU0100X": "163WU0100X",

  /**
   * Wound Care Registered Nurse
   */
  "163WW0000X": "163WW0000X",

  /**
   * Ambulatory Women's Health Care Registered Nurse
   */
  "163WW0101X": "163WW0101X",

  /**
   * High-Risk Obstetric Registered Nurse
   */
  "163WX0002X": "163WX0002X",

  /**
   * Inpatient Obstetric Registered Nurse
   */
  "163WX0003X": "163WX0003X",

  /**
   * Occupational Health Registered Nurse
   */
  "163WX0106X": "163WX0106X",

  /**
   * Oncology Registered Nurse
   */
  "163WX0200X": "163WX0200X",

  /**
   * Otorhinolaryngology & Head-Neck Registered Nurse
   */
  "163WX0601X": "163WX0601X",

  /**
   * Orthopedic Registered Nurse
   */
  "163WX0800X": "163WX0800X",

  /**
   * Ophthalmic Registered Nurse
   */
  "163WX1100X": "163WX1100X",

  /**
   * Ostomy Care Registered Nurse
   */
  "163WX1500X": "163WX1500X",

  /**
   * Licensed Practical Nurse
   */
  "164W00000X": "164W00000X",

  /**
   * Licensed Vocational Nurse
   */
  "164X00000X": "164X00000X",

  /**
   * Licensed Psychiatric Technician
   */
  "167G00000X": "167G00000X",

  /**
   * Ph.D. Medical Genetics
   */
  "170100000X": "170100000X",

  /**
   * Genetic Counselor (M.S.)
   */
  "170300000X": "170300000X",

  /**
   * Military Health Care Provider
   */
  "171000000X": "171000000X",

  /**
   * Independent Duty Corpsman
   */
  "1710I1002X": "1710I1002X",

  /**
   * Independent Duty Medical Technicians
   */
  "1710I1003X": "1710I1003X",

  /**
   * Acupuncturist
   */
  "171100000X": "171100000X",

  /**
   * Health & Wellness Coach
   */
  "171400000X": "171400000X",

  /**
   * Case Manager/Care Coordinator
   */
  "171M00000X": "171M00000X",

  /**
   * Interpreter
   */
  "171R00000X": "171R00000X",

  /**
   * Contractor
   */
  "171W00000X": "171W00000X",

  /**
   * Home Modifications Contractor
   */
  "171WH0202X": "171WH0202X",

  /**
   * Vehicle Modifications Contractor
   */
  "171WV0202X": "171WV0202X",

  /**
   * Driver
   */
  "172A00000X": "172A00000X",

  /**
   * Mechanotherapist
   */
  "172M00000X": "172M00000X",

  /**
   * Naprapath
   */
  "172P00000X": "172P00000X",

  /**
   * Community Health Worker
   */
  "172V00000X": "172V00000X",

  /**
   * Legal Medicine
   */
  "173000000X": "173000000X",

  /**
   * Reflexologist
   */
  "173C00000X": "173C00000X",

  /**
   * Sleep Specialist (PhD)
   */
  "173F00000X": "173F00000X",

  /**
   * Meals Provider
   */
  "174200000X": "174200000X",

  /**
   * Specialist
   */
  "174400000X": "174400000X",

  /**
   * Graphics Designer
   */
  "1744G0900X": "1744G0900X",

  /**
   * Prosthetics Case Management
   */
  "1744P3200X": "1744P3200X",

  /**
   * Research Study Specialist
   */
  "1744R1102X": "1744R1102X",

  /**
   * Research Study Abstracter/Coder
   */
  "1744R1103X": "1744R1103X",

  /**
   * Health Educator
   */
  "174H00000X": "174H00000X",

  /**
   * Veterinarian
   */
  "174M00000X": "174M00000X",

  /**
   * Medical Research Veterinarian
   */
  "174MM1900X": "174MM1900X",

  /**
   * Lactation Consultant (Non-RN)
   */
  "174N00000X": "174N00000X",

  /**
   * Clinical Ethicist
   */
  "174V00000X": "174V00000X",

  /**
   * Naturopath
   */
  "175F00000X": "175F00000X",

  /**
   * Homeopath
   */
  "175L00000X": "175L00000X",

  /**
   * Lay Midwife
   */
  "175M00000X": "175M00000X",

  /**
   * Peer Specialist
   */
  "175T00000X": "175T00000X",

  /**
   * Midwife
   */
  "176B00000X": "176B00000X",

  /**
   * Funeral Director
   */
  "176P00000X": "176P00000X",

  /**
   * Lodging Provider
   */
  "177F00000X": "177F00000X",

  /**
   * Pharmacist
   */
  "183500000X": "183500000X",

  /**
   * Critical Care Pharmacist
   */
  "1835C0205X": "1835C0205X",

  /**
   * Deactivated - Pharmacist
   */
  "1835G0000X": "1835G0000X",

  /**
   * Geriatric Pharmacist
   */
  "1835G0303X": "1835G0303X",

  /**
   * Nuclear Pharmacist
   */
  "1835N0905X": "1835N0905X",

  /**
   * Nutrition Support Pharmacist
   */
  "1835N1003X": "1835N1003X",

  /**
   * Pharmacist Clinician (PhC)/ Clinical Pharmacy Specialist
   */
  "1835P0018X": "1835P0018X",

  /**
   * Pediatric Pharmacist
   */
  "1835P0200X": "1835P0200X",

  /**
   * Pharmacotherapy Pharmacist
   */
  "1835P1200X": "1835P1200X",

  /**
   * Psychiatric Pharmacist
   */
  "1835P1300X": "1835P1300X",

  /**
   * Ambulatory Care Pharmacist
   */
  "1835P2201X": "1835P2201X",

  /**
   * Oncology Pharmacist
   */
  "1835X0200X": "1835X0200X",

  /**
   * Pharmacy Technician
   */
  "183700000X": "183700000X",

  /**
   * Multi-Specialty Group
   */
  "193200000X": "193200000X",

  /**
   * Single Specialty Group
   */
  "193400000X": "193400000X",

  /**
   * Independent Medical Examiner Physician
   */
  "202C00000X": "202C00000X",

  /**
   * Integrative Medicine
   */
  "202D00000X": "202D00000X",

  /**
   * Phlebology Physician
   */
  "202K00000X": "202K00000X",

  /**
   * Sports Medicine (Neuromusculoskeletal Medicine) Physician
   */
  "204C00000X": "204C00000X",

  /**
   * Neuromusculoskeletal Medicine & OMM Physician
   */
  "204D00000X": "204D00000X",

  /**
   * Oral & Maxillofacial Surgery (D.M.D.)
   */
  "204E00000X": "204E00000X",

  /**
   * Transplant Surgery Physician
   */
  "204F00000X": "204F00000X",

  /**
   * Electrodiagnostic Medicine Physician
   */
  "204R00000X": "204R00000X",

  /**
   * Allergy & Immunology Physician
   */
  "207K00000X": "207K00000X",

  /**
   * Allergy Physician
   */
  "207KA0200X": "207KA0200X",

  /**
   * Clinical & Laboratory Immunology (Allergy & Immunology) Physician
   */
  "207KI0005X": "207KI0005X",

  /**
   * Anesthesiology Physician
   */
  "207L00000X": "207L00000X",

  /**
   * Addiction Medicine (Anesthesiology) Physician
   */
  "207LA0401X": "207LA0401X",

  /**
   * Critical Care Medicine (Anesthesiology) Physician
   */
  "207LC0200X": "207LC0200X",

  /**
   * Hospice and Palliative Medicine (Anesthesiology) Physician
   */
  "207LH0002X": "207LH0002X",

  /**
   * Pain Medicine (Anesthesiology) Physician
   */
  "207LP2900X": "207LP2900X",

  /**
   * Pediatric Anesthesiology Physician
   */
  "207LP3000X": "207LP3000X",

  /**
   * Dermatology Physician
   */
  "207N00000X": "207N00000X",

  /**
   * MOHS-Micrographic Surgery Physician
   */
  "207ND0101X": "207ND0101X",

  /**
   * Dermatopathology Physician
   */
  "207ND0900X": "207ND0900X",

  /**
   * Clinical & Laboratory Dermatological Immunology Physician
   */
  "207NI0002X": "207NI0002X",

  /**
   * Pediatric Dermatology Physician
   */
  "207NP0225X": "207NP0225X",

  /**
   * Procedural Dermatology Physician
   */
  "207NS0135X": "207NS0135X",

  /**
   * Emergency Medicine Physician
   */
  "207P00000X": "207P00000X",

  /**
   * Emergency Medical Services (Emergency Medicine) Physician
   */
  "207PE0004X": "207PE0004X",

  /**
   * Undersea and Hyperbaric Medicine (Emergency Medicine) Physician
   */
  "207PE0005X": "207PE0005X",

  /**
   * Hospice and Palliative Medicine (Emergency Medicine) Physician
   */
  "207PH0002X": "207PH0002X",

  /**
   * Pediatric Emergency Medicine (Emergency Medicine) Physician
   */
  "207PP0204X": "207PP0204X",

  /**
   * Sports Medicine (Emergency Medicine) Physician
   */
  "207PS0010X": "207PS0010X",

  /**
   * Medical Toxicology (Emergency Medicine) Physician
   */
  "207PT0002X": "207PT0002X",

  /**
   * Family Medicine Physician
   */
  "207Q00000X": "207Q00000X",

  /**
   * Adolescent Medicine (Family Medicine) Physician
   */
  "207QA0000X": "207QA0000X",

  /**
   * Addiction Medicine (Family Medicine) Physician
   */
  "207QA0401X": "207QA0401X",

  /**
   * Adult Medicine Physician
   */
  "207QA0505X": "207QA0505X",

  /**
   * Obesity Medicine (Family Medicine) Physician
   */
  "207QB0002X": "207QB0002X",

  /**
   * Geriatric Medicine (Family Medicine) Physician
   */
  "207QG0300X": "207QG0300X",

  /**
   * Hospice and Palliative Medicine (Family Medicine) Physician
   */
  "207QH0002X": "207QH0002X",

  /**
   * Sports Medicine (Family Medicine) Physician
   */
  "207QS0010X": "207QS0010X",

  /**
   * Sleep Medicine (Family Medicine) Physician
   */
  "207QS1201X": "207QS1201X",

  /**
   * Internal Medicine Physician
   */
  "207R00000X": "207R00000X",

  /**
   * Adolescent Medicine (Internal Medicine) Physician
   */
  "207RA0000X": "207RA0000X",

  /**
   * Advanced Heart Failure and Transplant Cardiology Physician
   */
  "207RA0001X": "207RA0001X",

  /**
   * Adult Congenital Heart Disease Physician
   */
  "207RA0002X": "207RA0002X",

  /**
   * Allergy & Immunology (Internal Medicine) Physician
   */
  "207RA0201X": "207RA0201X",

  /**
   * Addiction Medicine (Internal Medicine) Physician
   */
  "207RA0401X": "207RA0401X",

  /**
   * Obesity Medicine (Internal Medicine) Physician
   */
  "207RB0002X": "207RB0002X",

  /**
   * Cardiovascular Disease Physician
   */
  "207RC0000X": "207RC0000X",

  /**
   * Clinical Cardiac Electrophysiology Physician
   */
  "207RC0001X": "207RC0001X",

  /**
   * Critical Care Medicine (Internal Medicine) Physician
   */
  "207RC0200X": "207RC0200X",

  /**
   * Endocrinology, Diabetes & Metabolism Physician
   */
  "207RE0101X": "207RE0101X",

  /**
   * Gastroenterology Physician
   */
  "207RG0100X": "207RG0100X",

  /**
   * Geriatric Medicine (Internal Medicine) Physician
   */
  "207RG0300X": "207RG0300X",

  /**
   * Hematology (Internal Medicine) Physician
   */
  "207RH0000X": "207RH0000X",

  /**
   * Hospice and Palliative Medicine (Internal Medicine) Physician
   */
  "207RH0002X": "207RH0002X",

  /**
   * Hematology & Oncology Physician
   */
  "207RH0003X": "207RH0003X",

  /**
   * Hypertension Specialist Physician
   */
  "207RH0005X": "207RH0005X",

  /**
   * Clinical & Laboratory Immunology (Internal Medicine) Physician
   */
  "207RI0001X": "207RI0001X",

  /**
   * Hepatology Physician
   */
  "207RI0008X": "207RI0008X",

  /**
   * Interventional Cardiology Physician
   */
  "207RI0011X": "207RI0011X",

  /**
   * Infectious Disease Physician
   */
  "207RI0200X": "207RI0200X",

  /**
   * Magnetic Resonance Imaging (MRI) Internal Medicine Physician
   */
  "207RM1200X": "207RM1200X",

  /**
   * Nephrology Physician
   */
  "207RN0300X": "207RN0300X",

  /**
   * Pulmonary Disease Physician
   */
  "207RP1001X": "207RP1001X",

  /**
   * Rheumatology Physician
   */
  "207RR0500X": "207RR0500X",

  /**
   * Sports Medicine (Internal Medicine) Physician
   */
  "207RS0010X": "207RS0010X",

  /**
   * Sleep Medicine (Internal Medicine) Physician
   */
  "207RS0012X": "207RS0012X",

  /**
   * Transplant Hepatology Physician
   */
  "207RT0003X": "207RT0003X",

  /**
   * Medical Oncology Physician
   */
  "207RX0202X": "207RX0202X",

  /**
   * Clinical Cytogenetics Physician
   */
  "207SC0300X": "207SC0300X",

  /**
   * Clinical Genetics (M.D.) Physician
   */
  "207SG0201X": "207SG0201X",

  /**
   * Clinical Biochemical Genetics Physician
   */
  "207SG0202X": "207SG0202X",

  /**
   * Clinical Molecular Genetics Physician
   */
  "207SG0203X": "207SG0203X",

  /**
   * Ph.D. Medical Genetics Physician
   */
  "207SG0205X": "207SG0205X",

  /**
   * Molecular Genetic Pathology (Medical Genetics) Physician
   */
  "207SM0001X": "207SM0001X",

  /**
   * Neurological Surgery Physician
   */
  "207T00000X": "207T00000X",

  /**
   * Nuclear Medicine Physician
   */
  "207U00000X": "207U00000X",

  /**
   * Nuclear Cardiology Physician
   */
  "207UN0901X": "207UN0901X",

  /**
   * Nuclear Imaging & Therapy Physician
   */
  "207UN0902X": "207UN0902X",

  /**
   * In Vivo & In Vitro Nuclear Medicine Physician
   */
  "207UN0903X": "207UN0903X",

  /**
   * Obstetrics & Gynecology Physician
   */
  "207V00000X": "207V00000X",

  /**
   * Obesity Medicine (Obstetrics & Gynecology) Physician
   */
  "207VB0002X": "207VB0002X",

  /**
   * Critical Care Medicine (Obstetrics & Gynecology) Physician
   */
  "207VC0200X": "207VC0200X",

  /**
   * Complex Family Planning
   */
  "207VC0300X": "207VC0300X",

  /**
   * Reproductive Endocrinology Physician
   */
  "207VE0102X": "207VE0102X",

  /**
   * Female Pelvic Medicine and Reconstructive Surgery (Obstetrics & Gynecology) Physician
   */
  "207VF0040X": "207VF0040X",

  /**
   * Gynecology Physician
   */
  "207VG0400X": "207VG0400X",

  /**
   * Hospice and Palliative Medicine (Obstetrics & Gynecology) Physician
   */
  "207VH0002X": "207VH0002X",

  /**
   * Maternal & Fetal Medicine Physician
   */
  "207VM0101X": "207VM0101X",

  /**
   * Obstetrics Physician
   */
  "207VX0000X": "207VX0000X",

  /**
   * Gynecologic Oncology Physician
   */
  "207VX0201X": "207VX0201X",

  /**
   * Ophthalmology Physician
   */
  "207W00000X": "207W00000X",

  /**
   * Glaucoma Specialist (Ophthalmology) Physician
   */
  "207WX0009X": "207WX0009X",

  /**
   * Retina Specialist (Ophthalmology) Physician
   */
  "207WX0107X": "207WX0107X",

  /**
   * Uveitis and Ocular Inflammatory Disease (Ophthalmology) Physician
   */
  "207WX0108X": "207WX0108X",

  /**
   * Neuro-ophthalmology Physician
   */
  "207WX0109X": "207WX0109X",

  /**
   * Pediatric Ophthalmology and Strabismus Specialist Physician Physician
   */
  "207WX0110X": "207WX0110X",

  /**
   * Cornea and External Diseases Specialist Physician
   */
  "207WX0120X": "207WX0120X",

  /**
   * Ophthalmic Plastic and Reconstructive Surgery Physician
   */
  "207WX0200X": "207WX0200X",

  /**
   * Orthopaedic Surgery Physician
   */
  "207X00000X": "207X00000X",

  /**
   * Pediatric Orthopaedic Surgery Physician
   */
  "207XP3100X": "207XP3100X",

  /**
   * Orthopaedic Hand Surgery Physician
   */
  "207XS0106X": "207XS0106X",

  /**
   * Adult Reconstructive Orthopaedic Surgery Physician
   */
  "207XS0114X": "207XS0114X",

  /**
   * Orthopaedic Surgery of the Spine Physician
   */
  "207XS0117X": "207XS0117X",

  /**
   * Orthopaedic Foot and Ankle Surgery Physician
   */
  "207XX0004X": "207XX0004X",

  /**
   * Sports Medicine (Orthopaedic Surgery) Physician
   */
  "207XX0005X": "207XX0005X",

  /**
   * Orthopaedic Trauma Physician
   */
  "207XX0801X": "207XX0801X",

  /**
   * Otolaryngology Physician
   */
  "207Y00000X": "207Y00000X",

  /**
   * Pediatric Otolaryngology Physician
   */
  "207YP0228X": "207YP0228X",

  /**
   * Sleep Medicine (Otolaryngology) Physician
   */
  "207YS0012X": "207YS0012X",

  /**
   * Facial Plastic Surgery Physician
   */
  "207YS0123X": "207YS0123X",

  /**
   * Plastic Surgery within the Head & Neck (Otolaryngology) Physician
   */
  "207YX0007X": "207YX0007X",

  /**
   * Otolaryngic Allergy Physician
   */
  "207YX0602X": "207YX0602X",

  /**
   * Otology & Neurotology Physician
   */
  "207YX0901X": "207YX0901X",

  /**
   * Otolaryngology/Facial Plastic Surgery Physician
   */
  "207YX0905X": "207YX0905X",

  /**
   * Blood Banking & Transfusion Medicine Physician
   */
  "207ZB0001X": "207ZB0001X",

  /**
   * Clinical Pathology Physician
   */
  "207ZC0006X": "207ZC0006X",

  /**
   * Clinical Informatics (Pathology) Physician
   */
  "207ZC0008X": "207ZC0008X",

  /**
   * Cytopathology Physician
   */
  "207ZC0500X": "207ZC0500X",

  /**
   * Dermatopathology (Pathology) Physician
   */
  "207ZD0900X": "207ZD0900X",

  /**
   * Forensic Pathology Physician
   */
  "207ZF0201X": "207ZF0201X",

  /**
   * Hematology (Pathology) Physician
   */
  "207ZH0000X": "207ZH0000X",

  /**
   * Immunopathology Physician
   */
  "207ZI0100X": "207ZI0100X",

  /**
   * Medical Microbiology Physician
   */
  "207ZM0300X": "207ZM0300X",

  /**
   * Neuropathology Physician
   */
  "207ZN0500X": "207ZN0500X",

  /**
   * Molecular Genetic Pathology (Pathology) Physician
   */
  "207ZP0007X": "207ZP0007X",

  /**
   * Anatomic Pathology Physician
   */
  "207ZP0101X": "207ZP0101X",

  /**
   * Anatomic Pathology & Clinical Pathology Physician
   */
  "207ZP0102X": "207ZP0102X",

  /**
   * Chemical Pathology Physician
   */
  "207ZP0104X": "207ZP0104X",

  /**
   * Clinical Pathology/Laboratory Medicine Physician
   */
  "207ZP0105X": "207ZP0105X",

  /**
   * Pediatric Pathology Physician
   */
  "207ZP0213X": "207ZP0213X",

  /**
   * Pediatrics Physician
   */
  "208000000X": "208000000X",

  /**
   * Pediatric Adolescent Medicine Physician
   */
  "2080A0000X": "2080A0000X",

  /**
   * Pediatric Obesity Medicine Physician
   */
  "2080B0002X": "2080B0002X",

  /**
   * Child Abuse Pediatrics Physician
   */
  "2080C0008X": "2080C0008X",

  /**
   * Pediatric Hospice and Palliative Medicine Physician
   */
  "2080H0002X": "2080H0002X",

  /**
   * Pediatric Clinical & Laboratory Immunology Physician
   */
  "2080I0007X": "2080I0007X",

  /**
   * Neonatal-Perinatal Medicine Physician
   */
  "2080N0001X": "2080N0001X",

  /**
   * Developmental - Behavioral Pediatrics Physician
   */
  "2080P0006X": "2080P0006X",

  /**
   * Pediatric Neurodevelopmental Disabilities Physician
   */
  "2080P0008X": "2080P0008X",

  /**
   * Pediatric Allergy/Immunology Physician
   */
  "2080P0201X": "2080P0201X",

  /**
   * Pediatric Cardiology Physician
   */
  "2080P0202X": "2080P0202X",

  /**
   * Pediatric Critical Care Medicine Physician
   */
  "2080P0203X": "2080P0203X",

  /**
   * Pediatric Emergency Medicine (Pediatrics) Physician
   */
  "2080P0204X": "2080P0204X",

  /**
   * Pediatric Endocrinology Physician
   */
  "2080P0205X": "2080P0205X",

  /**
   * Pediatric Gastroenterology Physician
   */
  "2080P0206X": "2080P0206X",

  /**
   * Pediatric Hematology & Oncology Physician
   */
  "2080P0207X": "2080P0207X",

  /**
   * Pediatric Infectious Diseases Physician
   */
  "2080P0208X": "2080P0208X",

  /**
   * Pediatric Nephrology Physician
   */
  "2080P0210X": "2080P0210X",

  /**
   * Pediatric Pulmonology Physician
   */
  "2080P0214X": "2080P0214X",

  /**
   * Pediatric Rheumatology Physician
   */
  "2080P0216X": "2080P0216X",

  /**
   * Pediatric Sports Medicine Physician
   */
  "2080S0010X": "2080S0010X",

  /**
   * Pediatric Sleep Medicine Physician
   */
  "2080S0012X": "2080S0012X",

  /**
   * Pediatric Medical Toxicology Physician
   */
  "2080T0002X": "2080T0002X",

  /**
   * Pediatric Transplant Hepatology Physician
   */
  "2080T0004X": "2080T0004X",

  /**
   * Physical Medicine & Rehabilitation Physician
   */
  "208100000X": "208100000X",

  /**
   * Hospice and Palliative Medicine (Physical Medicine & Rehabilitation) Physician
   */
  "2081H0002X": "2081H0002X",

  /**
   * Neuromuscular Medicine (Physical Medicine & Rehabilitation) Physician
   */
  "2081N0008X": "2081N0008X",

  /**
   * Spinal Cord Injury Medicine Physician
   */
  "2081P0004X": "2081P0004X",

  /**
   * Pediatric Rehabilitation Medicine Physician
   */
  "2081P0010X": "2081P0010X",

  /**
   * Brain Injury Medicine (Physical Medicine & Rehabilitation) Physician
   */
  "2081P0301X": "2081P0301X",

  /**
   * Pain Medicine (Physical Medicine & Rehabilitation) Physician
   */
  "2081P2900X": "2081P2900X",

  /**
   * Sports Medicine (Physical Medicine & Rehabilitation) Physician
   */
  "2081S0010X": "2081S0010X",

  /**
   * Plastic Surgery Physician
   */
  "208200000X": "208200000X",

  /**
   * Plastic Surgery Within the Head and Neck (Plastic Surgery) Physician
   */
  "2082S0099X": "2082S0099X",

  /**
   * Surgery of the Hand (Plastic Surgery) Physician
   */
  "2082S0105X": "2082S0105X",

  /**
   * Aerospace Medicine Physician
   */
  "2083A0100X": "2083A0100X",

  /**
   * Addiction Medicine (Preventive Medicine) Physician
   */
  "2083A0300X": "2083A0300X",

  /**
   * Obesity Medicine (Preventive Medicine) Physician
   */
  "2083B0002X": "2083B0002X",

  /**
   * Clinical Informatics Physician
   */
  "2083C0008X": "2083C0008X",

  /**
   * Undersea and Hyperbaric Medicine (Preventive Medicine) Physician
   */
  "2083P0011X": "2083P0011X",

  /**
   * Preventive Medicine/Occupational Environmental Medicine Physician
   */
  "2083P0500X": "2083P0500X",

  /**
   * Public Health & General Preventive Medicine Physician
   */
  "2083P0901X": "2083P0901X",

  /**
   * Sports Medicine (Preventive Medicine) Physician
   */
  "2083S0010X": "2083S0010X",

  /**
   * Medical Toxicology (Preventive Medicine) Physician
   */
  "2083T0002X": "2083T0002X",

  /**
   * Occupational Medicine Physician
   */
  "2083X0100X": "2083X0100X",

  /**
   * Addiction Medicine (Psychiatry & Neurology) Physician
   */
  "2084A0401X": "2084A0401X",

  /**
   * Neurocritical Care Physician
   */
  "2084A2900X": "2084A2900X",

  /**
   * Obesity Medicine (Psychiatry & Neurology) Physician
   */
  "2084B0002X": "2084B0002X",

  /**
   * Behavioral Neurology & Neuropsychiatry Physician
   */
  "2084B0040X": "2084B0040X",

  /**
   * Diagnostic Neuroimaging (Psychiatry & Neurology) Physician
   */
  "2084D0003X": "2084D0003X",

  /**
   * Epilepsy Physician
   */
  "2084E0001X": "2084E0001X",

  /**
   * Forensic Psychiatry Physician
   */
  "2084F0202X": "2084F0202X",

  /**
   * Hospice and Palliative Medicine (Psychiatry & Neurology) Physician
   */
  "2084H0002X": "2084H0002X",

  /**
   * Neuromuscular Medicine (Psychiatry & Neurology) Physician
   */
  "2084N0008X": "2084N0008X",

  /**
   * Neurology Physician
   */
  "2084N0400X": "2084N0400X",

  /**
   * Neurology with Special Qualifications in Child Neurology Physician
   */
  "2084N0402X": "2084N0402X",

  /**
   * Clinical Neurophysiology Physician
   */
  "2084N0600X": "2084N0600X",

  /**
   * Neurodevelopmental Disabilities Physician Physician
   */
  "2084P0005X": "2084P0005X",

  /**
   * Psychosomatic Medicine Physician
   */
  "2084P0015X": "2084P0015X",

  /**
   * Brain Injury Medicine (Psychiatry & Neurology) Physician
   */
  "2084P0301X": "2084P0301X",

  /**
   * Psychiatry Physician
   */
  "2084P0800X": "2084P0800X",

  /**
   * Addiction Psychiatry Physician
   */
  "2084P0802X": "2084P0802X",

  /**
   * Child & Adolescent Psychiatry Physician
   */
  "2084P0804X": "2084P0804X",

  /**
   * Geriatric Psychiatry Physician
   */
  "2084P0805X": "2084P0805X",

  /**
   * Pain Medicine (Psychiatry & Neurology) Physician
   */
  "2084P2900X": "2084P2900X",

  /**
   * Sports Medicine (Psychiatry & Neurology) Physician
   */
  "2084S0010X": "2084S0010X",

  /**
   * Sleep Medicine (Psychiatry & Neurology) Physician
   */
  "2084S0012X": "2084S0012X",

  /**
   * Vascular Neurology Physician
   */
  "2084V0102X": "2084V0102X",

  /**
   * Body Imaging Physician
   */
  "2085B0100X": "2085B0100X",

  /**
   * Diagnostic Neuroimaging (Radiology) Physician
   */
  "2085D0003X": "2085D0003X",

  /**
   * Hospice and Palliative Medicine (Radiology) Physician
   */
  "2085H0002X": "2085H0002X",

  /**
   * Neuroradiology Physician
   */
  "2085N0700X": "2085N0700X",

  /**
   * Nuclear Radiology Physician
   */
  "2085N0904X": "2085N0904X",

  /**
   * Pediatric Radiology Physician
   */
  "2085P0229X": "2085P0229X",

  /**
   * Radiation Oncology Physician
   */
  "2085R0001X": "2085R0001X",

  /**
   * Diagnostic Radiology Physician
   */
  "2085R0202X": "2085R0202X",

  /**
   * Therapeutic Radiology Physician
   */
  "2085R0203X": "2085R0203X",

  /**
   * Vascular & Interventional Radiology Physician
   */
  "2085R0204X": "2085R0204X",

  /**
   * Radiological Physics Physician
   */
  "2085R0205X": "2085R0205X",

  /**
   * Diagnostic Ultrasound Physician
   */
  "2085U0001X": "2085U0001X",

  /**
   * Surgery Physician
   */
  "208600000X": "208600000X",

  /**
   * Hospice and Palliative Medicine (Surgery) Physician
   */
  "2086H0002X": "2086H0002X",

  /**
   * Surgical Critical Care Physician
   */
  "2086S0102X": "2086S0102X",

  /**
   * Surgery of the Hand (Surgery) Physician
   */
  "2086S0105X": "2086S0105X",

  /**
   * Pediatric Surgery Physician
   */
  "2086S0120X": "2086S0120X",

  /**
   * Plastic and Reconstructive Surgery Physician
   */
  "2086S0122X": "2086S0122X",

  /**
   * Trauma Surgery Physician
   */
  "2086S0127X": "2086S0127X",

  /**
   * Vascular Surgery Physician
   */
  "2086S0129X": "2086S0129X",

  /**
   * Surgical Oncology Physician
   */
  "2086X0206X": "2086X0206X",

  /**
   * Urology Physician
   */
  "208800000X": "208800000X",

  /**
   * Female Pelvic Medicine and Reconstructive Surgery (Urology) Physician
   */
  "2088F0040X": "2088F0040X",

  /**
   * Pediatric Urology Physician
   */
  "2088P0231X": "2088P0231X",

  /**
   * Colon & Rectal Surgery Physician
   */
  "208C00000X": "208C00000X",

  /**
   * General Practice Physician
   */
  "208D00000X": "208D00000X",

  /**
   * Thoracic Surgery (Cardiothoracic Vascular Surgery) Physician
   */
  "208G00000X": "208G00000X",

  /**
   * Hospitalist Physician
   */
  "208M00000X": "208M00000X",

  /**
   * Clinical Pharmacology Physician
   */
  "208U00000X": "208U00000X",

  /**
   * Pain Medicine Physician
   */
  "208VP0000X": "208VP0000X",

  /**
   * Interventional Pain Medicine Physician
   */
  "208VP0014X": "208VP0014X",

  /**
   * Legal Medicine (M.D./D.O.) Physician
   */
  "209800000X": "209800000X",

  /**
   * Podiatric Assistant
   */
  "211D00000X": "211D00000X",

  /**
   * Podiatrist
   */
  "213E00000X": "213E00000X",

  /**
   * Deactivated - Podiatrist
   */
  "213EG0000X": "213EG0000X",

  /**
   * Public Medicine Podiatrist
   */
  "213EP0504X": "213EP0504X",

  /**
   * Primary Podiatric Medicine Podiatrist
   */
  "213EP1101X": "213EP1101X",

  /**
   * Radiology Podiatrist
   */
  "213ER0200X": "213ER0200X",

  /**
   * Sports Medicine Podiatrist
   */
  "213ES0000X": "213ES0000X",

  /**
   * Foot & Ankle Surgery Podiatrist
   */
  "213ES0103X": "213ES0103X",

  /**
   * Foot Surgery Podiatrist
   */
  "213ES0131X": "213ES0131X",

  /**
   * Art Therapist
   */
  "221700000X": "221700000X",

  /**
   * Developmental Therapist
   */
  "222Q00000X": "222Q00000X",

  /**
   * Orthotist
   */
  "222Z00000X": "222Z00000X",

  /**
   * Mastectomy Fitter
   */
  "224900000X": "224900000X",

  /**
   * Pedorthist
   */
  "224L00000X": "224L00000X",

  /**
   * Prosthetist
   */
  "224P00000X": "224P00000X",

  /**
   * Clinical Exercise Physiologist
   */
  "224Y00000X": "224Y00000X",

  /**
   * Occupational Therapy Assistant
   */
  "224Z00000X": "224Z00000X",

  /**
   * Environmental Modification Occupational Therapy Assistant
   */
  "224ZE0001X": "224ZE0001X",

  /**
   * Feeding, Eating & Swallowing Occupational Therapy Assistant
   */
  "224ZF0002X": "224ZF0002X",

  /**
   * Low Vision Occupational Therapy Assistant
   */
  "224ZL0004X": "224ZL0004X",

  /**
   * Driving and Community Mobility Occupational Therapy Assistant
   */
  "224ZR0403X": "224ZR0403X",

  /**
   * Orthotic Fitter
   */
  "225000000X": "225000000X",

  /**
   * Physical Therapist
   */
  "225100000X": "225100000X",

  /**
   * Cardiopulmonary Physical Therapist
   */
  "2251C2600X": "2251C2600X",

  /**
   * Ergonomics Physical Therapist
   */
  "2251E1200X": "2251E1200X",

  /**
   * Clinical Electrophysiology Physical Therapist
   */
  "2251E1300X": "2251E1300X",

  /**
   * Geriatric Physical Therapist
   */
  "2251G0304X": "2251G0304X",

  /**
   * Hand Physical Therapist
   */
  "2251H1200X": "2251H1200X",

  /**
   * Human Factors Physical Therapist
   */
  "2251H1300X": "2251H1300X",

  /**
   * Neurology Physical Therapist
   */
  "2251N0400X": "2251N0400X",

  /**
   * Pediatric Physical Therapist
   */
  "2251P0200X": "2251P0200X",

  /**
   * Sports Physical Therapist
   */
  "2251S0007X": "2251S0007X",

  /**
   * Orthopedic Physical Therapist
   */
  "2251X0800X": "2251X0800X",

  /**
   * Physical Therapy Assistant
   */
  "225200000X": "225200000X",

  /**
   * Rehabilitation Practitioner
   */
  "225400000X": "225400000X",

  /**
   * Respiratory/Developmental/Rehabilitative Specialist/Technologist
   */
  "225500000X": "225500000X",

  /**
   * Athletic Trainer
   */
  "2255A2300X": "2255A2300X",

  /**
   * Blind Rehabilitation Specialist/Technologist
   */
  "2255R0406X": "2255R0406X",

  /**
   * Dance Therapist
   */
  "225600000X": "225600000X",

  /**
   * Massage Therapist
   */
  "225700000X": "225700000X",

  /**
   * Recreation Therapist
   */
  "225800000X": "225800000X",

  /**
   * Music Therapist
   */
  "225A00000X": "225A00000X",

  /**
   * Pulmonary Function Technologist
   */
  "225B00000X": "225B00000X",

  /**
   * Rehabilitation Counselor
   */
  "225C00000X": "225C00000X",

  /**
   * Assistive Technology Practitioner Rehabilitation Counselor
   */
  "225CA2400X": "225CA2400X",

  /**
   * Assistive Technology Supplier Rehabilitation Counselor
   */
  "225CA2500X": "225CA2500X",

  /**
   * Orientation and Mobility Training Rehabilitation Counselor
   */
  "225CX0006X": "225CX0006X",

  /**
   * Occupational Therapist
   */
  "225X00000X": "225X00000X",

  /**
   * Environmental Modification Occupational Therapist
   */
  "225XE0001X": "225XE0001X",

  /**
   * Ergonomics Occupational Therapist
   */
  "225XE1200X": "225XE1200X",

  /**
   * Feeding, Eating & Swallowing Occupational Therapist
   */
  "225XF0002X": "225XF0002X",

  /**
   * Gerontology Occupational Therapist
   */
  "225XG0600X": "225XG0600X",

  /**
   * Hand Occupational Therapist
   */
  "225XH1200X": "225XH1200X",

  /**
   * Human Factors Occupational Therapist
   */
  "225XH1300X": "225XH1300X",

  /**
   * Low Vision Occupational Therapist
   */
  "225XL0004X": "225XL0004X",

  /**
   * Mental Health Occupational Therapist
   */
  "225XM0800X": "225XM0800X",

  /**
   * Neurorehabilitation Occupational Therapist
   */
  "225XN1300X": "225XN1300X",

  /**
   * Physical Rehabilitation Occupational Therapist
   */
  "225XP0019X": "225XP0019X",

  /**
   * Pediatric Occupational Therapist
   */
  "225XP0200X": "225XP0200X",

  /**
   * Driving and Community Mobility Occupational Therapist
   */
  "225XR0403X": "225XR0403X",

  /**
   * Recreational Therapist Assistant
   */
  "226000000X": "226000000X",

  /**
   * Kinesiotherapist
   */
  "226300000X": "226300000X",

  /**
   * Certified Respiratory Therapist
   */
  "227800000X": "227800000X",

  /**
   * Critical Care Certified Respiratory Therapist
   */
  "2278C0205X": "2278C0205X",

  /**
   * Emergency Care Certified Respiratory Therapist
   */
  "2278E0002X": "2278E0002X",

  /**
   * Educational Certified Respiratory Therapist
   */
  "2278E1000X": "2278E1000X",

  /**
   * Geriatric Care Certified Respiratory Therapist
   */
  "2278G0305X": "2278G0305X",

  /**
   * General Care Certified Respiratory Therapist
   */
  "2278G1100X": "2278G1100X",

  /**
   * Home Health Certified Respiratory Therapist
   */
  "2278H0200X": "2278H0200X",

  /**
   * Pulmonary Diagnostics Certified Respiratory Therapist
   */
  "2278P1004X": "2278P1004X",

  /**
   * Pulmonary Rehabilitation Certified Respiratory Therapist
   */
  "2278P1005X": "2278P1005X",

  /**
   * Pulmonary Function Technologist Certified Respiratory Therapist
   */
  "2278P1006X": "2278P1006X",

  /**
   * Palliative/Hospice Certified Respiratory Therapist
   */
  "2278P3800X": "2278P3800X",

  /**
   * Neonatal/Pediatric Certified Respiratory Therapist
   */
  "2278P3900X": "2278P3900X",

  /**
   * Patient Transport Certified Respiratory Therapist
   */
  "2278P4000X": "2278P4000X",

  /**
   * SNF/Subacute Care Certified Respiratory Therapist
   */
  "2278S1500X": "2278S1500X",

  /**
   * Registered Respiratory Therapist
   */
  "227900000X": "227900000X",

  /**
   * Critical Care Registered Respiratory Therapist
   */
  "2279C0205X": "2279C0205X",

  /**
   * Emergency Care Registered Respiratory Therapist
   */
  "2279E0002X": "2279E0002X",

  /**
   * Educational Registered Respiratory Therapist
   */
  "2279E1000X": "2279E1000X",

  /**
   * Geriatric Care Registered Respiratory Therapist
   */
  "2279G0305X": "2279G0305X",

  /**
   * General Care Registered Respiratory Therapist
   */
  "2279G1100X": "2279G1100X",

  /**
   * Home Health Registered Respiratory Therapist
   */
  "2279H0200X": "2279H0200X",

  /**
   * Pulmonary Diagnostics Registered Respiratory Therapist
   */
  "2279P1004X": "2279P1004X",

  /**
   * Pulmonary Rehabilitation Registered Respiratory Therapist
   */
  "2279P1005X": "2279P1005X",

  /**
   * Pulmonary Function Technologist Registered Respiratory Therapist
   */
  "2279P1006X": "2279P1006X",

  /**
   * Palliative/Hospice Registered Respiratory Therapist
   */
  "2279P3800X": "2279P3800X",

  /**
   * Neonatal/Pediatric Registered Respiratory Therapist
   */
  "2279P3900X": "2279P3900X",

  /**
   * Patient Transport Registered Respiratory Therapist
   */
  "2279P4000X": "2279P4000X",

  /**
   * SNF/Subacute Care Registered Respiratory Therapist
   */
  "2279S1500X": "2279S1500X",

  /**
   * Anaplastologist
   */
  "229N00000X": "229N00000X",

  /**
   * Audiologist
   */
  "231H00000X": "231H00000X",

  /**
   * Assistive Technology Practitioner Audiologist
   */
  "231HA2400X": "231HA2400X",

  /**
   * Assistive Technology Supplier Audiologist
   */
  "231HA2500X": "231HA2500X",

  /**
   * Speech/Language/Hearing Specialist/Technologist
   */
  "235500000X": "235500000X",

  /**
   * Audiology Assistant
   */
  "2355A2700X": "2355A2700X",

  /**
   * Speech-Language Assistant
   */
  "2355S0801X": "2355S0801X",

  /**
   * Speech-Language Pathologist
   */
  "235Z00000X": "235Z00000X",

  /**
   * Audiologist-Hearing Aid Fitter
   */
  "237600000X": "237600000X",

  /**
   * Hearing Instrument Specialist
   */
  "237700000X": "237700000X",

  /**
   * Perfusionist
   */
  "242T00000X": "242T00000X",

  /**
   * Radiology Practitioner Assistant
   */
  "243U00000X": "243U00000X",

  /**
   * Pathology Specialist/Technologist
   */
  "246Q00000X": "246Q00000X",

  /**
   * Blood Banking Specialist/Technologist
   */
  "246QB0000X": "246QB0000X",

  /**
   * Chemistry Pathology Specialist/Technologist
   */
  "246QC1000X": "246QC1000X",

  /**
   * Cytotechnology Specialist/Technologist
   */
  "246QC2700X": "246QC2700X",

  /**
   * Hematology Specialist/Technologist
   */
  "246QH0000X": "246QH0000X",

  /**
   * Hemapheresis Practitioner
   */
  "246QH0401X": "246QH0401X",

  /**
   * Histology Specialist/Technologist
   */
  "246QH0600X": "246QH0600X",

  /**
   * Immunology Pathology Specialist/Technologist
   */
  "246QI0000X": "246QI0000X",

  /**
   * Laboratory Management Specialist/Technologist
   */
  "246QL0900X": "246QL0900X",

  /**
   * Diplomate Laboratory Management Specialist/Technologist
   */
  "246QL0901X": "246QL0901X",

  /**
   * Medical Technologist
   */
  "246QM0706X": "246QM0706X",

  /**
   * Microbiology Specialist/Technologist
   */
  "246QM0900X": "246QM0900X",

  /**
   * Pathology Technician
   */
  "246R00000X": "246R00000X",

  /**
   * Histology Technician
   */
  "246RH0600X": "246RH0600X",

  /**
   * Medical Laboratory Technician
   */
  "246RM2200X": "246RM2200X",

  /**
   * Phlebotomy Technician
   */
  "246RP1900X": "246RP1900X",

  /**
   * Cardiology Technician
   */
  "246W00000X": "246W00000X",

  /**
   * Cardiovascular Specialist/Technologist
   */
  "246X00000X": "246X00000X",

  /**
   * Cardiovascular Invasive Specialist/Technologist
   */
  "246XC2901X": "246XC2901X",

  /**
   * Vascular Specialist/Technologist
   */
  "246XC2903X": "246XC2903X",

  /**
   * Sonography Specialist/Technologist
   */
  "246XS1301X": "246XS1301X",

  /**
   * Health Information Specialist/Technologist
   */
  "246Y00000X": "246Y00000X",

  /**
   * Hospital Based Coding Specialist
   */
  "246YC3301X": "246YC3301X",

  /**
   * Physician Office Based Coding Specialist
   */
  "246YC3302X": "246YC3302X",

  /**
   * Registered Record Administrator
   */
  "246YR1600X": "246YR1600X",

  /**
   * Other Specialist/Technologist
   */
  "246Z00000X": "246Z00000X",

  /**
   * Medical Art  Specialist/Technologist
   */
  "246ZA2600X": "246ZA2600X",

  /**
   * Biomedical Engineer
   */
  "246ZB0301X": "246ZB0301X",

  /**
   * Biomedical Photographer
   */
  "246ZB0302X": "246ZB0302X",

  /**
   * Biochemist
   */
  "246ZB0500X": "246ZB0500X",

  /**
   * Biostatiscian
   */
  "246ZB0600X": "246ZB0600X",

  /**
   * Surgical Assistant
   */
  "246ZC0007X": "246ZC0007X",

  /**
   * EEG Specialist/Technologist
   */
  "246ZE0500X": "246ZE0500X",

  /**
   * Electroneurodiagnostic Specialist/Technologist
   */
  "246ZE0600X": "246ZE0600X",

  /**
   * Graphics Methods Specialist/Technologist
   */
  "246ZG0701X": "246ZG0701X",

  /**
   * Medical Geneticist (PhD) Specialist/Technologist
   */
  "246ZG1000X": "246ZG1000X",

  /**
   * Medical Illustrator
   */
  "246ZI1000X": "246ZI1000X",

  /**
   * Nephrology Specialist/Technologist
   */
  "246ZN0300X": "246ZN0300X",

  /**
   * Surgical Technologist
   */
  "246ZS0410X": "246ZS0410X",

  /**
   * Orthopedic Assistant
   */
  "246ZX2200X": "246ZX2200X",

  /**
   * Health Information Technician
   */
  "247000000X": "247000000X",

  /**
   * Assistant Health Information Record Technician
   */
  "2470A2800X": "2470A2800X",

  /**
   * Radiologic Technologist
   */
  "247100000X": "247100000X",

  /**
   * Bone Densitometry Radiologic Technologist
   */
  "2471B0102X": "2471B0102X",

  /**
   * Cardiovascular-Interventional Technology Radiologic Technologist
   */
  "2471C1101X": "2471C1101X",

  /**
   * Cardiac-Interventional Technology Radiologic Technologist
   */
  "2471C1106X": "2471C1106X",

  /**
   * Computed Tomography Radiologic Technologist
   */
  "2471C3401X": "2471C3401X",

  /**
   * Radiography Radiologic Technologist
   */
  "2471C3402X": "2471C3402X",

  /**
   * Magnetic Resonance Imaging Radiologic Technologist
   */
  "2471M1202X": "2471M1202X",

  /**
   * Mammography Radiologic Technologist
   */
  "2471M2300X": "2471M2300X",

  /**
   * Nuclear Medicine Technology Radiologic Technologist
   */
  "2471N0900X": "2471N0900X",

  /**
   * Quality Management Radiologic Technologist
   */
  "2471Q0001X": "2471Q0001X",

  /**
   * Radiation Therapy Radiologic Technologist
   */
  "2471R0002X": "2471R0002X",

  /**
   * Sonography Radiologic Technologist
   */
  "2471S1302X": "2471S1302X",

  /**
   * Vascular Sonography Radiologic Technologist
   */
  "2471V0105X": "2471V0105X",

  /**
   * Vascular-Interventional Technology Radiologic Technologist
   */
  "2471V0106X": "2471V0106X",

  /**
   * Other Technician
   */
  "247200000X": "247200000X",

  /**
   * Biomedical Engineering Technician
   */
  "2472B0301X": "2472B0301X",

  /**
   * Darkroom Technician
   */
  "2472D0500X": "2472D0500X",

  /**
   * EEG Technician
   */
  "2472E0500X": "2472E0500X",

  /**
   * Renal Dialysis Technician
   */
  "2472R0900X": "2472R0900X",

  /**
   * Veterinary Technician
   */
  "2472V0600X": "2472V0600X",

  /**
   * Clinical Laboratory Director (Non-physician)
   */
  "247ZC0005X": "247ZC0005X",

  /**
   * Local Education Agency (LEA)
   */
  "251300000X": "251300000X",

  /**
   * Case Management Agency
   */
  "251B00000X": "251B00000X",

  /**
   * Developmentally Disabled Services Day Training Agency
   */
  "251C00000X": "251C00000X",

  /**
   * Home Health Agency
   */
  "251E00000X": "251E00000X",

  /**
   * Home Infusion Agency
   */
  "251F00000X": "251F00000X",

  /**
   * Community Based Hospice Care Agency
   */
  "251G00000X": "251G00000X",

  /**
   * Nursing Care Agency
   */
  "251J00000X": "251J00000X",

  /**
   * Public Health or Welfare Agency
   */
  "251K00000X": "251K00000X",

  /**
   * Community/Behavioral Health Agency
   */
  "251S00000X": "251S00000X",

  /**
   * PACE Provider Organization
   */
  "251T00000X": "251T00000X",

  /**
   * Voluntary or Charitable Agency
   */
  "251V00000X": "251V00000X",

  /**
   * Supports Brokerage Agency
   */
  "251X00000X": "251X00000X",

  /**
   * Early Intervention Provider Agency
   */
  "252Y00000X": "252Y00000X",

  /**
   * Foster Care Agency
   */
  "253J00000X": "253J00000X",

  /**
   * In Home Supportive Care Agency
   */
  "253Z00000X": "253Z00000X",

  /**
   * Clinic/Center
   */
  "261Q00000X": "261Q00000X",

  /**
   * Ambulatory Family Planning Facility
   */
  "261QA0005X": "261QA0005X",

  /**
   * Ambulatory Fertility Facility
   */
  "261QA0006X": "261QA0006X",

  /**
   * Adult Day Care Clinic/Center
   */
  "261QA0600X": "261QA0600X",

  /**
   * Amputee Clinic/Center
   */
  "261QA0900X": "261QA0900X",

  /**
   * Ambulatory Surgical Clinic/Center
   */
  "261QA1903X": "261QA1903X",

  /**
   * Augmentative Communication Clinic/Center
   */
  "261QA3000X": "261QA3000X",

  /**
   * Birthing Clinic/Center
   */
  "261QB0400X": "261QB0400X",

  /**
   * Critical Access Hospital Clinic/Center
   */
  "261QC0050X": "261QC0050X",

  /**
   * Community Health Clinic/Center
   */
  "261QC1500X": "261QC1500X",

  /**
   * Corporate Health Clinic/Center
   */
  "261QC1800X": "261QC1800X",

  /**
   * Dental Clinic/Center
   */
  "261QD0000X": "261QD0000X",

  /**
   * Developmental Disabilities Clinic/Center
   */
  "261QD1600X": "261QD1600X",

  /**
   * Emergency Care Clinic/Center
   */
  "261QE0002X": "261QE0002X",

  /**
   * End-Stage Renal Disease (ESRD) Treatment Clinic/Center
   */
  "261QE0700X": "261QE0700X",

  /**
   * Endoscopy Clinic/Center
   */
  "261QE0800X": "261QE0800X",

  /**
   * Non-Surgical Family Planning Clinic/Center
   */
  "261QF0050X": "261QF0050X",

  /**
   * Federally Qualified Health Center (FQHC)
   */
  "261QF0400X": "261QF0400X",

  /**
   * Genetics Clinic/Center
   */
  "261QG0250X": "261QG0250X",

  /**
   * Health Service Clinic/Center
   */
  "261QH0100X": "261QH0100X",

  /**
   * Hearing and Speech Clinic/Center
   */
  "261QH0700X": "261QH0700X",

  /**
   * Infusion Therapy Clinic/Center
   */
  "261QI0500X": "261QI0500X",

  /**
   * Lithotripsy Clinic/Center
   */
  "261QL0400X": "261QL0400X",

  /**
   * Mental Health Clinic/Center (Including Community Mental Health Center)
   */
  "261QM0801X": "261QM0801X",

  /**
   * Adult Mental Health Clinic/Center
   */
  "261QM0850X": "261QM0850X",

  /**
   * Adolescent and Children Mental Health Clinic/Center
   */
  "261QM0855X": "261QM0855X",

  /**
   * Migrant Health Clinic/Center
   */
  "261QM1000X": "261QM1000X",

  /**
   * Military/U.S. Coast Guard Outpatient Clinic/Center
   */
  "261QM1100X": "261QM1100X",

  /**
   * Military and U.S. Coast Guard Ambulatory Procedure Clinic/Center
   */
  "261QM1101X": "261QM1101X",

  /**
   * Military Outpatient Operational (Transportable) Component Clinic/Center
   */
  "261QM1102X": "261QM1102X",

  /**
   * Military Ambulatory Procedure Visits Operational (Transportable) Clinic/Center
   */
  "261QM1103X": "261QM1103X",

  /**
   * Magnetic Resonance Imaging (MRI) Clinic/Center
   */
  "261QM1200X": "261QM1200X",

  /**
   * Multi-Specialty Clinic/Center
   */
  "261QM1300X": "261QM1300X",

  /**
   * Medical Specialty Clinic/Center
   */
  "261QM2500X": "261QM2500X",

  /**
   * Methadone Clinic
   */
  "261QM2800X": "261QM2800X",

  /**
   * Medically Fragile Infants and Children Day Care
   */
  "261QM3000X": "261QM3000X",

  /**
   * Federal Public Health Clinic/Center
   */
  "261QP0904X": "261QP0904X",

  /**
   * State or Local Public Health Clinic/Center
   */
  "261QP0905X": "261QP0905X",

  /**
   * Podiatric Clinic/Center
   */
  "261QP1100X": "261QP1100X",

  /**
   * Physical Therapy Clinic/Center
   */
  "261QP2000X": "261QP2000X",

  /**
   * Primary Care Clinic/Center
   */
  "261QP2300X": "261QP2300X",

  /**
   * Prison Health Clinic/Center
   */
  "261QP2400X": "261QP2400X",

  /**
   * Pain Clinic/Center
   */
  "261QP3300X": "261QP3300X",

  /**
   * Radiology Clinic/Center
   */
  "261QR0200X": "261QR0200X",

  /**
   * Mammography Clinic/Center
   */
  "261QR0206X": "261QR0206X",

  /**
   * Mobile Mammography Clinic/Center
   */
  "261QR0207X": "261QR0207X",

  /**
   * Mobile Radiology Clinic/Center
   */
  "261QR0208X": "261QR0208X",

  /**
   * Rehabilitation Clinic/Center
   */
  "261QR0400X": "261QR0400X",

  /**
   * Comprehensive Outpatient Rehabilitation Facility (CORF)
   */
  "261QR0401X": "261QR0401X",

  /**
   * Cardiac Rehabilitation Clinic/Center
   */
  "261QR0404X": "261QR0404X",

  /**
   * Substance Use Disorder Rehabilitation Clinic/Center
   */
  "261QR0405X": "261QR0405X",

  /**
   * Recovery Care Clinic/Center
   */
  "261QR0800X": "261QR0800X",

  /**
   * Research Clinic/Center
   */
  "261QR1100X": "261QR1100X",

  /**
   * Rural Health Clinic/Center
   */
  "261QR1300X": "261QR1300X",

  /**
   * Oral and Maxillofacial Surgery Clinic/Center
   */
  "261QS0112X": "261QS0112X",

  /**
   * Ophthalmologic Surgery Clinic/Center
   */
  "261QS0132X": "261QS0132X",

  /**
   * Student Health Clinic/Center
   */
  "261QS1000X": "261QS1000X",

  /**
   * Sleep Disorder Diagnostic Clinic/Center
   */
  "261QS1200X": "261QS1200X",

  /**
   * Urgent Care Clinic/Center
   */
  "261QU0200X": "261QU0200X",

  /**
   * VA Clinic/Center
   */
  "261QV0200X": "261QV0200X",

  /**
   * Occupational Medicine Clinic/Center
   */
  "261QX0100X": "261QX0100X",

  /**
   * Oncology Clinic/Center
   */
  "261QX0200X": "261QX0200X",

  /**
   * Radiation Oncology Clinic/Center
   */
  "261QX0203X": "261QX0203X",

  /**
   * Epilepsy Hospital Unit
   */
  "273100000X": "273100000X",

  /**
   * Psychiatric Hospital Unit
   */
  "273R00000X": "273R00000X",

  /**
   * Rehabilitation Hospital Unit
   */
  "273Y00000X": "273Y00000X",

  /**
   * Medicare Defined Swing Bed Hospital Unit
   */
  "275N00000X": "275N00000X",

  /**
   * Substance Use Disorder Rehabilitation Hospital Unit
   */
  "276400000X": "276400000X",

  /**
   * Chronic Disease Hospital
   */
  "281P00000X": "281P00000X",

  /**
   * Children' s Chronic Disease Hospital
   */
  "281PC2000X": "281PC2000X",

  /**
   * Long Term Care Hospital
   */
  "282E00000X": "282E00000X",

  /**
   * Religious Nonmedical Health Care Institution
   */
  "282J00000X": "282J00000X",

  /**
   * General Acute Care Hospital
   */
  "282N00000X": "282N00000X",

  /**
   * Critical Access Hospital
   */
  "282NC0060X": "282NC0060X",

  /**
   * Children's Hospital
   */
  "282NC2000X": "282NC2000X",

  /**
   * Rural Acute Care Hospital
   */
  "282NR1301X": "282NR1301X",

  /**
   * Women's Hospital
   */
  "282NW0100X": "282NW0100X",

  /**
   * Psychiatric Hospital
   */
  "283Q00000X": "283Q00000X",

  /**
   * Rehabilitation Hospital
   */
  "283X00000X": "283X00000X",

  /**
   * Children's Rehabilitation Hospital
   */
  "283XC2000X": "283XC2000X",

  /**
   * Special Hospital
   */
  "284300000X": "284300000X",

  /**
   * Military Hospital
   */
  "286500000X": "286500000X",

  /**
   * Deactivated - Military Hospital
   */
  "2865C1500X": "2865C1500X",

  /**
   * Military General Acute Care Hospital
   */
  "2865M2000X": "2865M2000X",

  /**
   * Operational (Transportable) Military General Acute Care Hospital
   */
  "2865X1600X": "2865X1600X",

  /**
   * Deactivated - Christian Science Sanitorium
   */
  "287300000X": "287300000X",

  /**
   * Military Clinical Medical Laboratory
   */
  "291900000X": "291900000X",

  /**
   * Clinical Medical Laboratory
   */
  "291U00000X": "291U00000X",

  /**
   * Dental Laboratory
   */
  "292200000X": "292200000X",

  /**
   * Physiological Laboratory
   */
  "293D00000X": "293D00000X",

  /**
   * Exclusive Provider Organization
   */
  "302F00000X": "302F00000X",

  /**
   * Health Maintenance Organization
   */
  "302R00000X": "302R00000X",

  /**
   * Preferred Provider Organization
   */
  "305R00000X": "305R00000X",

  /**
   * Point of Service
   */
  "305S00000X": "305S00000X",

  /**
   * Assisted Living Facility
   */
  "310400000X": "310400000X",

  /**
   * Assisted Living Facility (Mental Illness)
   */
  "3104A0625X": "3104A0625X",

  /**
   * Assisted Living Facility (Behavioral Disturbances)
   */
  "3104A0630X": "3104A0630X",

  /**
   * Mental Illness Intermediate Care Facility
   */
  "310500000X": "310500000X",

  /**
   * Alzheimer Center (Dementia Center)
   */
  "311500000X": "311500000X",

  /**
   * Custodial Care Facility
   */
  "311Z00000X": "311Z00000X",

  /**
   * Adult Care Home Facility
   */
  "311ZA0620X": "311ZA0620X",

  /**
   * Nursing Facility/Intermediate Care Facility
   */
  "313M00000X": "313M00000X",

  /**
   * Skilled Nursing Facility
   */
  "314000000X": "314000000X",

  /**
   * Pediatric Skilled Nursing Facility
   */
  "3140N1450X": "3140N1450X",

  /**
   * Inpatient Hospice
   */
  "315D00000X": "315D00000X",

  /**
   * Intellectual Disabilities Intermediate Care Facility
   */
  "315P00000X": "315P00000X",

  /**
   * Deactivated - Christian Science Facility
   */
  "317400000X": "317400000X",

  /**
   * Intellectual and/or Developmental Disabilities Residential Treatment Facility
   */
  "320600000X": "320600000X",

  /**
   * Physical Disabilities Residential Treatment Facility
   */
  "320700000X": "320700000X",

  /**
   * Mental Illness Community Based Residential Treatment Facility
   */
  "320800000X": "320800000X",

  /**
   * Intellectual and/or Developmental Disabilities Community Based Residential Treatment Facility
   */
  "320900000X": "320900000X",

  /**
   * Emotionally Disturbed Childrens' Residential Treatment Facility
   */
  "322D00000X": "322D00000X",

  /**
   * Psychiatric Residential Treatment Facility
   */
  "323P00000X": "323P00000X",

  /**
   * Substance Abuse Rehabilitation Facility
   */
  "324500000X": "324500000X",

  /**
   * Children's Substance Abuse Rehabilitation Facility
   */
  "3245S0500X": "3245S0500X",

  /**
   * Blood Bank
   */
  "331L00000X": "331L00000X",

  /**
   * Military/U.S. Coast Guard Pharmacy
   */
  "332000000X": "332000000X",

  /**
   * Department of Veterans Affairs (VA) Pharmacy
   */
  "332100000X": "332100000X",

  /**
   * Indian Health Service/Tribal/Urban Indian Health (I/T/U) Pharmacy
   */
  "332800000X": "332800000X",

  /**
   * Non-Pharmacy Dispensing Site
   */
  "332900000X": "332900000X",

  /**
   * Durable Medical Equipment & Medical Supplies
   */
  "332B00000X": "332B00000X",

  /**
   * Customized Equipment (DME)
   */
  "332BC3200X": "332BC3200X",

  /**
   * Dialysis Equipment & Supplies (DME)
   */
  "332BD1200X": "332BD1200X",

  /**
   * Nursing Facility Supplies (DME)
   */
  "332BN1400X": "332BN1400X",

  /**
   * Parenteral & Enteral Nutrition Supplies (DME)
   */
  "332BP3500X": "332BP3500X",

  /**
   * Oxygen Equipment & Supplies (DME)
   */
  "332BX2000X": "332BX2000X",

  /**
   * Eye Bank
   */
  "332G00000X": "332G00000X",

  /**
   * Eyewear Supplier
   */
  "332H00000X": "332H00000X",

  /**
   * Hearing  Aid Equipment
   */
  "332S00000X": "332S00000X",

  /**
   * Home Delivered Meals
   */
  "332U00000X": "332U00000X",

  /**
   * Emergency Response System Companies
   */
  "333300000X": "333300000X",

  /**
   * Pharmacy
   */
  "333600000X": "333600000X",

  /**
   * Clinic Pharmacy
   */
  "3336C0002X": "3336C0002X",

  /**
   * Community/Retail Pharmacy
   */
  "3336C0003X": "3336C0003X",

  /**
   * Compounding Pharmacy
   */
  "3336C0004X": "3336C0004X",

  /**
   * Home Infusion Therapy Pharmacy
   */
  "3336H0001X": "3336H0001X",

  /**
   * Institutional Pharmacy
   */
  "3336I0012X": "3336I0012X",

  /**
   * Long Term Care Pharmacy
   */
  "3336L0003X": "3336L0003X",

  /**
   * Mail Order Pharmacy
   */
  "3336M0002X": "3336M0002X",

  /**
   * Managed Care Organization Pharmacy
   */
  "3336M0003X": "3336M0003X",

  /**
   * Nuclear Pharmacy
   */
  "3336N0007X": "3336N0007X",

  /**
   * Specialty Pharmacy
   */
  "3336S0011X": "3336S0011X",

  /**
   * Prosthetic/Orthotic Supplier
   */
  "335E00000X": "335E00000X",

  /**
   * Medical Foods Supplier
   */
  "335G00000X": "335G00000X",

  /**
   * Organ Procurement Organization
   */
  "335U00000X": "335U00000X",

  /**
   * Portable X-ray and/or Other Portable Diagnostic Imaging Supplier
   */
  "335V00000X": "335V00000X",

  /**
   * Ambulance
   */
  "341600000X": "341600000X",

  /**
   * Air Ambulance
   */
  "3416A0800X": "3416A0800X",

  /**
   * Land Ambulance
   */
  "3416L0300X": "3416L0300X",

  /**
   * Water Ambulance
   */
  "3416S0300X": "3416S0300X",

  /**
   * Military/U.S. Coast Guard Transport,
   */
  "341800000X": "341800000X",

  /**
   * Military or U.S. Coast Guard Ground Transport Ambulance
   */
  "3418M1110X": "3418M1110X",

  /**
   * Military or U.S. Coast Guard Air Transport Ambulance
   */
  "3418M1120X": "3418M1120X",

  /**
   * Military or U.S. Coast Guard Water Transport Ambulance
   */
  "3418M1130X": "3418M1130X",

  /**
   * Transportation Network Company
   */
  "342000000X": "342000000X",

  /**
   * Secured Medical Transport (VAN)
   */
  "343800000X": "343800000X",

  /**
   * Non-emergency Medical Transport (VAN)
   */
  "343900000X": "343900000X",

  /**
   * Taxi
   */
  "344600000X": "344600000X",

  /**
   * Air Carrier
   */
  "344800000X": "344800000X",

  /**
   * Bus
   */
  "347B00000X": "347B00000X",

  /**
   * Private Vehicle
   */
  "347C00000X": "347C00000X",

  /**
   * Train
   */
  "347D00000X": "347D00000X",

  /**
   * Transportation Broker
   */
  "347E00000X": "347E00000X",

  /**
   * Physician Assistant
   */
  "363A00000X": "363A00000X",

  /**
   * Medical Physician Assistant
   */
  "363AM0700X": "363AM0700X",

  /**
   * Surgical Physician Assistant
   */
  "363AS0400X": "363AS0400X",

  /**
   * Nurse Practitioner
   */
  "363L00000X": "363L00000X",

  /**
   * Acute Care Nurse Practitioner
   */
  "363LA2100X": "363LA2100X",

  /**
   * Adult Health Nurse Practitioner
   */
  "363LA2200X": "363LA2200X",

  /**
   * Critical Care Medicine Nurse Practitioner
   */
  "363LC0200X": "363LC0200X",

  /**
   * Community Health Nurse Practitioner
   */
  "363LC1500X": "363LC1500X",

  /**
   * Family Nurse Practitioner
   */
  "363LF0000X": "363LF0000X",

  /**
   * Gerontology Nurse Practitioner
   */
  "363LG0600X": "363LG0600X",

  /**
   * Neonatal Nurse Practitioner
   */
  "363LN0000X": "363LN0000X",

  /**
   * Critical Care Neonatal Nurse Practitioner
   */
  "363LN0005X": "363LN0005X",

  /**
   * Pediatric Nurse Practitioner
   */
  "363LP0200X": "363LP0200X",

  /**
   * Critical Care Pediatric Nurse Practitioner
   */
  "363LP0222X": "363LP0222X",

  /**
   * Psychiatric/Mental Health Nurse Practitioner
   */
  "363LP0808X": "363LP0808X",

  /**
   * Perinatal Nurse Practitioner
   */
  "363LP1700X": "363LP1700X",

  /**
   * Primary Care Nurse Practitioner
   */
  "363LP2300X": "363LP2300X",

  /**
   * School Nurse Practitioner
   */
  "363LS0200X": "363LS0200X",

  /**
   * Women's Health Nurse Practitioner
   */
  "363LW0102X": "363LW0102X",

  /**
   * Obstetrics & Gynecology Nurse Practitioner
   */
  "363LX0001X": "363LX0001X",

  /**
   * Occupational Health Nurse Practitioner
   */
  "363LX0106X": "363LX0106X",

  /**
   * Clinical Nurse Specialist
   */
  "364S00000X": "364S00000X",

  /**
   * Acute Care Clinical Nurse Specialist
   */
  "364SA2100X": "364SA2100X",

  /**
   * Adult Health Clinical Nurse Specialist
   */
  "364SA2200X": "364SA2200X",

  /**
   * Critical Care Medicine Clinical Nurse Specialist
   */
  "364SC0200X": "364SC0200X",

  /**
   * Community Health/Public Health Clinical Nurse Specialist
   */
  "364SC1501X": "364SC1501X",

  /**
   * Chronic Care Clinical Nurse Specialist
   */
  "364SC2300X": "364SC2300X",

  /**
   * Emergency Clinical Nurse Specialist
   */
  "364SE0003X": "364SE0003X",

  /**
   * Ethics Clinical Nurse Specialist
   */
  "364SE1400X": "364SE1400X",

  /**
   * Family Health Clinical Nurse Specialist
   */
  "364SF0001X": "364SF0001X",

  /**
   * Gerontology Clinical Nurse Specialist
   */
  "364SG0600X": "364SG0600X",

  /**
   * Home Health Clinical Nurse Specialist
   */
  "364SH0200X": "364SH0200X",

  /**
   * Holistic Clinical Nurse Specialist
   */
  "364SH1100X": "364SH1100X",

  /**
   * Informatics Clinical Nurse Specialist
   */
  "364SI0800X": "364SI0800X",

  /**
   * Long-Term Care Clinical Nurse Specialist
   */
  "364SL0600X": "364SL0600X",

  /**
   * Medical-Surgical Clinical Nurse Specialist
   */
  "364SM0705X": "364SM0705X",

  /**
   * Neonatal Clinical Nurse Specialist
   */
  "364SN0000X": "364SN0000X",

  /**
   * Neuroscience Clinical Nurse Specialist
   */
  "364SN0800X": "364SN0800X",

  /**
   * Pediatric Clinical Nurse Specialist
   */
  "364SP0200X": "364SP0200X",

  /**
   * Child & Adolescent Psychiatric/Mental Health Clinical Nurse Specialist
   */
  "364SP0807X": "364SP0807X",

  /**
   * Psychiatric/Mental Health Clinical Nurse Specialist
   */
  "364SP0808X": "364SP0808X",

  /**
   * Adult Psychiatric/Mental Health Clinical Nurse Specialist
   */
  "364SP0809X": "364SP0809X",

  /**
   * Child & Family Psychiatric/Mental Health Clinical Nurse Specialist
   */
  "364SP0810X": "364SP0810X",

  /**
   * Chronically Ill Psychiatric/Mental Health Clinical Nurse Specialist
   */
  "364SP0811X": "364SP0811X",

  /**
   * Community Psychiatric/Mental Health Clinical Nurse Specialist
   */
  "364SP0812X": "364SP0812X",

  /**
   * Geropsychiatric Psychiatric/Mental Health Clinical Nurse Specialist
   */
  "364SP0813X": "364SP0813X",

  /**
   * Perinatal Clinical Nurse Specialist
   */
  "364SP1700X": "364SP1700X",

  /**
   * Perioperative Clinical Nurse Specialist
   */
  "364SP2800X": "364SP2800X",

  /**
   * Rehabilitation Clinical Nurse Specialist
   */
  "364SR0400X": "364SR0400X",

  /**
   * School Clinical Nurse Specialist
   */
  "364SS0200X": "364SS0200X",

  /**
   * Transplantation Clinical Nurse Specialist
   */
  "364ST0500X": "364ST0500X",

  /**
   * Women's Health Clinical Nurse Specialist
   */
  "364SW0102X": "364SW0102X",

  /**
   * Occupational Health Clinical Nurse Specialist
   */
  "364SX0106X": "364SX0106X",

  /**
   * Oncology Clinical Nurse Specialist
   */
  "364SX0200X": "364SX0200X",

  /**
   * Pediatric Oncology Clinical Nurse Specialist
   */
  "364SX0204X": "364SX0204X",

  /**
   * Certified Registered Nurse Anesthetist
   */
  "367500000X": "367500000X",

  /**
   * Advanced Practice Midwife
   */
  "367A00000X": "367A00000X",

  /**
   * Anesthesiologist Assistant
   */
  "367H00000X": "367H00000X",

  /**
   * Chore Provider
   */
  "372500000X": "372500000X",

  /**
   * Adult Companion
   */
  "372600000X": "372600000X",

  /**
   * Day Training/Habilitation Specialist
   */
  "373H00000X": "373H00000X",

  /**
   * Technician
   */
  "374700000X": "374700000X",

  /**
   * Attendant Care Provider
   */
  "3747A0650X": "3747A0650X",

  /**
   * Personal Care Attendant
   */
  "3747P1801X": "3747P1801X",

  /**
   * Doula
   */
  "374J00000X": "374J00000X",

  /**
   * Religious Nonmedical Practitioner
   */
  "374K00000X": "374K00000X",

  /**
   * Religious Nonmedical Nursing Personnel
   */
  "374T00000X": "374T00000X",

  /**
   * Home Health Aide
   */
  "374U00000X": "374U00000X",

  /**
   * Nursing Home Administrator
   */
  "376G00000X": "376G00000X",

  /**
   * Homemaker
   */
  "376J00000X": "376J00000X",

  /**
   * Nurse's Aide
   */
  "376K00000X": "376K00000X",

  /**
   * Respite Care
   */
  "385H00000X": "385H00000X",

  /**
   * Respite Care Camp
   */
  "385HR2050X": "385HR2050X",

  /**
   * Child Mental Illness Respite Care
   */
  "385HR2055X": "385HR2055X",

  /**
   * Child Intellectual and/or Developmental Disabilities Respite Care
   */
  "385HR2060X": "385HR2060X",

  /**
   * Child Physical Disabilities Respite Care
   */
  "385HR2065X": "385HR2065X",

  /**
   * Student in an Organized Health Care Education/Training Program
   */
  "390200000X": "390200000X",

  /**
   * Prevention Professional
   */
  "405300000X": "405300000X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NUCCProviderCodesCode =
  typeof NUCCProviderCodesCode[keyof typeof NUCCProviderCodesCode];
