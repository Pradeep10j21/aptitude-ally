import { Question } from '@/types/assessment';

export const questions: Question[] = [
  {
    id: 'q1',
    category: 'quantitative',
    question: 'A train travels 240 km in 4 hours. If it increases its speed by 20 km/h, how long will it take to travel the same distance?',
    options: [
      '2.5 hours',
      '3 hours',
      '3.5 hours',
      '4 hours'
    ],
    correctAnswer: 1,
    explanation: 'Original speed = 240/4 = 60 km/h. New speed = 60 + 20 = 80 km/h. New time = 240/80 = 3 hours.',
    concept: 'Speed, Distance, and Time',
    tip: 'Always find the original speed first, then apply changes. Remember: Time = Distance ÷ Speed',
    difficulty: 'easy',
    steps: [
      {
        title: 'Understand the Formula',
        content: 'The fundamental relationship is: Speed = Distance ÷ Time. We can rearrange this to find any variable.',
        emoji: '📐',
        diagram: {
          type: 'formula',
          content: `
┌─────────────────────────────────────┐
│         SPEED TRIANGLE              │
│                                     │
│              Distance               │
│             ┌───────┐               │
│            /         \\              │
│           /           \\             │
│          /             \\            │
│         /   D = S × T   \\           │
│        /                 \\          │
│       ├─────────┬─────────┤         │
│       │  Speed  │  Time   │         │
│       │  S=D÷T  │  T=D÷S  │         │
│       └─────────┴─────────┘         │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Calculate Original Speed',
        content: 'Using the formula: Speed = Distance ÷ Time',
        emoji: '🚂',
        diagram: {
          type: 'calculation',
          content: `
┌─────────────────────────────────────┐
│     STEP 1: Find Original Speed     │
├─────────────────────────────────────┤
│                                     │
│   Distance = 240 km                 │
│   Time = 4 hours                    │
│                                     │
│   Speed = 240 ÷ 4                   │
│                                     │
│   ┌─────────────────────┐           │
│   │  Speed = 60 km/h    │           │
│   └─────────────────────┘           │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Calculate New Speed',
        content: 'The train increases its speed by 20 km/h from the original speed.',
        emoji: '⚡',
        diagram: {
          type: 'comparison',
          content: `
┌─────────────────────────────────────┐
│      STEP 2: Calculate New Speed    │
├─────────────────────────────────────┤
│                                     │
│   Original Speed:  60 km/h          │
│   Increase:       +20 km/h          │
│                   ─────────         │
│   New Speed:       80 km/h          │
│                                     │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━      │
│   ▓▓▓▓▓▓▓▓▓▓▓▓░░░░  60 km/h        │
│   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  80 km/h        │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Find New Time',
        content: 'Now use Time = Distance ÷ Speed with the new speed.',
        emoji: '⏱️',
        diagram: {
          type: 'calculation',
          content: `
┌─────────────────────────────────────┐
│       STEP 3: Calculate New Time    │
├─────────────────────────────────────┤
│                                     │
│   Distance = 240 km (unchanged)     │
│   New Speed = 80 km/h               │
│                                     │
│   Time = Distance ÷ Speed           │
│   Time = 240 ÷ 80                   │
│                                     │
│   ╔═════════════════════════╗       │
│   ║   Time = 3 hours ✓     ║       │
│   ╚═════════════════════════╝       │
│                                     │
└─────────────────────────────────────┘`
        }
      }
    ],
    funFact: 'The fastest train in the world, the Shanghai Maglev, travels at 460 km/h!'
  },
  {
    id: 'q2',
    category: 'logical',
    question: 'All roses are flowers. Some flowers fade quickly. Which conclusion is definitely true?',
    options: [
      'All roses fade quickly',
      'Some roses fade quickly',
      'No roses fade quickly',
      'None of these can be concluded with certainty'
    ],
    correctAnswer: 3,
    explanation: 'We only know that SOME flowers fade quickly, not which ones. Roses might or might not be among them.',
    concept: 'Syllogistic Reasoning',
    tip: 'In logic, "some" never guarantees overlap. Draw Venn diagrams to visualize relationships!',
    difficulty: 'medium',
    steps: [
      {
        title: 'Understand the Premises',
        content: 'We have two statements to analyze logically.',
        emoji: '📋',
        diagram: {
          type: 'list',
          content: `
┌─────────────────────────────────────┐
│           THE PREMISES              │
├─────────────────────────────────────┤
│                                     │
│   Premise 1: All roses are flowers  │
│   → Every rose belongs to the       │
│     set of flowers                  │
│                                     │
│   Premise 2: Some flowers fade      │
│   → At least one flower fades       │
│     quickly (but we don't know      │
│     which ones)                     │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Visualize with Venn Diagram',
        content: 'Drawing the relationship helps us see what we know and don\'t know.',
        emoji: '🔵',
        diagram: {
          type: 'venn',
          content: `
┌─────────────────────────────────────┐
│          VENN DIAGRAM               │
├─────────────────────────────────────┤
│                                     │
│    ┌───────────────────────────┐    │
│    │     ALL FLOWERS           │    │
│    │                           │    │
│    │    ┌───────┐              │    │
│    │    │ Roses │   ? Flowers  │    │
│    │    │  🌹   │   that fade  │    │
│    │    └───────┘      ?       │    │
│    │                           │    │
│    └───────────────────────────┘    │
│                                     │
│   Roses are INSIDE Flowers          │
│   But which flowers fade? Unknown!  │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Analyze "Some" in Logic',
        content: 'The word "some" is critical - it means at least one, but doesn\'t specify which.',
        emoji: '🤔',
        diagram: {
          type: 'explanation',
          content: `
┌─────────────────────────────────────┐
│     WHAT DOES "SOME" MEAN?          │
├─────────────────────────────────────┤
│                                     │
│   "Some flowers fade quickly"       │
│                                     │
│   Could mean:                       │
│   ┌─────────────────────────────┐   │
│   │ • Daisies fade (not roses)  │   │
│   │ • Tulips fade (not roses)   │   │
│   │ • Roses fade (maybe!)       │   │
│   │ • All flowers fade (maybe!) │   │
│   └─────────────────────────────┘   │
│                                     │
│   We simply DON'T KNOW which        │
│   flowers are included!             │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Apply Logical Certainty',
        content: 'We can only conclude what is DEFINITELY true from the given information.',
        emoji: '✅',
        diagram: {
          type: 'conclusion',
          content: `
┌─────────────────────────────────────┐
│         FINAL ANALYSIS              │
├─────────────────────────────────────┤
│                                     │
│  ❌ "All roses fade" - No proof     │
│  ❌ "Some roses fade" - No proof    │
│  ❌ "No roses fade" - No proof      │
│                                     │
│  ╔═════════════════════════════╗    │
│  ║  ✓ None can be concluded    ║    │
│  ║    with certainty           ║    │
│  ╚═════════════════════════════╝    │
│                                     │
│  KEY: Without knowing WHICH         │
│  flowers fade, we cannot make       │
│  any certain claim about roses!     │
│                                     │
└─────────────────────────────────────┘`
        }
      }
    ],
    funFact: 'Syllogistic logic was invented by Aristotle over 2,300 years ago!'
  },
  {
    id: 'q3',
    category: 'verbal',
    question: 'Choose the word that is most similar in meaning to "EPHEMERAL":',
    options: [
      'Eternal',
      'Transient',
      'Significant',
      'Tangible'
    ],
    correctAnswer: 1,
    explanation: 'Ephemeral means lasting for a very short time, which is synonymous with transient.',
    concept: 'Vocabulary - Synonyms',
    tip: 'Break down unfamiliar words: "ephemera" relates to things that exist briefly!',
    difficulty: 'medium',
    steps: [
      {
        title: 'Define the Word',
        content: 'First, understand what "ephemeral" means by looking at its roots.',
        emoji: '📖',
        diagram: {
          type: 'definition',
          content: `
┌─────────────────────────────────────┐
│        WORD: EPHEMERAL              │
├─────────────────────────────────────┤
│                                     │
│   Origin: Greek "ephemeros"         │
│                                     │
│   ┌───────────────────────────┐     │
│   │  epi (for) + hemera (day) │     │
│   │       = "lasting a day"   │     │
│   └───────────────────────────┘     │
│                                     │
│   Meaning: Lasting for a very       │
│   SHORT time; temporary; fleeting   │
│                                     │
│   Examples:                         │
│   • Ephemeral beauty of flowers     │
│   • Ephemeral trends in fashion     │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Analyze Each Option',
        content: 'Compare each word\'s meaning to "ephemeral".',
        emoji: '🔍',
        diagram: {
          type: 'comparison',
          content: `
┌─────────────────────────────────────┐
│        OPTION ANALYSIS              │
├─────────────────────────────────────┤
│                                     │
│   A) Eternal                        │
│      = lasting forever              │
│      ❌ OPPOSITE of ephemeral       │
│                                     │
│   B) Transient                      │
│      = temporary, brief, passing    │
│      ✓ SIMILAR to ephemeral!        │
│                                     │
│   C) Significant                    │
│      = important, meaningful        │
│      ❌ Different concept            │
│                                     │
│   D) Tangible                       │
│      = touchable, physical          │
│      ❌ Different concept            │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Visual Comparison',
        content: 'See how ephemeral and transient share the same meaning on a timeline.',
        emoji: '⏰',
        diagram: {
          type: 'timeline',
          content: `
┌─────────────────────────────────────┐
│         DURATION SCALE              │
├─────────────────────────────────────┤
│                                     │
│   SHORT ◄────────────────► LONG     │
│                                     │
│   ├──┤                              │
│   EPHEMERAL (brief moment)          │
│                                     │
│   ├──┤                              │
│   TRANSIENT (short-lived)           │
│                                     │
│   ├───────────────────────────────┤ │
│   ETERNAL (forever)                 │
│                                     │
│   Ephemeral ≈ Transient ✓           │
│   Both mean "short duration"        │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Confirm the Answer',
        content: 'The word most similar to "ephemeral" is "transient".',
        emoji: '✅',
        diagram: {
          type: 'answer',
          content: `
┌─────────────────────────────────────┐
│          CORRECT ANSWER             │
├─────────────────────────────────────┤
│                                     │
│   EPHEMERAL = TRANSIENT             │
│                                     │
│   ╔═════════════════════════════╗   │
│   ║   Both mean: temporary,     ║   │
│   ║   short-lived, fleeting,    ║   │
│   ║   brief, passing            ║   │
│   ╚═════════════════════════════╝   │
│                                     │
│   Memory tip:                       │
│   Think of mayflies - they live     │
│   only 24 hours. Their existence    │
│   is EPHEMERAL/TRANSIENT.           │
│                                     │
└─────────────────────────────────────┘`
        }
      }
    ],
    funFact: 'Mayflies, called "ephemera" in Greek, live only 24 hours as adults!'
  },
  {
    id: 'q4',
    category: 'analytical',
    question: 'What number comes next in the sequence: 2, 6, 12, 20, 30, ?',
    options: [
      '40',
      '42',
      '44',
      '46'
    ],
    correctAnswer: 1,
    explanation: 'The differences between consecutive numbers are 4, 6, 8, 10, 12... Each difference increases by 2. So 30 + 12 = 42.',
    concept: 'Number Sequences',
    tip: 'When you see a number sequence, always check the differences first!',
    difficulty: 'easy',
    steps: [
      {
        title: 'Find the Differences',
        content: 'Calculate the difference between each consecutive pair of numbers.',
        emoji: '🔢',
        diagram: {
          type: 'sequence',
          content: `
┌─────────────────────────────────────┐
│     STEP 1: FIND DIFFERENCES        │
├─────────────────────────────────────┤
│                                     │
│     2    6    12    20    30    ?   │
│       ↘  ↙  ↘  ↙  ↘  ↙  ↘  ↙       │
│        4     6     8    10    ?     │
│                                     │
│   First differences:                │
│   6-2=4, 12-6=6, 20-12=8, 30-20=10  │
│                                     │
│   Pattern found: 4, 6, 8, 10, ...   │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Identify the Pattern',
        content: 'The differences increase by 2 each time.',
        emoji: '📈',
        diagram: {
          type: 'pattern',
          content: `
┌─────────────────────────────────────┐
│     STEP 2: SPOT THE PATTERN        │
├─────────────────────────────────────┤
│                                     │
│   Differences: 4  →  6  →  8  → 10  │
│                  +2    +2    +2     │
│                                     │
│   ▓▓▓▓░░░░░░░░░░░░  4               │
│   ▓▓▓▓▓▓░░░░░░░░░░  6               │
│   ▓▓▓▓▓▓▓▓░░░░░░░░  8               │
│   ▓▓▓▓▓▓▓▓▓▓░░░░░░  10              │
│   ▓▓▓▓▓▓▓▓▓▓▓▓░░░░  12 (next)       │
│                                     │
│   Each difference is +2 more        │
│   than the previous one             │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Calculate the Answer',
        content: 'Add the next difference to the last number.',
        emoji: '🧮',
        diagram: {
          type: 'calculation',
          content: `
┌─────────────────────────────────────┐
│     STEP 3: FIND THE ANSWER         │
├─────────────────────────────────────┤
│                                     │
│   Last number: 30                   │
│   Next difference: 10 + 2 = 12      │
│                                     │
│        30                           │
│      + 12                           │
│      ────                           │
│        42                           │
│                                     │
│   ╔═════════════════════════════╗   │
│   ║   Answer: 42                ║   │
│   ╚═════════════════════════════╝   │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Bonus: The Formula',
        content: 'This sequence follows a special mathematical pattern.',
        emoji: '🎓',
        diagram: {
          type: 'formula',
          content: `
┌─────────────────────────────────────┐
│       BONUS: THE FORMULA            │
├─────────────────────────────────────┤
│                                     │
│   This is n(n+1) - "oblong numbers" │
│                                     │
│   n=1: 1×2 = 2  ✓                   │
│   n=2: 2×3 = 6  ✓                   │
│   n=3: 3×4 = 12 ✓                   │
│   n=4: 4×5 = 20 ✓                   │
│   n=5: 5×6 = 30 ✓                   │
│   n=6: 6×7 = 42 ✓                   │
│                                     │
│   ┌───┬───┐  These represent        │
│   │   │   │  rectangles with        │
│   │   │   │  sides n and n+1        │
│   └───┴───┘                         │
│                                     │
└─────────────────────────────────────┘`
        }
      }
    ],
    funFact: 'These are called "oblong numbers" - each represents a rectangle with sides n and n+1!'
  },
  {
    id: 'q5',
    category: 'quantitative',
    question: 'A store offers a 20% discount on a shirt priced at $80. After the discount, a 10% tax is added. What is the final price?',
    options: [
      '$64.00',
      '$70.40',
      '$72.00',
      '$74.80'
    ],
    correctAnswer: 1,
    explanation: 'Discount: $80 × 0.20 = $16. Price after discount: $64. Tax: $64 × 0.10 = $6.40. Final: $70.40',
    concept: 'Percentage Calculations',
    tip: 'Always apply discount first, then tax. Order matters!',
    difficulty: 'medium',
    steps: [
      {
        title: 'Understand the Order',
        content: 'Discounts are applied before taxes in retail calculations.',
        emoji: '📋',
        diagram: {
          type: 'flowchart',
          content: `
┌─────────────────────────────────────┐
│         CALCULATION ORDER           │
├─────────────────────────────────────┤
│                                     │
│   ┌──────────────┐                  │
│   │ Original $80 │                  │
│   └──────┬───────┘                  │
│          │                          │
│          ▼ Apply 20% OFF            │
│   ┌──────────────┐                  │
│   │ After Disc.  │                  │
│   └──────┬───────┘                  │
│          │                          │
│          ▼ Add 10% TAX              │
│   ┌──────────────┐                  │
│   │ Final Price  │                  │
│   └──────────────┘                  │
│                                     │
│   ORDER: Discount FIRST, Tax SECOND │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Calculate the Discount',
        content: '20% off means you pay 80% of the original price.',
        emoji: '💰',
        diagram: {
          type: 'calculation',
          content: `
┌─────────────────────────────────────┐
│     STEP 1: APPLY 20% DISCOUNT      │
├─────────────────────────────────────┤
│                                     │
│   Original Price: $80               │
│                                     │
│   Method 1: Calculate discount      │
│   20% of $80 = $80 × 0.20 = $16     │
│   $80 - $16 = $64                   │
│                                     │
│   Method 2: Direct calculation      │
│   Pay 80% → $80 × 0.80 = $64        │
│                                     │
│   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ $80 (100%)   │
│   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░ $64 (80%)    │
│                    ↑                │
│               20% saved             │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Calculate the Tax',
        content: '10% tax is added to the discounted price, not the original.',
        emoji: '📊',
        diagram: {
          type: 'calculation',
          content: `
┌─────────────────────────────────────┐
│       STEP 2: ADD 10% TAX           │
├─────────────────────────────────────┤
│                                     │
│   Discounted Price: $64             │
│                                     │
│   Tax = $64 × 10%                   │
│   Tax = $64 × 0.10                  │
│   Tax = $6.40                       │
│                                     │
│   ┌─────────────────────────────┐   │
│   │ Price:     $64.00           │   │
│   │ + Tax:    + $6.40           │   │
│   │           ─────────         │   │
│   │ Total:     $70.40           │   │
│   └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Verify with Shortcut',
        content: 'Multiply by 0.80 (discount) then by 1.10 (tax) in one step.',
        emoji: '✅',
        diagram: {
          type: 'verification',
          content: `
┌─────────────────────────────────────┐
│       SHORTCUT VERIFICATION         │
├─────────────────────────────────────┤
│                                     │
│   Combine both operations:          │
│                                     │
│   $80 × 0.80 × 1.10 = ?             │
│                                     │
│   $80 × 0.80 = $64   (after disc.)  │
│   $64 × 1.10 = $70.40 (after tax)   │
│                                     │
│   ╔═════════════════════════════╗   │
│   ║   Final Price = $70.40      ║   │
│   ╚═════════════════════════════╝   │
│                                     │
│   Pro tip: 0.80 × 1.10 = 0.88       │
│   So final = $80 × 0.88 = $70.40    │
│                                     │
└─────────────────────────────────────┘`
        }
      }
    ],
    funFact: 'You can combine both: $80 × 0.80 × 1.10 = $70.40 in one calculation!'
  },
  {
    id: 'q6',
    category: 'logical',
    question: 'If you rearrange the letters "CIFAIPC" you would have the name of a:',
    options: [
      'City',
      'Animal',
      'Ocean',
      'Country'
    ],
    correctAnswer: 2,
    explanation: 'CIFAIPC rearranges to PACIFIC, which is an ocean (the Pacific Ocean).',
    concept: 'Pattern Recognition - Anagrams',
    tip: 'Look for common letter combinations like "IC" or "FIC" that appear in familiar words.',
    difficulty: 'easy',
    steps: [
      {
        title: 'Identify the Letters',
        content: 'First, list all the available letters and note any duplicates.',
        emoji: '🔤',
        diagram: {
          type: 'letters',
          content: `
┌─────────────────────────────────────┐
│        AVAILABLE LETTERS            │
├─────────────────────────────────────┤
│                                     │
│   C I F A I P C                     │
│                                     │
│   ┌────┬────────────┐               │
│   │ C  │ appears 2× │               │
│   │ I  │ appears 2× │               │
│   │ F  │ appears 1× │               │
│   │ A  │ appears 1× │               │
│   │ P  │ appears 1× │               │
│   └────┴────────────┘               │
│                                     │
│   Total: 7 letters                  │
│   Word length: 7 letters            │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Look for Patterns',
        content: 'Search for common letter combinations that might appear in geographical names.',
        emoji: '🔍',
        diagram: {
          type: 'patterns',
          content: `
┌─────────────────────────────────────┐
│        FIND PATTERNS                │
├─────────────────────────────────────┤
│                                     │
│   Common endings to try:            │
│                                     │
│   -IC  ✓ (C and I available)        │
│   -FIC ✓ (F, I, C available)        │
│                                     │
│   Words ending in -IFIC or -ACIFIC? │
│                                     │
│   P + A + C + I + F + I + C         │
│   ↓                                 │
│   P-A-C-I-F-I-C                     │
│                                     │
│   This spells PACIFIC!              │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Verify the Word',
        content: 'Check that PACIFIC uses exactly the letters we have.',
        emoji: '✓',
        diagram: {
          type: 'verification',
          content: `
┌─────────────────────────────────────┐
│        VERIFY THE WORD              │
├─────────────────────────────────────┤
│                                     │
│   PACIFIC                           │
│   │││││││                           │
│   P A C I F I C                     │
│                                     │
│   Original: C I F A I P C           │
│   Sorted:   A C C F I I P           │
│                                     │
│   PACIFIC sorted: A C C F I I P     │
│                                     │
│   ┌─────────────────────────────┐   │
│   │ ✓ All letters match!        │   │
│   │ ✓ Uses every letter once    │   │
│   └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Identify the Category',
        content: 'PACIFIC is the name of an ocean - the largest on Earth!',
        emoji: '🌊',
        diagram: {
          type: 'answer',
          content: `
┌─────────────────────────────────────┐
│          THE ANSWER                 │
├─────────────────────────────────────┤
│                                     │
│       🌍 PACIFIC OCEAN 🌍            │
│                                     │
│   ┌─────────────────────────────┐   │
│   │   ~~~~~~~~~~~~~~~~~~~       │   │
│   │  ~ PACIFIC  OCEAN ~         │   │
│   │   ~~~~~~~~~~~~~~~~~~~       │   │
│   │      (largest ocean)        │   │
│   └─────────────────────────────┘   │
│                                     │
│   Category:                         │
│   ❌ City    ❌ Animal              │
│   ✓ OCEAN   ❌ Country             │
│                                     │
│   Answer: Ocean                     │
│                                     │
└─────────────────────────────────────┘`
        }
      }
    ],
    funFact: 'The Pacific Ocean covers more area than all land on Earth combined!'
  },
  {
    id: 'q7',
    category: 'verbal',
    question: 'Choose the word that is most OPPOSITE in meaning to "BENEVOLENT":',
    options: [
      'Generous',
      'Malicious',
      'Charitable',
      'Friendly'
    ],
    correctAnswer: 1,
    explanation: 'Benevolent means kind and well-meaning. Malicious means intending to do harm - the opposite meaning.',
    concept: 'Vocabulary - Antonyms',
    tip: 'Break down words: "bene" means good, "mal" means bad.',
    difficulty: 'medium',
    steps: [
      {
        title: 'Understand Word Roots',
        content: 'Latin roots help us decode word meanings.',
        emoji: '📚',
        diagram: {
          type: 'roots',
          content: `
┌─────────────────────────────────────┐
│          WORD ROOTS                 │
├─────────────────────────────────────┤
│                                     │
│   BENEVOLENT                        │
│   ┌────────┬────────────┐           │
│   │ BENE-  │ = good     │           │
│   │ -VOL-  │ = will     │           │
│   │ -ENT   │ = having   │           │
│   └────────┴────────────┘           │
│                                     │
│   = "Having good will"              │
│   = Kind, generous, well-meaning    │
│                                     │
│   Related words:                    │
│   • Benefit (good outcome)          │
│   • Benign (not harmful)            │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Identify Synonyms to Eliminate',
        content: 'Three options are similar to benevolent - not opposites!',
        emoji: '❌',
        diagram: {
          type: 'elimination',
          content: `
┌─────────────────────────────────────┐
│        ELIMINATE SYNONYMS           │
├─────────────────────────────────────┤
│                                     │
│   BENEVOLENT = kind, well-meaning   │
│                                     │
│   A) Generous                       │
│      = giving freely                │
│      ❌ Similar meaning (SYNONYM)   │
│                                     │
│   C) Charitable                     │
│      = generous to those in need    │
│      ❌ Similar meaning (SYNONYM)   │
│                                     │
│   D) Friendly                       │
│      = kind, showing goodwill       │
│      ❌ Similar meaning (SYNONYM)   │
│                                     │
│   These are NOT opposites!          │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Analyze "Malicious"',
        content: 'Malicious has the opposite root "mal-" meaning bad.',
        emoji: '🔍',
        diagram: {
          type: 'comparison',
          content: `
┌─────────────────────────────────────┐
│       COMPARE THE WORDS             │
├─────────────────────────────────────┤
│                                     │
│   BENEVOLENT         MALICIOUS      │
│   ┌──────────┐      ┌──────────┐    │
│   │ BENE-    │  vs  │ MAL-     │    │
│   │ = good   │      │ = bad    │    │
│   └──────────┘      └──────────┘    │
│                                     │
│   "Good will"   ←→   "Bad intent"   │
│   Kind          ←→   Harmful        │
│   Helpful       ←→   Destructive    │
│                                     │
│   Related "mal-" words:             │
│   • Malware (bad software)          │
│   • Malfunction (bad function)      │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Confirm the Antonym',
        content: 'Malicious is the exact opposite of benevolent.',
        emoji: '✅',
        diagram: {
          type: 'answer',
          content: `
┌─────────────────────────────────────┐
│         CORRECT ANSWER              │
├─────────────────────────────────────┤
│                                     │
│   BENEVOLENT ←──────→ MALICIOUS     │
│      ↑                    ↑         │
│   Good will           Bad intent    │
│   Kindness            Cruelty       │
│   Helpful             Harmful       │
│                                     │
│   ╔═════════════════════════════╗   │
│   ║  Answer: B) Malicious       ║   │
│   ╚═════════════════════════════╝   │
│                                     │
│   MEMORY TIP:                       │
│   BENE = GOOD (benefit, benign)     │
│   MAL = BAD (malware, malign)       │
│                                     │
└─────────────────────────────────────┘`
        }
      }
    ],
    funFact: 'Both words have Latin roots: "bene" means good, "mal" means bad!'
  },
  {
    id: 'q8',
    category: 'analytical',
    question: 'A cube is painted red on all sides and then cut into 27 smaller equal cubes. How many smaller cubes have exactly two sides painted?',
    options: [
      '6',
      '8',
      '12',
      '24'
    ],
    correctAnswer: 2,
    explanation: 'A 3×3×3 cube has 12 edge cubes (not corners). Each edge has 1 cube with exactly 2 painted sides.',
    concept: 'Geometry - 3D Shapes',
    tip: 'Visualize: Corners=3 sides, Edges=2 sides, Faces=1 side, Center=0 sides.',
    difficulty: 'hard',
    steps: [
      {
        title: 'Understand the Structure',
        content: 'A cube cut into 27 pieces is a 3×3×3 arrangement.',
        emoji: '🎲',
        diagram: {
          type: '3d-cube',
          content: `
┌─────────────────────────────────────┐
│        3×3×3 CUBE STRUCTURE         │
├─────────────────────────────────────┤
│                                     │
│       ┌───┬───┬───┐                 │
│      /   /   /   /│                 │
│     ┌───┬───┬───┐ │                 │
│    /   /   /   /│ ┤                 │
│   ┌───┬───┬───┐ │/│                 │
│   │   │   │   │ ┤ │                 │
│   ├───┼───┼───┤/│ ┤                 │
│   │   │   │   │ ┤/│                 │
│   ├───┼───┼───┤/│ │                 │
│   │   │   │   │ ┤/                  │
│   └───┴───┴───┘/                    │
│                                     │
│   Total small cubes: 3×3×3 = 27     │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Identify Position Types',
        content: 'Different positions have different numbers of painted faces.',
        emoji: '📐',
        diagram: {
          type: 'positions',
          content: `
┌─────────────────────────────────────┐
│      CUBE POSITION TYPES            │
├─────────────────────────────────────┤
│                                     │
│   ┌─────────────────────────────┐   │
│   │ CORNER cubes (8 total)      │   │
│   │ → 3 faces painted           │   │
│   │ → At cube corners           │   │
│   └─────────────────────────────┘   │
│                                     │
│   ┌─────────────────────────────┐   │
│   │ EDGE cubes (12 total)       │   │
│   │ → 2 faces painted ← TARGET! │   │
│   │ → On edges, not corners     │   │
│   └─────────────────────────────┘   │
│                                     │
│   ┌─────────────────────────────┐   │
│   │ FACE cubes (6 total)        │   │
│   │ → 1 face painted            │   │
│   │ → Center of each face       │   │
│   └─────────────────────────────┘   │
│                                     │
│   ┌─────────────────────────────┐   │
│   │ CENTER cube (1 total)       │   │
│   │ → 0 faces painted           │   │
│   │ → Hidden inside             │   │
│   └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Count Edge Cubes',
        content: 'A cube has 12 edges. Each edge has 1 middle cube (not at corners).',
        emoji: '🔢',
        diagram: {
          type: 'edges',
          content: `
┌─────────────────────────────────────┐
│         COUNTING EDGES              │
├─────────────────────────────────────┤
│                                     │
│          ●─────○─────●              │
│         /│    /     /│              │
│        ○ ○   ○     ○ ○              │
│       /  │  /     /  │              │
│      ●───○─┼──●  ●   │              │
│      │   │ │  │  │   ●              │
│      ○   ●─○──┼──○  /               │
│      │  /  │  │  │ ○                │
│      │ ○   │  │  │/                 │
│      ●─────○─────●                  │
│                                     │
│   ● = Corner (3 painted faces)      │
│   ○ = Edge (2 painted faces)        │
│                                     │
│   12 edges × 1 cube each = 12       │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Verify the Answer',
        content: 'Check that all 27 cubes are accounted for.',
        emoji: '✅',
        diagram: {
          type: 'verification',
          content: `
┌─────────────────────────────────────┐
│         VERIFICATION                │
├─────────────────────────────────────┤
│                                     │
│   Position    Painted   Count       │
│   ──────────  ───────   ─────       │
│   Corners     3 faces     8         │
│   Edges       2 faces    12 ←       │
│   Faces       1 face      6         │
│   Center      0 faces     1         │
│                         ─────       │
│   Total                  27 ✓       │
│                                     │
│   ╔═════════════════════════════╗   │
│   ║  Answer: 12 cubes have      ║   │
│   ║  exactly 2 painted sides    ║   │
│   ╚═════════════════════════════╝   │
│                                     │
└─────────────────────────────────────┘`
        }
      }
    ],
    funFact: 'The Rubik\'s Cube uses this same 3×3×3 structure with 27 smaller cubes!'
  },
  {
    id: 'q9',
    category: 'quantitative',
    question: 'If the ratio of boys to girls in a class is 3:5 and there are 40 students in total, how many girls are there?',
    options: [
      '15',
      '20',
      '24',
      '25'
    ],
    correctAnswer: 3,
    explanation: 'Total ratio parts = 3+5 = 8. Each part = 40÷8 = 5. Girls = 5×5 = 25.',
    concept: 'Ratios and Proportions',
    tip: 'First find total parts, then find value per part, then multiply!',
    difficulty: 'easy',
    steps: [
      {
        title: 'Understand Ratios',
        content: 'A ratio compares two quantities. Here, for every 3 boys, there are 5 girls.',
        emoji: '📊',
        diagram: {
          type: 'ratio',
          content: `
┌─────────────────────────────────────┐
│        UNDERSTANDING RATIOS         │
├─────────────────────────────────────┤
│                                     │
│   Ratio of Boys : Girls = 3 : 5     │
│                                     │
│   This means:                       │
│   ┌─────────────────────────────┐   │
│   │ For every 8 students:       │   │
│   │   👦👦👦     = 3 boys        │   │
│   │   👧👧👧👧👧 = 5 girls       │   │
│   └─────────────────────────────┘   │
│                                     │
│   The ratio tells us the PARTS,     │
│   not the actual numbers!           │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Find Total Parts',
        content: 'Add the ratio numbers to get total parts.',
        emoji: '➕',
        diagram: {
          type: 'calculation',
          content: `
┌─────────────────────────────────────┐
│       STEP 1: TOTAL PARTS           │
├─────────────────────────────────────┤
│                                     │
│   Boys  : Girls                     │
│     3   :   5                       │
│                                     │
│   Total parts = 3 + 5 = 8 parts     │
│                                     │
│   ▓▓▓░░░░░  (8 equal parts)         │
│   ↑↑↑ ↑↑↑↑↑                         │
│   3    5                            │
│   boys girls                        │
│                                     │
│   These 8 parts = 40 students       │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Find Value Per Part',
        content: 'Divide total students by total parts.',
        emoji: '➗',
        diagram: {
          type: 'calculation',
          content: `
┌─────────────────────────────────────┐
│      STEP 2: VALUE PER PART         │
├─────────────────────────────────────┤
│                                     │
│   Total students = 40               │
│   Total parts = 8                   │
│                                     │
│   Value of 1 part = 40 ÷ 8          │
│                   = 5 students      │
│                                     │
│   ┌─────────────────────────────┐   │
│   │ Each "part" in the ratio    │   │
│   │ represents 5 students       │   │
│   └─────────────────────────────┘   │
│                                     │
│   1 part = 5 students               │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Calculate Number of Girls',
        content: 'Multiply girls\' parts by value per part.',
        emoji: '✅',
        diagram: {
          type: 'answer',
          content: `
┌─────────────────────────────────────┐
│     STEP 3: COUNT THE GIRLS         │
├─────────────────────────────────────┤
│                                     │
│   Girls have 5 parts                │
│   Each part = 5 students            │
│                                     │
│   Girls = 5 × 5 = 25 students       │
│                                     │
│   Verification:                     │
│   Boys = 3 × 5 = 15 students        │
│   Girls = 5 × 5 = 25 students       │
│   Total = 15 + 25 = 40 ✓            │
│                                     │
│   ╔═════════════════════════════╗   │
│   ║  Answer: 25 girls           ║   │
│   ╚═════════════════════════════╝   │
│                                     │
└─────────────────────────────────────┘`
        }
      }
    ],
    funFact: 'Ratios are used everywhere - from recipes to mixing paint colors!'
  },
  {
    id: 'q10',
    category: 'logical',
    question: 'Looking at the series: 1, 4, 9, 16, 25, 36, ... what type of numbers are these?',
    options: [
      'Prime numbers',
      'Perfect squares',
      'Fibonacci numbers',
      'Triangular numbers'
    ],
    correctAnswer: 1,
    explanation: 'These are perfect squares: 1², 2², 3², 4², 5², 6², etc.',
    concept: 'Number Patterns',
    tip: 'Perfect squares are numbers that can be expressed as n×n.',
    difficulty: 'easy',
    steps: [
      {
        title: 'Analyze Each Number',
        content: 'Look at what each number in the sequence equals.',
        emoji: '🔍',
        diagram: {
          type: 'analysis',
          content: `
┌─────────────────────────────────────┐
│        ANALYZE THE SEQUENCE         │
├─────────────────────────────────────┤
│                                     │
│   Sequence: 1, 4, 9, 16, 25, 36     │
│                                     │
│   Let's factor each:                │
│   ┌─────────────────────────────┐   │
│   │  1 = 1 × 1 = 1²             │   │
│   │  4 = 2 × 2 = 2²             │   │
│   │  9 = 3 × 3 = 3²             │   │
│   │ 16 = 4 × 4 = 4²             │   │
│   │ 25 = 5 × 5 = 5²             │   │
│   │ 36 = 6 × 6 = 6²             │   │
│   └─────────────────────────────┘   │
│                                     │
│   Pattern: Each is n × n!           │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Visualize as Squares',
        content: 'Perfect squares form actual square shapes!',
        emoji: '⬛',
        diagram: {
          type: 'visual',
          content: `
┌─────────────────────────────────────┐
│       VISUAL REPRESENTATION         │
├─────────────────────────────────────┤
│                                     │
│   1 = 1²          4 = 2²            │
│   ┌─┐             ┌─┬─┐             │
│   │■│             │■│■│             │
│   └─┘             ├─┼─┤             │
│                   │■│■│             │
│                   └─┴─┘             │
│                                     │
│   9 = 3²          16 = 4²           │
│   ┌─┬─┬─┐         ┌─┬─┬─┬─┐         │
│   │■│■│■│         │■│■│■│■│         │
│   ├─┼─┼─┤         ├─┼─┼─┼─┤         │
│   │■│■│■│         │■│■│■│■│         │
│   ├─┼─┼─┤         ├─┼─┼─┼─┤         │
│   │■│■│■│         │■│■│■│■│         │
│   └─┴─┴─┘         ├─┼─┼─┼─┤         │
│                   │■│■│■│■│         │
│                   └─┴─┴─┴─┘         │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Eliminate Other Options',
        content: 'Compare with other number types to confirm.',
        emoji: '❌',
        diagram: {
          type: 'comparison',
          content: `
┌─────────────────────────────────────┐
│       COMPARE NUMBER TYPES          │
├─────────────────────────────────────┤
│                                     │
│   A) Prime numbers:                 │
│      2, 3, 5, 7, 11, 13...          │
│      ❌ Not matching                │
│                                     │
│   B) Perfect squares:               │
│      1, 4, 9, 16, 25, 36...         │
│      ✓ MATCHES EXACTLY!             │
│                                     │
│   C) Fibonacci numbers:             │
│      1, 1, 2, 3, 5, 8, 13...        │
│      ❌ Not matching                │
│                                     │
│   D) Triangular numbers:            │
│      1, 3, 6, 10, 15, 21...         │
│      ❌ Not matching                │
│                                     │
└─────────────────────────────────────┘`
        }
      },
      {
        title: 'Confirm the Answer',
        content: 'These are perfect squares - numbers formed by n × n.',
        emoji: '✅',
        diagram: {
          type: 'answer',
          content: `
┌─────────────────────────────────────┐
│         CORRECT ANSWER              │
├─────────────────────────────────────┤
│                                     │
│   ╔═════════════════════════════╗   │
│   ║  Answer: Perfect Squares    ║   │
│   ╚═════════════════════════════╝   │
│                                     │
│   Definition:                       │
│   A perfect square is an integer    │
│   that is the square of another     │
│   integer: n × n = n²               │
│                                     │
│   The sequence continues:           │
│   7² = 49                           │
│   8² = 64                           │
│   9² = 81                           │
│   10² = 100                         │
│   ...                               │
│                                     │
└─────────────────────────────────────┘`
        }
      }
    ],
    funFact: 'Perfect squares appear everywhere - from floor tiles to chess boards!'
  }
];

export const getCategoryIcon = (category: string): string => {
  switch (category) {
    case 'quantitative':
      return '📊';
    case 'logical':
      return '🧠';
    case 'verbal':
      return '📝';
    case 'analytical':
      return '🔍';
    default:
      return '📚';
  }
};

export const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'quantitative':
      return 'Quantitative';
    case 'logical':
      return 'Logical Reasoning';
    case 'verbal':
      return 'Verbal Ability';
    case 'analytical':
      return 'Analytical';
    default:
      return category;
  }
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'easy':
      return 'text-success';
    case 'medium':
      return 'text-accent';
    case 'hard':
      return 'text-warning';
    default:
      return 'text-muted-foreground';
  }
};
