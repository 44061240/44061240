from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route("/")
def index():
    df = pd.read_excel("data.xlsx")
    table_html = df.to_html(classes="data-table", index=False)
    return render_template("index.html", table=table_html)

if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0", port=10000)
