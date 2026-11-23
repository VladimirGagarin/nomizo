export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore/' },
  { label: 'Think Lab', to: '/think-lab/' },
  { label: 'Learn', to: '/learn/' },
  { label: 'Real Life', to: '/real-life/' },
  { label: 'Philosophy', to: '/philosophy/' },
  { label: 'Daily Question', to: '/daily-question/' },
  { label: 'My NOMIZO', to: '/my-nomizo/' },
]

export const destinations = [
  {
    number: '01',
    greek: 'Ανακάλυψε',
    title: 'Explore',
    text: 'Interesting questions, ideas and thinking concepts. Follow a curiosity, not a syllabus.',
    to: '/explore/',
  },
  {
    number: '02',
    greek: 'Εργαστήριο',
    title: 'Think Lab',
    text: 'Puzzles, mysteries and reasoning challenges that reward a second look.',
    to: '/think-lab/',
  },
  {
    number: '03',
    greek: 'Μάθε',
    title: 'Learn',
    text: 'Structured courses that build thinking skills one clear idea at a time.',
    to: '/learn/',
  },
  {
    number: '04',
    greek: 'Στην πράξη',
    title: 'Real Life',
    text: 'Practise decisions in situations that actually resemble the world outside.',
    to: '/real-life/',
  },
  {
    number: '05',
    greek: 'Φιλοσοφία',
    title: 'Philosophy',
    text: 'Wisdom, human nature and life’s big questions, made practical.',
    to: '/philosophy/',
  },
]

