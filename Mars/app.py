# import necessary libraries
from flask import Flask, render_templates, request, redirect,  url_for
from flask_pymongo import pymongo
import scrapeMars 

# create an instance of flask app
app = Flask(__name__)

client = pymongo.MongoClient()
db = client.astronomy_db
collection = db.mars

# client = PyMongo(app)


# create route that renders the html template for home and redo
@app.route("/")
def home():
    data = db.collection.find_one()
    return render_templates('index.html',data=data)


@app.route("/scrape")
def scrape():

    # db.collection.delete_many({})
    # scrappedData = scrapeMars.scrape()
    # print(scrappedData)
    # db.collection.insert_one(scrappedData)
    # print(list(db.collection.find()))
    # return redirect(url_for('home'))

    mars = client.db.mars
    mars_data = scrapeMars.scrape()
    mars.update(
        {},
        mars_data,
        upsert=True
    )
    return "Scrape"



# run as a python script
if __name__ == "__main__":
    app.run(debug=True)


