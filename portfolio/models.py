from django.db import models

# Create your models here.
class project(models.Model):
    name = models.CharField(max_length = 64, null=False)
    imageURL = models.URLField()
    description = models.TextField(max_length=1024)
    githublink = models.URLField(null=True)
    youtubelink = models.URLField(null=True)
    tools = models.ManyToManyField("tool", related_name="projects")
    category = models.CharField(max_length = 64, null=False)
    images = models.ManyToManyField("prjImage", related_name="projects")
    features = models.TextField()
    importancy = models.PositiveSmallIntegerField()


    def __str__(self):
        return self.name;

    def prjFeatures(self):
        return self.features.split(", ")






class course(models.Model):
    title = models.CharField(max_length = 64, null=False)
    provider = models.CharField(max_length = 64, null=False)
    link = models.URLField()
    description = models.TextField()
    certificate = models.URLField()
    date = models.DateField()
    importancy = models.PositiveSmallIntegerField()


    def __str__(self):
        return self.title;


class tool(models.Model):

    types =(
    ("PL", "programing language"),
    ("TL", "tool")
)



    name = models.CharField(max_length = 64, null=False)
    iconLink = models.URLField()
    toolLink = models.URLField()
    type = models.CharField(choices=types, max_length=2, blank=True, default="PL")


    def __str__(self):
        return self.name;


class prjImage(models.Model):
    link = models.URLField()
    project = models.ForeignKey(project,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)


class service(models.Model):
    title = models.CharField(max_length=64)
    icon = models.URLField()
    category = models.CharField(max_length=64, null=True, blank=True)

    def __str__(self):
        return self.title