export const thinkLabSections = [
  {
    number: '01',
    icon: '◇',
    title: 'Logic Puzzles',
    greek: 'Λογικά',
    text: 'Solve problems using logical reasoning.',
    sample: 'Three boxes are labelled apples, oranges and mixed. Every label is wrong. Which box do you open first?',
    difficulty: 'Beginner',
    to: '/think-lab/',
    problems: [
      {
        difficulty: 'Beginner',
        prompt: 'Three boxes are labelled apples, oranges and mixed. Every label is wrong. Which box do you open first?',
        answer: 'Open the box labelled “mixed”. Since every label is wrong, it must contain only apples or only oranges. The fruit you pull out identifies that box, and the other two labels follow by elimination.',
        hint: 'Start with the label that cannot be true in either pure direction.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Two guards stand by two doors. One always lies, the other always tells the truth. One door is safe. You may ask one guard one question. What do you ask?',
        answer: 'Ask either guard: “Would the other guard say your door is safe?” Then choose the opposite door. The lie and the truth cancel out, so both guards point to the unsafe door.',
        hint: 'Make the lie and the truth cancel each other out.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Three switches outside a closed room control one bulb inside. You may flip the switches however you like, but you can enter the room only once. How do you identify the right switch?',
        answer: 'Turn switch 1 on for a few minutes, then turn it off and turn switch 2 on. Enter: a lit bulb means switch 2; a dark but warm bulb means switch 1; a dark cold bulb means switch 3.',
        hint: 'A bulb can tell you about time as well as light.',
      },
      {
        difficulty: 'Beginner',
        prompt: 'If all roses are flowers, are all flowers roses?',
        answer: 'No. “All roses are flowers” only says roses sit inside the larger group of flowers. It does not say the groups are identical.',
        hint: 'Draw one circle inside another.',
      },
      {
        difficulty: 'Beginner',
        prompt: 'If two events happen together, does one necessarily cause the other?',
        answer: 'No. They may share a hidden cause, or the pairing may be coincidence. Correlation alone does not establish causation.',
        hint: 'Look for a third factor.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Can a statement be logically correct but still lead to a false conclusion?',
        answer: 'Yes. Valid reasoning from false premises can produce a false conclusion. Logic checks the structure, not the truth of the starting points.',
        hint: 'Separate validity from soundness.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'If a person tells the truth once, does that mean everything they say is true?',
        answer: 'No. One true statement is evidence about that statement, not a guarantee about every future claim. Trust should track the record, not a single moment.',
        hint: 'A sample is not a pattern.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'A shop reduces a product from KSh 10,000 to KSh 7,000. Is that automatically a good deal?',
        answer: 'Not automatically. You still need the real market price, whether you need the item, and whether the “original” price was inflated. A discount is only good relative to a fair baseline.',
        hint: 'Ask: 30% off what?',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'If you cannot prove something is false, does that mean it is true?',
        answer: 'No. Lack of disproof is not proof. The burden of evidence sits with the claim being made, not with everyone who doubts it.',
        hint: 'Absence of disproof is not proof.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Can two people reach different conclusions using the same information?',
        answer: 'Yes. They may weigh values differently, use different assumptions, or reason from different background beliefs. Same data does not force identical interpretation.',
        hint: 'Check the hidden premises each person adds.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'If something has happened every day for a year, is it guaranteed to happen tomorrow?',
        answer: 'No. Past regularity supports expectation, not certainty. Induction gives probability, not logical guarantee.',
        hint: 'The sun rising is a habit, not a contract.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Can a good argument have a conclusion you disagree with?',
        answer: 'Yes. The quality of an argument depends on its premises and structure, not on whether you like the conclusion. Discomfort is not a refutation.',
        hint: 'Test the argument, not your reaction.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'How can you recognise an argument that sounds convincing but makes no sense?',
        answer: 'Strip it to premises and conclusion. Check whether the premises are true, whether the conclusion actually follows, and whether key words shift meaning mid-argument.',
        hint: 'Rhetoric is packaging; logic is the contents.',
      },
    ],
  },
  {
    number: '02',
    icon: '✳',
    title: 'Brain Teasers',
    greek: 'Αινίγματα',
    text: 'Challenge assumptions and patterns.',
    sample: 'A word becomes shorter when you add two letters to it. What is the word?',
    difficulty: 'Intermediate',
    to: '/think-lab/',
    problems: [
      {
        difficulty: 'Beginner',
        prompt: 'What has hands but cannot clap?',
        answer: 'A clock.',
        hint: 'Think of a face that is not a face.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'A word becomes shorter when you add two letters to it. What is the word?',
        answer: 'The word “short”. Add “er” and it becomes “shorter”.',
        hint: 'The clue is about the word itself.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'A man pushes his car to a hotel and immediately says, “I’m bankrupt.” Why?',
        answer: 'He is playing Monopoly. His car token lands on a hotel he cannot afford, so he is bankrupt.',
        hint: 'The car is not a real car.',
      },
      {
        difficulty: 'Beginner',
        prompt: 'How would you escape a room with no doors and no windows?',
        answer: 'Question the framing. The room may have an open ceiling, a trapdoor, or the “room” may be imaginary. Sealed-room puzzles usually hide an assumption in the wording.',
        hint: 'Which wall did you assume was solid?',
      },
      {
        difficulty: 'Beginner',
        prompt: 'You have eight identical-looking balls, but one is heavier. How can you find it using a balance scale only twice?',
        answer: 'Weigh three against three. If they balance, weigh the remaining two. If one side is heavier, take those three and weigh one against one; the heavier side, or a balance, identifies the ball.',
        hint: 'Split into three groups, not two.',
      },
      {
        difficulty: 'Beginner',
        prompt: 'Why might the obvious solution be the wrong solution?',
        answer: 'Because the obvious path follows the framing you were given. If the framing is wrong, the obvious answer solves the wrong problem.',
        hint: 'Check the question before the answer.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'How can you solve a problem when you don’t know where to begin?',
        answer: 'Describe the problem precisely: what is known, what is unknown, and what a solution would look like. Then try a smaller version of the same problem.',
        hint: 'A clear problem is half a solution.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Can removing something solve a problem better than adding something?',
        answer: 'Yes. Many problems come from excess — too many steps, rules, parts or assumptions. Subtraction can reveal the simplest workable system.',
        hint: 'Ask what you can take away.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'A farmer needs to cross a river with a wolf, a goat and a cabbage. How can he transport all three safely?',
        answer: 'Take the goat first. Return alone, take the wolf, bring the goat back. Take the cabbage across, return alone, then take the goat. The goat is never left with the wolf or the cabbage.',
        hint: 'The goat is the key — and may need to come back.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'How would you identify a problem that nobody else has noticed?',
        answer: 'Look for friction people have normalised: workarounds, complaints treated as jokes, or steps everyone accepts without asking why. Unnoticed problems hide inside habits.',
        hint: 'Watch what people tolerate.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'If a solution works today but creates a bigger problem tomorrow, is it really a solution?',
        answer: 'It is a patch, not a solution. A real solution should be judged across time and side effects, not only by immediate relief.',
        hint: 'Ask what the fix costs later.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Can you solve a difficult problem by asking a simpler question?',
        answer: 'Often yes. A simpler question can expose the core structure. Solve the skeleton first, then add the details back.',
        hint: 'Find the smallest version that still matters.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'What would you do if every available solution seemed to make things worse?',
        answer: 'Re-examine the framing. If all options fail, the problem may be misdefined, the constraints may be false, or gathering more information may be the least bad move.',
        hint: 'When every door is locked, check the walls.',
      },
    ],
  },
  {
    number: '03',
    icon: '◎',
    title: 'Mystery Room',
    greek: 'Δωμάτιο μυστηρίου',
    text: 'Investigate evidence, behaviour and hidden motives.',
    sample: 'A window is broken, a lamp is warm and there are no footprints. What happened first?',
    difficulty: 'Intermediate',
    to: '/think-lab/',
    problems: [
      {
        difficulty: 'Beginner',
        prompt: 'A room is locked from the inside. A rope hangs from the ceiling and a puddle lies beneath it. There is no chair or box. How did the person reach the rope?',
        answer: 'They stood on a block of ice. It melted, leaving the puddle.',
        hint: 'Something solid can disappear without being removed.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'A window is broken, glass lies outside, a lamp is warm and there are no footprints in fresh snow. What likely happened?',
        answer: 'The glass outside suggests the window was broken from inside. The warm lamp was on recently. The unmarked snow suggests the snow fell after the break, covering any tracks.',
        hint: 'Order the events before judging the evidence.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'A man is found dead in a field with an unopened package. There are no footprints leading to the body. What happened?',
        answer: 'The package is a parachute that failed to open. He fell from a plane, so there are no footprints leading to the body.',
        hint: 'Ask where the person came from, not where they walked.',
      },
      {
        difficulty: 'Beginner',
        prompt: 'Why do people sometimes defend opinions they know are wrong?',
        answer: 'Because the opinion is tied to identity, belonging or pride. Admitting error can feel like losing face, so the mind protects the self instead of the truth.',
        hint: 'Ask what the belief is protecting.',
      },
      {
        difficulty: 'Beginner',
        prompt: 'Why do we care so much about what other people think of us?',
        answer: 'Humans evolved in groups where reputation affected safety and cooperation. Social approval still feels like survival, even when the stakes are small.',
        hint: 'Old wiring, modern world.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Can your emotions change how you remember an event?',
        answer: 'Yes. Memory is reconstructive. Mood at recall, later information and current beliefs can all reshape what you remember feeling and seeing.',
        hint: 'Memory is a retelling, not a recording.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Why do people follow crowds even when they disagree with them?',
        answer: 'Conformity reduces social risk. When unsure, people treat the crowd as information; when sure, they may still fear standing out.',
        hint: 'Separate “they know something” from “I don’t want to be alone.”',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Why is it easier to notice other people’s mistakes than our own?',
        answer: 'We judge others by their actions but ourselves by our intentions. Distance also makes patterns visible that self-involvement hides.',
        hint: 'You see their behaviour; you feel your reasons.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Do people become more honest when nobody is watching?',
        answer: 'Not necessarily. Some behave better when watched; others behave better when anonymous because reputation pressure disappears. Honesty depends on internalised values, not only surveillance.',
        hint: 'Ask whether the conscience is internal or external.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Why do we sometimes mistake confidence for intelligence?',
        answer: 'Confidence is easy to observe; competence is not. Fluent, certain speech feels like knowledge, so we use certainty as a shortcut for ability.',
        hint: 'Certainty is a style, not a score.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Can a person influence your decisions without you noticing?',
        answer: 'Yes. Framing, defaults, social proof, anchoring and repeated exposure can steer choices below awareness. The influence feels like your own preference.',
        hint: 'Look at the options you were given, not only the one you picked.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Why do people judge others before getting to know them?',
        answer: 'Fast categorisation saves mental effort. Stereotypes and first impressions offer cheap predictions, even when they are wrong.',
        hint: 'The brain prefers a quick story to a slow investigation.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Are you really choosing freely, or are your choices being shaped by your environment?',
        answer: 'Both. Choices are real, but the menu, defaults, incentives and culture shape what feels available. Freedom includes noticing the shaping.',
        hint: 'Freedom is not the absence of influence; it is awareness of it.',
      },
    ],
  },
  {
    number: '04',
    icon: '△',
    title: 'Spot the Flaw',
    greek: 'Βρες το λάθος',
    text: 'Identify faulty arguments.',
    sample: 'Either we ban cars or the city becomes unlivable. We will not ban cars, so the city will become unlivable. What is the flaw?',
    difficulty: 'Advanced',
    to: '/think-lab/',
    problems: [
      {
        difficulty: 'Beginner',
        prompt: 'Everyone who studied passed. Ana passed. Therefore Ana studied. What is wrong with that step?',
        answer: 'It affirms the consequent. Studying guarantees passing in the premise, but passing does not guarantee studying; Ana may have passed another way.',
        hint: 'Check whether the arrow runs in the direction you need.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'This remedy worked for my aunt, so it will work for everyone. What is missing?',
        answer: 'A single case is not a representative sample. Anecdotes can suggest a hypothesis, but they cannot establish a general rule.',
        hint: 'One story is a starting point, not a survey.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Either we ban cars or the city becomes unlivable. We will not ban cars, so the city will become unlivable. What is the flaw?',
        answer: 'The argument is valid in form but rests on a false dilemma. There may be other ways to keep the city livable besides banning cars.',
        hint: 'A valid shape can still carry a false premise.',
      },
      {
        difficulty: 'Beginner',
        prompt: 'If everyone believes something, does that make it true?',
        answer: 'No. Popularity measures agreement, not evidence. Large groups have shared illusions, incentives and blind spots.',
        hint: 'Count reasons, not believers.',
      },
      {
        difficulty: 'Beginner',
        prompt: 'How can you tell the difference between a fact and an opinion?',
        answer: 'A fact is a claim that can be checked against evidence and is true or false regardless of preference. An opinion expresses judgement, taste or interpretation. Check whether the claim is verifiable.',
        hint: 'Ask: could evidence settle this?',
      },
      {
        difficulty: 'Beginner',
        prompt: 'Can a person be intelligent and still believe something false?',
        answer: 'Yes. Intelligence is a capacity, not a guarantee. Smart people can rationalise, lack information, or protect identities with sophisticated arguments.',
        hint: 'Skill at reasoning is not immunity to error.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'If something appears online thousands of times, does that make it reliable?',
        answer: 'No. Repetition can be coordination, copying or algorithmic amplification. Many copies may trace back to one unverified source.',
        hint: 'Find the original source, not the echo.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Why do we sometimes believe information that supports what we already think?',
        answer: 'Confirmation bias makes agreeing information feel fluent and right, while disagreeing information triggers scrutiny. Belief protects itself by selective attention.',
        hint: 'Notice what you didn’t search for.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Can a photograph tell a lie?',
        answer: 'Yes. Cropping, staging, timing, captions and editing can mislead without altering pixels. A photo shows a frame, not the whole event.',
        hint: 'Ask what is outside the frame.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Should you trust information simply because an expert said it?',
        answer: 'Expertise is good evidence, not a trump card. Check whether the claim is inside their field, whether other experts agree, and whether they show their reasoning.',
        hint: 'Trust the method, not only the title.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'What evidence would make you change your mind about something you strongly believe?',
        answer: 'Evidence that is independent, reproducible, and stronger than the reasons you currently hold. If you cannot name any such evidence, the belief may be unfalsifiable.',
        hint: 'Name the evidence before you need it.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Is the first explanation you hear usually the correct one?',
        answer: 'Not usually. First explanations are often simple, available and emotionally satisfying. Correctness requires checking alternatives, not speed.',
        hint: 'The first story is a hypothesis, not a verdict.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'How do you know when you are being manipulated?',
        answer: 'Watch for urgency, flattery, fear, false dilemmas and pressure to skip verification. Manipulation tries to make you decide before you can think.',
        hint: 'If you’re rushed, pause.',
      },
    ],
  },
  {
    number: '05',
    icon: '≠',
    title: 'What Doesn’t Add Up?',
    greek: 'Δεν ταιριάζει',
    text: 'Find inconsistencies and weigh decisions.',
    sample: 'A poster says 50% off, plus another 50%, so the jacket is free. Where does the arithmetic slip?',
    difficulty: 'Beginner',
    to: '/think-lab/',
    problems: [
      {
        difficulty: 'Beginner',
        prompt: 'A poster says 50% off, plus another 50%, so the jacket is free. Where does the arithmetic slip?',
        answer: 'The second 50% applies to the reduced price, not the original. You pay 25% of the original, so the total saving is 75%, not 100%.',
        hint: 'Ask “50% of what?” each time.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'A sign says prices are reduced by 200%. Why is that impossible?',
        answer: 'A reduction cannot exceed 100% of the original price. Beyond that the shop would owe you money; the sign is either a mistake or a trick.',
        hint: 'A price can fall to zero, but not below it by a percentage of itself.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'One survey says 9 out of 10 dentists recommend brand X; another says 9 out of 10 recommend brand Y. Someone concludes most dentists recommend both. What is missing?',
        answer: 'The surveys may use different samples, questions or definitions of “recommend”. Without knowing overlap and method, the combined claim does not follow.',
        hint: 'Two statistics are not one statistic.',
      },
      {
        difficulty: 'Beginner',
        prompt: 'Would you choose a guaranteed small reward or a chance at a much bigger one?',
        answer: 'It depends on expected value, your ability to absorb loss, and how many times you can play. A one-shot ruinous risk differs from a repeatable positive-expectation bet.',
        hint: 'Ask: can I survive the downside?',
      },
      {
        difficulty: 'Beginner',
        prompt: 'Is the cheapest option always the most economical?',
        answer: 'No. Price is one cost. Durability, maintenance, time and replacement can make a cheap option expensive over its life.',
        hint: 'Count the whole cost, not the sticker.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Should you follow your heart or your head when making an important decision?',
        answer: 'Use both. Emotions tell you what matters; reasoning checks what is feasible and what follows. A good decision integrates values with evidence.',
        hint: 'Heart sets the destination; head checks the road.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'How much should you risk to achieve something you really want?',
        answer: 'Risk what you can afford to lose without destroying your ability to keep playing. Desire does not change the size of the downside.',
        hint: 'Wanting it badly is not a risk budget.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'If you have already spent money on something that is failing, should you continue investing in it?',
        answer: 'Usually no. Past spending is sunk; the decision should compare future costs and future benefits only. Continuing to “save” the past often wastes the future.',
        hint: 'The money is gone; the choice is forward.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Is doing nothing also a decision?',
        answer: 'Yes. Inaction has consequences and opportunity costs. Choosing not to choose is still a choice with outcomes.',
        hint: 'Silence is an answer.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Would you rather be happy today or make a sacrifice for a better tomorrow?',
        answer: 'There is no universal answer. The question hides a trade-off between present wellbeing and future optionality. A good life usually needs both, weighted by circumstance.',
        hint: 'Ask what tomorrow’s self would thank you for.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'How do you make a good decision when you don’t have all the information?',
        answer: 'Decide under uncertainty: identify what you know, what you assume, what would change your mind, and what reversibility costs. Prefer options that keep learning possible.',
        hint: 'Good decisions are processes, not guarantees.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'When should you walk away from an opportunity?',
        answer: 'When expected costs exceed expected benefits, when it violates your constraints or values, or when continuing is driven by sunk cost rather than future value.',
        hint: 'Walk away from the story, not the spreadsheet.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Can a good decision produce a bad result?',
        answer: 'Yes. Outcomes depend on luck and hidden factors. Judge decisions by the information and reasoning available at the time, not only by the result.',
        hint: 'Separate process quality from outcome luck.',
      },
    ],
  },
  {
    number: '06',
    icon: '↗',
    title: 'Lateral Thinking',
    greek: 'Πλάγια σκέψη',
    text: 'Discover unconventional solutions and examine life’s big questions.',
    sample: 'A woman shoots her husband, holds him under water and hangs him, yet they dine together afterwards. How?',
    difficulty: 'Advanced',
    to: '/think-lab/',
    problems: [
      {
        difficulty: 'Beginner',
        prompt: 'How can you drop a raw egg onto a concrete floor without cracking it?',
        answer: 'Concrete floors are very hard to crack with a raw egg. The egg breaks; the floor does not.',
        hint: 'Read which object is supposed to crack.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'A person walks into a room with no windows and finds a puddle of water. No rain fell. Explain it.',
        answer: 'Something made of ice melted in the room — for example an ice sculpture or a block of ice brought in earlier.',
        hint: 'Water can arrive as a solid.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'A woman shoots her husband, holds him under water and hangs him, yet they dine together afterwards. How?',
        answer: 'She is a photographer. She shoots his picture, develops it in liquid and hangs it to dry. Then they dine together.',
        hint: 'The verbs belong to another craft.',
      },
      {
        difficulty: 'Beginner',
        prompt: 'What does it mean to live a good life?',
        answer: 'Different traditions answer differently: virtue, flourishing, duty, pleasure, meaning or contribution. A workable answer is a life you can reflect on and endorse, not merely survive.',
        hint: 'Ask what you would want said at the end.',
      },
      {
        difficulty: 'Beginner',
        prompt: 'Is happiness something we find or something we create?',
        answer: 'Both. Conditions matter, but attention, habits and interpretation shape experience. Happiness is partly discovered and partly practised.',
        hint: 'Some is weather; some is sailing.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Can a person be successful but still have an unhappy life?',
        answer: 'Yes. External success measures achievement; happiness measures experience. They can diverge when success costs relationships, health or meaning.',
        hint: 'Success is a scoreboard; happiness is a climate.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Is it better to know an uncomfortable truth or live comfortably with a lie?',
        answer: 'Usually truth, because lies distort future decisions and relationships. But timing, kindness and readiness matter; truth is a responsibility, not a weapon.',
        hint: 'Ask what the truth lets you do.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'Do we need suffering to appreciate happiness?',
        answer: 'Contrast helps, but suffering is not a requirement for joy. Meaning can grow through difficulty without romanticising pain.',
        hint: 'Contrast teaches; it need not torture.',
      },
      {
        difficulty: 'Intermediate',
        prompt: 'What makes an action morally right or wrong?',
        answer: 'Major frameworks weigh consequences, duties, character or care. A practical test asks about harm, fairness, honesty and what kind of person the action makes you.',
        hint: 'Try more than one moral lens.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Are we truly free if our choices are influenced by our upbringing and surroundings?',
        answer: 'Influence is not the same as compulsion. Freedom can mean acting from your own reasons, even if those reasons were shaped. Awareness of shaping expands freedom.',
        hint: 'A shaped chooser can still choose.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Can you forgive someone without trusting them again?',
        answer: 'Yes. Forgiveness releases resentment; trust is a prediction about future behaviour. They are separate decisions and can move independently.',
        hint: 'Letting go is not reopening the door.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'Is having more always better than having enough?',
        answer: 'No. Beyond sufficiency, more can add complexity, comparison and anxiety. Enough is a moving target, but chasing more without a target rarely satisfies.',
        hint: 'Define enough before counting more.',
      },
      {
        difficulty: 'Advanced',
        prompt: 'If life is temporary, what makes it meaningful?',
        answer: 'Temporariness can sharpen meaning rather than erase it. Relationships, creation, understanding and contribution matter because they are finite and shared.',
        hint: 'Scarcity is part of value.',
      },
    ],
  },
]

