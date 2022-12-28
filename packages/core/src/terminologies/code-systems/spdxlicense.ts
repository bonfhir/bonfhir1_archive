export const SPDXLicense = {
  resourceType: "CodeSystem",
  id: "spdx-license",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>SPDXLicense</h2>\n      \n      <div>\n        \n        <p>The license that applies to an Implementation Guide (using an SPDX license Identifiers, or \'not-open-source\'). The binding is required but new SPDX license Identifiers are allowed to be used (https://spdx.org/licenses/).</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/spdx-license defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">not-open-source\n            \n            <a name="spdx-license-not-open-source"> </a>\n          \n          </td>\n          \n          <td>Not open source</td>\n          \n          <td>Not an open source license.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">0BSD\n            \n            <a name="spdx-license-0BSD"> </a>\n          \n          </td>\n          \n          <td>BSD Zero Clause License</td>\n          \n          <td>BSD Zero Clause License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AAL\n            \n            <a name="spdx-license-AAL"> </a>\n          \n          </td>\n          \n          <td>Attribution Assurance License</td>\n          \n          <td>Attribution Assurance License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Abstyles\n            \n            <a name="spdx-license-Abstyles"> </a>\n          \n          </td>\n          \n          <td>Abstyles License</td>\n          \n          <td>Abstyles License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Adobe-2006\n            \n            <a name="spdx-license-Adobe-2006"> </a>\n          \n          </td>\n          \n          <td>Adobe Systems Incorporated Source Code License Agreement</td>\n          \n          <td>Adobe Systems Incorporated Source Code License Agreement.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Adobe-Glyph\n            \n            <a name="spdx-license-Adobe-Glyph"> </a>\n          \n          </td>\n          \n          <td>Adobe Glyph List License</td>\n          \n          <td>Adobe Glyph List License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ADSL\n            \n            <a name="spdx-license-ADSL"> </a>\n          \n          </td>\n          \n          <td>Amazon Digital Services License</td>\n          \n          <td>Amazon Digital Services License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AFL-1.1\n            \n            <a name="spdx-license-AFL-1.461"> </a>\n          \n          </td>\n          \n          <td>Academic Free License v1.1</td>\n          \n          <td>Academic Free License v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AFL-1.2\n            \n            <a name="spdx-license-AFL-1.462"> </a>\n          \n          </td>\n          \n          <td>Academic Free License v1.2</td>\n          \n          <td>Academic Free License v1.2.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AFL-2.0\n            \n            <a name="spdx-license-AFL-2.460"> </a>\n          \n          </td>\n          \n          <td>Academic Free License v2.0</td>\n          \n          <td>Academic Free License v2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AFL-2.1\n            \n            <a name="spdx-license-AFL-2.461"> </a>\n          \n          </td>\n          \n          <td>Academic Free License v2.1</td>\n          \n          <td>Academic Free License v2.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AFL-3.0\n            \n            <a name="spdx-license-AFL-3.460"> </a>\n          \n          </td>\n          \n          <td>Academic Free License v3.0</td>\n          \n          <td>Academic Free License v3.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Afmparse\n            \n            <a name="spdx-license-Afmparse"> </a>\n          \n          </td>\n          \n          <td>Afmparse License</td>\n          \n          <td>Afmparse License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AGPL-1.0-only\n            \n            <a name="spdx-license-AGPL-1.460-only"> </a>\n          \n          </td>\n          \n          <td>Affero General Public License v1.0 only</td>\n          \n          <td>Affero General Public License v1.0 only.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AGPL-1.0-or-later\n            \n            <a name="spdx-license-AGPL-1.460-or-later"> </a>\n          \n          </td>\n          \n          <td>Affero General Public License v1.0 or later</td>\n          \n          <td>Affero General Public License v1.0 or later.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AGPL-3.0-only\n            \n            <a name="spdx-license-AGPL-3.460-only"> </a>\n          \n          </td>\n          \n          <td>GNU Affero General Public License v3.0 only</td>\n          \n          <td>GNU Affero General Public License v3.0 only.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AGPL-3.0-or-later\n            \n            <a name="spdx-license-AGPL-3.460-or-later"> </a>\n          \n          </td>\n          \n          <td>GNU Affero General Public License v3.0 or later</td>\n          \n          <td>GNU Affero General Public License v3.0 or later.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Aladdin\n            \n            <a name="spdx-license-Aladdin"> </a>\n          \n          </td>\n          \n          <td>Aladdin Free Public License</td>\n          \n          <td>Aladdin Free Public License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AMDPLPA\n            \n            <a name="spdx-license-AMDPLPA"> </a>\n          \n          </td>\n          \n          <td>AMD\'s plpa_map.c License</td>\n          \n          <td>AMD\'s plpa_map.c License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AML\n            \n            <a name="spdx-license-AML"> </a>\n          \n          </td>\n          \n          <td>Apple MIT License</td>\n          \n          <td>Apple MIT License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">AMPAS\n            \n            <a name="spdx-license-AMPAS"> </a>\n          \n          </td>\n          \n          <td>Academy of Motion Picture Arts and Sciences BSD</td>\n          \n          <td>Academy of Motion Picture Arts and Sciences BSD.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ANTLR-PD\n            \n            <a name="spdx-license-ANTLR-PD"> </a>\n          \n          </td>\n          \n          <td>ANTLR Software Rights Notice</td>\n          \n          <td>ANTLR Software Rights Notice.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Apache-1.0\n            \n            <a name="spdx-license-Apache-1.460"> </a>\n          \n          </td>\n          \n          <td>Apache License 1.0</td>\n          \n          <td>Apache License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Apache-1.1\n            \n            <a name="spdx-license-Apache-1.461"> </a>\n          \n          </td>\n          \n          <td>Apache License 1.1</td>\n          \n          <td>Apache License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Apache-2.0\n            \n            <a name="spdx-license-Apache-2.460"> </a>\n          \n          </td>\n          \n          <td>Apache License 2.0</td>\n          \n          <td>Apache License 2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">APAFML\n            \n            <a name="spdx-license-APAFML"> </a>\n          \n          </td>\n          \n          <td>Adobe Postscript AFM License</td>\n          \n          <td>Adobe Postscript AFM License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">APL-1.0\n            \n            <a name="spdx-license-APL-1.460"> </a>\n          \n          </td>\n          \n          <td>Adaptive Public License 1.0</td>\n          \n          <td>Adaptive Public License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">APSL-1.0\n            \n            <a name="spdx-license-APSL-1.460"> </a>\n          \n          </td>\n          \n          <td>Apple Public Source License 1.0</td>\n          \n          <td>Apple Public Source License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">APSL-1.1\n            \n            <a name="spdx-license-APSL-1.461"> </a>\n          \n          </td>\n          \n          <td>Apple Public Source License 1.1</td>\n          \n          <td>Apple Public Source License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">APSL-1.2\n            \n            <a name="spdx-license-APSL-1.462"> </a>\n          \n          </td>\n          \n          <td>Apple Public Source License 1.2</td>\n          \n          <td>Apple Public Source License 1.2.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">APSL-2.0\n            \n            <a name="spdx-license-APSL-2.460"> </a>\n          \n          </td>\n          \n          <td>Apple Public Source License 2.0</td>\n          \n          <td>Apple Public Source License 2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Artistic-1.0-cl8\n            \n            <a name="spdx-license-Artistic-1.460-cl8"> </a>\n          \n          </td>\n          \n          <td>Artistic License 1.0 w/clause 8</td>\n          \n          <td>Artistic License 1.0 w/clause 8.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Artistic-1.0-Perl\n            \n            <a name="spdx-license-Artistic-1.460-Perl"> </a>\n          \n          </td>\n          \n          <td>Artistic License 1.0 (Perl)</td>\n          \n          <td>Artistic License 1.0 (Perl).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Artistic-1.0\n            \n            <a name="spdx-license-Artistic-1.460"> </a>\n          \n          </td>\n          \n          <td>Artistic License 1.0</td>\n          \n          <td>Artistic License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Artistic-2.0\n            \n            <a name="spdx-license-Artistic-2.460"> </a>\n          \n          </td>\n          \n          <td>Artistic License 2.0</td>\n          \n          <td>Artistic License 2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Bahyph\n            \n            <a name="spdx-license-Bahyph"> </a>\n          \n          </td>\n          \n          <td>Bahyph License</td>\n          \n          <td>Bahyph License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Barr\n            \n            <a name="spdx-license-Barr"> </a>\n          \n          </td>\n          \n          <td>Barr License</td>\n          \n          <td>Barr License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Beerware\n            \n            <a name="spdx-license-Beerware"> </a>\n          \n          </td>\n          \n          <td>Beerware License</td>\n          \n          <td>Beerware License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BitTorrent-1.0\n            \n            <a name="spdx-license-BitTorrent-1.460"> </a>\n          \n          </td>\n          \n          <td>BitTorrent Open Source License v1.0</td>\n          \n          <td>BitTorrent Open Source License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BitTorrent-1.1\n            \n            <a name="spdx-license-BitTorrent-1.461"> </a>\n          \n          </td>\n          \n          <td>BitTorrent Open Source License v1.1</td>\n          \n          <td>BitTorrent Open Source License v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Borceux\n            \n            <a name="spdx-license-Borceux"> </a>\n          \n          </td>\n          \n          <td>Borceux license</td>\n          \n          <td>Borceux license.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-1-Clause\n            \n            <a name="spdx-license-BSD-1-Clause"> </a>\n          \n          </td>\n          \n          <td>BSD 1-Clause License</td>\n          \n          <td>BSD 1-Clause License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-2-Clause-FreeBSD\n            \n            <a name="spdx-license-BSD-2-Clause-FreeBSD"> </a>\n          \n          </td>\n          \n          <td>BSD 2-Clause FreeBSD License</td>\n          \n          <td>BSD 2-Clause FreeBSD License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-2-Clause-NetBSD\n            \n            <a name="spdx-license-BSD-2-Clause-NetBSD"> </a>\n          \n          </td>\n          \n          <td>BSD 2-Clause NetBSD License</td>\n          \n          <td>BSD 2-Clause NetBSD License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-2-Clause-Patent\n            \n            <a name="spdx-license-BSD-2-Clause-Patent"> </a>\n          \n          </td>\n          \n          <td>BSD-2-Clause Plus Patent License</td>\n          \n          <td>BSD-2-Clause Plus Patent License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-2-Clause\n            \n            <a name="spdx-license-BSD-2-Clause"> </a>\n          \n          </td>\n          \n          <td>BSD 2-Clause &quot;Simplified&quot; License</td>\n          \n          <td>BSD 2-Clause &quot;Simplified&quot; License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-3-Clause-Attribution\n            \n            <a name="spdx-license-BSD-3-Clause-Attribution"> </a>\n          \n          </td>\n          \n          <td>BSD with attribution</td>\n          \n          <td>BSD with attribution.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-3-Clause-Clear\n            \n            <a name="spdx-license-BSD-3-Clause-Clear"> </a>\n          \n          </td>\n          \n          <td>BSD 3-Clause Clear License</td>\n          \n          <td>BSD 3-Clause Clear License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-3-Clause-LBNL\n            \n            <a name="spdx-license-BSD-3-Clause-LBNL"> </a>\n          \n          </td>\n          \n          <td>Lawrence Berkeley National Labs BSD variant license</td>\n          \n          <td>Lawrence Berkeley National Labs BSD variant license.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-3-Clause-No-Nuclear-License-2014\n            \n            <a name="spdx-license-BSD-3-Clause-No-Nuclear-License-2014"> </a>\n          \n          </td>\n          \n          <td>BSD 3-Clause No Nuclear License 2014</td>\n          \n          <td>BSD 3-Clause No Nuclear License 2014.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-3-Clause-No-Nuclear-License\n            \n            <a name="spdx-license-BSD-3-Clause-No-Nuclear-License"> </a>\n          \n          </td>\n          \n          <td>BSD 3-Clause No Nuclear License</td>\n          \n          <td>BSD 3-Clause No Nuclear License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-3-Clause-No-Nuclear-Warranty\n            \n            <a name="spdx-license-BSD-3-Clause-No-Nuclear-Warranty"> </a>\n          \n          </td>\n          \n          <td>BSD 3-Clause No Nuclear Warranty</td>\n          \n          <td>BSD 3-Clause No Nuclear Warranty.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-3-Clause\n            \n            <a name="spdx-license-BSD-3-Clause"> </a>\n          \n          </td>\n          \n          <td>BSD 3-Clause &quot;New&quot; or &quot;Revised&quot; License</td>\n          \n          <td>BSD 3-Clause &quot;New&quot; or &quot;Revised&quot; License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-4-Clause-UC\n            \n            <a name="spdx-license-BSD-4-Clause-UC"> </a>\n          \n          </td>\n          \n          <td>BSD-4-Clause (University of California-Specific)</td>\n          \n          <td>BSD-4-Clause (University of California-Specific).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-4-Clause\n            \n            <a name="spdx-license-BSD-4-Clause"> </a>\n          \n          </td>\n          \n          <td>BSD 4-Clause &quot;Original&quot; or &quot;Old&quot; License</td>\n          \n          <td>BSD 4-Clause &quot;Original&quot; or &quot;Old&quot; License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-Protection\n            \n            <a name="spdx-license-BSD-Protection"> </a>\n          \n          </td>\n          \n          <td>BSD Protection License</td>\n          \n          <td>BSD Protection License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSD-Source-Code\n            \n            <a name="spdx-license-BSD-Source-Code"> </a>\n          \n          </td>\n          \n          <td>BSD Source Code Attribution</td>\n          \n          <td>BSD Source Code Attribution.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">BSL-1.0\n            \n            <a name="spdx-license-BSL-1.460"> </a>\n          \n          </td>\n          \n          <td>Boost Software License 1.0</td>\n          \n          <td>Boost Software License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">bzip2-1.0.5\n            \n            <a name="spdx-license-bzip2-1.460.465"> </a>\n          \n          </td>\n          \n          <td>bzip2 and libbzip2 License v1.0.5</td>\n          \n          <td>bzip2 and libbzip2 License v1.0.5.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">bzip2-1.0.6\n            \n            <a name="spdx-license-bzip2-1.460.466"> </a>\n          \n          </td>\n          \n          <td>bzip2 and libbzip2 License v1.0.6</td>\n          \n          <td>bzip2 and libbzip2 License v1.0.6.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Caldera\n            \n            <a name="spdx-license-Caldera"> </a>\n          \n          </td>\n          \n          <td>Caldera License</td>\n          \n          <td>Caldera License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CATOSL-1.1\n            \n            <a name="spdx-license-CATOSL-1.461"> </a>\n          \n          </td>\n          \n          <td>Computer Associates Trusted Open Source License 1.1</td>\n          \n          <td>Computer Associates Trusted Open Source License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-1.0\n            \n            <a name="spdx-license-CC-BY-1.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution 1.0 Generic</td>\n          \n          <td>Creative Commons Attribution 1.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-2.0\n            \n            <a name="spdx-license-CC-BY-2.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution 2.0 Generic</td>\n          \n          <td>Creative Commons Attribution 2.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-2.5\n            \n            <a name="spdx-license-CC-BY-2.465"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution 2.5 Generic</td>\n          \n          <td>Creative Commons Attribution 2.5 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-3.0\n            \n            <a name="spdx-license-CC-BY-3.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution 3.0 Unported</td>\n          \n          <td>Creative Commons Attribution 3.0 Unported.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-4.0\n            \n            <a name="spdx-license-CC-BY-4.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution 4.0 International</td>\n          \n          <td>Creative Commons Attribution 4.0 International.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-1.0\n            \n            <a name="spdx-license-CC-BY-NC-1.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial 1.0 Generic</td>\n          \n          <td>Creative Commons Attribution Non Commercial 1.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-2.0\n            \n            <a name="spdx-license-CC-BY-NC-2.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial 2.0 Generic</td>\n          \n          <td>Creative Commons Attribution Non Commercial 2.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-2.5\n            \n            <a name="spdx-license-CC-BY-NC-2.465"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial 2.5 Generic</td>\n          \n          <td>Creative Commons Attribution Non Commercial 2.5 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-3.0\n            \n            <a name="spdx-license-CC-BY-NC-3.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial 3.0 Unported</td>\n          \n          <td>Creative Commons Attribution Non Commercial 3.0 Unported.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-4.0\n            \n            <a name="spdx-license-CC-BY-NC-4.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial 4.0 International</td>\n          \n          <td>Creative Commons Attribution Non Commercial 4.0 International.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-ND-1.0\n            \n            <a name="spdx-license-CC-BY-NC-ND-1.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic</td>\n          \n          <td>Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-ND-2.0\n            \n            <a name="spdx-license-CC-BY-NC-ND-2.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic</td>\n          \n          <td>Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-ND-2.5\n            \n            <a name="spdx-license-CC-BY-NC-ND-2.465"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic</td>\n          \n          <td>Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-ND-3.0\n            \n            <a name="spdx-license-CC-BY-NC-ND-3.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported</td>\n          \n          <td>Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-ND-4.0\n            \n            <a name="spdx-license-CC-BY-NC-ND-4.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial No Derivatives 4.0 International</td>\n          \n          <td>Creative Commons Attribution Non Commercial No Derivatives 4.0 International.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-SA-1.0\n            \n            <a name="spdx-license-CC-BY-NC-SA-1.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial Share Alike 1.0 Generic</td>\n          \n          <td>Creative Commons Attribution Non Commercial Share Alike 1.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-SA-2.0\n            \n            <a name="spdx-license-CC-BY-NC-SA-2.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial Share Alike 2.0 Generic</td>\n          \n          <td>Creative Commons Attribution Non Commercial Share Alike 2.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-SA-2.5\n            \n            <a name="spdx-license-CC-BY-NC-SA-2.465"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial Share Alike 2.5 Generic</td>\n          \n          <td>Creative Commons Attribution Non Commercial Share Alike 2.5 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-SA-3.0\n            \n            <a name="spdx-license-CC-BY-NC-SA-3.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial Share Alike 3.0 Unported</td>\n          \n          <td>Creative Commons Attribution Non Commercial Share Alike 3.0 Unported.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-NC-SA-4.0\n            \n            <a name="spdx-license-CC-BY-NC-SA-4.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Non Commercial Share Alike 4.0 International</td>\n          \n          <td>Creative Commons Attribution Non Commercial Share Alike 4.0 International.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-ND-1.0\n            \n            <a name="spdx-license-CC-BY-ND-1.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution No Derivatives 1.0 Generic</td>\n          \n          <td>Creative Commons Attribution No Derivatives 1.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-ND-2.0\n            \n            <a name="spdx-license-CC-BY-ND-2.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution No Derivatives 2.0 Generic</td>\n          \n          <td>Creative Commons Attribution No Derivatives 2.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-ND-2.5\n            \n            <a name="spdx-license-CC-BY-ND-2.465"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution No Derivatives 2.5 Generic</td>\n          \n          <td>Creative Commons Attribution No Derivatives 2.5 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-ND-3.0\n            \n            <a name="spdx-license-CC-BY-ND-3.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution No Derivatives 3.0 Unported</td>\n          \n          <td>Creative Commons Attribution No Derivatives 3.0 Unported.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-ND-4.0\n            \n            <a name="spdx-license-CC-BY-ND-4.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution No Derivatives 4.0 International</td>\n          \n          <td>Creative Commons Attribution No Derivatives 4.0 International.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-SA-1.0\n            \n            <a name="spdx-license-CC-BY-SA-1.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Share Alike 1.0 Generic</td>\n          \n          <td>Creative Commons Attribution Share Alike 1.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-SA-2.0\n            \n            <a name="spdx-license-CC-BY-SA-2.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Share Alike 2.0 Generic</td>\n          \n          <td>Creative Commons Attribution Share Alike 2.0 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-SA-2.5\n            \n            <a name="spdx-license-CC-BY-SA-2.465"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Share Alike 2.5 Generic</td>\n          \n          <td>Creative Commons Attribution Share Alike 2.5 Generic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-SA-3.0\n            \n            <a name="spdx-license-CC-BY-SA-3.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Share Alike 3.0 Unported</td>\n          \n          <td>Creative Commons Attribution Share Alike 3.0 Unported.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC-BY-SA-4.0\n            \n            <a name="spdx-license-CC-BY-SA-4.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Attribution Share Alike 4.0 International</td>\n          \n          <td>Creative Commons Attribution Share Alike 4.0 International.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CC0-1.0\n            \n            <a name="spdx-license-CC0-1.460"> </a>\n          \n          </td>\n          \n          <td>Creative Commons Zero v1.0 Universal</td>\n          \n          <td>Creative Commons Zero v1.0 Universal.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CDDL-1.0\n            \n            <a name="spdx-license-CDDL-1.460"> </a>\n          \n          </td>\n          \n          <td>Common Development and Distribution License 1.0</td>\n          \n          <td>Common Development and Distribution License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CDDL-1.1\n            \n            <a name="spdx-license-CDDL-1.461"> </a>\n          \n          </td>\n          \n          <td>Common Development and Distribution License 1.1</td>\n          \n          <td>Common Development and Distribution License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CDLA-Permissive-1.0\n            \n            <a name="spdx-license-CDLA-Permissive-1.460"> </a>\n          \n          </td>\n          \n          <td>Community Data License Agreement Permissive 1.0</td>\n          \n          <td>Community Data License Agreement Permissive 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CDLA-Sharing-1.0\n            \n            <a name="spdx-license-CDLA-Sharing-1.460"> </a>\n          \n          </td>\n          \n          <td>Community Data License Agreement Sharing 1.0</td>\n          \n          <td>Community Data License Agreement Sharing 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CECILL-1.0\n            \n            <a name="spdx-license-CECILL-1.460"> </a>\n          \n          </td>\n          \n          <td>CeCILL Free Software License Agreement v1.0</td>\n          \n          <td>CeCILL Free Software License Agreement v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CECILL-1.1\n            \n            <a name="spdx-license-CECILL-1.461"> </a>\n          \n          </td>\n          \n          <td>CeCILL Free Software License Agreement v1.1</td>\n          \n          <td>CeCILL Free Software License Agreement v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CECILL-2.0\n            \n            <a name="spdx-license-CECILL-2.460"> </a>\n          \n          </td>\n          \n          <td>CeCILL Free Software License Agreement v2.0</td>\n          \n          <td>CeCILL Free Software License Agreement v2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CECILL-2.1\n            \n            <a name="spdx-license-CECILL-2.461"> </a>\n          \n          </td>\n          \n          <td>CeCILL Free Software License Agreement v2.1</td>\n          \n          <td>CeCILL Free Software License Agreement v2.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CECILL-B\n            \n            <a name="spdx-license-CECILL-B"> </a>\n          \n          </td>\n          \n          <td>CeCILL-B Free Software License Agreement</td>\n          \n          <td>CeCILL-B Free Software License Agreement.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CECILL-C\n            \n            <a name="spdx-license-CECILL-C"> </a>\n          \n          </td>\n          \n          <td>CeCILL-C Free Software License Agreement</td>\n          \n          <td>CeCILL-C Free Software License Agreement.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ClArtistic\n            \n            <a name="spdx-license-ClArtistic"> </a>\n          \n          </td>\n          \n          <td>Clarified Artistic License</td>\n          \n          <td>Clarified Artistic License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CNRI-Jython\n            \n            <a name="spdx-license-CNRI-Jython"> </a>\n          \n          </td>\n          \n          <td>CNRI Jython License</td>\n          \n          <td>CNRI Jython License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CNRI-Python-GPL-Compatible\n            \n            <a name="spdx-license-CNRI-Python-GPL-Compatible"> </a>\n          \n          </td>\n          \n          <td>CNRI Python Open Source GPL Compatible License Agreement</td>\n          \n          <td>CNRI Python Open Source GPL Compatible License Agreement.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CNRI-Python\n            \n            <a name="spdx-license-CNRI-Python"> </a>\n          \n          </td>\n          \n          <td>CNRI Python License</td>\n          \n          <td>CNRI Python License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Condor-1.1\n            \n            <a name="spdx-license-Condor-1.461"> </a>\n          \n          </td>\n          \n          <td>Condor Public License v1.1</td>\n          \n          <td>Condor Public License v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CPAL-1.0\n            \n            <a name="spdx-license-CPAL-1.460"> </a>\n          \n          </td>\n          \n          <td>Common Public Attribution License 1.0</td>\n          \n          <td>Common Public Attribution License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CPL-1.0\n            \n            <a name="spdx-license-CPL-1.460"> </a>\n          \n          </td>\n          \n          <td>Common Public License 1.0</td>\n          \n          <td>Common Public License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CPOL-1.02\n            \n            <a name="spdx-license-CPOL-1.4602"> </a>\n          \n          </td>\n          \n          <td>Code Project Open License 1.02</td>\n          \n          <td>Code Project Open License 1.02.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Crossword\n            \n            <a name="spdx-license-Crossword"> </a>\n          \n          </td>\n          \n          <td>Crossword License</td>\n          \n          <td>Crossword License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CrystalStacker\n            \n            <a name="spdx-license-CrystalStacker"> </a>\n          \n          </td>\n          \n          <td>CrystalStacker License</td>\n          \n          <td>CrystalStacker License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CUA-OPL-1.0\n            \n            <a name="spdx-license-CUA-OPL-1.460"> </a>\n          \n          </td>\n          \n          <td>CUA Office Public License v1.0</td>\n          \n          <td>CUA Office Public License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Cube\n            \n            <a name="spdx-license-Cube"> </a>\n          \n          </td>\n          \n          <td>Cube License</td>\n          \n          <td>Cube License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">curl\n            \n            <a name="spdx-license-curl"> </a>\n          \n          </td>\n          \n          <td>curl License</td>\n          \n          <td>curl License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D-FSL-1.0\n            \n            <a name="spdx-license-D-FSL-1.460"> </a>\n          \n          </td>\n          \n          <td>Deutsche Freie Software Lizenz</td>\n          \n          <td>Deutsche Freie Software Lizenz.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">diffmark\n            \n            <a name="spdx-license-diffmark"> </a>\n          \n          </td>\n          \n          <td>diffmark license</td>\n          \n          <td>diffmark license.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">DOC\n            \n            <a name="spdx-license-DOC"> </a>\n          \n          </td>\n          \n          <td>DOC License</td>\n          \n          <td>DOC License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Dotseqn\n            \n            <a name="spdx-license-Dotseqn"> </a>\n          \n          </td>\n          \n          <td>Dotseqn License</td>\n          \n          <td>Dotseqn License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">DSDP\n            \n            <a name="spdx-license-DSDP"> </a>\n          \n          </td>\n          \n          <td>DSDP License</td>\n          \n          <td>DSDP License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">dvipdfm\n            \n            <a name="spdx-license-dvipdfm"> </a>\n          \n          </td>\n          \n          <td>dvipdfm License</td>\n          \n          <td>dvipdfm License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ECL-1.0\n            \n            <a name="spdx-license-ECL-1.460"> </a>\n          \n          </td>\n          \n          <td>Educational Community License v1.0</td>\n          \n          <td>Educational Community License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ECL-2.0\n            \n            <a name="spdx-license-ECL-2.460"> </a>\n          \n          </td>\n          \n          <td>Educational Community License v2.0</td>\n          \n          <td>Educational Community License v2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">EFL-1.0\n            \n            <a name="spdx-license-EFL-1.460"> </a>\n          \n          </td>\n          \n          <td>Eiffel Forum License v1.0</td>\n          \n          <td>Eiffel Forum License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">EFL-2.0\n            \n            <a name="spdx-license-EFL-2.460"> </a>\n          \n          </td>\n          \n          <td>Eiffel Forum License v2.0</td>\n          \n          <td>Eiffel Forum License v2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">eGenix\n            \n            <a name="spdx-license-eGenix"> </a>\n          \n          </td>\n          \n          <td>eGenix.com Public License 1.1.0</td>\n          \n          <td>eGenix.com Public License 1.1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Entessa\n            \n            <a name="spdx-license-Entessa"> </a>\n          \n          </td>\n          \n          <td>Entessa Public License v1.0</td>\n          \n          <td>Entessa Public License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">EPL-1.0\n            \n            <a name="spdx-license-EPL-1.460"> </a>\n          \n          </td>\n          \n          <td>Eclipse Public License 1.0</td>\n          \n          <td>Eclipse Public License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">EPL-2.0\n            \n            <a name="spdx-license-EPL-2.460"> </a>\n          \n          </td>\n          \n          <td>Eclipse Public License 2.0</td>\n          \n          <td>Eclipse Public License 2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ErlPL-1.1\n            \n            <a name="spdx-license-ErlPL-1.461"> </a>\n          \n          </td>\n          \n          <td>Erlang Public License v1.1</td>\n          \n          <td>Erlang Public License v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">EUDatagrid\n            \n            <a name="spdx-license-EUDatagrid"> </a>\n          \n          </td>\n          \n          <td>EU DataGrid Software License</td>\n          \n          <td>EU DataGrid Software License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">EUPL-1.0\n            \n            <a name="spdx-license-EUPL-1.460"> </a>\n          \n          </td>\n          \n          <td>European Union Public License 1.0</td>\n          \n          <td>European Union Public License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">EUPL-1.1\n            \n            <a name="spdx-license-EUPL-1.461"> </a>\n          \n          </td>\n          \n          <td>European Union Public License 1.1</td>\n          \n          <td>European Union Public License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">EUPL-1.2\n            \n            <a name="spdx-license-EUPL-1.462"> </a>\n          \n          </td>\n          \n          <td>European Union Public License 1.2</td>\n          \n          <td>European Union Public License 1.2.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Eurosym\n            \n            <a name="spdx-license-Eurosym"> </a>\n          \n          </td>\n          \n          <td>Eurosym License</td>\n          \n          <td>Eurosym License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Fair\n            \n            <a name="spdx-license-Fair"> </a>\n          \n          </td>\n          \n          <td>Fair License</td>\n          \n          <td>Fair License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Frameworx-1.0\n            \n            <a name="spdx-license-Frameworx-1.460"> </a>\n          \n          </td>\n          \n          <td>Frameworx Open License 1.0</td>\n          \n          <td>Frameworx Open License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">FreeImage\n            \n            <a name="spdx-license-FreeImage"> </a>\n          \n          </td>\n          \n          <td>FreeImage Public License v1.0</td>\n          \n          <td>FreeImage Public License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">FSFAP\n            \n            <a name="spdx-license-FSFAP"> </a>\n          \n          </td>\n          \n          <td>FSF All Permissive License</td>\n          \n          <td>FSF All Permissive License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">FSFUL\n            \n            <a name="spdx-license-FSFUL"> </a>\n          \n          </td>\n          \n          <td>FSF Unlimited License</td>\n          \n          <td>FSF Unlimited License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">FSFULLR\n            \n            <a name="spdx-license-FSFULLR"> </a>\n          \n          </td>\n          \n          <td>FSF Unlimited License (with License Retention)</td>\n          \n          <td>FSF Unlimited License (with License Retention).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">FTL\n            \n            <a name="spdx-license-FTL"> </a>\n          \n          </td>\n          \n          <td>Freetype Project License</td>\n          \n          <td>Freetype Project License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GFDL-1.1-only\n            \n            <a name="spdx-license-GFDL-1.461-only"> </a>\n          \n          </td>\n          \n          <td>GNU Free Documentation License v1.1 only</td>\n          \n          <td>GNU Free Documentation License v1.1 only.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GFDL-1.1-or-later\n            \n            <a name="spdx-license-GFDL-1.461-or-later"> </a>\n          \n          </td>\n          \n          <td>GNU Free Documentation License v1.1 or later</td>\n          \n          <td>GNU Free Documentation License v1.1 or later.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GFDL-1.2-only\n            \n            <a name="spdx-license-GFDL-1.462-only"> </a>\n          \n          </td>\n          \n          <td>GNU Free Documentation License v1.2 only</td>\n          \n          <td>GNU Free Documentation License v1.2 only.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GFDL-1.2-or-later\n            \n            <a name="spdx-license-GFDL-1.462-or-later"> </a>\n          \n          </td>\n          \n          <td>GNU Free Documentation License v1.2 or later</td>\n          \n          <td>GNU Free Documentation License v1.2 or later.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GFDL-1.3-only\n            \n            <a name="spdx-license-GFDL-1.463-only"> </a>\n          \n          </td>\n          \n          <td>GNU Free Documentation License v1.3 only</td>\n          \n          <td>GNU Free Documentation License v1.3 only.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GFDL-1.3-or-later\n            \n            <a name="spdx-license-GFDL-1.463-or-later"> </a>\n          \n          </td>\n          \n          <td>GNU Free Documentation License v1.3 or later</td>\n          \n          <td>GNU Free Documentation License v1.3 or later.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Giftware\n            \n            <a name="spdx-license-Giftware"> </a>\n          \n          </td>\n          \n          <td>Giftware License</td>\n          \n          <td>Giftware License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GL2PS\n            \n            <a name="spdx-license-GL2PS"> </a>\n          \n          </td>\n          \n          <td>GL2PS License</td>\n          \n          <td>GL2PS License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Glide\n            \n            <a name="spdx-license-Glide"> </a>\n          \n          </td>\n          \n          <td>3dfx Glide License</td>\n          \n          <td>3dfx Glide License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Glulxe\n            \n            <a name="spdx-license-Glulxe"> </a>\n          \n          </td>\n          \n          <td>Glulxe License</td>\n          \n          <td>Glulxe License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">gnuplot\n            \n            <a name="spdx-license-gnuplot"> </a>\n          \n          </td>\n          \n          <td>gnuplot License</td>\n          \n          <td>gnuplot License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GPL-1.0-only\n            \n            <a name="spdx-license-GPL-1.460-only"> </a>\n          \n          </td>\n          \n          <td>GNU General Public License v1.0 only</td>\n          \n          <td>GNU General Public License v1.0 only.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GPL-1.0-or-later\n            \n            <a name="spdx-license-GPL-1.460-or-later"> </a>\n          \n          </td>\n          \n          <td>GNU General Public License v1.0 or later</td>\n          \n          <td>GNU General Public License v1.0 or later.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GPL-2.0-only\n            \n            <a name="spdx-license-GPL-2.460-only"> </a>\n          \n          </td>\n          \n          <td>GNU General Public License v2.0 only</td>\n          \n          <td>GNU General Public License v2.0 only.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GPL-2.0-or-later\n            \n            <a name="spdx-license-GPL-2.460-or-later"> </a>\n          \n          </td>\n          \n          <td>GNU General Public License v2.0 or later</td>\n          \n          <td>GNU General Public License v2.0 or later.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GPL-3.0-only\n            \n            <a name="spdx-license-GPL-3.460-only"> </a>\n          \n          </td>\n          \n          <td>GNU General Public License v3.0 only</td>\n          \n          <td>GNU General Public License v3.0 only.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">GPL-3.0-or-later\n            \n            <a name="spdx-license-GPL-3.460-or-later"> </a>\n          \n          </td>\n          \n          <td>GNU General Public License v3.0 or later</td>\n          \n          <td>GNU General Public License v3.0 or later.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">gSOAP-1.3b\n            \n            <a name="spdx-license-gSOAP-1.463b"> </a>\n          \n          </td>\n          \n          <td>gSOAP Public License v1.3b</td>\n          \n          <td>gSOAP Public License v1.3b.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">HaskellReport\n            \n            <a name="spdx-license-HaskellReport"> </a>\n          \n          </td>\n          \n          <td>Haskell Language Report License</td>\n          \n          <td>Haskell Language Report License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">HPND\n            \n            <a name="spdx-license-HPND"> </a>\n          \n          </td>\n          \n          <td>Historical Permission Notice and Disclaimer</td>\n          \n          <td>Historical Permission Notice and Disclaimer.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">IBM-pibs\n            \n            <a name="spdx-license-IBM-pibs"> </a>\n          \n          </td>\n          \n          <td>IBM PowerPC Initialization and Boot Software</td>\n          \n          <td>IBM PowerPC Initialization and Boot Software.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ICU\n            \n            <a name="spdx-license-ICU"> </a>\n          \n          </td>\n          \n          <td>ICU License</td>\n          \n          <td>ICU License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">IJG\n            \n            <a name="spdx-license-IJG"> </a>\n          \n          </td>\n          \n          <td>Independent JPEG Group License</td>\n          \n          <td>Independent JPEG Group License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ImageMagick\n            \n            <a name="spdx-license-ImageMagick"> </a>\n          \n          </td>\n          \n          <td>ImageMagick License</td>\n          \n          <td>ImageMagick License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">iMatix\n            \n            <a name="spdx-license-iMatix"> </a>\n          \n          </td>\n          \n          <td>iMatix Standard Function Library Agreement</td>\n          \n          <td>iMatix Standard Function Library Agreement.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Imlib2\n            \n            <a name="spdx-license-Imlib2"> </a>\n          \n          </td>\n          \n          <td>Imlib2 License</td>\n          \n          <td>Imlib2 License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Info-ZIP\n            \n            <a name="spdx-license-Info-ZIP"> </a>\n          \n          </td>\n          \n          <td>Info-ZIP License</td>\n          \n          <td>Info-ZIP License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Intel-ACPI\n            \n            <a name="spdx-license-Intel-ACPI"> </a>\n          \n          </td>\n          \n          <td>Intel ACPI Software License Agreement</td>\n          \n          <td>Intel ACPI Software License Agreement.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Intel\n            \n            <a name="spdx-license-Intel"> </a>\n          \n          </td>\n          \n          <td>Intel Open Source License</td>\n          \n          <td>Intel Open Source License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Interbase-1.0\n            \n            <a name="spdx-license-Interbase-1.460"> </a>\n          \n          </td>\n          \n          <td>Interbase Public License v1.0</td>\n          \n          <td>Interbase Public License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">IPA\n            \n            <a name="spdx-license-IPA"> </a>\n          \n          </td>\n          \n          <td>IPA Font License</td>\n          \n          <td>IPA Font License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">IPL-1.0\n            \n            <a name="spdx-license-IPL-1.460"> </a>\n          \n          </td>\n          \n          <td>IBM Public License v1.0</td>\n          \n          <td>IBM Public License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ISC\n            \n            <a name="spdx-license-ISC"> </a>\n          \n          </td>\n          \n          <td>ISC License</td>\n          \n          <td>ISC License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">JasPer-2.0\n            \n            <a name="spdx-license-JasPer-2.460"> </a>\n          \n          </td>\n          \n          <td>JasPer License</td>\n          \n          <td>JasPer License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">JSON\n            \n            <a name="spdx-license-JSON"> </a>\n          \n          </td>\n          \n          <td>JSON License</td>\n          \n          <td>JSON License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LAL-1.2\n            \n            <a name="spdx-license-LAL-1.462"> </a>\n          \n          </td>\n          \n          <td>Licence Art Libre 1.2</td>\n          \n          <td>Licence Art Libre 1.2.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LAL-1.3\n            \n            <a name="spdx-license-LAL-1.463"> </a>\n          \n          </td>\n          \n          <td>Licence Art Libre 1.3</td>\n          \n          <td>Licence Art Libre 1.3.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Latex2e\n            \n            <a name="spdx-license-Latex2e"> </a>\n          \n          </td>\n          \n          <td>Latex2e License</td>\n          \n          <td>Latex2e License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Leptonica\n            \n            <a name="spdx-license-Leptonica"> </a>\n          \n          </td>\n          \n          <td>Leptonica License</td>\n          \n          <td>Leptonica License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LGPL-2.0-only\n            \n            <a name="spdx-license-LGPL-2.460-only"> </a>\n          \n          </td>\n          \n          <td>GNU Library General Public License v2 only</td>\n          \n          <td>GNU Library General Public License v2 only.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LGPL-2.0-or-later\n            \n            <a name="spdx-license-LGPL-2.460-or-later"> </a>\n          \n          </td>\n          \n          <td>GNU Library General Public License v2 or later</td>\n          \n          <td>GNU Library General Public License v2 or later.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LGPL-2.1-only\n            \n            <a name="spdx-license-LGPL-2.461-only"> </a>\n          \n          </td>\n          \n          <td>GNU Lesser General Public License v2.1 only</td>\n          \n          <td>GNU Lesser General Public License v2.1 only.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LGPL-2.1-or-later\n            \n            <a name="spdx-license-LGPL-2.461-or-later"> </a>\n          \n          </td>\n          \n          <td>GNU Lesser General Public License v2.1 or later</td>\n          \n          <td>GNU Lesser General Public License v2.1 or later.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LGPL-3.0-only\n            \n            <a name="spdx-license-LGPL-3.460-only"> </a>\n          \n          </td>\n          \n          <td>GNU Lesser General Public License v3.0 only</td>\n          \n          <td>GNU Lesser General Public License v3.0 only.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LGPL-3.0-or-later\n            \n            <a name="spdx-license-LGPL-3.460-or-later"> </a>\n          \n          </td>\n          \n          <td>GNU Lesser General Public License v3.0 or later</td>\n          \n          <td>GNU Lesser General Public License v3.0 or later.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LGPLLR\n            \n            <a name="spdx-license-LGPLLR"> </a>\n          \n          </td>\n          \n          <td>Lesser General Public License For Linguistic Resources</td>\n          \n          <td>Lesser General Public License For Linguistic Resources.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Libpng\n            \n            <a name="spdx-license-Libpng"> </a>\n          \n          </td>\n          \n          <td>libpng License</td>\n          \n          <td>libpng License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">libtiff\n            \n            <a name="spdx-license-libtiff"> </a>\n          \n          </td>\n          \n          <td>libtiff License</td>\n          \n          <td>libtiff License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LiLiQ-P-1.1\n            \n            <a name="spdx-license-LiLiQ-P-1.461"> </a>\n          \n          </td>\n          \n          <td>Licence Libre du Québec – Permissive version 1.1</td>\n          \n          <td>Licence Libre du Québec – Permissive version 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LiLiQ-R-1.1\n            \n            <a name="spdx-license-LiLiQ-R-1.461"> </a>\n          \n          </td>\n          \n          <td>Licence Libre du Québec – Réciprocité version 1.1</td>\n          \n          <td>Licence Libre du Québec – Réciprocité version 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LiLiQ-Rplus-1.1\n            \n            <a name="spdx-license-LiLiQ-Rplus-1.461"> </a>\n          \n          </td>\n          \n          <td>Licence Libre du Québec – Réciprocité forte version 1.1</td>\n          \n          <td>Licence Libre du Québec – Réciprocité forte version 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Linux-OpenIB\n            \n            <a name="spdx-license-Linux-OpenIB"> </a>\n          \n          </td>\n          \n          <td>Linux Kernel Variant of OpenIB.org license</td>\n          \n          <td>Linux Kernel Variant of OpenIB.org license.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LPL-1.0\n            \n            <a name="spdx-license-LPL-1.460"> </a>\n          \n          </td>\n          \n          <td>Lucent Public License Version 1.0</td>\n          \n          <td>Lucent Public License Version 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LPL-1.02\n            \n            <a name="spdx-license-LPL-1.4602"> </a>\n          \n          </td>\n          \n          <td>Lucent Public License v1.02</td>\n          \n          <td>Lucent Public License v1.02.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LPPL-1.0\n            \n            <a name="spdx-license-LPPL-1.460"> </a>\n          \n          </td>\n          \n          <td>LaTeX Project Public License v1.0</td>\n          \n          <td>LaTeX Project Public License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LPPL-1.1\n            \n            <a name="spdx-license-LPPL-1.461"> </a>\n          \n          </td>\n          \n          <td>LaTeX Project Public License v1.1</td>\n          \n          <td>LaTeX Project Public License v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LPPL-1.2\n            \n            <a name="spdx-license-LPPL-1.462"> </a>\n          \n          </td>\n          \n          <td>LaTeX Project Public License v1.2</td>\n          \n          <td>LaTeX Project Public License v1.2.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LPPL-1.3a\n            \n            <a name="spdx-license-LPPL-1.463a"> </a>\n          \n          </td>\n          \n          <td>LaTeX Project Public License v1.3a</td>\n          \n          <td>LaTeX Project Public License v1.3a.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">LPPL-1.3c\n            \n            <a name="spdx-license-LPPL-1.463c"> </a>\n          \n          </td>\n          \n          <td>LaTeX Project Public License v1.3c</td>\n          \n          <td>LaTeX Project Public License v1.3c.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MakeIndex\n            \n            <a name="spdx-license-MakeIndex"> </a>\n          \n          </td>\n          \n          <td>MakeIndex License</td>\n          \n          <td>MakeIndex License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MirOS\n            \n            <a name="spdx-license-MirOS"> </a>\n          \n          </td>\n          \n          <td>MirOS License</td>\n          \n          <td>MirOS License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MIT-0\n            \n            <a name="spdx-license-MIT-0"> </a>\n          \n          </td>\n          \n          <td>MIT No Attribution</td>\n          \n          <td>MIT No Attribution.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MIT-advertising\n            \n            <a name="spdx-license-MIT-advertising"> </a>\n          \n          </td>\n          \n          <td>Enlightenment License (e16)</td>\n          \n          <td>Enlightenment License (e16).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MIT-CMU\n            \n            <a name="spdx-license-MIT-CMU"> </a>\n          \n          </td>\n          \n          <td>CMU License</td>\n          \n          <td>CMU License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MIT-enna\n            \n            <a name="spdx-license-MIT-enna"> </a>\n          \n          </td>\n          \n          <td>enna License</td>\n          \n          <td>enna License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MIT-feh\n            \n            <a name="spdx-license-MIT-feh"> </a>\n          \n          </td>\n          \n          <td>feh License</td>\n          \n          <td>feh License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MIT\n            \n            <a name="spdx-license-MIT"> </a>\n          \n          </td>\n          \n          <td>MIT License</td>\n          \n          <td>MIT License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MITNFA\n            \n            <a name="spdx-license-MITNFA"> </a>\n          \n          </td>\n          \n          <td>MIT +no-false-attribs license</td>\n          \n          <td>MIT +no-false-attribs license.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Motosoto\n            \n            <a name="spdx-license-Motosoto"> </a>\n          \n          </td>\n          \n          <td>Motosoto License</td>\n          \n          <td>Motosoto License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">mpich2\n            \n            <a name="spdx-license-mpich2"> </a>\n          \n          </td>\n          \n          <td>mpich2 License</td>\n          \n          <td>mpich2 License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MPL-1.0\n            \n            <a name="spdx-license-MPL-1.460"> </a>\n          \n          </td>\n          \n          <td>Mozilla Public License 1.0</td>\n          \n          <td>Mozilla Public License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MPL-1.1\n            \n            <a name="spdx-license-MPL-1.461"> </a>\n          \n          </td>\n          \n          <td>Mozilla Public License 1.1</td>\n          \n          <td>Mozilla Public License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MPL-2.0-no-copyleft-exception\n            \n            <a name="spdx-license-MPL-2.460-no-copyleft-exception"> </a>\n          \n          </td>\n          \n          <td>Mozilla Public License 2.0 (no copyleft exception)</td>\n          \n          <td>Mozilla Public License 2.0 (no copyleft exception).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MPL-2.0\n            \n            <a name="spdx-license-MPL-2.460"> </a>\n          \n          </td>\n          \n          <td>Mozilla Public License 2.0</td>\n          \n          <td>Mozilla Public License 2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MS-PL\n            \n            <a name="spdx-license-MS-PL"> </a>\n          \n          </td>\n          \n          <td>Microsoft Public License</td>\n          \n          <td>Microsoft Public License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MS-RL\n            \n            <a name="spdx-license-MS-RL"> </a>\n          \n          </td>\n          \n          <td>Microsoft Reciprocal License</td>\n          \n          <td>Microsoft Reciprocal License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">MTLL\n            \n            <a name="spdx-license-MTLL"> </a>\n          \n          </td>\n          \n          <td>Matrix Template Library License</td>\n          \n          <td>Matrix Template Library License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Multics\n            \n            <a name="spdx-license-Multics"> </a>\n          \n          </td>\n          \n          <td>Multics License</td>\n          \n          <td>Multics License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Mup\n            \n            <a name="spdx-license-Mup"> </a>\n          \n          </td>\n          \n          <td>Mup License</td>\n          \n          <td>Mup License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NASA-1.3\n            \n            <a name="spdx-license-NASA-1.463"> </a>\n          \n          </td>\n          \n          <td>NASA Open Source Agreement 1.3</td>\n          \n          <td>NASA Open Source Agreement 1.3.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Naumen\n            \n            <a name="spdx-license-Naumen"> </a>\n          \n          </td>\n          \n          <td>Naumen Public License</td>\n          \n          <td>Naumen Public License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NBPL-1.0\n            \n            <a name="spdx-license-NBPL-1.460"> </a>\n          \n          </td>\n          \n          <td>Net Boolean Public License v1</td>\n          \n          <td>Net Boolean Public License v1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NCSA\n            \n            <a name="spdx-license-NCSA"> </a>\n          \n          </td>\n          \n          <td>University of Illinois/NCSA Open Source License</td>\n          \n          <td>University of Illinois/NCSA Open Source License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Net-SNMP\n            \n            <a name="spdx-license-Net-SNMP"> </a>\n          \n          </td>\n          \n          <td>Net-SNMP License</td>\n          \n          <td>Net-SNMP License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NetCDF\n            \n            <a name="spdx-license-NetCDF"> </a>\n          \n          </td>\n          \n          <td>NetCDF license</td>\n          \n          <td>NetCDF license.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Newsletr\n            \n            <a name="spdx-license-Newsletr"> </a>\n          \n          </td>\n          \n          <td>Newsletr License</td>\n          \n          <td>Newsletr License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NGPL\n            \n            <a name="spdx-license-NGPL"> </a>\n          \n          </td>\n          \n          <td>Nethack General Public License</td>\n          \n          <td>Nethack General Public License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NLOD-1.0\n            \n            <a name="spdx-license-NLOD-1.460"> </a>\n          \n          </td>\n          \n          <td>Norwegian Licence for Open Government Data</td>\n          \n          <td>Norwegian Licence for Open Government Data.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NLPL\n            \n            <a name="spdx-license-NLPL"> </a>\n          \n          </td>\n          \n          <td>No Limit Public License</td>\n          \n          <td>No Limit Public License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Nokia\n            \n            <a name="spdx-license-Nokia"> </a>\n          \n          </td>\n          \n          <td>Nokia Open Source License</td>\n          \n          <td>Nokia Open Source License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NOSL\n            \n            <a name="spdx-license-NOSL"> </a>\n          \n          </td>\n          \n          <td>Netizen Open Source License</td>\n          \n          <td>Netizen Open Source License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Noweb\n            \n            <a name="spdx-license-Noweb"> </a>\n          \n          </td>\n          \n          <td>Noweb License</td>\n          \n          <td>Noweb License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NPL-1.0\n            \n            <a name="spdx-license-NPL-1.460"> </a>\n          \n          </td>\n          \n          <td>Netscape Public License v1.0</td>\n          \n          <td>Netscape Public License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NPL-1.1\n            \n            <a name="spdx-license-NPL-1.461"> </a>\n          \n          </td>\n          \n          <td>Netscape Public License v1.1</td>\n          \n          <td>Netscape Public License v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NPOSL-3.0\n            \n            <a name="spdx-license-NPOSL-3.460"> </a>\n          \n          </td>\n          \n          <td>Non-Profit Open Software License 3.0</td>\n          \n          <td>Non-Profit Open Software License 3.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NRL\n            \n            <a name="spdx-license-NRL"> </a>\n          \n          </td>\n          \n          <td>NRL License</td>\n          \n          <td>NRL License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">NTP\n            \n            <a name="spdx-license-NTP"> </a>\n          \n          </td>\n          \n          <td>NTP License</td>\n          \n          <td>NTP License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OCCT-PL\n            \n            <a name="spdx-license-OCCT-PL"> </a>\n          \n          </td>\n          \n          <td>Open CASCADE Technology Public License</td>\n          \n          <td>Open CASCADE Technology Public License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OCLC-2.0\n            \n            <a name="spdx-license-OCLC-2.460"> </a>\n          \n          </td>\n          \n          <td>OCLC Research Public License 2.0</td>\n          \n          <td>OCLC Research Public License 2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ODbL-1.0\n            \n            <a name="spdx-license-ODbL-1.460"> </a>\n          \n          </td>\n          \n          <td>ODC Open Database License v1.0</td>\n          \n          <td>ODC Open Database License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OFL-1.0\n            \n            <a name="spdx-license-OFL-1.460"> </a>\n          \n          </td>\n          \n          <td>SIL Open Font License 1.0</td>\n          \n          <td>SIL Open Font License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OFL-1.1\n            \n            <a name="spdx-license-OFL-1.461"> </a>\n          \n          </td>\n          \n          <td>SIL Open Font License 1.1</td>\n          \n          <td>SIL Open Font License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OGTSL\n            \n            <a name="spdx-license-OGTSL"> </a>\n          \n          </td>\n          \n          <td>Open Group Test Suite License</td>\n          \n          <td>Open Group Test Suite License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-1.1\n            \n            <a name="spdx-license-OLDAP-1.461"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v1.1</td>\n          \n          <td>Open LDAP Public License v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-1.2\n            \n            <a name="spdx-license-OLDAP-1.462"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v1.2</td>\n          \n          <td>Open LDAP Public License v1.2.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-1.3\n            \n            <a name="spdx-license-OLDAP-1.463"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v1.3</td>\n          \n          <td>Open LDAP Public License v1.3.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-1.4\n            \n            <a name="spdx-license-OLDAP-1.464"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v1.4</td>\n          \n          <td>Open LDAP Public License v1.4.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.0.1\n            \n            <a name="spdx-license-OLDAP-2.460.461"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v2.0.1</td>\n          \n          <td>Open LDAP Public License v2.0.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.0\n            \n            <a name="spdx-license-OLDAP-2.460"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B)</td>\n          \n          <td>Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.1\n            \n            <a name="spdx-license-OLDAP-2.461"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v2.1</td>\n          \n          <td>Open LDAP Public License v2.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.2.1\n            \n            <a name="spdx-license-OLDAP-2.462.461"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v2.2.1</td>\n          \n          <td>Open LDAP Public License v2.2.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.2.2\n            \n            <a name="spdx-license-OLDAP-2.462.462"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License 2.2.2</td>\n          \n          <td>Open LDAP Public License 2.2.2.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.2\n            \n            <a name="spdx-license-OLDAP-2.462"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v2.2</td>\n          \n          <td>Open LDAP Public License v2.2.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.3\n            \n            <a name="spdx-license-OLDAP-2.463"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v2.3</td>\n          \n          <td>Open LDAP Public License v2.3.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.4\n            \n            <a name="spdx-license-OLDAP-2.464"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v2.4</td>\n          \n          <td>Open LDAP Public License v2.4.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.5\n            \n            <a name="spdx-license-OLDAP-2.465"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v2.5</td>\n          \n          <td>Open LDAP Public License v2.5.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.6\n            \n            <a name="spdx-license-OLDAP-2.466"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v2.6</td>\n          \n          <td>Open LDAP Public License v2.6.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.7\n            \n            <a name="spdx-license-OLDAP-2.467"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v2.7</td>\n          \n          <td>Open LDAP Public License v2.7.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OLDAP-2.8\n            \n            <a name="spdx-license-OLDAP-2.468"> </a>\n          \n          </td>\n          \n          <td>Open LDAP Public License v2.8</td>\n          \n          <td>Open LDAP Public License v2.8.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OML\n            \n            <a name="spdx-license-OML"> </a>\n          \n          </td>\n          \n          <td>Open Market License</td>\n          \n          <td>Open Market License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OpenSSL\n            \n            <a name="spdx-license-OpenSSL"> </a>\n          \n          </td>\n          \n          <td>OpenSSL License</td>\n          \n          <td>OpenSSL License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OPL-1.0\n            \n            <a name="spdx-license-OPL-1.460"> </a>\n          \n          </td>\n          \n          <td>Open Public License v1.0</td>\n          \n          <td>Open Public License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OSET-PL-2.1\n            \n            <a name="spdx-license-OSET-PL-2.461"> </a>\n          \n          </td>\n          \n          <td>OSET Public License version 2.1</td>\n          \n          <td>OSET Public License version 2.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OSL-1.0\n            \n            <a name="spdx-license-OSL-1.460"> </a>\n          \n          </td>\n          \n          <td>Open Software License 1.0</td>\n          \n          <td>Open Software License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OSL-1.1\n            \n            <a name="spdx-license-OSL-1.461"> </a>\n          \n          </td>\n          \n          <td>Open Software License 1.1</td>\n          \n          <td>Open Software License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OSL-2.0\n            \n            <a name="spdx-license-OSL-2.460"> </a>\n          \n          </td>\n          \n          <td>Open Software License 2.0</td>\n          \n          <td>Open Software License 2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OSL-2.1\n            \n            <a name="spdx-license-OSL-2.461"> </a>\n          \n          </td>\n          \n          <td>Open Software License 2.1</td>\n          \n          <td>Open Software License 2.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">OSL-3.0\n            \n            <a name="spdx-license-OSL-3.460"> </a>\n          \n          </td>\n          \n          <td>Open Software License 3.0</td>\n          \n          <td>Open Software License 3.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">PDDL-1.0\n            \n            <a name="spdx-license-PDDL-1.460"> </a>\n          \n          </td>\n          \n          <td>ODC Public Domain Dedication &amp; License 1.0</td>\n          \n          <td>ODC Public Domain Dedication &amp; License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">PHP-3.0\n            \n            <a name="spdx-license-PHP-3.460"> </a>\n          \n          </td>\n          \n          <td>PHP License v3.0</td>\n          \n          <td>PHP License v3.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">PHP-3.01\n            \n            <a name="spdx-license-PHP-3.4601"> </a>\n          \n          </td>\n          \n          <td>PHP License v3.01</td>\n          \n          <td>PHP License v3.01.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Plexus\n            \n            <a name="spdx-license-Plexus"> </a>\n          \n          </td>\n          \n          <td>Plexus Classworlds License</td>\n          \n          <td>Plexus Classworlds License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">PostgreSQL\n            \n            <a name="spdx-license-PostgreSQL"> </a>\n          \n          </td>\n          \n          <td>PostgreSQL License</td>\n          \n          <td>PostgreSQL License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">psfrag\n            \n            <a name="spdx-license-psfrag"> </a>\n          \n          </td>\n          \n          <td>psfrag License</td>\n          \n          <td>psfrag License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">psutils\n            \n            <a name="spdx-license-psutils"> </a>\n          \n          </td>\n          \n          <td>psutils License</td>\n          \n          <td>psutils License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Python-2.0\n            \n            <a name="spdx-license-Python-2.460"> </a>\n          \n          </td>\n          \n          <td>Python License 2.0</td>\n          \n          <td>Python License 2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Qhull\n            \n            <a name="spdx-license-Qhull"> </a>\n          \n          </td>\n          \n          <td>Qhull License</td>\n          \n          <td>Qhull License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">QPL-1.0\n            \n            <a name="spdx-license-QPL-1.460"> </a>\n          \n          </td>\n          \n          <td>Q Public License 1.0</td>\n          \n          <td>Q Public License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Rdisc\n            \n            <a name="spdx-license-Rdisc"> </a>\n          \n          </td>\n          \n          <td>Rdisc License</td>\n          \n          <td>Rdisc License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">RHeCos-1.1\n            \n            <a name="spdx-license-RHeCos-1.461"> </a>\n          \n          </td>\n          \n          <td>Red Hat eCos Public License v1.1</td>\n          \n          <td>Red Hat eCos Public License v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">RPL-1.1\n            \n            <a name="spdx-license-RPL-1.461"> </a>\n          \n          </td>\n          \n          <td>Reciprocal Public License 1.1</td>\n          \n          <td>Reciprocal Public License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">RPL-1.5\n            \n            <a name="spdx-license-RPL-1.465"> </a>\n          \n          </td>\n          \n          <td>Reciprocal Public License 1.5</td>\n          \n          <td>Reciprocal Public License 1.5.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">RPSL-1.0\n            \n            <a name="spdx-license-RPSL-1.460"> </a>\n          \n          </td>\n          \n          <td>RealNetworks Public Source License v1.0</td>\n          \n          <td>RealNetworks Public Source License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">RSA-MD\n            \n            <a name="spdx-license-RSA-MD"> </a>\n          \n          </td>\n          \n          <td>RSA Message-Digest License</td>\n          \n          <td>RSA Message-Digest License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">RSCPL\n            \n            <a name="spdx-license-RSCPL"> </a>\n          \n          </td>\n          \n          <td>Ricoh Source Code Public License</td>\n          \n          <td>Ricoh Source Code Public License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Ruby\n            \n            <a name="spdx-license-Ruby"> </a>\n          \n          </td>\n          \n          <td>Ruby License</td>\n          \n          <td>Ruby License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SAX-PD\n            \n            <a name="spdx-license-SAX-PD"> </a>\n          \n          </td>\n          \n          <td>Sax Public Domain Notice</td>\n          \n          <td>Sax Public Domain Notice.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Saxpath\n            \n            <a name="spdx-license-Saxpath"> </a>\n          \n          </td>\n          \n          <td>Saxpath License</td>\n          \n          <td>Saxpath License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SCEA\n            \n            <a name="spdx-license-SCEA"> </a>\n          \n          </td>\n          \n          <td>SCEA Shared Source License</td>\n          \n          <td>SCEA Shared Source License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Sendmail\n            \n            <a name="spdx-license-Sendmail"> </a>\n          \n          </td>\n          \n          <td>Sendmail License</td>\n          \n          <td>Sendmail License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SGI-B-1.0\n            \n            <a name="spdx-license-SGI-B-1.460"> </a>\n          \n          </td>\n          \n          <td>SGI Free Software License B v1.0</td>\n          \n          <td>SGI Free Software License B v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SGI-B-1.1\n            \n            <a name="spdx-license-SGI-B-1.461"> </a>\n          \n          </td>\n          \n          <td>SGI Free Software License B v1.1</td>\n          \n          <td>SGI Free Software License B v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SGI-B-2.0\n            \n            <a name="spdx-license-SGI-B-2.460"> </a>\n          \n          </td>\n          \n          <td>SGI Free Software License B v2.0</td>\n          \n          <td>SGI Free Software License B v2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SimPL-2.0\n            \n            <a name="spdx-license-SimPL-2.460"> </a>\n          \n          </td>\n          \n          <td>Simple Public License 2.0</td>\n          \n          <td>Simple Public License 2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SISSL-1.2\n            \n            <a name="spdx-license-SISSL-1.462"> </a>\n          \n          </td>\n          \n          <td>Sun Industry Standards Source License v1.2</td>\n          \n          <td>Sun Industry Standards Source License v1.2.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SISSL\n            \n            <a name="spdx-license-SISSL"> </a>\n          \n          </td>\n          \n          <td>Sun Industry Standards Source License v1.1</td>\n          \n          <td>Sun Industry Standards Source License v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Sleepycat\n            \n            <a name="spdx-license-Sleepycat"> </a>\n          \n          </td>\n          \n          <td>Sleepycat License</td>\n          \n          <td>Sleepycat License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SMLNJ\n            \n            <a name="spdx-license-SMLNJ"> </a>\n          \n          </td>\n          \n          <td>Standard ML of New Jersey License</td>\n          \n          <td>Standard ML of New Jersey License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SMPPL\n            \n            <a name="spdx-license-SMPPL"> </a>\n          \n          </td>\n          \n          <td>Secure Messaging Protocol Public License</td>\n          \n          <td>Secure Messaging Protocol Public License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SNIA\n            \n            <a name="spdx-license-SNIA"> </a>\n          \n          </td>\n          \n          <td>SNIA Public License 1.1</td>\n          \n          <td>SNIA Public License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Spencer-86\n            \n            <a name="spdx-license-Spencer-86"> </a>\n          \n          </td>\n          \n          <td>Spencer License 86</td>\n          \n          <td>Spencer License 86.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Spencer-94\n            \n            <a name="spdx-license-Spencer-94"> </a>\n          \n          </td>\n          \n          <td>Spencer License 94</td>\n          \n          <td>Spencer License 94.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Spencer-99\n            \n            <a name="spdx-license-Spencer-99"> </a>\n          \n          </td>\n          \n          <td>Spencer License 99</td>\n          \n          <td>Spencer License 99.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SPL-1.0\n            \n            <a name="spdx-license-SPL-1.460"> </a>\n          \n          </td>\n          \n          <td>Sun Public License v1.0</td>\n          \n          <td>Sun Public License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SugarCRM-1.1.3\n            \n            <a name="spdx-license-SugarCRM-1.461.463"> </a>\n          \n          </td>\n          \n          <td>SugarCRM Public License v1.1.3</td>\n          \n          <td>SugarCRM Public License v1.1.3.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">SWL\n            \n            <a name="spdx-license-SWL"> </a>\n          \n          </td>\n          \n          <td>Scheme Widget Library (SWL) Software License Agreement</td>\n          \n          <td>Scheme Widget Library (SWL) Software License Agreement.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">TCL\n            \n            <a name="spdx-license-TCL"> </a>\n          \n          </td>\n          \n          <td>TCL/TK License</td>\n          \n          <td>TCL/TK License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">TCP-wrappers\n            \n            <a name="spdx-license-TCP-wrappers"> </a>\n          \n          </td>\n          \n          <td>TCP Wrappers License</td>\n          \n          <td>TCP Wrappers License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">TMate\n            \n            <a name="spdx-license-TMate"> </a>\n          \n          </td>\n          \n          <td>TMate Open Source License</td>\n          \n          <td>TMate Open Source License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">TORQUE-1.1\n            \n            <a name="spdx-license-TORQUE-1.461"> </a>\n          \n          </td>\n          \n          <td>TORQUE v2.5+ Software License v1.1</td>\n          \n          <td>TORQUE v2.5+ Software License v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">TOSL\n            \n            <a name="spdx-license-TOSL"> </a>\n          \n          </td>\n          \n          <td>Trusster Open Source License</td>\n          \n          <td>Trusster Open Source License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Unicode-DFS-2015\n            \n            <a name="spdx-license-Unicode-DFS-2015"> </a>\n          \n          </td>\n          \n          <td>Unicode License Agreement - Data Files and Software (2015)</td>\n          \n          <td>Unicode License Agreement - Data Files and Software (2015).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Unicode-DFS-2016\n            \n            <a name="spdx-license-Unicode-DFS-2016"> </a>\n          \n          </td>\n          \n          <td>Unicode License Agreement - Data Files and Software (2016)</td>\n          \n          <td>Unicode License Agreement - Data Files and Software (2016).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Unicode-TOU\n            \n            <a name="spdx-license-Unicode-TOU"> </a>\n          \n          </td>\n          \n          <td>Unicode Terms of Use</td>\n          \n          <td>Unicode Terms of Use.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Unlicense\n            \n            <a name="spdx-license-Unlicense"> </a>\n          \n          </td>\n          \n          <td>The Unlicense</td>\n          \n          <td>The Unlicense.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">UPL-1.0\n            \n            <a name="spdx-license-UPL-1.460"> </a>\n          \n          </td>\n          \n          <td>Universal Permissive License v1.0</td>\n          \n          <td>Universal Permissive License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Vim\n            \n            <a name="spdx-license-Vim"> </a>\n          \n          </td>\n          \n          <td>Vim License</td>\n          \n          <td>Vim License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">VOSTROM\n            \n            <a name="spdx-license-VOSTROM"> </a>\n          \n          </td>\n          \n          <td>VOSTROM Public License for Open Source</td>\n          \n          <td>VOSTROM Public License for Open Source.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">VSL-1.0\n            \n            <a name="spdx-license-VSL-1.460"> </a>\n          \n          </td>\n          \n          <td>Vovida Software License v1.0</td>\n          \n          <td>Vovida Software License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">W3C-19980720\n            \n            <a name="spdx-license-W3C-19980720"> </a>\n          \n          </td>\n          \n          <td>W3C Software Notice and License (1998-07-20)</td>\n          \n          <td>W3C Software Notice and License (1998-07-20).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">W3C-20150513\n            \n            <a name="spdx-license-W3C-20150513"> </a>\n          \n          </td>\n          \n          <td>W3C Software Notice and Document License (2015-05-13)</td>\n          \n          <td>W3C Software Notice and Document License (2015-05-13).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">W3C\n            \n            <a name="spdx-license-W3C"> </a>\n          \n          </td>\n          \n          <td>W3C Software Notice and License (2002-12-31)</td>\n          \n          <td>W3C Software Notice and License (2002-12-31).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Watcom-1.0\n            \n            <a name="spdx-license-Watcom-1.460"> </a>\n          \n          </td>\n          \n          <td>Sybase Open Watcom Public License 1.0</td>\n          \n          <td>Sybase Open Watcom Public License 1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Wsuipa\n            \n            <a name="spdx-license-Wsuipa"> </a>\n          \n          </td>\n          \n          <td>Wsuipa License</td>\n          \n          <td>Wsuipa License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">WTFPL\n            \n            <a name="spdx-license-WTFPL"> </a>\n          \n          </td>\n          \n          <td>Do What The F*ck You Want To Public License</td>\n          \n          <td>Do What The F*ck You Want To Public License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">X11\n            \n            <a name="spdx-license-X11"> </a>\n          \n          </td>\n          \n          <td>X11 License</td>\n          \n          <td>X11 License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Xerox\n            \n            <a name="spdx-license-Xerox"> </a>\n          \n          </td>\n          \n          <td>Xerox License</td>\n          \n          <td>Xerox License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">XFree86-1.1\n            \n            <a name="spdx-license-XFree86-1.461"> </a>\n          \n          </td>\n          \n          <td>XFree86 License 1.1</td>\n          \n          <td>XFree86 License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">xinetd\n            \n            <a name="spdx-license-xinetd"> </a>\n          \n          </td>\n          \n          <td>xinetd License</td>\n          \n          <td>xinetd License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Xnet\n            \n            <a name="spdx-license-Xnet"> </a>\n          \n          </td>\n          \n          <td>X.Net License</td>\n          \n          <td>X.Net License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">xpp\n            \n            <a name="spdx-license-xpp"> </a>\n          \n          </td>\n          \n          <td>XPP License</td>\n          \n          <td>XPP License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">XSkat\n            \n            <a name="spdx-license-XSkat"> </a>\n          \n          </td>\n          \n          <td>XSkat License</td>\n          \n          <td>XSkat License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">YPL-1.0\n            \n            <a name="spdx-license-YPL-1.460"> </a>\n          \n          </td>\n          \n          <td>Yahoo! Public License v1.0</td>\n          \n          <td>Yahoo! Public License v1.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">YPL-1.1\n            \n            <a name="spdx-license-YPL-1.461"> </a>\n          \n          </td>\n          \n          <td>Yahoo! Public License v1.1</td>\n          \n          <td>Yahoo! Public License v1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Zed\n            \n            <a name="spdx-license-Zed"> </a>\n          \n          </td>\n          \n          <td>Zed License</td>\n          \n          <td>Zed License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Zend-2.0\n            \n            <a name="spdx-license-Zend-2.460"> </a>\n          \n          </td>\n          \n          <td>Zend License v2.0</td>\n          \n          <td>Zend License v2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Zimbra-1.3\n            \n            <a name="spdx-license-Zimbra-1.463"> </a>\n          \n          </td>\n          \n          <td>Zimbra Public License v1.3</td>\n          \n          <td>Zimbra Public License v1.3.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Zimbra-1.4\n            \n            <a name="spdx-license-Zimbra-1.464"> </a>\n          \n          </td>\n          \n          <td>Zimbra Public License v1.4</td>\n          \n          <td>Zimbra Public License v1.4.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">zlib-acknowledgement\n            \n            <a name="spdx-license-zlib-acknowledgement"> </a>\n          \n          </td>\n          \n          <td>zlib/libpng License with Acknowledgement</td>\n          \n          <td>zlib/libpng License with Acknowledgement.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Zlib\n            \n            <a name="spdx-license-Zlib"> </a>\n          \n          </td>\n          \n          <td>zlib License</td>\n          \n          <td>zlib License.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ZPL-1.1\n            \n            <a name="spdx-license-ZPL-1.461"> </a>\n          \n          </td>\n          \n          <td>Zope Public License 1.1</td>\n          \n          <td>Zope Public License 1.1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ZPL-2.0\n            \n            <a name="spdx-license-ZPL-2.460"> </a>\n          \n          </td>\n          \n          <td>Zope Public License 2.0</td>\n          \n          <td>Zope Public License 2.0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ZPL-2.1\n            \n            <a name="spdx-license-ZPL-2.461"> </a>\n          \n          </td>\n          \n          <td>Zope Public License 2.1</td>\n          \n          <td>Zope Public License 2.1.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/spdx-license",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1027",
    },
  ],
  version: "4.3.0",
  name: "SPDXLicense",
  title: "SPDXLicense",
  status: "draft",
  experimental: false,
  date: "2021-01-17T07:06:13+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description:
    "The license that applies to an Implementation Guide (using an SPDX license Identifiers, or 'not-open-source'). The binding is required but new SPDX license Identifiers are allowed to be used (https://spdx.org/licenses/).",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/spdx-license",
  content: "complete",
  concept: [
    {
      code: "not-open-source",
      display: "Not open source",
      definition: "Not an open source license.",
    },
    {
      code: "0BSD",
      display: "BSD Zero Clause License",
      definition: "BSD Zero Clause License.",
    },
    {
      code: "AAL",
      display: "Attribution Assurance License",
      definition: "Attribution Assurance License.",
    },
    {
      code: "Abstyles",
      display: "Abstyles License",
      definition: "Abstyles License.",
    },
    {
      code: "Adobe-2006",
      display: "Adobe Systems Incorporated Source Code License Agreement",
      definition: "Adobe Systems Incorporated Source Code License Agreement.",
    },
    {
      code: "Adobe-Glyph",
      display: "Adobe Glyph List License",
      definition: "Adobe Glyph List License.",
    },
    {
      code: "ADSL",
      display: "Amazon Digital Services License",
      definition: "Amazon Digital Services License.",
    },
    {
      code: "AFL-1.1",
      display: "Academic Free License v1.1",
      definition: "Academic Free License v1.1.",
    },
    {
      code: "AFL-1.2",
      display: "Academic Free License v1.2",
      definition: "Academic Free License v1.2.",
    },
    {
      code: "AFL-2.0",
      display: "Academic Free License v2.0",
      definition: "Academic Free License v2.0.",
    },
    {
      code: "AFL-2.1",
      display: "Academic Free License v2.1",
      definition: "Academic Free License v2.1.",
    },
    {
      code: "AFL-3.0",
      display: "Academic Free License v3.0",
      definition: "Academic Free License v3.0.",
    },
    {
      code: "Afmparse",
      display: "Afmparse License",
      definition: "Afmparse License.",
    },
    {
      code: "AGPL-1.0-only",
      display: "Affero General Public License v1.0 only",
      definition: "Affero General Public License v1.0 only.",
    },
    {
      code: "AGPL-1.0-or-later",
      display: "Affero General Public License v1.0 or later",
      definition: "Affero General Public License v1.0 or later.",
    },
    {
      code: "AGPL-3.0-only",
      display: "GNU Affero General Public License v3.0 only",
      definition: "GNU Affero General Public License v3.0 only.",
    },
    {
      code: "AGPL-3.0-or-later",
      display: "GNU Affero General Public License v3.0 or later",
      definition: "GNU Affero General Public License v3.0 or later.",
    },
    {
      code: "Aladdin",
      display: "Aladdin Free Public License",
      definition: "Aladdin Free Public License.",
    },
    {
      code: "AMDPLPA",
      display: "AMD's plpa_map.c License",
      definition: "AMD's plpa_map.c License.",
    },
    {
      code: "AML",
      display: "Apple MIT License",
      definition: "Apple MIT License.",
    },
    {
      code: "AMPAS",
      display: "Academy of Motion Picture Arts and Sciences BSD",
      definition: "Academy of Motion Picture Arts and Sciences BSD.",
    },
    {
      code: "ANTLR-PD",
      display: "ANTLR Software Rights Notice",
      definition: "ANTLR Software Rights Notice.",
    },
    {
      code: "Apache-1.0",
      display: "Apache License 1.0",
      definition: "Apache License 1.0.",
    },
    {
      code: "Apache-1.1",
      display: "Apache License 1.1",
      definition: "Apache License 1.1.",
    },
    {
      code: "Apache-2.0",
      display: "Apache License 2.0",
      definition: "Apache License 2.0.",
    },
    {
      code: "APAFML",
      display: "Adobe Postscript AFM License",
      definition: "Adobe Postscript AFM License.",
    },
    {
      code: "APL-1.0",
      display: "Adaptive Public License 1.0",
      definition: "Adaptive Public License 1.0.",
    },
    {
      code: "APSL-1.0",
      display: "Apple Public Source License 1.0",
      definition: "Apple Public Source License 1.0.",
    },
    {
      code: "APSL-1.1",
      display: "Apple Public Source License 1.1",
      definition: "Apple Public Source License 1.1.",
    },
    {
      code: "APSL-1.2",
      display: "Apple Public Source License 1.2",
      definition: "Apple Public Source License 1.2.",
    },
    {
      code: "APSL-2.0",
      display: "Apple Public Source License 2.0",
      definition: "Apple Public Source License 2.0.",
    },
    {
      code: "Artistic-1.0-cl8",
      display: "Artistic License 1.0 w/clause 8",
      definition: "Artistic License 1.0 w/clause 8.",
    },
    {
      code: "Artistic-1.0-Perl",
      display: "Artistic License 1.0 (Perl)",
      definition: "Artistic License 1.0 (Perl).",
    },
    {
      code: "Artistic-1.0",
      display: "Artistic License 1.0",
      definition: "Artistic License 1.0.",
    },
    {
      code: "Artistic-2.0",
      display: "Artistic License 2.0",
      definition: "Artistic License 2.0.",
    },
    {
      code: "Bahyph",
      display: "Bahyph License",
      definition: "Bahyph License.",
    },
    { code: "Barr", display: "Barr License", definition: "Barr License." },
    {
      code: "Beerware",
      display: "Beerware License",
      definition: "Beerware License.",
    },
    {
      code: "BitTorrent-1.0",
      display: "BitTorrent Open Source License v1.0",
      definition: "BitTorrent Open Source License v1.0.",
    },
    {
      code: "BitTorrent-1.1",
      display: "BitTorrent Open Source License v1.1",
      definition: "BitTorrent Open Source License v1.1.",
    },
    {
      code: "Borceux",
      display: "Borceux license",
      definition: "Borceux license.",
    },
    {
      code: "BSD-1-Clause",
      display: "BSD 1-Clause License",
      definition: "BSD 1-Clause License.",
    },
    {
      code: "BSD-2-Clause-FreeBSD",
      display: "BSD 2-Clause FreeBSD License",
      definition: "BSD 2-Clause FreeBSD License.",
    },
    {
      code: "BSD-2-Clause-NetBSD",
      display: "BSD 2-Clause NetBSD License",
      definition: "BSD 2-Clause NetBSD License.",
    },
    {
      code: "BSD-2-Clause-Patent",
      display: "BSD-2-Clause Plus Patent License",
      definition: "BSD-2-Clause Plus Patent License.",
    },
    {
      code: "BSD-2-Clause",
      display: 'BSD 2-Clause "Simplified" License',
      definition: 'BSD 2-Clause "Simplified" License.',
    },
    {
      code: "BSD-3-Clause-Attribution",
      display: "BSD with attribution",
      definition: "BSD with attribution.",
    },
    {
      code: "BSD-3-Clause-Clear",
      display: "BSD 3-Clause Clear License",
      definition: "BSD 3-Clause Clear License.",
    },
    {
      code: "BSD-3-Clause-LBNL",
      display: "Lawrence Berkeley National Labs BSD variant license",
      definition: "Lawrence Berkeley National Labs BSD variant license.",
    },
    {
      code: "BSD-3-Clause-No-Nuclear-License-2014",
      display: "BSD 3-Clause No Nuclear License 2014",
      definition: "BSD 3-Clause No Nuclear License 2014.",
    },
    {
      code: "BSD-3-Clause-No-Nuclear-License",
      display: "BSD 3-Clause No Nuclear License",
      definition: "BSD 3-Clause No Nuclear License.",
    },
    {
      code: "BSD-3-Clause-No-Nuclear-Warranty",
      display: "BSD 3-Clause No Nuclear Warranty",
      definition: "BSD 3-Clause No Nuclear Warranty.",
    },
    {
      code: "BSD-3-Clause",
      display: 'BSD 3-Clause "New" or "Revised" License',
      definition: 'BSD 3-Clause "New" or "Revised" License.',
    },
    {
      code: "BSD-4-Clause-UC",
      display: "BSD-4-Clause (University of California-Specific)",
      definition: "BSD-4-Clause (University of California-Specific).",
    },
    {
      code: "BSD-4-Clause",
      display: 'BSD 4-Clause "Original" or "Old" License',
      definition: 'BSD 4-Clause "Original" or "Old" License.',
    },
    {
      code: "BSD-Protection",
      display: "BSD Protection License",
      definition: "BSD Protection License.",
    },
    {
      code: "BSD-Source-Code",
      display: "BSD Source Code Attribution",
      definition: "BSD Source Code Attribution.",
    },
    {
      code: "BSL-1.0",
      display: "Boost Software License 1.0",
      definition: "Boost Software License 1.0.",
    },
    {
      code: "bzip2-1.0.5",
      display: "bzip2 and libbzip2 License v1.0.5",
      definition: "bzip2 and libbzip2 License v1.0.5.",
    },
    {
      code: "bzip2-1.0.6",
      display: "bzip2 and libbzip2 License v1.0.6",
      definition: "bzip2 and libbzip2 License v1.0.6.",
    },
    {
      code: "Caldera",
      display: "Caldera License",
      definition: "Caldera License.",
    },
    {
      code: "CATOSL-1.1",
      display: "Computer Associates Trusted Open Source License 1.1",
      definition: "Computer Associates Trusted Open Source License 1.1.",
    },
    {
      code: "CC-BY-1.0",
      display: "Creative Commons Attribution 1.0 Generic",
      definition: "Creative Commons Attribution 1.0 Generic.",
    },
    {
      code: "CC-BY-2.0",
      display: "Creative Commons Attribution 2.0 Generic",
      definition: "Creative Commons Attribution 2.0 Generic.",
    },
    {
      code: "CC-BY-2.5",
      display: "Creative Commons Attribution 2.5 Generic",
      definition: "Creative Commons Attribution 2.5 Generic.",
    },
    {
      code: "CC-BY-3.0",
      display: "Creative Commons Attribution 3.0 Unported",
      definition: "Creative Commons Attribution 3.0 Unported.",
    },
    {
      code: "CC-BY-4.0",
      display: "Creative Commons Attribution 4.0 International",
      definition: "Creative Commons Attribution 4.0 International.",
    },
    {
      code: "CC-BY-NC-1.0",
      display: "Creative Commons Attribution Non Commercial 1.0 Generic",
      definition: "Creative Commons Attribution Non Commercial 1.0 Generic.",
    },
    {
      code: "CC-BY-NC-2.0",
      display: "Creative Commons Attribution Non Commercial 2.0 Generic",
      definition: "Creative Commons Attribution Non Commercial 2.0 Generic.",
    },
    {
      code: "CC-BY-NC-2.5",
      display: "Creative Commons Attribution Non Commercial 2.5 Generic",
      definition: "Creative Commons Attribution Non Commercial 2.5 Generic.",
    },
    {
      code: "CC-BY-NC-3.0",
      display: "Creative Commons Attribution Non Commercial 3.0 Unported",
      definition: "Creative Commons Attribution Non Commercial 3.0 Unported.",
    },
    {
      code: "CC-BY-NC-4.0",
      display: "Creative Commons Attribution Non Commercial 4.0 International",
      definition:
        "Creative Commons Attribution Non Commercial 4.0 International.",
    },
    {
      code: "CC-BY-NC-ND-1.0",
      display:
        "Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic",
      definition:
        "Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic.",
    },
    {
      code: "CC-BY-NC-ND-2.0",
      display:
        "Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic",
      definition:
        "Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic.",
    },
    {
      code: "CC-BY-NC-ND-2.5",
      display:
        "Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic",
      definition:
        "Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic.",
    },
    {
      code: "CC-BY-NC-ND-3.0",
      display:
        "Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported",
      definition:
        "Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported.",
    },
    {
      code: "CC-BY-NC-ND-4.0",
      display:
        "Creative Commons Attribution Non Commercial No Derivatives 4.0 International",
      definition:
        "Creative Commons Attribution Non Commercial No Derivatives 4.0 International.",
    },
    {
      code: "CC-BY-NC-SA-1.0",
      display:
        "Creative Commons Attribution Non Commercial Share Alike 1.0 Generic",
      definition:
        "Creative Commons Attribution Non Commercial Share Alike 1.0 Generic.",
    },
    {
      code: "CC-BY-NC-SA-2.0",
      display:
        "Creative Commons Attribution Non Commercial Share Alike 2.0 Generic",
      definition:
        "Creative Commons Attribution Non Commercial Share Alike 2.0 Generic.",
    },
    {
      code: "CC-BY-NC-SA-2.5",
      display:
        "Creative Commons Attribution Non Commercial Share Alike 2.5 Generic",
      definition:
        "Creative Commons Attribution Non Commercial Share Alike 2.5 Generic.",
    },
    {
      code: "CC-BY-NC-SA-3.0",
      display:
        "Creative Commons Attribution Non Commercial Share Alike 3.0 Unported",
      definition:
        "Creative Commons Attribution Non Commercial Share Alike 3.0 Unported.",
    },
    {
      code: "CC-BY-NC-SA-4.0",
      display:
        "Creative Commons Attribution Non Commercial Share Alike 4.0 International",
      definition:
        "Creative Commons Attribution Non Commercial Share Alike 4.0 International.",
    },
    {
      code: "CC-BY-ND-1.0",
      display: "Creative Commons Attribution No Derivatives 1.0 Generic",
      definition: "Creative Commons Attribution No Derivatives 1.0 Generic.",
    },
    {
      code: "CC-BY-ND-2.0",
      display: "Creative Commons Attribution No Derivatives 2.0 Generic",
      definition: "Creative Commons Attribution No Derivatives 2.0 Generic.",
    },
    {
      code: "CC-BY-ND-2.5",
      display: "Creative Commons Attribution No Derivatives 2.5 Generic",
      definition: "Creative Commons Attribution No Derivatives 2.5 Generic.",
    },
    {
      code: "CC-BY-ND-3.0",
      display: "Creative Commons Attribution No Derivatives 3.0 Unported",
      definition: "Creative Commons Attribution No Derivatives 3.0 Unported.",
    },
    {
      code: "CC-BY-ND-4.0",
      display: "Creative Commons Attribution No Derivatives 4.0 International",
      definition:
        "Creative Commons Attribution No Derivatives 4.0 International.",
    },
    {
      code: "CC-BY-SA-1.0",
      display: "Creative Commons Attribution Share Alike 1.0 Generic",
      definition: "Creative Commons Attribution Share Alike 1.0 Generic.",
    },
    {
      code: "CC-BY-SA-2.0",
      display: "Creative Commons Attribution Share Alike 2.0 Generic",
      definition: "Creative Commons Attribution Share Alike 2.0 Generic.",
    },
    {
      code: "CC-BY-SA-2.5",
      display: "Creative Commons Attribution Share Alike 2.5 Generic",
      definition: "Creative Commons Attribution Share Alike 2.5 Generic.",
    },
    {
      code: "CC-BY-SA-3.0",
      display: "Creative Commons Attribution Share Alike 3.0 Unported",
      definition: "Creative Commons Attribution Share Alike 3.0 Unported.",
    },
    {
      code: "CC-BY-SA-4.0",
      display: "Creative Commons Attribution Share Alike 4.0 International",
      definition: "Creative Commons Attribution Share Alike 4.0 International.",
    },
    {
      code: "CC0-1.0",
      display: "Creative Commons Zero v1.0 Universal",
      definition: "Creative Commons Zero v1.0 Universal.",
    },
    {
      code: "CDDL-1.0",
      display: "Common Development and Distribution License 1.0",
      definition: "Common Development and Distribution License 1.0.",
    },
    {
      code: "CDDL-1.1",
      display: "Common Development and Distribution License 1.1",
      definition: "Common Development and Distribution License 1.1.",
    },
    {
      code: "CDLA-Permissive-1.0",
      display: "Community Data License Agreement Permissive 1.0",
      definition: "Community Data License Agreement Permissive 1.0.",
    },
    {
      code: "CDLA-Sharing-1.0",
      display: "Community Data License Agreement Sharing 1.0",
      definition: "Community Data License Agreement Sharing 1.0.",
    },
    {
      code: "CECILL-1.0",
      display: "CeCILL Free Software License Agreement v1.0",
      definition: "CeCILL Free Software License Agreement v1.0.",
    },
    {
      code: "CECILL-1.1",
      display: "CeCILL Free Software License Agreement v1.1",
      definition: "CeCILL Free Software License Agreement v1.1.",
    },
    {
      code: "CECILL-2.0",
      display: "CeCILL Free Software License Agreement v2.0",
      definition: "CeCILL Free Software License Agreement v2.0.",
    },
    {
      code: "CECILL-2.1",
      display: "CeCILL Free Software License Agreement v2.1",
      definition: "CeCILL Free Software License Agreement v2.1.",
    },
    {
      code: "CECILL-B",
      display: "CeCILL-B Free Software License Agreement",
      definition: "CeCILL-B Free Software License Agreement.",
    },
    {
      code: "CECILL-C",
      display: "CeCILL-C Free Software License Agreement",
      definition: "CeCILL-C Free Software License Agreement.",
    },
    {
      code: "ClArtistic",
      display: "Clarified Artistic License",
      definition: "Clarified Artistic License.",
    },
    {
      code: "CNRI-Jython",
      display: "CNRI Jython License",
      definition: "CNRI Jython License.",
    },
    {
      code: "CNRI-Python-GPL-Compatible",
      display: "CNRI Python Open Source GPL Compatible License Agreement",
      definition: "CNRI Python Open Source GPL Compatible License Agreement.",
    },
    {
      code: "CNRI-Python",
      display: "CNRI Python License",
      definition: "CNRI Python License.",
    },
    {
      code: "Condor-1.1",
      display: "Condor Public License v1.1",
      definition: "Condor Public License v1.1.",
    },
    {
      code: "CPAL-1.0",
      display: "Common Public Attribution License 1.0",
      definition: "Common Public Attribution License 1.0.",
    },
    {
      code: "CPL-1.0",
      display: "Common Public License 1.0",
      definition: "Common Public License 1.0.",
    },
    {
      code: "CPOL-1.02",
      display: "Code Project Open License 1.02",
      definition: "Code Project Open License 1.02.",
    },
    {
      code: "Crossword",
      display: "Crossword License",
      definition: "Crossword License.",
    },
    {
      code: "CrystalStacker",
      display: "CrystalStacker License",
      definition: "CrystalStacker License.",
    },
    {
      code: "CUA-OPL-1.0",
      display: "CUA Office Public License v1.0",
      definition: "CUA Office Public License v1.0.",
    },
    { code: "Cube", display: "Cube License", definition: "Cube License." },
    { code: "curl", display: "curl License", definition: "curl License." },
    {
      code: "D-FSL-1.0",
      display: "Deutsche Freie Software Lizenz",
      definition: "Deutsche Freie Software Lizenz.",
    },
    {
      code: "diffmark",
      display: "diffmark license",
      definition: "diffmark license.",
    },
    { code: "DOC", display: "DOC License", definition: "DOC License." },
    {
      code: "Dotseqn",
      display: "Dotseqn License",
      definition: "Dotseqn License.",
    },
    { code: "DSDP", display: "DSDP License", definition: "DSDP License." },
    {
      code: "dvipdfm",
      display: "dvipdfm License",
      definition: "dvipdfm License.",
    },
    {
      code: "ECL-1.0",
      display: "Educational Community License v1.0",
      definition: "Educational Community License v1.0.",
    },
    {
      code: "ECL-2.0",
      display: "Educational Community License v2.0",
      definition: "Educational Community License v2.0.",
    },
    {
      code: "EFL-1.0",
      display: "Eiffel Forum License v1.0",
      definition: "Eiffel Forum License v1.0.",
    },
    {
      code: "EFL-2.0",
      display: "Eiffel Forum License v2.0",
      definition: "Eiffel Forum License v2.0.",
    },
    {
      code: "eGenix",
      display: "eGenix.com Public License 1.1.0",
      definition: "eGenix.com Public License 1.1.0.",
    },
    {
      code: "Entessa",
      display: "Entessa Public License v1.0",
      definition: "Entessa Public License v1.0.",
    },
    {
      code: "EPL-1.0",
      display: "Eclipse Public License 1.0",
      definition: "Eclipse Public License 1.0.",
    },
    {
      code: "EPL-2.0",
      display: "Eclipse Public License 2.0",
      definition: "Eclipse Public License 2.0.",
    },
    {
      code: "ErlPL-1.1",
      display: "Erlang Public License v1.1",
      definition: "Erlang Public License v1.1.",
    },
    {
      code: "EUDatagrid",
      display: "EU DataGrid Software License",
      definition: "EU DataGrid Software License.",
    },
    {
      code: "EUPL-1.0",
      display: "European Union Public License 1.0",
      definition: "European Union Public License 1.0.",
    },
    {
      code: "EUPL-1.1",
      display: "European Union Public License 1.1",
      definition: "European Union Public License 1.1.",
    },
    {
      code: "EUPL-1.2",
      display: "European Union Public License 1.2",
      definition: "European Union Public License 1.2.",
    },
    {
      code: "Eurosym",
      display: "Eurosym License",
      definition: "Eurosym License.",
    },
    { code: "Fair", display: "Fair License", definition: "Fair License." },
    {
      code: "Frameworx-1.0",
      display: "Frameworx Open License 1.0",
      definition: "Frameworx Open License 1.0.",
    },
    {
      code: "FreeImage",
      display: "FreeImage Public License v1.0",
      definition: "FreeImage Public License v1.0.",
    },
    {
      code: "FSFAP",
      display: "FSF All Permissive License",
      definition: "FSF All Permissive License.",
    },
    {
      code: "FSFUL",
      display: "FSF Unlimited License",
      definition: "FSF Unlimited License.",
    },
    {
      code: "FSFULLR",
      display: "FSF Unlimited License (with License Retention)",
      definition: "FSF Unlimited License (with License Retention).",
    },
    {
      code: "FTL",
      display: "Freetype Project License",
      definition: "Freetype Project License.",
    },
    {
      code: "GFDL-1.1-only",
      display: "GNU Free Documentation License v1.1 only",
      definition: "GNU Free Documentation License v1.1 only.",
    },
    {
      code: "GFDL-1.1-or-later",
      display: "GNU Free Documentation License v1.1 or later",
      definition: "GNU Free Documentation License v1.1 or later.",
    },
    {
      code: "GFDL-1.2-only",
      display: "GNU Free Documentation License v1.2 only",
      definition: "GNU Free Documentation License v1.2 only.",
    },
    {
      code: "GFDL-1.2-or-later",
      display: "GNU Free Documentation License v1.2 or later",
      definition: "GNU Free Documentation License v1.2 or later.",
    },
    {
      code: "GFDL-1.3-only",
      display: "GNU Free Documentation License v1.3 only",
      definition: "GNU Free Documentation License v1.3 only.",
    },
    {
      code: "GFDL-1.3-or-later",
      display: "GNU Free Documentation License v1.3 or later",
      definition: "GNU Free Documentation License v1.3 or later.",
    },
    {
      code: "Giftware",
      display: "Giftware License",
      definition: "Giftware License.",
    },
    { code: "GL2PS", display: "GL2PS License", definition: "GL2PS License." },
    {
      code: "Glide",
      display: "3dfx Glide License",
      definition: "3dfx Glide License.",
    },
    {
      code: "Glulxe",
      display: "Glulxe License",
      definition: "Glulxe License.",
    },
    {
      code: "gnuplot",
      display: "gnuplot License",
      definition: "gnuplot License.",
    },
    {
      code: "GPL-1.0-only",
      display: "GNU General Public License v1.0 only",
      definition: "GNU General Public License v1.0 only.",
    },
    {
      code: "GPL-1.0-or-later",
      display: "GNU General Public License v1.0 or later",
      definition: "GNU General Public License v1.0 or later.",
    },
    {
      code: "GPL-2.0-only",
      display: "GNU General Public License v2.0 only",
      definition: "GNU General Public License v2.0 only.",
    },
    {
      code: "GPL-2.0-or-later",
      display: "GNU General Public License v2.0 or later",
      definition: "GNU General Public License v2.0 or later.",
    },
    {
      code: "GPL-3.0-only",
      display: "GNU General Public License v3.0 only",
      definition: "GNU General Public License v3.0 only.",
    },
    {
      code: "GPL-3.0-or-later",
      display: "GNU General Public License v3.0 or later",
      definition: "GNU General Public License v3.0 or later.",
    },
    {
      code: "gSOAP-1.3b",
      display: "gSOAP Public License v1.3b",
      definition: "gSOAP Public License v1.3b.",
    },
    {
      code: "HaskellReport",
      display: "Haskell Language Report License",
      definition: "Haskell Language Report License.",
    },
    {
      code: "HPND",
      display: "Historical Permission Notice and Disclaimer",
      definition: "Historical Permission Notice and Disclaimer.",
    },
    {
      code: "IBM-pibs",
      display: "IBM PowerPC Initialization and Boot Software",
      definition: "IBM PowerPC Initialization and Boot Software.",
    },
    { code: "ICU", display: "ICU License", definition: "ICU License." },
    {
      code: "IJG",
      display: "Independent JPEG Group License",
      definition: "Independent JPEG Group License.",
    },
    {
      code: "ImageMagick",
      display: "ImageMagick License",
      definition: "ImageMagick License.",
    },
    {
      code: "iMatix",
      display: "iMatix Standard Function Library Agreement",
      definition: "iMatix Standard Function Library Agreement.",
    },
    {
      code: "Imlib2",
      display: "Imlib2 License",
      definition: "Imlib2 License.",
    },
    {
      code: "Info-ZIP",
      display: "Info-ZIP License",
      definition: "Info-ZIP License.",
    },
    {
      code: "Intel-ACPI",
      display: "Intel ACPI Software License Agreement",
      definition: "Intel ACPI Software License Agreement.",
    },
    {
      code: "Intel",
      display: "Intel Open Source License",
      definition: "Intel Open Source License.",
    },
    {
      code: "Interbase-1.0",
      display: "Interbase Public License v1.0",
      definition: "Interbase Public License v1.0.",
    },
    {
      code: "IPA",
      display: "IPA Font License",
      definition: "IPA Font License.",
    },
    {
      code: "IPL-1.0",
      display: "IBM Public License v1.0",
      definition: "IBM Public License v1.0.",
    },
    { code: "ISC", display: "ISC License", definition: "ISC License." },
    {
      code: "JasPer-2.0",
      display: "JasPer License",
      definition: "JasPer License.",
    },
    { code: "JSON", display: "JSON License", definition: "JSON License." },
    {
      code: "LAL-1.2",
      display: "Licence Art Libre 1.2",
      definition: "Licence Art Libre 1.2.",
    },
    {
      code: "LAL-1.3",
      display: "Licence Art Libre 1.3",
      definition: "Licence Art Libre 1.3.",
    },
    {
      code: "Latex2e",
      display: "Latex2e License",
      definition: "Latex2e License.",
    },
    {
      code: "Leptonica",
      display: "Leptonica License",
      definition: "Leptonica License.",
    },
    {
      code: "LGPL-2.0-only",
      display: "GNU Library General Public License v2 only",
      definition: "GNU Library General Public License v2 only.",
    },
    {
      code: "LGPL-2.0-or-later",
      display: "GNU Library General Public License v2 or later",
      definition: "GNU Library General Public License v2 or later.",
    },
    {
      code: "LGPL-2.1-only",
      display: "GNU Lesser General Public License v2.1 only",
      definition: "GNU Lesser General Public License v2.1 only.",
    },
    {
      code: "LGPL-2.1-or-later",
      display: "GNU Lesser General Public License v2.1 or later",
      definition: "GNU Lesser General Public License v2.1 or later.",
    },
    {
      code: "LGPL-3.0-only",
      display: "GNU Lesser General Public License v3.0 only",
      definition: "GNU Lesser General Public License v3.0 only.",
    },
    {
      code: "LGPL-3.0-or-later",
      display: "GNU Lesser General Public License v3.0 or later",
      definition: "GNU Lesser General Public License v3.0 or later.",
    },
    {
      code: "LGPLLR",
      display: "Lesser General Public License For Linguistic Resources",
      definition: "Lesser General Public License For Linguistic Resources.",
    },
    {
      code: "Libpng",
      display: "libpng License",
      definition: "libpng License.",
    },
    {
      code: "libtiff",
      display: "libtiff License",
      definition: "libtiff License.",
    },
    {
      code: "LiLiQ-P-1.1",
      display: "Licence Libre du Québec – Permissive version 1.1",
      definition: "Licence Libre du Québec – Permissive version 1.1.",
    },
    {
      code: "LiLiQ-R-1.1",
      display: "Licence Libre du Québec – Réciprocité version 1.1",
      definition: "Licence Libre du Québec – Réciprocité version 1.1.",
    },
    {
      code: "LiLiQ-Rplus-1.1",
      display: "Licence Libre du Québec – Réciprocité forte version 1.1",
      definition: "Licence Libre du Québec – Réciprocité forte version 1.1.",
    },
    {
      code: "Linux-OpenIB",
      display: "Linux Kernel Variant of OpenIB.org license",
      definition: "Linux Kernel Variant of OpenIB.org license.",
    },
    {
      code: "LPL-1.0",
      display: "Lucent Public License Version 1.0",
      definition: "Lucent Public License Version 1.0.",
    },
    {
      code: "LPL-1.02",
      display: "Lucent Public License v1.02",
      definition: "Lucent Public License v1.02.",
    },
    {
      code: "LPPL-1.0",
      display: "LaTeX Project Public License v1.0",
      definition: "LaTeX Project Public License v1.0.",
    },
    {
      code: "LPPL-1.1",
      display: "LaTeX Project Public License v1.1",
      definition: "LaTeX Project Public License v1.1.",
    },
    {
      code: "LPPL-1.2",
      display: "LaTeX Project Public License v1.2",
      definition: "LaTeX Project Public License v1.2.",
    },
    {
      code: "LPPL-1.3a",
      display: "LaTeX Project Public License v1.3a",
      definition: "LaTeX Project Public License v1.3a.",
    },
    {
      code: "LPPL-1.3c",
      display: "LaTeX Project Public License v1.3c",
      definition: "LaTeX Project Public License v1.3c.",
    },
    {
      code: "MakeIndex",
      display: "MakeIndex License",
      definition: "MakeIndex License.",
    },
    { code: "MirOS", display: "MirOS License", definition: "MirOS License." },
    {
      code: "MIT-0",
      display: "MIT No Attribution",
      definition: "MIT No Attribution.",
    },
    {
      code: "MIT-advertising",
      display: "Enlightenment License (e16)",
      definition: "Enlightenment License (e16).",
    },
    { code: "MIT-CMU", display: "CMU License", definition: "CMU License." },
    { code: "MIT-enna", display: "enna License", definition: "enna License." },
    { code: "MIT-feh", display: "feh License", definition: "feh License." },
    { code: "MIT", display: "MIT License", definition: "MIT License." },
    {
      code: "MITNFA",
      display: "MIT +no-false-attribs license",
      definition: "MIT +no-false-attribs license.",
    },
    {
      code: "Motosoto",
      display: "Motosoto License",
      definition: "Motosoto License.",
    },
    {
      code: "mpich2",
      display: "mpich2 License",
      definition: "mpich2 License.",
    },
    {
      code: "MPL-1.0",
      display: "Mozilla Public License 1.0",
      definition: "Mozilla Public License 1.0.",
    },
    {
      code: "MPL-1.1",
      display: "Mozilla Public License 1.1",
      definition: "Mozilla Public License 1.1.",
    },
    {
      code: "MPL-2.0-no-copyleft-exception",
      display: "Mozilla Public License 2.0 (no copyleft exception)",
      definition: "Mozilla Public License 2.0 (no copyleft exception).",
    },
    {
      code: "MPL-2.0",
      display: "Mozilla Public License 2.0",
      definition: "Mozilla Public License 2.0.",
    },
    {
      code: "MS-PL",
      display: "Microsoft Public License",
      definition: "Microsoft Public License.",
    },
    {
      code: "MS-RL",
      display: "Microsoft Reciprocal License",
      definition: "Microsoft Reciprocal License.",
    },
    {
      code: "MTLL",
      display: "Matrix Template Library License",
      definition: "Matrix Template Library License.",
    },
    {
      code: "Multics",
      display: "Multics License",
      definition: "Multics License.",
    },
    { code: "Mup", display: "Mup License", definition: "Mup License." },
    {
      code: "NASA-1.3",
      display: "NASA Open Source Agreement 1.3",
      definition: "NASA Open Source Agreement 1.3.",
    },
    {
      code: "Naumen",
      display: "Naumen Public License",
      definition: "Naumen Public License.",
    },
    {
      code: "NBPL-1.0",
      display: "Net Boolean Public License v1",
      definition: "Net Boolean Public License v1.",
    },
    {
      code: "NCSA",
      display: "University of Illinois/NCSA Open Source License",
      definition: "University of Illinois/NCSA Open Source License.",
    },
    {
      code: "Net-SNMP",
      display: "Net-SNMP License",
      definition: "Net-SNMP License.",
    },
    {
      code: "NetCDF",
      display: "NetCDF license",
      definition: "NetCDF license.",
    },
    {
      code: "Newsletr",
      display: "Newsletr License",
      definition: "Newsletr License.",
    },
    {
      code: "NGPL",
      display: "Nethack General Public License",
      definition: "Nethack General Public License.",
    },
    {
      code: "NLOD-1.0",
      display: "Norwegian Licence for Open Government Data",
      definition: "Norwegian Licence for Open Government Data.",
    },
    {
      code: "NLPL",
      display: "No Limit Public License",
      definition: "No Limit Public License.",
    },
    {
      code: "Nokia",
      display: "Nokia Open Source License",
      definition: "Nokia Open Source License.",
    },
    {
      code: "NOSL",
      display: "Netizen Open Source License",
      definition: "Netizen Open Source License.",
    },
    { code: "Noweb", display: "Noweb License", definition: "Noweb License." },
    {
      code: "NPL-1.0",
      display: "Netscape Public License v1.0",
      definition: "Netscape Public License v1.0.",
    },
    {
      code: "NPL-1.1",
      display: "Netscape Public License v1.1",
      definition: "Netscape Public License v1.1.",
    },
    {
      code: "NPOSL-3.0",
      display: "Non-Profit Open Software License 3.0",
      definition: "Non-Profit Open Software License 3.0.",
    },
    { code: "NRL", display: "NRL License", definition: "NRL License." },
    { code: "NTP", display: "NTP License", definition: "NTP License." },
    {
      code: "OCCT-PL",
      display: "Open CASCADE Technology Public License",
      definition: "Open CASCADE Technology Public License.",
    },
    {
      code: "OCLC-2.0",
      display: "OCLC Research Public License 2.0",
      definition: "OCLC Research Public License 2.0.",
    },
    {
      code: "ODbL-1.0",
      display: "ODC Open Database License v1.0",
      definition: "ODC Open Database License v1.0.",
    },
    {
      code: "OFL-1.0",
      display: "SIL Open Font License 1.0",
      definition: "SIL Open Font License 1.0.",
    },
    {
      code: "OFL-1.1",
      display: "SIL Open Font License 1.1",
      definition: "SIL Open Font License 1.1.",
    },
    {
      code: "OGTSL",
      display: "Open Group Test Suite License",
      definition: "Open Group Test Suite License.",
    },
    {
      code: "OLDAP-1.1",
      display: "Open LDAP Public License v1.1",
      definition: "Open LDAP Public License v1.1.",
    },
    {
      code: "OLDAP-1.2",
      display: "Open LDAP Public License v1.2",
      definition: "Open LDAP Public License v1.2.",
    },
    {
      code: "OLDAP-1.3",
      display: "Open LDAP Public License v1.3",
      definition: "Open LDAP Public License v1.3.",
    },
    {
      code: "OLDAP-1.4",
      display: "Open LDAP Public License v1.4",
      definition: "Open LDAP Public License v1.4.",
    },
    {
      code: "OLDAP-2.0.1",
      display: "Open LDAP Public License v2.0.1",
      definition: "Open LDAP Public License v2.0.1.",
    },
    {
      code: "OLDAP-2.0",
      display: "Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B)",
      definition: "Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B).",
    },
    {
      code: "OLDAP-2.1",
      display: "Open LDAP Public License v2.1",
      definition: "Open LDAP Public License v2.1.",
    },
    {
      code: "OLDAP-2.2.1",
      display: "Open LDAP Public License v2.2.1",
      definition: "Open LDAP Public License v2.2.1.",
    },
    {
      code: "OLDAP-2.2.2",
      display: "Open LDAP Public License 2.2.2",
      definition: "Open LDAP Public License 2.2.2.",
    },
    {
      code: "OLDAP-2.2",
      display: "Open LDAP Public License v2.2",
      definition: "Open LDAP Public License v2.2.",
    },
    {
      code: "OLDAP-2.3",
      display: "Open LDAP Public License v2.3",
      definition: "Open LDAP Public License v2.3.",
    },
    {
      code: "OLDAP-2.4",
      display: "Open LDAP Public License v2.4",
      definition: "Open LDAP Public License v2.4.",
    },
    {
      code: "OLDAP-2.5",
      display: "Open LDAP Public License v2.5",
      definition: "Open LDAP Public License v2.5.",
    },
    {
      code: "OLDAP-2.6",
      display: "Open LDAP Public License v2.6",
      definition: "Open LDAP Public License v2.6.",
    },
    {
      code: "OLDAP-2.7",
      display: "Open LDAP Public License v2.7",
      definition: "Open LDAP Public License v2.7.",
    },
    {
      code: "OLDAP-2.8",
      display: "Open LDAP Public License v2.8",
      definition: "Open LDAP Public License v2.8.",
    },
    {
      code: "OML",
      display: "Open Market License",
      definition: "Open Market License.",
    },
    {
      code: "OpenSSL",
      display: "OpenSSL License",
      definition: "OpenSSL License.",
    },
    {
      code: "OPL-1.0",
      display: "Open Public License v1.0",
      definition: "Open Public License v1.0.",
    },
    {
      code: "OSET-PL-2.1",
      display: "OSET Public License version 2.1",
      definition: "OSET Public License version 2.1.",
    },
    {
      code: "OSL-1.0",
      display: "Open Software License 1.0",
      definition: "Open Software License 1.0.",
    },
    {
      code: "OSL-1.1",
      display: "Open Software License 1.1",
      definition: "Open Software License 1.1.",
    },
    {
      code: "OSL-2.0",
      display: "Open Software License 2.0",
      definition: "Open Software License 2.0.",
    },
    {
      code: "OSL-2.1",
      display: "Open Software License 2.1",
      definition: "Open Software License 2.1.",
    },
    {
      code: "OSL-3.0",
      display: "Open Software License 3.0",
      definition: "Open Software License 3.0.",
    },
    {
      code: "PDDL-1.0",
      display: "ODC Public Domain Dedication & License 1.0",
      definition: "ODC Public Domain Dedication & License 1.0.",
    },
    {
      code: "PHP-3.0",
      display: "PHP License v3.0",
      definition: "PHP License v3.0.",
    },
    {
      code: "PHP-3.01",
      display: "PHP License v3.01",
      definition: "PHP License v3.01.",
    },
    {
      code: "Plexus",
      display: "Plexus Classworlds License",
      definition: "Plexus Classworlds License.",
    },
    {
      code: "PostgreSQL",
      display: "PostgreSQL License",
      definition: "PostgreSQL License.",
    },
    {
      code: "psfrag",
      display: "psfrag License",
      definition: "psfrag License.",
    },
    {
      code: "psutils",
      display: "psutils License",
      definition: "psutils License.",
    },
    {
      code: "Python-2.0",
      display: "Python License 2.0",
      definition: "Python License 2.0.",
    },
    { code: "Qhull", display: "Qhull License", definition: "Qhull License." },
    {
      code: "QPL-1.0",
      display: "Q Public License 1.0",
      definition: "Q Public License 1.0.",
    },
    { code: "Rdisc", display: "Rdisc License", definition: "Rdisc License." },
    {
      code: "RHeCos-1.1",
      display: "Red Hat eCos Public License v1.1",
      definition: "Red Hat eCos Public License v1.1.",
    },
    {
      code: "RPL-1.1",
      display: "Reciprocal Public License 1.1",
      definition: "Reciprocal Public License 1.1.",
    },
    {
      code: "RPL-1.5",
      display: "Reciprocal Public License 1.5",
      definition: "Reciprocal Public License 1.5.",
    },
    {
      code: "RPSL-1.0",
      display: "RealNetworks Public Source License v1.0",
      definition: "RealNetworks Public Source License v1.0.",
    },
    {
      code: "RSA-MD",
      display: "RSA Message-Digest License",
      definition: "RSA Message-Digest License.",
    },
    {
      code: "RSCPL",
      display: "Ricoh Source Code Public License",
      definition: "Ricoh Source Code Public License.",
    },
    { code: "Ruby", display: "Ruby License", definition: "Ruby License." },
    {
      code: "SAX-PD",
      display: "Sax Public Domain Notice",
      definition: "Sax Public Domain Notice.",
    },
    {
      code: "Saxpath",
      display: "Saxpath License",
      definition: "Saxpath License.",
    },
    {
      code: "SCEA",
      display: "SCEA Shared Source License",
      definition: "SCEA Shared Source License.",
    },
    {
      code: "Sendmail",
      display: "Sendmail License",
      definition: "Sendmail License.",
    },
    {
      code: "SGI-B-1.0",
      display: "SGI Free Software License B v1.0",
      definition: "SGI Free Software License B v1.0.",
    },
    {
      code: "SGI-B-1.1",
      display: "SGI Free Software License B v1.1",
      definition: "SGI Free Software License B v1.1.",
    },
    {
      code: "SGI-B-2.0",
      display: "SGI Free Software License B v2.0",
      definition: "SGI Free Software License B v2.0.",
    },
    {
      code: "SimPL-2.0",
      display: "Simple Public License 2.0",
      definition: "Simple Public License 2.0.",
    },
    {
      code: "SISSL-1.2",
      display: "Sun Industry Standards Source License v1.2",
      definition: "Sun Industry Standards Source License v1.2.",
    },
    {
      code: "SISSL",
      display: "Sun Industry Standards Source License v1.1",
      definition: "Sun Industry Standards Source License v1.1.",
    },
    {
      code: "Sleepycat",
      display: "Sleepycat License",
      definition: "Sleepycat License.",
    },
    {
      code: "SMLNJ",
      display: "Standard ML of New Jersey License",
      definition: "Standard ML of New Jersey License.",
    },
    {
      code: "SMPPL",
      display: "Secure Messaging Protocol Public License",
      definition: "Secure Messaging Protocol Public License.",
    },
    {
      code: "SNIA",
      display: "SNIA Public License 1.1",
      definition: "SNIA Public License 1.1.",
    },
    {
      code: "Spencer-86",
      display: "Spencer License 86",
      definition: "Spencer License 86.",
    },
    {
      code: "Spencer-94",
      display: "Spencer License 94",
      definition: "Spencer License 94.",
    },
    {
      code: "Spencer-99",
      display: "Spencer License 99",
      definition: "Spencer License 99.",
    },
    {
      code: "SPL-1.0",
      display: "Sun Public License v1.0",
      definition: "Sun Public License v1.0.",
    },
    {
      code: "SugarCRM-1.1.3",
      display: "SugarCRM Public License v1.1.3",
      definition: "SugarCRM Public License v1.1.3.",
    },
    {
      code: "SWL",
      display: "Scheme Widget Library (SWL) Software License Agreement",
      definition: "Scheme Widget Library (SWL) Software License Agreement.",
    },
    { code: "TCL", display: "TCL/TK License", definition: "TCL/TK License." },
    {
      code: "TCP-wrappers",
      display: "TCP Wrappers License",
      definition: "TCP Wrappers License.",
    },
    {
      code: "TMate",
      display: "TMate Open Source License",
      definition: "TMate Open Source License.",
    },
    {
      code: "TORQUE-1.1",
      display: "TORQUE v2.5+ Software License v1.1",
      definition: "TORQUE v2.5+ Software License v1.1.",
    },
    {
      code: "TOSL",
      display: "Trusster Open Source License",
      definition: "Trusster Open Source License.",
    },
    {
      code: "Unicode-DFS-2015",
      display: "Unicode License Agreement - Data Files and Software (2015)",
      definition: "Unicode License Agreement - Data Files and Software (2015).",
    },
    {
      code: "Unicode-DFS-2016",
      display: "Unicode License Agreement - Data Files and Software (2016)",
      definition: "Unicode License Agreement - Data Files and Software (2016).",
    },
    {
      code: "Unicode-TOU",
      display: "Unicode Terms of Use",
      definition: "Unicode Terms of Use.",
    },
    {
      code: "Unlicense",
      display: "The Unlicense",
      definition: "The Unlicense.",
    },
    {
      code: "UPL-1.0",
      display: "Universal Permissive License v1.0",
      definition: "Universal Permissive License v1.0.",
    },
    { code: "Vim", display: "Vim License", definition: "Vim License." },
    {
      code: "VOSTROM",
      display: "VOSTROM Public License for Open Source",
      definition: "VOSTROM Public License for Open Source.",
    },
    {
      code: "VSL-1.0",
      display: "Vovida Software License v1.0",
      definition: "Vovida Software License v1.0.",
    },
    {
      code: "W3C-19980720",
      display: "W3C Software Notice and License (1998-07-20)",
      definition: "W3C Software Notice and License (1998-07-20).",
    },
    {
      code: "W3C-20150513",
      display: "W3C Software Notice and Document License (2015-05-13)",
      definition: "W3C Software Notice and Document License (2015-05-13).",
    },
    {
      code: "W3C",
      display: "W3C Software Notice and License (2002-12-31)",
      definition: "W3C Software Notice and License (2002-12-31).",
    },
    {
      code: "Watcom-1.0",
      display: "Sybase Open Watcom Public License 1.0",
      definition: "Sybase Open Watcom Public License 1.0.",
    },
    {
      code: "Wsuipa",
      display: "Wsuipa License",
      definition: "Wsuipa License.",
    },
    {
      code: "WTFPL",
      display: "Do What The F*ck You Want To Public License",
      definition: "Do What The F*ck You Want To Public License.",
    },
    { code: "X11", display: "X11 License", definition: "X11 License." },
    { code: "Xerox", display: "Xerox License", definition: "Xerox License." },
    {
      code: "XFree86-1.1",
      display: "XFree86 License 1.1",
      definition: "XFree86 License 1.1.",
    },
    {
      code: "xinetd",
      display: "xinetd License",
      definition: "xinetd License.",
    },
    { code: "Xnet", display: "X.Net License", definition: "X.Net License." },
    { code: "xpp", display: "XPP License", definition: "XPP License." },
    { code: "XSkat", display: "XSkat License", definition: "XSkat License." },
    {
      code: "YPL-1.0",
      display: "Yahoo! Public License v1.0",
      definition: "Yahoo! Public License v1.0.",
    },
    {
      code: "YPL-1.1",
      display: "Yahoo! Public License v1.1",
      definition: "Yahoo! Public License v1.1.",
    },
    { code: "Zed", display: "Zed License", definition: "Zed License." },
    {
      code: "Zend-2.0",
      display: "Zend License v2.0",
      definition: "Zend License v2.0.",
    },
    {
      code: "Zimbra-1.3",
      display: "Zimbra Public License v1.3",
      definition: "Zimbra Public License v1.3.",
    },
    {
      code: "Zimbra-1.4",
      display: "Zimbra Public License v1.4",
      definition: "Zimbra Public License v1.4.",
    },
    {
      code: "zlib-acknowledgement",
      display: "zlib/libpng License with Acknowledgement",
      definition: "zlib/libpng License with Acknowledgement.",
    },
    { code: "Zlib", display: "zlib License", definition: "zlib License." },
    {
      code: "ZPL-1.1",
      display: "Zope Public License 1.1",
      definition: "Zope Public License 1.1.",
    },
    {
      code: "ZPL-2.0",
      display: "Zope Public License 2.0",
      definition: "Zope Public License 2.0.",
    },
    {
      code: "ZPL-2.1",
      display: "Zope Public License 2.1",
      definition: "Zope Public License 2.1.",
    },
  ],
};
