from django.shortcuts import render, HttpResponse, HttpResponseRedirect
from .models import project, tool, course, service
from django.core.mail import send_mail
from django.urls import reverse
from django.http import JsonResponse

# Create your views here.


def index(request):
    if request.method == "GET":
        projects = project.objects.order_by("-importancy")
        tools = tool.objects.all()
        courses = course.objects.order_by("-importancy")
        services = service.objects.all()
        msg = request.session.get('msg', False)
        if (msg) : del(request.session['msg'])
        return render(request, "portfolio/index.html",{"projects":projects,"tools":tools,"courses":courses,"services":services, "message":msg})

    if request.method == "POST":
        name = request.POST["name"]
        email = request.POST["email"]
        message = request.POST["message"]

        request.session["msg"] = name

        send_mail(
        name,
        "Email from: "+email+"\n"+message,
        "onilshamoon97@gmail.com",
        ['onilshamoon97@gmail.com'],
        )
        return HttpResponseRedirect(request.path_info)
