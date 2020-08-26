from rest_framework import serializers

from .models import Department, Person


class PersonListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ["id", "surname", "name", "patronymic", "avatar"]


class PersonDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = "__all__"


class DepartmentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ["id", "name", "image"]


class DepartmentDetailSerializer(serializers.ModelSerializer):
    staff = PersonListSerializer(many=True, read_only=True)

    class Meta:
        model = Department
        fields = ["id", "name", "description", "image", "staff"]


class DeparmentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = "__all__"
