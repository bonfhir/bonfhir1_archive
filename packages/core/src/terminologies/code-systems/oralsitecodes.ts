/**
 * This value set includes a smattering of FDI oral site codes.
 * http://terminology.hl7.org/CodeSystem/ex-tooth
 */
export const OralSiteCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "tooth",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-tooth defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">0<a name="tooth-0"> </a></td><td>Oral cavity</td><td>Oral cavity.</td></tr><tr><td style="white-space:nowrap">1<a name="tooth-1"> </a></td><td>1</td><td>Permanent teeth Maxillary right.</td></tr><tr><td style="white-space:nowrap">2<a name="tooth-2"> </a></td><td>2</td><td>Permanent teeth Maxillary left.</td></tr><tr><td style="white-space:nowrap">3<a name="tooth-3"> </a></td><td>3</td><td>Permanent teeth Mandibular right.</td></tr><tr><td style="white-space:nowrap">4<a name="tooth-4"> </a></td><td>4</td><td>Permanent teeth Mandibular left.</td></tr><tr><td style="white-space:nowrap">5<a name="tooth-5"> </a></td><td>5</td><td>Deciduous teeth Maxillary right.</td></tr><tr><td style="white-space:nowrap">6<a name="tooth-6"> </a></td><td>6</td><td>Deciduous teeth Maxillary left.</td></tr><tr><td style="white-space:nowrap">7<a name="tooth-7"> </a></td><td>7</td><td>Deciduous teeth Mandibular right.</td></tr><tr><td style="white-space:nowrap">8<a name="tooth-8"> </a></td><td>8</td><td>Deciduous teeth Mandibular left.</td></tr><tr><td style="white-space:nowrap">11<a name="tooth-11"> </a></td><td>11</td><td>Upper Right Tooth 1 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">12<a name="tooth-12"> </a></td><td>12</td><td>Upper Right Tooth 2 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">13<a name="tooth-13"> </a></td><td>13</td><td>Upper Right Tooth 3 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">14<a name="tooth-14"> </a></td><td>14</td><td>Upper Right Tooth 4 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">15<a name="tooth-15"> </a></td><td>15</td><td>Upper Right Tooth 5 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">16<a name="tooth-16"> </a></td><td>16</td><td>Upper Right Tooth 6 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">17<a name="tooth-17"> </a></td><td>17</td><td>Upper Right Tooth 7 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">18<a name="tooth-18"> </a></td><td>18</td><td>Upper Right Tooth 8 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">21<a name="tooth-21"> </a></td><td>21</td><td>Upper Left Tooth 1 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">22<a name="tooth-22"> </a></td><td>22</td><td>Upper Left Tooth 2 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">23<a name="tooth-23"> </a></td><td>23</td><td>Upper Left Tooth 3 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">24<a name="tooth-24"> </a></td><td>24</td><td>Upper Left Tooth 4 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">25<a name="tooth-25"> </a></td><td>25</td><td>Upper Left Tooth 5 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">26<a name="tooth-26"> </a></td><td>26</td><td>Upper Left Tooth 6 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">27<a name="tooth-27"> </a></td><td>27</td><td>Upper Left Tooth 7 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">28<a name="tooth-28"> </a></td><td>28</td><td>Upper Left Tooth 8 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">31<a name="tooth-31"> </a></td><td>31</td><td>Lower Left Tooth 1 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">32<a name="tooth-32"> </a></td><td>32</td><td>Lower Left Tooth 2 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">33<a name="tooth-33"> </a></td><td>33</td><td>Lower Left Tooth 3 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">34<a name="tooth-34"> </a></td><td>34</td><td>Lower Left Tooth 4 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">35<a name="tooth-35"> </a></td><td>35</td><td>Lower Left Tooth 5 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">36<a name="tooth-36"> </a></td><td>36</td><td>Lower Left Tooth 6 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">37<a name="tooth-37"> </a></td><td>37</td><td>Lower Left Tooth 7 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">38<a name="tooth-38"> </a></td><td>38</td><td>Lower Left Tooth 8 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">41<a name="tooth-41"> </a></td><td>41</td><td>Lower Right Tooth 1 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">42<a name="tooth-42"> </a></td><td>42</td><td>Lower Right Tooth 2 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">43<a name="tooth-43"> </a></td><td>43</td><td>Lower Right Tooth 3 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">44<a name="tooth-44"> </a></td><td>44</td><td>Lower Right Tooth 4 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">45<a name="tooth-45"> </a></td><td>45</td><td>Lower Right Tooth 5 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">46<a name="tooth-46"> </a></td><td>46</td><td>Lower Right Tooth 6 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">47<a name="tooth-47"> </a></td><td>47</td><td>Lower Right Tooth 7 from the central axis, permanent dentition.</td></tr><tr><td style="white-space:nowrap">48<a name="tooth-48"> </a></td><td>48</td><td>Lower Right Tooth 8 from the central axis, permanent dentition.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-tooth",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1152",
    },
  ],
  version: "4.3.0",
  name: "OralSiteCodes",
  title: "Oral Site Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes a smattering of FDI oral site codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "0", display: "Oral cavity", definition: "Oral cavity." },
    { code: "1", display: "1", definition: "Permanent teeth Maxillary right." },
    { code: "2", display: "2", definition: "Permanent teeth Maxillary left." },
    {
      code: "3",
      display: "3",
      definition: "Permanent teeth Mandibular right.",
    },
    { code: "4", display: "4", definition: "Permanent teeth Mandibular left." },
    { code: "5", display: "5", definition: "Deciduous teeth Maxillary right." },
    { code: "6", display: "6", definition: "Deciduous teeth Maxillary left." },
    {
      code: "7",
      display: "7",
      definition: "Deciduous teeth Mandibular right.",
    },
    { code: "8", display: "8", definition: "Deciduous teeth Mandibular left." },
    {
      code: "11",
      display: "11",
      definition:
        "Upper Right Tooth 1 from the central axis, permanent dentition.",
    },
    {
      code: "12",
      display: "12",
      definition:
        "Upper Right Tooth 2 from the central axis, permanent dentition.",
    },
    {
      code: "13",
      display: "13",
      definition:
        "Upper Right Tooth 3 from the central axis, permanent dentition.",
    },
    {
      code: "14",
      display: "14",
      definition:
        "Upper Right Tooth 4 from the central axis, permanent dentition.",
    },
    {
      code: "15",
      display: "15",
      definition:
        "Upper Right Tooth 5 from the central axis, permanent dentition.",
    },
    {
      code: "16",
      display: "16",
      definition:
        "Upper Right Tooth 6 from the central axis, permanent dentition.",
    },
    {
      code: "17",
      display: "17",
      definition:
        "Upper Right Tooth 7 from the central axis, permanent dentition.",
    },
    {
      code: "18",
      display: "18",
      definition:
        "Upper Right Tooth 8 from the central axis, permanent dentition.",
    },
    {
      code: "21",
      display: "21",
      definition:
        "Upper Left Tooth 1 from the central axis, permanent dentition.",
    },
    {
      code: "22",
      display: "22",
      definition:
        "Upper Left Tooth 2 from the central axis, permanent dentition.",
    },
    {
      code: "23",
      display: "23",
      definition:
        "Upper Left Tooth 3 from the central axis, permanent dentition.",
    },
    {
      code: "24",
      display: "24",
      definition:
        "Upper Left Tooth 4 from the central axis, permanent dentition.",
    },
    {
      code: "25",
      display: "25",
      definition:
        "Upper Left Tooth 5 from the central axis, permanent dentition.",
    },
    {
      code: "26",
      display: "26",
      definition:
        "Upper Left Tooth 6 from the central axis, permanent dentition.",
    },
    {
      code: "27",
      display: "27",
      definition:
        "Upper Left Tooth 7 from the central axis, permanent dentition.",
    },
    {
      code: "28",
      display: "28",
      definition:
        "Upper Left Tooth 8 from the central axis, permanent dentition.",
    },
    {
      code: "31",
      display: "31",
      definition:
        "Lower Left Tooth 1 from the central axis, permanent dentition.",
    },
    {
      code: "32",
      display: "32",
      definition:
        "Lower Left Tooth 2 from the central axis, permanent dentition.",
    },
    {
      code: "33",
      display: "33",
      definition:
        "Lower Left Tooth 3 from the central axis, permanent dentition.",
    },
    {
      code: "34",
      display: "34",
      definition:
        "Lower Left Tooth 4 from the central axis, permanent dentition.",
    },
    {
      code: "35",
      display: "35",
      definition:
        "Lower Left Tooth 5 from the central axis, permanent dentition.",
    },
    {
      code: "36",
      display: "36",
      definition:
        "Lower Left Tooth 6 from the central axis, permanent dentition.",
    },
    {
      code: "37",
      display: "37",
      definition:
        "Lower Left Tooth 7 from the central axis, permanent dentition.",
    },
    {
      code: "38",
      display: "38",
      definition:
        "Lower Left Tooth 8 from the central axis, permanent dentition.",
    },
    {
      code: "41",
      display: "41",
      definition:
        "Lower Right Tooth 1 from the central axis, permanent dentition.",
    },
    {
      code: "42",
      display: "42",
      definition:
        "Lower Right Tooth 2 from the central axis, permanent dentition.",
    },
    {
      code: "43",
      display: "43",
      definition:
        "Lower Right Tooth 3 from the central axis, permanent dentition.",
    },
    {
      code: "44",
      display: "44",
      definition:
        "Lower Right Tooth 4 from the central axis, permanent dentition.",
    },
    {
      code: "45",
      display: "45",
      definition:
        "Lower Right Tooth 5 from the central axis, permanent dentition.",
    },
    {
      code: "46",
      display: "46",
      definition:
        "Lower Right Tooth 6 from the central axis, permanent dentition.",
    },
    {
      code: "47",
      display: "47",
      definition:
        "Lower Right Tooth 7 from the central axis, permanent dentition.",
    },
    {
      code: "48",
      display: "48",
      definition:
        "Lower Right Tooth 8 from the central axis, permanent dentition.",
    },
  ],
};
