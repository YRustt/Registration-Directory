from django.urls import path

from .views import (
    DepartmentListView,
    DepartmentCreateView,
    DepartmentDetailView,
    PersonCreateView,
    PersonDetailView
)


app_name = "registration_directory"
urlpatterns = [
    path("departments/", DepartmentListView.as_view(), name="departments"),
    path("department/create/", DepartmentCreateView.as_view(), name="department_create"),
    path("department/<int:pk>/", DepartmentDetailView.as_view(), name="department"),
    path("person/create/", PersonCreateView.as_view(), name="person_create"),
    path("person/<int:pk>/", PersonDetailView.as_view(), name="person"),
]
