from django.db import models


class Question(models.Model):
    question = models.CharField(max_length=255)
    answers = models.ManyToManyField('Answer', related_name="question")
    correct_answer = models.ManyToManyField('Answer', related_name="correct_question")


class Answer(models.Model):
    answer = models.CharField(max_length=255)

    def __str__(self):
        return self.answer
