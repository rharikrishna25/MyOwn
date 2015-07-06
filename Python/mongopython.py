import pymongo
client = pymongo.MongoClient("localhost", 27017)
db = client.test
print(db.name)
print(db.my_collection)
db.my_collection.insert_one({"x": 10}).inserted_id
db.my_collection.insert_one({"x": 8}).inserted_id
db.my_collection.insert_one({"x": 11}).inserted_id
db.my_collection.find_one()
for item in db.my_collection.find():
    print (item["x"])