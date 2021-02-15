from django.urls import path

from .views import PostsAPIView, UserAPIView

urlpatterns = [
    path('posts', PostsAPIView.as_view(), name='posts'),
    path('users', UserAPIView.as_view(), name='users'),
]