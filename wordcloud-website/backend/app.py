from flask import Flask, request, send_file
from flask_cors import CORS
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from io import BytesIO
import numpy as np
from PIL import Image, ImageDraw

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
    
    # Convert wordcloud to image
    wordcloud_image = wordcloud.to_image()

    # Use the bar image given in yapmap.png
    bar_image = Image.open('yapmap.png')

    # Calculate the height of the bar
    bar_height = bar_image.height

    # Create a new image with space for the wordcloud and the bar    echo "This is a test text for generating a word cloud." > test.txt
    combined_image = Image.new('RGBA', (wordcloud_image.width, wordcloud_image.height + bar_height))
    
    # Paste the wordcloud and the bar into the new image
    combined_image.paste(wordcloud_image, (0, 0))
    combined_image.paste(bar_image, (0, wordcloud_image.height))

    # Save the combined image to a BytesIO object
    img = BytesIO()
    combined_image.save(img, format='PNG')
    img.seek(0)
    return send_file(img, mimetype='image/png')

@app.route('/')
def index():
    return 'YapMap API'

if __name__ == '__main__':
    app.run()