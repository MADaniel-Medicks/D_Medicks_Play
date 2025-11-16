import { type TimelineEvent, type HistoricalFigure, type VocabularyTerm, type QuizQuestion } from './types';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 1937,
    title: 'Second Sino-Japanese War Begins',
    description: 'Japan invades China, marking the beginning of a larger conflict in the Pacific.',
    longDescription: 'The conflict began with the Marco Polo Bridge Incident and escalated into a full-scale war. This war drained significant resources from Japan and set the stage for its broader expansionist policies in Asia.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Japanese_soldiers_in_the_Marco_Polo_Bridge_Incident.jpg/640px-Japanese_soldiers_in_the_Marco_Polo_Bridge_Incident.jpg'
  },
  {
    year: 1941,
    title: 'Attack on Pearl Harbor',
    description: 'Japan launches a surprise attack on the US naval base at Pearl Harbor, Hawaii.',
    longDescription: 'On December 7, 1941, Japan attacked the US naval base, leading to the United States\' formal entry into World War II the next day. The attack aimed to cripple the U.S. Pacific Fleet.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/USS_Arizona_during_the_Pearl_Harbor_attack.jpg/640px-USS_Arizona_during_the_Pearl_Harbor_attack.jpg'
  },
  {
    year: 1942,
    title: 'Battle of Midway',
    description: 'A decisive naval battle and a major turning point in the Pacific War.',
    longDescription: 'The U.S. Navy defeated a Japanese attack against Midway Atoll, losing one aircraft carrier but sinking four of Japan\'s carriers. This victory allowed the US to move into an offensive position.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Battle_of_Midway_-_Japanese_cruiser_Mogami.jpg/640px-Battle_of_Midway_-_Japanese_cruiser_Mogami.jpg'
  },
  {
    year: 1944,
    title: 'Battle of Leyte Gulf',
    description: 'The largest naval battle in history, fought in waters near the Philippine islands.',
    longDescription: 'This battle was part of the American strategy to reclaim the Philippines. The Japanese Navy suffered heavy losses and was unable to conduct large-scale operations for the remainder of the war.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/USS_St._Lo_exploding.jpg/640px-USS_St._Lo_exploding.jpg'
  },
  {
    year: 1945,
    title: 'Battle of Iwo Jima & Okinawa',
    description: 'Two of the bloodiest battles in the Pacific War as US forces closed in on Japan.',
    longDescription: 'These battles were fought on Japanese home islands. The fierce fighting and high casualty rates on both sides influenced the decision to use atomic bombs to end the war.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Raising_the_Flag_on_Iwo_Jima%2C_larger_frame.jpg/640px-Raising_the_Flag_on_Iwo_Jima%2C_larger_frame.jpg'
  },
  {
    year: 1945,
    title: 'Atomic Bombings of Hiroshima & Nagasaki',
    description: 'The US drops atomic bombs on two Japanese cities, leading to Japan\'s surrender.',
    longDescription: 'On August 6 and 9, 1945, the United States dropped atomic bombs on Hiroshima and Nagasaki, respectively. The unprecedented destruction led Emperor Hirohito to announce Japan\'s unconditional surrender on August 15.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nagasakibomb.jpg/640px-Nagasakibomb.jpg'
  },
];

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  {
    name: 'Franklin D. Roosevelt',
    role: 'U.S. President',
    bio: 'President of the United States for most of WWII. He led the country through the Great Depression and the war, declaring war on Japan after the Pearl Harbor attack.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Franklin_D._Roosevelt_in_1933.jpg/512px-Franklin_D._Roosevelt_in_1933.jpg'
  },
  {
    name: 'Harry S. Truman',
    role: 'U.S. President',
    bio: 'Became president after Roosevelt\'s death in 1945. He made the decision to use atomic bombs on Hiroshima and Nagasaki to end the war.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Harry_S_Truman%2C_bw_half-length_photo_portrait%2C_facing_front%2C_1945.jpg/512px-Harry_S_Truman%2C_bw_half-length_photo_portrait%2C_facing_front%2C_1945.jpg'
  },
  {
    name: 'Emperor Hirohito',
    role: 'Emperor of Japan',
    bio: 'The Emperor of Japan during WWII. While his actual involvement in military decisions is debated, he announced Japan\'s surrender to the Allied forces.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Emperor_Showa_in_dress_uniform.jpg/512px-Emperor_Showa_in_dress_uniform.jpg'
  },
  {
    name: 'Hideki Tojo',
    role: 'Prime Minister of Japan',
    bio: 'A general in the Imperial Japanese Army and Prime Minister of Japan for most of WWII. He was a strong supporter of the war and was later executed for war crimes.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Hideki_Tojo_in_1930s.jpg/512px-Hideki_Tojo_in_1930s.jpg'
  },
  {
    name: 'Douglas MacArthur',
    role: 'U.S. General',
    bio: 'Commander of Allied forces in the Pacific. He led the "island hopping" campaign and formally accepted Japan\'s surrender.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/General_of_the_Army_Douglas_MacArthur.jpg/512px-General_of_the_Army_Douglas_MacArthur.jpg'
  },
  {
    name: 'Isoroku Yamamoto',
    role: 'Japanese Admiral',
    bio: 'Commander-in-chief of Japan\'s Combined Fleet. He planned the attack on Pearl Harbor but was killed in 1943 when his plane was shot down.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Isoroku_Yamamoto_as_a_Marshal_Admiral.jpg/512px-Isoroku_Yamamoto_as_a_Marshal_Admiral.jpg'
  },
];

