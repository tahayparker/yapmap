from flask import Flask, request, send_file
from flask_cors import CORS
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from io import BytesIO
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/api/generate', methods=['POST'])
def generate_wordcloud():
    if 'file' in request.files:
        file = request.files['file']
        text = file.read().decode('utf-8')
    else:
        text = request.form['text']

    wordcloud = WordCloud(width=1600, height=800, background_color=None, mode='RGBA').generate(text)
    
    # Create a new figure with space for the bar
    fig, ax = plt.subplots(figsize=(10, 5.5), dpi=200)
    ax.imshow(wordcloud, interpolation='bilinear')
    ax.axis("off")
    
    # Add the bar with project name and website
    bar_height = 50
    bar = np.ones((bar_height, wordcloud.width, 4), dtype=np.uint8) * 000  # Black bar
    ax.imshow(bar, extent=(0, wordcloud.width, -bar_height, 0), aspect='auto')
    ax.text(wordcloud.width / 2, -bar_height / 2, "WhatYap - whatyap.vercel.app", ha='center', va='center', fontsize=12, color='white')

    img = BytesIO()
    plt.savefig(img, format='png', bbox_inches='tight', pad_inches=0, transparent=True)
    img.seek(0)
    return send_file(img, mimetype='image/png')

@app.route('/')
def index():
    return 'Wordcloud API'

if __name__ == '__main__':
    app.run()