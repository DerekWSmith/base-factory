from django.contrib.auth import get_user_model

from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import RegisterUserSerializer

User = get_user_model()


class RegisterUser(CreateAPIView):
    serializer_class = RegisterUserSerializer
    permission_classes = [AllowAny,]

    def create(self, request, *args, **kwargs):
        """
        Return JWT tokens on successful registration of new user.
        """
        response = super().create(request, *args, **kwargs)
        user = User.objects.get(email=request.data.get('email'))
        tokens = RefreshToken.for_user(user)
        response.data = {
            'refresh': str(tokens),
            'access': str(tokens.access_token),
        }

        return response
