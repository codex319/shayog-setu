from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle
import numpy as np

app = Flask(__name__)

# load once at startup, not per-request — loading is slow, reuse across calls
model = load_model('complaint_lstm_model.keras')
tokenizer = pickle.load(open('tokenizer.pkl', 'rb'))
label_map = pickle.load(open('label_map.pkl', 'rb'))
maxlen = 30  # use the same maxlen you trained with

@app.route('/classify', methods=['POST'])
def classify():
    data = request.get_json()
    complaint_text = data['text']

    cleaned = clean_text(complaint_text)   # same cleaning function used in training
    seq = tokenizer.texts_to_sequences([cleaned])
    padded = pad_sequences(seq, maxlen=maxlen, padding='post')

    probs = model.predict(padded)[0]
    predicted_label = int(np.argmax(probs))

    return jsonify({
        "category": label_map[predicted_label],
        "confidence": float(probs[predicted_label])
    })

if __name__ == '__main__':
    app.run(port=5001)