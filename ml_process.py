from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch

model = AutoModelForSequenceClassification.from_pretrained(
    "C:\Users\happy\Documents\Phishing_Detection_Training_Model"
)
tokenizer = AutoTokenizer.from_pretrained(
    "C:\Users\happy\Documents\Phishing_Detection_Training_Model"
)

def process_data_and_predict(data):
    # Preprocess data if needed

    # Pass data through the model
    with torch.no_grad():
        inputs = tokenizer(data, return_tensors="pt", padding=True, truncation=True)
        outputs = model(**inputs)
        predictions = outputs.logits

    # Post-process predictions if needed

    return predictions