export const courses = [
  {
    tag: 'Course 01',
    title: 'Questions First',
    text: 'Learn to turn a vague wonder into a question you can actually investigate. Six short lessons.',
    to: '/learn/',
  },
  {
    tag: 'Course 02',
    title: 'Evidence & Assumptions',
    text: 'Separate what you observed from what you added. Practice with everyday claims and headlines.',
    to: '/learn/',
  },
  {
    tag: 'Course 03',
    title: 'Deciding Well',
    text: 'A practical framework for choices when information is incomplete and time is short.',
    to: '/learn/',
  },
]

export const scenarios = [
  {
    tag: 'At the shop',
    title: 'The persuasive discount',
    text: 'Two offers look identical. Work out which one actually saves you money before you reach the till.',
    to: '/real-life/',
  },
  {
    tag: 'Online',
    title: 'The shared claim',
    text: 'A post is being shared by people you trust. Decide what would count as good evidence.',
    to: '/real-life/',
  },
  {
    tag: 'With friends',
    title: 'The confident opinion',
    text: 'Someone sounds certain. Practise asking for reasons without turning the conversation into a fight.',
    to: '/real-life/',
  },
]

export const schools = [
  {
    tag: 'Socratic',
    title: 'Question everything kindly',
    text: 'Testing a belief through dialogue, not winning an argument.',
    to: '/philosophy/',
  },
  {
    tag: 'Stoic',
    title: 'Separate control from concern',
    text: 'Put energy where you have influence and meet the rest with clarity.',
    to: '/philosophy/',
  },
  {
    tag: 'Empiricist',
    title: 'Look before concluding',
    text: 'Treat observation as the starting point, not the finished story.',
    to: '/philosophy/',
  },
  {
    tag: 'Pragmatist',
    title: 'Ask what follows',
    text: 'Judge an idea by the consequences it produces in real situations.',
    to: '/philosophy/',
  },
]

