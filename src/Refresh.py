from flask import Flask, request, jsonify
import shutil

app = Flask(__name__)

@app.route("/refreshwords", methods=["POST"])
def check_word():
    source_file = 'src/Words.txt'
    destination_file = 'src/newWords.txt'

    shutil.copyfile(source_file, destination_file)

    # Return the result as JSON
    return

if __name__ == "__main__":
    app.run()