/**
 * Meme Pattern System
 *
 * Insanity Wolf follows a predictable format:
 * TOP: Mundane problem or situation
 * BOTTOM: Absurdly extreme overreaction
 *
 * This system generates high-quality memes programmatically.
 */

// ============================================
// PATTERN TEMPLATES
// ============================================

export interface MemePattern {
  id: string
  name: string
  topTemplate: string // Use {NOUN}, {VERB}, {SITUATION} as placeholders
  bottomTemplate: string
  theme: ThemeCluster
  aggressionLevel: 1 | 2 | 3 // 1=mild, 2=medium, 3=maximum
}

export type ThemeCluster =
  | "work"
  | "monday"
  | "coffee"
  | "technology"
  | "relationships"
  | "social"
  | "gym"
  | "sleep"
  | "food"
  | "driving"
  | "neighbors"
  | "money"

// 15 Core Patterns - these are the repeatable sentence structures
export const PATTERNS: MemePattern[] = [
  // Pattern 1: [Thing] doesn't work → Destroy it
  {
    id: "destroy-it",
    name: "Destruction Response",
    topTemplate: "{THING} {FAILS}",
    bottomTemplate: "{DESTROY_ACTION}",
    theme: "technology",
    aggressionLevel: 3,
  },
  // Pattern 2: Someone does X → Escalate to life-ruining
  {
    id: "escalate-revenge",
    name: "Revenge Escalation",
    topTemplate: "{PERSON} {ANNOYS}",
    bottomTemplate: "{LIFE_RUIN_ACTION}",
    theme: "social",
    aggressionLevel: 3,
  },
  // Pattern 3: Minor inconvenience → Declare war
  {
    id: "declare-war",
    name: "War Declaration",
    topTemplate: "{MINOR_PROBLEM}",
    bottomTemplate: "DECLARE WAR ON {TARGET}",
    theme: "social",
    aggressionLevel: 3,
  },
  // Pattern 4: Time of day → Choose violence
  {
    id: "choose-violence",
    name: "Violence Choice",
    topTemplate: "{TIME_PERIOD}",
    bottomTemplate: "CHOOSE VIOLENCE",
    theme: "monday",
    aggressionLevel: 2,
  },
  // Pattern 5: Out of X → Extreme acquisition
  {
    id: "out-of-supply",
    name: "Supply Crisis",
    topTemplate: "OUT OF {SUPPLY}",
    bottomTemplate: "{EXTREME_ACQUISITION}",
    theme: "coffee",
    aggressionLevel: 2,
  },
  // Pattern 6: Someone does minor thing → Assert dominance
  {
    id: "assert-dominance",
    name: "Dominance Assertion",
    topTemplate: "{PERSON} {MINOR_ACTION}",
    bottomTemplate: "ASSERT {TYPE} DOMINANCE",
    theme: "social",
    aggressionLevel: 2,
  },
  // Pattern 7: X happens → Become ungovernable
  {
    id: "ungovernable",
    name: "Ungovernable",
    topTemplate: "{SITUATION}",
    bottomTemplate: "BECOME UNGOVERNABLE",
    theme: "work",
    aggressionLevel: 2,
  },
  // Pattern 8: Problem occurs → Burn it down
  {
    id: "burn-down",
    name: "Burn It Down",
    topTemplate: "{THING} {BREAKS}",
    bottomTemplate: "BURN {LOCATION} DOWN",
    theme: "work",
    aggressionLevel: 3,
  },
  // Pattern 9: X is missing → Make the world suffer
  {
    id: "world-suffers",
    name: "World Suffers",
    topTemplate: "{THING_MISSING}",
    bottomTemplate: "MAKE THE WORLD {SUFFER_ACTION}",
    theme: "coffee",
    aggressionLevel: 3,
  },
  // Pattern 10: Person annoys you → Block/eliminate entirely
  {
    id: "total-elimination",
    name: "Total Elimination",
    topTemplate: "{PERSON} {CONTACT_ACTION}",
    bottomTemplate: "BLOCK {ENTIRE_CATEGORY}",
    theme: "relationships",
    aggressionLevel: 2,
  },
  // Pattern 11: Minor social violation → Establish dominance
  {
    id: "establish-dominance",
    name: "Establish Dominance",
    topTemplate: "SOMEONE {SOCIAL_VIOLATION}",
    bottomTemplate: "ESTABLISH DOMINANCE",
    theme: "social",
    aggressionLevel: 2,
  },
  // Pattern 12: Obligation exists → Refuse dramatically
  {
    id: "dramatic-refusal",
    name: "Dramatic Refusal",
    topTemplate: "{OBLIGATION}",
    bottomTemplate: "{DRAMATIC_REFUSAL}",
    theme: "work",
    aggressionLevel: 2,
  },
  // Pattern 13: Thing is slow/delayed → Hunt it down
  {
    id: "hunt-down",
    name: "Hunt Down",
    topTemplate: "{THING} IS {SLOW_STATE}",
    bottomTemplate: "TRACK {IT} DOWN PERSONALLY",
    theme: "technology",
    aggressionLevel: 2,
  },
  // Pattern 14: X happens → Embrace chaos
  {
    id: "embrace-chaos",
    name: "Embrace Chaos",
    topTemplate: "{BAD_SITUATION}",
    bottomTemplate: "EMBRACE THE {CHAOS_TYPE}",
    theme: "monday",
    aggressionLevel: 1,
  },
  // Pattern 15: Can't do X → Do extreme opposite
  {
    id: "extreme-opposite",
    name: "Extreme Opposite",
    topTemplate: "CAN'T {NORMAL_ACTION}",
    bottomTemplate: "{EXTREME_OPPOSITE}",
    theme: "gym",
    aggressionLevel: 2,
  },
]

