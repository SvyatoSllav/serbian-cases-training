from django.contrib import admin
from .models import Question, Answer


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    search_fields = ('question',)
    list_filter = ('correct_answer',)



@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ('answer',)
    search_fields = ('answer',)