from django.shortcuts import render
from api.models import Profile, User  # Corrected capitalization of Profile and User
from api.serializer import UserSerializer, MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework.response import Response  # Corrected import statement for Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes  # Corrected import statement for decorators
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()  # Corrected typo in queryset definition
    permission_classes = (AllowAny,)  # Corrected tuple syntax for permission_classes
    serializer_class = RegisterSerializer

@api_view(['GET', 'POST'])  # Corrected syntax for specifying HTTP methods
@permission_classes([IsAuthenticated])  # Corrected syntax for specifying permission_classes
def DashboardView(request):
    if request.method == 'GET':
        context = f"Hey {request.user}, You are seeing a GET response"
        return Response({'response': context}, status=status.HTTP_200_OK)  # Corrected status code syntax
    elif request.method == 'POST':
        text = request.data.get("text")  # Changed request.POST to request.data for REST framework
        context = f"Hey {request.user}, You are seeing a POST response. Your text is {text}"  # Changed response to context for correct variable usage
        return Response({'response': context}, status=status.HTTP_200_OK)  # Corrected status code syntax
    return Response({}, status=status.HTTP_400_BAD_REQUEST)  # Corrected status code syntax