// ============================================
// WORD BANKS BY THEME
// ============================================

export const WORD_BANKS = {
  // Work theme
  work: {
    things: ["PRINTER", "COMPUTER", "EMAIL", "MEETING", "DEADLINE", "BOSS", "COWORKER", "SPREADSHEET", "ZOOM CALL", "SLACK"],
    fails: ["JAMS", "CRASHES", "WON'T LOAD", "FREEZES", "TIMES OUT", "GOES DOWN", "BREAKS"],
    locations: ["THE OFFICE", "THE BUILDING", "THE ENTIRE COMPANY", "CORPORATE"],
    obligations: ["MEETING AT 9 AM", "DEADLINE TODAY", "PERFORMANCE REVIEW", "TEAM BUILDING EVENT", "MANDATORY FUN"],
    refusals: ["SEND A RESIGNATION LETTER INSTEAD", "FLIP THE TABLE AND LEAVE", "BECOME A FOREST HERMIT", "ACHIEVE UNEMPLOYMENT"],
  },

  // Monday theme
  monday: {
    times: ["MONDAY MORNING", "SUNDAY NIGHT", "5 AM ALARM", "FIRST DAY BACK", "AFTER A LONG WEEKEND"],
    situations: ["ALARM GOES OFF", "WEEKEND IS OVER", "BACK TO WORK", "INBOX HAS 500 EMAILS"],
    chaos: ["DARKNESS", "VOID", "CHAOS", "MADNESS", "PRIMAL RAGE"],
  },

  // Coffee theme
  coffee: {
    supplies: ["COFFEE", "CAFFEINE", "ESPRESSO", "ENERGY DRINKS", "COLD BREW"],
    missing: ["NO COFFEE LEFT", "COFFEE MACHINE BROKEN", "SOMEONE DRANK THE LAST CUP", "COFFEE SHOP CLOSED"],
    acquisitions: ["DECLARE A STATE OF EMERGENCY", "RAID THE NEIGHBOR'S HOUSE", "BECOME THE COFFEE", "ASCEND BEYOND MORTAL NEEDS"],
    suffer: ["PAY", "LISTEN", "FEAR", "KNOW MY WRATH"],
  },

  // Technology theme
  technology: {
    things: ["WIFI", "PHONE", "LAPTOP", "CHARGER", "BATTERY", "APP", "UPDATE", "PASSWORD"],
    fails: ["IS DOWN", "DIES", "WON'T CONNECT", "CRASHES", "UPDATES ITSELF", "AUTOCORRECTS"],
    destroy: ["THROW IT INTO THE SUN", "DESTROY IT WITH BARE HANDS", "ACHIEVE FINAL FORM", "RETURN TO MONKE", "BECOME ONE WITH THE MACHINE"],
  },

  // Relationships theme
  relationships: {
    persons: ["EX", "CRUSH", "DATE", "PARTNER", "FRIEND"],
    contacts: ["TEXTS YOU", "CALLS YOU", "LIKES YOUR POST", "VIEWS YOUR STORY", "SENDS A MEME"],
    blocks: ["THE ENTIRE AREA CODE", "THEIR ENTIRE BLOODLINE", "EVERYONE WITH THAT NAME", "THE WHOLE PLATFORM"],
  },

  // Social theme
  social: {
    persons: ["SOMEONE", "STRANGER", "PERSON", "NEIGHBOR", "DRIVER"],
    annoys: ["CUTS IN LINE", "TALKS LOUD", "CHEWS WITH MOUTH OPEN", "STANDS TOO CLOSE", "WALKS SLOW"],
    violations: ["CUTS IN LINE", "TAKES YOUR PARKING SPOT", "STEALS YOUR SEAT", "TALKS DURING THE MOVIE"],
    dominance: ["PRIMAL", "TOTAL", "ABSOLUTE", "UNQUESTIONABLE", "ETERNAL"],
    ruin: ["STEAL THEIR IDENTITY", "RUIN THEIR CREDIT SCORE", "BECOME THEIR LANDLORD", "MARRY THEIR EX"],
  },

  // Gym theme
  gym: {
    normal: ["SKIP LEG DAY", "TAKE A REST DAY", "DO CARDIO", "STRETCH FIRST"],
    extreme: ["BECOME LEGS", "REST IS FOR THE WEAK", "RUN UNTIL YOU TRANSCEND", "STRETCH YOUR ENEMIES"],
  },

  // Sleep theme
  sleep: {
    problems: ["CAN'T SLEEP", "INSOMNIA HITS", "BRAIN WON'T STOP", "IT'S 3 AM"],
    solutions: ["NEVER SLEEP AGAIN", "BECOME NOCTURNAL", "OUTLAST THE SUN", "SLEEP IS A SOCIAL CONSTRUCT"],
  },

  // Food theme
  food: {
    items: ["LUNCH", "SNACKS", "LEFTOVERS", "FRIES", "LAST SLICE"],
    stolen: ["STEALS YOUR LUNCH", "EATS YOUR FOOD", "TAKES THE LAST PIECE", "FINISHES YOUR DRINK"],
    revenge: ["STEAL THEIR IDENTITY", "EAT THEIR ENTIRE FRIDGE", "BECOME THEIR MEAL", "FOOD IS WAR"],
  },

  // Driving theme
  driving: {
    problems: ["TRAFFIC JAM", "RED LIGHT", "SLOW DRIVER", "NO PARKING", "SOMEONE HONKS"],
    reactions: ["BECOME UNGOVERNABLE", "TRANSCEND TRAFFIC LAWS", "ACHIEVE VEHICULAR ENLIGHTENMENT", "ROAD IS NOW OPTIONAL"],
  },

  // Neighbors theme
  neighbors: {
    annoyances: ["DOG BARKING", "LOUD MUSIC", "PARTY AT 2 AM", "LEAF BLOWER AT 7 AM", "STEALS YOUR PACKAGES"],
    responses: ["BARK LOUDER", "BECOME THE NOISE", "OUT-PARTY THEM", "ESTABLISH TERRITORIAL DOMINANCE"],
  },

  // Money theme
  money: {
    problems: ["BILLS DUE", "OVERDRAFT FEE", "RENT IS LATE", "PAYCHECK DELAYED"],
    solutions: ["MONEY IS A CONSTRUCT", "BECOME DEBT", "TRANSCEND CAPITALISM", "INVOICE THE UNIVERSE"],
  },
}