export const principles = [
  'Don’t accept everything you hear.',
  'Don’t assume everything you see.',
  'Don’t confuse belief with knowledge.',
  'Don’t rush to conclusions.',
  'Don’t be afraid to change your mind.',
]

export const questions = [
  {
    eyebrow: 'Everyday reasoning',
    title: 'Two discounts, one price.',
    prompt: 'A jacket is 50% off. At the till you get another 50% off the reduced price. How much have you saved?',
    options: [
      {
        text: '100% — it should be free.',
        correct: false,
        reason: 'That would only be true if both discounts applied to the original price.',
      },
      {
        text: '75% — the second discount is taken from the new price.',
        correct: true,
        reason: 'Half of the original becomes a quarter of the original. You pay 25%, so you save 75%.',
      },
      {
        text: '50% — “extra” is just marketing language.',
        correct: false,
        reason: 'The wording may be playful, but the second discount really does apply again.',
      },
    ],
    reveal: 'Always ask: 50% of what? First 50% leaves 50%. Half of that is 25%. Total saved: 75%.',
    nudge: 'The question is not about shopping. It is about what each percentage refers to.',
  },
  {
    eyebrow: 'Cause and effect',
    title: 'The umbrella headline.',
    prompt: 'A study finds that people carrying umbrellas are more likely to have accidents. Should umbrellas be banned?',
    options: [
      {
        text: 'Yes — the study proves umbrellas cause accidents.',
        correct: false,
        reason: 'A pattern in the data does not tell you what produced the pattern.',
      },
      {
        text: 'No — umbrellas obviously cannot cause accidents.',
        correct: false,
        reason: 'That may be plausible, but “obviously” is not a reason. Look at the evidence.',
      },
      {
        text: 'Not yet — find out what else changes when people carry umbrellas.',
        correct: true,
        reason: 'Rain may make roads slippery and send more people out with umbrellas. Rain is the hidden factor.',
      },
    ],
    reveal: 'Correlation shows that two things happen together. It does not, on its own, show that one causes the other.',
    nudge: 'Ask what third factor could explain both observations.',
  },
]

