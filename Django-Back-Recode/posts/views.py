from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Post, Categoria, Comentario
from django.contrib.auth.models import User
#Serializers
from .serializers import PostSerializer, UserSerializer

class PostsAPIView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class UserAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer