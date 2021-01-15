{
  "$schema": "http://json-schema.org/draft-07/schema#",
  definitions: {
    "release": ({
      "type": "object"
    } + .components.schemas.release),
    "release-asset": ({
      "type": "object"
    } + .components.schemas."release-asset"),
    "simple-user": ({
      "type": "object"
    } + .components.schemas."simple-user")
  }
}
+ .paths."/repos/{owner}/{repo}/releases".get.responses."200".content."application/json".schema
| ."definitions"."release-asset"."properties"."uploader"."type" |= "object"
| ."definitions"."release"."properties"."upload_url"."format" |= "uri-template"
| ."definitions"."simple-user"."properties"."following_url"."format" |= "uri-template"
| ."definitions"."simple-user"."properties"."gists_url"."format" |= "uri-template"
| ."definitions"."simple-user"."properties"."starred_url"."format" |= "uri-template"
| ."definitions"."simple-user"."properties"."events_url"."format" |= "uri-template"
| walk(
  if type == "string"
  then
    sub("^#/components/schemas/"; "#/definitions/")
  else
    .
  end
)
| del(.definitions[].properties[].example)
