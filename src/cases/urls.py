from django.urls import path
from cases.views import QuestionListAPIView, AnswerListAPIView

urlpatterns = [
    path('questions/', QuestionListAPIView.as_view(), name='question-list'),
    path('answers/', AnswerListAPIView.as_view(), name='answer-list'),
]
