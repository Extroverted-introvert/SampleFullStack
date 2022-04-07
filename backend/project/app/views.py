from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import ReactSerializer
from .models import React
from rest_framework.response import Response

# Create your views here.
class ReactView(APIView):
    def get(self, request):
        output = [{'employee': ele.employee, 'department': ele.department} for ele in React.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)    