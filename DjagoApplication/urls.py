from django.contrib import admin
from django.urls import path
from DjagoApplication import views

urlpatterns = [
    path("", views.index, name='index')
#     path("home", views.home, name='landingpage'),
#     path("course/", views.course),
#     path("course/<str:courseid>", views.courseDetails),
#     path("",views.bodyy)
 ]