// ============================================
// COMPLETE MEME GENERATORS BY THEME
// ============================================

interface GeneratedMeme {
  topText: string
  bottomText: string
  theme: ThemeCluster
  pattern: string
  score: number
}

// Theme-specific generators that produce complete memes
export const THEME_GENERATORS: Record<ThemeCluster, () => GeneratedMeme[]> = {
  work: () => [
    { topText: "PRINTER JAMS", bottomText: "OFFICE SPACE THAT THING", theme: "work", pattern: "destroy-it", score: 0 },
    { topText: "MEETING COULD BE AN EMAIL", bottomText: "SEND A RESIGNATION LETTER INSTEAD", theme: "work", pattern: "dramatic-refusal", score: 0 },
    { topText: "COWORKER STEALS YOUR LUNCH", bottomText: "STEAL THEIR IDENTITY", theme: "work", pattern: "escalate-revenge", score: 0 },
    { topText: "BOSS SAYS GOOD MORNING", bottomText: "FLIP THE TABLE AND LEAVE", theme: "work", pattern: "dramatic-refusal", score: 0 },
    { topText: "DEADLINE IS TOMORROW", bottomText: "DEADLINES ARE A SUGGESTION", theme: "work", pattern: "ungovernable", score: 0 },
    { topText: "MANDATORY TEAM BUILDING", bottomText: "BUILD A TEAM OF ONE", theme: "work", pattern: "dramatic-refusal", score: 0 },
    { topText: "OPEN OFFICE PLAN", bottomText: "ESTABLISH CUBICLE DOMINANCE", theme: "work", pattern: "assert-dominance", score: 0 },
    { topText: "SOMEONE REPLIES ALL", bottomText: "REPLY ALL YOUR RESIGNATION", theme: "work", pattern: "escalate-revenge", score: 0 },
    { topText: "SPREADSHEET HAS AN ERROR", bottomText: "ERRORS ARE A LIFESTYLE", theme: "work", pattern: "embrace-chaos", score: 0 },
    { topText: "ZOOM CALL AT 8 AM", bottomText: "CAMERA STAYS OFF FOREVER", theme: "work", pattern: "ungovernable", score: 0 },
  ],

  monday: () => [
    { topText: "MONDAY MORNING", bottomText: "CHOOSE VIOLENCE", theme: "monday", pattern: "choose-violence", score: 0 },
    { topText: "ALARM GOES OFF", bottomText: "DESTROY IT WITH YOUR BARE HANDS", theme: "monday", pattern: "destroy-it", score: 0 },
    { topText: "WEEKEND IS OVER", bottomText: "WEEKENDS ARE A STATE OF MIND", theme: "monday", pattern: "ungovernable", score: 0 },
    { topText: "SUNDAY SCARIES HIT", bottomText: "BECOME THE SCARY", theme: "monday", pattern: "extreme-opposite", score: 0 },
    { topText: "5 AM ALARM", bottomText: "5 AM IS A SUGGESTION", theme: "monday", pattern: "ungovernable", score: 0 },
    { topText: "BACK TO WORK TOMORROW", bottomText: "TOMORROW DOESN'T EXIST", theme: "monday", pattern: "embrace-chaos", score: 0 },
    { topText: "IT'S ONLY TUESDAY", bottomText: "TIME IS A FLAT CIRCLE", theme: "monday", pattern: "embrace-chaos", score: 0 },
    { topText: "SNOOZE BUTTON", bottomText: "SNOOZE IS FOR THE WEAK", theme: "monday", pattern: "choose-violence", score: 0 },
    { topText: "WOKE UP LATE", bottomText: "LATE IS MY DEFAULT STATE", theme: "monday", pattern: "ungovernable", score: 0 },
    { topText: "MONDAY MEETING", bottomText: "MEETINGS ARE OPTIONAL", theme: "monday", pattern: "dramatic-refusal", score: 0 },
  ],

  coffee: () => [
    { topText: "OUT OF COFFEE", bottomText: "DECLARE A STATE OF EMERGENCY", theme: "coffee", pattern: "out-of-supply", score: 0 },
    { topText: "COFFEE MACHINE BROKEN", bottomText: "BURN THE BUILDING DOWN", theme: "coffee", pattern: "burn-down", score: 0 },
    { topText: "SOMEONE DRANK THE LAST CUP", bottomText: "DRINK THEIR WILL TO LIVE", theme: "coffee", pattern: "escalate-revenge", score: 0 },
    { topText: "DECAF ONLY", bottomText: "DECAF IS A WAR CRIME", theme: "coffee", pattern: "choose-violence", score: 0 },
    { topText: "COFFEE SHOP CLOSED", bottomText: "BECOME THE COFFEE SHOP", theme: "coffee", pattern: "extreme-opposite", score: 0 },
    { topText: "NO CREAMER LEFT", bottomText: "CREAMER IS FOR COWARDS", theme: "coffee", pattern: "choose-violence", score: 0 },
    { topText: "COFFEE IS COLD", bottomText: "COLD IS A STATE OF MIND", theme: "coffee", pattern: "embrace-chaos", score: 0 },
    { topText: "FORGOT TO MAKE COFFEE", bottomText: "ACHIEVE CAFFEINATION THROUGH RAGE", theme: "coffee", pattern: "extreme-opposite", score: 0 },
    { topText: "COWORKER TAKES YOUR MUG", bottomText: "TAKE THEIR PARKING SPOT FOREVER", theme: "coffee", pattern: "escalate-revenge", score: 0 },
    { topText: "COFFEE BUDGET CUT", bottomText: "BUDGET THEIR EXISTENCE", theme: "coffee", pattern: "escalate-revenge", score: 0 },
  ],

  technology: () => [
    { topText: "WIFI IS DOWN", bottomText: "EMBRACE THE DARKNESS", theme: "technology", pattern: "embrace-chaos", score: 0 },
    { topText: "PHONE DIES AT 1%", bottomText: "BECOME UNREACHABLE PERMANENTLY", theme: "technology", pattern: "embrace-chaos", score: 0 },
    { topText: "AUTOCORRECT RUINS TEXT", bottomText: "THROW PHONE INTO THE SUN", theme: "technology", pattern: "destroy-it", score: 0 },
    { topText: "COMPUTER CRASHED", bottomText: "ACHIEVE FINAL FORM", theme: "technology", pattern: "destroy-it", score: 0 },
    { topText: "PASSWORD EXPIRED", bottomText: "PASSWORDS ARE FOR THE WEAK", theme: "technology", pattern: "ungovernable", score: 0 },
    { topText: "UPDATE REQUIRED", bottomText: "UPDATES ARE OPTIONAL", theme: "technology", pattern: "ungovernable", score: 0 },
    { topText: "BLUETOOTH WON'T CONNECT", bottomText: "WIRES ARE ETERNAL", theme: "technology", pattern: "extreme-opposite", score: 0 },
    { topText: "LAPTOP OVERHEATING", bottomText: "LET IT BURN", theme: "technology", pattern: "embrace-chaos", score: 0 },
    { topText: "APP KEEPS CRASHING", bottomText: "CRASH BACK HARDER", theme: "technology", pattern: "extreme-opposite", score: 0 },
    { topText: "CHARGER CABLE FRAYED", bottomText: "ELECTRICITY IS A SUGGESTION", theme: "technology", pattern: "ungovernable", score: 0 },
  ],

  relationships: () => [
    { topText: "EX TEXTS YOU", bottomText: "BLOCK THE ENTIRE AREA CODE", theme: "relationships", pattern: "total-elimination", score: 0 },
    { topText: "READ BUT NO REPLY", bottomText: "SHOW UP AT THEIR HOUSE", theme: "relationships", pattern: "escalate-revenge", score: 0 },
    { topText: "LEFT ON READ", bottomText: "LEFT ON EARTH WAS THEIR MISTAKE", theme: "relationships", pattern: "escalate-revenge", score: 0 },
    { topText: "CRUSH DOESN'T TEXT BACK", bottomText: "BECOME THEIR ONLY OPTION", theme: "relationships", pattern: "assert-dominance", score: 0 },
    { topText: "DATE CANCELS LAST MINUTE", bottomText: "CANCEL THEIR SUBSCRIPTION TO LIFE", theme: "relationships", pattern: "escalate-revenge", score: 0 },
    { topText: "EX GETS ENGAGED", bottomText: "GET ENGAGED TO THEIR DAD", theme: "relationships", pattern: "escalate-revenge", score: 0 },
    { topText: "GHOSTED AFTER THREE DATES", bottomText: "HAUNT THEM BACK", theme: "relationships", pattern: "extreme-opposite", score: 0 },
    { topText: "THEY SAY LET'S BE FRIENDS", bottomText: "BECOME THEIR LANDLORD", theme: "relationships", pattern: "assert-dominance", score: 0 },
    { topText: "SITUATIONSHIP ENERGY", bottomText: "BECOME THE SITUATION", theme: "relationships", pattern: "assert-dominance", score: 0 },
    { topText: "MIXED SIGNALS", bottomText: "SEND CLEARER THREATS", theme: "relationships", pattern: "escalate-revenge", score: 0 },
  ],

  social: () => [
    { topText: "SOMEONE CUTS IN LINE", bottomText: "ESTABLISH DOMINANCE", theme: "social", pattern: "establish-dominance", score: 0 },
    { topText: "SOMEONE CHEWS LOUDLY", bottomText: "ASSERT PRIMAL DOMINANCE", theme: "social", pattern: "assert-dominance", score: 0 },
    { topText: "SLOW WALKER IN FRONT", bottomText: "WALK THROUGH THEM", theme: "social", pattern: "establish-dominance", score: 0 },
    { topText: "SOMEONE TAKES YOUR SEAT", bottomText: "TAKE THEIR ENTIRE IDENTITY", theme: "social", pattern: "escalate-revenge", score: 0 },
    { topText: "PERSON STANDS TOO CLOSE", bottomText: "PERSONAL SPACE IS VIOLENCE", theme: "social", pattern: "choose-violence", score: 0 },
    { topText: "SOMEONE SPOILS THE MOVIE", bottomText: "SPOIL THEIR ENTIRE LIFE", theme: "social", pattern: "escalate-revenge", score: 0 },
    { topText: "STRANGER MAKES EYE CONTACT", bottomText: "NEVER BLINK AGAIN", theme: "social", pattern: "assert-dominance", score: 0 },
    { topText: "SOMEONE TALKS IN THE THEATER", bottomText: "BECOME THE MOVIE", theme: "social", pattern: "assert-dominance", score: 0 },
    { topText: "ACQUAINTANCE WAVES AT YOU", bottomText: "WAVE GOODBYE TO SOCIAL NORMS", theme: "social", pattern: "embrace-chaos", score: 0 },
    { topText: "SMALL TALK INITIATED", bottomText: "INITIATE LARGE SILENCE", theme: "social", pattern: "extreme-opposite", score: 0 },
  ],

  gym: () => [
    { topText: "SOMEONE USING YOUR MACHINE", bottomText: "BECOME THE MACHINE", theme: "gym", pattern: "assert-dominance", score: 0 },
    { topText: "SKIP LEG DAY", bottomText: "LEGS ARE FOR THE WEAK", theme: "gym", pattern: "ungovernable", score: 0 },
    { topText: "NO GAINS THIS WEEK", bottomText: "GAINS ARE A STATE OF MIND", theme: "gym", pattern: "embrace-chaos", score: 0 },
    { topText: "FORGOT PRE-WORKOUT", bottomText: "RAGE IS THE PRE-WORKOUT", theme: "gym", pattern: "extreme-opposite", score: 0 },
    { topText: "GYM IS CROWDED", bottomText: "CROWD IS NOW THE WORKOUT", theme: "gym", pattern: "assert-dominance", score: 0 },
    { topText: "MUSCLE SORENESS", bottomText: "PAIN IS JUST WEAKNESS LEAVING", theme: "gym", pattern: "embrace-chaos", score: 0 },
    { topText: "CARDIO DAY", bottomText: "RUN UNTIL YOU TRANSCEND", theme: "gym", pattern: "extreme-opposite", score: 0 },
    { topText: "SOMEONE DOESN'T RERACK", bottomText: "RERACK THEM", theme: "gym", pattern: "establish-dominance", score: 0 },
    { topText: "REST DAY", bottomText: "REST IS FOR THE DECEASED", theme: "gym", pattern: "choose-violence", score: 0 },
    { topText: "PROTEIN SHAKE TASTES BAD", bottomText: "TASTE IS OPTIONAL", theme: "gym", pattern: "ungovernable", score: 0 },
  ],

  sleep: () => [
    { topText: "CAN'T FALL ASLEEP", bottomText: "SLEEP IS FOR THE WEAK", theme: "sleep", pattern: "choose-violence", score: 0 },
    { topText: "IT'S 3 AM", bottomText: "3 AM IS PRIME TIME", theme: "sleep", pattern: "embrace-chaos", score: 0 },
    { topText: "BRAIN WON'T STOP THINKING", bottomText: "OUT-THINK THE BRAIN", theme: "sleep", pattern: "assert-dominance", score: 0 },
    { topText: "INSOMNIA HITS AGAIN", bottomText: "BECOME NOCTURNAL", theme: "sleep", pattern: "embrace-chaos", score: 0 },
    { topText: "ONLY GOT 2 HOURS", bottomText: "2 HOURS IS A LIFESTYLE", theme: "sleep", pattern: "ungovernable", score: 0 },
    { topText: "ROOMMATE SNORES", bottomText: "SNORE LOUDER", theme: "sleep", pattern: "assert-dominance", score: 0 },
    { topText: "BED IS TOO COMFORTABLE", bottomText: "NEVER LEAVE", theme: "sleep", pattern: "embrace-chaos", score: 0 },
    { topText: "NEIGHBORS PARTY AT MIDNIGHT", bottomText: "PARTY HARDER AT 4 AM", theme: "sleep", pattern: "escalate-revenge", score: 0 },
    { topText: "MELATONIN NOT WORKING", bottomText: "MELATONIN IS FOR AMATEURS", theme: "sleep", pattern: "ungovernable", score: 0 },
    { topText: "ANXIETY AT BEDTIME", bottomText: "ANXIETY IS JUST MOTIVATION", theme: "sleep", pattern: "embrace-chaos", score: 0 },
  ],

  food: () => [
    { topText: "SOMEONE EATS YOUR LEFTOVERS", bottomText: "EAT THEIR ENTIRE FRIDGE", theme: "food", pattern: "escalate-revenge", score: 0 },
    { topText: "FRIES ARE COLD", bottomText: "COLD FRIES BUILD CHARACTER", theme: "food", pattern: "embrace-chaos", score: 0 },
    { topText: "LAST SLICE OF PIZZA", bottomText: "ALL SLICES ARE THE LAST SLICE", theme: "food", pattern: "assert-dominance", score: 0 },
    { topText: "ROOMMATE LEFT DISHES", bottomText: "LEAVE ROOMMATE", theme: "food", pattern: "escalate-revenge", score: 0 },
    { topText: "UBER EATS IS LATE", bottomText: "BECOME THE DELIVERY", theme: "food", pattern: "extreme-opposite", score: 0 },
    { topText: "DIET STARTS MONDAY", bottomText: "MONDAY DOESN'T EXIST", theme: "food", pattern: "ungovernable", score: 0 },
    { topText: "RESTAURANT GETS ORDER WRONG", bottomText: "ORDER THEIR CLOSURE", theme: "food", pattern: "escalate-revenge", score: 0 },
    { topText: "VENDING MACHINE STEALS MONEY", bottomText: "STEAL IT BACK WITH INTEREST", theme: "food", pattern: "escalate-revenge", score: 0 },
    { topText: "FOOD IS TOO SPICY", bottomText: "BECOME THE SPICE", theme: "food", pattern: "embrace-chaos", score: 0 },
    { topText: "HANGRY", bottomText: "HUNGER IS POWER", theme: "food", pattern: "embrace-chaos", score: 0 },
  ],

  driving: () => [
    { topText: "TRAFFIC JAM", bottomText: "BECOME UNGOVERNABLE", theme: "driving", pattern: "ungovernable", score: 0 },
    { topText: "SOMEONE CUTS YOU OFF", bottomText: "CUT THEM OUT OF EXISTENCE", theme: "driving", pattern: "escalate-revenge", score: 0 },
    { topText: "NO PARKING SPOTS", bottomText: "PARKING IS A SUGGESTION", theme: "driving", pattern: "ungovernable", score: 0 },
    { topText: "GAS PRICES HIGH", bottomText: "GAS IS FOR THE WEAK", theme: "driving", pattern: "choose-violence", score: 0 },
    { topText: "CHECK ENGINE LIGHT ON", bottomText: "CHECK ENGINE LIGHT IS A SUGGESTION", theme: "driving", pattern: "ungovernable", score: 0 },
    { topText: "SOMEONE HONKS AT YOU", bottomText: "HONK BACK WITH YOUR SOUL", theme: "driving", pattern: "assert-dominance", score: 0 },
    { topText: "RED LIGHT", bottomText: "COLORS ARE SUGGESTIONS", theme: "driving", pattern: "ungovernable", score: 0 },
    { topText: "SLOW DRIVER AHEAD", bottomText: "SPEED IS RELATIVE", theme: "driving", pattern: "embrace-chaos", score: 0 },
    { topText: "PACKAGE IS DELAYED", bottomText: "TRACK DOWN THE DRIVER PERSONALLY", theme: "driving", pattern: "hunt-down", score: 0 },
    { topText: "PARKING TICKET", bottomText: "TICKET THE CITY BACK", theme: "driving", pattern: "escalate-revenge", score: 0 },
  ],

  neighbors: () => [
    { topText: "NEIGHBOR'S DOG BARKING", bottomText: "BARK LOUDER", theme: "neighbors", pattern: "assert-dominance", score: 0 },
    { topText: "LOUD MUSIC AT 2 AM", bottomText: "LOUDER MUSIC AT 4 AM", theme: "neighbors", pattern: "escalate-revenge", score: 0 },
    { topText: "NEIGHBOR STEALS YOUR PACKAGE", bottomText: "STEAL THEIR HOUSE", theme: "neighbors", pattern: "escalate-revenge", score: 0 },
    { topText: "LEAF BLOWER AT 7 AM", bottomText: "LEAF BLOW AT 5 AM", theme: "neighbors", pattern: "escalate-revenge", score: 0 },
    { topText: "NEIGHBOR'S WIFI BETTER", bottomText: "BECOME THEIR WIFI", theme: "neighbors", pattern: "assert-dominance", score: 0 },
    { topText: "PARKING SPOT STOLEN", bottomText: "STEAL THEIR WILL TO PARK", theme: "neighbors", pattern: "escalate-revenge", score: 0 },
    { topText: "NEIGHBOR MOWS LAWN AT DAWN", bottomText: "MOW THEIR LAWN AT MIDNIGHT", theme: "neighbors", pattern: "escalate-revenge", score: 0 },
    { topText: "HOA SENDS LETTER", bottomText: "BECOME THE HOA", theme: "neighbors", pattern: "assert-dominance", score: 0 },
    { topText: "NEIGHBOR HAS BETTER CHRISTMAS LIGHTS", bottomText: "BECOME THE SUN", theme: "neighbors", pattern: "assert-dominance", score: 0 },
    { topText: "FENCE DISPUTE", bottomText: "FENCES ARE FOR COWARDS", theme: "neighbors", pattern: "choose-violence", score: 0 },
  ],

  money: () => [
    { topText: "RENT IS DUE", bottomText: "DUE IS A SUGGESTION", theme: "money", pattern: "ungovernable", score: 0 },
    { topText: "OVERDRAFT FEE", bottomText: "OVERDRAFT THEIR FEE", theme: "money", pattern: "escalate-revenge", score: 0 },
    { topText: "PAYCHECK DELAYED", bottomText: "DELAY THEIR EXISTENCE", theme: "money", pattern: "escalate-revenge", score: 0 },
    { topText: "BILLS PILING UP", bottomText: "BILLS ARE A CONSTRUCT", theme: "money", pattern: "ungovernable", score: 0 },
    { topText: "SUBSCRIPTION PRICE INCREASED", bottomText: "INCREASE THEIR PROBLEMS", theme: "money", pattern: "escalate-revenge", score: 0 },
    { topText: "CREDIT SCORE DROPPED", bottomText: "SCORES ARE FOR THE WEAK", theme: "money", pattern: "ungovernable", score: 0 },
    { topText: "CAN'T AFFORD IT", bottomText: "AFFORD IS A STATE OF MIND", theme: "money", pattern: "embrace-chaos", score: 0 },
    { topText: "BUDGET EXCEEDED", bottomText: "BUDGETS ARE SUGGESTIONS", theme: "money", pattern: "ungovernable", score: 0 },
    { topText: "TIP EXPECTED", bottomText: "TIP THEM OFF THE PLANET", theme: "money", pattern: "choose-violence", score: 0 },
    { topText: "TAXES DUE", bottomText: "TAXATION IS NEGOTIABLE", theme: "money", pattern: "ungovernable", score: 0 },
  ],
}

