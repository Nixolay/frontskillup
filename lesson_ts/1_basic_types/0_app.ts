
// Запрос
const request: string = {
	"topicId": 5,
	"status": "published" // "draft", "deleted"
}

// Ответ
const response: string = [
	{
		"question": "Как осуществляется доставка?",
		"answer": "быстро!",
		"tags": [
			"popular",
			"new"
		],
		"likes": 3,
		"status": "published"
	}
]


enum QuestionStatus {
  Published = "published",
  Draft = "draft",
  Deleted="deleted"
}

async function getFaqs(req: {
  topicId: number,
  status: QuestionStatus
}): Promise<{
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: QuestionStatus;
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}