export const VOCABULARY_TERMS: VocabularyTerm[] = [
  {
    term: 'Axis Powers',
    definition: 'A military alliance during WWII, primarily consisting of Germany, Italy, and Japan.'
  },
  {
    term: 'Allied Powers',
    definition: 'A military alliance during WWII, primarily consisting of Great Britain, the United States, and the Soviet Union.'
  },
  {
    term: 'Island Hopping',
    definition: 'A military strategy used by the Allies in the Pacific War. They would capture important islands and bypass others to get closer to Japan.'
  },
  {
    term: 'Kamikaze',
    definition: 'Japanese suicide pilots who crashed their planes, loaded with explosives, into enemy warships.'
  },
  {
    term: 'Internment Camps',
    definition: 'Camps where Japanese Americans were forced to live during WWII due to fears of espionage, a controversial action by the U.S. government.'
  },
  {
    term: 'Unconditional Surrender',
    definition: 'A surrender in which no guarantees are given to the surrendering party. The Allies demanded this from the Axis powers.'
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "What event caused the United States to enter World War II?",
    options: ["The invasion of Poland", "The Battle of Britain", "The attack on Pearl Harbor", "The fall of France"],
    correctAnswer: "The attack on Pearl Harbor"
  },
  {
    question: "Which battle is considered the turning point of the war in the Pacific?",
    options: ["Battle of Coral Sea", "Battle of Midway", "Battle of Guadalcanal", "Battle of Iwo Jima"],
    correctAnswer: "Battle of Midway"
  },
  {
    question: "What was the name of the American strategy to capture key islands in the Pacific?",
    options: ["Leapfrogging", "Trench Warfare", "Blitzkrieg", "Island Hopping"],
    correctAnswer: "Island Hopping"
  },
  {
    question: "Who was the Emperor of Japan during World War II?",
    options: ["Hideki Tojo", "Isoroku Yamamoto", "Emperor Hirohito", "Emperor Meiji"],
    correctAnswer: "Emperor Hirohito"
  },
  {
    question: "Which U.S. President made the decision to use the atomic bombs?",
    options: ["Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower", "Winston Churchill"],
    correctAnswer: "Harry S. Truman"
  },
];