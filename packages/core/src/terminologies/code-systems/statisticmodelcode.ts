/**
 * The role that the assertion variable plays.
 * http://terminology.hl7.org/CodeSystem/statistic-model-code
 */
export const StatisticModelCodeCodeSystem = {
  resourceType: "CodeSystem",
  id: "statistic-model-code",
  meta: {
    lastUpdated: "2022-05-28T13:47:40+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>This code system http://terminology.hl7.org/CodeSystem/statistic-model-code defines the following codes:</p>\n      <table class="codes">\n        <tr>\n          <td style="white-space:nowrap">\n            <b>Code</b>\n          </td>\n          <td>\n            <b>Display</b>\n          </td>\n          <td>\n            <b>Definition</b>\n          </td>\n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">oneTailedTest\n            \n            <a name="statistic-model-code-oneTailedTest"> </a>\n          \n          </td>\n          \n          <td>one-tailed test (1 threshold)</td>\n          \n          <td>Used for one-tailed test (1 threshold), no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">twoTailedTest\n            \n            <a name="statistic-model-code-twoTailedTest"> </a>\n          \n          </td>\n          \n          <td>two-tailed test (2 thresholds)</td>\n          \n          <td>Used for two-tailed test (2 threshold), no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">zTest\n            \n            <a name="statistic-model-code-zTest"> </a>\n          \n          </td>\n          \n          <td>z-test</td>\n          \n          <td>Used for z-test, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">oneSampleTTest\n            \n            <a name="statistic-model-code-oneSampleTTest"> </a>\n          \n          </td>\n          \n          <td>1-sample t-test</td>\n          \n          <td>Used for 1-sample t-test, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">twoSampleTTest\n            \n            <a name="statistic-model-code-twoSampleTTest"> </a>\n          \n          </td>\n          \n          <td>2-sample t-test</td>\n          \n          <td>Used for 2-sample t-test, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">pairedTTest\n            \n            <a name="statistic-model-code-pairedTTest"> </a>\n          \n          </td>\n          \n          <td>paired t-test</td>\n          \n          <td>Used for paired t-test, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">chiSquareTest\n            \n            <a name="statistic-model-code-chiSquareTest"> </a>\n          \n          </td>\n          \n          <td>Chi-square test</td>\n          \n          <td>Used for Chi-square test, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">chiSquareTestTrend\n            \n            <a name="statistic-model-code-chiSquareTestTrend"> </a>\n          \n          </td>\n          \n          <td>Chi-square test for trend</td>\n          \n          <td>Used for Chi-square test for trend, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">pearsonCorrelation\n            \n            <a name="statistic-model-code-pearsonCorrelation"> </a>\n          \n          </td>\n          \n          <td>Pearson correlation</td>\n          \n          <td>Used for Pearson correlation, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">anova\n            \n            <a name="statistic-model-code-anova"> </a>\n          \n          </td>\n          \n          <td>ANOVA (ANalysis Of VAriance)</td>\n          \n          <td>Used for ANOVA method of analysis, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">anovaOneWay\n            \n            <a name="statistic-model-code-anovaOneWay"> </a>\n          \n          </td>\n          \n          <td>one-way ANOVA</td>\n          \n          <td>Used for one-way ANOVA method of analysis, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">anovaTwoWay\n            \n            <a name="statistic-model-code-anovaTwoWay"> </a>\n          \n          </td>\n          \n          <td>2-way ANOVA without replication</td>\n          \n          <td>Used for 2-way ANOVA without replication method of analysis, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">anovaTwoWayReplication\n            \n            <a name="statistic-model-code-anovaTwoWayReplication"> </a>\n          \n          </td>\n          \n          <td>2-way ANOVA with replication</td>\n          \n          <td>Used for 2-way ANOVA with replication method of analysis, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">manova\n            \n            <a name="statistic-model-code-manova"> </a>\n          \n          </td>\n          \n          <td>multivariate ANOVA (MANOVA)</td>\n          \n          <td>Used for multivariate ANOVA (MANOVA) method of analysis, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">anovaThreeWay\n            \n            <a name="statistic-model-code-anovaThreeWay"> </a>\n          \n          </td>\n          \n          <td>3-way ANOVA</td>\n          \n          <td>Used for 3-way ANOVA method of analysis, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">signTest\n            \n            <a name="statistic-model-code-signTest"> </a>\n          \n          </td>\n          \n          <td>sign test</td>\n          \n          <td>Used for sign test, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">wilcoxonSignedRankTest\n            \n            <a name="statistic-model-code-wilcoxonSignedRankTest"> </a>\n          \n          </td>\n          \n          <td>Wilcoxon signed-rank test</td>\n          \n          <td>Used for Wilcoxon signed-rank test, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">wilcoxonRankSumTest\n            \n            <a name="statistic-model-code-wilcoxonRankSumTest"> </a>\n          \n          </td>\n          \n          <td>Wilcoxon rank-sum test</td>\n          \n          <td>Used for Wilcoxon rank-sum test, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">mannWhitneyUTest\n            \n            <a name="statistic-model-code-mannWhitneyUTest"> </a>\n          \n          </td>\n          \n          <td>Mann-Whitney U test</td>\n          \n          <td>Used for Mann-Whitney U test, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">fishersExactTest\n            \n            <a name="statistic-model-code-fishersExactTest"> </a>\n          \n          </td>\n          \n          <td>Fisher’s exact test</td>\n          \n          <td>Used for Fisher\'s exact test, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">mcnemarsTest\n            \n            <a name="statistic-model-code-mcnemarsTest"> </a>\n          \n          </td>\n          \n          <td>McNemar’s test</td>\n          \n          <td>Used for McNemar\'s test, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">kruskalWallisTest\n            \n            <a name="statistic-model-code-kruskalWallisTest"> </a>\n          \n          </td>\n          \n          <td>Kruskal Wallis test</td>\n          \n          <td>Used for Kruskal Wallis test, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">spearmanCorrelation\n            \n            <a name="statistic-model-code-spearmanCorrelation"> </a>\n          \n          </td>\n          \n          <td>Spearman correlation</td>\n          \n          <td>Used for Spearman correlation, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">kendallCorrelation\n            \n            <a name="statistic-model-code-kendallCorrelation"> </a>\n          \n          </td>\n          \n          <td>Kendall correlation</td>\n          \n          <td>Used for Kendall correlation, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">friedmanTest\n            \n            <a name="statistic-model-code-friedmanTest"> </a>\n          \n          </td>\n          \n          <td>Friedman test</td>\n          \n          <td>Used for Friedman test, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">goodmanKruskasGamma\n            \n            <a name="statistic-model-code-goodmanKruskasGamma"> </a>\n          \n          </td>\n          \n          <td>Goodman Kruska’s Gamma</td>\n          \n          <td>Used for Goodman Kruska’s Gamma, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glm\n            \n            <a name="statistic-model-code-glm"> </a>\n          \n          </td>\n          \n          <td>GLM (Generalized Linear Model)</td>\n          \n          <td>Used for GLM (Generalized Linear Model), no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glmProbit\n            \n            <a name="statistic-model-code-glmProbit"> </a>\n          \n          </td>\n          \n          <td>GLM with probit link</td>\n          \n          <td>Used for GLM with probit link, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glmLogit\n            \n            <a name="statistic-model-code-glmLogit"> </a>\n          \n          </td>\n          \n          <td>GLM with logit link</td>\n          \n          <td>Used for GLM with logit link, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glmIdentity\n            \n            <a name="statistic-model-code-glmIdentity"> </a>\n          \n          </td>\n          \n          <td>GLM with identity link</td>\n          \n          <td>Used for GLM with identity link, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glmLog\n            \n            <a name="statistic-model-code-glmLog"> </a>\n          \n          </td>\n          \n          <td>GLM with log link</td>\n          \n          <td>Used for GLM with log link, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glmGeneralizedLogit\n            \n            <a name="statistic-model-code-glmGeneralizedLogit"> </a>\n          \n          </td>\n          \n          <td>GLM with generalized logit link</td>\n          \n          <td>Used for GLM with generalized logit link, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glmm\n            \n            <a name="statistic-model-code-glmm"> </a>\n          \n          </td>\n          \n          <td>Generalized linear mixed model (GLMM)</td>\n          \n          <td>Used for Generalized linear mixed model (GLMM), no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glmmProbit\n            \n            <a name="statistic-model-code-glmmProbit"> </a>\n          \n          </td>\n          \n          <td>GLMM with probit link</td>\n          \n          <td>Used for GLMM with probit link, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glmmLogit\n            \n            <a name="statistic-model-code-glmmLogit"> </a>\n          \n          </td>\n          \n          <td>GLMM with logit link</td>\n          \n          <td>Used for GLMM with logit link, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glmmIdentity\n            \n            <a name="statistic-model-code-glmmIdentity"> </a>\n          \n          </td>\n          \n          <td>GLMM with identity link</td>\n          \n          <td>Used for GLMM with identity link, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glmmLog\n            \n            <a name="statistic-model-code-glmmLog"> </a>\n          \n          </td>\n          \n          <td>GLMM with log link</td>\n          \n          <td>Used for GLMM with log link, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">glmmGeneralizedLogit\n            \n            <a name="statistic-model-code-glmmGeneralizedLogit"> </a>\n          \n          </td>\n          \n          <td>GLMM with generalized logit link</td>\n          \n          <td>Used for GLMM with generalized logit link, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">linearRegression\n            \n            <a name="statistic-model-code-linearRegression"> </a>\n          \n          </td>\n          \n          <td>Linear Regression</td>\n          \n          <td>Used for linear regression method of analysis, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">logisticRegression\n            \n            <a name="statistic-model-code-logisticRegression"> </a>\n          \n          </td>\n          \n          <td>Logistic Regression</td>\n          \n          <td>Used for logistic regression method of analysis, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">polynomialRegression\n            \n            <a name="statistic-model-code-polynomialRegression"> </a>\n          \n          </td>\n          \n          <td>Polynomial Regression</td>\n          \n          <td>Used for Polynomial regression method of analysis, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">coxProportionalHazards\n            \n            <a name="statistic-model-code-coxProportionalHazards"> </a>\n          \n          </td>\n          \n          <td>Cox Proportional Hazards</td>\n          \n          <td>Used for Cox proportional hazards method of analysis, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">binomialDistributionRegression\n            \n            <a name="statistic-model-code-binomialDistributionRegression"> </a>\n          \n          </td>\n          \n          <td>Binomial Distribution for Regression</td>\n          \n          <td>Used for Binomial Distribution for Regression, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">multinomialDistributionRegression\n            \n            <a name="statistic-model-code-multinomialDistributionRegression"> </a>\n          \n          </td>\n          \n          <td>Multinomial Distribution for Regression</td>\n          \n          <td>Used for Multinomial Distribution for Regression, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">poissonRegression\n            \n            <a name="statistic-model-code-poissonRegression"> </a>\n          \n          </td>\n          \n          <td>Poisson Regression</td>\n          \n          <td>Used for Poisson Regression, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">negativeBinomialRegression\n            \n            <a name="statistic-model-code-negativeBinomialRegression"> </a>\n          \n          </td>\n          \n          <td>Negative Binomial Regression</td>\n          \n          <td>Used for Negative Binomial Regression, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">zeroCellConstant\n            \n            <a name="statistic-model-code-zeroCellConstant"> </a>\n          \n          </td>\n          \n          <td>Zero-cell adjustment with constant</td>\n          \n          <td>Zero-cell adjustment done by adding a constant to all cells of affected studies, paired with &quot;value&quot; to define the constant</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">zeroCellContinuityCorrection\n            \n            <a name="statistic-model-code-zeroCellContinuityCorrection"> </a>\n          \n          </td>\n          \n          <td>Zero-cell adjustment with continuity correction</td>\n          \n          <td>Zero-cell adjustment done by treatment arm continuity correction, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">adjusted\n            \n            <a name="statistic-model-code-adjusted"> </a>\n          \n          </td>\n          \n          <td>Adjusted analysis</td>\n          \n          <td>Used for adjusted analysis, paired with variable element(s)</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">interactionTerm\n            \n            <a name="statistic-model-code-interactionTerm"> </a>\n          \n          </td>\n          \n          <td>Interaction term</td>\n          \n          <td>Used for interaction term, paired with &quot;value&quot; and two or more variable elements</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">manteHaenszelMethod\n            \n            <a name="statistic-model-code-manteHaenszelMethod"> </a>\n          \n          </td>\n          \n          <td>Mantel-Haenszel method</td>\n          \n          <td>Used for Mantel-Haenszel method, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">metaAnalysis\n            \n            <a name="statistic-model-code-metaAnalysis"> </a>\n          \n          </td>\n          \n          <td>Meta-analysis</td>\n          \n          <td>Used for meta-analysis, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">inverseVariance\n            \n            <a name="statistic-model-code-inverseVariance"> </a>\n          \n          </td>\n          \n          <td>Inverse variance method</td>\n          \n          <td>Used for inverse variance method of meta-analysis, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">petoMethod\n            \n            <a name="statistic-model-code-petoMethod"> </a>\n          \n          </td>\n          \n          <td>Peto method</td>\n          \n          <td>Used for Peto method of meta-analysis, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">hartungKnapp\n            \n            <a name="statistic-model-code-hartungKnapp"> </a>\n          \n          </td>\n          \n          <td>Hartung-Knapp adjustment</td>\n          \n          <td>Hartung-Knapp/Hartung-Knapp-Sidik-Jonkman adjustment used in meta-analysis, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">modifiedHartungKnapp\n            \n            <a name="statistic-model-code-modifiedHartungKnapp"> </a>\n          \n          </td>\n          \n          <td>Modified Hartung-Knapp adjustment</td>\n          \n          <td>Modified Hartung-Knapp/Hartung-Knapp-Sidik-Jonkman adjustment used in meta-analysis, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">effectsFixed\n            \n            <a name="statistic-model-code-effectsFixed"> </a>\n          \n          </td>\n          \n          <td>Fixed-effects</td>\n          \n          <td>From a fixed-effects analysis, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">effectsRandom\n            \n            <a name="statistic-model-code-effectsRandom"> </a>\n          \n          </td>\n          \n          <td>Random-effects</td>\n          \n          <td>From a random-effects analysis, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">chiSquareTestHomogeneity\n            \n            <a name="statistic-model-code-chiSquareTestHomogeneity"> </a>\n          \n          </td>\n          \n          <td>Chi-square test for homogeneity</td>\n          \n          <td>Used for Chi-square test for homogeneity, may be paired with &quot;value&quot; to express degrees of freedom</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">dersimonianLairdMethod\n            \n            <a name="statistic-model-code-dersimonianLairdMethod"> </a>\n          \n          </td>\n          \n          <td>Dersimonian-Laird method</td>\n          \n          <td>Used for Dersimonian-Laird method of tau estimation, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">pauleMandelMethod\n            \n            <a name="statistic-model-code-pauleMandelMethod"> </a>\n          \n          </td>\n          \n          <td>Paule-Mandel method</td>\n          \n          <td>Used for Paule-Mandel method of tau estimation, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">restrictedLikelihood\n            \n            <a name="statistic-model-code-restrictedLikelihood"> </a>\n          \n          </td>\n          \n          <td>Restricted Maximum Likelihood method</td>\n          \n          <td>Used for Restricted Maximum Likelihood method of tau estimation, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">maximumLikelihood\n            \n            <a name="statistic-model-code-maximumLikelihood"> </a>\n          \n          </td>\n          \n          <td>Maximum Likelihood method</td>\n          \n          <td>Used for Maximum Likelihood method of tau estimation, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">empiricalBayes\n            \n            <a name="statistic-model-code-empiricalBayes"> </a>\n          \n          </td>\n          \n          <td>Empirical Bayes method</td>\n          \n          <td>Used for Empirical Bayes method of tau estimation, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">hunterSchmidt\n            \n            <a name="statistic-model-code-hunterSchmidt"> </a>\n          \n          </td>\n          \n          <td>Hunter-Schmidt method</td>\n          \n          <td>Used for Hunter-Schmidt method of tau estimation, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">sidikJonkman\n            \n            <a name="statistic-model-code-sidikJonkman"> </a>\n          \n          </td>\n          \n          <td>Sidik-Jonkman method</td>\n          \n          <td>Used for Sidik-Jonkman method of tau estimation, no additional elements needed</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">hedgesMethod\n            \n            <a name="statistic-model-code-hedgesMethod"> </a>\n          \n          </td>\n          \n          <td>Hedges method</td>\n          \n          <td>Used for Hedges method of tau estimation, no additional elements needed</td>\n        \n        </tr>\n      \n\n        <tr>\n          \n          <td style="white-space:nowrap">tauDersimonianLaird\n            \n            <a name="statistic-model-code-tauDersimonianLaird"> </a>\n          \n          </td>\n          \n          <td>Dersimonian-Laird method</td>\n          \n          <td>Dersimonian-Laird method for tau squared</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">tauPauleMandel\n            \n            <a name="statistic-model-code-tauPauleMandel"> </a>\n          \n          </td>\n          \n          <td>Paule-Mandel method</td>\n          \n          <td>Paule-Mandel method for tau squared</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">tauRestrictedMaximumLikelihood\n            \n            <a name="statistic-model-code-tauRestrictedMaximumLikelihood"> </a>\n          \n          </td>\n          \n          <td>Restricted Maximum Likelihood method</td>\n          \n          <td>Restricted Maximum Likelihood method for tau squared</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">tauMaximumLikelihood\n            \n            <a name="statistic-model-code-tauMaximumLikelihood"> </a>\n          \n          </td>\n          \n          <td>Maximum Likelihood method</td>\n          \n          <td>Maximum Likelihood method for tau squared</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">tauEmpiricalBayes\n            \n            <a name="statistic-model-code-tauEmpiricalBayes"> </a>\n          \n          </td>\n          \n          <td>Empirical Bayes method</td>\n          \n          <td>Empirical Bayes method for tau squared</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">tauHunterSchmidt\n            \n            <a name="statistic-model-code-tauHunterSchmidt"> </a>\n          \n          </td>\n          \n          <td>Hunter-Schmidt method</td>\n          \n          <td>Hunter-Schmidt method for tau squared</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">tauSidikJonkman\n            \n            <a name="statistic-model-code-tauSidikJonkman"> </a>\n          \n          </td>\n          \n          <td>Sidik-Jonkman method</td>\n          \n          <td>Sidik-Jonkman method for tau squared</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">tauHedges\n            \n            <a name="statistic-model-code-tauHedges"> </a>\n          \n          </td>\n          \n          <td>Hedges method</td>\n          \n          <td>Hedges method for tau squared</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">poolMantelHaenzsel\n            \n            <a name="statistic-model-code-poolMantelHaenzsel"> </a>\n          \n          </td>\n          \n          <td>Mantel-Haenszel method</td>\n          \n          <td>Mantel-Haenszel method for pooling in meta-analysis</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">poolInverseVariance\n            \n            <a name="statistic-model-code-poolInverseVariance"> </a>\n          \n          </td>\n          \n          <td>Inverse variance method</td>\n          \n          <td>Inverse variance method for pooling in meta-analysis</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">poolPeto\n            \n            <a name="statistic-model-code-poolPeto"> </a>\n          \n          </td>\n          \n          <td>Peto method</td>\n          \n          <td>Peto method for pooling in meta-analysis</td>\n        \n        </tr>\n\n\n\n        <tr>\n          \n          <td style="white-space:nowrap">poolGeneralizedLinearMixedModel\n            \n            <a name="statistic-model-code-poolGeneralizedLinearMixedModel"> </a>\n          \n          </td>\n          \n          <td>Generalized linear mixed model (GLMM)</td>\n          \n          <td>Generalized linear mixed model (GLMM) method for pooling in meta-analysis</td>\n        \n        </tr>\n\t  \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
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
  url: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.3.1539",
    },
  ],
  version: "4.3.0",
  name: "StatisticModelCode",
  title: "StatisticModelCode",
  status: "draft",
  experimental: false,
  date: "2021-08-05T12:00:00+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "The role that the assertion variable plays.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/statistic-model-code",
  content: "complete",
  concept: [
    {
      code: "oneTailedTest",
      display: "one-tailed test (1 threshold)",
      definition:
        "Used for one-tailed test (1 threshold), no additional elements needed",
    },
    {
      code: "twoTailedTest",
      display: "two-tailed test (2 thresholds)",
      definition:
        "Used for two-tailed test (2 threshold), no additional elements needed",
    },
    {
      code: "zTest",
      display: "z-test",
      definition: "Used for z-test, no additional elements needed",
    },
    {
      code: "oneSampleTTest",
      display: "1-sample t-test",
      definition:
        'Used for 1-sample t-test, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "twoSampleTTest",
      display: "2-sample t-test",
      definition:
        'Used for 2-sample t-test, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "pairedTTest",
      display: "paired t-test",
      definition:
        'Used for paired t-test, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "chiSquareTest",
      display: "Chi-square test",
      definition:
        'Used for Chi-square test, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "chiSquareTestTrend",
      display: "Chi-square test for trend",
      definition:
        'Used for Chi-square test for trend, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "pearsonCorrelation",
      display: "Pearson correlation",
      definition: "Used for Pearson correlation, no additional elements needed",
    },
    {
      code: "anova",
      display: "ANOVA (ANalysis Of VAriance)",
      definition:
        'Used for ANOVA method of analysis, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "anovaOneWay",
      display: "one-way ANOVA",
      definition:
        'Used for one-way ANOVA method of analysis, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "anovaTwoWay",
      display: "2-way ANOVA without replication",
      definition:
        'Used for 2-way ANOVA without replication method of analysis, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "anovaTwoWayReplication",
      display: "2-way ANOVA with replication",
      definition:
        'Used for 2-way ANOVA with replication method of analysis, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "manova",
      display: "multivariate ANOVA (MANOVA)",
      definition:
        'Used for multivariate ANOVA (MANOVA) method of analysis, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "anovaThreeWay",
      display: "3-way ANOVA",
      definition:
        'Used for 3-way ANOVA method of analysis, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "signTest",
      display: "sign test",
      definition: "Used for sign test, no additional elements needed",
    },
    {
      code: "wilcoxonSignedRankTest",
      display: "Wilcoxon signed-rank test",
      definition:
        "Used for Wilcoxon signed-rank test, no additional elements needed",
    },
    {
      code: "wilcoxonRankSumTest",
      display: "Wilcoxon rank-sum test",
      definition:
        "Used for Wilcoxon rank-sum test, no additional elements needed",
    },
    {
      code: "mannWhitneyUTest",
      display: "Mann-Whitney U test",
      definition: "Used for Mann-Whitney U test, no additional elements needed",
    },
    {
      code: "fishersExactTest",
      display: "Fisher’s exact test",
      definition:
        'Used for Fisher\'s exact test, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "mcnemarsTest",
      display: "McNemar’s test",
      definition: "Used for McNemar's test, no additional elements needed",
    },
    {
      code: "kruskalWallisTest",
      display: "Kruskal Wallis test",
      definition:
        'Used for Kruskal Wallis test, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "spearmanCorrelation",
      display: "Spearman correlation",
      definition:
        "Used for Spearman correlation, no additional elements needed",
    },
    {
      code: "kendallCorrelation",
      display: "Kendall correlation",
      definition: "Used for Kendall correlation, no additional elements needed",
    },
    {
      code: "friedmanTest",
      display: "Friedman test",
      definition: "Used for Friedman test, no additional elements needed",
    },
    {
      code: "goodmanKruskasGamma",
      display: "Goodman Kruska’s Gamma",
      definition:
        "Used for Goodman Kruska’s Gamma, no additional elements needed",
    },
    {
      code: "glm",
      display: "GLM (Generalized Linear Model)",
      definition:
        "Used for GLM (Generalized Linear Model), no additional elements needed",
    },
    {
      code: "glmProbit",
      display: "GLM with probit link",
      definition:
        "Used for GLM with probit link, no additional elements needed",
    },
    {
      code: "glmLogit",
      display: "GLM with logit link",
      definition: "Used for GLM with logit link, no additional elements needed",
    },
    {
      code: "glmIdentity",
      display: "GLM with identity link",
      definition:
        "Used for GLM with identity link, no additional elements needed",
    },
    {
      code: "glmLog",
      display: "GLM with log link",
      definition: "Used for GLM with log link, no additional elements needed",
    },
    {
      code: "glmGeneralizedLogit",
      display: "GLM with generalized logit link",
      definition:
        "Used for GLM with generalized logit link, no additional elements needed",
    },
    {
      code: "glmm",
      display: "Generalized linear mixed model (GLMM)",
      definition:
        "Used for Generalized linear mixed model (GLMM), no additional elements needed",
    },
    {
      code: "glmmProbit",
      display: "GLMM with probit link",
      definition:
        "Used for GLMM with probit link, no additional elements needed",
    },
    {
      code: "glmmLogit",
      display: "GLMM with logit link",
      definition:
        "Used for GLMM with logit link, no additional elements needed",
    },
    {
      code: "glmmIdentity",
      display: "GLMM with identity link",
      definition:
        "Used for GLMM with identity link, no additional elements needed",
    },
    {
      code: "glmmLog",
      display: "GLMM with log link",
      definition: "Used for GLMM with log link, no additional elements needed",
    },
    {
      code: "glmmGeneralizedLogit",
      display: "GLMM with generalized logit link",
      definition:
        "Used for GLMM with generalized logit link, no additional elements needed",
    },
    {
      code: "linearRegression",
      display: "Linear Regression",
      definition:
        "Used for linear regression method of analysis, no additional elements needed",
    },
    {
      code: "logisticRegression",
      display: "Logistic Regression",
      definition:
        "Used for logistic regression method of analysis, no additional elements needed",
    },
    {
      code: "polynomialRegression",
      display: "Polynomial Regression",
      definition:
        "Used for Polynomial regression method of analysis, no additional elements needed",
    },
    {
      code: "coxProportionalHazards",
      display: "Cox Proportional Hazards",
      definition:
        "Used for Cox proportional hazards method of analysis, no additional elements needed",
    },
    {
      code: "binomialDistributionRegression",
      display: "Binomial Distribution for Regression",
      definition:
        "Used for Binomial Distribution for Regression, no additional elements needed",
    },
    {
      code: "multinomialDistributionRegression",
      display: "Multinomial Distribution for Regression",
      definition:
        "Used for Multinomial Distribution for Regression, no additional elements needed",
    },
    {
      code: "poissonRegression",
      display: "Poisson Regression",
      definition: "Used for Poisson Regression, no additional elements needed",
    },
    {
      code: "negativeBinomialRegression",
      display: "Negative Binomial Regression",
      definition:
        "Used for Negative Binomial Regression, no additional elements needed",
    },
    {
      code: "zeroCellConstant",
      display: "Zero-cell adjustment with constant",
      definition:
        'Zero-cell adjustment done by adding a constant to all cells of affected studies, paired with "value" to define the constant',
    },
    {
      code: "zeroCellContinuityCorrection",
      display: "Zero-cell adjustment with continuity correction",
      definition:
        "Zero-cell adjustment done by treatment arm continuity correction, no additional elements needed",
    },
    {
      code: "adjusted",
      display: "Adjusted analysis",
      definition: "Used for adjusted analysis, paired with variable element(s)",
    },
    {
      code: "interactionTerm",
      display: "Interaction term",
      definition:
        'Used for interaction term, paired with "value" and two or more variable elements',
    },
    {
      code: "manteHaenszelMethod",
      display: "Mantel-Haenszel method",
      definition:
        "Used for Mantel-Haenszel method, no additional elements needed",
    },
    {
      code: "metaAnalysis",
      display: "Meta-analysis",
      definition: "Used for meta-analysis, no additional elements needed",
    },
    {
      code: "inverseVariance",
      display: "Inverse variance method",
      definition:
        "Used for inverse variance method of meta-analysis, no additional elements needed",
    },
    {
      code: "petoMethod",
      display: "Peto method",
      definition:
        "Used for Peto method of meta-analysis, no additional elements needed",
    },
    {
      code: "hartungKnapp",
      display: "Hartung-Knapp adjustment",
      definition:
        "Hartung-Knapp/Hartung-Knapp-Sidik-Jonkman adjustment used in meta-analysis, no additional elements needed",
    },
    {
      code: "modifiedHartungKnapp",
      display: "Modified Hartung-Knapp adjustment",
      definition:
        "Modified Hartung-Knapp/Hartung-Knapp-Sidik-Jonkman adjustment used in meta-analysis, no additional elements needed",
    },
    {
      code: "effectsFixed",
      display: "Fixed-effects",
      definition:
        "From a fixed-effects analysis, no additional elements needed",
    },
    {
      code: "effectsRandom",
      display: "Random-effects",
      definition:
        "From a random-effects analysis, no additional elements needed",
    },
    {
      code: "chiSquareTestHomogeneity",
      display: "Chi-square test for homogeneity",
      definition:
        'Used for Chi-square test for homogeneity, may be paired with "value" to express degrees of freedom',
    },
    {
      code: "dersimonianLairdMethod",
      display: "Dersimonian-Laird method",
      definition:
        "Used for Dersimonian-Laird method of tau estimation, no additional elements needed",
    },
    {
      code: "pauleMandelMethod",
      display: "Paule-Mandel method",
      definition:
        "Used for Paule-Mandel method of tau estimation, no additional elements needed",
    },
    {
      code: "restrictedLikelihood",
      display: "Restricted Maximum Likelihood method",
      definition:
        "Used for Restricted Maximum Likelihood method of tau estimation, no additional elements needed",
    },
    {
      code: "maximumLikelihood",
      display: "Maximum Likelihood method",
      definition:
        "Used for Maximum Likelihood method of tau estimation, no additional elements needed",
    },
    {
      code: "empiricalBayes",
      display: "Empirical Bayes method",
      definition:
        "Used for Empirical Bayes method of tau estimation, no additional elements needed",
    },
    {
      code: "hunterSchmidt",
      display: "Hunter-Schmidt method",
      definition:
        "Used for Hunter-Schmidt method of tau estimation, no additional elements needed",
    },
    {
      code: "sidikJonkman",
      display: "Sidik-Jonkman method",
      definition:
        "Used for Sidik-Jonkman method of tau estimation, no additional elements needed",
    },
    {
      code: "hedgesMethod",
      display: "Hedges method",
      definition:
        "Used for Hedges method of tau estimation, no additional elements needed",
    },
    {
      code: "tauDersimonianLaird",
      display: "Dersimonian-Laird method",
      definition: "Dersimonian-Laird method for tau squared",
    },
    {
      code: "tauPauleMandel",
      display: "Paule-Mandel method",
      definition: "Paule-Mandel method for tau squared",
    },
    {
      code: "tauRestrictedMaximumLikelihood",
      display: "Restricted Maximum Likelihood method",
      definition: "Restricted Maximum Likelihood method for tau squared",
    },
    {
      code: "tauMaximumLikelihood",
      display: "Maximum Likelihood method",
      definition: "Maximum Likelihood method for tau squared",
    },
    {
      code: "tauEmpiricalBayes",
      display: "Empirical Bayes method",
      definition: "Empirical Bayes method for tau squared",
    },
    {
      code: "tauHunterSchmidt",
      display: "Hunter-Schmidt method",
      definition: "Hunter-Schmidt method for tau squared",
    },
    {
      code: "tauSidikJonkman",
      display: "Sidik-Jonkman method",
      definition: "Sidik-Jonkman method for tau squared",
    },
    {
      code: "tauHedges",
      display: "Hedges method",
      definition: "Hedges method for tau squared",
    },
    {
      code: "poolMantelHaenzsel",
      display: "Mantel-Haenszel method",
      definition: "Mantel-Haenszel method for pooling in meta-analysis",
    },
    {
      code: "poolInverseVariance",
      display: "Inverse variance method",
      definition: "Inverse variance method for pooling in meta-analysis",
    },
    {
      code: "poolPeto",
      display: "Peto method",
      definition: "Peto method for pooling in meta-analysis",
    },
    {
      code: "poolGeneralizedLinearMixedModel",
      display: "Generalized linear mixed model (GLMM)",
      definition:
        "Generalized linear mixed model (GLMM) method for pooling in meta-analysis",
    },
  ],
};
