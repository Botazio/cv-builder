from flask import Flask, request

app = Flask(__name__)


# Default route to check if the server is running
@app.route("/", methods=['GET'])
def hello_world():
    return "<p>Hello, World!</p>"


# Route to generate the CVs. Takes the user data as argument
@app.route("/curriculum", methods=['POST'])
def generate_CVs():
    user_data = request.data
    return "<p>Hello, World!</p>"


# Route to get a generated CV
@app.route("/curriculum/<id>", methods=['GET'])
def get_PDF():

    return "<p>Hello, World!</p>"


if __name__ == "__main__":
    app.run(debug=True)
