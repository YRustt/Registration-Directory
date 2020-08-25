from rest_framework import generics

from .models import Department, Person
from .serializers import DepartmentListSerializer, DepartmentDetailSerializer


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
    serializer_class = DepartmentDetailSerializer
