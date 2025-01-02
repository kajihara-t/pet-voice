import { mockApiCall } from "../../api/mockApi";
import type { MockResponse } from "../../api/types";
import type { PetMoodAnalysis } from "./types";

const SAMPLE_MOODS = [
  "今日はもう何もしたくないワン…おやつの夢を見させて…。",
  "今夜は静かにしてくれ…ここは俺の城だ。",
  "ワシの昼寝タイムじゃ。余計なことはするでないぞ。",
  "うち、こんな感じで寝てるときが一番しあわせやねん。",
];

export const analyzePetMood = async (
  imageUri: string
): Promise<MockResponse<PetMoodAnalysis>> => {
  const randomMood =
    SAMPLE_MOODS[Math.floor(Math.random() * SAMPLE_MOODS.length)];

  return mockApiCall({
    mood: randomMood,
    confidence: Math.random() * 0.3 + 0.7,
    timestamp: new Date().toISOString(),
  });
};
