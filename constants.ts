import { Arc, Chapter, Character, Comment } from "./types";
import mangaData from "./scraped_ru8jmi-gachiakuta.json";

// Gachiakuta began serialization on February 16, 2022
const SERIES_START = new Date("2022-02-16T00:00:00Z").getTime();
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

export const MOCK_CHAPTERS: Chapter[] = [...mangaData.chapters]
  .sort((a, b) => b.chapter_number - a.chapter_number)
  .map(ch => ({
    id: String(ch.chapter_number),
    number: ch.chapter_number,
    title: ch.chapter_title,
    releaseDate: new Date(
      SERIES_START + (ch.chapter_number - 1) * MS_PER_WEEK
    ).toISOString(),
    pages: ch.image_urls,
  }));

export const CHARACTERS: Character[] = [
  {
    "id": "ludo",
    "name": "Ludo",
    "role": "Protagonist",
    "grade": "Giver",
    "description": "A trash collector thrown into the Abyss who wields gloves as Jinki.",
    "image": "https://picsum.photos/400/600?random=10"
  },
  {
    "id": "engine",
    "name": "Engine",
    "role": "Ally",
    "grade": "Giver / Leader",
    "description": "The leader of the Janitors who rescues Ludo and wields a Jinki umbrella.",
    "image": "https://picsum.photos/400/600?random=11"
  },
  {
    "id": "ryo",
    "name": "Ryo",
    "role": "Ally",
    "grade": "Giver",
    "description": "A skilled Janitor with a quirky personality and scissor Jinki.",
    "image": "https://picsum.photos/400/600?random=12"
  }
];

export const ARCS: Arc[] = [
  {
    "id": "abyss",
    "title": "Abyss Arrival Arc",
    "description": "Ludo falls into the Abyss and learns about Janitors and Jinki.",
    "chapterStart": 1,
    "chapterEnd": 12,
    "image": "https://picsum.photos/600/300?random=20"
  },
  {
    "id": "janitors",
    "title": "Janitors Selection Arc",
    "description": "Ludo tests his abilities and joins the ranks of the Janitors.",
    "chapterStart": 13,
    "chapterEnd": 30,
    "image": "https://picsum.photos/600/300?random=21"
  }
];

export const MOCK_COMMENTS: Comment[] = [
  {
    "id": "1",
    "user": "Fanatic99",
    "content": "Ludo is devouring everyone! What an absolute legend.",
    "date": "2 hours ago",
    "likes": 155
  },
  {
    "id": "2",
    "user": "SeriesFan",
    "content": "Engine is insane. Best character!",
    "date": "5 hours ago",
    "likes": 230
  },
  {
    "id": "3",
    "user": "Otaku",
    "content": "This manga is pure hype. The art is incredible.",
    "date": "1 day ago",
    "likes": 89
  }
];
