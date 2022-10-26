// Запрос
const request: string = {
  topicId: 5,
  status: "published", // "draft", "deleted"
};

// Ответ
const response: string = [
  {
    question: "Как осуществляется доставка?",
    answer: "быстро!",
    tags: ["popular", "new"],
    likes: 3,
    status: "published",
  },
];

enum QuestionStatus {
  Published = "published",
  Draft = "draft",
  Deleted = "deleted",
}

type request = {
  topicId: number;
  status: QuestionStatus;
};

type response = {
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: QuestionStatus;
};

async function getFaqs(req: request): Promise<[response]> {
  const res = await fetch("/faqs", {
    method: "POST",
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}
