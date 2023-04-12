from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    context={
        "variable":"Automated Attendance System Using facial recogination",
        "list":"[1,2,3,4,5]"
    }
    return render(request, 'index.html', context)
def home(request):
    home={"home":'This is my home page\n Wlcome to the my blog my name is aniket singh'}
    return render(request, 'index.html', home)

# Dynamic routing
def course(request):
    return HttpResponse("Aniket singh oriental university")

def courseDetails(request, courseid):
    return HttpResponse(courseid)
def bodyy(request):
    return render(request, "body.html")