// ============================================
// SCORING SYSTEM
// ============================================

export interface ScoringCriteria {
  lengthScore: number      // Optimal length (not too short, not too long)
  aggressionScore: number  // How "insanity wolf" is the response
  clarityScore: number     // Is it immediately understandable
  viralScore: number       // Potential for sharing
  total: number
}

export function scoreMeme(meme: GeneratedMeme): ScoringCriteria {
  const { topText, bottomText } = meme

  // Length scoring (optimal: top 3-6 words, bottom 3-7 words)
  const topWords = topText.split(" ").length
  const bottomWords = bottomText.split(" ").length
  let lengthScore = 100

  if (topWords < 2) lengthScore -= 30
  if (topWords > 6) lengthScore -= (topWords - 6) * 10
  if (bottomWords < 2) lengthScore -= 30
  if (bottomWords > 8) lengthScore -= (bottomWords - 8) * 10
  lengthScore = Math.max(0, lengthScore)

  // Aggression scoring (power words)
  const powerWords = [
    "DESTROY", "BURN", "VIOLENCE", "DOMINANCE", "UNGOVERNABLE", "CHAOS",
    "PRIMAL", "ETERNAL", "TRANSCEND", "ANNIHILATE", "OBLITERATE", "WAR",
    "RAGE", "FURY", "WRATH", "ASCEND", "FINAL FORM", "WEAK", "COWARD",
    "BARE HANDS", "SUN", "PERSONALLY", "ENTIRE", "STEAL", "BLOCK"
  ]
  const allText = (topText + " " + bottomText).toUpperCase()
  const powerWordCount = powerWords.filter(w => allText.includes(w)).length
  const aggressionScore = Math.min(100, powerWordCount * 25)

  // Clarity scoring (shorter = clearer, common words = clearer)
  const totalWords = topWords + bottomWords
  let clarityScore = totalWords <= 10 ? 100 : Math.max(0, 100 - (totalWords - 10) * 10)

  // Viral scoring (relatability + extremeness)
  // Topics that are universally relatable get bonus
  const relatableTopics = [
    "COFFEE", "MONDAY", "ALARM", "TRAFFIC", "WIFI", "EX", "WORK",
    "BOSS", "MEETING", "SLEEP", "GYM", "FOOD", "PARKING"
  ]
  const hasRelatableTopic = relatableTopics.some(t => allText.includes(t))
  let viralScore = hasRelatableTopic ? 70 : 40
  viralScore += aggressionScore > 50 ? 30 : 0

  const total = Math.round((lengthScore + aggressionScore + clarityScore + viralScore) / 4)

  return {
    lengthScore,
    aggressionScore,
    clarityScore,
    viralScore,
    total,
  }
}

