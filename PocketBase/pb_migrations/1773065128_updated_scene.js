/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3556671029")

  // update collection data
  unmarshal({
    "name": "scenes"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3556671029")

  // update collection data
  unmarshal({
    "name": "scene"
  }, collection)

  return app.save(collection)
})
