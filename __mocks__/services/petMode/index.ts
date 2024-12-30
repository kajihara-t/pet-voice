import { mockApiCall } from "../../api/mockApi";
import type { MockResponse } from "../../api/types";
import type { PetMoodAnalysis } from "./types";

const SAMPLE_MOODS = [
  "元気いっぱいで遊びたい気分元気いっぱいで遊びたい気分",
  "ちょっぴり甘えたい気分ちょっぴり甘えたい気分ちょっぴり甘えたい気分ちょっぴり甘えたい気分",
  "のんびりまったり気分",
  "お腹が空いて食べたい気分",
  "すやすや眠たい気分すやすや眠たい気分",
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