export const seo = {
  '/': {
    title: 'NOMIZO — Try to Think Better.',
    description:
      'NOMIZO makes clear thinking accessible through everyday questions, reasoning challenges, practical courses and philosophy. Try to Think Better.',
  },
  '/daily-question/': {
    title: 'Daily Question — Think Before You Answer | NOMIZO',
    description:
      'A fresh everyday question each day. Choose an answer, examine your reasoning and learn why the obvious option is not always the right one.',
  },
  '/explore/': {
    title: 'Explore — Questions and Thinking Concepts | NOMIZO',
    description:
      'Discover interesting questions, ideas and thinking concepts. Follow a curiosity and see how better questions lead to clearer understanding.',
  },
  '/think-lab/': {
    title: 'Think Lab — Playful Puzzles and Reasoning Challenges | NOMIZO',
    description:
      'Explore six playful thinking modes: logic puzzles, brain teasers, mystery room, spot the flaw, inconsistencies and lateral thinking. Choose Beginner, Intermediate or Advanced.',
  },
  '/learn/': {
    title: 'Learn — Courses in Clear Thinking | NOMIZO',
    description:
      'Structured courses in reasoning, judgement and practical philosophy. Build thinking skills step by step without memorising answers.',
  },
  '/real-life/': {
    title: 'Real Life — Practise Everyday Decisions | NOMIZO',
    description:
      'Practise decisions in realistic everyday situations. Notice assumptions, weigh consequences and make clearer judgements.',
  },
  '/philosophy/': {
    title: 'Philosophy — Schools of Thought for Everyday Life | NOMIZO',
    description:
      'Explore Socratic questioning, Stoicism, empiricism and pragmatism as practical tools for examining belief, knowledge and human nature.',
  },
  '/my-nomizo/': {
    title: 'My NOMIZO — Track Your Thinking | NOMIZO',
    description:
      'Keep the questions that stay with you, revisit your reasoning and notice how your judgement changes over time with My NOMIZO.',
  },
}

