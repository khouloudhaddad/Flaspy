from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/users", methods=['GET'])
def users():
    return jsonify(
        {
            "users": [
                "user1",
                "user2",
                "user3",
                "user4"
            ]
        }
    )

if __name__ == "__main__":
    app.run(debug=True, port=8080)