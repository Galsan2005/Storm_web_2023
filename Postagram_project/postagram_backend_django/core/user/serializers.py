from rest_framework import serializers
from core.abstract.serializers import AbstractSerializer
from core.user.models import User

class UserSerializer(AbstractSerializer):
    posts_count = serializers.SerializerMethodField()
    
    def get_posts_count(self, instance):
        return instance.post_set.all().count()
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "posts_count",
            # "bio",
            # "avatar",
            "email",
            "is_active",
            "created",
            "updated",
        ]
        read_only_field = ["is_active"]
