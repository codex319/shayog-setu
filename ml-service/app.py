from flask import Flask, request, jsonify
import pickle
import re
import numpy as np
import nltk
from nltk.corpus import stopwords
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences

nltk.download("stopwords", quiet=True)
stop_words = set(stopwords.words("english"))

app = Flask(__name__)

model = load_model("complaint_lstm_model.keras")
with open("tokenizer.pkl", "rb") as f:
    tokenizer = pickle.load(f)
with open("label_map.pkl", "rb") as f:
    label_map = pickle.load(f)

MAXLEN = 26  # from training: max(len(seq) for seq in sequences)

def clean_text(text):
    text = str(text).lower()
    text = re.sub(r"[^\w\s]", " ", text)
    words = [w for w in text.split() if w not in stop_words]
    return " ".join(words)

@app.route("/classify", methods=["POST"])
def classify():
    text = request.json.get("text", "")
    cleaned = clean_text(text)
    seq = tokenizer.texts_to_sequences([cleaned])
    padded = pad_sequences(seq, maxlen=MAXLEN, padding="post")
    pred = model.predict(padded)
    label_idx = int(np.argmax(pred))
    label = label_map[label_idx]
    return jsonify({"category": label, "confidence": float(np.max(pred))})

if __name__ == "__main__":
    app.run(port=5001)