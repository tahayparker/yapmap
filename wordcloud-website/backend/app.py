from flask import Flask, request, send_file
from flask_cors import CORS
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from io import BytesIO

app = Flask(__name__)
CORS(app)

@app.route('/api/generate', methods=['POST'])
def generate_wordcloud():
    if 'file' in request.files:
        file = request.files['file']
        text = file.read().decode('utf-8')
    else:
        text = request.form['text']

    wordcloud = WordCloud(width=800, height=400, background_color=None, mode='RGBA').generate(text)
    img = BytesIO()
    plt.figure(figsize=(10, 5), dpi=200)
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis("off")
    plt.savefig(img, format='png', bbox_inches='tight', pad_inches=0, transparent=True)
    img.seek(0)
    return send_file(img, mimetype='image/png')

@app.route('/')
def index():
    #console log to see if it is working
    print('Wordcloud API')
    
    return 'Wordcloud API'

if __name__ == '__main__':
    app.run()