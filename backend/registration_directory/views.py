from rest_framework import generics
from rest_framework.parsers import MultiPartParser
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Department, Person
from .serializers import (
    DepartmentListSerializer,
    DepartmentDetailSerializer,
    DeparmentCreateSerializer,
    PersonDetailSerializer
)
from .permissions import IsAdminUserOrReadOnly


class DepartmentListView(generics.ListAPIView):
    serializer_class = DepartmentListSerializer

    def get_queryset(self):
        main_department = self.request.GET.get("main_department", None)
        if main_department is None:
            queryset = Department.objects.filter(main_departments__isnull=True)
        else:
            queryset = Department.objects.filter(main_departments__id=main_department)

        return queryset


class DepartmentCreateView(generics.CreateAPIView):
    serializer_class = DeparmentCreateSerializer
    permission_classes = [IsAdminUserOrReadOnly]
    parser_classes = [MultiPartParser]


class DepartmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentDetailSerializer
    permission_classes = [IsAdminUserOrReadOnly]


class PersonCreateView(generics.CreateAPIView):
    serializer_class = PersonDetailSerializer
    permission_classes = [IsAdminUserOrReadOnly]
    parser_classes = [MultiPartParser]


class PersonDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonDetailSerializer
    permission_classes = [IsAdminUserOrReadOnly]


class IsAdminView(APIView):
    permission_classes = [IsAdminUserOrReadOnly]

    def get(self, request, format=None):
        return Response({
            "is": request.user.is_staff
        })
