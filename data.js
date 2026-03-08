/**
 * Math Topics Data
 * 
 * Each grade/course is an object with:
 *   - name: display name
 *   - id: unique slug for navigation
 *   - icon: emoji for visual flair
 *   - color: HSL accent color
 *   - topics: array of { name, link } objects
 * 
 * To add a hyperlink to any topic, simply set its `link` property
 * to the desired URL string. Leave as "" for no link.
 */
const MATH_DATA = [
  {
    name: "Early Math Review",
    id: "early-math-review",
    icon: "🧒",
    color: "hsl(340, 82%, 62%)",
    topics: [
      { name: "Counting", link: "" },
      { name: "Addition and subtraction intro", link: "" },
      { name: "Place value (tens and hundreds)", link: "" },
      { name: "Addition and subtraction within 20", link: "" },
      { name: "Addition and subtraction within 100", link: "" },
      { name: "Addition and subtraction within 1000", link: "" },
      { name: "Measurement and data", link: "" },
      { name: "Geometry", link: "" }
    ]
  },
  {
    name: "Kindergarten Math",
    id: "kindergarten-math",
    icon: "🎨",
    color: "hsl(25, 95%, 60%)",
    topics: [
      { name: "Counting and place value", link: "" },
      { name: "Addition and subtraction", link: "" },
      { name: "Measurement and geometry", link: "" }
    ]
  },
  {
    name: "1st Grade Math",
    id: "1st-grade-math",
    icon: "1️⃣",
    color: "hsl(45, 93%, 55%)",
    topics: [
      { name: "Place value", link: "" },
      { name: "Addition and subtraction", link: "" },
      { name: "Measurement, data, and geometry", link: "" }
    ]
  },
  {
    name: "2nd Grade Math",
    id: "2nd-grade-math",
    icon: "2️⃣",
    color: "hsl(130, 60%, 50%)",
    topics: [
      { name: "Add and subtract within 20", link: "" },
      { name: "Place value", link: "" },
      { name: "Add and subtract within 100", link: "" },
      { name: "Add and subtract within 1,000", link: "" },
      { name: "Money and time", link: "" },
      { name: "Measurement", link: "" },
      { name: "Data", link: "" },
      { name: "Geometry", link: "" }
    ]
  },
  {
    name: "3rd Grade Math",
    id: "3rd-grade-math",
    icon: "3️⃣",
    color: "hsl(160, 65%, 45%)",
    topics: [
      { name: "Intro to multiplication", link: "" },
      { name: "1-digit multiplication", link: "" },
      { name: "Addition, subtraction, and estimation", link: "" },
      { name: "Intro to division", link: "" },
      { name: "Understand fractions", link: "" },
      { name: "Equivalent fractions and comparing fractions", link: "" },
      { name: "More with multiplication and division", link: "" },
      { name: "Arithmetic patterns and problem solving", link: "" },
      { name: "Quadrilaterals", link: "" },
      { name: "Area", link: "" },
      { name: "Perimeter", link: "" },
      { name: "Time", link: "" },
      { name: "Measurement", link: "" },
      { name: "Represent and interpret data", link: "" }
    ]
  },
  {
    name: "4th Grade Math",
    id: "4th-grade-math",
    icon: "4️⃣",
    color: "hsl(190, 75%, 48%)",
    topics: [
      { name: "Place value", link: "" },
      { name: "Addition, subtraction, and estimation", link: "" },
      { name: "Multiply by 1-digit numbers", link: "" },
      { name: "Multiply by 2-digit numbers", link: "" },
      { name: "Division", link: "" },
      { name: "Factors, multiples and patterns", link: "" },
      { name: "Equivalent fractions and comparing fractions", link: "" },
      { name: "Add and subtract fractions", link: "" },
      { name: "Multiply fractions", link: "" },
      { name: "Understand decimals", link: "" },
      { name: "Plane figures", link: "" },
      { name: "Measuring angles", link: "" },
      { name: "Area and perimeter", link: "" },
      { name: "Units of measurement", link: "" }
    ]
  },
  {
    name: "5th Grade Math",
    id: "5th-grade-math",
    icon: "5️⃣",
    color: "hsl(210, 80%, 55%)",
    topics: [
      { name: "Decimal place value", link: "" },
      { name: "Add decimals", link: "" },
      { name: "Subtract decimals", link: "" },
      { name: "Add and subtract fractions", link: "" },
      { name: "Multi-digit multiplication and division", link: "" },
      { name: "Multiply fractions", link: "" },
      { name: "Divide fractions", link: "" },
      { name: "Multiply decimals", link: "" },
      { name: "Divide decimals", link: "" },
      { name: "Powers of ten", link: "" },
      { name: "Volume", link: "" },
      { name: "Coordinate plane", link: "" },
      { name: "Algebraic thinking", link: "" },
      { name: "Converting units of measure", link: "" },
      { name: "Line plots", link: "" },
      { name: "Properties of shapes", link: "" }
    ]
  },
  {
    name: "6th Grade Math",
    id: "6th-grade-math",
    icon: "6️⃣",
    color: "hsl(240, 65%, 60%)",
    topics: [
      { name: "Ratios", link: "" },
      { name: "Arithmetic with rational numbers", link: "" },
      { name: "Rates and percentages", link: "" },
      { name: "Exponents and order of operations", link: "" },
      { name: "Negative numbers", link: "" },
      { name: "Variables & expressions", link: "" },
      { name: "Equations & inequalities", link: "" },
      { name: "Plane figures", link: "" },
      { name: "Coordinate plane", link: "" },
      { name: "3D figures", link: "" },
      { name: "Data and statistics", link: "" },
      { name: "Khan for families", link: "" }
    ]
  },
  {
    name: "7th Grade Math",
    id: "7th-grade-math",
    icon: "7️⃣",
    color: "hsl(265, 70%, 58%)",
    topics: [
      { name: "Proportional relationships", link: "" },
      { name: "Rates and percentages", link: "" },
      { name: "Integers: addition and subtraction", link: "" },
      { name: "Rational numbers: addition and subtraction", link: "" },
      { name: "Negative numbers: multiplication and division", link: "" },
      { name: "Expressions, equations, & inequalities", link: "" },
      { name: "Statistics and probability", link: "" },
      { name: "Scale copies", link: "" },
      { name: "Geometry", link: "" }
    ]
  },
  {
    name: "8th Grade Math",
    id: "8th-grade-math",
    icon: "8️⃣",
    color: "hsl(290, 65%, 55%)",
    topics: [
      { name: "Numbers and operations", link: "" },
      { name: "Solving equations with one unknown", link: "" },
      { name: "Linear equations and functions", link: "" },
      { name: "Systems of equations", link: "" },
      { name: "Geometry", link: "" },
      { name: "Geometric transformations", link: "" },
      { name: "Data and modeling", link: "" }
    ]
  },
  {
    name: "Arithmetic",
    id: "arithmetic",
    icon: "➕",
    color: "hsl(15, 85%, 57%)",
    topics: [
      { name: "Intro to multiplication", link: "" },
      { name: "1-digit multiplication", link: "" },
      { name: "Intro to division", link: "" },
      { name: "Understand fractions", link: "" },
      { name: "Place value through 1,000,000", link: "" },
      { name: "Add and subtract through 1,000,000", link: "" },
      { name: "Multiply 1- and 2-digit numbers", link: "" },
      { name: "Divide with remainders", link: "" },
      { name: "Add and subtract fraction (like denominators)", link: "" },
      { name: "Multiply fractions", link: "" },
      { name: "Decimals and place value", link: "" },
      { name: "Add and subtract decimals", link: "" },
      { name: "Add and subtract fractions (different denominators)", link: "" },
      { name: "Multiply and divide multi-digit numbers", link: "" },
      { name: "Divide fractions", link: "" },
      { name: "Multiply and divide decimals", link: "" },
      { name: "Exponents and powers of ten", link: "" },
      { name: "Add and subtract negative numbers", link: "" },
      { name: "Multiply and divide negative numbers", link: "" }
    ]
  },
  {
    name: "Basic Geometry and Measurement",
    id: "basic-geometry-measurement",
    icon: "📐",
    color: "hsl(185, 70%, 45%)",
    topics: [
      { name: "Intro to area and perimeter", link: "" },
      { name: "Intro to mass and volume", link: "" },
      { name: "Measuring angles", link: "" },
      { name: "Plane figures", link: "" },
      { name: "Units of measurement", link: "" },
      { name: "Volume", link: "" },
      { name: "Coordinate plane", link: "" },
      { name: "Decomposing to find area", link: "" },
      { name: "3D figures", link: "" },
      { name: "Circles, cylinders, cones, and spheres", link: "" },
      { name: "Angle relationships", link: "" },
      { name: "Scale", link: "" },
      { name: "Triangle side lengths", link: "" },
      { name: "Geometric transformations", link: "" }
    ]
  },
  {
    name: "Pre-Algebra",
    id: "pre-algebra",
    icon: "🔢",
    color: "hsl(35, 90%, 55%)",
    topics: [
      { name: "Factors and multiples", link: "" },
      { name: "Patterns", link: "" },
      { name: "Ratios and rates", link: "" },
      { name: "Percentages", link: "" },
      { name: "Exponents intro and order of operations", link: "" },
      { name: "Variables & expressions", link: "" },
      { name: "Equations & inequalities introduction", link: "" },
      { name: "Percent & rational number word problems", link: "" },
      { name: "Proportional relationships", link: "" },
      { name: "One-step and two-step equations & inequalities", link: "" },
      { name: "Roots, exponents, & scientific notation", link: "" },
      { name: "Multi-step equations", link: "" },
      { name: "Two-variable equations", link: "" },
      { name: "Functions and linear models", link: "" },
      { name: "Systems of equations", link: "" }
    ]
  },
  {
    name: "Algebra 1",
    id: "algebra-1",
    icon: "📊",
    color: "hsl(220, 75%, 55%)",
    topics: [
      { name: "Algebra foundations", link: "" },
      { name: "Solving equations & inequalities", link: "" },
      { name: "Working with units", link: "" },
      { name: "Linear equations & graphs", link: "" },
      { name: "Forms of linear equations", link: "" },
      { name: "Systems of equations", link: "" },
      { name: "Inequalities (systems & graphs)", link: "" },
      { name: "Functions", link: "" },
      { name: "Sequences", link: "" },
      { name: "Absolute value & piecewise functions", link: "" },
      { name: "Exponents & radicals", link: "" },
      { name: "Exponential growth & decay", link: "" },
      { name: "Quadratics: Multiplying & factoring", link: "" },
      { name: "Quadratic functions & equations", link: "" },
      { name: "Irrational numbers", link: "" },
      { name: "Creativity in algebra", link: "" },
      { name: "Teacher resources", link: "" }
    ]
  },
  {
    name: "High School Geometry",
    id: "hs-geometry",
    icon: "📏",
    color: "hsl(170, 70%, 45%)",
    topics: [
      { name: "Performing transformations", link: "" },
      { name: "Transformation properties and proofs", link: "" },
      { name: "Congruence", link: "" },
      { name: "Similarity", link: "" },
      { name: "Right triangles & trigonometry", link: "" },
      { name: "Analytic geometry", link: "" },
      { name: "Conic sections", link: "" },
      { name: "Circles", link: "" },
      { name: "Solid geometry", link: "" }
    ]
  },
  {
    name: "Algebra 2",
    id: "algebra-2",
    icon: "📈",
    color: "hsl(250, 70%, 58%)",
    topics: [
      { name: "Polynomial arithmetic", link: "" },
      { name: "Complex numbers", link: "" },
      { name: "Polynomial factorization", link: "" },
      { name: "Polynomial division", link: "" },
      { name: "Polynomial graphs", link: "" },
      { name: "Rational exponents and radicals", link: "" },
      { name: "Exponential models", link: "" },
      { name: "Logarithms", link: "" },
      { name: "Transformations of functions", link: "" },
      { name: "Equations", link: "" },
      { name: "Trigonometry", link: "" },
      { name: "Modeling", link: "" }
    ]
  },
  {
    name: "Integrated Math 1",
    id: "integrated-math-1",
    icon: "🔗",
    color: "hsl(200, 70%, 50%)",
    topics: [
      { name: "Algebra foundations", link: "" },
      { name: "Solving equations & inequalities", link: "" },
      { name: "Working with units", link: "" },
      { name: "Linear equations & graphs", link: "" },
      { name: "Forms of linear equations", link: "" },
      { name: "Systems of equations", link: "" },
      { name: "Inequalities (systems & graphs)", link: "" },
      { name: "Functions", link: "" },
      { name: "Scatterplots", link: "" },
      { name: "Data distributions", link: "" },
      { name: "Two-way tables", link: "" },
      { name: "Sequences", link: "" },
      { name: "Exponents & radicals", link: "" },
      { name: "Exponential growth & decay", link: "" },
      { name: "Performing transformations", link: "" },
      { name: "Transformation properties and proofs", link: "" },
      { name: "Congruence", link: "" },
      { name: "Analytic geometry", link: "" }
    ]
  },
  {
    name: "Integrated Math 2",
    id: "integrated-math-2",
    icon: "🔗",
    color: "hsl(280, 60%, 55%)",
    topics: [
      { name: "Absolute value & piecewise functions", link: "" },
      { name: "Quadratics: Multiplying & factoring", link: "" },
      { name: "Quadratic functions & equations", link: "" },
      { name: "Irrational numbers", link: "" },
      { name: "Complex numbers", link: "" },
      { name: "Rational exponents and radicals", link: "" },
      { name: "Exponential models", link: "" },
      { name: "Similarity", link: "" },
      { name: "Right triangles & trigonometry", link: "" },
      { name: "Solid geometry", link: "" },
      { name: "Circles", link: "" },
      { name: "Conic sections", link: "" },
      { name: "Probability", link: "" }
    ]
  },
  {
    name: "Integrated Math 3",
    id: "integrated-math-3",
    icon: "🔗",
    color: "hsl(310, 60%, 52%)",
    topics: [
      { name: "Polynomial arithmetic", link: "" },
      { name: "Polynomial factorization", link: "" },
      { name: "Polynomial division", link: "" },
      { name: "Polynomial graphs", link: "" },
      { name: "Logarithms", link: "" },
      { name: "Transformations of functions", link: "" },
      { name: "Equations", link: "" },
      { name: "Trigonometry", link: "" },
      { name: "Modeling", link: "" },
      { name: "Study Design", link: "" },
      { name: "Binomial probability", link: "" },
      { name: "Normal distributions", link: "" },
      { name: "Rational functions", link: "" }
    ]
  },
  {
    name: "Algebra Basics",
    id: "algebra-basics",
    icon: "🅰️",
    color: "hsl(50, 85%, 50%)",
    topics: [
      { name: "Foundations", link: "" },
      { name: "Algebraic expressions", link: "" },
      { name: "Linear equations and inequalities", link: "" },
      { name: "Graphing lines and slope", link: "" },
      { name: "Systems of equations", link: "" },
      { name: "Expressions with exponents", link: "" },
      { name: "Quadratics and polynomials", link: "" },
      { name: "Equations and geometry", link: "" }
    ]
  },
  {
    name: "Trigonometry",
    id: "trigonometry",
    icon: "📐",
    color: "hsl(355, 75%, 58%)",
    topics: [
      { name: "Right triangles & trigonometry", link: "" },
      { name: "Trigonometric functions", link: "" },
      { name: "Non-right triangles & trigonometry", link: "" },
      { name: "Trigonometric equations and identities", link: "" }
    ]
  },
  {
    name: "Precalculus",
    id: "precalculus",
    icon: "🧮",
    color: "hsl(270, 65%, 55%)",
    topics: [
      { name: "Composite and inverse functions", link: "" },
      { name: "Trigonometry", link: "" },
      { name: "Complex numbers", link: "" },
      { name: "Rational functions", link: "" },
      { name: "Conic sections", link: "" },
      { name: "Vectors", link: "" },
      { name: "Matrices", link: "" },
      { name: "Probability and combinatorics", link: "" },
      { name: "Series", link: "" },
      { name: "Limits and continuity", link: "" }
    ]
  },
  {
    name: "High School Statistics",
    id: "hs-statistics",
    icon: "📊",
    color: "hsl(145, 60%, 45%)",
    topics: [
      { name: "Displaying a single quantitative variable", link: "" },
      { name: "Analyzing a single quantitative variable", link: "" },
      { name: "Two-way tables", link: "" },
      { name: "Scatterplots", link: "" },
      { name: "Study design", link: "" },
      { name: "Probability", link: "" },
      { name: "Probability distributions & expected value", link: "" }
    ]
  },
  {
    name: "Statistics and Probability",
    id: "statistics-probability",
    icon: "🎲",
    color: "hsl(0, 70%, 58%)",
    topics: [
      { name: "Analyzing categorical data", link: "" },
      { name: "Displaying and comparing quantitative data", link: "" },
      { name: "Summarizing quantitative data", link: "" },
      { name: "Modeling data distributions", link: "" },
      { name: "Exploring bivariate numerical data", link: "" },
      { name: "Study design", link: "" },
      { name: "Probability", link: "" },
      { name: "Counting, permutations, and combinations", link: "" },
      { name: "Random variables", link: "" },
      { name: "Sampling distributions", link: "" },
      { name: "Confidence intervals", link: "" },
      { name: "Significance tests (hypothesis testing)", link: "" },
      { name: "Two-sample inference for the difference between groups", link: "" },
      { name: "Inference for categorical data (chi-square tests)", link: "" },
      { name: "Advanced regression (inference and transforming)", link: "" },
      { name: "Analysis of variance (ANOVA)", link: "" }
    ]
  },
  {
    name: "College Algebra",
    id: "college-algebra",
    icon: "🎓",
    color: "hsl(215, 75%, 52%)",
    topics: [
      { name: "Linear equations and inequalities", link: "" },
      { name: "Graphs and forms of linear equations", link: "" },
      { name: "Functions", link: "" },
      { name: "Quadratics: Multiplying and factoring", link: "" },
      { name: "Quadratic functions and equations", link: "" },
      { name: "Complex numbers", link: "" },
      { name: "Exponents and radicals", link: "" },
      { name: "Rational expressions and equations", link: "" },
      { name: "Relating algebra and geometry", link: "" },
      { name: "Polynomial arithmetic", link: "" },
      { name: "Advanced function types", link: "" },
      { name: "Transformations of functions", link: "" },
      { name: "Rational exponents and radicals", link: "" },
      { name: "Logarithms", link: "" }
    ]
  },
  {
    name: "AP®︎/College Calculus AB",
    id: "ap-calculus-ab",
    icon: "🅰️",
    color: "hsl(340, 75%, 55%)",
    topics: [
      { name: "Limits and continuity", link: "" },
      { name: "Differentiation: definition and basic derivative rules", link: "" },
      { name: "Differentiation: composite, implicit, and inverse functions", link: "" },
      { name: "Contextual applications of differentiation", link: "" },
      { name: "Applying derivatives to analyze functions", link: "" },
      { name: "Integration and accumulation of change", link: "" },
      { name: "Differential equations", link: "" },
      { name: "Applications of integration", link: "" },
      { name: "AP Calculus AB solved free response questions from past exams", link: "" },
      { name: "AP®︎ Calculus AB Standards mappings", link: "" }
    ]
  },
  {
    name: "AP®︎/College Calculus BC",
    id: "ap-calculus-bc",
    icon: "🅱️",
    color: "hsl(20, 85%, 55%)",
    topics: [
      { name: "Limits and continuity", link: "" },
      { name: "Differentiation: definition and basic derivative rules", link: "" },
      { name: "Differentiation: composite, implicit, and inverse functions", link: "" },
      { name: "Contextual applications of differentiation", link: "" },
      { name: "Applying derivatives to analyze functions", link: "" },
      { name: "Integration and accumulation of change", link: "" },
      { name: "Differential equations", link: "" },
      { name: "Applications of integration", link: "" },
      { name: "Parametric equations, polar coordinates, and vector-valued functions", link: "" },
      { name: "Infinite sequences and series", link: "" },
      { name: "AP Calculus BC solved exams", link: "" },
      { name: "AP®︎ Calculus BC Standards mappings", link: "" }
    ]
  },
  {
    name: "AP®︎/College Statistics",
    id: "ap-statistics",
    icon: "📉",
    color: "hsl(155, 65%, 42%)",
    topics: [
      { name: "Exploring categorical data", link: "" },
      { name: "Exploring one-variable quantitative data: Displaying and describing", link: "" },
      { name: "Exploring one-variable quantitative data: Summary statistics", link: "" },
      { name: "Exploring one-variable quantitative data: Percentiles, z-scores, and the normal distribution", link: "" },
      { name: "Exploring two-variable quantitative data", link: "" },
      { name: "Collecting data", link: "" },
      { name: "Probability", link: "" },
      { name: "Random variables and probability distributions", link: "" },
      { name: "Sampling distributions", link: "" },
      { name: "Inference for categorical data: Proportions", link: "" },
      { name: "Inference for quantitative data: Means", link: "" },
      { name: "Inference for categorical data: Chi-square", link: "" },
      { name: "Inference for quantitative data: slopes", link: "" },
      { name: "Prepare for the 2022 AP®︎ Statistics Exam", link: "" }
    ]
  },
  {
    name: "Multivariable Calculus",
    id: "multivariable-calculus",
    icon: "🌐",
    color: "hsl(195, 80%, 48%)",
    topics: [
      { name: "Thinking about multivariable functions", link: "" },
      { name: "Derivatives of multivariable functions", link: "" },
      { name: "Applications of multivariable derivatives", link: "" },
      { name: "Integrating multivariable functions", link: "" },
      { name: "Green's, Stokes', and the divergence theorems", link: "" }
    ]
  },
  {
    name: "Differential Equations",
    id: "differential-equations",
    icon: "🔄",
    color: "hsl(275, 70%, 55%)",
    topics: [
      { name: "First order differential equations", link: "" },
      { name: "Second order linear equations", link: "" },
      { name: "Laplace transform", link: "" }
    ]
  },
  {
    name: "Linear Algebra",
    id: "linear-algebra",
    icon: "🔢",
    color: "hsl(230, 70%, 55%)",
    topics: [
      { name: "Vectors and spaces", link: "" },
      { name: "Matrix transformations", link: "" },
      { name: "Alternate coordinate systems (bases)", link: "" }
    ]
  },
  {
    name: "Differential Calculus",
    id: "differential-calculus",
    icon: "📉",
    color: "hsl(10, 80%, 55%)",
    topics: [
      { name: "Limits and continuity", link: "" },
      { name: "Derivatives: definition and basic rules", link: "" },
      { name: "Derivatives: chain rule and other advanced topics", link: "" },
      { name: "Applications of derivatives", link: "" },
      { name: "Analyzing functions", link: "" },
      { name: "Parametric equations, polar coordinates, and vector-valued functions", link: "" }
    ]
  },
  {
    name: "Integral Calculus",
    id: "integral-calculus",
    icon: "∫",
    color: "hsl(320, 70%, 52%)",
    topics: [
      { name: "Integrals", link: "" },
      { name: "Differential equations", link: "" },
      { name: "Applications of integrals", link: "" },
      { name: "Parametric equations, polar coordinates, and vector-valued functions", link: "" },
      { name: "Series", link: "" }
    ]
  },
  {
    name: "Calculus 1",
    id: "calculus-1",
    icon: "🧮",
    color: "hsl(355, 70%, 55%)",
    topics: [
      { name: "Limits and continuity", link: "" },
      { name: "Derivatives: definition and basic rules", link: "" },
      { name: "Derivatives: chain rule and other advanced topics", link: "" },
      { name: "Applications of derivatives", link: "" },
      { name: "Analyzing functions", link: "" },
      { name: "Integrals", link: "" },
      { name: "Differential equations", link: "" },
      { name: "Applications of integrals", link: "" }
    ]
  },
  {
    name: "Calculus 2",
    id: "calculus-2",
    icon: "🧮",
    color: "hsl(180, 65%, 45%)",
    topics: [
      { name: "Integrals review", link: "" },
      { name: "Integration techniques", link: "" },
      { name: "Differential equations", link: "" },
      { name: "Applications of integrals", link: "" },
      { name: "Parametric equations, polar coordinates, and vector-valued functions", link: "" },
      { name: "Series", link: "" }
    ]
  },
  {
    name: "3rd Grade Math (Illustrative Math-aligned)",
    id: "3rd-grade-illustrative",
    icon: "3️⃣",
    color: "hsl(135, 55%, 48%)",
    topics: [
      { name: "Introducing multiplication", link: "" },
      { name: "Area and multiplication", link: "" },
      { name: "Wrapping up addition and subtraction within 1,000", link: "" },
      { name: "Relating multiplication to division", link: "" },
      { name: "Fractions as numbers", link: "" },
      { name: "Measuring length, time, liquid volume, and weight", link: "" },
      { name: "Two-dimensional shapes and perimeter", link: "" }
    ]
  },
  {
    name: "4th Grade Math (Illustrative Math-aligned)",
    id: "4th-grade-illustrative",
    icon: "4️⃣",
    color: "hsl(175, 60%, 42%)",
    topics: [
      { name: "Factors and multiples", link: "" },
      { name: "Fraction equivalence and comparison", link: "" },
      { name: "Extending operations to fractions", link: "" },
      { name: "From hundredths to hundred-thousands", link: "" },
      { name: "Multiplicative comparison and measurement", link: "" },
      { name: "Multiplying and dividing multi-digit numbers", link: "" },
      { name: "Angles and Angle Measurement", link: "" },
      { name: "Properties of two-dimensional shapes", link: "" }
    ]
  },
  {
    name: "5th Grade Math (Illustrative Math-aligned)",
    id: "5th-grade-illustrative",
    icon: "5️⃣",
    color: "hsl(200, 65%, 50%)",
    topics: [
      { name: "Finding volume", link: "" },
      { name: "Fractions as quotients and fraction multiplication", link: "" },
      { name: "Multiplying and dividing fractions", link: "" },
      { name: "Wrapping up multiplication and division with multi-digit numbers", link: "" },
      { name: "Place value patterns and decimal operations", link: "" },
      { name: "More decimal and fraction operations", link: "" },
      { name: "Shapes on the coordinate grid", link: "" }
    ]
  },
  {
    name: "6th Grade Math (Illustrative Math-aligned)",
    id: "6th-grade-illustrative",
    icon: "6️⃣",
    color: "hsl(235, 60%, 55%)",
    topics: [
      { name: "Area and surface area", link: "" },
      { name: "Introducing ratios", link: "" },
      { name: "Unit rates and percentages", link: "" },
      { name: "Dividing fractions", link: "" },
      { name: "Arithmetic in base ten", link: "" },
      { name: "Expressions and equations", link: "" },
      { name: "Rational numbers", link: "" },
      { name: "Data sets and distribution", link: "" }
    ]
  },
  {
    name: "7th Grade (Illustrative Math-aligned)",
    id: "7th-grade-illustrative",
    icon: "7️⃣",
    color: "hsl(260, 55%, 55%)",
    topics: [
      { name: "Scale drawings", link: "" },
      { name: "Introducing proportional relationships", link: "" },
      { name: "Measuring circles", link: "" },
      { name: "Proportional relationships and percentages", link: "" },
      { name: "Rational number arithmetic", link: "" },
      { name: "Expressions, equations, and inequalities", link: "" },
      { name: "Angles, triangles, and prisms", link: "" },
      { name: "Probability and sampling", link: "" }
    ]
  },
  {
    name: "8th Grade Math (Illustrative Math-aligned)",
    id: "8th-grade-illustrative",
    icon: "8️⃣",
    color: "hsl(285, 55%, 52%)",
    topics: [
      { name: "Rigid transformations and congruence", link: "" },
      { name: "Dilations, similarity, and introducing slope", link: "" },
      { name: "Linear relationships", link: "" },
      { name: "Linear equations and linear systems", link: "" },
      { name: "Functions and volume", link: "" },
      { name: "Associations in data", link: "" },
      { name: "Exponents and scientific notation", link: "" },
      { name: "Pythagorean theorem and irrational numbers", link: "" }
    ]
  },
  {
    name: "Algebra 1 (Illustrative Mathematics-aligned)",
    id: "algebra-1-illustrative",
    icon: "📊",
    color: "hsl(205, 70%, 50%)",
    topics: [
      { name: "One-variable statistics", link: "" },
      { name: "Linear equations and systems", link: "" },
      { name: "Two-variable statistics", link: "" },
      { name: "Linear inequalities and systems", link: "" },
      { name: "Functions", link: "" },
      { name: "Introduction to exponential functions", link: "" },
      { name: "Introduction to quadratic functions", link: "" },
      { name: "Quadratic equations", link: "" }
    ]
  }
];
