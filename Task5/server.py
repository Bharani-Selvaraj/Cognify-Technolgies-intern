# server.py
from flask import Flask, jsonify, request, redirect, url_for

app = Flask(__name__)

# Sample data
data = [
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"},
    {"id": 3, "name": "Item 3"}
]

# GET request to fetch all items
@app.route('/items', methods=['GET'])
def get_items():
    return jsonify(data)

# POST request to add a new item
@app.route('/items', methods=['POST'])
def add_item():
    new_item = request.json
    data.append(new_item)
    return jsonify(new_item), 201

# Route for the root URL, redirects to index.html
@app.route('/')
def index():
    return redirect(url_for('static', filename='index.html'))

if __name__ == '__main__':
    app.run(debug=True)
