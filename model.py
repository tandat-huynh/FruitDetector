import json
import torch.nn.functional as F
import torch
import io
import torch.nn as nn
from timm import create_model
from PIL import Image
import torchvision.transforms as transforms
import numpy as np

with open('class_convert.json') as f:
    class_convert = json.load(f)


def classifier():
    
    model = create_model('efficientnet_b0', pretrained=True)

    model.classifier = nn.Linear(model.classifier.in_features, 120)
    
    checkpoint = torch.load('checkpoint.pth', map_location='cpu')
    model.load_state_dict(checkpoint['model_state_dict'])

    model.eval()

    return model

def classify():
    
    model = classifier()

    image_transforms = transforms.Compose([transforms.Resize(256),
                                      transforms.CenterCrop(224),
                                      transforms.ToTensor(),
                                      transforms.Normalize([0.485, 0.456, 0.406],[0.229, 0.224, 0.225])])
    
    image = Image.open('test.jpg').convert('RGB')

    image_tensor = image_transforms(image).unsqueeze(0)

    outputs = model.forward(tensor)
    
    probs = F.softmax(outputs, dim=1)
      
    top_3_probs, top_3_classes = probs.topk(k=3)
    top_3_probs = top_3_probs.detach().numpy().tolist()[0]
    top_3_classes = top_3_classes.detach().numpy().tolist()[0]
      
    top_3_names = [class_convert[str(class_num)] for class_num in top_3_classes]
    return top_3_probs, top_3_classes, top_3_names
    
probs, classes, names = classify()

print(probs)
print(classes)
print(names)