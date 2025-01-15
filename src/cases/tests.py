from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Question, Answer


class QuestionAnswerAPITests(APITestCase):

    def setUp(self):
        # Create sample questions and answers for testing
        self.question1 = Question.objects.create(title="Question 1", content="Content of question 1")
        self.question2 = Question.objects.create(title="Question 2", content="Content of question 2")
        
        self.answer1 = Answer.objects.create(question=self.question1, content="Answer 1 for question 1")
        self.answer2 = Answer.objects.create(question=self.question2, content="Answer 2 for question 2")

    def test_get_question_list(self):
        url = reverse('question-list')  # Assuming you have set the name in your URLs
        response = self.client.get(url)

        # Check that the response is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check that the response data is correct
        self.assertEqual(len(response.data), 2)  # We expect 2 questions to be returned
        self.assertEqual(response.data[0]['title'], self.question1.title)
        self.assertEqual(response.data[1]['title'], self.question2.title)

    def test_get_answer_list(self):
        url = reverse('answer-list')  # Assuming you have set the name in your URLs
        response = self.client.get(url)

        # Check that the response is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check that the response data is correct
        self.assertEqual(len(response.data), 2)  # We expect 2 answers to be returned
        self.assertEqual(response.data[0]['content'], self.answer1.content)
        self.assertEqual(response.data[1]['content'], self.answer2.content)
