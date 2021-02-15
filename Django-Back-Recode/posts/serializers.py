from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Post, Comentario, Categoria


class PostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Post
        fields = [
            'id',
            'titulo_post',
            'autor_post',
            'data_post',
            'conteudo_post',
            'categoria_post',
            'imagem_post',
            'publicado_post',
        ]

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'email',
            'password',
            'is_superuser',
            'is_staff',
            'is_active',
            'last_login',
            'date_joined',
        ]