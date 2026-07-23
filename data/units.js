// data/units.js
// Per-unit content pulled from the CELL 120 Canvas export (lecture outlines,
// "Things to Know" sheets, practice questions, and fact-check materials).
// This is injected into the system prompt only when a student selects that
// specific unit, so it doesn't bloat every request with all six units' worth
// of material. Edit freely as course content changes semester to semester.

export const UNITS = {
  "1": {
    name: "Scientific thinking",
    topics: `--- Unit 1 - Scientific Method, Observations, and Experimental Design-1 ---
**Unit 1 Scientific Method, Observations, and Experimental Design**

**Spiritual Thought**

Doctrine and Covenants 88:118 teaches, “...seek learning, even by study and also by faith.” This verse reminds us that spiritual and scientific inquiry are not opposed. The scientific method teaches us to observe, question, and test. Likewise, in spiritual matters we are asked to ponder, seek, and pray. Both processes are designed to bring us closer to truth through honest inquiry and humility.

**Learning Objectives**

By the end of this lesson, you should be able to:

Explain the purpose of the scientific method and the basic steps used

Describe the power and limitations of the method

Be more observant about the world around you

Ask good scientific questions

Anticipate what can be concluded from your findings

Anticipate what can’t be concluded from your findings

Design an experiment capable of testing a hypothesis

Identify appropriate controls

Identify dependent and independent variables

Identify parameters and dimensions

**Purpose and Steps of the Scientific Method**

The scientific method is a structured approach to asking questions and finding reliable answers. It helps us understand the natural world through a repeatable and logical process.

Basic steps of the scientific method include:

**Observation**: Noticing patterns or phenomena in the natural world. For example, seeing that hummingbirds visit certain flowers more frequently.

**Question**: Asking something specific, like: Why do hummingbirds prefer those flowers?

**Hypothesis**: Making a testable prediction. For example: Hummingbirds prefer red flowers because they are easier to see.

**Experiment**: Testing the hypothesis by designing a study or collecting data.

**Results**: Gathering and analyzing the data. Did the data support or refute the hypothesis?

**Conclusion**: Interpreting the results and determining whether your hypothesis was supported.

**Repeat**: Science values reproducibility. A good study can be repeated by others with similar results.

**Power and Limitations of the Scientific Method**

The scientific method is powerful because it allows us to answer specific, measurable questions. However, it has limitations.

– Questions must be measurable. For example, science can’t measure emotions like love or faith.

– Experiments must be repeatable. One-time, unrepeatable events cannot be reliably studied.

– Technology sets limits. For example, early scientists couldn’t study DNA before sequencing tools were developed.

– Cost and accessibility matter. Some studies may be too expensive or complex to perform on a large scale.

Understanding these limitations helps us critically evaluate scientific claims. Just because a study exists doesn’t mean it’s conclusive or comprehensive.

Science is constantly refining itself. What we believe today may change as more data becomes available. This is not a weakness, but a strength.

For example, a single study might suggest a food is beneficial, like red wine increasing antioxidants. Later studies may show negative effects such as increased liver disease risk.

When we understand the scientific method, we can ask: What exactly did the study measure? How big was the sample? Has it been repeated? This mindset leads to better decision-making and avoids sensationalized interpretations.

**Becoming More Observant**

Being observant means noticing things that others might overlook. You can train this skill. Take time to pause, slow down, and simply look at what’s around you. What colors do you see on a leaf? Do birds behave differently at different times of day? Does your mood change depending on the room you’re in?

Try starting a conversation with someone using the phrase: 'Have you ever noticed…?' You might say to your roommate, 'Have you ever noticed how your breathing slows when you listen to calm music?' This simple act of observing can become the spark that leads to discovery.

**Asking Good Scientific Questions**

Once you’ve noticed something interesting, the next step is to turn it into a question. But not all questions are scientific. To be useful in science, a question should be measurable, testable, and repeatable.

Example:

Bad: 'Why do people get tired?'

Better: 'Does screen time after 10 PM affect how long it takes to fall asleep?'

Good questions focus on cause and effect. They set the stage for experiments. Ask yourself:

- Can I measure this?

- Can I test it?

- Can I repeat the process and get the same result?

**Anticipating What You Can and Can’t Conclude**

A key part of science is understanding the limits of your conclusions. Imagine you want to know if studying increases your energy use. You check your respiratory rate while sitting quietly and while reading a textbook. You find it’s higher when you’re studying.

You CAN say: Under these specific conditions, your respiratory rate increased while studying.

You CAN’T say: Everyone uses more energy when studying.

Scientific findings are always tied to the conditions of the experiment. You must avoid overgeneralizing.

**Forming a Hypothesis**

A hypothesis is a testable prediction. In most cases, you’ll form both a null hypothesis (no effect) and an alternative hypothesis (some effect).

Example:

**Null Hypothesis**: My respiratory rate does not change when I study.

**Alternative Hypothesis**: My respiratory rate increases when I study.

Your experiment should be designed so that it could reject the null hypothesis. That’s what makes a hypothesis scientific: it must be falsifiable.

**Why Rejection Matters in Science**

In every scientific test, we are essentially choosing between two options: the null hypothesis and the alternative hypothesis. We always reject one. If the data shows no significant difference or effect, we fail to reject the null hypothesis. If the data does show a difference, we reject the null and accept the alternative.

This rejection-based structure is vital. It forces clarity and prevents us from settling into vague or unfounded beliefs. For example, if you test whether studying increases your energy use and you find no change in respiratory rate, you do not confirm your assumption—you fail to reject the null. This doesn’t mean your idea was bad. It means your data didn’t support it under those conditions.

Rejection is not the end of an idea—it’s a refinement. Like a sculptor removing stone to reveal form, we remove incorrect assumptions to move closer to truth. Science thrives on this honesty. It teaches us to value what is real, not what we hope to be true.

Example:

You want to test whether listening to classical music improves memory recall. Your null hypothesis is that classical music has no effect on memory performance, while your alternative is that it does. You administer a memory test to two groups—one with music, one without—and the results show a significant improvement for the music group.

This means you reject the null hypothesis and accept the alternative. But even now, your conclusion is limited—you can say that in this test, under these conditions, classical music improved recall. You still can't say it works for everyone, in all environments, or with all types of memory.

**Designing a Testable Experiment**

Identify appropriate controls

Identify dependent and independent variables

Identify parameters and dimensions

Designing a Testable Experiment

**Identifying Variables**

To design a meaningful experiment, you need a specific, answerable question. A good scientific question is not vague or philosophical—it’s testable. For example, instead of asking “Is sugar bad for you?” a better question might be: “Does consuming 50g of sugar before a math test decrease accuracy compared to no sugar consumption?”

Once you have a question, you formulate a hypothesis—an educated guess that you can test. The key is isolating a single variable. You then compare outcomes between experimental groups while keeping other conditions the same.

Identifying Variables

In any experiment, there are two key types of variables:
- **Independent Variable**: This is the factor you manipulate. For example, the amount of sugar given to participants.
- **Dependent Variable**: This is what you measure. In our sugar experiment, that might be test performance or number of questions answered correctly.

You should only change one independent variable at a time so that any change in the dependent variable can be clearly attributed to it.

**Understanding Controls**

Controls are essential for interpreting the results of an experiment. A control group is a group where the independent variable is not applied, allowing you to compare outcomes.

- Negative Control: A setup where you expect no effect. This confirms your system isn’t producing results by accident. Example: giving a group a caffeine-free energy drink when testing the effects of caffeine.
- Positive Control: A setup where you expect an effect. This confirms your system is capable of detecting a response. Example: giving participants known stimulants to verify heart rate increase is measurable.

Without good controls, your experiment might show results that can’t be interpreted accurately.

**Parameters and Dimensions**

A parameter is the feature or trait being measured. A dimension is the unit or scale of that measurement.

- **Parameter**: Heart rate
- **Dimension**: Beats per minute (bpm)

It’s important to be specific. Saying you’re measuring 'health' is too broad. Instead, define health with a measurable parameter like 'blood pressure' and a dimension like 'mm Hg'.

**Exam****ple - ****Energy Drink Experiment **

Let’s apply what we’ve learned with a full experiment example:

Question: Does consuming energy drinks increase your heart rate?
- **Null Hypothesis**: Energy drinks do not change heart rate.
- **Alternative Hypothesis**: Energy drinks increase heart rate.
- **Independent Variable**: Whether or not an energy drink is consumed.
- **Dependent Variable**: Measured heart rate after consumption.
- **Positive Control**: A stimulant like caffeine tablets that are known to raise heart rate.
- **Negative Control**: A decaffeinated version of the energy drink.
- **Parameter**: Heart rate
- **Dimension**: Beats per minute

This setup allows a student to collect data and compare how heart rate changes under each condition, learning how to draw conclusions from experimental results.

--- Unit 1 - Statistics, Graphs, and Figures-2 ---
**Unit 1: Statistics, Graphs, and Figures**

**Spiritual Thought**

“By the power of the Holy Ghost ye may know the truth of all things.” — Moroni 10:5

In both science and spiritual growth, we are seekers of truth. The scientific process relies on data, clarity, and humility, while spiritual truth comes through faith and revelation. Both require asking good questions and interpreting results with patience and honesty.

**Learning Objectives**

By the end of this lesson, you should be able to:

Critically analyze scientific studies and data

Be observant of and curious about patterns and processes in living things

Ask essential, specific, answerable questions about observations

Form hypotheses about biological patterns and processes that are testable

Recognize the appropriate application of statistical tests based on the type of data analyzed

Determine a test’s significance

Critically assess what “significance” means in the context of an analysis

Critically analyze graphs and figures

Assess which type of data are best represented by which figures

**Why Do We Use Statistics in Biology?**

Statistics helps us decide whether a result we observe is likely real or could have occurred by random chance (noise). We use probability to separate genuine patterns from coincidences.

Think of it this way: statistics is like trying to figure out if your friend’s 'lucky' coin is actually special, or just... a coin. Without the math, we might jump to conclusions too quickly.

Spiritually, this reminds us of the counsel in Moroni 7:16—to judge what is good from what is evil. In science, we judge what is real from what is random.

**Understanding Significance and the p-value**

**p-value**: The probability of observing your data (or something more extreme) if there is actually no real effect (the null hypothesis is true).
Example: You test whether playing uplifting music makes people smile more. Your results show a p-value of 0.04. That’s under 0.05, so statistically speaking, the smiles aren’t just a coincidence—they might really be from the music!
Just like prayer helps us discern truth from error, a p-value helps us discern real effects from random noise.

Course standard: Treat findings as statistically significant when p < 0.05 (5%). If p ≥ 0.05, the result is not significant.

Example: p = 0.002 means there’s a 0.2% chance the pattern is due to randomness—strong evidence that something real is going on.

**Choosing the Right Statistical Test**

Pick the test based on whether your variables are categorical or continuous.

**Choosing the Right Test by Variable Type**** **

**Categorical vs. Categorical**: Use Chi-Squared (e.g., major vs. class year).

**Categorical (two groups) vs. Continuous**: Use a t-test to compare group means (e.g., smoker vs. non-smoker and lung function).

**Continuous vs. Continuous**: Use Linear Regression to test correlation/prediction (e.g., age and blood pressure).

Use when both variables are categorical. You typically arrange counts in a contingency table and test whether the distribution differs between groups.

Interpretation: If p < 0.05, conclude that the frequencies differ more than expected by chance.

Use when the independent variable is categorical (two groups) and the dependent variable is continuous (a number).

Interpretation: If p < 0.05, the two group means are significantly different. (Extensions like paired t-tests exist, but aren’t required here.)

Use when both variables are continuous to test whether one predicts or correlates with the other. Visualize with a scatterplot and a line of best fit.

Interpretation: If p < 0.05 for the slope, there’s a statistically significant relationship between the variables.

**Why Use Graphs and Figures?**

Graphs turn data into patterns your brain can see—fast. A good figure is clear, honest, and helps the reader draw the right conclusion.

Let’s be real—staring at a wall of numbers is like trying to read the Old Testament without chapter headings. Graphs give your brain a shortcut.

**Types of Graphs You Should Know**** **

**Histogram / Density Plot**: Shows the distribution of values (great for spotting shape, spread, and outliers).

**Growth and Decay Curves**: Show exponential increase or decrease over time (e.g., bacterial growth).

**Bar Plot with Error Bars**: Displays group means with variability (standard deviation or standard error), typical for t-test results.

**Scatterplot with Line of Best Fit**: Shows the relationship between two continuous variables (typical for linear regression).

**Stacked Bar Plot / Pie Charts**: Show category proportions; often used to visualize Chi-Squared-type questions.

Spiritual reflection: Like statistics, discipleship often asks us to look for patterns and act on small signals. Alma 37:6 reminds us that 'by small and simple things are great things brought to pass.'`,
    sampleProblems: `--- Quiz 1 - Things to Know-1 ---
Unit 1 Things to Know – Use Outlines 1 and 2

# Scientific Method

• Observation

• Question

• Hypothesis

• Experiment

• Data analysis

• Conclusion

# Key Questions

- What does unfalsifiable mean?

- What is and is not measurable?

- What is and is not testable?

- What is and is not repeatable?

- Why is it important to know and report limitations?

- How do you turn an observation, into a question, and then into a testable hypothesis?

- Null hypothesis – what purpose does this serve?

- Alternate hypothesis – What purpose does this serve?

- Why is rejecting important in the scientific method?

- What does it mean to isolate the variable?

- What does a “significant” finding actually mean?

- What is a p value and what does it mean practically?

- What is a measure of variability? What is the relationship between variability and significance?

# Be Able to Describe and Define the Following

• Dependent variable

• Independent variable

• Positive control

• Negative control

• Parameter

• Dimension

• Mean

• Median

• Standard Deviation

• Standard Error

# Understand How to Interpret and Apply the Following

• Chi Squared

• T test

• Linear regression

• Scatter plot / line of best fit

• Bar plot / error bars

• Pie chart

• What types of variables are present in a chi squared / t test / linear regression analysis?

• Understand which variables go on the X and Y axis on a graph

--- Quiz 1 - Practice Questions-3 ---
**Quiz 1 - Practice Questions**

**(Questions 1-****9****)**

A study was conducted to determine the effect of a new compound (compound X) on urine flow in sheep. Eight one-year-old rams were randomly assigned to each of the following three groups:  Group A – injected with saline only (“vehicle treatment”); Group B – injected with compound X dissolved in saline; Group C – injected with antidiuretic hormone (a hormone well established to decrease urine flow) dissolved in saline. The injections were made in all rams and urine volume was collected for the next 2 hours and urine flow rate was calculated in ml/min.  The results are displayed in the table shown below.

1. What is the null hypothesis for this experiment?
2. What is the independent variable in this experiment? 
3. What is the dependent variable?
4. Which group is the negative control?
5. Which group is the positive control?
6. What benefit is derived from having the positive control?
7. What is the dimension of the parameter measured?
8. A comparison between which two groups should be performed to test our null hypothesis?
9. Which statistical test should be employed to determine if a significant finding exists?

**(Questions 10-13)**

10. What is the null hypothesis in this experiment?
11. What is the dependent variable in this experiment?
12. Which of the groups above have the largest variation if it is assumed that the number of samples in each group is equal?
13. Was the dependent variable used in this study a continuous or categorical variable?

**(Questions 14-16)**

DNA methylation (a chemical DNA modification) is measured at the promoter of the gene CCDC114 located on chromosome 19. The researchers were attempting to determine if fraction methylation of CCDC114 changes as an individual ages.

14. What is the independent variable in this experiment?
15. What is the appropriate statical test for this experiment?
16. What can be concluded from this experiment (assuming a p-value of <0.05)?

**(Questions 17-19)**

10 frogs were captured in the wild, brought into the lab, and cellular respiration rate (oxygen consumption) was measured.  An insecticide was then added to the aquarium water for 4 weeks and the cellular respiration rate of all 10 frogs was measured again.  The data are shown below (mean ± Standard Error). Based on Hiebert, SM, Advan in Physiol Ed 31:82-96, 2007.

17. What is the Null Hypothesis for this experiment?
18. What is the Alternate Hypothesis for this experiment?
19. Based on the figure alone would you reject or accept the null hypothesis? And why?

**(Questions 20-****23****)**

Billy, a freshwater biologist, managed trout populations on a river whose two main sections were separated by a dam. The headwaters (upstream of the dam) and the tailwater (downstream of the dam) both contained native cutthroat trout as well as brown trout that were introduced through a stocking program. Billy felt that the headwater consistently had a healthy balance of trout species (approximately 1:1 ratio), but Billy worried that the brown trout in the tailwater section of the river ...

20. What was Billy’s observation?
21. What is the Alternate hypothesis?
22. What is the independent variable?
23. What is the appropriate statistical test?

**Answer Key****:**

1. There will be no difference in the urine flow between the control group and the group treated with compound X.
2. Treatment with vehicle, compound X, and ADH
3. Urine flow
4. Vehicle
5. ADH
6. We can confirm that we can reduce urine flow with an agent known to reduce urine flow using the unique methodology of this experiment.
7. ml/min
8. Group A and Group B
9. There is no significant difference between Group A and Group B, We have failed to reject (disprove) the Null.

10. IL-1 has no effect on IL-8 release from H295R cells.
11. IL-8 release from the H295R cells.
12. IL-1 10 group.
13. Continuous

14. Age
15. Linear regression
16. Age is significantly correlated to DNA methylation at the promoter of CCDC114. As age increases, fraction methylation at CCDC114 decreases (they are inversely correlated).

17. There is no difference in respiration between the pre-treatment group and the treatment group.
18. Four weeks of treatment with insecticide modified the respiratory rate of the frogs.
19. Accept the null. With the current data, it appears that the standard error bars overlap and thus it is unlikely that there is a significant difference between the two groups.

20. There seemed to be a higher percentage of brown trout in the lower section of river than in the upper section.
21. There is a higher proportion of brown trout in the tailwater section of the river.
22. Headwater/tailwater
23. Chi Squared`,
  },
  "2": {
    name: "Cell theory",
    topics: `--- Unit 2 - Biomolecules, Enzymes, and Molecular Interactions-2 ---
**Unit ****2****: Basic Chemistry, Biomolecules, and Enzymes**

**Spiritual Thought**

In Doctrine and Covenants 88:15, we learn that 'the spirit and the body are the soul of man.' Just as life depends on intricate chemical interactions to sustain our physical bodies, our spiritual well-being is nourished by daily choices and connections to God. Understanding the chemistry of life can remind us that God’s creations are both physical and spiritual, designed with purpose and harmony.

**Learning Objectives**

By the end of this lesson, you should be able to:

Describe what matter is and its basic building blocks.

Explain the structure of atoms and elements, including isotopes and electrons.

Identify different types of chemical bonds and their properties.

Explain the unique properties of water and why they are essential to life.

Differentiate between the four major biomolecules and their functions.

Describe how proteins, lipids, carbohydrates, and nucleic acids are structured.

Explain the role of enzymes in facilitating chemical reactions.

Describe how enzyme activity is influenced by substrate concentration and affinity.

Relate chemical principles to biological processes and spiritual insights.

**What is Matter?**

Matter is anything that takes up space and has mass. It exists in three main states—solid, liquid, and gas. From the air we breathe to the cells in our body, everything physical is composed of matter.

All matter is made up of basic substances called elements. An element is a substance that cannot be broken down into a simpler substance with different properties by chemical means. Each element is made of one type of atom. For example, pure gold contains only gold atoms.

There are 92 naturally occurring elements on Earth. In our bodies, just four—oxygen, carbon, hydrogen, and nitrogen—make up about 96% of our mass. That’s like making an entire cake recipe using mostly four ingredients!

**The Atom**

Atoms are the smallest units of matter that still retain the properties of an element. Think of them like the single Lego brick in a giant Lego castle—on its own it’s simple, but combined with others it makes something complex.

Each atom contains protons (positively charged), neutrons (neutral), and electrons (negatively charged). The number of protons determines the atomic number, which is unique to each element. For example, all carbon atoms have exactly 6 protons.

Atomic mass is the total mass of protons and neutrons. While all atoms of an element have the same number of protons, the number of neutrons can vary. These variations are called isotopes.

**Isotopes and Radioactivity**

Isotopes are atoms of the same element with different numbers of neutrons. Some isotopes are stable, while others are radioactive and decay over time, releasing energy. This is the principle behind medical imaging techniques and even carbon dating.

For example, Carbon-14 is radioactive and is used to estimate the age of ancient fossils. Spiritually, this reminds us that while our physical bodies may change over time, our eternal worth remains constant, much like the identity of an element.

**Electrons and Valence Shells**

Electrons orbit the nucleus in energy levels, or shells. The outermost shell is called the valence shell, and its stability determines how an atom interacts with others. Atoms ‘like’ to have a full valence shell—it’s their version of feeling complete.

For example, helium has a full valence shell and doesn’t react much, like someone perfectly content sitting on the couch. Sodium, on the other hand, is missing one electron and is eager to bond—kind of like a roommate looking for a missing piece to a puzzle.

**Chemical Bonds**

Atoms connect through chemical bonds. These bonds come in different types, from strongest to weakest: covalent, ionic, and hydrogen bonds.

Covalent bonds involve sharing electrons. For instance, in a water molecule (H₂O), oxygen and hydrogen share electrons. Ionic bonds involve one atom giving electrons to another—like table salt, where sodium donates an electron to chlorine. Hydrogen bonds are weaker attractions, but they’re essential in holding large molecules, like DNA, in shape.

**Properties of Water**

Water is life’s MVP. It’s cohesive (sticks to itself), adhesive (sticks to other things), a universal solvent, resists temperature changes, and is less dense as a solid than as a liquid.

Cohesion allows for surface tension—why small insects can walk on water. Adhesion helps plants pull water from roots to leaves. Water’s solvent abilities make it perfect for dissolving nutrients. And ice floats because it’s less dense, insulating life below.

**The Four Major Biomolecules**

All living things are built from four main types of biomolecules: carbohydrates, lipids, proteins, and nucleic acids.

Carbohydrates provide quick energy and structural support—like bread for your cells. Lipids store energy long-term and make up cell membranes. Proteins perform most of the work in the cell, from building structures to speeding up chemical reactions. Nucleic acids store and transmit genetic information.

**Carbohydrates**** ****– Show carbohydrates model**

Carbohydrates are made of carbon, hydrogen, and oxygen in the ratio (CH₂O)n. They can be simple (monosaccharides like glucose), double (disaccharides like sucrose), or complex (polysaccharides like starch).

Your body’s first go-to for energy is glucose. Spiritually, this is like turning to prayer first in times of need—it’s fast and effective. 

Monomer: **Monosac****ch****aride **

Polymer: **Disaccharides and Polysa****ccharides**

**Lipids**** **

Lipids are mostly non-polar and hydrophobic, meaning they don’t mix with water. They include fats (triglycerides), phospholipids (cell membranes), and steroids (hormones like testosterone).

Phospholipids are special because they’re amphipathic—part of them loves water and part hates it—allowing them to form the double layer that protects cells. 

Monomer: **Glycerol and Fatty Acids**

Polymer: **Triglyceride**

**Proteins**

Proteins are polymers of amino acids linked by peptide bonds. There are 20 types of amino acids, and the sequence determines the protein’s shape and function.

Proteins can be enzymes, receptors, transporters, or structural components. They have four levels of structure: primary (sequence), secondary (coils/sheets), tertiary (3D shape), and quaternary (multiple proteins together). 

Monomer: **A****mino Acid**

Polymer: **Peptide or Protein**

**Nucleic Acids**** ****– Show NA model**

Nucleic acids store and use genetic information. DNA holds the instructions; RNA helps carry them out.

DNA uses bases A, T, C, and G, pairing A with T and C with G. RNA replaces T with U. Like a recipe book, DNA stores the recipe, and RNA is the chef in the kitchen making the dish. 

Monomer: **Nucleotide**

Polymer: **DNA and RNA**

**Enzymes and Molecular Interactions**

Enzymes are proteins that speed up chemical reactions without being used up. They are highly specific—like a lock that only fits one key.

In the lock-and-key model, the substrate (reactant) fits perfectly into the enzyme’s active site. Enzymes lower the activation energy needed for a reaction, making it happen faster.

Enzyme activity depends on factors like substrate concentration, temperature, pH, and affinity (how strongly the enzyme binds its substrate).

**Enzymes and How They Work**

Enzymes are biological catalysts—special proteins that speed up chemical reactions in cells without being consumed in the process. They work by lowering the activation energy required for a reaction to take place, meaning the reaction can happen faster and with less energy.

Think of activation energy as the height of a hill you have to push a ball over to get it rolling. Without an enzyme, the hill is steep and it takes a lot of effort. With an enzyme, the hill is smaller—you can push the ball with less effort and it rolls into the reaction more easily.

Enzymes are like ministers in the gospel—they don’t create the message, but they facilitate the work so it happens more effectively. Just as an enzyme can be hindered by poor conditions, our ability to serve can be hindered if we are spiritually unprepared. Staying close to the Spirit keeps us ‘in optimal conditions’ for the Lord’s work.

**Lock-and-Key Model**

The lock-and-key model describes how enzymes work with their specific substrates. The enzyme’s active site (the 'lock') has a shape that matches exactly with the substrate (the 'key'). When the right substrate binds to the enzyme, the reaction occurs, and the products are released.

For example, imagine you’re trying to open your front door. Only one key on your keychain will fit perfectly and turn the lock. Similarly, only the correct substrate will fit into the enzyme’s active site. If the shape doesn’t match, the enzyme won’t work on it.

A unique analogy is a vending machine that only accepts quarters—not nickels, not dimes. If you insert the correct coin (substrate), the machine (enzyme) delivers the snack (product). Any other coin won’t work because the slot is built for a specific size and shape.

**Induced Fit Model**

While the lock-and-key model is useful, many enzymes work more like the induced fit model. Here, the enzyme’s active site changes shape slightly to fit the substrate when it binds—like a glove that molds to fit your hand. This flexibility ensures a snug fit, maximizing efficiency.

**Enzyme Specificity**

**Enzyme ****Specificity**

Enzymes are specific—they usually work on only one substrate or a group of very similar substrates. For example, lactase breaks down lactose (milk sugar) but not sucrose (table sugar). This specificity comes from the unique shape of the enzyme’s active site.

## Enzyme Affinity

Enzyme affinity refers to how strongly an enzyme binds to its substrate. High-affinity enzymes bind their substrates tightly and are efficient even at low substrate concentrations. Low-affinity enzymes require higher substrate levels to achieve the same reaction rate. For example, hemoglobin has a high affinity for oxygen in the lungs, allowing it to bind oxygen easily.

## Specificity vs. Affinity

Specificity describes how selective an enzyme is for a particular substrate—like having a lock that only accepts a certain key shape. Affinity measures how tightly that key fits once it’s in the lock. An enzyme can have high specificity (only works on one substrate) but low affinity (binds it loosely), or vice versa.

**Enzyme Activity Factors**

Enzyme activity is affected by several factors:

- **Temperature**: Each enzyme works best at an optimal temperature. Too cold, and the reaction slows down. Too hot, and the enzyme can denature (lose its shape), like cooking an egg.

- **pH**: Each enzyme has an optimal pH range. Stomach enzymes like pepsin work best in acidic environments, while enzymes in the small intestine work best in neutral to slightly basic conditions.

- **Substrate Concentration**: More substrate means more enzyme activity—up to a point. Once all enzymes are working at full capacity, adding more substrate won’t increase the rate.

- **Affinity**: This refers to how strongly an enzyme binds to its substrate. Higher affinity means the enzyme-substrate complex forms more easily, increasing reaction rates.

**Ligand-Protein Interactions and Competition**

Ligands are molecules that bind to proteins, including enzymes. Sometimes, multiple molecules compete for the same binding site. For example, hemoglobin can bind oxygen or carbon monoxide, but not both at the same time. This is why carbon monoxide poisoning is so dangerous—it competes with oxygen and binds more tightly.

**Enzyme Reusability**

One of the most remarkable things about enzymes is that they are reusable. After catalyzing a reaction and releasing the products, the enzyme returns to its original shape and can be used again. This is like a reusable baking mold—you pour in the ingredients, bake the cake, remove it, and the mold is ready for another batch.

**Enzymes in Detail**

Enzymes are biological catalysts—substances that speed up chemical reactions without being consumed in the process. Without enzymes, most of the chemical reactions necessary for life would happen too slowly to sustain us.

They are usually proteins (though some RNA molecules can act as enzymes, called ribozymes) and are highly specific to the reactions they catalyze. Their names often end in '-ase', like lactase, which breaks down lactose in milk.

--- Unit 2 - Cell Theory and Basic Types of Life-2 ---
**Unit ****2****: ****Cell Theory and Basic Types of Life**

**Spiritual Thought**

In 1 Corinthians 12:14, Paul teaches that “the body is not one member, but many.”

Just as our bodies are made up of countless cells, each with unique roles, so the body of Christ is made up of individuals with different gifts. Learning about cells—the smallest units of life—reminds us that even the smallest parts of God’s creation have purpose and value.

**Learning Objectives**

By the end of this lesson, you should be able to:

Describe the three aspects of Cell Theory.

Explain what it means to be alive based on scientific criteria.

Discriminate between prokaryotic and eukaryotic cells.

Describe the utility of various cellular components.

Explain the processes of osmosis, diffusion, and gradients.

**What ****does it Mean to Be Alive****?**** **

Scientists define life using certain criteria: growth, reproduction, response to stimuli, homeostasis, and metabolism. 

For example, a cat is alive—it grows from kitten to adult, responds to touch, maintains its body temperature, and can reproduce. 

A rock, in contrast, might exist for millions of years but never grows, reproduces, or responds to its surroundings—so it’s not alive.

True spiritual life is more than existing; it involves growth, responsiveness to God, and actively nourishing our faith. Just like a living organism must maintain homeostasis, 						        we must continually maintain a healthy spiritual 				            balance through prayer, scripture study, and service.

**The ****Cell Theory**** **

Cell Theory is a foundational principle in biology. It states:

- All living things are made of one or more cells.

- The cell is the smallest unit of life.

- All cells come from pre-existing cells.

Cells are the “building blocks” of all life. Much like bricks in a house, they can function individually but also form larger, more complex structures when joined together.

This reflects God’s work—simple, foundational units (like individuals or families) are essential to His grand design. Each “unit” plays a vital role in building the whole.

**Prokaryot****ic and Eukaryotic Cells**

Life exists in two main categories: prokaryotic and eukaryotic cells.

Prokaryotic cells

- Simple structure

- No nucleus—DNA floats freely in the cell

- No membrane-bound organelles

- Examples: bacteria and archaea

Eukaryotic cells

- More complex structure

- DNA enclosed within a nucleus

- Contain membrane-bound organelles like mitochondria, ER, and Golgi apparatus

- Examples: plants, animals, fungi, and protists

If a cell were a “city,” prokaryotes would be like small rural towns—efficient and straightforward—while eukaryotes would be bustling cities with specialized departments handling specific jobs.

**Examples of Prokaryotes**

- Archaea – thrive in extreme environments.

- Thermophiles live in boiling hot springs.

- Halophiles live in extremely salty lakes.

- Bacteria – found everywhere.

- More bacterial cells exist in your body than human cells.

- Your microbiome helps digest food, supports immunity, and protects against harmful microbes.

Even the smallest bacteria can have a huge impact—just as small acts of kindness can make a major spiritual difference in someone’s life.

--- Unit 2 - Organelles and Cell Membranes-2 ---
**Unit 2: Organelles and Cell Membranes**

**Spiritual Thought**

In 1 Corinthians 12, Paul compares the body of Christ to the human body, teaching that each part is essential to the whole. Just as every organelle and membrane in a cell has a unique role that contributes to life, every member of Christ’s body has a divine purpose. When we work together, respecting the roles and contributions of each, we create a living system that can thrive and bless others.

**Learning Objectives**

By the end of this lesson, you should be able to:

Describe the three aspects of Cell Theory

Discriminate between Prokaryotic and Eukaryotic cells

Describe in detail the utility of various cellular components

Describe osmosis, diffusion, and gradients

Detail the utility of the cell membrane and the cell wall

**Eukaryotic Cell Overview**

A **eukaryotic cell** is like a high-tech factory. It has machinery to make products, tools to maintain operations, an instruction manual (**DNA**), and a management system to control processes. Unlike a chaotic workshop, everything has its place, which keeps the cell running smoothly.

**Nucleus**

The **nucleus** contains DNA—the instruction manual for the cell. DNA is transcribed into RNA, which can then be used to produce proteins. Without the nucleus, the cell loses its control center, much like a company without leadership.

**Cytosol and Cytoplasm**

The **cytosol** is the fluid portion where many chemical reactions take place, and where storage of fats, carbohydrates, and secretory vesicles occurs. The **cytoplasm** includes the cytosol and all organelles except the nucleus.

**Endoplasmic Reticulum (ER)**

The **rough ER** is studded with ribosomes and is the site of protein synthesis for proteins that will be packaged into vesicles, exported, or sent to membranes. The **smooth ER** lacks ribosomes and specializes in lipid synthesis, calcium storage, and detoxification. For example, liver cells have abundant smooth ER for processing toxins.

**Golgi Apparatus**

The **Golgi apparatus** modifies, sorts, and packages proteins for their final destination—like a postal service for the cell.

**Mitochondria**

Known as the 'powerhouse' of the cell, **mitochondria** produce ATP through the Krebs cycle and electron transport chain. For example, muscle cells have many mitochondria to fuel movement.

**Lysosomes and Peroxisomes**

**Lysosomes** contain enzymes that break down waste material, while **peroxisomes** specialize in breaking down fatty acids and neutralizing toxins.

**Ribosomes**

**Ribosomes** are the sites of protein synthesis, either floating freely or attached to the rough ER.

**Cytoskeleton**

The **cytoskeleton** provides structure and acts as a transportation network. Microfilaments also allow movement, support microvilli, and help during cell division.

**Plant Cell Organelles**

**Vacuoles** store water, nutrients, and sometimes toxins, while **chloroplasts** convert sunlight into chemical energy through photosynthesis.

**Cell Membranes and Compartmentalization**

The **cell membrane** creates a barrier to control what enters and exits. It is composed of a **phospholipid bilayer**—hydrophilic heads face water, while hydrophobic tails avoid it. This amphipathic nature is key to forming membranes.

**Selective Permeability**

Small, nonpolar molecules (like oxygen) and water pass quickly, while large or charged molecules (like ions or sugars) cross slowly or need help. This selectivity keeps the cell environment stable.

**Fluid Mosaic Model**

The **cell membrane** is not rigid; proteins and lipids move within it, creating a 'mosaic' pattern that is both flexible and functional.

**Membrane Fluidity and Fatty Acid Tails**

Membrane fluidity is influenced by the type of fatty acids in the phospholipid tails. **Saturated fatty acid tails** are straight and pack tightly, making the membrane more rigid—like stacking uncooked spaghetti. **Unsaturated fatty acid tails** have kinks due to double bonds, preventing tight packing and making the membrane more fluid—like a loose pile of cooked noodles. Fluidity is important for processes like protein movement, cell signaling, and allowing membranes to change shape without breaking.

**Cell Wall in Plants**

In plants, the **cell wall** provides extra protection and structure beyond the plasma membrane, helping the plant maintain shape and resist mechanical stress.

--- Unit 2 - Diffusion, Osmosis, and Movement Across Membranes-2 ---
**Unit 2: Diffusion, Osmosis, and Molecular Transport**

**Spiritual Thought**

In John 4:14, Jesus teaches that whoever drinks of the water He gives will never thirst, but will have a well of water springing up into everlasting life. In biology, water moves to where it is needed most through processes like osmosis. In a similar way, Christ’s love flows into the empty and thirsty places of our lives, bringing balance, healing, and strength. Just as each cell depends on the proper movement of molecules for life, our spiritual vitality depends on the flow of His influence into our hearts.

**Learning Objectives**

By the end of this lesson, you should be able to:

Describe the three aspects of Cell Theory

Discriminate between Prokaryotic and Eukaryotic cells

Describe in detail the utility of various cellular components

Describe osmosis, diffusion, and gradients

Describe unique and large-scale transport systems across membranes

**Diffusion and Chemical Gradients**

Diffusion is the passive movement of particles from an area of higher concentration to an area of lower concentration until equilibrium is reached. It occurs due to the constant and random motion of particles, known as Brownian movement. In warm temperatures, particles move faster, increasing the rate of diffusion; in cold environments, movement slows.

A solvent is the liquid in which molecules are dissolved, and a solute is the molecule being dissolved. The concentration is the amount of solute per volume of solvent, and a gradient is the difference in concentration across a space or membrane. Diffusion occurs down the concentration gradient and does not require energy input.

Facilitated diffusion is a form of passive transport where substances cross the membrane with the help of specific proteins like channels or carriers. This is essential for molecules that cannot freely cross the lipid bilayer, such as glucose or ions. For example, sodium ions move through sodium channels in neurons during nerve signaling.

**Osmosis and Osmotic Pressure**

Osmosis is the movement of water across a selectively permeable membrane from a region of lower solute concentration to a region of higher solute concentration. This process continues until equilibrium is reached, although water levels may differ depending on the membrane's permeability to solutes.

Osmotic pressure is the pressure required to prevent the net flow of water across the membrane. It depends on the number of solute particles: more particles mean a greater pull on water molecules. In clinical contexts, osmotic pressure plays a role in conditions like lymphedema, where solute buildup in tissues draws water in, causing swelling.

In diabetes mellitus, high blood glucose increases osmotic pressure in the kidneys, causing water to follow the glucose into urine, leading to high urine output. The kangaroo rat is an example of an organism that conserves water effectively, rarely drinking and obtaining most of its water through metabolic processes.

**Tonicity and Its Effects on Cells**

Tonicity refers to the ability of a solution to change the volume of a cell by osmosis. A hypotonic solution has a lower solute concentration than the cell, causing water to enter and the cell to swell. A hypertonic solution has a higher solute concentration, causing water to leave and the cell to shrink. An isotonic solution has equal solute concentrations, resulting in no net water movement. 

**Active vs Passive Transport**

The sodium-potassium pump is a form of primary active transport found in almost every animal cell. It moves three sodium ions out of the cell and two potassium ions into the cell against their respective concentration gradients, using energy from ATP. This creates and maintains the electrochemical gradient necessary for processes like nerve impulse transmission and muscle contraction. Without this pump, cells would lose their ability to regulate volume, electrical activity, and nutrient transport.

**The Sodium-Potassium Pump**

Passive transport moves molecules without energy input and includes diffusion, osmosis, and facilitated diffusion. Active transport requires energy, usually in the form of ATP, to move molecules against their concentration gradient. For example, the sodium-potassium pump moves sodium out of cells and potassium in, both against their gradients.

**Channels and Transporters**

Antiporters: Move two different molecules or ions in opposite directions across the membrane. An example is the sodium-calcium exchanger, which moves calcium out of cells while allowing sodium in.

Symporters: Move two different molecules or ions in the same direction across the membrane. For example, the sodium-glucose symporter in the intestine moves glucose into cells by coupling it with sodium movement down its gradient.

Uniporters: Move a single type of molecule or ion across the membrane, down its concentration gradient. An example is the GLUT1 transporter, which moves glucose into cells where it is in lower concentration.

Channels are proteins that create open passageways for molecules or ions to cross the membrane, often regulated by electrical charge or chemical signals. Transporters, or carriers, bind specific molecules and change shape to move them across. Uniporters move one molecule at a time, symporters move two molecules in the same direction, and antiporters move two in opposite directions.

**Facilitated Diffusion vs Secondary Active Transport**

Facilitated diffusion moves molecules down their concentration gradient without energy. Secondary active transport uses the energy stored in a gradient (often created by primary active transport) to move another molecule against its gradient. For instance, glucose uptake in the small intestine uses the sodium gradient established by the sodium-potassium pump.

Just as transport proteins move specific molecules to the right place at the right time, the Lord often places people, experiences, and opportunities into our lives exactly when we need them. His guidance, much like the precision of cellular transport, ensures that we receive what will nourish and strengthen us spiritually.

**Vesicle-Mediated Transport**

Endocytosis brings materials into the cell through vesicle formation. Phagocytosis ('cell eating') engulfs large particles, pinocytosis ('cell drinking') takes in fluids, and receptor-mediated endocytosis selectively brings in specific molecules. Exocytosis expels materials from the cell, such as neurotransmitter release in neurons. Transcytosis moves materials across a cell, combining endocytosis and exocytosis.

An example is serotonin release, which plays a role in regulating mood. Low serotonin levels are linked to depression, and medications like SSRIs help maintain serotonin levels by blocking its reuptake.`,
    sampleProblems: `--- Quiz 2 - Things to Know ---
Quiz 2 Things to Know – Use Outline 1

# Basic Biochemistry

Atoms

• Protons

• Neutrons

• Electrons

• Atomic mass

• Atomic number

Molecules and Bonding

• Covalent

• Ionic

• Hydrogen

Unique features of water

pH

# Biomolecules

Carbohydrates (structure / function / types)

• Monosaccharides

• Disaccharides

• Polysaccharides

Lipids (structure / function / types)

• Triglycerides

• Phospholipids

• Steroids

Proteins (structure / function / types)

• Amino acids

• Peptide bonds

• Levels of protein structure

Nucleic Acids (structure / function / types)

• DNA / RNA differences and similarities

• Bases

• Nucleotides

• Purines / Pyrimidines

• Complimentary base pairing

• Relative strength of pairing between C-Gs and A-Ts

# Enzymes and Basic Biochemistry

Types of Bonds / Interactions Relevant to Biomolecules

• Condensation/hydrolysis reactions

• Hydrogen bonding

Activation energy

Enzyme substrate binding

Enzyme efficiency

• Specificity

• Concentration

• Affinity

• Saturation

--- Quiz 2 - Practice Questions ---
**Quiz 2 - Practice Questions**

**Questions**

What determines the type of atom you may observe?

What is the relationship between valence shells and atomic stability?

List the bonds in terms of strength (strongest to weakest):

What are the 4 major biomolecules:

What are the monomers for each major biomolecule?

What are the polymers for each major biomolecule?

How are bonds formed between all of the major biomolecule monomers and polymers?

How are bonds broken between all of the major biomolecule monomers and polymers?

Which is more stable, DNA or RNA?

Describe the difference between specificity and affinity.

What does the point of saturation look like on a reaction rate graph?

**Answer Key**

1. The number of protons in the nucleus

2. The most stable atoms have full valence shells of electrons

3. Covalent, Ionic, hydrogen (not really a bond but still important)

4. Nucleic acids, proteins, carbohydrates, lipids

5. Nucleic acids - nucleotides; Lipids - fatty acids and glycerol; Carbohydrates - monosaccharides; proteins - amino acids.

6. Nucleic acids - DNA/RNA; Lipids - triglycerides; Carbohydrates - polysaccharides; proteins - peptides/proteins

7. Dehydration synthesis or condensation reactions

8. Hydrolysis

9. DNA because of the double stranded nature of the molecule

10. Specificity is how specific an enzyme’s binding is to a single substrate when exposed to multiple potential substrates. Affinity is how attracted an enzyme is to a substrate.

11. A plateau beyond which the graph does not climb.

--- Quiz 3 - Things to Know ---
Quiz 3 Things to Know – Use Outlines 2, 3, and 4

# Cell Structure and Function

• What does it mean to be alive. Understand the strict criteria and how it doesn’t always work perfectly.

• Why are cells considered the smallest unit of life?

• Understand the 3 hallmarks of cell theory

• How is cell function tied to cell structure?

• Understand the major distinctions between eukaryotes and prokaryotes

• Understand the distinction between archaea and bacteria

• What is an extremophile?

• Understand in general the basic functions of a cell

• Understand the organelles that were discussed in the lessons and what role they play

• What would happen if one of the organelles was disrupted?

• Be able to identify a membrane bound organelle and how many membranes (phospholipid bilayers) can be found on each.

• Understand what makes proteins and lipids and where that production takes place

• What are the distinctions between plant and animal cells

• What organelles/structures are similar between the types and what organelles are distinct.

• Why is compartmentalization important and how is it achieved in cells/organisms

• What is a phospholipid bilayer and where all can you find it in the cell

• Understand what amphipathic means

• Unsaturated vs saturated fatty acids in phospholipids and how they relate to rigidity of membranes

• What does semipermeable or selectively permeable mean?

• What can and can’t pass through a phospholipid bilayer

• Transmembrane proteins, what can they do? (transporters, cell surface receptors, etc.)

• What is the function of the cell wall? Why in a plant and not a animal cell?

--- Quiz 3 - Practice Questions ---
**Quiz 3 - Practice Questions**

**Questions**

What are the basic criteria for being alive based on what was discussed in the videos?

What is the smallest unit of life?

What are the main characteristics associated with the level of fatty acid saturation in phospholipids?

If you identify a multicellular organism with a nucleus, this organism must be...

Describe each cell component and if it is found in an animal or plant cell (or both):
   a. Cell Wall
   b. Cytoplasm
   c. Nucleus
   d. Rough Endoplasmic Reticulum
   e. Smooth Endoplasmic Reticulum
   f. Ribosome
   g. Mitochondria
   h. Chloroplast
   i. Golgi
   j. Cytoskeleton

Why do cells need to have discrete compartments?

Is the plasma membrane permeable to large non-polar molecules?

Imagine that you were on the magic school bus and found yourself inside the smooth endoplasmic reticulum but you needed to get outside of the cell that you were in. At a minimum, how many phospholipid bilayers would you need to cross to get out of the cell?

**Answer Key**

1. ≥ 1 cell, uses energy, maintains its internal environment, grows and develops, reproduces, responds to stimuli, contains hereditary information.

2. The cell

3. The more saturated the fatty acid tails in the plasma membrane, the more rigid the membrane.

4. Eukaryotic

5. 

a. Cell Wall: Rigid 'wall' to protect the cell found only in plants.

b. Cytoplasm: Jelly like substance that contains the organelles. Found in both animal and plant cells.

c. Nucleus: Dense membrane bound structure (with two membranes forming an 'envelope') which contains DNA. Found in both animals and plants (not in prokaryotes).

d. Rough Endoplasmic Reticulum: Membranous sacs that look rough due to the presence of ribosomes. This is the site of protein synthesis for proteins that are going to be incorporated into the membrane or released from the cell. In both plant and animal cells.

e. Smooth Endoplasmic Reticulum: Membranous sacs that can store various ions (such as calcium), produce lipids, and detoxify various toxins. Found in both animal and plant cells.

f. Ribosome: Very small structure made of both RNA and protein. Ribosomes are the cellular component that synthesize proteins and are found in both plant and animal cells.

g. Mitochondria: Double membrane bound organelle that is the site of the vast majority of ATP production for cellular energy in both plant and animal cells.

h. Chloroplast: Double membrane bound organelle that is the site of carbohydrate synthesis in only plant cells.
i. Golgi: Membranous sacs that receive newly produced proteins from the rough ER to package them appropriately for shipment out of the cell. Found in both plant and animal cells.

j. Cytoskeleton: Protein structures a bit like scaffolding that provides support and rigidity to the cell in addition to other functions. Found in both plant and animal cells.

6. Different reactions require slightly different environments. Compartmentalization provides the ability for different cells or different areas of the cell to specialize.

7. Yes (because they are non-polar, size does not have a big impact).

8. 2 bilayers.

--- Unit 2 Not on a Quiz -  Fact Check 1 ---
# Unit 2 Practice Questions – Diffusion and Membrane Transport

**1) **Diffusion is the movement of molecules from:

A) Low to high concentration

B) High to low concentration

C) Inside to outside only

D) One cell type to another

E) High pressure to low pressure

**2) **Brownian motion refers to:

A) The energy input required for diffusion

B) The random movement of particles

C) The process of osmosis

D) Movement of vesicles

E) A type of active transport

**3) **Which of the following increases the rate of diffusion?

A) Lower temperature

B) Higher temperature

C) Smaller concentration gradient

D) Lack of solvent

E) ATP input

**4) **A solute is defined as:

A) The liquid that dissolves molecules

B) The molecule being dissolved

C) A membrane protein

D) The same as solvent

E) Water

**5) **A solvent in biological systems is almost always:

A) Oxygen

B) Sodium

C) Glucose

D) Water

E) ATP

**6) **Facilitated diffusion differs from simple diffusion because it:

A) Requires ATP

B) Requires a protein channel or carrier

C) Moves solutes against a gradient

D) Happens only in plants

E) Stops at equilibrium

**7) **The sodium-potassium pump moves ions in which direction?

A) 2 Na+ in, 3 K+ out

B) 3 Na+ in, 2 K+ out

C) 3 Na+ out, 2 K+ in

D) 2 Na+ out, 3 K+ in

E) Equal Na+ and K+ exchange

**8) **Which of the following is an example of primary active transport?

A) Glucose movement through GLUT transporter

B) Sodium-potassium pump

C) Osmosis of water

D) Brownian motion

E) Facilitated diffusion

**9) **A symporter moves:

A) Two molecules in opposite directions

B) Two molecules in the same direction

C) Only one molecule

D) Solvent molecules only

E) Vesicles

**10) **An antiporter moves:

A) Two molecules in opposite directions

B) Two molecules in the same direction

C) One molecule either way

D) Only proteins

E) Only lipids

**11) **A uniporter moves:

A) One type of molecule down its gradient

B) Two molecules in the same direction

C) Two molecules in opposite directions

D) Only ions with ATP

E) Water only

**12) **Which of the following describes secondary active transport?

A) Movement using ATP directly

B) Movement using the energy of another gradient

C) Movement down a gradient with no energy

D) Movement of vesicles

E) Random diffusion

**13) **Channels allow:

A) Slow random diffusion

B) Passive, rapid movement of specific ions or molecules

C) Molecules to move against gradients

D) Only water to pass

E) Endocytosis

**14) **Endocytosis is best described as:

A) Bringing material into the cell via vesicles

B) Expelling material out of the cell

C) Movement of solvent only

D) Simple diffusion

E) Transporter movement

Answer Key

1- B

2- B

3- B

4- B

5- D

6- B

7- C

8- B

9- B

10- A

11- A

12- B

13- B

14- A

--- Unit 2 Not on a Quiz -  Fact Check 2 ---
# Unit 2 Practice Questions – Osmosis

**1) **Osmosis is the movement of:

A) Solute across a membrane

B) Water across a selectively permeable membrane

C) Proteins across cytoplasm

D) ATP into a cell

E) Vesicles into a cell

**2) **Osmosis always occurs:

A) From high solute to low solute

B) From low solute to high solute concentration

C) Only with energy

D) Only in animal cells

E) Against water gradients

**3) **Osmotic pressure depends on:

A) The type of solute

B) Concentration of Solute

C) The type of solvent

D) ATP concentration

E) Presence of proteins

**4) **A hypotonic solution causes a cell to:

A) Shrivel

B) Swell

C) Stay the same

D) Gain solute

E) Lose solute

**5) **A hypertonic solution causes a cell to:

A) Swell

B) Shrivel

C) Stay the same

D) Divide

E) Gain water

**6) **An isotonic solution causes:

A) Swelling

B) Shrinkage

C) No net water movement

D) Endocytosis

E) Vesicle release

**7) **Tonicity refers to:

A) The pressure of gases

B) Concentration of a solution 

C) The concentration of glucose only

D) ATP-dependent movement

E) Endocytosis

**8) **Osmosis differs from diffusion because:

A) It requires ATP

B) It involves water movement specifically

C) It uses vesicles

D) It is always active

E) It involves proteins only

**9) **Water will move into a cell when:

A) The surrounding solution is hypertonic

B) The surrounding solution is hypotonic

C) The surrounding solution is isotonic

D) Solute concentration is the same inside and outside

E) ATP is abundant

**1****0****) **Osmosis requires:

A) Energy from ATP

B) A selectively permeable membrane

C) Proteins only

D) Vesicles

E) Endocytosis

**1****1****) **Which of the following is NOT involved in osmosis?

A) Water

B) Selectively permeable membrane

C) Solute concentration differences

D) ATP hydrolysis

E) Tonicity

Answer Key

1- B

2- B

3- B

4- B

5- B

6- C

7- B

8- B

9- B

10- B

11- D

--- Unit 2 - Materials Not Covered By a Quiz ---
Unit 2 - Materials Not Covered By a Quiz

# Membranes and Structure

• What is a phospholipid bilayer and where all can you find it in the cell

• Why is compartmentalization important and how is it achieved in cells/organisms

• Understand what amphipathic means

• Unsaturated vs saturated fatty acids in phospholipids and how they relate to rigidity of membranes

• What does semipermeable or selectively permeable mean?

• What can and can’t pass through a phospholipid bilayer

• Transmembrane proteins, what can they do? (transporters, cell surface receptors, etc.)

• What is the function of the cell wall? Why in a plant and not an animal cell?

# Transport and Movement

• Understand and be able to describe examples of the following:

   - Solute

   - Solvent (what is virtually always the solvent in biology)

   - Diffusion

   - Osmosis

   - Concentration gradients (understand directions down gradient or up/with gradient)

   - Facilitated diffusion

   - Na/K pump

# Active Transport vs Passive Transport

• Textbook definition

• What is always true about active transport?

# Secondary Active Transport

• Antiporters

• Symporters

# Osmosis and Tonicity

• Osmotic pressure (be able to identify high and low as well as which direction molecules will move as a result)

• What moves with osmosis (solute or solvent)

• Which direction will movement occur with osmosis?

• What is edema and why does it occur?

• Understand tonicity and what can happen to a cell under certain conditions:

   - Isotonic

   - Hypotonic

   - Hypertonic

How is diabetes illustrative of osmosis?

# Bulk Movement Across Membranes

• Endocytosis

• Phagocytosis

• Pinocytosis

• Exocytosis

• How do channels and transporters work?

--- Unit 2 Practice Questions Not Covered By a Quiz ---
**Unit 2 Practice Questions Not Covered By a Quiz**

**Questions**

Question 1
What is true about active transport? (be sure to consider all forms of active transport, primary and secondary)
A) Solute is always moving with its concentration gradient
B) Some solute virtually always moves against its concentration gradient
C) ATP is always used directly to pump solute from one side of a membrane to the other
D) The membrane is always permeable to the solute moved in active transport

Question 2
The Na+/K+ Pump uses ATP to actively pump Na+ out of the cell and K+ into the cell forming a large concentration gradient for both Na+ and K+. Because of this concentration gradient what other forms of transport are possible? (select all that are possible answers)
A) Secondary active transport
B) Facilitated diffusion
C) Simple diffusion

Question 3
Certain transport proteins allow glucose from outside of the cell to move into the cell but only if Na+ is allowed to move down it’s concentration gradient (from outside to inside) as well. Select all of the answers below that correctly describe this process.
A) This process is an example of facilitated diffusion
B) The transport protein used in this process is a symporter
C) This process is an example of secondary active transport
D) This process is an example of simple diffusion
E) The transport protein used in this process uses ATP to pump Na+ and glucose across the membrane
F) The transport protein used in this process is a uniporter
G) The transport protein used in this process is an antiporter

Question 4
The movement of proteins across a membrane is most likely to occur using which of the following?
A) Osmosis
B) Diffusion
C) Pinocytosis

Question 5
High chloride ion concentration inside of a cell (compared to the external environment) will result in which of the following? Select all that apply
A) Solvent will move from inside the cell to outside
B) The cell will shrivel
C) The cell will swell
D) Solvent will move from the outside the cell to inside
E) The cell will remain unchanged

Question 6
We would consider the fluid outside of the cell in question 5 to be _____ compared to the internal environment of the cell?
A) Isotonic
B) Hypertonic
C) Hydrophobic
D) Hypotonic

Question 7
An individual gets stuck in the wilderness and very rapidly becomes dangerously dehydrated. A great deal of water is lost from the cerebrospinal fluid (CSF) to compensate for all of the water lost due to sweating. The CSF is the fluid that surrounds your brain and all of the neurons (the major cell type in the brain). While much of the water was lost from the CSF, the solute in the CSF remained. As a result the neurons began to shrivel. What could explain why this occurred?
A) Before the cell shriveled, the osmotic pressure was higher in the CSF than inside the cell
B) The neurons lost their solute to compensate for the change in concentration in the cerebrospinal fluid
C) Before the cell shriveled the concentration of solute was equal in the neuron and in the CSF
D) Before the cell shriveled, the osmotic pressure was lower in the CSF than inside the cell

Question 8
Neurons often take up large quantities of dissolved molecules through a process called…
A) Exocytosis
B) Phagocytosis
C) Pinocytosis

Question 9
A semipermeable membrane separates two sides of a beaker. You place two solutions on either side and let them equilibrate. Side A has 10mM K+ and Side B has 100mM K+. Assuming that the membrane is permeable to K+ what will the concentration of K+ be on side B once the solution reaches equilibrium?
A) 55mM
B) 50mM
C) 5mM
D) 25mM

Question 10
A phospholipid bilayer is unlikely to be permeable to which of the following? (select all that apply)
A) DNA (large polar molecule)
B) Steroid (large non-polar molecule)
C) Oxygen (small non-polar molecule)
D) K+ (small charged ion)

Question 11
The Na+/K+ Pump uses ATP to actively pump Na+ out of the cell and K+ into the cell forming a large concentration gradient for both Na+ and K+. What would the addition of a large amount of K+ outside of the cell do?
A) Make the K+ concentration gradient weaker or reverse it depending on the amount added outside of the cell
B) Increase the efficiency of the Na+ / K+ pump
C) Make the K+ concentration gradient stronger
D) Decrease the efficiency of the Na+ / K+ pump

**Answer Key**

1- B

2- A and B

3- B and C

4- C

5- C and D

6- D

7- A

8- C

9- A

10- A and D

11- A`,
  },
  "3": {
    name: "Introductory biochemistry",
    topics: `--- Unit 3 - Central Dogma, DNA Replication, Protein Synthesis ---
**Unit 3: Central Dogma, DNA Replication, and Protein Synthesis**

**Spiritual Thought**

“By small and simple things are great things brought to pass” (Alma 37:6). Life’s grand designs are written with tiny letters—four bases in DNA. As those simple units are copied with care and translated into action, a living cell emerges. Likewise, small acts of faith—scripture study, prayer, kindness—replicate into Christlike character over time.

**Learning Objectives**

By the end of this lesson, you should be able to:

Describe the differences between the 4 major biomolecules

Describe the function of biomolecules

Describe all aspects of the central dogma (DNA replication, transcription, translation)

Describe basic gene regulation

**Alfred Hershey and Martha Chase**

**Bacteriophage: **A virus that infects bacteria; its protein coat stays outside while its DNA enters the cell.

Classic experiments by Hershey and Chase showed that DNA—not protein—is the hereditary material. They tracked radioactive labels and found only the DNA label entered the bacteria and directed new virus production. Quick analogy: if a delivery driver drops a package (DNA) at your door but keeps the truck (protein coat), the useful instructions are in the package, not the truck.

**Hershey/Chase Experiment**

**Question: **Is DNA or protein the heritable blueprint for life?

Using sulfur (labels protein) and phosphorus (labels DNA), they demonstrated DNA carries genetic information. This settled a major debate and set the stage for the central dogma.

**From Blueprint to Product**

Think of DNA as the architect’s blueprint, RNA as the photocopy you can take to the construction site, and protein as the finished structure that does the work.

**Central Dogma of Biology**

**DNA → RNA → Protein: **Information flows from DNA (storage) to RNA (message) to protein (function).

In prokaryotes this all happens in the cytosol. In eukaryotes, transcription occurs in the nucleus and translation occurs in the cytoplasm on ribosomes.

**DNA → RNA → Protein**

**Genotype: **The sequence of DNA—your ‘letters’.

**Phenotype: **Observable traits—what those letters build.

Proteins determine most traits by their shapes and activities—enzymes catalyze reactions, receptors signal, structural proteins give form. Change the sequence, change the shape, change the function.

**Coding vs. Non-coding**

**Coding DNA: **Sequences that produce a functional product (RNA or protein).

**Non-coding DNA: **Sequences that do not directly code for a product but often regulate when and where genes turn on.

Calling non‑coding DNA ‘junk’ is outdated—much of it is regulatory real estate that tells genes when to speak up or be quiet.

**The Gene**

**Gene: **A genomic DNA sequence that codes for a product (RNA or protein), typically controlled by a promoter.

Promoters act like ‘start here’ flags for transcription; nearby and distant regulatory elements fine‑tune the volume.

**Junk DNA?**

One human blueprint supports ~200 cell types. The difference isn’t the book—it’s which chapters are read. Regulatory DNA and epigenetic marks decide what each cell type expresses.

**How can this be? Gene REGULATION**

**Gene regulation: **Mechanisms that increase or decrease gene expression to fit a cell’s needs and identity.

Examples: liver cells express enzymes for detoxification; pancreatic β‑cells express insulin; skin fibroblasts express collagen. Same genome, different playlists.

Spiritual tie‑in: Like gene regulation guides a cell’s identity, disciples choose which ‘chapters’ of God’s word to express. When we ‘turn on’ principles like charity and integrity, our spiritual phenotype changes.

**A key issue**

For life to continue, DNA must be replicated accurately before cell division so each daughter cell inherits a faithful copy.

**Meselson**** and Stahl**

**Semiconservative model: **Each new DNA double helix has one old (parental) strand and one new strand.

Their density‑labeling experiment elegantly ruled out conservative and dispersive models. Result: replication is semiconservative—the gold standard of copy‑and‑keep.

**The ****P****roposed Dispersive**** Mechanism: **Would mix old and new DNA in every strand segment. Data did not support this.

**The ****P****roposed ****Conservative Mechanism: **Would keep the original double helix intact and make a brand‑new copy. Data did not support this either.

**The ****P****roposed ****Semiconservative**** Mechanism: **Matched the experimental results: each daughter molecule contains one parental and one new strand.

**Key ****Experiment I****dea: **Track ‘heavy’ vs ‘light’ DNA over generations to test models of replication.

**How is DNA replicated?**

Replication starts at origins and proceeds in both directions, forming replication forks. Both strands are copied at the same time but in different ways because DNA polymerases can only add to the 3′ end.

**Proteins you must know**

**Helicase****: **Unzips the DNA double helix at the fork.

**Topoisomerase: **Relieves twisting strain ahead of the fork—your cellular detangler.

**Single‑stranded binding proteins (SSBPs): **Protect and stabilize separated strands so they don’t snap back together.

**Primase****: **Builds short RNA primers so polymerases have a starting 3′‑OH.

**DNA polymerase III: **Main builder that extends the new DNA strand from primers.

**DNA polymerase I: **Removes RNA primers and fills the gaps with DNA.

**Ligase: **Seals nicks between fragments, creating a continuous sugar‑phosphate backbone.

**Stand Terminology**

**Leading strand: **Synthesized continuously toward the fork (one primer). 

**Lagging strand: **Synthesized discontinuously away from the fork as Okazaki fragments (many primers). 

**DNA polymerases**

**Directionality: **Polymerases add nucleotides only in the 5′→3′ direction.

**Template requirement: **They must copy an existing template; they cannot start de novo on bare DNA.

**Primer requirement: **They need a free 3′‑OH (provided by RNA primers).

**Features of DNA polymerase**

**High fidelity: **Base‑pairing rules (A‑T, G‑C) and the snug fit of the active site prevent most mistakes.

**Proofreading: **Polymerase can ‘backspace’ with 3′→5′ exonuclease activity to remove mismatches.

Other repair systems patrol after replication. DNA’s copy editor is picky—in a good way.

**DNA replication is very accurate!**

With base pairing, active‑site geometry, proofreading, and repair, cells achieve error rates as low as ~1 in 10^9–10^10 bases. That’s like typing an entire library and making only a couple of typos.

Spiritual tie‑in: Replication fidelity mirrors integrity. Small honest choices—proofread by conscience—keep our life’s record accurate even under pressure.

**Confusing terminology!!!!**

**Coding (non‑template) strand: **DNA strand whose sequence matches the RNA (except T→U).

**Template (non‑coding) strand: **DNA strand read by RNA polymerase to build complementary RNA.

**Enzymes used in protein synthesis**

**RNA Polymerase I: **Transcribes most rRNA genes for ribosome structure.

**RNA Polymerase II: **Transcribes mRNA and many regulatory RNAs; central to protein‑coding genes.

**RNA Polymerase III: **Transcribes tRNAs and some small rRNAs. (No primase required for RNA polymerases.)

**Types of RNA involved in protein synthesis**

**mRNA: **Messenger that carries the coding sequence from DNA to ribosomes.

**tRNA: **Adaptor that pairs its anticodon with mRNA codons and brings specific amino acids.

**rRNA: **Catalytic and structural core of ribosomes; forms peptide bonds.

**Transcription**

**Reading direction: **Polymerase reads the DNA template 3′→5′.

**Writing direction: **RNA is synthesized 5′→3′.

**Three stages of transcription**

**Initiation: **Polymerase finds the promoter and opens DNA to start RNA synthesis.

**Elongation: **Polymerase moves along DNA, adding NTPs to extend RNA.

**Termination: **Signals in DNA/RNA cause polymerase to release the transcript.

**Initiation: How Does Transcription Begin?**

**Holoenzyme (bacteria): **Sigma factor + core RNA polymerase; sigma helps find promoters.

Sigma opens DNA at the promoter; once RNA synthesis starts, sigma often departs, leaving the core to elongate.

**What Occurs Inside the Holoenzyme?**

Incoming ribonucleotides pair with the template base and the polymerase links them, releasing pyrophosphate—a tidy energy strategy that makes the reaction go forward.

**Bacterial Promoters**

**−10 box (TATAAT): **About 10 bases upstream of the start (+1).

**−35 box (TTGACA): **About 35 bases upstream. Sigma recognizes both motifs.

**Eukaryotic Promoters**

**TATA**** box: **Often ~30 bases upstream; recognized by transcription factors, not sigma.

**CpG islands: **C and G‑rich regions; methylation here can silence or enable transcription.

**Post-Transcriptional Processing**

**Introns: **Non‑coding sequences transcribed but removed before translation.

**Exons: **Coding segments that remain and are joined to make mature mRNA.

**Splicing: **The spliceosome (snRNPs) precisely removes introns and ligates exons.

**5′ cap: **Modified guanine added to the 5′ end; aids export and ribosome binding.

**3′ poly(A) tail: **String of adenines that protects mRNA from degradation and helps translation.

**Spliceosome**** **

Introns have consensus sequences at the 5′ splice site, branch point, and 3′ splice site; snRNPs recognize these and catalyze the cut‑and‑paste.

 

We are left with a mature mRNA which is then exported through nuclear pores to the cytoplasm, ready for ribosomes. Alternative splicing can make multiple proteins from one gene—cellular efficiency at its finest.

**Take a step back: Big picture**

DNA letters (A, T, G, C) are transcribed into RNA letters (A, U, G, C), which are read in threes (codons) to build proteins.

**Sets of 3**

**Codon: **Three‑base unit on mRNA that specifies an amino acid or stop.

**Anticodon: **Three‑base unit on tRNA that pairs with a codon.

**Genetic Code**

**Redundancy: **Most amino acids are encoded by multiple codons—useful error tolerance.

**Start codon: **AUG (methionine) usually signals the start of translation.

**Stop codons: **UAA, UAG, UGA signal termination—no amino acid added.

**Translation**

**Location: **Occurs on ribosomes in the cytoplasm or on rough ER.

**Requirements: **mRNA template, charged tRNAs, ribosomal subunits, and initiation/elongation/termination factors.

**Transfer RNA**

**Charging: **Aminoacyl‑tRNA synthetases load tRNAs with the correct amino acid (proofreading included).

Each tRNA is specific: wrong amino acid, wrong fit. Think of barcodes matching at checkout.

**Ribosomes**

**A site: **Entry site for the next aminoacyl‑tRNA.

**P site: **Holds the tRNA with the growing peptide chain.

**E site: **Exit site for the deacylated tRNA.

The ribosome is a ribozyme—rRNA catalyzes peptide bond formation.

**Initiation of Translation**

In bacteria, the small subunit binds a Shine‑Dalgarno sequence; in eukaryotes, it scans from the 5′ cap to the first good AUG. Initiator tRNA (Met) pairs with AUG, then the large subunit joins, and elongation begins.

**TARGETING A PROTEIN’S CELLULAR DESTINY**

A short leader sequence can send a protein to the ER for secretion or membranes; no signal often means it stays in the cytosol.

**Gene REGULATION**

**Transcription factors: **Proteins that bind DNA to turn genes on or off (activators, repressors).

**Enhancers/silencers: **DNA elements that boost or dampen transcription, sometimes far from the gene.

**Epigenetics****: **Chemical tags (like DNA methylation, histone modification) that change gene expression without changing DNA sequence.

Prokaryote example: the lac operon turns lactose‑use genes on only when lactose is present and glucose is low—smart resource use.

Eukaryote example: during exercise, muscle cells increase transcription of mitochondrial genes to meet energy demand—your cells ‘train’ too.

Spiritual tie‑in: The Spirit is like a master transcription factor—He brings God’s word to our remembrance (John 14:26) and prompts us to ‘express’ the right principles in the right moment.

**Everyday Examples and Study Tips**

**Diffusion vs. directed delivery: **Smells spreading through a room (diffusion) vs. a courier taking a package to a specific door (targeting signal).

**Semiconservative copying: **Photocopy a page, staple one original to one new copy—each set has one old and one new page.

**Splicing: **Editing a video—cut out bloopers (introns), keep the scenes you want (exons), export the final cut (mature mRNA).

**Ribosome workflow: **A line cook: order (mRNA) arrives, ingredients (tRNAs) line up, chef (rRNA) links them into a dish (protein).

--- Unit 3 - Gene Regulation, Epigenetics, DNA Repair ---
**Unit 3: Gene Regulation, ****Epigenetics****, and DNA Repair**

**Spiritual Thought**

In Proverbs 4:23 we are counseled to 'keep thy heart with all diligence; for out of it are the issues of life.' Our cells do something similar through gene regulation and DNA repair—guarding the integrity of their information so they can function properly. Just as our spiritual well-being depends on what we allow into our hearts, a cell’s health depends on what genes are expressed and how it protects itself from damage.

**Learning Objectives**

By the end of this lesson, you should be able to:

Describe basic forms of gene regulation

Explain the role of epigenetics and how the environment can impact gene expression

Identify major types of DNA mutations

Explain DNA repair mechanisms and why they are important

**Gene Regulation Basics**

Gene regulation is how cells control which genes are turned on or off and when. All cells in an organism share the same DNA, but different cells express different sets of genes to carry out specialized functions.

For example, a skin cell and a neuron have the same DNA, but their 'active gene playlists' are different—the neuron expresses neurotransmitter genes, while the skin cell expresses keratin genes. This is like two people owning the same piano but playing completely different songs.

**Enhancers: **DNA elements located sometimes far from a gene that increase transcription when bound by activator proteins.

**Promoters: **DNA sequences near a gene where RNA polymerase and transcription factors assemble to start transcription.

**Transcription factors: **Proteins that bind specific DNA sequences to regulate transcription—either increasing (activators) or decreasing (repressors) gene expression.

**Epigenetics****: Linking Environment and Gene Expression**

Epigenetics refers to heritable changes in gene expression that do not alter the underlying DNA sequence. Think of it as software controlling the hardware of your genes. These changes can be influenced by diet, stress, toxins, exercise, and more.

**DNA methylation: **Addition of methyl groups to cytosine bases (often at CpG sites), usually silencing the gene.

**Histone modification: **Chemical changes to histone proteins (such as acetylation or methylation) that alter how tightly DNA is wrapped, affecting gene accessibility.

Analogy: DNA methylation is like placing a piece of tape over a light switch. The switch (gene) is still there, but the tape prevents it from being turned on. Removing the tape allows the light to shine again.

Methylation marks can be removed or altered through active DNA demethylation processes, showing that epigenetic regulation is dynamic and reversible.

Environmental influences can alter methylation patterns. For example, studies of individuals conceived during famines show lifelong methylation changes affecting metabolism and disease risk. Smoking can also increase methylation at tumor suppressor gene promoters, reducing their expression and increasing cancer risk.

Methylation is heritable during cell division, meaning daughter cells inherit the same methylation patterns as the parent cell. This helps preserve cell identity—skin cells stay skin cells because they keep the same pattern of active and silenced genes.

Enzymes called DNA methyltransferases (DNMTs) establish and maintain methylation patterns. DNMT1 maintains patterns during replication, while DNMT3a and DNMT3b are involved in adding new methylation marks.

DNA methylation is the addition of methyl groups to cytosine bases, most commonly at CpG dinucleotides. Clusters of CpGs, known as CpG islands, are often located in gene promoter regions. Methylation here generally silences gene expression.

**DNA Methylation in Detail **

Analogy: Imagine the DNA as thread wound on a spool (the histone). Adding acetyl groups is like loosening the thread so it can be used easily, while removing them tightens it, making it harder to access. In health, a balance of these modifications allows genes to be turned on and off precisely; in disease, such as cancer, this balance is often disrupted.

Ubiquitination: Addition of ubiquitin proteins to histones, which can signal for transcriptional activation or repression, or even histone removal.

Phosphorylation: Addition of phosphate groups to serine, threonine, or tyrosine residues. Often linked to DNA damage signaling and chromatin remodeling during cell division.

Methylation: Addition of methyl groups to lysines or arginines by histone methyltransferases (HMTs). Methylation can either activate or repress transcription depending on the site and context—H3K4 methylation often activates, while H3K27 methylation usually represses.

Acetylation: Addition of acetyl groups to lysine residues on histone tails by histone acetyltransferases (HATs). Acetylation neutralizes positive charges, loosening the DNA-histone interaction and making DNA more accessible for transcription. Histone deacetylases (HDACs) remove these groups, leading to tighter packing and reduced gene expression.

Histones are proteins that package DNA into structural units called nucleosomes. Each nucleosome is like a spool around which DNA is wrapped. The 'tails' of histones protrude from this spool and are accessible to enzymes that add or remove chemical tags, altering how tightly DNA is wound.

**Histone Tail Modifications in Detail **

**Non-coding RNAs: **RNAs that regulate gene expression without coding for proteins, such as microRNAs that block translation.

Example: Identical twins have the same DNA but can develop different health outcomes over time due to differences in lifestyle and environment that affect their epigenetic marks.

Spiritual tie-in: Epigenetics reminds us that even with the same 'spiritual DNA'—our divine potential—our environment, choices, and habits influence which traits we express. We can 'turn on' Christlike attributes by surrounding ourselves with uplifting influences.

**Mutations and Their Sources**

Mutations are permanent changes in the DNA sequence. They can arise during replication or from environmental exposures. While some mutations are harmless, others can disrupt protein function and cause disease.

**Point mutation: **A change in a single base pair—can be silent, missense (changes amino acid), or nonsense (introduces stop codon).

**Frameshift mutation: **Insertion or deletion of bases not in multiples of three, shifting the reading frame and often rendering the protein nonfunctional.

**Large-scale alterations: **Include deletions, duplications, inversions, and translocations of large DNA segments.

Examples of environmental causes: UV light causing thymine dimers, cigarette smoke introducing chemical adducts, or radiation breaking DNA strands.

**DNA Repair Mechanisms**

Cells have over 100 repair enzymes to maintain DNA integrity. If damage is not repaired before replication, mutations become permanent.

**Mismatch repair: **Corrects base-pairing errors missed during replication by replacing the incorrect base with the correct one.

**Nucleotide excision repair: **Removes bulky DNA lesions such as thymine dimers by cutting out a segment of the damaged strand and resynthesizing it.

**Proofreading: **DNA polymerases check and correct mismatches during replication.

Example: People with mutations in mismatch repair genes have a higher risk for certain cancers, such as Lynch syndrome.

**Preventing DNA Damage**

While we cannot prevent all replication errors (which may contribute to aging), we can reduce environmental DNA damage by wearing sunscreen, avoiding tobacco, and limiting exposure to harmful chemicals.

Spiritual tie-in: DNA repair is like repentance—catching errors early and fixing them before they cause lasting harm. Just as uncorrected DNA damage can change a cell forever, unresolved mistakes in our lives can alter our spiritual trajectory.`,
    sampleProblems: `--- Quiz 4 - Things to Know ---
Quiz 4 - Things to Know – Use Outline 1

# Central Dogma

• DNA – RNA – Protein

• Hershey Case experiment

• Differences between prokaryotes and eukaryotes

• Genotype / phenotype

• Coding vs non-coding DNA

• What is a gene

• Sequence structure of DNA (backbone and 5’-3’ direction)

• Utility of junk DNA

# DNA Replication

• Messelson and Stahl experiment

• 5' and 3'

• Semiconservative replication

• DNA replication steps

• Bacterial and eukaryotic replication

• DNA replication proteins

   - Helicase

   - Topoisomerase

   - SSBPs

   - Primase

   - Ligase

   - Polymerase I

   - Polymerase III

   - Leading vs lagging strand

   - Okazaki fragments

   - Direction of reading vs writing

   - Methods to ensure accuracy in replication

What is the importance of base pairing in replication

--- Quiz 4 - Fact Check 1 ---
# Unit 3 Practice Questions – Central Dogma (Focused)

**1) **The central dogma of biology describes the flow of information as:

A) Protein → DNA → RNA

B) DNA → RNA → Protein

C) RNA → DNA → Protein

D) DNA → Protein → RNA

E) Protein → RNA → DNA

**2) **In prokaryotes, transcription and translation occur in the:

A) Cytosol

B) Nucleus

C) Golgi apparatus

D) Rough ER

E) Mitochondria

**3) **In eukaryotes, transcription occurs in the:

A) Cytosol

B) Nucleus

C) Ribosome

D) Rough ER

E) Plasma membrane

**4) **In eukaryotes, translation occurs in the:

A) Nucleus

B) Cytoplasm on ribosomes

C) Golgi apparatus

D) Chloroplast

E) Mitochondria only

**5) **The sequence of DNA is referred to as the:

A) Phenotype

B) Genotype

C) Codon

D) Transcriptome

E) Trait

**6) **The observable traits of an organism are referred to as:

A) Phenotype

B) Genotype

C) Genome

D) Codon

E) Blueprint

**7) **Coding DNA is defined as:

A) DNA that does not make products

B) DNA that produces RNA or protein products

C) DNA that is unnecessary

D) DNA that makes only RNA primers

E) DNA with no role in the cell

**8) **Non-coding DNA is important because:

A) It has no function

B) It regulates when and where genes are expressed

C) It codes directly for proteins

D) It cannot replicate

E) It is only found in bacteria

**9) **A gene is best described as:

A) A sequence of DNA that codes for a product

B) Any random stretch of DNA

C) Only coding sequences with no regulation

D) A sequence of RNA only

E) A protein

**10) **Promoters act as:

A) Stop signals for replication

B) Start sites for transcription

C) Stop signals for translation

D) Enzymes for DNA building

E) Proteins that stabilize DNA

**11) **The Hershey-Chase experiment demonstrated that the genetic material is:

A) Protein

B) DNA

C) RNA

D) Lipids

E) Carbohydrates

**12) **Meselson and Stahl’s experiment demonstrated that DNA replication is:

A) Conservative

B) Dispersive

C) Semiconservative

D) Random

E) Unregulated

Answer Key

1- B

2- A

3- B

4- B

5- B

6- A

7- B

8- B

9- A

10- B

11- B

12- C

--- Quiz 4 - Fact Check 2 ---
# Unit 3 Practice Questions – DNA Replication

**1) **DNA replication ensures that:

A) Each daughter cell gets a full copy of DNA

B) Only one cell gets DNA

C) Proteins are synthesized

D) RNA is transcribed

E) Mutations never occur

**2) **Meselson and Stahl showed that replication is:

A) Conservative

B) Dispersive

C) Semiconservative

D) Random

E) Unregulated

**3) **In semiconservative replication, each new DNA double helix contains:

A) Two new strands

B) Two old strands

C) One old and one new strand

D) Randomly mixed strands

E) No template

**4) **Replication begins at:

A) Ribosomes

B) Origins of replication

C) The Golgi apparatus

D) Promoters

E) Telomeres

**5) **The enzyme that unwinds the DNA double helix is:

A) Ligase

B) DNA polymerase I

C) Helicase

D) Topoisomerase

E) Primase

**6) **The enzyme that relieves strain ahead of the replication fork is:

A) Ligase

B) Topoisomerase

C) Primase

D) DNA polymerase III

E) Helicase

**7) **Proteins that keep DNA strands separated are called:

A) Ligase

B) Helicase

C) Single-stranded binding proteins

D) Topoisomerase

E) Primase

**8) **Primase synthesizes:

A) DNA primers

B) RNA primers

C) Proteins

D) ATP

E) Okazaki fragments

**9****) **DNA polymerases add nucleotides in the:

A) 3′ → 5′ direction

B) 5′ → 3′ direction

C) Both directions

D) Random direction

E) Opposite strand simultaneously

**1****0****) **The leading strand is synthesized:

A) Continuously toward the fork

B) Continuously away from the fork

C) Discontinuously toward the fork

D) Randomly

E) As proteins are made

**1****1****) **The lagging strand is synthesized:

A) Continuously toward the fork

B) Continuously away from the fork

C) Discontinuously away from the fork

D) In random fragments

E) With no primers

**1****2****) **Fragments formed on the lagging strand are called:

A) Polymerase fragments

B) Okazaki fragments

C) Primer fragments

D) Exons

E) Introns

**1****3****) **DNA polymerase III is responsible for:

A) Extending the DNA strand

B) Removing primers

C) Sealing fragments

D) Making RNA primers

E) Unwinding DNA

**1****4****) **DNA polymerase I is responsible for:

A) Sealing fragments

B) Unwinding DNA

C) Removing RNA primers and replacing with DNA

D) Extending the strand continuously

E) Proofreading only

**1****5****) **Ligase is responsible for:

A) Proofreading DNA

B) Sealing nicks between Okazaki fragments

C) Removing primers

D) Adding nucleotides

E) Unwinding DNA

**1****6****) **DNA replication proceeds in which direction from the origin?

A) One direction only

B) Both directions

C) Random directions

D) Toward the nucleus

**17****) **Replication forks are:

A) The starting points of transcription

B) Y-shaped regions where DNA is replicated

C) Ribosomal binding sites

D) Regions of protein synthesis

E) RNA splicing sites

**18****) **The coding strand is:

A) The strand used by polymerase as template

B) The strand identical in sequence to RNA (except U for T)

C) The strand that cannot be copied

D) The RNA strand

E) The protein product

**19****) **The template strand is:

A) The DNA strand identical to RNA

B) The DNA strand read by RNA polymerase

C) The strand that codes directly for proteins

D) The non-coding strand with no use

E) The RNA strand

Answer Key

1- A

2- C

3- C

4- B

5- C

6- B

7- C

8- B

9- B

10- A

11- C

12- B

13- A

14- C

15- B

16- B

17- B

18- B

19- B

--- Quiz 5 - Things to Know ---
Quiz 5 - Things to Know – Use Outlines 1 and 2

# Protein Synthesis

Strand Orientation (5' and 3')

• Coding / noncoding

• Template / non template

• Sense / antisense

# Transcription

• Direction of reading and writing (RNA polymerase)

• RNA Polymerases

• I

• II

• III

• mRNA (pre mRNA / mature mRNA)

• Directionality

• Initiation / elongation / termination

• Holoenzyme

• -10 box / -35 box

• TATA box

• Exons / Introns

• Spliceosome

• mRNA processing

• Triplet / codon

# Translation

• Anticodon

• tRNA

• rRNA

• Amino acids

• Start codon

• Ribosomal binding

• Ribosomal sites A / P / E formation of the polypeptide

• Leader sequence

• Protein targeting rough ER vs free ribosome

• Stop codon

# Other Key Distinctions

• Difference between DNA and RNA in terms of stability

• Difference between eukaryotic and prokaryotic transcription/translation

--- Quiz 5 - Practice Questions ---
**Quiz 5 - Practice Questions**

**Questions**

Write the correct code on the mRNA for the following amino acid sequences…. (Multiple answers: several codons code for different amino acids, check with a TA to make sure you have them right)
1. Leu – Val – Cys – Lys - Stop
2. His – Met – Ser – Thr – Stop - Val – Gly – Lys
 
3. Make a diagram explaining the process of DNA replication (check with a TA to ensure that you have it right if you are not sure).
 
4. The Adenine content of chromosome 1 is 18%. What must the Thymine content of chromosome 1 be?
	A	25%
	B	18%
	C	9%
	D	36%
 
5. Mammalian cells were grown in a cell culture medium that contains large amounts of uracil labeled with radioactivity on the two nitrogens in the uracil ring.  Assume that this radioactivity nitrogen remains in uracil and cannot be transferred to any other molecule.  Which of the following macromolecules would probably contain radioactivity?  
	A	DNA
	B	RNA
	C	Protein
	D	Glycogen
	E	Fatty acids
 
6. A DNA strand has the sequence 5’ ATCGTTATGCAA 3’.  What would be the sequence of the complementary strand? Present your answer in the 5' to 3' confirmation. 

7. Amino acids are distinguished from one another based upon which of the following criteria?
	A	The R-group side chain.
	B	Their relative ability to form peptide bonds.
	C	The reactivity of the central carbon.
	D	Whether or not they contain oxygen in their chemical makeup.

8. Which association between complementary bases would require the most energy to break (has the highest bond dissociation energy)?
	A	All are equal
	B	A:U
	C	A:T
	D	G:C

9. Using the above diagram, write the amino acid sequence for the mRNA sequence below (hint, look for the start codon):
           5' AUUUCGCCCUGAAUGUUUCCCAUA 3'
 
10. What is the amino acid sequence of the protein that this gene codes for? (See Above for the table of codons)
mRNA:     5' U U A C C G U A U G A G C U A U C 3'
 
11. Which mRNA codes for the following polypeptide?
Met-arg-ser-leu-glu
	A	3'-AUGCGUAGCUUGGAGUGA-5'
	B	3'-AGUGAGGUUCGAUGCGUA-5'
	C	5'-AUGCGUAGCUAAGAGUGG-3'
	D	5'-AUGCGUAGCUUGAAUUGA-3'
	E	3'-AUGCGUAGCUUGGAGUGA-5'

12. With what mRNA codon would the a tRNA with the anticodon 5' UAC 3' be able to form a codon-anticodon base pairing interaction?

13. Jimmy was taking a biology test. He needed to determine the amino acids that each codon on an mRNA strand would make. His mRNA strand sequence was supposed to read 5’GGU3’ but he mistakenly wrote 5’GGC3’. He still answered the question correctly. How did this happen?

14. A non-template strand has the sequence: 5’ATTCTACACTG’3.  Provide the respective mRNA strand. Present your answer in the 5' to 3' confirmation:

15. You identify a set of three nucleotides on the template strand of DNA, 5'-GAT-3'. Assuming that this set of three is in the right position to result in a codon, what amino acid would result?
	A	Ile
	B	leu
	C	asp
	D	None, its a stop codon

16. If the coding strand of DNA is 3’ GTCATGCTTAAA 5’, what is the mRNA strand?
	A	3’ TTTAAGCATGAC 5’
	B	5’ CAGUACGAAUUU 3’ 
	C	3’ CAGATGUUCAAA 5’
	D	5’ AAAUUCGUACUG 3’

17. If the non-coding DNA strand reads 3’ TAG CAT TAT CCG TTA 5’ what does the mRNA strand read?
	A	5’ AUC GUA AUA GGC AAU 3’ 
	B	3’ AUC GUA AUA GGC AAU 3’
	C	5’ UTC GTU UTU GGC UUT 3’
	D	3’ UTC GTU UTU GGC UUT 5’

18. Observe the following portion of a gene sequence: 5’ ATGTTACGTCGG 3’, what tRNAs would result from this?
	A	5’ AUG 3' - 5' UUA 3' - 5' CAU 3' - 5' CGG 3’
	B	3’ AUG 5' - 3' UUA 5' - 3' CAU 5' - 3' CGG 5’
	C	5’ TAC 3' - 5' AAT 3' - 5' GCA 3' - 5' GCC 3’
	D	3’ UAC 5' - 3' AAU 5' - 3' GCA 5' - 3' GCC 5’

19. A transfer RNA has the anticodon sequence 3’GUC.  What is the correct triplet of nucleotide bases on the non-template strand of DNA for the production of the codon to which this tRNA will bind during translation?
	A	5’ GUC
	B	5’ CTG
	C	5’ GTC
	D	5’ CUG
	E	5’ GAC
	F	5’ CAG

20. The following DNA sequence is the template strand. 3’ACGTAGGCATAC5’ What mRNA would be produced from this sequence?
	A	5’ GUAUGCCUACGU3’
	B	3’ UGCAUCCGUAUG5’
	C	3’ GUAUGCCUACGU5’
	D	5’ UGCAUCCGUAUG3’

**Answer Key**

1-3: Check with a TA or classmate to make sure you have these right
4. B
5. B
6. 5’ TTGCATAACGAT 3’
7. A
8. D
9. Met-phe-pro-ile
10. Met - Ser - Tyr
11. B
12. 3' AUG 5'
13. This mutation is "silent." GGU and GGC code for the same amino acid.
14. 5’AUUCUACACUG’3
15. A
16. D
17. A
18. D
19. F
20. D

--- Quiz 5 - Fact Check ---
**Quiz** **5** **Fact** **Check**

1) The enzyme responsible for building RNA from a DNA template is:

A) DNA polymerase

B) RNA polymerase

C) Ligase

D) Helicase

E) Primase

2) In eukaryotes, transcription occurs in the:

A) Cytoplasm

B) Nucleus

C) Ribosome

D) Rough ER

E) Golgi apparatus

3) In prokaryotes, transcription and translation occur in the:

A) Cytoplasm

B) Nucleus

C) Ribosome

D) Mitochondria

E) Endoplasmic reticulum

4) The DNA strand used as a template for RNA synthesis is called the:

A) Coding strand

B) Template strand

C) Complementary strand

D) Primer strand

E) Leading strand

5) The coding strand has the same sequence as the RNA transcript except that:

A) T is replaced with U

B) A is replaced with G

C) C is replaced with A

D) G is replaced with T

E) There are no differences

6) A promoter is best described as:

A) A protein that starts translation

B) A DNA sequence where transcription begins

C) A section of RNA where translation begins

D) A part of the ribosome

E) A sequence that ends transcription

9) During transcription, RNA is synthesized in which direction?

A) 3′→5′

B) 5′→3′

C) Randomly

D) Both directions

E) Depends on the gene

10) The RNA polymerase reads the DNA template in the ______ direction.

A) 5′→3′

B) 3′→5′

C) Random

D) Circular

E) Variable

11) In eukaryotes, which of the following is NOT a step in mRNA processing?

A) Addition of a 5′ cap

B) Addition of a poly(A) tail

C) Splicing out introns

D) DNA proofreading

E) Joining of exons

14) Exons are:

A) Removed before translation

B) Joined to form mature mRNA

C) Found only in bacteria

D) Spliced out

E) Nonfunctional segments

15) The start codon for translation is:

A) UAA

B) AUG

C) UGA

D) UAG

E) GUG

16) Stop codons signal:

A) The beginning of translation

B) The end of translation

C) The end of transcription

D) Ribosome assembly

E) Amino acid activation

17) Translation occurs in the:

A) Nucleus

B) Cytoplasm

C) Golgi apparatus

D) Mitochondria only

E) Lysosomes

18) mRNA’s role in translation is to:

A) Carry amino acids

B) Provide the codon sequence for protein synthesis

C) Catalyze peptide bond formation

D) Transport ribosomes

E) Store energy

19) tRNA’s role in translation is to:

A) Carry the DNA message

B) Carry amino acids to the ribosome

C) Form peptide bonds

D) Replicate DNA

E) Modify RNA

21) The A site of the ribosome is where:

A) Peptide bonds form

B) New tRNAs carrying amino acids enter

C) The growing peptide chain is held

D) tRNAs exit the ribosome

E) The mRNA attaches

22) The P site of the ribosome:

A) Holds the tRNA with the growing peptide chain

B) Is where tRNAs enter

C) Is where mRNA binds

D) Is where the stop codon binds

E) Removes introns

23) The E site of the ribosome is where:

A) Peptide bonds are formed

B) Deacylated tRNAs exit

C) Amino acids enter

D) mRNA is transcribed

E) Ribosomes assemble

Answer Key

1- B

2- B

3- A

4- B

5- A

6- B

7- B

8- B

9- D

10- B

11- B

12- B

13- B

14- B

15- B

16- B

17- A

18- B

--- Quiz 6 - Things to Know ---
Quiz 6 - Things to Know – Use Outline 2

# Gene Regulation

Chromatin

• Euchromatin

• Heterochromatin

Promoters / enhancers / transcription factors

• What is the role of each. How do they work together?

Alternative Splicing

• When does it occur and what are the results?

Non-coding RNAs

• miRNAs

• How do they regulate gene expression / protein synthesis

# Epigenetics

• Role in combining the environment with the genome

• What is an epigenetic mark and what are the main types

DNA methylation

• Where does it occur?

• Is it on one strand of DNA or both strands?

• How does it impact gene expression / protein synthesis?

Histone tail modifications

• Where do these occur?

• How do they impact gene expression / protein synthesis?

Does epigenetic modify the shape of the protein or the amount of the protein produced?

# DNA Mutations and Repair

• Duplications and deletions

• Point mutations

Point Mutations Subtypes

   - Silent

   - Nonsense

   - Missense (conservative and non-conservative)

• Frameshift mutations (insertions or deletions)

• Nucleotide excision repair and mismatch repair

• Basics of what they do

• When is the window for repair before mutations are permanent?

--- Quiz 6 - Practice Questions ---
**Quiz 6 - Practice Questions**

**Questions**

Describe how each of the following gene regulatory mechanisms work and if they are happening pre or post transcriptionally
1. Regulation via promoters/enhancers
2. Alternative splicing
3. non coding RNAs
4. DNA methylation 
5. Histone tail modification
6. Chromatin structure 
7. miRNA 
 
Define the types of mutations and what happens to the phenotype as a result of each
8. Silent mutations 
9. Nonsense mutations 
10. Missense mutations (conservative and non-conservative)
11. Frameshift mutations 
 
12. you locate a protein in a cell that is produced at the appropriate amount but is not functional, which of the following IS NOT a potential explanation? (Select all that are correct)
	A DNA methylation error at the gene promoter
	B Frameshift mutation
	C Nonsense mutation
	D silent mutation
13. Alterations to DNA methylation patterns is most likely to affect the…
	A shape of the resulting protein
	B total number of the resulting protein

**Answer Key**

Types of gene regulation and how each works (pre or post transcriptional):
1. transcription factors can bind and activate or inactivate transcription for a particular gene (pre-transcription)
2. Removing introns and rearranging the exons to form various mRNA transcripts from the same gene (post-transcription)
3. RNAs can modulate the process of translation in many ways. Ex. miRNAs block translation of targeted mRNAs (post-transcription)
4. methylation at CpGs in gene promoters can influence whether a gene is turned on or off (pre-transcription)
5. modification to histone tails can influence gene activity (pre-transcription)
6. euchromatin is more open and genes therein are more likely to be expressed than heterochromatin (pre-transcription)
7. Targets a mRNA transcript and doesn’t allow it to be translated

8. Point mutation that does not impact the amino acid sequence of a gene
9. Point mutation that generates a premature stop codon/triplet
10. Point mutation that changes an amino acid in a protein. Conservative missense mutations result in a change in amino acid that has similar properties to the original. Non-conservative missense mutations result in a change in amino acids that have dramatically different properties to the original. 
11. any mutation where at least one nucleotide is added or removed from the gene. the result is a severely disrupted gene where all amino acids after the mutation are likely to be impacted.

12. A, D
13. B

--- Quiz 6 - Fact Check ---
**Quiz** **6** **Fact** **Check**

- Gene regulation refers to:

A) The process of DNA replication

B) How cells control which genes are turned on or off

C) The random mutation of genes

D) The deletion of unnecessary genes

E) The creation of new genes

- All cells in an organism have the same DNA, but they differ because:

A) Each has different mutations

B) They express different sets of genes

C) They lose DNA during division

D) They have different chromosomes

E) They transcribe all genes equally

- Enhancers are:

A) Proteins that cut DNA

B) DNA elements that increase transcription when bound by activators

C) Sections of RNA that stop translation

D) Histone proteins

E) tRNA molecules

- Promoters are:

A) Regions where replication starts

B) DNA sequences where RNA polymerase binds to start transcription

C) Proteins that silence gene expression

D) DNA repair enzymes

E) Regulatory RNAs

- Transcription factors are:

A) Proteins that regulate transcription by binding to DNA

B) Segments of mRNA

C) Enzymes that replicate DNA

D) Histone proteins

E) RNA molecules that carry amino acids

- Epigenetics is best described as:

A) Heritable changes in gene expression without changing DNA sequence

B) DNA mutations passed from parent to child

C) Chemical reactions in metabolism

D) RNA splicing errors

E) Random gene deletions

- DNA methylation typically:

A) Activates gene expression

B) Silences gene expression

C) Repairs mutations

D) Unwinds histones

E) Creates new DNA strands

- Cytosine bases in CpG islands are often modified by:

A) Phosphorylation

B) Acetylation

C) Methylation

D) Oxidation

E) Hydrolysis

- Methylation marks are maintained during replication by:

A) DNA polymerase I

B) RNA polymerase II

C) DNMT1

D) DNMT3b

E) Ligase

B) Remove acetyl groups, tightening DNA packing

C) Repair DNA mismatches

D) Add methyl groups

E) Unwind DNA

- Environmental factors such as diet or stress can:

A) Directly change DNA sequence

B) Alter epigenetic marks like methylation

C) Delete chromosomes

D) Destroy histones

E) Stop transcription permanently

- Non-coding RNAs such as microRNAs:

A) Code for enzymes

B) Block translation or degrade mRNA

C) Replicate DNA

D) Activate all genes

E) Bind to ribosomes as structural RNA

- A point mutation changes:

A) A single base pair

B) An entire chromosome

C) Only histone proteins

D) A codon into a promoter

E) The number of ribosomes

- A frameshift mutation results from:

A) Insertion or deletion not in multiples of three

B) A single base substitution

C) A large chromosomal inversion

D) Methylation of cytosine

E) Replication of telomeres

- Mismatch repair corrects:

A) Base-pairing errors after replication

B) Double-strand breaks

C) Frameshift mutations

D) Large chromosomal deletions

E) Translocations

- Proofreading during replication is performed by:

A) Helicase

B) DNA polymerase

C) Ligase

D) DNMT1

E) RNA polymerase

- Preventing DNA damage can be supported by:

A) Wearing sunscreen and avoiding tobacco

B) Increasing UV exposure

C) Avoiding all protein

D) Mutating tumor suppressor genes

E) Blocking histone acetylation

Answer Key

1- B

2- B

3- B

4- B

5- A

6- A

7- B

8- C

9- C

10- B

11- B

12- A

13- A

14- A

15- B

16- A`,
  },
  "4": {
    name: "Introduction to bioenergetics",
    topics: `--- Unit 4 - Bioenergetics ---
**Unit 4: Bioenergetics**

**Spiritual Thought**

In Mosiah 2:21, King Benjamin teaches that God is preserving us from day to day, lending us breath, and supporting us from one moment to another. In biology, ATP is the sustaining energy currency that keeps cells alive and functioning. Just as our spirits depend on God for daily renewal, our cells depend on constant replenishment of ATP to carry out the work of life.

**Learning Objectives**

By the end of this lesson, you should be able to:

Describe basic chemistry: covalent bonds, hydrogen bonds, and simple redox chemistry

Understand free energy and its utility in biological systems

Explain how chemical reactions provide energy to the cell

**Overview**

All living organisms store and use energy, and nearly all of this energy originates from the sun. Plants convert solar energy into chemical energy via photosynthesis, and animals obtain it by consuming plants or other animals. Energy flows through ecosystems but must be captured, stored, and converted at the cellular level for work to be done.

**Covalent Bonds and Electronegativity**

**Covalent bond: **A chemical bond formed when two atoms share electrons. This can be equal (non-polar) or unequal (polar) sharing.

Atoms are most stable when their outer electron shell is full—usually 8 electrons (the octet rule), except for hydrogen, which is stable with 2. The pull an atom exerts on shared electrons is called electronegativity. High electronegativity atoms like oxygen and nitrogen pull electrons toward themselves, creating polarity.

Example: In a water molecule (H₂O), oxygen has a higher electronegativity than hydrogen, pulling electrons toward itself and creating a polar molecule. This polarity underlies many of water’s unique properties, like its ability to dissolve salts and sugars.

**Potential Energy and Redox Reactions**

**Potential energy: **Stored energy due to position or arrangement—in molecules, it comes from the arrangement of electrons in bonds.

**Redox reaction: **A chemical reaction involving the transfer of electrons; one substance is oxidized (loses electrons) and another is reduced (gains electrons).

At its core, a redox reaction is simply the transfer of electrons from one molecule (or atom) to another.

Oxidation is the loss of electrons. You can remember this with the mnemonic 'OIL' – Oxidation Is Loss (of electrons). When a substance loses electrons, it often becomes more positively charged and typically has lower potential energy.

Reduction is the gain of electrons. The mnemonic 'RIG' – Reduction Is Gain (of electrons) – helps you remember this. When a substance gains electrons, it often becomes more negatively charged and has higher potential energy.

These two processes always occur together—when one molecule is oxidized, another must be reduced. Electrons do not just disappear; they are transferred.

In biology, redox reactions are central to energy transfer. For example, in cellular respiration, glucose is oxidized as it loses electrons (and hydrogen atoms), and oxygen is reduced as it gains electrons to form water.

Analogy: Imagine passing a hot potato. The person handing it off (oxidized) loses it, while the person receiving it (reduced) gains it. The 'heat' of the potato represents the energy carried by the electrons.

Example: When glucose is broken down in cellular respiration, its carbon atoms are oxidized and oxygen is reduced. The released energy is captured to make ATP. This is like taking money out of a locked savings account (glucose) and putting it into a checking account (ATP) where it can be spent immediately.

**Laws of Thermodynamics in Biology**

**First Law: **Energy cannot be created or destroyed, only transformed from one form to another.

Example: In photosynthesis, light energy is transformed into chemical energy stored in glucose.

**Second Law: **Every energy transfer increases the entropy (disorder) of the universe, meaning some energy becomes unusable.

Example: In every cellular reaction, some energy is lost as heat, making it unavailable for work. This is why no process is 100% efficient.

**Free Energy and Gibbs Equation**

**Free energy (G): **The portion of a system’s energy available to do work.

**Gibbs free energy equation: **ΔG = ΔH – TΔS, where ΔH is change in total energy (enthalpy), T is temperature in Kelvin, and ΔS is change in entropy.

If ΔG is negative, the reaction is spontaneous (exergonic). If ΔG is positive, the reaction requires energy input (endergonic). Biological systems use exergonic reactions to drive endergonic ones through coupling.

**Exergonic and Endergonic Reactions**

**Exergonic reaction: **Releases energy; ΔG < 0. Example: cellular respiration.

**Endergonic reaction: **Requires energy input; ΔG > 0. Example: protein synthesis.

Cells link exergonic and endergonic reactions so that energy from one powers the other, like using a downhill water flow to run an uphill pump.

**ATP: The Energy Currency of the Cell**

**ATP (Adenosine triphosphate): **A nucleotide with three phosphate groups; breaking its terminal phosphate bond releases energy for cellular work.

ATP powers active transport, muscle contraction, nerve impulse propagation, and biosynthesis. It is regenerated continuously by catabolic pathways like glycolysis, the Krebs cycle, and oxidative phosphorylation.

Example: The hydrolysis of ATP to ADP + Pi releases about 7.3 kcal/mol under standard conditions—enough to drive many endergonic reactions in cells.

**Redox Reactions and ATP Formation**

In cellular respiration, electrons from glucose are transferred to oxygen through a series of redox reactions. This controlled release of energy is harnessed to make ATP, avoiding the damaging heat release of direct combustion.

Spiritual tie-in: Just as cells use ATP to carry out work, we use our time, talents, and spiritual energy to bless others. If we waste that energy, like heat lost in inefficient reactions, our potential impact decreases. Staying spiritually 'recharged' ensures we can do the work we are meant to do.

--- Unit 4 - Cellular Respiration ---
**Unit 4: Cellular Respiration – Glycolysis, Krebs Cycle, and Oxidative Phosphorylation**

**Spiritual Thought**

In John 15:5, the Savior teaches, 'Without me ye can do nothing.' Just as our cells cannot function without the steady supply of ATP generated through cellular respiration, we cannot thrive spiritually without being connected to Christ, our source of spiritual energy and renewal.

**Learning Objectives**

By the end of this lesson, you should be able to:

Explain the steps and purpose of glycolysis

Describe the Krebs cycle and its role in energy production

Describe the function of the electron transport chain (ETC) and chemiosmosis

Account for the inputs and outputs at each stage of cellular respiration

Understand how cellular structures facilitate ATP production

**Glycolysis – Breaking Down Glucose**** **

Glycolysis occurs in the cytoplasm and converts one molecule of glucose (6 carbons) into two molecules of pyruvate (3 carbons each). It is a ten-step, enzyme-catalyzed pathway that functions in both aerobic and anaerobic conditions. Glycolysis does not require oxygen.

**Energy investment phase: **Two ATP molecules are consumed to phosphorylate glucose and its intermediates, making them more reactive.

Analogy: Think of paying a small fee upfront to enter a race—you need to invest energy before you can win it back with interest.

**Cleavage phase: **The six-carbon sugar is split into two three-carbon molecules of glyceraldehyde-3-phosphate (G3P).

**Energy liberation phase: **Each G3P is oxidized, producing NADH and generating ATP via substrate-level phosphorylation. A total of 4 ATP are made here, but with the 2 ATP invested earlier, the net gain is 2 ATP per glucose.

Outputs from glycolysis: 2 pyruvate, 2 net ATP, 2 NADH. The NADH will carry electrons to the ETC under aerobic conditions.

**Intermediate Step – Pyruvate Oxidation **

Before entering the Krebs cycle, pyruvate is transported into the mitochondrial matrix. Each pyruvate is oxidized to form an acetyl group, which combines with coenzyme A to form acetyl-CoA. This step produces one NADH and one CO₂ per pyruvate. Since glycolysis makes two pyruvates, this step yields 2 NADH and 2 CO₂ per glucose.

**Krebs Cycle – Energy Extraction in the Mitochondrial Matrix**

The Krebs cycle (citric acid cycle) completes the oxidation of glucose by processing the acetyl group from acetyl-CoA. This cycle turns twice per glucose molecule. Each turn produces: 3 NADH, 1 FADH₂, 1 ATP (or GTP), and 2 CO₂.

Key events in one cycle:

Acetyl group combines with oxaloacetate to form citrate.

Citrate is rearranged to isocitrate.

Isocitrate is oxidized to α-ketoglutarate, producing CO₂ and NADH.

α-Ketoglutarate is oxidized to succinyl-CoA, producing CO₂ and NADH.

Succinyl-CoA is converted to succinate, generating ATP or GTP via substrate-level phosphorylation.

Succinate is oxidized to fumarate, producing FADH₂.

Fumarate is hydrated to malate.

Malate is oxidized to oxaloacetate, producing NADH.

Outputs per glucose (two turns): 6 NADH, 2 FADH₂, 2 ATP (or GTP), 4 CO₂.

**Electron Transport Chain – Powering the Proton Pumps **

The electron transport chain (ETC) is a series of protein complexes (I–IV) and two mobile carriers—ubiquinone (CoQ) and cytochrome c—embedded in the inner mitochondrial membrane.

NADH donates electrons to Complex I, which uses the released energy to pump protons from the matrix to the intermembrane space and passes electrons to ubiquinone.

FADH₂ donates electrons to Complex II, which does not pump protons but transfers electrons to ubiquinone.

Ubiquinone carries electrons to Complex III, which pumps protons and transfers electrons to cytochrome c.

Cytochrome c delivers electrons to Complex IV, where oxygen serves as the final electron acceptor. Oxygen is reduced to water by combining with electrons and protons.

Each complex is more electronegative than the previous, ensuring electrons flow 'downhill' energetically. The released energy is captured to pump protons, building the proton motive force.

**Chemiosmosis**** – Making ATP with the Proton Gradient **

ATP synthase is a rotary enzyme with two main parts: F₀ (a rotor in the membrane) and F₁ (a catalytic knob in the matrix).

Protons flow down their electrochemical gradient through the F₀ channel, spinning the rotor like a waterwheel.

This rotation causes the three catalytic sites in the F₁ subunit to cycle: binding ADP and phosphate, forcing them together to make ATP, and releasing the ATP.

This is mechanical energy converted into chemical energy. Under ideal conditions, ATP synthase can be over 90% efficient.

Example: In brown fat cells, the proton gradient is intentionally 'uncoupled' from ATP synthesis to produce heat—a process important for newborns and hibernating animals.

Example: Certain poisons, like cyanide, block electron flow in the ETC by binding to Complex IV, preventing oxygen from accepting electrons and halting ATP production.

Example: Athletes in endurance sports rely heavily on efficient oxidative phosphorylation; training can increase mitochondrial density, enhancing ATP production capacity.

**Energy Yield from One Glucose Molecule **

Glycolysis: 2 ATP (net) + 2 NADH

Pyruvate oxidation: 2 NADH

Krebs cycle: 2 ATP + 6 NADH + 2 FADH₂

ETC & chemiosmosis: ~28 ATP from NADH and FADH₂

Total: ~32 ATP in ideal conditions, though actual yield is often lower due to membrane leaks and other cellular needs.

Spiritual tie-in: Just as every step of cellular respiration is coordinated to produce energy for life, God coordinates the events of our lives for our spiritual growth (Romans 8:28). When each 'step' in our lives is aligned with His will, the result is a far greater spiritual output—strength, peace, and the ability to bless others.

--- Unit 4 - Alternative Energy Production and Photosynthesis ---
**Unit 4: Alternative Energy Production ****&**** Photosynthesis**

**Spiritual Thought**

In John 8:12, Jesus said, 'I am the light of the world.' Just as physical light from the sun fuels life through photosynthesis, spiritual light from Christ fuels our growth and sustains us, even when resources seem scarce.

**Learning Objectives**

By the end of this lesson, you should be able to:

Explain anaerobic respiration and fermentation

Compare lactic acid and alcoholic fermentation with examples

Describe beta oxidation and when the body uses fats for energy

Explain the process and stages of photosynthesis

Compare light reactions and the Calvin cycle

Relate photosynthesis to cellular respiration

**Anaerobic Respiration vs Fermentation**

**Anaerobic respiration: **Uses an ETC but with a different final electron acceptor than oxygen (e.g., nitrate, sulfate).

**Fermentation: **Does not use an ETC; instead regenerates NAD⁺ from NADH by transferring electrons to pyruvate or derivatives, allowing glycolysis to continue.

Without oxygen, oxidative phosphorylation cannot occur because the ETC stalls—oxygen is the final electron acceptor in aerobic respiration. Cells switch to substrate-level phosphorylation for ATP, which is much less efficient.

**Lactic Acid Fermentation**** **

In lactic acid fermentation, pyruvate is reduced by NADH to lactic acid, regenerating NAD⁺. This occurs in human muscle cells during intense exercise when oxygen is scarce, causing the 'burn' from lactic acid buildup. Once oxygen is restored, lactic acid is transported to the liver and converted back to pyruvate.

**Alcoholic Fermentation**

In alcoholic fermentation, pyruvate is first decarboxylated to acetaldehyde, then reduced by NADH to ethanol. This occurs in yeast and some bacteria. The CO₂ produced makes bread rise, while ethanol is used in beverages. Ethanol above ~12% kills the yeast, naturally limiting alcohol content in fermentation without distillation.

**Efficiency of Fermentation vs Aerobic Respiration**

Fermentation yields only 2 ATP per glucose (from glycolysis), compared to ~32 ATP from aerobic respiration. It’s like burning wood in an open fire versus a high-efficiency stove—same fuel, much less energy captured.

**Beta Oxidation – Using Fats for Energy**** ****– Add Diagram**

When glucose is scarce (fasting, low-carb diets, endurance exercise), the body oxidizes fatty acids. Beta oxidation occurs in the mitochondrial matrix, breaking fatty acids into two-carbon acetyl-CoA units, which enter the Krebs cycle. This process generates large amounts of NADH and FADH₂, making fats a dense energy source.

Example: A marathon runner in the later miles relies heavily on beta oxidation, sparing limited glycogen reserves.

Spiritual tie-in: Just as our bodies switch to fat reserves in times of scarcity, our spirits draw on deep reserves of faith during trials. Preparation through spiritual habits ensures those reserves are ready when needed.

**Overview of Photosynthesis**** **

Photosynthesis converts light energy into chemical energy stored in glucose. The general equation is: 6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ + 6 O₂. This is the reverse of aerobic respiration.

**Important note**: The ATP and NADPH produced during the light reactions are not used for general cellular activities. They remain inside the chloroplast and are used exclusively for powering the Calvin cycle to make glucose and other carbohydrates. This glucose can then leave the chloroplast and enter cellular respiration in the mitochondria, where its chemical energy is used to make ATP that powers the cell’s processes. Photosynthesis itself is essentially a sugar-manufacturing process—it does not directly provide usable energy for most of the cell’s work.

**Chloroplast Structure**

Chloroplasts have three membranes: an outer membrane, an inner membrane, and thylakoid membranes stacked into grana. The fluid-filled stroma surrounds the grana and is the site of the Calvin cycle.

**Light Reactions – Capturing Energy**** **

Light reactions occur in the thylakoid membranes. Photons excite electrons in Photosystem II (P680), which are replaced by electrons from water, producing oxygen. Electrons travel through an ETC to Photosystem I (P700), pumping protons into the thylakoid lumen to create a proton motive force for ATP synthase. Photosystem I boosts the electrons to reduce NADP⁺ to NADPH. ATP and NADPH fuel the Calvin cycle.

Analogy: The light reactions are like charging a battery (ATP/NADPH) using solar panels (photosystems).

**Calvin Cycle – Building Sugars**

Occurs in the stroma and uses ATP and NADPH to fix CO₂ into organic molecules. Three main phases:

Carbon fixation: CO₂ is attached to ribulose bisphosphate (RuBP) by rubisco, forming 3-phosphoglycerate (3-PGA).

Reduction: 3-PGA is phosphorylated (ATP) and reduced (NADPH) to glyceraldehyde-3-phosphate (G3P).

Regeneration: Most G3P regenerates RuBP to keep the cycle running; some exits to form glucose/sucrose/starch.

Example: Algae biofuels harness photosynthesis to produce renewable energy. Greenhouses optimize light exposure for crop yield. Coral reefs rely on symbiotic algae for photosynthetic energy.

Example: Rainforests act as massive global photosynthesis engines, fixing immense amounts of carbon dioxide into glucose every day. This stored energy supports not only the plants themselves but also entire ecosystems that rely on the glucose stored in plant biomass.

Spiritual tie-in: The glucose made in photosynthesis is like the spiritual knowledge and testimony we gain from Christ’s light. It is not an end in itself but a stored source of strength we can draw on later during times of trial—much like the cell later uses the glucose in respiration to produce usable ATP for life’s work.`,
    sampleProblems: `--- Quiz 7 - Things to Know ---
Quiz 7 - Things to Know – Use Outlines 1, 2, and 3

# Bioenergetics

• Transfer of energy (sun to plants to animals)

• Bonds

• Octet rule

• Covalent

• Ionic

• Electronegativity

• Potential energy

• Laws of thermodynamics

• Conservation of energy

• Increases in entropy

• Free energy

• ∆G / spontaneous vs non-spontaneous (exergonic / endergonic)

• ATP and ADP

• Redox reactions

• Oxidation and reduction

• What contains the most potential energy

• Overall equation of glucose oxidation

• Catabolism vs Anabolism

# Glycolysis

• Where does it occur

• Starting material

• Investment phase

• Cleavage phase

• Liberation phase

• Final product(s)

• How much ATP yielded

• How many electron carriers?

# Intermediate Step

• Where does it occur

• Starting material

• Products

# Krebs Cycle

• Where does it occur

• Starting material

• Products

• Substrate level phosphorylation vs oxidative phosphorylation

# Oxidative Phosphorylation

# Electron Transport Chain

• Mitochondrial structure (inner membrane, outer membrane, intermembrane space, matrix)

• Key components of the chain

• Complex I, II, III, IV, cytochrome c, ubiquinone

• Why does the electron move down the chain?

• Where does oxidation occur?

• NADH – NAD+

• FADH2 – FAD+

• Proton motive force

# Chemiosmosis

• Utilization of H+ gradient

• ATP synthase activity and H+ gradient

• ATP synthase y subunit (micromachine)

--- Quiz 7 - Practice Questions ---
**Quiz 7 - Practice Questions**

**Questions**

1 In cellular respiration, carbon dioxide is formed from the oxidation of the following:
A cytochrome oxidase
B water
C oxygen
D NADH
E glucose

2 If glycolysis was blocked, which of the following would decrease in concentration?
A pyruvate
B NAD+
C oxygen 
D carbon dioxide

3. The NET result of a single round of glycolysis (total yield from a single glucose molecule) is the formation of…
A 1 NADH and 1 ATP.
B 2 NADH and 2 ATP. 
C 2 NADH and 4 ATP.
D 4 NADH and 2 ATP.
E 4 NADH and 4 ATP.

4. Why are two ATP required during the first phase of glycolysis?
A In order to produce 4 ATP in the next phase of glycolysis
B In order to reduce NAD+ in the next phase of glycolysis
C In order to isomerize glucose into fructose
D In order to create a high energy molecule that will spontaneously split into two 3-carbon- molecules
E In order to create a high energy molecule that will spontaneously phosphorylate ADP

5. Before entering the Krebs cycle, pyruvate is converted to
A glucose.
B H2O and CO2.
C acetic acid.
D acetyl-CoA.
E oxaloacetate.

6. electrons are brought to the electron transport system by the oxidation of
A NADH.
B FADH2.
C ATP.
D oxygen.
E NADH and FADH2.

7. Why is formation of ATP by ATP synthase in the mitochondria known as oxidative phosphorylation?
A A phosphate is transferred from an oxygen to ADP to form ATP
B Oxygen is used to provide the mechanical energy that drives ATP synthase in the mitochondria
C Oxygen is the final electron acceptor in the mitochondrial electron transport chain, which creates the proton gradient necessary to power ATP synthase
D ADP combines with oxygen to form ATP

8. Where does glycolysis, the intermediate step, the kreb’s cycle, and the electron transport chain occur?

9. ATP synthase is located on what membrane?

10. When oxygen is not available, oxidative phosphorylation can not occur. Why?

11. Which produces the most ATP, substrate level phosphorylation or oxidative phosphorylation?

12. Which molecule is more reduced, NADH or NAD+?

13. If mitochondria are removed from a cell, is there any way to still generate energy?

14. H+ ion concentration is highest in which cellular compartment?

**Answer Key**

1. E
2. A
3. B
4. D
5. D
6. E
7. C
8. Cytosol, matrix, matrix, Intermembrane space/matrix
9. Inner membrane of the mitochondria
10. Oxygen is the final electron acceptor 
11. Oxidative phosphorylation (because of the efficiency of the electron transport chain and ATP synthase)
12. NADH
13. Yes, via glycolysis (though it is not sustainable)
14. Intermembrane space

--- Quiz 7 - Fact Check ---
**Quiz** **7** **Fact** **Check**

- Nearly all usable energy on Earth originates from:

A) The moon

B) The sun

C) The ocean

D) The Earth’s core

E) Atmospheric gases

- Oxidation is defined as:

A) The gain of electrons

B) The loss of electrons

C) The gain of hydrogen

D) The gain of protons

E) The splitting of water molecules

- Reduction is defined as:

A) The gain of electrons

B) The loss of electrons

C) The breakdown of glucose

D) The loss of protons

E) The increase of oxygen concentration

- During cellular respiration, glucose is:

A) Reduced

B) Oxidized

C) Both oxidized and reduced

D) Unchanged

E) Hydrolyzed without oxidation

- Oxygen acts as the final electron acceptor in:

A) Glycolysis

B) The Krebs cycle

C) The electron transport chain

D) Fermentation

E) DNA replication

- The Second Law of Thermodynamics states that:

A) Energy is always conserved

B) Energy transfer increases the entropy (disorder) of the universe

C) All systems become more ordered over time

D) Energy can be created by living cells

E) Biological reactions are 100% efficient

- Free energy (G) represents:

A) Energy lost as heat

B) Energy available to do work

C) The total energy of a system

D) The kinetic energy in a molecule

E) The number of electrons transferred

- A reaction with a negative ΔG is:

A) Endergonic

B) Exergonic

C) Nonspontaneous

D) Requires energy input

E) Reversible only at equilibrium

- An exergonic reaction:

A) Requires energy input

B) Releases energy and occurs spontaneously

C) Absorbs heat from surroundings

D) Occurs only in plants

E) Cannot be coupled with other reactions

- An endergonic reaction:

A) Releases energy

B) Requires an input of energy

C) Is always spontaneous

D) Occurs without enzymes

E) Has ΔG < 0

- ATP stands for:

A) Adenosine triphosphate

B) Adenine tri-phosphate

C) Adenosine transfer protein

D) Adenosine tetraphosphate

E) Adenine transport phosphate

- The hydrolysis of ATP to ADP + Pi:

A) Absorbs energy

B) Releases energy for cellular work

C) Has no energy change

D) Occurs only in plants

E) Is an endergonic process

- The energy released from glucose oxidation is used to:

A) Generate ATP

B) Form NADH

C) Produce heat only

D) Make water directly

E) Store oxygen in cells

Answer Key

1- B

2- B

3- A

4- B

5- C

6- B

7- B

8- B

9- B

10- B

11- A

12- B

13- A

--- Quiz 7 - Fact Check 2 ---
**Quiz** **7** **Fact** **Check**** 2**

- The main purpose of cellular respiration is to:

A) Produce DNA

B) Generate ATP for cellular work

C) Break down oxygen

D) Store glucose in glycogen

E) Form proteins

- Glycolysis takes place in the:

A) Mitochondrial matrix

B) Inner mitochondrial membrane

C) Cytoplasm

D) Nucleus

E) Intermembrane space

- Glycolysis converts one molecule of glucose into:

A) Two molecules of pyruvate

B) Two molecules of CO₂

C) Four molecules of ATP

D) One molecule of acetyl-CoA

E) Two molecules of FADH₂

- Glycolysis does not require:

A) Enzymes

B) Glucose

C) ATP

D) Oxygen

E) Cytoplasm

- The net ATP gain from glycolysis per glucose molecule is:

A) 1 ATP

B) 2 ATP

C) 3 ATP

D) 4 ATP

E) 6 ATP

- The molecule that carries high-energy electrons from glycolysis to the ETC is:

A) FAD

B) NADH

C) Acetyl-CoA

D) Pyruvate

E) ATP

- Before entering the Krebs cycle, pyruvate is converted to:

A) Lactate

B) Acetyl-CoA

C) G3P

D) Glucose

E) Oxaloacetate

- The intermediate step (pyruvate oxidation) occurs in the:

A) Cytoplasm

B) Mitochondrial matrix

C) Ribosome

D) Nucleus

E) Intermembrane space

- During pyruvate oxidation, one pyruvate produces:

A) 1 ATP

B) 1 NADH and 1 CO₂

C) 2 FADH₂

D) 2 CO₂

E) Only acetyl-CoA

- The Krebs cycle occurs in the:

A) Cytoplasm

B) Nucleus

C) Mitochondrial matrix

D) Intermembrane space

E) Inner membrane

- Each turn of the Krebs cycle produces:

A) 1 NADH, 1 ATP, 1 CO₂

B) 3 NADH, 1 FADH₂, 1 ATP, 2 CO₂

C) 2 NADH and 2 CO₂

D) 1 FADH₂ and 2 ATP

E) 4 NADH and 1 CO₂

- Each glucose molecule results in how many turns of the Krebs cycle?

A) One

B) Two

C) Three

D) Four

E) Six

- The main function of the Krebs cycle is to:

A) Generate electron carriers (NADH and FADH₂)

B) Store glucose

C) Break down water

D) Form nucleic acids

E) Create oxygen

- The electron transport chain (ETC) is located in the:

A) Outer mitochondrial membrane

B) Inner mitochondrial membrane

C) Cytoplasm

D) Matrix

E) Ribosome

- The ETC uses electrons from NADH and FADH₂ to:

A) Pump protons across the membrane

B) Produce glucose

C) Break down ATP

D) Generate carbon dioxide

E) Store oxygen

- The final electron acceptor in the ETC is:

A) Carbon dioxide

B) Water

C) NADH

D) Oxygen

E) ATP

- The proton gradient produced by the ETC drives:

A) NADH synthesis

B) Chemiosmosis and ATP production

C) Glucose formation

D) CO₂ generation

E) Glycolysis

- The enzyme that makes ATP during chemiosmosis is:

A) ATP synthase

B) NADH dehydrogenase

C) Pyruvate kinase

D) Phosphofructokinase

E) Coenzyme A

- In chemiosmosis, protons move:

A) From the matrix to the intermembrane space

B) From the intermembrane space back into the matrix

C) Out of the mitochondrion

D) Through the outer membrane

E) From the nucleus to the cytoplasm

- The process that directly produces the most ATP in cells is:

A) Glycolysis

B) Krebs cycle

C) Oxidative phosphorylation

D) Fermentation

E) Pyruvate oxidation

- The total theoretical yield of ATP from one glucose molecule is about:

A) 8 ATP

B) 18 ATP

C) 24 ATP

D) 32 ATP

E) 50 ATP

Answer Key

1- B

2- C

3- A

4- D

5- B

6- B

7- B

8- B

9- B

10- C

11- B

12- B

13- A

14- B

15- A

16- D

17- B

18- A

19- B

20- C

21- D

--- Unit 4 Not on a Quiz -  Fact Check 1 ---
# Unit 4 Not on a Quiz Fact Check 1 – Alternative Forms of Energy Production

- When oxygen is unavailable, cells can switch to:

A) Photosynthesis

B) Anaerobic respiration or fermentation

C) Glycolysis and oxidative phosphorylation

D) DNA replication

E) Beta decay

- Anaerobic respiration differs from aerobic respiration because it:

A) Does not use the Krebs cycle

B) Uses a different final electron acceptor instead of oxygen

C) Does not produce any ATP

D) Uses only glycolysis

E) Occurs only in plants

- In fermentation, NAD⁺ is regenerated by:

A) The electron transport chain

B) Transferring electrons from NADH to pyruvate or its derivatives

C) Pumping protons into the intermembrane space

D) Hydrolyzing ATP

E) Removing oxygen from NADH

- Without oxygen, oxidative phosphorylation cannot occur because:

A) Enzymes denature

B) Glycolysis stops

C) Oxygen is the final electron acceptor in the ETC

D) Pyruvate is not produced

E) The cytoplasm becomes acidic

- During lactic acid fermentation, pyruvate is converted into:

A) Acetyl-CoA

B) Lactic acid

C) Ethanol

D) CO₂

E) Glucose

- Lactic acid buildup in muscles can lead to:

A) Fatigue and soreness

B) Muscle hypertrophy

C) More ATP production

D) Rapid recovery

E) Dehydration

- During alcoholic fermentation, pyruvate is reduced by NADH to form:

A) Lactate

B) CO₂

C) Ethanol

D) Acetyl-CoA

E) Water

- Alcoholic fermentation occurs naturally in:

A) Yeast and some bacteria

B) Human muscle tissue

C) Plants only

D) Red blood cells

E) The liver

- The bubbles that make bread rise are caused by:

A) Oxygen release

B) CO₂ produced during alcoholic fermentation

C) Water vapor from glycolysis

D) Acetyl-CoA breakdown

E) ATP synthesis in the dough

- Fermentation yields how many ATP per glucose molecule?

A) 0

B) 1

C) 2

D) 4

E) 32

- Aerobic respiration yields approximately how many ATP per glucose?

A) 2

B) 10

C) 18

D) 32

E) 60

- Beta oxidation occurs when:

A) Oxygen is unavailable

B) Glucose levels are low and the body uses fats for energy

C) ATP levels are high

D) The cell stores glycogen

E) Photosynthesis occurs

- The products of beta oxidation feed directly into the:

A) Glycolysis pathway

B) Krebs cycle as acetyl-CoA

C) Electron transport chain directly

D) Fermentation pathway

E) Light reactions of photosynthesis

Answer Key

1- B

2- B

3- B

4- C

5- B

6- A

7- C

8- A

9- B

10- C

11- D

12- B

13- B

--- Unit 4 Not on a Quiz -  Fact Check 2 ---
# Unit 4 Not on a Quiz Fact Check 1 – Alternative Forms of Energy Production

- The main purpose of photosynthesis is to:

A) Convert solar energy into chemical energy stored in glucose

B) Release stored energy as heat

C) Break down glucose for ATP

D) Absorb oxygen for respiration

E) Produce ATP for the entire cell

- The general equation for photosynthesis is:

A) 6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ + 6 O₂

B) C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energy

C) H₂O + CO₂ → H₂ + C₂O₄

D) 6 O₂ + glucose → 6 CO₂ + ATP

E) ATP + NADPH → glucose + ADP

- Photosynthesis takes place in which organelle?

A) Nucleus

B) Mitochondrion

C) Chloroplast

D) Golgi apparatus

E) Ribosome

- The light reactions of photosynthesis occur in the:

A) Stroma

B) Thylakoid membranes

C) Cytoplasm

D) Nucleus

E) Cell membrane

- The main products of the light reactions are:

A) ATP and NADPH

B) Glucose and oxygen

C) CO₂ and water

D) FADH₂ and NADH

E) G3P and RuBP

- During the light reactions, water is split to produce:

A) CO₂

B) Oxygen, protons, and electrons

C) Glucose

D) NADPH

E) ATP

- Photosystem II absorbs light and passes excited electrons to:

A) Rubisco

B) Photosystem I

C) ATP synthase

D) NADH

E) Oxygen

- The proton gradient across the thylakoid membrane drives:

A) CO₂ fixation

B) ATP synthesis by ATP synthase

C) Oxygen release

D) NADH oxidation

E) Glycolysis

- The Calvin cycle takes place in the:

A) Cytoplasm

B) Thylakoid membrane

C) Stroma

D) Inner membrane

E) Mitochondrial matrix

- The Calvin cycle requires which molecules from the light reactions?

A) ATP and NADPH

B) Glucose and oxygen

C) CO₂ and H₂O

D) FADH₂ and NADH

E) G3P and RuBP

- The oxygen produced in photosynthesis comes from:

A) CO₂

B) Water

C) Glucose

D) NADPH

E) ATP

Answer Key

1- A

2- A

3- C

4- B

5- A

6- B

7- B

8- B

9- C

10- A

11- B

--- Unit 4 - Materials Not Covered By a Quiz ---
Unit 4 - Materials Not Covered By a Quiz

# Fermentation

• Alcoholic vs lactic acid

• Main purpose of fermentation

• Role of NAD+ in glycolysis

• What is produced from lactic acid fermentation?

• Where does it happen

• What is produced from alcoholic fermentation?

• Where does it happen

• Energy yield?

• Compare to complete glucose oxidation

# Beta Oxidation

• Overall reaction

• What is produced?

• Where can the products be “plugged in”

• Relative to other molecules, how much energy can be yielded from fatty acids?

# Photosynthesis

• Overall equation and its relationship to the glucose oxidation / combustion equation

• Autotrophs

• How light energy is used to generate chemical energy

• Carbon fixing

• Structures in the chloroplast

• Light and dark reactions

• The role of different molecules in photosynthesis

   - ATP

   - NADPH

   - O2

   - CO2

   - Chlorophyll

   - Carotenoids

   - P680

   - P700

• Wavelengths and light spectra

• Events at photosystem I and II

• How is ATP made?

• How is NADPH made?

• Calvin cycle

   - Inputs

   - Outputs

Overall carbon cycle

# Additional Questions to Consider

• What is the purpose of fermentation?

• What are the problems of too much NADH?

• What are the reactants of fermentation? The products of alcohol fermentation? Lactic acid fermentation?

• What is Photosystem II

• What is the purpose of chlorophyll? Carotenoids?

• Understand the relationship between electromagnetic radiation, pigments

• What is P680? P680* P680+? Primary electron acceptor?

• Where does the electron come from in Photosystem II? Photosystem I?

• What is the purpose of the electron transport chain in Photosystem II?

• What happens to the electron in Photosystem II

• What is Photosystem I?

• What is the purpose of Photosystem I?

• Where do the light reactions take place? Dark reactions?

• What are the major products of the light reaction? What are these products used for?

• What are the dark reactions?

--- Unit 4 Practice Questions Not Covered By a Quiz ---
**Unit 4 Practice Questions Not Covered By a Quiz**

**Questions**

1. Why is pyruvate converted to lactate in anaerobic conditions?
A) To regenerate NAD+ from NADH and keep glycolysis functioning.
B) To regenerate NADH from NAD+ and keep glycolysis functioning.
C) To produce more oxygen to allow the electron transport chain to resume.
D) The conversion of pyruvate to lactate also produces ATP which keeps the cell alive 
E) The conversion of pyruvate to lactate requires ATP and is thus exergonic

2. Under anaerobic conditions, the end-product of glycolysis in human cells is ___________.
A) CO2 and H2O.
B) amino acids.
C) lactic acid.
D) hydrochloric acid.
E) acetic acid.

3. The light reactions synthesize ATP, NADPH, and O2 using the following process(es):
A) Reduction only
B) Oxidation and reduction
C) Oxidation, reduction, and electrolysis
D) Oxidation only
E) Neither oxidation, reduction, nor electrolysis

4. Which best represents an example of carbon fixation?
A) The regeneration of RuBP.
B) The incorporation of CO2 into organic carbohydrate molecules.
C) The oxidation of NADPH to form NADP.
D) The reduction of carbohydrates by NADPH.

5. The energy for producing organic molecules in plants is directly driven by:
A) The use of water to transfer the energy of hydrolysis to enzymes.
B) The use of light to provide electrons for oxidation and reduction reactions.
C) The use of chlorophyll to transfer electrons from photons to other pigments.
D) The use of NADPH to carry photons to the Calvin cycle.

6. The Calvin Cycle takes place in the ________ of chloroplasts.
A) matrix
B) stroma 
C) thylakoid membrane
D) inner membrane
E) outer membrane

7. The Calvin Cycle uses which products of the light reactions of photosynthesis.
A) CO2 and H2O
B) RuBP and O2
C) ADP and NADH
D) ATP and NADPH
E) 3-phosphoglycerate and glucose

8. What is the difference in an aerobic process and anaerobic process?

9. Describe in your own words what photosynthesis is and why it is important.

10. Name the two stages of photosynthesis and list the starting molecule(s) or reactants and ending molecule(s) or products of each.

11. When and why does our body use lactic acid fermentation?

12. What are the differences between the light-dependent reactions (light reactions) and the light-independent reactions (dark reactions)?

**Answer Key**

1. A
2. C
3. B
4. B
5. B
6. B
7. D

8. Aerobic means oxygen is present (more ATP produced during cellular respiration)
   Anaerobic means oxygen is not present (less ATP produced during cellular respiration)

9. Photosynthesis is the process of capturing the sun’s energy and converting it into chemical energy (glucose). This is important since it is how energy needed for living organisms to survive is captured and able to be converted into a more useable form.

10. Stages Starting Molecule(s) --- Product(s)
    Light Reactions
    Light and water --- ATP/ NADPH/ Oxygen gas
    Calvin Cycle/Light-independent/”Synthesis” reactions
    Carbon dioxide --- 1 G3P (for every 3 CO2) or 1 glucose (for every 6 CO2)

11. Lactic acid fermentation occurs during strenuous exercise when not enough oxygen is available for your muscle cells to use to create ATP

12. Light reactions create ATP and NADPH using sunlight. Dark reactions use the products of the light reactions to fuel the formation of carbohydrates from CO2. While the latter is independent of the sun, it does require the products of the light reaction to make possible the formation of glucose or other carbohydrates.`,
  },
  "5": {
    name: "Reproduction and genetics",
    topics: `--- Unit 5 - Cell Cycle, Mitosis, and Meiosis ---
**Unit 5: The Cell Cycle, Mitosis, and Meiosis**

**Spiritual Thought**

Ecclesiastes 3:1 says, 'To every thing there is a season, and a time to every purpose under the heaven.' Cells follow a God-designed order, progressing only when ready. Likewise, our lives have seasons of preparation and action, and wisdom comes in knowing when to move forward.

**Learning Objectives**

By the end of this lesson, you should be able to:

Describe the stages of the cell cycle and their functions

Explain the phases and significance of mitosis

Explain the phases and significance of meiosis

Relate the importance of checkpoints to cell health and cancer prevention

Compare and contrast mitosis and meiosis

Explain how errors in meiosis can lead to genetic disorders

**The Cell Cycle**** **

The cell cycle is the repeating sequence of growth and division in cells. It includes interphase (G₁, S, G₂) and the mitotic phase.

**G₁ phase: **Cell grows, carries out normal metabolism, and produces proteins needed for DNA replication.

Example: A skin cell in G₁ may be actively producing keratin proteins for its function before it begins preparing for division.

**S phase: **DNA replication occurs, producing identical sister chromatids for each chromosome.

Spiritual tie-in: Just as DNA is carefully copied before division, we must be grounded in truth before sharing our beliefs with others.

**G₂ phase: **Final preparations for division are made; organelles duplicate, and DNA is checked for errors.

Example: Like an airplane undergoing preflight checks, the cell ensures all systems are ready before launching into mitosis.

**Cell Cycle Checkpoints**

Checkpoints are control mechanisms that ensure proper progression through the cell cycle. They prevent damaged or incomplete DNA from being passed on.

Example: In cancer, checkpoint failures allow uncontrolled division, much like ignoring red lights in traffic can cause chaos.

**Mitosis – Producing Identical Cells**** **

Mitosis is nuclear division that results in two identical daughter cells, important for growth, repair, and asexual reproduction.

**Prophase: **Chromatin condenses into chromosomes; spindle fibers form; nuclear envelope breaks down.

**Metaphase: **Chromosomes align at the metaphase plate, ensuring equal distribution.

**Anaphase: **Sister chromatids separate and move to opposite poles.

**Telophase: **Nuclear envelopes reform; chromosomes decondense.

**Cytokinesis: **Division of cytoplasm, resulting in two separate cells.

Example: Healing of a broken bone involves mitosis producing new bone cells to replace damaged ones.

**Meiosis – Producing Gametes**** **

Meiosis creates gametes (sperm and egg cells) with half the chromosome number of the parent cell. This reduction is essential for maintaining chromosome number across generations.

Meiosis I separates homologous chromosomes, while Meiosis II separates sister chromatids. Crossing over in prophase I increases genetic diversity.

Example: Crossing over is why children inherit a unique combination of traits, even with the same parents.

**Aneuploidy – Errors in Meiosis**

Aneuploidy occurs when chromosomes fail to separate properly, leading to abnormal chromosome numbers.

Examples: Down syndrome (trisomy 21), Turner syndrome (XO), and Klinefelter syndrome (XXY).

Spiritual tie-in: Even when processes don't go as planned, life can still have purpose and beauty, reminding us of God’s love for all His children.

**Chromosomes vs Sister Chromatids**

A **chromosome** is a single, continuous molecule of DNA wrapped around proteins called histones. It carries the genetic information in the form of genes.

Before DNA replication (in S phase), each chromosome is made up of one **chromatid**—a single DNA molecule.

After DNA replication, each chromosome is composed of two identical **sister chromatids** joined together at a region called the centromere. The two chromatids are identical copies of the same DNA sequence.

During mitosis (and meiosis II), the sister chromatids are separated and pulled to opposite poles of the cell. Once they separate, each chromatid is considered its own chromosome.

Analogy: Imagine a chromosome before replication as a single book. After replication, you now have two identical copies of the book (sister chromatids) bound together with a rubber band (centromere). The “separation” step is like taking off the rubber band so each copy can go to a different shelf.

Example: In humans, before S phase, a somatic cell has 46 chromosomes (each one chromatid). After S phase, the cell still has 46 chromosomes, but each is made up of two sister chromatids, so there are 92 chromatids total.

**Comparison of Mitosis and Meiosis**** **

| Feature | Mitosis | Meiosis |
| --- | --- | --- |
| Number of divisions | 1 | 2 |
| Number of daughter cells | 2 | 4 |
| Chromosome number in daughter cells | Diploid (same as parent) | Haploid (half of parent) |
| Genetic variation | None – identical to parent | Yes – crossing over & independent assortment |
| Function | Growth, repair, asexual reproduction | Production of gametes for sexual reproduction |

--- Unit 5 - Mendelian Genetics and Complex Inheritance ---
**Unit 5: Mendelian Genetics ****&**** Complex Inheritance**

**Spiritual Thought**

Paul teaches in 1 Corinthians 12 that the body of Christ has many members, each with unique gifts, but all are essential. Genetics reflects this principle—variation ensures that each individual is unique, contributing to the resilience and beauty of the whole population.

**Learning Objectives**

By the end of this lesson, you should be able to:

Explain Mendel’s experiments and his laws of inheritance

Differentiate between genotype and phenotype

Describe monohybrid and dihybrid crosses

Explain exceptions to Mendel’s principles, including incomplete dominance, codominance, and polygenic traits

Understand the role of the environment in gene expression

Identify patterns of sex-linked inheritance

**Gregor Mendel and the Foundations of Genetics**

Gregor Mendel, an Austrian monk, studied pea plants to understand how traits are passed from one generation to the next. He chose pea plants because they have easily observable traits (like flower color), short generation times, and can self- or cross-pollinate.

**Genotype: **The genetic makeup of an organism (e.g., PP, Pp, pp for flower color).

**Phenotype: **The observable physical trait (e.g., purple or white flowers).

**Mendel’s Laws of Inheritance**

**Law of Segregation: **Two alleles for a trait separate during gamete formation, so each gamete carries only one allele.

Example: In pea plants, the allele for purple flowers (P) and the allele for white flowers (p) separate when gametes are formed, so a gamete will have either P or p.

**Law of Independent Assortment: **Alleles for different traits are distributed to gametes independently of one another.

Example: In peas, seed color and seed shape are inherited independently—getting a green seed doesn’t influence whether it’s round or wrinkled.

**Extensions to Mendelian Genetics**

**Incomplete dominance: **Heterozygotes show an intermediate phenotype between the two homozygotes.

Example: Red (RR) and white (rr) snapdragons produce pink (Rr) flowers. Like mixing red and white paint.

**Codominance****: **Both alleles in a heterozygote are fully expressed.

Example: In human blood type AB, both A and B alleles are expressed equally.

**Multiple alleles: **More than two versions of a gene exist in the population.

Example: The ABO blood group has three alleles—IA, IB, and i—that combine to produce four possible blood types.

**Pleiotropy: **One gene influences multiple traits.

Example: The gene responsible for sickle cell anemia also affects resistance to malaria.

**Polygenic inheritance: **Traits are determined by the combined effect of many genes.

Example: Human height and skin color show continuous variation due to polygenic inheritance.

**Environmental effects: **Environmental conditions influence gene expression.

Example: Siamese cats have darker fur on cooler parts of their body because the pigment enzyme works only at lower temperatures.

**Sex-linked Traits**

**Sex-linked trait: **A trait whose gene is located on a sex chromosome, usually the X chromosome.

Example: Red-green color blindness is more common in males because they have only one X chromosome—if that X carries the allele, they will express the trait.

Spiritual tie-in: Just as genetic variation strengthens a population, our differences in talents, backgrounds, and experiences strengthen the Church community.`,
    sampleProblems: `--- Quiz 8 - Things to Know ---
Quiz 8 - Things to Know – Use Outline 1

# Cell Division

• Chromosome terminology: chromosome, sister chromatid, homologous pair, autosomes, sex chromosomes, diploid, haploid, aneuploid

• Somatic cells vs germ cells

• Parent vs daughter cells

• Details of the cell cycle: G1, S, G2, and M

• Regulation of the cell cycle: various cyclins and cyclin dependent kinase (CDK)

• Basic overview of bacterial cell division and ‘big-picture’ differences between these and eukaryotic cell division

• Structures important in cell division: centromere, kinetochore, centrosome, centrioles

• Mitotic stages: interphase, prophase, prometaphase, metaphase, anaphase, telophase

• Cytokinesis

• Meiosis I and meiosis II: know the various stages and what is unique about each

• Difference between reductional and equational division

• Crossing over vs. recombination: when and how it occurs

• How to calculate # of possibilities of chromosomal makeup in daughter cells based only on independent assortment

• The impact of various aneuploidies

• Aneuploidy in sex chromosomes vs autosomes

--- Quiz 8 - Practice Questions ---
**Quiz 8 - Practice Questions**

**Questions**

1. In what phase (G1, S, G2, M) does prophase occur?

2. In what phase does cytokinesis occur? 

3. In what phase does DNA replication occur? 

4. What major biomolecule is the centromere made of?

5. If the parent cell has 46 chromosomes, how can each new daughter cell (that receives half of the parent cell DNA) also have 46 chromosomes?

6. How many total chromatids are present during prophase of mitosis in humans?

7. Mitosis creates every cell in the human body except?

8. Predict what would happen if an individual had faulty spindle fibers.

9. How many homologous pairs exist in human eggs? How about human liver cells?

10. Cells starting mitosis & meiosis begin with a (haploid or diploid) set of chromosomes

11. Which of the following best describe the term “crossing over”?
a.) An exchange of information between two homologous chromosomes
b.) A molecular interaction between two sister chromatids
c.) A molecular interaction between two non-sister chromatids
d.) A separation of two sister chromatids

12. When gametes fuse, The diploid number is restored as a result of:
a) differentiation
b) fertilization
c) cleavage
d) reduction-division
e) maturation

13. How many cells are formed with mitosis?

14. How many cells are formed with meiosis?

**Answer Key**

1. M phase

2. M phase

3. S phase

4. DNA

5. Following replication in the parent cell, you are left with two identical copies of the genome with 92 total chromatids and 46 chromosomes. While the total number of chromatids is halved, the total number of chromosomes stays the same. 

6. 92

7. Sperm / Egg

8. Many potential answers:
Daughter cells would end up with the wrong number of chromosomes 
Cell division would be halted due to an inability to separate chromatids from one another
***any response that details an issue with chromatid separation is possible.

9. Eggs have zero homologous pairs (they are haploid). Liver cells have 23 homologous pairs (22 autosomes and 1 pair of sex chromosomes)

10. Cells starting mitosis & meiosis begin with a (haploid or diploid) set of chromosomes

11. A

12. B

13. 2

14. 4

--- Quiz 8 - Fact Check 1 ---
**Quiz** **8** **Fact** **Check**** 1**

- The main purpose of the cell cycle is to:

A) Increase cell size without dividing

B) Regulate protein synthesis

C) Grow and divide cells for growth and repair

D) Produce gametes for reproduction

E) Create genetic variation

- The G₁ phase is primarily for:

A) DNA replication

B) Organelle duplication

C) Cell growth and protein production

D) Nuclear division

E) Spindle formation

- During the S phase:

A) The cell rests

B) DNA is replicated

C) Chromosomes condense

D) Proteins are degraded

E) The nuclear envelope breaks down

- During the G₂ phase, the cell:

A) Performs normal metabolic activities only

B) Prepares for division and checks DNA for errors

C) Breaks down spindle fibers

D) Divides the cytoplasm

E) Initiates DNA synthesis

- Checkpoints in the cell cycle ensure that:

A) Cells divide uncontrollably

B) Damaged DNA is not replicated or passed on

C) Chromosomes pair randomly

D) The cell skips unnecessary phases

E) Mitosis occurs twice

- Failure of cell cycle checkpoints can lead to:

A) Apoptosis

B) Cell specialization

C) Uncontrolled cell division and cancer

D) Differentiation

E) Cell dormancy

- Mitosis results in:

A) Four identical daughter cells

B) Two identical daughter cells

C) One diploid and one haploid cell

D) Four non-identical daughter cells

E) One large, multinucleated cell

- The purpose of mitosis is:

A) Growth, repair, and asexual reproduction

B) Producing gametes

C) Increasing genetic diversity

D) Recombining DNA

E) Protein degradation

- During prophase:

A) Chromosomes line up at the equator

B) Chromatin condenses into chromosomes and spindle fibers form

C) Sister chromatids separate

D) The nuclear envelope reforms

E) The cell divides its cytoplasm

- During metaphase:

A) Chromosomes condense

B) The nuclear envelope disappears

C) Chromosomes align at the cell’s equator

D) Chromosomes are duplicated

E) Spindle fibers break down

- During anaphase:

A) Sister chromatids separate and move to opposite poles

B) Chromosomes form a single line at the center

C) The nuclear envelope reforms

D) DNA replication occurs

E) Chromosomes decondense

- During telophase:

A) Spindle fibers disappear and nuclear envelopes reform

B) DNA is replicated

C) Chromosomes condense

D) Cytoplasm divides

E) Ribosomes disappear

- Cytokinesis is the division of:

A) DNA

B) The nucleus

C) The cytoplasm

D) The chromosomes

E) Ribosomes

- In humans, a somatic cell entering mitosis has 46 chromosomes. After mitosis, each daughter cell has:

A) 23 chromosomes

B) 46 chromosomes identical to the parent cell

C) 92 chromosomes

D) 46 chromatids

E) 23 chromatids

Answer Key

1- C

2- C

3- B

4- B

5- B

6- C

7- B

8- A

9- B

10- C

11- A

12- A

13- C

14- B

--- Quiz 8 - Fact Check 2 ---
**Quiz** **8** **Fact** **Check**** 2**

- The main purpose of meiosis is to:

A) Produce identical cells for repair

B) Produce gametes with half the number of chromosomes

C) Increase chromosome number

D) Allow asexual reproduction

E) Replicate DNA for mitosis

- Meiosis occurs in:

A) Somatic (body) cells

B) Gamete-producing cells in the ovaries and testes

C) Skin and liver cells

D) All eukaryotic cells equally

E) Bacteria and fungi

- Meiosis involves how many cell divisions?

A) One

B) Two

C) Three

D) Four

E) None

- The final result of meiosis is:

A) Two identical diploid cells

B) Four genetically unique haploid cells

C) Two haploid cells identical to the parent

D) Four diploid cells

E) One large polyploid cell

- Homologous chromosomes separate during:

A) Prophase I

B) Metaphase I

C) Anaphase I

D) Anaphase II

E) Telophase II

- Sister chromatids separate during:

A) Prophase I

B) Anaphase I

C) Anaphase II

D) Metaphase I

E) Cytokinesis I

- Crossing over occurs during:

A) Prophase I

B) Metaphase I

C) Anaphase II

D) Telophase I

E) Cytokinesis

- The process of crossing over increases:

A) Chromosome number

B) Genetic diversity

C) Mutation rate

D) DNA replication speed

E) Cell size

- Independent assortment occurs when:

A) Sister chromatids separate in anaphase II

B) Homologous pairs align randomly at metaphase I

C) Crossing over occurs

D) DNA replication finishes

E) Mutations occur

- The cells produced at the end of meiosis I are:

A) Haploid

B) Diploid

C) Identical to the parent cell

D) Genetically identical to each other

E) Polyploid

- The cells produced at the end of meiosis II are:

A) Haploid and genetically unique

B) Diploid and identical

C) Haploid and identical

D) Polyploid

E) Diploid and unique

- In humans, meiosis reduces the chromosome number from:

A) 23 to 12

B) 46 to 23

C) 92 to 46

D) 46 to 46

E) 23 to 46

- The exchange of DNA between homologous chromosomes results in:

A) Identical offspring

B) Genetic recombination

C) Reduced viability

D) Mutation repair

E) Chromosome duplication

- Errors in chromosome separation during meiosis can cause:

A) Normal gametes

B) Aneuploidy

C) Cytokinesis failure only

D) No change

E) Increased ATP production

Answer Key

1- B

2- B

3- B

4- B

5- C

6- C

7- A

8- B

9- B

10- A

11- A

12- B

13- B

14- B

--- Quiz 9 - Things to Know ---
Quiz 9 - Things to Know – Use Outline 2

# Genetics

• Genetic terminology: gene, allele, homozygous, heterozygous, dominant, recessive

• Know the difference between the various hypotheses of inheritance: acquired characteristics, blending

• Who Mendel was as well as his background

• Why was Mendel’s selection of pea plants so important?

• Why were the traits that he studied ideal for his purposes?

• Know the difference between phenotype and genotype

• P generation – F1 generation – F2 generation

• Typical genotypic and phenotypic ratios based on specific crosses

• Using a Punnett square

• Monohybrid crosses

• Law of dominance and the molecular basis for dominance

• Incomplete dominance

• Codominance

• Law of segregation

• Law of independent assortment

• Polygenic inheritance

• Sex chromosome inheritance: examples of X linked dominant and recessive

• Linked genes

• Chromosome mapping: Know how to identify orders based on recombination frequencies

--- Quiz 9 - Practice Questions ---
**Quiz 9 - Practice Questions**

**Questions**

1. You cross two plants heterozygous for a certain trait, what percent of the offspring will be heterozygous for the same trait?

2. What percent of the offspring from a homozygous dominant and homozygous recessive cross will be heterozygous?

3. Why are son’s the ones that are most often affected by X-linked recessive inheritance and not daughters?

4. Can Dad pass on an X linked disease to his sons?

5. What are the chances that the son of an unaffected man and a heterozygous woman will have any given X linked recessive disease?

6. What are the chances that the daughter of an unaffected man and a heterozygous woman will have any given X linked recessive disease?

7. When Mendel crossed wrinkled-seeded and smooth-seeded pea plants and then allowed the offspring to self-pollinate, the results were as follows:
9022 wrinkled
2978 smooth
Based only on these results (and assuming mendelian inheritance) which of the two phenotypes comes from the recessive allele?

8. Why are women more likely to have an X-linked dominant disorder?

9. In peas, tall plants are dominant to short plants. Complete a Punnett square to show the genotypes and phenotypes expected for the following cross: heterozygous x heterozygous. What percent of the offspring have the tall phenotype and what percent has the short phenotype?

10. In chimpanzees, straight fingers are dominant to bent fingers. Complete a Punnett square to show the genotypes and phenotypes expected for the following cross: heterozygous x homozygous bent.

For each of the following use the information to make a punnett square to answer the question

11. Seed color: Yellow is dominant (Y) | Green is recessive (y)
A yy father and a yy mother
What color(s) are the parents? 
What color(s) are the children? 

12. Pod shape: Smooth is dominant (S) | Bumpy is recessive (s)
A Ss father and a ss mother
What shape(s) are the parents?
What shape(s) are the children? 

13. Flower position: Along stem is dominant (A) | At tip is recessive (a)
An Aa father and an Aa mother
What flower position(s) are the parents? 
What flower position(s) are the children? 

14. Plant height: Tall is dominant (T) | Short is recessive (t)
50% of offspring are heterozygous / 50% are homozygous dominant / one parent is heterozygous
What is the genotype of the missing parent?
What are the phenotypes of the parents? 
What are the phenotypes of the children?

15. Dimples in humans: Dimples are dominant (D) | No dimples is recessive (d)
25% homozygous dominant / 50% heterozygous / 25% homozygous recessive
What is the genotype of both parents? 
What are the phenotypes of the parents?
What are the phenotypes of the children?

**Answer Key**

1. 50%

2. 100%

3. Because they only have a single X so they have no other allele to compensate for a recessive trait.

4. No, they pass on a Y to their sons. 

5. 50%

6. 0%

7. Smooth

8. Because they have two X chromosomes and if either of them contains the diseased allele, they will express the disease phenotype. 

9. 1 homozygous dominant: 2 heterozygotes: 1 homozygous recessive
75% tall and 25% short

10. 2 heterozygous: 2 homozygous recessive
50% Straight and 50% bent

For each of the following use the information to make a punnett square to answer the question

11. What color(s) are the parents? All Green
What color(s) are the children? All Green

12. What shape(s) are the parents? One smooth / one bumpy
What shape(s) are the children? 50% smooth / 50% bumpy

13. What flower position(s) are the parents? All along the stem
What flower position(s) are the children? 75% along the stem, 25% at the tip

14. What is the genotype of the missing parent? TT
What are the phenotypes of the parents? Both tall
What are the phenotypes of the children? All tall

15. What is the genotype of both parents? Heterozygous
What are the phenotypes of the parents? Dimples
What are the phenotypes of the children? 75% with dimples, 25% without dimples

--- Quiz 9 - Fact Check 1 ---
**Quiz** **9** **Fact** **Check**** 1**

- Gregor Mendel is known for studying inheritance using:

A) Fruit flies

B) Pea plants

C) Corn plants

D) Bacteria

E) Mice

- Mendel chose pea plants partly because they:

A) Could not self-pollinate

B) Had easily observable traits

C) Had long generation times

D) Produced only one type of seed

E) Were genetically identical

- Genotype refers to:

A) The physical appearance of a trait

B) The genetic makeup of an organism

C) The environment’s effect on a trait

D) A cell’s metabolic rate

E) The number of chromosomes

- Phenotype refers to:

A) The alleles for a trait

B) The observable trait itself

C) The DNA sequence of a gene

D) A mutation in the genome

E) The protein produced by a gene

- The Law of Segregation states that:

A) Alleles for different traits separate independently

B) Two alleles for a trait separate during gamete formation

C) Genes blend together in offspring

D) Dominant alleles always mask recessive ones

E) Gametes carry two alleles for each trait

- The Law of Independent Assortment states that:

A) Alleles for different traits sort independently during gamete formation

B) Dominant alleles sort first

C) Alleles stay linked across generations

D) Parents pass on blended traits

E) Only recessive traits assort independently

- A monohybrid cross examines inheritance of:

A) Two traits

B) One trait

C) Sex-linked traits only

D) Environmental traits

E) Chromosome number

- A dihybrid cross examines inheritance of:

A) One trait

B) Two traits

C) Sex-linked traits

D) Mutations

E) Polygenic traits

- Incomplete dominance occurs when:

A) One allele completely masks another

B) Both alleles are fully expressed

C) The heterozygote shows an intermediate phenotype

D) Alleles do not separate normally

E) Only recessive traits appear

- Environmental effects on gene expression mean that:

A) The environment changes DNA sequences

B) Traits are determined only by genetics

C) Gene expression can change depending on conditions

D) Genes are turned off permanently

E) Alleles are lost across generations

- A sex-linked trait is usually located on the:

A) Y chromosome only

B) Autosomes

C) X chromosome

D) Mitochondria

E) Centromere

Answer Key

1- B

2- B

3- B

4- B

5- B

6- A

7- B

8- B

9- C

10- C

11- C

--- Quiz 9 - Fact Check 2 ---
**Quiz** **9** **Fact** **Check**** ****2**

- In incomplete dominance, the heterozygote shows:

A) Only the dominant phenotype

B) Only the recessive phenotype

C) An intermediate phenotype

D) Both phenotypes equally

E) No phenotype at all

- In codominance, the heterozygote shows:

A) A blended trait

B) No dominant trait

C) Full expression of both alleles

D) Only the recessive trait

E) Only the dominant trait

- Blood type AB is an example of:

A) Recessive inheritance

B) Incomplete dominance

C) Codominance

D) Polygenic inheritance

E) Pleiotropy

- Polygenic traits are controlled by:

A) One gene

B) Two genes

C) Many genes

D) Only environmental factors

E) Genes found on sex chromosomes

- Polygenic traits often show:

A) Only two phenotypes

B) A continuous range of variation

C) Only dominant phenotypes

D) No effect from the environment

E) No genetic influence

- Pleiotropy means that:

A) One gene affects multiple traits

B) Many genes affect one trait

C) Traits skip generations

D) Traits are inherited on sex chromosomes

E) Two alleles blend into one phenotype

- Environmental effects on gene expression mean that:

A) The environment changes DNA sequences permanently

B) Traits are controlled only by genetics

C) Environmental conditions influence how genes are expressed

D) Genes cannot be activated

E) Dominant alleles disappear in certain climates

- An example of an environmentally influenced trait is:

A) ABO blood type

B) Siamese cat coat color

C) Cystic fibrosis

D) Red-green color blindness

E) Huntington’s disease

- A sex-linked trait is one in which the gene is:

A) Found on an autosome

B) Found on the X chromosome or Y chromosome

C) Only passed from father to son

D) Controlled only by the environment

E) Always recessive

- Red-green color blindness is more common in males because:

A) Males have more mutations

B) Males have only one X chromosome

C) Females express recessive traits more often

D) Males lack dominant alleles

E) Males inherit two X chromosomes

- A trait controlled by alleles on the X chromosome but not the Y is described as:

A) Polygenic

B) Codominant

C) X-linked

D) Pleiotropic

E) Multiple allele-based

Answer Key

1- C

2- C

3- C

4- C

5- B

6- A

7- C

8- B

9- B

10- B

11- C`,
  },
  "6": {
    name: "Evolution and adaptation",
    topics: `--- Unit 6 - Natural Selection and Population Genetics ---
**Unit 6: Evolution by Natural Selection ****&**** Population Genetics**

**Spiritual Thought**

Doctrine and Covenants 88:47 says, 'The earth rolls upon her wings, and the sun giveth his light by day.' God’s creations follow laws—both spiritual and natural. Understanding evolution helps us appreciate the processes He set in motion to fill the earth with diverse life.

**Learning Objectives**

By the end of this lesson, you should be able to:

Define natural selection and explain how it leads to adaptation

Describe the conditions for Hardy-Weinberg equilibrium

Apply the Hardy-Weinberg equation to calculate allele and genotype frequencies

Distinguish between different types of selection

Explain genetic drift, gene flow, and mutation in populations

**Natural Selection**

**Natural selection: **The process by which individuals with advantageous traits survive and reproduce more successfully.

Example: Peppered moths in England shifted from mostly light-colored to mostly dark-colored during the Industrial Revolution, as soot-covered trees made dark coloration more camouflaged from predators.

Natural selection requires variation, heritability of traits, and differential reproductive success. Without all three, evolution does not occur.

**Types of Selection**** **

**Directional selection: **Favors one extreme phenotype over others.

Example: Antibiotic resistance in bacteria—resistant individuals survive and reproduce, shifting the population toward resistance.

**Stabilizing selection: **Favors intermediate phenotypes and selects against extremes.

Example: Human birth weight—very small and very large babies have lower survival rates, so average weight is favored.

**Disruptive selection: **Favors both extremes over intermediate phenotypes.

Example: In certain African finches, both very small and very large beaks are advantageous for different seed types, but medium beaks are less efficient.

**Population Genetics**

**Gene pool: **All the alleles present in a population.

**Allele frequency: **Proportion of a specific allele among all alleles for a given gene in the population.

Evolution occurs when allele frequencies in a population change over time. Hardy-Weinberg equilibrium describes a state where no evolution occurs.

**Hardy-Weinberg Equilibrium**

The Hardy-Weinberg equation is p² + 2pq + q² = 1, where p is the frequency of the dominant allele and q is the frequency of the recessive allele.

Conditions for equilibrium: no mutation, random mating, no natural selection, extremely large population, no gene flow. These conditions are rarely all met in nature, so evolution is common.

**Hardy-Weinberg Example**

If 9% of a population has a recessive phenotype (q² = 0.09), then q = √0.09 = 0.3. Since p + q = 1, p = 0.7.

Genotype frequencies:

p² = 0.49 (homozygous dominant)

2pq = 0.42 (heterozygous)

q² = 0.09 (homozygous recessive)

Example: If the trait is albinism, 9% of the population is albino (aa), 42% are carriers (Aa), and 49% do not carry the allele (AA).

**Other Mechanisms of Evolution**

**Genetic drift: **Random changes in allele frequencies, especially in small populations.

Example: A hurricane randomly kills most individuals in a population, altering allele frequencies by chance.

**Gene flow: **Movement of alleles between populations.

Example: Pollen blown from one meadow to another introduces new alleles into the population.

**Mutation: **A change in DNA sequence that can introduce new alleles.

Example: A mutation in a flower pigment gene produces a new color, which may attract different pollinators.

Spiritual tie-in: Just as small genetic changes can lead to significant differences over time, small daily spiritual habits can lead to profound changes in our character and destiny.

--- Unit 6 - Macroevolution and Evolutionary Applications ---
**Unit 6: Macroevolution ****&**** Evolutionary Applications**

**Spiritual Thought**

Alma 37:6 reminds us that 'by small and simple things are great things brought to pass.' In evolution, small genetic changes accumulated over long periods can lead to great diversity and complexity of life—a reflection of God’s creative processes working patiently through time.

**Learning Objectives**

By the end of this lesson, you should be able to:

Define macroevolution and distinguish it from microevolution

Describe the major patterns of macroevolution

Explain adaptive radiation and provide examples

Discuss human impacts on evolution

Apply evolutionary principles to issues like antibiotic resistance and conservation

**Macroevolution**

**Macroevolution: **Evolutionary change above the species level, including the origin of new species and major changes in traits over long timescales.

Macroevolution often involves processes like speciation, where populations become reproductively isolated and diverge into separate species.

Speciation can occur through allopatric speciation (physical barriers like mountains or rivers separate populations) or sympatric speciation (populations diverge without physical barriers, often through behavioral or ecological differences).

Fossil evidence shows macroevolutionary change over millions of years. Transitional fossils, such as Archaeopteryx (linking dinosaurs and birds) or Tiktaalik (linking fish and amphibians), demonstrate gradual change.

Mass extinctions have repeatedly reshaped life on Earth, eliminating dominant groups and allowing new ones to diversify.

Example: The evolution of mammals from reptile-like ancestors is a macroevolutionary change involving many transitional forms.

**Patterns of Macroevolution**

**Divergent evolution: **Two or more species share a common ancestor but evolve different traits.

Example: Darwin’s finches evolved different beak shapes to exploit different food sources on the Galápagos Islands.

Another example: Polar bears and brown bears share a recent common ancestor but have adapted to very different environments—Arctic sea ice versus temperate forests.

**Convergent evolution: **Unrelated species evolve similar traits due to similar environmental pressures.

Another example: The wings of bats (mammals) and birds (avian reptiles) evolved independently but serve the same function—powered flight.

Example: Dolphins (mammals) and sharks (fish) both have streamlined bodies and fins for efficient swimming.

Another example: Predator-prey arms races, such as cheetahs evolving faster speeds while gazelles evolve better agility.

**Coevolution: **Two or more species influence each other’s evolution.

Another example: Cichlid fish in African lakes rapidly evolved into hundreds of species with specialized feeding strategies.

Example: Flowering plants and their pollinators often evolve traits that match—like long-tubed flowers and long-tongued moths.

**Adaptive radiation: **A single ancestral species rapidly diversifies into many species adapted to different environments.

Example: After the extinction of the dinosaurs, mammals diversified into numerous ecological niches.

**Evolutionary Applications**

Understanding evolution has practical benefits in medicine, agriculture, and conservation.

**Antibiotic resistance: **Bacteria evolve resistance to drugs through natural selection, making some infections harder to treat.

Example: Overuse of antibiotics selects for resistant strains of bacteria like MRSA.

Case study: Tuberculosis treatment became more difficult when Mycobacterium tuberculosis strains evolved multi-drug resistance due to incomplete or improper antibiotic use.

**Pesticide resistance: **Insect pests evolve resistance to chemicals used to control them.

Case study: The Colorado potato beetle has evolved resistance to more than 50 different insecticides, challenging crop protection efforts.

Example: Mosquitoes evolving resistance to insecticides used for malaria control.

Example: The Florida panther population was suffering from inbreeding depression until conservationists introduced individuals from a related population to restore genetic diversity.

**Conservation biology: **Applying evolutionary principles to protect species and genetic diversity.

Example: Maintaining genetic variation in captive breeding programs to prevent inbreeding depression.

**Agriculture: **Breeding crops and livestock with desired traits informed by evolutionary principles.

Example: Selective breeding of drought-resistant crops in response to climate change.

**Summary of Macroevolutionary Patterns**

| Pattern | Definition | Example |
| --- | --- | --- |
| Divergent Evolution | Species from a common ancestor evolve different traits | Darwin’s finches |
| Convergent Evolution | Unrelated species evolve similar traits | Dolphins and sharks |
| Coevolution | Species influence each other’s evolution | Flowers and pollinators |
| Adaptive Radiation | Rapid diversification from a common ancestor | Post-dinosaur mammal diversification |

Spiritual tie-in: Just as we can shape the course of evolution through our choices—like conserving habitats or overusing antibiotics—we are stewards over the earth and its creatures, responsible for making choices that sustain life for future generations.

--- BYU Evolution Packet ---
NOTE WELL: This first page is NOT part of the official BYU Evolution Packet. It was prepared
under the auspices of the BYU administration, however, to explain the packet's origin and
purpose. The actual packet itself begins with the next page: Evolution and the Origin of Man.

Evolution packet defined
BYU Daily Universe Nov. 12, 1992 p.3
In the interest of clarifying the
background and purpose of the library
packet on evolution and the origin of man,
which was announced in The Daily Universe
on Thursday, Oct. 29. I provide the
following
information
about
the
development of this packet and the
motivation for it.
As appropriate at any university, the
subject of organic evolution and the origin
of man comes up in BYU courses in several
departments. In these courses, students
naturally wish to know the official position
of the LDS Church on this subject. Some
faculty members in the sciences and in
Religious Education have gathered material
on these topics to distribute to their students.
Students might receive one set of statements
by Church leaders from one professor and a
different set from another professor.
Several faculty members and
administrators felt the diversity of materials
on these subjects, which were often selected
to emphasize the views of the professor,
tended to create confusion in the minds of
the students and accentuate the potential for
controversy about the Church's position. In
1991, in response to questions from students
about the Church position on evolution,
President Rex E. Lee authorized that one of
these packets be placed in the HBLL
Reserve Library as a source for information
about the Church's position on evolution and
the origin of man.

Purpose of packet
Because of my experience in
preparing the evolution article for the
"Encyclopedia of Mormonism," I was asked
by Provost Bruce Hafen to consider a packet

that could be made available to students as
the official and fundamental Church position
on this subject. It was immediately clear that
the selection of material for such a packet
could not depend on the content of the
statements. The goal is not to achieve some
kind of "balance" among the views that have
been expressed, but to give students the full
range of official views so that they can judge
the different positions they encounter. The
full range of official views should provide
the basis for the evaluation of other views
that have been expressed but that do not
have the status of official Church positions.
In line with this philosophical
stance, I prepared an initial draft of the
packet, which contained the First Presidency
statements and all published statements
made by presidents of the Church during the
time they held that office. It also included
the speech given in 1931 by Elder James E.
Talmage of the Quorum of the Twelve,
which was reviewed and approved by the
First Presidency and officially published by
the Church. Finally, this draft packet
included the "Encyclopedia of Mormonism"
article because of the excerpt from the First
Presidency Minutes in 1931 about the
Church's stance toward scientific studies of
evolution and the origin of man. This packet
was made entirely of materials with official
status and included all of the statements
published by or with the authorization of the
First Presidency.
The draft packet's contents were
discussed amicably with Dean Robert Millet
of Religious, Education and Provost Hafen.
After considerable discussion, we agreed
that the official university packet should
contain only those items that represent the

official position of the Church, i.e.
statements from the First Presidency. The
encyclopedia article was kept because of the
First Presidency Minutes item included in it,
which is not otherwise available to the
public. The final packet was then reviewed
by BYU's Board of Trustees-consisting of
The First Presidency, many members of the
Quorum of the Twelve and other general
authorities and officers. They approved the
packet.

Balance not the issue
Again, I emphasize that balance was
not the issue. The issue was providing only
those materials that could clearly be said to
be the official, declared position of the
Church.
None of us involved in preparing
this packet for Board review anticipate that
professors will be limited from distributing
other materials to their students. It is only
requested that BYU faculty members refer
students to the materials in this specific
packet along with the other items they may
choose to distribute. When other items are
distributed, they should be clearly separated
and given as a supplement to this material
and include a fair sampling of the diverse

viewpoints among LDS leaders. For
example, if one included statements by LDS
apostles in a handout on evolution, the range
of views would include some statements
against evolution, some sympathetic toevolution and several shades of opinion in
between. We want to avoid the implication
that a greater sense of unanimity or
resolution of this topic exists than is actually
the case, and we are eager to avoid
contention. The university has also
suggested that faculty members limit
supplemental LDS material on the subject of
evolution and the origin of man to published
documents, avoiding private letters or other
private material.
The process was one of constructive
and harmonious effort to provide materials
from which students could see clearly the
foundation of LDS doctrine on this subject
and distinguish it from the wide variety of
opinions encountered in LDS literature.

by William E. Evenson
Dean, College of Physical and
Mathematical Sciences
professor of Physics

October, 1992
EVOLUTION AND THE ORIGIN OF MAN
This packet contains, as far as could be found, all statements issued by the
First Presidency of the Church of Jesus Christ of Latter-day Saints on the subject
of evolution and the origin of man, and a statement on the Church's attitude
toward science. The earliest First Presidency statement, "The Origin of Man," was
issued during the administration of President Joseph F. Smith in 1909. This was
followed by a First Presidency Message in 19 10 that included brief comments
related to the study of these topics. The second statement, "Mormon View of
Evolution," was issued during the administration of President Heber J. Grant in
1925. Although there has never been a formal declaration from the First
Presidency addressing the general matter of organic evolution as a process for
development of biological species, these documents make clear the official
position of the Church regarding the origin of man.
This packet also contains the article on evolution from the Encyclopedia
of Mormonism, published in 1992. The current First Presidency authorized
inclusion of the excerpt from the First Presidency minutes of 1931 in the 1992
Encyclopedia article.
Various views have been expressed by other Church leaders on this
subject over many decades; however, formal statements by the First Presidency
are the definitive source of official Church positions. It is hoped that these
materials will provide a firm foundation for individual study in a context of faith
in the restored gospel.
Approved by the BYU Board of Trustees
June, 1992

IMPROVEMENT ERA.
Vol. XIII.

NOVEMBER, 1909.

No. 1.

Editor's Table.
____
The Origin of Man.
BY THE FIRST PRESIDENCY OF THE CHURCH.

______
"God created man in his own image."
Inquiries arise from time to time respecting the attitude of the Church of
Jesus Christ of Latter-day Saints upon questions which, though not vital from a
doctrinal standpoint, are closely connected with the fundamental principles of
salvation. The latest inquiry of this kind that has reached us is in relation to the
origin of man. It is believed that a statement of the position held by the Church
upon this important subject will be timely and productive of good.
In presenting the statement that follows we are not conscious of putting
forth anything essentially new; neither is it our desire so to do. Truth is what we
wish to present, and truth---eternal truth-is fundamentally old. A restatement of
the original attitude of the Church relative to this matter is all that will be
attempted here. To tell the truth as God has revealed it, and commend it to the
acceptance of those who need to conform their opinions thereto, is the sole
purpose of this presentation.
"God created man in his own image, in the image of-God created he him;
male and female created he them." In these plain and pointed words the inspired
author of the book of Genesis made known to the world the truth concerning the
origin of the human family. Moses, the prophet historian, "learned," as we are
told, "in all the wisdom of the Egyptians," when making this important
announcement, was not voicing a mere opinion, a theory derived from his
researches into the occult lore of that ancient people. He was speaking as the
mouthpiece of God, and his solemn declaration was for all time and for all people.
No subsequent revelator of the truth has contradicted the great leader and lawgiver of Israel. All who have since spoken by divine authority upon this theme
have confirmed his simple and sublime proclamation. Nor could it be otherwise.
Truth has but one source, and all revelations from heaven are harmonious with
each other. The omnipotent Creator, the maker of heaven and earth-had shown
unto Moses everything pertaining to this planet, including the facts relating to
man's origin, and the authoritative pronouncement of that mighty prophet and seer
to the house of Israel, and through Israel to the whole world, is couched in the
simple, clause: "God created man in his own image" (Genesis 1: 27; Pearl of
Great Price-Book of Moses, 1: 27-41.)
The creation was two-fold-firstly spiritual, secondly temporal. This truth,
also, Moses plainly taught-much more plainly than it has come down to us in the

imperfect translations of the Bible that are now in use. Therein the fact of a
spiritual creation, antedating the temporal creation, is strongly implied, but the
proof of it is not so clear and conclusive as in other records held by the Latter-day
Saints to be of equal authority with the Jewish scriptures. The partial obscurity of
the latter upon the point in question is owing, no doubt, to the loss of those "plain
and precious" parts of sacred writ, which, as the Book of Mormon informs us,
have been taken away from the Bible during its passage down the centuries (I
Nephi 13: 24-29). Some of these missing parts the Prophet Joseph Smith
undertook to restore when he revised those scriptures by the spirit of revelation,
the result being that more complete account of the creation which is found in the
book of Moses, previously cited. Note the following passages:
And now, behold I say unto you, that these are the generations of the
heaven and the earth, when they were created in the day that 1, the Lord God,
made the heaven and the earth,
And every plant of the field before it was in the earth, and every herb of
the field before it
For 1, the Lord God, created all things of which I have spoken, spiritually,
before they were naturally upon the face of the earth. For 1, the Lord God, had not
caused it to rain upon the face of the earth.
And 1, the Lord God, had created all the children of men, and not yet a
man to till the ground; for in heaven created I them, and there was not yet flesh
upon the earth, neither in the water, neither in the air.
But 1, the Lord God, spake, and there went up a mist from the earth, and
watered the whole face of the ground.
And I, the Lord God, formed man from the dust of the ground, and
breathed into his nostrils the breath of life; and man became a living soul, the first
flesh upon the earth, the first man also.
Nevertheless, all things were before created, but spiritually were they
created and made, according to my word. (Pearl of Great Price-Book of Moses, 3:
4-7. See also chapters 1 and 2, and compare with Genesis I and 2).

These two points being established, namely, the creation of man in the
image of God and the two-fold character of the creation, let us now inquire: What
was the form of man, in the spirit and in the body, as originally created? In a
general way the answer is given in the words chosen as the text of this treatise.
"God created man in his own image. It is more explicitly rendered in the Book of
Mormon thus: "All men were created in the beginning after mine own image
(Ether 3: 15). It is the Father who is speaking. If, therefore, we can ascertain the
form of the "Father of spirits," "The God of the spirits of all flesh," we shall be
able to discover the form of the original man.
Jesus Christ, the Son of God, is "the express image" of His Father's person
(Hebrews 1: 3). He walked the earth as a human being, as a perfect man, and said,
in answer to a question put to Him: "He that hath seen me hath seen the Father"
(John 14: 9). This alone ought to solve the problem to the satisfaction of every

thoughtful, reverent mind. The conclusion is irresistible, that if the Son of God be
the express image (that is, likeness) of His Father's person, then His Father is in
the form of man; for that was the form of the Son of God, not only during His
mortal life, but before His mortal birth, and after His resurrection. It was in this
form that the Father and the Son, as two personages, appeared to Joseph Smith,
when, as a boy of fourteen years, he received his first vision. Then if God made
man-the first man-in His own image and likeness, he must have made him like
unto Christ, and consequently like unto men of Christ's time and of the present
day. That man was made in the image of Christ, is positively stated in the Book of
Moses: "And 1, God, said unto mine Only Begotten, which was with me from the
beginning, Let us make man in our image, after our likeness; and it was so. * * *
* And I, God, created man in mine own image, in the image of mine Only
Begotten created I him, male and female created I them" (2: 26, 27).
The Father of Jesus is our Father also. Jesus Himself taught this truth,
when He instructed His disciples how to pray: "Our Father which art in heaven,"
etc. Jesus, however, is the first born among all the sons of God-the first begotten
in the spirit, and the only begotten in the flesh. He is our elder brother, and we,
like Him, are in the image of God. All men and women are in the similitude of the
universal Father and Mother, and are literally the sons and daughters of Deity.
"God created man in His own image." This is just as true of the spirit as it
is of the body, which is only the clothing of the spirit, its complement; the two
together constituting the soul. The spirit of man is in the form of man, and the
spirits of all creatures are in the likeness of their bodies. This was plainly taught
by the Prophet Joseph Smith (Doctrine and Covenants, 77: 2).
Here is further evidence of the fact. More than seven hundred years before
Moses was shown the things pertaining to this earth, another great prophet, known
to us as the brother of Jared, was similarly favored by the Lord. He was even
permitted to behold the spirit-body of the foreordained Savior, prior to His
incarnation; and so like the body of a man was His spirit in form and appearance,
that the prophet thought he was gazing upon a being of flesh and blood. He first
saw the finger and then the entire body of the Lord-all in the spirit. The Book of
Mormon says of this wonderful manifestation:
And it came to pass that when the brother of Jared had said these words,
behold, the Lord stretched forth His hand and touched the stones one by one with
His finger; and the veil was taken from off the eyes of the brother of Jared, and he
saw the finger of the Lord; and it was as the finger of a man, like unto flesh and
blood; and the brother of Jared fell down before the Lord, for he was struck with
fear.
And the Lord saw that the brother of Jared had fallen to the earth; and the
Lord said unto him, Arise, why hast thou fallen?
And he saith unto the Lord, I saw the finger of the Lord, and feared lest he
should smite me for I knew not that the Lord had flesh and blood.
And the Lord said unto him, Because of thy faith thou hast seen that I shall
take upon me flesh and blood; and never has man come before me with such

exceeding faith as thou hast; for were it not so, ye could not have seen my finger.
Sawest thou more than this?
And he answered, Nay, Lord, show thyself unto me.
And the Lord said unto him, Believest thou the works which I Shall
speak?
And he answered, Yea, Lord, I know that thou speakest the truth, for thou
art a God of truth and canst not lie.
And when he had said these words, behold, the Lord showed himself unto
him, and said, Because thou knowest these things ye are redeemed from the fall;
therefore ye are brought back into my presence; therefore I show myself unto you.
Behold, I am He who was prepared from the foundation of the world to
redeem my people. Behold, I am Jesus Christ, I am the Father and the Son. In me
shall all mankind have light, and that eternally, even they who shall believe on my
name; and they shall become my sons and my daughters.
And never have I showed myself unto man whom I have created, for never
hath man believed in me as thou hast. Seest thou that ye are created after mine
own image? Yea, even all men were created in the beginning after mine own
image.
Behold, this body, which ye now behold, is the body of my spirit, and man
have I created after the body of my spirit; and even as I appear unto thee to be in
the spirit, will I appear unto my people in the flesh" (Ether, 3: 6-16).
What more is needed to convince us that man, both in spirit and in body, is
the image and likeness of God, and that God Himself is in the form of man?
When the divine Being whose spirit-body the brother of Jared beheld, took
upon Him flesh and blood, He appeared as a man, having "body, parts and
passions," like other men, though vastly superior to all others, because He was
God, even the Son of God, the Word made flesh: in Him "dwelt the fulness of the
Godhead bodily." And why should He not appear as a man? That was the form of
His spirit, and it must needs have an appropriate covering, a suitable tabernacle.
He came into the world as He had promised to come (111 Nephi, 1: 13), taking an
infant tabernacle, and developing it gradually to the fulness of His spirit stature.
He came as man had been coming for ages, and as man has continued to come
ever since. Jesus, however, as shown, was the only begotten of God in the flesh.
Adam our great progenitor, "the first man," was, like Christ, a pre-existent
spirit, and like Christ he took upon him an appropriate body, the body of a man,
and so became a "living soul." The doctrine of the pre-existence, --revealed so
plainly, particularly in latter days, pours a wonderful flood of light upon the
otherwise mysterious problem of man's origin. It shows that man, as a spirit, was
begotten and born of heavenly parents, and reared to maturity in the eternal
mansions of the Father, prior to coming upon the earth in a temporal body to
undergo an experience in mortality. It teaches that all men existed in the spirit
before any man existed in the flesh, and that all who have inhabited the earth
since Adam have taken bodies and become souls in like manner.
It is held by some that Adam was not the first man upon this earth, and
that the original human being was a development from lower orders of the animal

creation. These, however, are the theories of men. The word of the Lord declares
that Adam was "the first man of all men" (Moses 1: 34), and we are therefore in
duty bound to regard him as the primal parent of our race. It was shown to the
brother of Jared that all men were created in the beginning after the image of God;
and whether we take this to mean the spirit or the body, or both, it commits us to
the same conclusion: Man began life as a human being, in the likeness of our
heavenly Father.
True it is that the body of man enters upon its career as a tiny germ or
embryo, which becomes an infant, quickened at a certain stage by the spirit whose
tabernacle it is, and the child, after being born, develops into a man. There is
nothing in this, however, to indicate that the original man, the first of our race,
began life as anything less than a man, or less than the human germ or embryo
that becomes a man.
Man, by searching, cannot find out God. Never, unaided, will he discover
the truth about the beginning of human life. The Lord must reveal Himself, or
remain unrevealed; and the same is true of the facts relating to the origin of
Adam's race--God alone can reveal them. Some of these facts, however, are
already known, and what has been made known it is our duty to receive and
retain.
The Church of Jesus Christ of Latter-day Saints, basing its belief on divine
revelation, ancient and modem, proclaims man to be the direct and lineal
offspring of Deity. God Himself is an exalted man, perfected, enthroned, and
supreme. By His almighty power He organized the earth, and all that it contains,
from spirit and element, which exist co-eternally with Himself. He formed every
plant that grows, and every animal that breathes, each after its own kind,
spiritually and temporally-" that which is spiritual being in the likeness of that
which is temporal, and that which is temporal in the likeness of that which is
spiritual." He made the tadpole and the ape, the lion and the elephant; but He did
not make them in His own image, nor endow them with Godlike reason and
intelligence. Nevertheless, the whole animal creation will be perfected and
perpetuated in the Hereafter, each class in its "distinct order or sphere," and will
enjoy "eternal felicity." That fact has been made plain in this dispensation
(Doctrine and Covenants 77: 3).
Man is the child of God, formed in the divine image and endowed with
divine attributes, and even as the infant son of an earthly father and mother is
capable in due time of becoming a man, so the undeveloped offspring of celestial
parentage is capable, by experience through ages and aeons, of evolving into a
God.
JOSEPH F. SMITH,
JOHN R. WINDER,
ANTHON H. LUND,
First Presidency of the Church of Jesus Christ of Latter-day Saints.

WORDS IN SEASON FROM THE FIRST PRESIDENCY

Deseret Evening News December 17, 1910, part 1, p. 3
In this Christmas message, the First Presidency devoted several sentences
to the Church's position with regard to questions-raised by science:
Diversity of opinion does not necessitate intolerance of spirit, nor should it
embitter or set rational beings against each other. The Christ taught kindness,
patience, and charity.
Our religion is not hostile to real science. That which is demonstrated, we
accept with joy; but vain philosophy, human theory and mere speculations of
men, we do not accept nor do we adopt anything contrary to divine revelation or
to good common sense. But everything that tends to right conduct, that
harmonizes with sound morality and increases faith in Deity, finds favor with us
no matter where it may be found.

IMPROVEMENT ERA.
Vol. XXVIII.

SEPTEMBER, 1925.

No. 11.

Editors Table
"Mormon View of Evolution"
A Statement by the First Presidency of the Church of Jesus Christ
of Latter-day Saints
"God created man in his own image, in the image of God created he him;
male and female created he them."
In these plain and pointed words the inspired author of the book of
Genesis made known to the world the truth concerning the origin of the human
family. Moses, the prophet-historian, who was "learned" we are told, "in all the
wisdom of the Egyptians," when making this important announcement, was not
voicing a mere opinion. He was speaking as the mouthpiece of God, and his
solemn declaration was for all time and for all people. No subsequent revelator of
the truth has contradicted the great leader and law-giver of Israel. All who have
since spoken by divine authority upon this theme have confirmed his simple and
sublime proclamation. Nor could it be otherwise. Truth has but one source, and all
revelations from heaven are harmonious one with the other.
Jesus Christ, the Son of God, is "the express image" of his Father's person
(Hebrews 1:3). He walked the earth as a human being, as a perfect man, and said,
in answer to a question put to him: "He that hath seen me hath seen the Father"
(John 14:9). This alone ought to solve the problem to the satisfaction of every
thoughtful, reverent mind. It was in this form that the Father and the Son, as two
distinct personages, appeared to Joseph Smith, when, as a boy of fourteen years,
he received his first vision.
The Father of Jesus Christ is our Father also. Jesus himself taught this
truth, when he instructed his disciples how to pray: "Our Father which art in
heaven," etc. Jesus, however, is the first born among all the sons of God-the first
begotten in the spirit, and the only begotten in the flesh. He is our elder brother,
and we, like him, are in the image of God. All men and women are in the
similitude of the universal Father and Mother, and are literally sons and daughters
of Deity.
Adam, our great progenitor, "the first man," was, like Christ, a pre-existent
spirit, and, like Christ, he took upon him an appropriate body, the body of a man,
and so became a "living soul." The doctrine of pre-existence pours wonderful
flood of light upon the otherwise mysterious problem of man's origin. It shows
that man, as a spirit, was begotten and born of heavenly parents, and reared to
maturity in the eternal mansions of the Father, prior to coming upon the earth in a
temporal body to undergo an experience in mortality.

The Church of Jesus Christ of Latter-day Saints, basing its belief on divine
revelation, ancient and modem, proclaims man to be the direct and lineal
offspring of Deity. By his Almighty power God organized the earth, and all that it
contains, from spirit and element, which exist co-eternally with himself.
Man is the child of God, formed in the divine image and endowed with
divine attributes, and even as the infant son of an earthly father and mother is
capable in due time of becoming a man, so the undeveloped offspring of celestial
parentage is capable, by experience through ages and aeons, of evolving into a
God.
HEBER J. GRANT,
ANTHONY W. WINS,
CHARLES W. NIBLEY,
First Presidency.

ENCYCLOPEDIA OF MORMONISM
EVOLUTION
The position of the Church on the origin of man was published by the First
Presidency in 1909 and stated again by a different First Presidency in 1925:
The Church of Jesus Christ of Latter-day Saints, basing its belief
on divine revelation, ancient and modem, declares man to be the direct and
lineal offspring of Deity.... Man is the child of God, formed in the divine
image and endowed with divine attributes (see Appendix, "Doctrinal
Expositions of the First Presidency").
The scriptures tell why man was created, but they do not tell how, though
the Lord has promised that he will tell that when he comes again (D&C 101:3233). In 1931, when there was intense discussion on the issue of organic evolution,
the First Presidency of the Church, then consisting of Presidents Heber J. Grant,
Anthony W. Ivins, and Charles W. Nibley, addressed all of the General
Authorities of the Church on the matter, and concluded,
Upon the fundamental doctrines of the Church we are all agreed.
Our mission is to bear the message of the restored gospel to the world.
Leave geology, biology, archaeology, and anthropology, no one of which
has to do with the salvation of the souls of mankind, to scientific research,
while we magnify our calling in the realm of the Church....
Upon one thing we should all be able to agree, namely, that
Presidents Joseph F. Smith, John R. Winder, and Anthon H. Lund were
right when they said: "Adam is the primal parent of our race" [First
Presidency Minutes, Apr. 7, 1931].
WILLIAM E. EVENSON
(Encyclopedia of Mormonism, Vol. 2)`,
    sampleProblems: `--- Quiz 10 - Things to Know ---
Quiz 10 - Things to Know – Use Outline 1 and 2

# Evolution

• What is the significance of Darwin’s finches?

• What is 'descent with modification'?

# Microevolution

• Mutation

• Migration

• Genetic Drift

• Selection

# Selection

• Directional selection

• Stabilizing selection

• Balancing selection

• Sexual selection

• Intrasexual selection

• Intersexual selection

• Balancing intersexual selection

• Biotic selection pressures

• Abiotic selection pressures

# Macroevolution

• Divergence

• Adaptive radiation

• Convergence

• Parallelism

# Homology

• Structural

• Developmental

• Genetic

# Population Genetics

• Population

• Population genetics

• Gene pool

• Polymorphism

• Polymorphic gene

• Monomorphic gene

• Single nucleotide polymorphisms (SNPs)

• Allele frequency

• Genotype frequency

# Application of Evolutionary Concepts

• Pesticide resistant insects

• Antibiotic resistant bacteria

• The evolutionary background of leptin and obesity

# Hardy-Weinberg

• Know the Hardy Weinberg equation (you don’t have to have it memorized although it is very simple to memorize). Know what each of the terms mean.

• Know what p+q=1 means

• If you were given a population and something about genotype, phenotype, dominance you should be able to figure out allele or genotype frequency or numbers of the population for each of the genotypes.

• Know what the conditions are required for Hardy Weinberg Equilibrium

• Why is the Hardy Weinberg Equation useful if these conditions are rarely if ever met?

--- Quiz 10 - Practice Questions ---
**Quiz 10 - Practice Questions**

**Questions**

1. The frequency of two alleles in a gene pool is 0.19 (A) and 0.81(a). Assume that the population is in Hardy-Weinberg equilibrium.
(a) Calculate the percentage of heterozygous individuals in the population.
(b) Calculate the percentage of homozygous recessives in the population.

2. An allele W, for white wool, is dominant over allele w, for black wool. In a sample of 900 sheep, 891 are white and 9 are black. Calculate the allelic frequencies within this population, assuming that the population is in H-W equilibrium.

3. In a population that is in Hardy-Weinberg equilibrium, the frequency of the recessive homozygote genotype of a certain trait is 0.09. Calculate the percentage of individuals homozygous for the dominant allele.

4. In a population that is in Hardy-Weinberg equilibrium, 38 % of the individuals are recessive homozygotes for a certain trait. In a population of 14,500, calculate the percentage of homozygous dominant individuals and heterozygous individuals.

5. Allele T, for the ability to taste a particular chemical, is dominant over allele t, for the inability to taste the chemical. Four hundred university students were surveyed and 64 were found to be nontasters. Calculate the percentage of heterozygous students. Assume that the population is in H-W equilibrium.

6. In humans, the Rh factor genetic information is inherited from our parents, but it is inherited independently of the ABO blood type alleles. In humans, Rh+ individuals have the Rh antigen on their red blood cells, while Rh− individuals do not. There are two different alleles for the Rh factor known as Rh+ and rh. Assume that a dominant gene Rh produces the Rh+ phenotype, and that the recessive rh allele produces the Rh− phenotype.
In a population that is in Hardy-Weinberg equilibrium, if 160 out of 200 individuals are Rh+, calculate the frequencies of both alleles.

7. In corn, kernel color is governed by a dominant allele for white color (W) and by a recessive allele (w). A random sample of 100 kernels from a population that is in H-W equilibrium reveals that 9 kernels are yellow (ww) and 91 kernels are white.
(a) Calculate the frequencies of the yellow and white alleles in this population.
(b) Calculate the percentage of this population that is heterozygous.

8. A rare disease which is due to a recessive allele (a) that is lethal when homozygous, occurs within a specific population at a frequency of one in a million. How many individuals in a town with a population of 14,000 can be expected to carry this allele?

9. Two Siamese and three Persian cats survive a shipwreck and are carried on driftwood to a previously uninhabited tropical island. All five cats have normal ears, but one carries the recessive allele f or folded ears (his genotype is Ff).
(a) Calculate the frequencies of alleles F and f in the cat population of this island.
(b) If you assume Hardy-Weinberg equilibrium for these alleles (admittedly very improbable), about how many cats would you expect to have folded ears when the island population reaches 20,000?

10. In a certain African population, 4% of the population is born with sickle cell anemia (aa). Calculate the percentage of individuals who enjoy the selective advantage of the sickle-cell gene as carriers or heterozygotes (being heterozygous here gives increased resistance to malaria)?

**Answer Key**

1. (a) According to the Hardy-Weinberg Equilibrium equation, heterozygotes are represented by the 2pq term. Therefore, the number of heterozygous individuals (Aa) is equal to 2pq which equals 2 × 0.19 × 0.81 = 0.31 or 31%
(b) The homozygous recessive individuals (aa) are represented by the q2 term in the H-W equilibrium equation which equals 0.81 × 0.81 = 0.66 or 66%

2. The allelic frequency of w is represented by the q term and the allelic frequency W is represented by the p term. To calculate the value of q, realize that qq or q2 represents the homozygous recessive individuals or the black sheep in this case. Since there are 9 black sheep, the frequency of black sheep is:
# individuals = 9 = 0.01 , thus ww = q2 = 0.01 
if q2 = 0.01 then q = 0.1 
Additionally: 
p+q=1 thus p=1–q or p=1–0.1 or 0.9 and therefore p=W=0.9 and q=w=0.1

3. We know that the frequency of the recessive homozygote genotype is q2 and equal to 0.09. 
Thus q2 = 0.09 = and q = 0.30 
AND we also know that p+q=1
Thus, p=1–q or p=1–0.30 or p=0.70
Thus the homozygote dominants are represented by p2 = (0.70)2 = 0.49 or 49%

4. Always start with the homozygous recessive percentage if given, which is equal to q2.
q2 = 0.38 so q=0.616 
Solving for p is now straightforward: p+q=1, thus p=1–q or p=1–0.616 or p=0.384
The homozygous dominant individuals are represented by p=0.384 and p2=0.147 → 14.7% Dominant Percentage
14,500×0.147 = 2,132 homozygous dominant individuals 
The heterozygotes are represented by the 2pq term
 2pq = 2×0.616×0.384 = 0.473 → 47.3% Heterozygote Percentage 
14, 500 × 0.473 = 6,859 heterozygous individuals
38% + 14.7% + 47.3% = 100% or ↓
Double check! first get the homozygous receive number 0.38×14,500 = 5,510
then make sure they all add up: 5, 510 + 2,132 + 6, 859 = 14, 501 (due to some rounding)

5. Calculate the percent of homozygotes recessive individuals 64 = 0.16 or 16% of 400 individuals. tt = q2
so q2=tt of q2=0.16 and q=0.40 which is the allelic frequency of t
Additionally, p+q=1 thus p=1–q or p=1–0.40 or p=0.60 which is the allelic frequency of T 
Solve for the heterozygote (Tt) term, 2pq
2pq = 2 × 0.60 × 0.40 = 0.48 or 48% of the population are heterozygous “tasters” and carriers of the recessive allele

6. In a population that is in Hardy-Weinberg equilibrium, if 160 out of 200 individuals are Rh+, calculate the frequencies of both alleles.
Always start with the homozygous recessive percentage if given, which is equal to q.
If 160 of 200 individuals are Rh+, then it stands to reason that 40 are Rh− or rh.
Thus, the frequency of q, or rh genotype, is
40/200 = 0.20
so if q2=0.20 then q=0.45 
AND p+q=1 so, p=1–q of p=1–0.45 o p=0.55
Thus the Rh allele frequency = 0.55 and rh allele frequency = 0.45

7. (a) Always start with the homozygous recessive percentage if given, which is equal to q .
The frequency of the yellow kernel recessive genotype ww, or q2 is 9
thus q2=0.09 and therefore q=0.30 or the frequency of w
And p+q =1 thus p=1–q or p=1–0.30 or p=0.70 which is the frequency of W
(b) The heterozygotes = 2pq = 2(0.70)(0.30) = 0.42 or 42%

8. Always start with the homozygous recessive percentage if given, which is equal to q .
The frequency of the recessive genotype, q2 is = 0.000001 
if q2 = 0.000001 than q=0.001 which is the frequency of allele a
ANDp+q = 1 thus, p =1–q or p=1–0.001 or p=0.999 
Therefore, the frequency of allele A=p=0.999 and the frequency of allele a = q = 0.001
Carriers are heterozygous and are equal to 2pq. So, 2pq = 2(0.999)(0.001)(14,000)= 27.97
(This should be reported as 28 individuals upon considering the rounding done throughout the mathematics.)

9. (a) We are told that the genotype for the carrier is Ff. So, the other four cats are not carriers, thus their genotype for this trait is FF. Thus there are 10 total alleles within this population, 9 being F alleles and 1 being f.
So, the frequencies are 9 or 0.90 for F the allele and 1 or 0.10 for the f allele.
(b)The genotype of the cats with folded ears is ff which is equivalent to q.
Therefore, q2 = (0.10)2 = 0.010 and the number of cats with folded ears is then equal to 20, 000 × 0.010 = 200 cats.

10. Heterozygous individuals have a genotype of Aa and are represented by the 2pq term in the H-W equilibrium equations.
We are told that 4% of the population is affected with sickle cell anemia, thus q2 = 4% = 0.04 when expressed as a decimal. So, q2=0.04 and q=0.20
AND p+q=1, thus p=1–q, or p=1–0.20, or p=0.80
Thus, A allele has a frequency of 0.80 and the a allele has a frequency of 0.20. 
Therefore, the percentage of the population that is heterozygous (Aa) and are carriers is = 2pq = 2(0.20)(0.80) = 0.32 or 32%.

--- Quiz 10 - Fact Check ---
**Quiz** **9** **Fact** **Check**** ****2**

- Natural selection requires:

A) Variation, heritability, and differential reproductive success

B) Mutation, speciation, and extinction

C) Random mating only

D) No variation in traits

E) Extremely small populations

- Natural selection occurs when:

A) All individuals reproduce equally

B) Individuals with advantageous traits leave more offspring

C) Environmental change stops reproduction

D) Traits blend together

E) All individuals survive

- Directional selection favors:

A) Only intermediate phenotypes

B) Both extremes

C) One extreme phenotype

D) No phenotypes at all

E) Only recessive traits

- Stabilizing selection favors:

A) Extreme phenotypes

B) Intermediate phenotypes

C) New mutations only

D) Random traits

E) Haploid individuals

- Disruptive selection results in:

A) Loss of both extremes

B) Favoring individuals at both extremes

C) Strong favoring of intermediate traits

D) Loss of all variation

E) No evolution

- Evolution occurs when:

A) A population gets larger

B) Individuals change their traits

C) Allele frequencies change over time

D) All mutations disappear

E) Populations stop reproducing

- The Hardy-Weinberg equation is:

A) p + q = 1

B) p² + 2pq + q² = 1

C) 2p + 2q = 1

D) p³ + q³ = 1

E) pq = 1

- Hardy-Weinberg equilibrium represents a population that is:

A) Not evolving

B) Rapidly evolving

C) Mutating constantly

D) Under strong selection

E) Becoming extinct

- A population can remain in Hardy-Weinberg equilibrium only if:

A) There is natural selection

B) Mating is random and no mutation occurs

C) Populations are small

D) Gene flow increases

E) New alleles enter rapidly

- Genetic drift is best described as:

A) Changes in traits due to natural selection

B) Random changes in allele frequencies

C) Movement of alleles between populations

D) Mutations that always benefit fitness

E) Gene flow caused by mating

- Gene flow occurs when:

A) Individuals migrate between populations

B) Populations stay isolated

C) Mutations occur

D) Selection eliminates variation

E) Populations become extinct

- Macroevolution refers to:

A) Small changes within a population

B) Evolutionary change above the species level

C) Changes that occur only within one generation

D) Mutations in single genes

E) Evolution without speciation

- Convergent evolution occurs when:

A) Related species evolve in different directions

B) Unrelated species evolve similar traits

C) A single species rapidly diversifies

D) Populations become reproductively isolated

E) Traits disappear randomly

- Divergent evolution occurs when:

A) Unrelated species evolve similar traits

B) A single ancestor gives rise to many species

C) Species with a common ancestor evolve different traits

D) Two species merge

E) Alleles become fixed

- Antibiotic resistance evolves because:

A) Bacteria stop reproducing

B) Antibiotics create new alleles

C) Resistant bacteria survive and reproduce

D) All bacteria mutate randomly

E) Human cells change bacterial DNA

- Pesticide resistance in insects is an example of:

A) Convergent evolution

B) Natural selection favoring resistant individuals

C) Mutation with no selection

D) Stabilizing selection

E) Genetic bottleneck

- Gene flow can be beneficial in conservation when:

A) It reduces genetic variation

B) It introduces new alleles that reduce inbreeding depression

C) It isolates small populations

D) It removes all mutations

E) It accelerates extinction

Answer Key

1- A

2- B

3- C

4- B

5- B

6- C

7- B

8- A

9- B

10- B

11- A

12- B

13- B

14- C

15- C

16- B

17- B`,
  },
};
