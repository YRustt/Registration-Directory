from django.db import models
from django.core.validators import RegexValidator

from .utils import rename


class Department(models.Model):
    name = models.CharField(max_length=1024, unique=True, db_index=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to=rename("images/departments/"), null=True, blank=True)
    main_departments = models.ForeignKey("Department", on_delete=models.SET_NULL,
                                         related_name="subordinate_departments",
                                         null=True, blank=True)

    def __str__(self):
        return self.name


class Person(models.Model):
    PHONE_REGEX = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"

    surname = models.CharField(max_length=256, db_index=True)
    name = models.CharField(max_length=256, db_index=True)
    patronymic = models.CharField(max_length=256, db_index=True)
    date_of_birth = models.DateField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    home_phone = models.CharField(max_length=64, null=True, blank=True,
                                  validators=[RegexValidator(regex=PHONE_REGEX)])
    mobile_phone = models.CharField(max_length=64, null=True, blank=True,
                                    validators=[RegexValidator(regex=PHONE_REGEX)])
    email = models.EmailField(null=True, blank=True)
    avatar = models.ImageField(upload_to=rename("images/avatars/"), null=True, blank=True)
    department = models.ForeignKey("Department", on_delete=models.CASCADE,
                                   related_name="staff")

    def __str__(self):
        return f"{self.surname} {self.name} {self.patronymic}"
