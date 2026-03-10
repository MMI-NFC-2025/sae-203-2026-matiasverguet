/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3556671029")

  // remove field
  collection.fields.removeById("number2716462395")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3556671029")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number2716462395",
    "max": null,
    "min": null,
    "name": "capacite",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
