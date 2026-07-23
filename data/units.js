// data/units.js
// Fill in the placeholders below for each unit. This content is injected
// into the system prompt only when a student selects that specific unit,
// so it doesn't bloat every request with all six units' worth of material.
//
// - "topics": what you want the TA grounded in when a student picks
//   "Studying a topic" for this unit — subtopics, key terms, common
//   misconceptions, whatever would help it explain things the way you do.
// - "sampleProblems": actual practice problems/questions for this unit.
//   When a student picks "Sample problems," the TA will have these
//   available to reference and Socratically walk students through —
//   it will NOT just hand over the answers (see the Socratic method
//   rules in api/chat.js).

export const UNITS = {
  "1": {
    name: "Scientific thinking",
    topics: "[EDIT THIS: key subtopics, terms, and concepts for Unit 1]",
    sampleProblems: "[EDIT THIS: paste sample/practice problems for Unit 1]",
  },
  "2": {
    name: "Cell theory",
    topics: "[EDIT THIS: key subtopics, terms, and concepts for Unit 2]",
    sampleProblems: "[EDIT THIS: paste sample/practice problems for Unit 2]",
  },
  "3": {
    name: "Introductory biochemistry",
    topics: "[EDIT THIS: key subtopics, terms, and concepts for Unit 3]",
    sampleProblems: "[EDIT THIS: paste sample/practice problems for Unit 3]",
  },
  "4": {
    name: "Introduction to bioenergetics",
    topics: "[EDIT THIS: key subtopics, terms, and concepts for Unit 4]",
    sampleProblems: "[EDIT THIS: paste sample/practice problems for Unit 4]",
  },
  "5": {
    name: "Reproduction and genetics",
    topics: "[EDIT THIS: key subtopics, terms, and concepts for Unit 5]",
    sampleProblems: "[EDIT THIS: paste sample/practice problems for Unit 5]",
  },
  "6": {
    name: "Evolution and adaptation",
    topics: "[EDIT THIS: key subtopics, terms, and concepts for Unit 6]",
    sampleProblems: "[EDIT THIS: paste sample/practice problems for Unit 6]",
  },
};
