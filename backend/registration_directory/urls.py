from django.urls import path

from .views import DepartmentListView, DepartmentCreateView


app_name = "registration_directory"
urlpatterns = [
    path("departments/", DepartmentListView.as_view(), name="departments"),
    path("department/create/", DepartmentCreateView.as_view(), name="department_create"),
]
