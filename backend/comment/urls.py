from django.urls import path, include
from comment import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.get_all_comments,),
    path('all/', views.get_all_comments),
    path('comments/', views.user_comments),
    path('comments/<str:video_id>', views.get_comments_for_video),
]