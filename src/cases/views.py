from rest_framework import generics
from .models import Question, Answer
from .serializers import QuestionSerializer, AnswerSerializer


class QuestionListAPIView(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class AnswerListAPIView(generics.ListAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer