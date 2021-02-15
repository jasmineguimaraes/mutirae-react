from django.contrib import admin

# Register your models here.
from .models import Post, Categoria, Comentario
from django_summernote.admin import SummernoteModelAdmin

@admin.register(Post)
class PostAdmin(SummernoteModelAdmin):
    list_display = ('id', 'titulo_post','autor_post', 'data_post', 'categoria_post','publicado_post',)
    list_editable = ('publicado_post',)
    list_display_links = ('id', 'titulo_post',)
    summernote_fields = ('conteudo_post',)

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome_cat')
    list_display_links =('id', 'nome_cat')

@admin.register(Comentario)
class ComentarioAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome_comentario','email_comentario','comentario', 'data_comentario', 'publicado_comentario',)

    list_editable = ('publicado_comentario',)
    list_display_links = ('id', 'nome_comentario', 'email_comentario',)



