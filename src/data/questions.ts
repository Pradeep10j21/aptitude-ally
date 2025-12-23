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
        title: 'Find the Original Speed',
        content: 'Speed = Distance ÷ Time = 240 km ÷ 4 hours = 60 km/h. This is our baseline speed.',
        emoji: '🚂'
      },
      {
        title: 'Calculate the New Speed',
        content: 'The train increases its speed by 20 km/h. New speed = 60 + 20 = 80 km/h.',
        emoji: '⚡'
      },
      {
        title: 'Apply the Time Formula',
        content: 'Time = Distance ÷ Speed = 240 km ÷ 80 km/h = 3 hours.',
        emoji: '⏱️'
      },
      {
        title: 'Verify Your Answer',
        content: 'Double-check: 80 km/h × 3 hours = 240 km ✓. The answer is 3 hours!',
        emoji: '✅'
      }
    ],
    gifUrl: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
    funFact: 'The fastest train in the world, the Shanghai Maglev, travels at 460 km/h - it would cover our 240 km in just 31 minutes!',
    reinforcementQuestion: {
      id: 'q1r',
      category: 'quantitative',
      question: 'A car travels 180 km in 3 hours. If it reduces its speed by 15 km/h, how long will it take to travel the same distance?',
      options: ['3.5 hours', '4 hours', '4.5 hours', '5 hours'],
      correctAnswer: 1,
      explanation: 'Original speed = 180/3 = 60 km/h. New speed = 60 - 15 = 45 km/h. New time = 180/45 = 4 hours.',
      concept: 'Speed, Distance, and Time',
      tip: 'This time we\'re decreasing speed, so time will increase!',
      difficulty: 'easy',
      steps: [
        { title: 'Find Original Speed', content: '180 ÷ 3 = 60 km/h', emoji: '🚗' },
        { title: 'Calculate New Speed', content: '60 - 15 = 45 km/h', emoji: '🐢' },
        { title: 'Find New Time', content: '180 ÷ 45 = 4 hours', emoji: '⏰' },
        { title: 'Verify', content: '45 × 4 = 180 km ✓', emoji: '✅' }
      ]
    }
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
        title: 'Identify the Premises',
        content: 'Premise 1: All roses are flowers (Roses ⊂ Flowers). Premise 2: Some flowers fade quickly.',
        emoji: '🌹'
      },
      {
        title: 'Understand "Some"',
        content: '"Some" in logic means "at least one, possibly all, possibly just a few." It doesn\'t tell us WHICH flowers.',
        emoji: '🤔'
      },
      {
        title: 'Check Each Option',
        content: 'The flowers that fade quickly could be daisies, tulips, or any flowers - we simply don\'t know if roses are included.',
        emoji: '🔍'
      },
      {
        title: 'Apply Logical Certainty',
        content: 'Since we can\'t determine if roses are among the flowers that fade, we cannot conclude anything with certainty.',
        emoji: '🧠'
      }
    ],
    gifUrl: 'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
    funFact: 'Syllogistic logic was invented by Aristotle over 2,300 years ago and is still the foundation of modern logical reasoning!',
    reinforcementQuestion: {
      id: 'q2r',
      category: 'logical',
      question: 'All cats are mammals. All mammals are warm-blooded. Which is definitely true?',
      options: [
        'All cats are warm-blooded',
        'Some cats are warm-blooded',
        'All warm-blooded animals are cats',
        'None can be concluded'
      ],
      correctAnswer: 0,
      explanation: 'Cats ⊂ Mammals ⊂ Warm-blooded, so all cats must be warm-blooded (transitive property).',
      concept: 'Syllogistic Reasoning',
      tip: 'When both statements use "All", you can chain them together!',
      difficulty: 'medium',
      steps: [
        { title: 'Chain the Logic', content: 'Cats → Mammals → Warm-blooded', emoji: '🐱' },
        { title: 'Apply Transitivity', content: 'If A includes B, and B includes C, then A includes C', emoji: '🔗' },
        { title: 'Conclude', content: 'All cats are definitely warm-blooded', emoji: '✅' },
        { title: 'Watch Out', content: 'But not all warm-blooded animals are cats!', emoji: '⚠️' }
      ]
    }
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
    tip: 'Break down unfamiliar words: "ephemera" relates to things that exist briefly, like mayflies (which live only one day)!',
    difficulty: 'medium',
    steps: [
      {
        title: 'Define Ephemeral',
        content: 'Ephemeral means lasting for a very short time, fleeting, or temporary in nature.',
        emoji: '🦋'
      },
      {
        title: 'Eliminate Opposites',
        content: '"Eternal" means lasting forever - the exact opposite of ephemeral. Cross it out!',
        emoji: '❌'
      },
      {
        title: 'Check Remaining Options',
        content: '"Significant" (important) and "Tangible" (touchable) don\'t relate to time duration.',
        emoji: '🔍'
      },
      {
        title: 'Identify the Match',
        content: '"Transient" means temporary or brief - exactly what ephemeral means! They\'re synonyms.',
        emoji: '✨'
      }
    ],
    gifUrl: 'https://media.giphy.com/media/l4FGni1RBAR2OWsGk/giphy.gif',
    funFact: 'The word "ephemeral" comes from Greek "ephemeros" meaning "lasting only a day" - originally used to describe mayflies!'
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
    tip: 'When you see a number sequence, always check the differences first. If those differ, check the differences of differences!',
    difficulty: 'easy',
    steps: [
      {
        title: 'Find First-Level Differences',
        content: '6-2=4, 12-6=6, 20-12=8, 30-20=10. The differences are: 4, 6, 8, 10...',
        emoji: '🔢'
      },
      {
        title: 'Spot the Pattern',
        content: 'The differences increase by 2 each time: 4→6→8→10→12',
        emoji: '📈'
      },
      {
        title: 'Apply the Pattern',
        content: 'Next difference should be 10 + 2 = 12. So the next number is 30 + 12 = 42.',
        emoji: '🧮'
      },
      {
        title: 'Bonus: The Formula',
        content: 'This sequence is n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42!',
        emoji: '🎓'
      }
    ],
    gifUrl: 'https://media.giphy.com/media/3owzW5c1tPq63MPmWk/giphy.gif',
    funFact: 'This is called the "oblong numbers" sequence - each number represents the area of a rectangle with sides n and n+1!',
    reinforcementQuestion: {
      id: 'q4r',
      category: 'analytical',
      question: 'What number comes next: 1, 4, 9, 16, 25, ?',
      options: ['30', '36', '49', '32'],
      correctAnswer: 1,
      explanation: 'These are perfect squares: 1², 2², 3², 4², 5², 6² = 36',
      concept: 'Number Sequences',
      tip: 'These are perfect squares - very common in aptitude tests!',
      difficulty: 'easy',
      steps: [
        { title: 'Recognize the Pattern', content: '1=1², 4=2², 9=3², 16=4², 25=5²', emoji: '🔢' },
        { title: 'Continue the Sequence', content: 'Next is 6² = 36', emoji: '✅' },
        { title: 'Verify', content: '6 × 6 = 36 ✓', emoji: '🎯' },
        { title: 'Remember', content: 'Perfect squares: 1, 4, 9, 16, 25, 36, 49...', emoji: '📝' }
      ]
    }
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
    explanation: 'Discount: $80 × 0.20 = $16. Price after discount: $80 - $16 = $64. Tax: $64 × 0.10 = $6.40. Final: $64 + $6.40 = $70.40',
    concept: 'Percentage Calculations',
    tip: 'Always apply discount first, then tax. Order matters! Multiply by 0.8 for 20% off, then by 1.1 for 10% tax.',
    difficulty: 'medium',
    steps: [
      {
        title: 'Calculate the Discount',
        content: '20% of $80 = $80 × 0.20 = $16. This is the amount saved.',
        emoji: '💰'
      },
      {
        title: 'Apply the Discount',
        content: 'Price after discount = $80 - $16 = $64. Or directly: $80 × 0.80 = $64.',
        emoji: '🏷️'
      },
      {
        title: 'Calculate the Tax',
        content: '10% tax on $64 = $64 × 0.10 = $6.40.',
        emoji: '📋'
      },
      {
        title: 'Find Final Price',
        content: 'Final price = $64 + $6.40 = $70.40. Or: $64 × 1.10 = $70.40.',
        emoji: '🛒'
      }
    ],
    gifUrl: 'https://media.giphy.com/media/67ThRZlYBvibtdF9JH/giphy.gif',
    funFact: 'You can combine both operations: $80 × 0.80 × 1.10 = $70.40. This is called "successive percentage" calculation!',
    reinforcementQuestion: {
      id: 'q5r',
      category: 'quantitative',
      question: 'A laptop priced at $500 has a 15% discount. Then 8% tax is added. What\'s the final price?',
      options: ['$425.00', '$459.00', '$467.00', '$475.00'],
      correctAnswer: 1,
      explanation: '$500 × 0.85 = $425. Then $425 × 1.08 = $459.',
      concept: 'Percentage Calculations',
      tip: 'Quick method: 500 × 0.85 × 1.08 = 459',
      difficulty: 'medium',
      steps: [
        { title: 'Apply Discount', content: '$500 × 0.85 = $425', emoji: '💸' },
        { title: 'Apply Tax', content: '$425 × 1.08 = $459', emoji: '📊' },
        { title: 'Verify', content: '500 × 0.85 × 1.08 = 459 ✓', emoji: '✅' },
        { title: 'Remember', content: 'Discount first, then tax!', emoji: '📝' }
      ]
    }
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
    concept: 'Pattern Recognition',
    tip: 'Look for common letter combinations like "IC" or "FIC" that appear in familiar words.',
    difficulty: 'easy',
    steps: [
      {
        title: 'Identify Available Letters',
        content: 'We have: C, I, F, A, I, P, C - including two Cs and two Is.',
        emoji: '🔤'
      },
      {
        title: 'Look for Patterns',
        content: 'Common endings like "-IC" or "-FIC" often appear in geographical names.',
        emoji: '🔍'
      },
      {
        title: 'Try Combinations',
        content: 'P-A-C-I-F-I-C uses all letters exactly. Let\'s check: P, A, C, I, F, I, C ✓',
        emoji: '🧩'
      },
      {
        title: 'Identify the Answer',
        content: 'PACIFIC is an ocean - the largest ocean on Earth! Answer: Ocean.',
        emoji: '🌊'
      }
    ],
    gifUrl: 'https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif',
    funFact: 'The Pacific Ocean covers more area than all the land on Earth combined - about 165 million square kilometers!'
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
    tip: 'Break down "benevolent": "bene" means good (like in "benefit"), "volent" relates to will. It means "good-willed."',
    difficulty: 'medium',
    steps: [
      {
        title: 'Define Benevolent',
        content: 'Benevolent means kind, generous, and having a desire to do good for others.',
        emoji: '💝'
      },
      {
        title: 'Eliminate Synonyms',
        content: '"Generous," "Charitable," and "Friendly" are all similar to benevolent - not opposites!',
        emoji: '❌'
      },
      {
        title: 'Analyze "Malicious"',
        content: 'Malicious means having intent to harm others, wishing ill will - the exact opposite!',
        emoji: '🔍'
      },
      {
        title: 'Confirm the Antonym',
        content: 'Benevolent (good intentions) ↔ Malicious (harmful intentions). Perfect opposites!',
        emoji: '✅'
      }
    ],
    gifUrl: 'https://media.giphy.com/media/3oKIPa2TdahY8LAAxy/giphy.gif',
    funFact: 'Both words have Latin roots: "bene" means good, "mal" means bad. Many English antonym pairs follow this pattern!'
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
    explanation: 'A 3×3×3 cube has 12 edge cubes (not corners, not faces). Each edge has 1 cube with exactly 2 painted sides, and there are 12 edges.',
    concept: 'Geometry - 3D Shapes',
    tip: 'Visualize: Corners have 3 painted sides, edges have 2, faces have 1, and the center has 0. Count each type!',
    difficulty: 'hard',
    steps: [
      {
        title: 'Understand the Structure',
        content: 'A 3×3×3 cube divided into 27 smaller cubes. Each small cube can have 0, 1, 2, or 3 painted faces.',
        emoji: '🎲'
      },
      {
        title: 'Identify Corner Cubes',
        content: 'Corner cubes have 3 painted faces. A cube has 8 corners, so 8 cubes with 3 painted faces.',
        emoji: '📐'
      },
      {
        title: 'Find Edge Cubes (2 faces)',
        content: 'Edge cubes (not corners) have 2 painted faces. Each edge has 1 such cube, and a cube has 12 edges. So 12 cubes!',
        emoji: '✨'
      },
      {
        title: 'Verify Total',
        content: '8 corners (3 faces) + 12 edges (2 faces) + 6 face centers (1 face) + 1 center (0 faces) = 27 ✓',
        emoji: '🧮'
      }
    ],
    gifUrl: 'https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif',
    funFact: 'This classic puzzle is used in IQ tests worldwide! The Rubik\'s Cube uses the same 3×3×3 structure with 27 smaller cubes.'
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