export const pageContent = {
  '/daily-question/': {
    variant: 'challenge',
    eyebrow: 'Daily question',
    greek: 'Η ερώτηση της ημέρας',
    title: 'One question. No rush.',
    lead: 'Think before you answer. Every day begins with a small situation that looks simple until you examine it.',
    body: [
      'NOMIZO is not a quiz. The point is not to be right quickly; it is to notice how you reached an answer and whether the reasoning holds up.',
      'Choose the option that seems most reasonable. Then read the explanation and compare it with the assumptions you made.',
    ],
    steps: [
      { number: '01', title: 'Read closely', text: 'Find the exact claim before you respond to it.' },
      { number: '02', title: 'Choose a reason', text: 'Pick the option you can defend, not just recognise.' },
      { number: '03', title: 'Think again', text: 'Compare your reasoning with the explanation.' },
    ],
    featureTitle: 'Today’s question',
    featureText: 'A short challenge in everyday reasoning. No score, no timer, no judgement.',
    cardsTitle: 'What this practice builds',
    cards: [
      { tag: 'Habit', title: 'A useful pause', text: 'The small gap between seeing a question and answering it.' },
      { tag: 'Skill', title: 'Better assumptions', text: 'Noticing what you filled in without being told.' },
      { tag: 'Mindset', title: 'Room to change', text: 'Treating a revised view as progress, not defeat.' },
    ],
    quote: 'Don’t rush to conclusions.',
    cta: {
      title: 'Keep the question going.',
      text: 'Explore the ideas behind today’s challenge.',
      label: 'Go to Explore',
      to: '/explore/',
    },
  },
  '/explore/': {
    eyebrow: 'Explore',
    greek: 'Ανακάλυψε',
    title: 'Follow a question.',
    lead: 'Explore is where curiosity goes first: interesting questions, ideas and thinking concepts with no single path through them.',
    body: [
      'Start with something that bothers you, surprises you or does not quite add up. A good question is already a form of understanding.',
      'From here you can move into puzzles, structured courses, everyday decisions or philosophy. Each destination trains a different part of clear thinking.',
    ],
    steps: [
      { number: '01', title: 'Notice', text: 'Find the claim, detail or contradiction that caught you.' },
      { number: '02', title: 'Question', text: 'Ask what would need to be true for it to make sense.' },
      { number: '03', title: 'Connect', text: 'Take the question into a challenge, course or real-life scenario.' },
    ],
    cardsTitle: 'Five destinations',
    cards: destinations.map(({ number, title, text, to }) => ({ tag: number, title, text, to })),
    quote: 'A better question is worth more than a quick answer.',
    cta: {
      title: 'Ready to test an idea?',
      text: 'Take it into Think Lab and see whether it survives.',
      label: 'Open Think Lab',
      to: '/think-lab/',
    },
  },
  '/think-lab/': {
    variant: 'lab',
    eyebrow: 'Think Lab',
    greek: 'Εργαστήριο',
    title: 'Play with problems.',
    lead: 'NOMIZO’s most playful destination: six ways to twist a question, test an instinct and enjoy being wrong for a good reason.',
    body: [
      'Each mode trains a different move. Some ask you to follow a rule, some ask you to break a pattern and some ask you to notice what a story leaves out.',
      'Choose Beginner, Intermediate or Advanced. The label describes how carefully you will need to look, not how clever you have to be.',
    ],
    steps: [
      { number: '01', title: 'Pick a mode', text: 'Follow a rule, break a pattern or examine a story.' },
      { number: '02', title: 'Choose a level', text: 'Beginner, Intermediate or Advanced.' },
      { number: '03', title: 'Think again', text: 'Compare your first move with the one the puzzle asks for.' },
    ],
    cardsTitle: 'Six ways to play',
    cards: thinkLabSections.map(({ number, icon, title, greek, text, difficulty, sample, problems }) => ({
      number,
      icon,
      title,
      greek,
      text,
      difficulty,
      sample,
      problems,
    })),
    quote: 'A puzzle is a safe place to practise being wrong.',
    cta: {
      title: 'Want a daily warm-up?',
      text: 'Start with one question before you open the lab.',
      label: 'Daily Question',
      to: '/daily-question/',
    },
  },
  '/learn/': {
    eyebrow: 'Learn',
    greek: 'Μάθε',
    title: 'Learn the method.',
    lead: 'Learn offers structured courses that build thinking skills in order, from asking a useful question to making a defensible decision.',
    body: [
      'These courses do not ask you to memorise a list of famous answers. They practise the moves that make an answer worth trusting.',
      'Short lessons, concrete examples and repeated practice turn clear thinking into something you can actually use.',
    ],
    steps: [
      { number: '01', title: 'One idea', text: 'Each lesson introduces a single thinking move.' },
      { number: '02', title: 'Real examples', text: 'Practise it on claims you meet outside a classroom.' },
      { number: '03', title: 'Cumulative practice', text: 'Later lessons bring earlier skills back together.' },
    ],
    cardsTitle: 'Courses',
    cards: courses.map(({ tag, title, text }) => ({ tag, title, text })),
    quote: 'Don’t memorise. Understand.',
    cta: {
      title: 'Learn by deciding.',
      text: 'Take the method into situations that resemble real life.',
      label: 'Open Real Life',
      to: '/real-life/',
    },
  },
  '/real-life/': {
    eyebrow: 'Real Life',
    greek: 'Στην πράξη',
    title: 'Practise where it counts.',
    lead: 'Real Life places clear thinking in ordinary situations: a shop, a feed, a conversation with friends.',
    body: [
      'Judgement improves when the stakes feel familiar. These scenarios are built around the small decisions where assumptions usually slip in unnoticed.',
      'You will not find a perfect answer at the back. You will find a clearer way to weigh what you know and what you still need.',
    ],
    steps: [
      { number: '01', title: 'Set the scene', text: 'Read the situation as if it were happening today.' },
      { number: '02', title: 'Name the pressure', text: 'Notice what is pushing you towards a fast decision.' },
      { number: '03', title: 'Decide and defend', text: 'Make a choice and give the reason behind it.' },
    ],
    cardsTitle: 'Everyday scenarios',
    cards: scenarios.map(({ tag, title, text }) => ({ tag, title, text })),
    quote: 'Better judgement is built in ordinary moments.',
    cta: {
      title: 'Go deeper into the why.',
      text: 'Meet the traditions that shaped these thinking tools.',
      label: 'Open Philosophy',
      to: '/philosophy/',
    },
  },
  '/philosophy/': {
    eyebrow: 'Philosophy',
    greek: 'Φιλοσοφία',
    title: 'Wisdom, made useful.',
    lead: 'Philosophy at NOMIZO is not a museum of opinions. It is a set of practical ways to examine belief, knowledge and human nature.',
    body: [
      'Different schools ask different questions. Some test your reasons, some examine what you can know, and some ask what follows from an idea in practice.',
      'You do not need to adopt a school. Borrow the method that helps you think more clearly in the situation in front of you.',
    ],
    steps: [
      { number: '01', title: 'Meet the question', text: 'Start with the problem each tradition tried to solve.' },
      { number: '02', title: 'Try the method', text: 'Apply its habits to a modern example.' },
      { number: '03', title: 'Keep what works', text: 'Build a personal toolkit rather than a label.' },
    ],
    cardsTitle: 'Schools of thought',
    cards: schools.map(({ tag, title, text }) => ({ tag, title, text })),
    quote: 'The unexamined belief is easy to repeat.',
    cta: {
      title: 'Bring it back to today.',
      text: 'Use a philosophical habit on the next everyday decision.',
      label: 'Open Real Life',
      to: '/real-life/',
    },
  },
  '/my-nomizo/': {
    eyebrow: 'My NOMIZO',
    greek: 'Ο δρόμος σου',
    title: 'Make your thinking visible.',
    lead: 'My NOMIZO is your place to keep the questions that stayed with you and revisit the reasons you gave for your answers.',
    body: [
      'Clear thinking is easier to notice over time than in a single moment. Saving a question lets you return to it with a different mind.',
      'Track the ideas that challenged you, the answers you revised and the situations where you changed your judgement for a good reason.',
    ],
    steps: [
      { number: '01', title: 'Save', text: 'Keep a question that deserves another look.' },
      { number: '02', title: 'Return', text: 'Come back after a course, puzzle or real-life scenario.' },
      { number: '03', title: 'Notice', text: 'See how and why your thinking changed.' },
    ],
    cardsTitle: 'What you keep',
    cards: [
      { tag: 'Questions', title: 'Your own list', text: 'The questions that refused to leave you alone.' },
      { tag: 'Reasons', title: 'Your first answer', text: 'A record of how you reasoned before you looked again.' },
      { tag: 'Progress', title: 'Your revisions', text: 'The moments a better reason changed your mind.' },
    ],
    quote: 'Think again.',
    cta: {
      title: 'Begin with one question.',
      text: 'You do not need an account to start thinking clearly.',
      label: 'Daily Question',
      to: '/daily-question/',
    },
  },
}