// ============================================
// GENERATION FUNCTIONS
// ============================================

export function generateMemesForTheme(theme: ThemeCluster): GeneratedMeme[] {
  const generator = THEME_GENERATORS[theme]
  if (!generator) return []

  const memes = generator()

  // Score all memes
  return memes.map(meme => ({
    ...meme,
    score: scoreMeme(meme).total,
  })).sort((a, b) => b.score - a.score)
}

export function generateAllMemes(): GeneratedMeme[] {
  const allThemes: ThemeCluster[] = [
    "work", "monday", "coffee", "technology", "relationships",
    "social", "gym", "sleep", "food", "driving", "neighbors", "money"
  ]

  const allMemes: GeneratedMeme[] = []

  for (const theme of allThemes) {
    const themeMemes = generateMemesForTheme(theme)
    allMemes.push(...themeMemes)
  }

  return allMemes.sort((a, b) => b.score - a.score)
}

export function getTopScoringMemes(count: number = 50): GeneratedMeme[] {
  const all = generateAllMemes()
  return all.slice(0, count)
}

// Get memes that haven't been published yet
export function getUnpublishedMemes(existingSlugs: Set<string>): GeneratedMeme[] {
  const all = generateAllMemes()
  return all.filter(meme => {
    const slug = `${meme.topText}-${meme.bottomText}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
    return !existingSlugs.has(slug)
  })
}
