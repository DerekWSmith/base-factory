from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def ApiTest(request):
    return JsonResponse('{"message":"This is plain text response. It demonstrates only the V1 of the API is accessible.}', content_type='application/json')

