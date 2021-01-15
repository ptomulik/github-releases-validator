"use strict";
module.exports = validate20;
module.exports.default = validate20;
const schema22 = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "release": {
      "type": "object",
      "title": "Release",
      "description": "A release.",
      "properties": {
        "url": {
          "type": "string",
          "format": "uri"
        },
        "html_url": {
          "type": "string",
          "format": "uri"
        },
        "assets_url": {
          "type": "string",
          "format": "uri"
        },
        "upload_url": {
          "type": "string",
          "format": "uri-template"
        },
        "tarball_url": {
          "type": "string",
          "format": "uri",
          "nullable": true
        },
        "zipball_url": {
          "type": "string",
          "format": "uri",
          "nullable": true
        },
        "id": {
          "type": "integer"
        },
        "node_id": {
          "type": "string"
        },
        "tag_name": {
          "description": "The name of the tag.",
          "type": "string"
        },
        "target_commitish": {
          "description": "Specifies the commitish value that determines where the Git tag is created from.",
          "type": "string"
        },
        "name": {
          "type": "string",
          "nullable": true
        },
        "body": {
          "type": "string",
          "nullable": true
        },
        "draft": {
          "description": "true to create a draft (unpublished) release, false to create a published one.",
          "type": "boolean"
        },
        "prerelease": {
          "description": "Whether to identify the release as a prerelease or a full release.",
          "type": "boolean"
        },
        "created_at": {
          "type": "string",
          "format": "date-time"
        },
        "published_at": {
          "type": "string",
          "format": "date-time",
          "nullable": true
        },
        "author": {
          "$ref": "#/definitions/simple-user"
        },
        "assets": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/release-asset"
          }
        },
        "body_html": {
          "type": "string"
        },
        "body_text": {
          "type": "string"
        }
      },
      "required": ["assets_url", "upload_url", "tarball_url", "zipball_url", "created_at", "published_at", "draft", "id", "node_id", "author", "html_url", "name", "prerelease", "tag_name", "target_commitish", "assets", "url"]
    },
    "release-asset": {
      "type": "object",
      "title": "Release Asset",
      "description": "Data related to a release.",
      "properties": {
        "url": {
          "type": "string",
          "format": "uri"
        },
        "browser_download_url": {
          "type": "string",
          "format": "uri"
        },
        "id": {
          "type": "integer"
        },
        "node_id": {
          "type": "string"
        },
        "name": {
          "description": "The file name of the asset.",
          "type": "string"
        },
        "label": {
          "type": "string",
          "nullable": true
        },
        "state": {
          "description": "State of the release asset.",
          "type": "string",
          "enum": ["uploaded"]
        },
        "content_type": {
          "type": "string"
        },
        "size": {
          "type": "integer"
        },
        "download_count": {
          "type": "integer"
        },
        "created_at": {
          "type": "string",
          "format": "date-time"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time"
        },
        "uploader": {
          "nullable": true,
          "allOf": [{
            "$ref": "#/definitions/simple-user"
          }],
          "type": "object"
        }
      },
      "required": ["id", "name", "content_type", "size", "state", "url", "node_id", "download_count", "label", "uploader", "browser_download_url", "created_at", "updated_at"]
    },
    "simple-user": {
      "type": "object",
      "title": "Simple User",
      "description": "Simple User",
      "properties": {
        "login": {
          "type": "string"
        },
        "id": {
          "type": "integer"
        },
        "node_id": {
          "type": "string"
        },
        "avatar_url": {
          "type": "string",
          "format": "uri"
        },
        "gravatar_id": {
          "type": "string",
          "nullable": true
        },
        "url": {
          "type": "string",
          "format": "uri"
        },
        "html_url": {
          "type": "string",
          "format": "uri"
        },
        "followers_url": {
          "type": "string",
          "format": "uri"
        },
        "following_url": {
          "type": "string",
          "format": "uri-template"
        },
        "gists_url": {
          "type": "string",
          "format": "uri-template"
        },
        "starred_url": {
          "type": "string",
          "format": "uri-template"
        },
        "subscriptions_url": {
          "type": "string",
          "format": "uri"
        },
        "organizations_url": {
          "type": "string",
          "format": "uri"
        },
        "repos_url": {
          "type": "string",
          "format": "uri"
        },
        "events_url": {
          "type": "string",
          "format": "uri-template"
        },
        "received_events_url": {
          "type": "string",
          "format": "uri"
        },
        "type": {
          "type": "string"
        },
        "site_admin": {
          "type": "boolean"
        },
        "starred_at": {
          "type": "string"
        }
      },
      "required": ["avatar_url", "events_url", "followers_url", "following_url", "gists_url", "gravatar_id", "html_url", "id", "node_id", "login", "organizations_url", "received_events_url", "repos_url", "site_admin", "starred_url", "subscriptions_url", "type", "url"],
      "nullable": true
    }
  },
  "type": "array",
  "items": {
    "$ref": "#/definitions/release"
  }
};
const schema23 = {
  "type": "object",
  "title": "Release",
  "description": "A release.",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri"
    },
    "html_url": {
      "type": "string",
      "format": "uri"
    },
    "assets_url": {
      "type": "string",
      "format": "uri"
    },
    "upload_url": {
      "type": "string",
      "format": "uri-template"
    },
    "tarball_url": {
      "type": "string",
      "format": "uri",
      "nullable": true
    },
    "zipball_url": {
      "type": "string",
      "format": "uri",
      "nullable": true
    },
    "id": {
      "type": "integer"
    },
    "node_id": {
      "type": "string"
    },
    "tag_name": {
      "description": "The name of the tag.",
      "type": "string"
    },
    "target_commitish": {
      "description": "Specifies the commitish value that determines where the Git tag is created from.",
      "type": "string"
    },
    "name": {
      "type": "string",
      "nullable": true
    },
    "body": {
      "type": "string",
      "nullable": true
    },
    "draft": {
      "description": "true to create a draft (unpublished) release, false to create a published one.",
      "type": "boolean"
    },
    "prerelease": {
      "description": "Whether to identify the release as a prerelease or a full release.",
      "type": "boolean"
    },
    "created_at": {
      "type": "string",
      "format": "date-time"
    },
    "published_at": {
      "type": "string",
      "format": "date-time",
      "nullable": true
    },
    "author": {
      "$ref": "#/definitions/simple-user"
    },
    "assets": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/release-asset"
      }
    },
    "body_html": {
      "type": "string"
    },
    "body_text": {
      "type": "string"
    }
  },
  "required": ["assets_url", "upload_url", "tarball_url", "zipball_url", "created_at", "published_at", "draft", "id", "node_id", "author", "html_url", "name", "prerelease", "tag_name", "target_commitish", "assets", "url"]
};
const schema24 = {
  "type": "object",
  "title": "Simple User",
  "description": "Simple User",
  "properties": {
    "login": {
      "type": "string"
    },
    "id": {
      "type": "integer"
    },
    "node_id": {
      "type": "string"
    },
    "avatar_url": {
      "type": "string",
      "format": "uri"
    },
    "gravatar_id": {
      "type": "string",
      "nullable": true
    },
    "url": {
      "type": "string",
      "format": "uri"
    },
    "html_url": {
      "type": "string",
      "format": "uri"
    },
    "followers_url": {
      "type": "string",
      "format": "uri"
    },
    "following_url": {
      "type": "string",
      "format": "uri-template"
    },
    "gists_url": {
      "type": "string",
      "format": "uri-template"
    },
    "starred_url": {
      "type": "string",
      "format": "uri-template"
    },
    "subscriptions_url": {
      "type": "string",
      "format": "uri"
    },
    "organizations_url": {
      "type": "string",
      "format": "uri"
    },
    "repos_url": {
      "type": "string",
      "format": "uri"
    },
    "events_url": {
      "type": "string",
      "format": "uri-template"
    },
    "received_events_url": {
      "type": "string",
      "format": "uri"
    },
    "type": {
      "type": "string"
    },
    "site_admin": {
      "type": "boolean"
    },
    "starred_at": {
      "type": "string"
    }
  },
  "required": ["avatar_url", "events_url", "followers_url", "following_url", "gists_url", "gravatar_id", "html_url", "id", "node_id", "login", "organizations_url", "received_events_url", "repos_url", "site_admin", "starred_url", "subscriptions_url", "type", "url"],
  "nullable": true
};
const formats0 = require("ajv-formats/dist/formats").fullFormats.uri;
const formats6 = require("ajv-formats/dist/formats").fullFormats["uri-template"];
const formats12 = require("ajv-formats/dist/formats").fullFormats["date-time"];
const schema25 = {
  "type": "object",
  "title": "Release Asset",
  "description": "Data related to a release.",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri"
    },
    "browser_download_url": {
      "type": "string",
      "format": "uri"
    },
    "id": {
      "type": "integer"
    },
    "node_id": {
      "type": "string"
    },
    "name": {
      "description": "The file name of the asset.",
      "type": "string"
    },
    "label": {
      "type": "string",
      "nullable": true
    },
    "state": {
      "description": "State of the release asset.",
      "type": "string",
      "enum": ["uploaded"]
    },
    "content_type": {
      "type": "string"
    },
    "size": {
      "type": "integer"
    },
    "download_count": {
      "type": "integer"
    },
    "created_at": {
      "type": "string",
      "format": "date-time"
    },
    "updated_at": {
      "type": "string",
      "format": "date-time"
    },
    "uploader": {
      "nullable": true,
      "allOf": [{
        "$ref": "#/definitions/simple-user"
      }],
      "type": "object"
    }
  },
  "required": ["id", "name", "content_type", "size", "state", "url", "node_id", "download_count", "label", "uploader", "browser_download_url", "created_at", "updated_at"]
};
const func0 = require("ajv/dist/compile/equal");

function validate22(data, {
  dataPath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    let missing0;
    if (((((((((((((data.id === undefined && (missing0 = "id")) || (data.name === undefined && (missing0 = "name"))) || (data.content_type === undefined && (missing0 = "content_type"))) || (data.size === undefined && (missing0 = "size"))) || (data.state === undefined && (missing0 = "state"))) || (data.url === undefined && (missing0 = "url"))) || (data.node_id === undefined && (missing0 = "node_id"))) || (data.download_count === undefined && (missing0 = "download_count"))) || (data.label === undefined && (missing0 = "label"))) || (data.uploader === undefined && (missing0 = "uploader"))) || (data.browser_download_url === undefined && (missing0 = "browser_download_url"))) || (data.created_at === undefined && (missing0 = "created_at"))) || (data.updated_at === undefined && (missing0 = "updated_at"))) {
      validate22.errors = [{
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: {
          missingProperty: missing0
        },
        message: "should have required property '" + missing0 + "'"
      }];
      return false;
    } else {
      if (data.url !== undefined) {
        let data0 = data.url;
        const _errs0 = errors;
        if (errors === _errs0) {
          if (typeof data0 === "string") {
            if (!(formats0(data0))) {
              validate22.errors = [{
                keyword: "format",
                dataPath: dataPath + "/url",
                schemaPath: "#/properties/url/format",
                params: {
                  format: "uri"
                },
                message: "should match format \"" + "uri" + "\""
              }];
              return false;
            }
          } else {
            validate22.errors = [{
              keyword: "type",
              dataPath: dataPath + "/url",
              schemaPath: "#/properties/url/type",
              params: {
                type: "string"
              },
              message: "should be string"
            }];
            return false;
          }
        }
        var valid0 = _errs0 === errors;
      } else {
        var valid0 = true;
      }
      if (valid0) {
        if (data.browser_download_url !== undefined) {
          let data1 = data.browser_download_url;
          const _errs1 = errors;
          if (errors === _errs1) {
            if (typeof data1 === "string") {
              if (!(formats0(data1))) {
                validate22.errors = [{
                  keyword: "format",
                  dataPath: dataPath + "/browser_download_url",
                  schemaPath: "#/properties/browser_download_url/format",
                  params: {
                    format: "uri"
                  },
                  message: "should match format \"" + "uri" + "\""
                }];
                return false;
              }
            } else {
              validate22.errors = [{
                keyword: "type",
                dataPath: dataPath + "/browser_download_url",
                schemaPath: "#/properties/browser_download_url/type",
                params: {
                  type: "string"
                },
                message: "should be string"
              }];
              return false;
            }
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.id !== undefined) {
            let data2 = data.id;
            const _errs2 = errors;
            if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
              validate22.errors = [{
                keyword: "type",
                dataPath: dataPath + "/id",
                schemaPath: "#/properties/id/type",
                params: {
                  type: "integer"
                },
                message: "should be integer"
              }];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.node_id !== undefined) {
              const _errs3 = errors;
              if (typeof data.node_id !== "string") {
                validate22.errors = [{
                  keyword: "type",
                  dataPath: dataPath + "/node_id",
                  schemaPath: "#/properties/node_id/type",
                  params: {
                    type: "string"
                  },
                  message: "should be string"
                }];
                return false;
              }
              var valid0 = _errs3 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.name !== undefined) {
                const _errs4 = errors;
                if (typeof data.name !== "string") {
                  validate22.errors = [{
                    keyword: "type",
                    dataPath: dataPath + "/name",
                    schemaPath: "#/properties/name/type",
                    params: {
                      type: "string"
                    },
                    message: "should be string"
                  }];
                  return false;
                }
                var valid0 = _errs4 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.label !== undefined) {
                  let data5 = data.label;
                  const _errs5 = errors;
                  if ((typeof data5 !== "string") && (data5 !== null)) {
                    validate22.errors = [{
                      keyword: "type",
                      dataPath: dataPath + "/label",
                      schemaPath: "#/properties/label/type",
                      params: {
                        type: "string"
                      },
                      message: "should be string"
                    }];
                    return false;
                  }
                  var valid0 = _errs5 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.state !== undefined) {
                    let data6 = data.state;
                    const _errs7 = errors;
                    if (typeof data6 !== "string") {
                      validate22.errors = [{
                        keyword: "type",
                        dataPath: dataPath + "/state",
                        schemaPath: "#/properties/state/type",
                        params: {
                          type: "string"
                        },
                        message: "should be string"
                      }];
                      return false;
                    }
                    if (!(data6 === "uploaded")) {
                      validate22.errors = [{
                        keyword: "enum",
                        dataPath: dataPath + "/state",
                        schemaPath: "#/properties/state/enum",
                        params: {
                          allowedValues: schema25.properties.state.enum
                        },
                        message: "should be equal to one of the allowed values"
                      }];
                      return false;
                    }
                    var valid0 = _errs7 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.content_type !== undefined) {
                      const _errs8 = errors;
                      if (typeof data.content_type !== "string") {
                        validate22.errors = [{
                          keyword: "type",
                          dataPath: dataPath + "/content_type",
                          schemaPath: "#/properties/content_type/type",
                          params: {
                            type: "string"
                          },
                          message: "should be string"
                        }];
                        return false;
                      }
                      var valid0 = _errs8 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.size !== undefined) {
                        let data8 = data.size;
                        const _errs9 = errors;
                        if (!(((typeof data8 == "number") && (!(data8 % 1) && !isNaN(data8))) && (isFinite(data8)))) {
                          validate22.errors = [{
                            keyword: "type",
                            dataPath: dataPath + "/size",
                            schemaPath: "#/properties/size/type",
                            params: {
                              type: "integer"
                            },
                            message: "should be integer"
                          }];
                          return false;
                        }
                        var valid0 = _errs9 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.download_count !== undefined) {
                          let data9 = data.download_count;
                          const _errs10 = errors;
                          if (!(((typeof data9 == "number") && (!(data9 % 1) && !isNaN(data9))) && (isFinite(data9)))) {
                            validate22.errors = [{
                              keyword: "type",
                              dataPath: dataPath + "/download_count",
                              schemaPath: "#/properties/download_count/type",
                              params: {
                                type: "integer"
                              },
                              message: "should be integer"
                            }];
                            return false;
                          }
                          var valid0 = _errs10 === errors;
                        } else {
                          var valid0 = true;
                        }
                        if (valid0) {
                          if (data.created_at !== undefined) {
                            let data10 = data.created_at;
                            const _errs11 = errors;
                            if (errors === _errs11) {
                              if (typeof data10 === "string") {
                                if (!(formats12.validate(data10))) {
                                  validate22.errors = [{
                                    keyword: "format",
                                    dataPath: dataPath + "/created_at",
                                    schemaPath: "#/properties/created_at/format",
                                    params: {
                                      format: "date-time"
                                    },
                                    message: "should match format \"" + "date-time" + "\""
                                  }];
                                  return false;
                                }
                              } else {
                                validate22.errors = [{
                                  keyword: "type",
                                  dataPath: dataPath + "/created_at",
                                  schemaPath: "#/properties/created_at/type",
                                  params: {
                                    type: "string"
                                  },
                                  message: "should be string"
                                }];
                                return false;
                              }
                            }
                            var valid0 = _errs11 === errors;
                          } else {
                            var valid0 = true;
                          }
                          if (valid0) {
                            if (data.updated_at !== undefined) {
                              let data11 = data.updated_at;
                              const _errs12 = errors;
                              if (errors === _errs12) {
                                if (typeof data11 === "string") {
                                  if (!(formats12.validate(data11))) {
                                    validate22.errors = [{
                                      keyword: "format",
                                      dataPath: dataPath + "/updated_at",
                                      schemaPath: "#/properties/updated_at/format",
                                      params: {
                                        format: "date-time"
                                      },
                                      message: "should match format \"" + "date-time" + "\""
                                    }];
                                    return false;
                                  }
                                } else {
                                  validate22.errors = [{
                                    keyword: "type",
                                    dataPath: dataPath + "/updated_at",
                                    schemaPath: "#/properties/updated_at/type",
                                    params: {
                                      type: "string"
                                    },
                                    message: "should be string"
                                  }];
                                  return false;
                                }
                              }
                              var valid0 = _errs12 === errors;
                            } else {
                              var valid0 = true;
                            }
                            if (valid0) {
                              if (data.uploader !== undefined) {
                                let data12 = data.uploader;
                                const _errs13 = errors;
                                if ((!(data12 && typeof data12 == "object" && !Array.isArray(data12))) && (data12 !== null)) {
                                  validate22.errors = [{
                                    keyword: "type",
                                    dataPath: dataPath + "/uploader",
                                    schemaPath: "#/properties/uploader/type",
                                    params: {
                                      type: "object"
                                    },
                                    message: "should be object"
                                  }];
                                  return false;
                                }
                                const _errs16 = errors;
                                if ((!(data12 && typeof data12 == "object" && !Array.isArray(data12))) && (data12 !== null)) {
                                  validate22.errors = [{
                                    keyword: "type",
                                    dataPath: dataPath + "/uploader",
                                    schemaPath: "#/definitions/simple-user/type",
                                    params: {
                                      type: "object"
                                    },
                                    message: "should be object"
                                  }];
                                  return false;
                                }
                                if (errors === _errs16) {
                                  if (data12 && typeof data12 == "object" && !Array.isArray(data12)) {
                                    let missing1;
                                    if ((((((((((((((((((data12.avatar_url === undefined && (missing1 = "avatar_url")) || (data12.events_url === undefined && (missing1 = "events_url"))) || (data12.followers_url === undefined && (missing1 = "followers_url"))) || (data12.following_url === undefined && (missing1 = "following_url"))) || (data12.gists_url === undefined && (missing1 = "gists_url"))) || (data12.gravatar_id === undefined && (missing1 = "gravatar_id"))) || (data12.html_url === undefined && (missing1 = "html_url"))) || (data12.id === undefined && (missing1 = "id"))) || (data12.node_id === undefined && (missing1 = "node_id"))) || (data12.login === undefined && (missing1 = "login"))) || (data12.organizations_url === undefined && (missing1 = "organizations_url"))) || (data12.received_events_url === undefined && (missing1 = "received_events_url"))) || (data12.repos_url === undefined && (missing1 = "repos_url"))) || (data12.site_admin === undefined && (missing1 = "site_admin"))) || (data12.starred_url === undefined && (missing1 = "starred_url"))) || (data12.subscriptions_url === undefined && (missing1 = "subscriptions_url"))) || (data12.type === undefined && (missing1 = "type"))) || (data12.url === undefined && (missing1 = "url"))) {
                                      validate22.errors = [{
                                        keyword: "required",
                                        dataPath: dataPath + "/uploader",
                                        schemaPath: "#/definitions/simple-user/required",
                                        params: {
                                          missingProperty: missing1
                                        },
                                        message: "should have required property '" + missing1 + "'"
                                      }];
                                      return false;
                                    } else {
                                      if (data12.login !== undefined) {
                                        const _errs18 = errors;
                                        if (typeof data12.login !== "string") {
                                          validate22.errors = [{
                                            keyword: "type",
                                            dataPath: dataPath + "/uploader/login",
                                            schemaPath: "#/definitions/simple-user/properties/login/type",
                                            params: {
                                              type: "string"
                                            },
                                            message: "should be string"
                                          }];
                                          return false;
                                        }
                                        var valid3 = _errs18 === errors;
                                      } else {
                                        var valid3 = true;
                                      }
                                      if (valid3) {
                                        if (data12.id !== undefined) {
                                          let data14 = data12.id;
                                          const _errs19 = errors;
                                          if (!(((typeof data14 == "number") && (!(data14 % 1) && !isNaN(data14))) && (isFinite(data14)))) {
                                            validate22.errors = [{
                                              keyword: "type",
                                              dataPath: dataPath + "/uploader/id",
                                              schemaPath: "#/definitions/simple-user/properties/id/type",
                                              params: {
                                                type: "integer"
                                              },
                                              message: "should be integer"
                                            }];
                                            return false;
                                          }
                                          var valid3 = _errs19 === errors;
                                        } else {
                                          var valid3 = true;
                                        }
                                        if (valid3) {
                                          if (data12.node_id !== undefined) {
                                            const _errs20 = errors;
                                            if (typeof data12.node_id !== "string") {
                                              validate22.errors = [{
                                                keyword: "type",
                                                dataPath: dataPath + "/uploader/node_id",
                                                schemaPath: "#/definitions/simple-user/properties/node_id/type",
                                                params: {
                                                  type: "string"
                                                },
                                                message: "should be string"
                                              }];
                                              return false;
                                            }
                                            var valid3 = _errs20 === errors;
                                          } else {
                                            var valid3 = true;
                                          }
                                          if (valid3) {
                                            if (data12.avatar_url !== undefined) {
                                              let data16 = data12.avatar_url;
                                              const _errs21 = errors;
                                              if (errors === _errs21) {
                                                if (typeof data16 === "string") {
                                                  if (!(formats0(data16))) {
                                                    validate22.errors = [{
                                                      keyword: "format",
                                                      dataPath: dataPath + "/uploader/avatar_url",
                                                      schemaPath: "#/definitions/simple-user/properties/avatar_url/format",
                                                      params: {
                                                        format: "uri"
                                                      },
                                                      message: "should match format \"" + "uri" + "\""
                                                    }];
                                                    return false;
                                                  }
                                                } else {
                                                  validate22.errors = [{
                                                    keyword: "type",
                                                    dataPath: dataPath + "/uploader/avatar_url",
                                                    schemaPath: "#/definitions/simple-user/properties/avatar_url/type",
                                                    params: {
                                                      type: "string"
                                                    },
                                                    message: "should be string"
                                                  }];
                                                  return false;
                                                }
                                              }
                                              var valid3 = _errs21 === errors;
                                            } else {
                                              var valid3 = true;
                                            }
                                            if (valid3) {
                                              if (data12.gravatar_id !== undefined) {
                                                let data17 = data12.gravatar_id;
                                                const _errs22 = errors;
                                                if ((typeof data17 !== "string") && (data17 !== null)) {
                                                  validate22.errors = [{
                                                    keyword: "type",
                                                    dataPath: dataPath + "/uploader/gravatar_id",
                                                    schemaPath: "#/definitions/simple-user/properties/gravatar_id/type",
                                                    params: {
                                                      type: "string"
                                                    },
                                                    message: "should be string"
                                                  }];
                                                  return false;
                                                }
                                                var valid3 = _errs22 === errors;
                                              } else {
                                                var valid3 = true;
                                              }
                                              if (valid3) {
                                                if (data12.url !== undefined) {
                                                  let data18 = data12.url;
                                                  const _errs24 = errors;
                                                  if (errors === _errs24) {
                                                    if (typeof data18 === "string") {
                                                      if (!(formats0(data18))) {
                                                        validate22.errors = [{
                                                          keyword: "format",
                                                          dataPath: dataPath + "/uploader/url",
                                                          schemaPath: "#/definitions/simple-user/properties/url/format",
                                                          params: {
                                                            format: "uri"
                                                          },
                                                          message: "should match format \"" + "uri" + "\""
                                                        }];
                                                        return false;
                                                      }
                                                    } else {
                                                      validate22.errors = [{
                                                        keyword: "type",
                                                        dataPath: dataPath + "/uploader/url",
                                                        schemaPath: "#/definitions/simple-user/properties/url/type",
                                                        params: {
                                                          type: "string"
                                                        },
                                                        message: "should be string"
                                                      }];
                                                      return false;
                                                    }
                                                  }
                                                  var valid3 = _errs24 === errors;
                                                } else {
                                                  var valid3 = true;
                                                }
                                                if (valid3) {
                                                  if (data12.html_url !== undefined) {
                                                    let data19 = data12.html_url;
                                                    const _errs25 = errors;
                                                    if (errors === _errs25) {
                                                      if (typeof data19 === "string") {
                                                        if (!(formats0(data19))) {
                                                          validate22.errors = [{
                                                            keyword: "format",
                                                            dataPath: dataPath + "/uploader/html_url",
                                                            schemaPath: "#/definitions/simple-user/properties/html_url/format",
                                                            params: {
                                                              format: "uri"
                                                            },
                                                            message: "should match format \"" + "uri" + "\""
                                                          }];
                                                          return false;
                                                        }
                                                      } else {
                                                        validate22.errors = [{
                                                          keyword: "type",
                                                          dataPath: dataPath + "/uploader/html_url",
                                                          schemaPath: "#/definitions/simple-user/properties/html_url/type",
                                                          params: {
                                                            type: "string"
                                                          },
                                                          message: "should be string"
                                                        }];
                                                        return false;
                                                      }
                                                    }
                                                    var valid3 = _errs25 === errors;
                                                  } else {
                                                    var valid3 = true;
                                                  }
                                                  if (valid3) {
                                                    if (data12.followers_url !== undefined) {
                                                      let data20 = data12.followers_url;
                                                      const _errs26 = errors;
                                                      if (errors === _errs26) {
                                                        if (typeof data20 === "string") {
                                                          if (!(formats0(data20))) {
                                                            validate22.errors = [{
                                                              keyword: "format",
                                                              dataPath: dataPath + "/uploader/followers_url",
                                                              schemaPath: "#/definitions/simple-user/properties/followers_url/format",
                                                              params: {
                                                                format: "uri"
                                                              },
                                                              message: "should match format \"" + "uri" + "\""
                                                            }];
                                                            return false;
                                                          }
                                                        } else {
                                                          validate22.errors = [{
                                                            keyword: "type",
                                                            dataPath: dataPath + "/uploader/followers_url",
                                                            schemaPath: "#/definitions/simple-user/properties/followers_url/type",
                                                            params: {
                                                              type: "string"
                                                            },
                                                            message: "should be string"
                                                          }];
                                                          return false;
                                                        }
                                                      }
                                                      var valid3 = _errs26 === errors;
                                                    } else {
                                                      var valid3 = true;
                                                    }
                                                    if (valid3) {
                                                      if (data12.following_url !== undefined) {
                                                        let data21 = data12.following_url;
                                                        const _errs27 = errors;
                                                        if (errors === _errs27) {
                                                          if (typeof data21 === "string") {
                                                            if (!(formats6.test(data21))) {
                                                              validate22.errors = [{
                                                                keyword: "format",
                                                                dataPath: dataPath + "/uploader/following_url",
                                                                schemaPath: "#/definitions/simple-user/properties/following_url/format",
                                                                params: {
                                                                  format: "uri-template"
                                                                },
                                                                message: "should match format \"" + "uri-template" + "\""
                                                              }];
                                                              return false;
                                                            }
                                                          } else {
                                                            validate22.errors = [{
                                                              keyword: "type",
                                                              dataPath: dataPath + "/uploader/following_url",
                                                              schemaPath: "#/definitions/simple-user/properties/following_url/type",
                                                              params: {
                                                                type: "string"
                                                              },
                                                              message: "should be string"
                                                            }];
                                                            return false;
                                                          }
                                                        }
                                                        var valid3 = _errs27 === errors;
                                                      } else {
                                                        var valid3 = true;
                                                      }
                                                      if (valid3) {
                                                        if (data12.gists_url !== undefined) {
                                                          let data22 = data12.gists_url;
                                                          const _errs28 = errors;
                                                          if (errors === _errs28) {
                                                            if (typeof data22 === "string") {
                                                              if (!(formats6.test(data22))) {
                                                                validate22.errors = [{
                                                                  keyword: "format",
                                                                  dataPath: dataPath + "/uploader/gists_url",
                                                                  schemaPath: "#/definitions/simple-user/properties/gists_url/format",
                                                                  params: {
                                                                    format: "uri-template"
                                                                  },
                                                                  message: "should match format \"" + "uri-template" + "\""
                                                                }];
                                                                return false;
                                                              }
                                                            } else {
                                                              validate22.errors = [{
                                                                keyword: "type",
                                                                dataPath: dataPath + "/uploader/gists_url",
                                                                schemaPath: "#/definitions/simple-user/properties/gists_url/type",
                                                                params: {
                                                                  type: "string"
                                                                },
                                                                message: "should be string"
                                                              }];
                                                              return false;
                                                            }
                                                          }
                                                          var valid3 = _errs28 === errors;
                                                        } else {
                                                          var valid3 = true;
                                                        }
                                                        if (valid3) {
                                                          if (data12.starred_url !== undefined) {
                                                            let data23 = data12.starred_url;
                                                            const _errs29 = errors;
                                                            if (errors === _errs29) {
                                                              if (typeof data23 === "string") {
                                                                if (!(formats6.test(data23))) {
                                                                  validate22.errors = [{
                                                                    keyword: "format",
                                                                    dataPath: dataPath + "/uploader/starred_url",
                                                                    schemaPath: "#/definitions/simple-user/properties/starred_url/format",
                                                                    params: {
                                                                      format: "uri-template"
                                                                    },
                                                                    message: "should match format \"" + "uri-template" + "\""
                                                                  }];
                                                                  return false;
                                                                }
                                                              } else {
                                                                validate22.errors = [{
                                                                  keyword: "type",
                                                                  dataPath: dataPath + "/uploader/starred_url",
                                                                  schemaPath: "#/definitions/simple-user/properties/starred_url/type",
                                                                  params: {
                                                                    type: "string"
                                                                  },
                                                                  message: "should be string"
                                                                }];
                                                                return false;
                                                              }
                                                            }
                                                            var valid3 = _errs29 === errors;
                                                          } else {
                                                            var valid3 = true;
                                                          }
                                                          if (valid3) {
                                                            if (data12.subscriptions_url !== undefined) {
                                                              let data24 = data12.subscriptions_url;
                                                              const _errs30 = errors;
                                                              if (errors === _errs30) {
                                                                if (typeof data24 === "string") {
                                                                  if (!(formats0(data24))) {
                                                                    validate22.errors = [{
                                                                      keyword: "format",
                                                                      dataPath: dataPath + "/uploader/subscriptions_url",
                                                                      schemaPath: "#/definitions/simple-user/properties/subscriptions_url/format",
                                                                      params: {
                                                                        format: "uri"
                                                                      },
                                                                      message: "should match format \"" + "uri" + "\""
                                                                    }];
                                                                    return false;
                                                                  }
                                                                } else {
                                                                  validate22.errors = [{
                                                                    keyword: "type",
                                                                    dataPath: dataPath + "/uploader/subscriptions_url",
                                                                    schemaPath: "#/definitions/simple-user/properties/subscriptions_url/type",
                                                                    params: {
                                                                      type: "string"
                                                                    },
                                                                    message: "should be string"
                                                                  }];
                                                                  return false;
                                                                }
                                                              }
                                                              var valid3 = _errs30 === errors;
                                                            } else {
                                                              var valid3 = true;
                                                            }
                                                            if (valid3) {
                                                              if (data12.organizations_url !== undefined) {
                                                                let data25 = data12.organizations_url;
                                                                const _errs31 = errors;
                                                                if (errors === _errs31) {
                                                                  if (typeof data25 === "string") {
                                                                    if (!(formats0(data25))) {
                                                                      validate22.errors = [{
                                                                        keyword: "format",
                                                                        dataPath: dataPath + "/uploader/organizations_url",
                                                                        schemaPath: "#/definitions/simple-user/properties/organizations_url/format",
                                                                        params: {
                                                                          format: "uri"
                                                                        },
                                                                        message: "should match format \"" + "uri" + "\""
                                                                      }];
                                                                      return false;
                                                                    }
                                                                  } else {
                                                                    validate22.errors = [{
                                                                      keyword: "type",
                                                                      dataPath: dataPath + "/uploader/organizations_url",
                                                                      schemaPath: "#/definitions/simple-user/properties/organizations_url/type",
                                                                      params: {
                                                                        type: "string"
                                                                      },
                                                                      message: "should be string"
                                                                    }];
                                                                    return false;
                                                                  }
                                                                }
                                                                var valid3 = _errs31 === errors;
                                                              } else {
                                                                var valid3 = true;
                                                              }
                                                              if (valid3) {
                                                                if (data12.repos_url !== undefined) {
                                                                  let data26 = data12.repos_url;
                                                                  const _errs32 = errors;
                                                                  if (errors === _errs32) {
                                                                    if (typeof data26 === "string") {
                                                                      if (!(formats0(data26))) {
                                                                        validate22.errors = [{
                                                                          keyword: "format",
                                                                          dataPath: dataPath + "/uploader/repos_url",
                                                                          schemaPath: "#/definitions/simple-user/properties/repos_url/format",
                                                                          params: {
                                                                            format: "uri"
                                                                          },
                                                                          message: "should match format \"" + "uri" + "\""
                                                                        }];
                                                                        return false;
                                                                      }
                                                                    } else {
                                                                      validate22.errors = [{
                                                                        keyword: "type",
                                                                        dataPath: dataPath + "/uploader/repos_url",
                                                                        schemaPath: "#/definitions/simple-user/properties/repos_url/type",
                                                                        params: {
                                                                          type: "string"
                                                                        },
                                                                        message: "should be string"
                                                                      }];
                                                                      return false;
                                                                    }
                                                                  }
                                                                  var valid3 = _errs32 === errors;
                                                                } else {
                                                                  var valid3 = true;
                                                                }
                                                                if (valid3) {
                                                                  if (data12.events_url !== undefined) {
                                                                    let data27 = data12.events_url;
                                                                    const _errs33 = errors;
                                                                    if (errors === _errs33) {
                                                                      if (typeof data27 === "string") {
                                                                        if (!(formats6.test(data27))) {
                                                                          validate22.errors = [{
                                                                            keyword: "format",
                                                                            dataPath: dataPath + "/uploader/events_url",
                                                                            schemaPath: "#/definitions/simple-user/properties/events_url/format",
                                                                            params: {
                                                                              format: "uri-template"
                                                                            },
                                                                            message: "should match format \"" + "uri-template" + "\""
                                                                          }];
                                                                          return false;
                                                                        }
                                                                      } else {
                                                                        validate22.errors = [{
                                                                          keyword: "type",
                                                                          dataPath: dataPath + "/uploader/events_url",
                                                                          schemaPath: "#/definitions/simple-user/properties/events_url/type",
                                                                          params: {
                                                                            type: "string"
                                                                          },
                                                                          message: "should be string"
                                                                        }];
                                                                        return false;
                                                                      }
                                                                    }
                                                                    var valid3 = _errs33 === errors;
                                                                  } else {
                                                                    var valid3 = true;
                                                                  }
                                                                  if (valid3) {
                                                                    if (data12.received_events_url !== undefined) {
                                                                      let data28 = data12.received_events_url;
                                                                      const _errs34 = errors;
                                                                      if (errors === _errs34) {
                                                                        if (typeof data28 === "string") {
                                                                          if (!(formats0(data28))) {
                                                                            validate22.errors = [{
                                                                              keyword: "format",
                                                                              dataPath: dataPath + "/uploader/received_events_url",
                                                                              schemaPath: "#/definitions/simple-user/properties/received_events_url/format",
                                                                              params: {
                                                                                format: "uri"
                                                                              },
                                                                              message: "should match format \"" + "uri" + "\""
                                                                            }];
                                                                            return false;
                                                                          }
                                                                        } else {
                                                                          validate22.errors = [{
                                                                            keyword: "type",
                                                                            dataPath: dataPath + "/uploader/received_events_url",
                                                                            schemaPath: "#/definitions/simple-user/properties/received_events_url/type",
                                                                            params: {
                                                                              type: "string"
                                                                            },
                                                                            message: "should be string"
                                                                          }];
                                                                          return false;
                                                                        }
                                                                      }
                                                                      var valid3 = _errs34 === errors;
                                                                    } else {
                                                                      var valid3 = true;
                                                                    }
                                                                    if (valid3) {
                                                                      if (data12.type !== undefined) {
                                                                        const _errs35 = errors;
                                                                        if (typeof data12.type !== "string") {
                                                                          validate22.errors = [{
                                                                            keyword: "type",
                                                                            dataPath: dataPath + "/uploader/type",
                                                                            schemaPath: "#/definitions/simple-user/properties/type/type",
                                                                            params: {
                                                                              type: "string"
                                                                            },
                                                                            message: "should be string"
                                                                          }];
                                                                          return false;
                                                                        }
                                                                        var valid3 = _errs35 === errors;
                                                                      } else {
                                                                        var valid3 = true;
                                                                      }
                                                                      if (valid3) {
                                                                        if (data12.site_admin !== undefined) {
                                                                          const _errs36 = errors;
                                                                          if (typeof data12.site_admin !== "boolean") {
                                                                            validate22.errors = [{
                                                                              keyword: "type",
                                                                              dataPath: dataPath + "/uploader/site_admin",
                                                                              schemaPath: "#/definitions/simple-user/properties/site_admin/type",
                                                                              params: {
                                                                                type: "boolean"
                                                                              },
                                                                              message: "should be boolean"
                                                                            }];
                                                                            return false;
                                                                          }
                                                                          var valid3 = _errs36 === errors;
                                                                        } else {
                                                                          var valid3 = true;
                                                                        }
                                                                        if (valid3) {
                                                                          if (data12.starred_at !== undefined) {
                                                                            const _errs37 = errors;
                                                                            if (typeof data12.starred_at !== "string") {
                                                                              validate22.errors = [{
                                                                                keyword: "type",
                                                                                dataPath: dataPath + "/uploader/starred_at",
                                                                                schemaPath: "#/definitions/simple-user/properties/starred_at/type",
                                                                                params: {
                                                                                  type: "string"
                                                                                },
                                                                                message: "should be string"
                                                                              }];
                                                                              return false;
                                                                            }
                                                                            var valid3 = _errs37 === errors;
                                                                          } else {
                                                                            var valid3 = true;
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                var valid0 = _errs13 === errors;
                              } else {
                                var valid0 = true;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    validate22.errors = [{
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: {
        type: "object"
      },
      message: "should be object"
    }];
    return false;
  }
  validate22.errors = vErrors;
  return errors === 0;
}

function validate21(data, {
  dataPath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    let missing0;
    if (((((((((((((((((data.assets_url === undefined && (missing0 = "assets_url")) || (data.upload_url === undefined && (missing0 = "upload_url"))) || (data.tarball_url === undefined && (missing0 = "tarball_url"))) || (data.zipball_url === undefined && (missing0 = "zipball_url"))) || (data.created_at === undefined && (missing0 = "created_at"))) || (data.published_at === undefined && (missing0 = "published_at"))) || (data.draft === undefined && (missing0 = "draft"))) || (data.id === undefined && (missing0 = "id"))) || (data.node_id === undefined && (missing0 = "node_id"))) || (data.author === undefined && (missing0 = "author"))) || (data.html_url === undefined && (missing0 = "html_url"))) || (data.name === undefined && (missing0 = "name"))) || (data.prerelease === undefined && (missing0 = "prerelease"))) || (data.tag_name === undefined && (missing0 = "tag_name"))) || (data.target_commitish === undefined && (missing0 = "target_commitish"))) || (data.assets === undefined && (missing0 = "assets"))) || (data.url === undefined && (missing0 = "url"))) {
      validate21.errors = [{
        keyword: "required",
        dataPath,
        schemaPath: "#/required",
        params: {
          missingProperty: missing0
        },
        message: "should have required property '" + missing0 + "'"
      }];
      return false;
    } else {
      if (data.url !== undefined) {
        let data0 = data.url;
        const _errs0 = errors;
        if (errors === _errs0) {
          if (typeof data0 === "string") {
            if (!(formats0(data0))) {
              validate21.errors = [{
                keyword: "format",
                dataPath: dataPath + "/url",
                schemaPath: "#/properties/url/format",
                params: {
                  format: "uri"
                },
                message: "should match format \"" + "uri" + "\""
              }];
              return false;
            }
          } else {
            validate21.errors = [{
              keyword: "type",
              dataPath: dataPath + "/url",
              schemaPath: "#/properties/url/type",
              params: {
                type: "string"
              },
              message: "should be string"
            }];
            return false;
          }
        }
        var valid0 = _errs0 === errors;
      } else {
        var valid0 = true;
      }
      if (valid0) {
        if (data.html_url !== undefined) {
          let data1 = data.html_url;
          const _errs1 = errors;
          if (errors === _errs1) {
            if (typeof data1 === "string") {
              if (!(formats0(data1))) {
                validate21.errors = [{
                  keyword: "format",
                  dataPath: dataPath + "/html_url",
                  schemaPath: "#/properties/html_url/format",
                  params: {
                    format: "uri"
                  },
                  message: "should match format \"" + "uri" + "\""
                }];
                return false;
              }
            } else {
              validate21.errors = [{
                keyword: "type",
                dataPath: dataPath + "/html_url",
                schemaPath: "#/properties/html_url/type",
                params: {
                  type: "string"
                },
                message: "should be string"
              }];
              return false;
            }
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.assets_url !== undefined) {
            let data2 = data.assets_url;
            const _errs2 = errors;
            if (errors === _errs2) {
              if (typeof data2 === "string") {
                if (!(formats0(data2))) {
                  validate21.errors = [{
                    keyword: "format",
                    dataPath: dataPath + "/assets_url",
                    schemaPath: "#/properties/assets_url/format",
                    params: {
                      format: "uri"
                    },
                    message: "should match format \"" + "uri" + "\""
                  }];
                  return false;
                }
              } else {
                validate21.errors = [{
                  keyword: "type",
                  dataPath: dataPath + "/assets_url",
                  schemaPath: "#/properties/assets_url/type",
                  params: {
                    type: "string"
                  },
                  message: "should be string"
                }];
                return false;
              }
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.upload_url !== undefined) {
              let data3 = data.upload_url;
              const _errs3 = errors;
              if (errors === _errs3) {
                if (typeof data3 === "string") {
                  if (!(formats6.test(data3))) {
                    validate21.errors = [{
                      keyword: "format",
                      dataPath: dataPath + "/upload_url",
                      schemaPath: "#/properties/upload_url/format",
                      params: {
                        format: "uri-template"
                      },
                      message: "should match format \"" + "uri-template" + "\""
                    }];
                    return false;
                  }
                } else {
                  validate21.errors = [{
                    keyword: "type",
                    dataPath: dataPath + "/upload_url",
                    schemaPath: "#/properties/upload_url/type",
                    params: {
                      type: "string"
                    },
                    message: "should be string"
                  }];
                  return false;
                }
              }
              var valid0 = _errs3 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.tarball_url !== undefined) {
                let data4 = data.tarball_url;
                const _errs4 = errors;
                if ((typeof data4 !== "string") && (data4 !== null)) {
                  validate21.errors = [{
                    keyword: "type",
                    dataPath: dataPath + "/tarball_url",
                    schemaPath: "#/properties/tarball_url/type",
                    params: {
                      type: "string"
                    },
                    message: "should be string"
                  }];
                  return false;
                }
                if (errors === _errs4) {
                  if (errors === _errs4) {
                    if (typeof data4 === "string") {
                      if (!(formats0(data4))) {
                        validate21.errors = [{
                          keyword: "format",
                          dataPath: dataPath + "/tarball_url",
                          schemaPath: "#/properties/tarball_url/format",
                          params: {
                            format: "uri"
                          },
                          message: "should match format \"" + "uri" + "\""
                        }];
                        return false;
                      }
                    }
                  }
                }
                var valid0 = _errs4 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.zipball_url !== undefined) {
                  let data5 = data.zipball_url;
                  const _errs6 = errors;
                  if ((typeof data5 !== "string") && (data5 !== null)) {
                    validate21.errors = [{
                      keyword: "type",
                      dataPath: dataPath + "/zipball_url",
                      schemaPath: "#/properties/zipball_url/type",
                      params: {
                        type: "string"
                      },
                      message: "should be string"
                    }];
                    return false;
                  }
                  if (errors === _errs6) {
                    if (errors === _errs6) {
                      if (typeof data5 === "string") {
                        if (!(formats0(data5))) {
                          validate21.errors = [{
                            keyword: "format",
                            dataPath: dataPath + "/zipball_url",
                            schemaPath: "#/properties/zipball_url/format",
                            params: {
                              format: "uri"
                            },
                            message: "should match format \"" + "uri" + "\""
                          }];
                          return false;
                        }
                      }
                    }
                  }
                  var valid0 = _errs6 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.id !== undefined) {
                    let data6 = data.id;
                    const _errs8 = errors;
                    if (!(((typeof data6 == "number") && (!(data6 % 1) && !isNaN(data6))) && (isFinite(data6)))) {
                      validate21.errors = [{
                        keyword: "type",
                        dataPath: dataPath + "/id",
                        schemaPath: "#/properties/id/type",
                        params: {
                          type: "integer"
                        },
                        message: "should be integer"
                      }];
                      return false;
                    }
                    var valid0 = _errs8 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.node_id !== undefined) {
                      const _errs9 = errors;
                      if (typeof data.node_id !== "string") {
                        validate21.errors = [{
                          keyword: "type",
                          dataPath: dataPath + "/node_id",
                          schemaPath: "#/properties/node_id/type",
                          params: {
                            type: "string"
                          },
                          message: "should be string"
                        }];
                        return false;
                      }
                      var valid0 = _errs9 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.tag_name !== undefined) {
                        const _errs10 = errors;
                        if (typeof data.tag_name !== "string") {
                          validate21.errors = [{
                            keyword: "type",
                            dataPath: dataPath + "/tag_name",
                            schemaPath: "#/properties/tag_name/type",
                            params: {
                              type: "string"
                            },
                            message: "should be string"
                          }];
                          return false;
                        }
                        var valid0 = _errs10 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.target_commitish !== undefined) {
                          const _errs11 = errors;
                          if (typeof data.target_commitish !== "string") {
                            validate21.errors = [{
                              keyword: "type",
                              dataPath: dataPath + "/target_commitish",
                              schemaPath: "#/properties/target_commitish/type",
                              params: {
                                type: "string"
                              },
                              message: "should be string"
                            }];
                            return false;
                          }
                          var valid0 = _errs11 === errors;
                        } else {
                          var valid0 = true;
                        }
                        if (valid0) {
                          if (data.name !== undefined) {
                            let data10 = data.name;
                            const _errs12 = errors;
                            if ((typeof data10 !== "string") && (data10 !== null)) {
                              validate21.errors = [{
                                keyword: "type",
                                dataPath: dataPath + "/name",
                                schemaPath: "#/properties/name/type",
                                params: {
                                  type: "string"
                                },
                                message: "should be string"
                              }];
                              return false;
                            }
                            var valid0 = _errs12 === errors;
                          } else {
                            var valid0 = true;
                          }
                          if (valid0) {
                            if (data.body !== undefined) {
                              let data11 = data.body;
                              const _errs14 = errors;
                              if ((typeof data11 !== "string") && (data11 !== null)) {
                                validate21.errors = [{
                                  keyword: "type",
                                  dataPath: dataPath + "/body",
                                  schemaPath: "#/properties/body/type",
                                  params: {
                                    type: "string"
                                  },
                                  message: "should be string"
                                }];
                                return false;
                              }
                              var valid0 = _errs14 === errors;
                            } else {
                              var valid0 = true;
                            }
                            if (valid0) {
                              if (data.draft !== undefined) {
                                const _errs16 = errors;
                                if (typeof data.draft !== "boolean") {
                                  validate21.errors = [{
                                    keyword: "type",
                                    dataPath: dataPath + "/draft",
                                    schemaPath: "#/properties/draft/type",
                                    params: {
                                      type: "boolean"
                                    },
                                    message: "should be boolean"
                                  }];
                                  return false;
                                }
                                var valid0 = _errs16 === errors;
                              } else {
                                var valid0 = true;
                              }
                              if (valid0) {
                                if (data.prerelease !== undefined) {
                                  const _errs17 = errors;
                                  if (typeof data.prerelease !== "boolean") {
                                    validate21.errors = [{
                                      keyword: "type",
                                      dataPath: dataPath + "/prerelease",
                                      schemaPath: "#/properties/prerelease/type",
                                      params: {
                                        type: "boolean"
                                      },
                                      message: "should be boolean"
                                    }];
                                    return false;
                                  }
                                  var valid0 = _errs17 === errors;
                                } else {
                                  var valid0 = true;
                                }
                                if (valid0) {
                                  if (data.created_at !== undefined) {
                                    let data14 = data.created_at;
                                    const _errs18 = errors;
                                    if (errors === _errs18) {
                                      if (typeof data14 === "string") {
                                        if (!(formats12.validate(data14))) {
                                          validate21.errors = [{
                                            keyword: "format",
                                            dataPath: dataPath + "/created_at",
                                            schemaPath: "#/properties/created_at/format",
                                            params: {
                                              format: "date-time"
                                            },
                                            message: "should match format \"" + "date-time" + "\""
                                          }];
                                          return false;
                                        }
                                      } else {
                                        validate21.errors = [{
                                          keyword: "type",
                                          dataPath: dataPath + "/created_at",
                                          schemaPath: "#/properties/created_at/type",
                                          params: {
                                            type: "string"
                                          },
                                          message: "should be string"
                                        }];
                                        return false;
                                      }
                                    }
                                    var valid0 = _errs18 === errors;
                                  } else {
                                    var valid0 = true;
                                  }
                                  if (valid0) {
                                    if (data.published_at !== undefined) {
                                      let data15 = data.published_at;
                                      const _errs19 = errors;
                                      if ((typeof data15 !== "string") && (data15 !== null)) {
                                        validate21.errors = [{
                                          keyword: "type",
                                          dataPath: dataPath + "/published_at",
                                          schemaPath: "#/properties/published_at/type",
                                          params: {
                                            type: "string"
                                          },
                                          message: "should be string"
                                        }];
                                        return false;
                                      }
                                      if (errors === _errs19) {
                                        if (errors === _errs19) {
                                          if (typeof data15 === "string") {
                                            if (!(formats12.validate(data15))) {
                                              validate21.errors = [{
                                                keyword: "format",
                                                dataPath: dataPath + "/published_at",
                                                schemaPath: "#/properties/published_at/format",
                                                params: {
                                                  format: "date-time"
                                                },
                                                message: "should match format \"" + "date-time" + "\""
                                              }];
                                              return false;
                                            }
                                          }
                                        }
                                      }
                                      var valid0 = _errs19 === errors;
                                    } else {
                                      var valid0 = true;
                                    }
                                    if (valid0) {
                                      if (data.author !== undefined) {
                                        let data16 = data.author;
                                        const _errs21 = errors;
                                        const _errs22 = errors;
                                        if ((!(data16 && typeof data16 == "object" && !Array.isArray(data16))) && (data16 !== null)) {
                                          validate21.errors = [{
                                            keyword: "type",
                                            dataPath: dataPath + "/author",
                                            schemaPath: "#/definitions/simple-user/type",
                                            params: {
                                              type: "object"
                                            },
                                            message: "should be object"
                                          }];
                                          return false;
                                        }
                                        if (errors === _errs22) {
                                          if (data16 && typeof data16 == "object" && !Array.isArray(data16)) {
                                            let missing1;
                                            if ((((((((((((((((((data16.avatar_url === undefined && (missing1 = "avatar_url")) || (data16.events_url === undefined && (missing1 = "events_url"))) || (data16.followers_url === undefined && (missing1 = "followers_url"))) || (data16.following_url === undefined && (missing1 = "following_url"))) || (data16.gists_url === undefined && (missing1 = "gists_url"))) || (data16.gravatar_id === undefined && (missing1 = "gravatar_id"))) || (data16.html_url === undefined && (missing1 = "html_url"))) || (data16.id === undefined && (missing1 = "id"))) || (data16.node_id === undefined && (missing1 = "node_id"))) || (data16.login === undefined && (missing1 = "login"))) || (data16.organizations_url === undefined && (missing1 = "organizations_url"))) || (data16.received_events_url === undefined && (missing1 = "received_events_url"))) || (data16.repos_url === undefined && (missing1 = "repos_url"))) || (data16.site_admin === undefined && (missing1 = "site_admin"))) || (data16.starred_url === undefined && (missing1 = "starred_url"))) || (data16.subscriptions_url === undefined && (missing1 = "subscriptions_url"))) || (data16.type === undefined && (missing1 = "type"))) || (data16.url === undefined && (missing1 = "url"))) {
                                              validate21.errors = [{
                                                keyword: "required",
                                                dataPath: dataPath + "/author",
                                                schemaPath: "#/definitions/simple-user/required",
                                                params: {
                                                  missingProperty: missing1
                                                },
                                                message: "should have required property '" + missing1 + "'"
                                              }];
                                              return false;
                                            } else {
                                              if (data16.login !== undefined) {
                                                const _errs24 = errors;
                                                if (typeof data16.login !== "string") {
                                                  validate21.errors = [{
                                                    keyword: "type",
                                                    dataPath: dataPath + "/author/login",
                                                    schemaPath: "#/definitions/simple-user/properties/login/type",
                                                    params: {
                                                      type: "string"
                                                    },
                                                    message: "should be string"
                                                  }];
                                                  return false;
                                                }
                                                var valid2 = _errs24 === errors;
                                              } else {
                                                var valid2 = true;
                                              }
                                              if (valid2) {
                                                if (data16.id !== undefined) {
                                                  let data18 = data16.id;
                                                  const _errs25 = errors;
                                                  if (!(((typeof data18 == "number") && (!(data18 % 1) && !isNaN(data18))) && (isFinite(data18)))) {
                                                    validate21.errors = [{
                                                      keyword: "type",
                                                      dataPath: dataPath + "/author/id",
                                                      schemaPath: "#/definitions/simple-user/properties/id/type",
                                                      params: {
                                                        type: "integer"
                                                      },
                                                      message: "should be integer"
                                                    }];
                                                    return false;
                                                  }
                                                  var valid2 = _errs25 === errors;
                                                } else {
                                                  var valid2 = true;
                                                }
                                                if (valid2) {
                                                  if (data16.node_id !== undefined) {
                                                    const _errs26 = errors;
                                                    if (typeof data16.node_id !== "string") {
                                                      validate21.errors = [{
                                                        keyword: "type",
                                                        dataPath: dataPath + "/author/node_id",
                                                        schemaPath: "#/definitions/simple-user/properties/node_id/type",
                                                        params: {
                                                          type: "string"
                                                        },
                                                        message: "should be string"
                                                      }];
                                                      return false;
                                                    }
                                                    var valid2 = _errs26 === errors;
                                                  } else {
                                                    var valid2 = true;
                                                  }
                                                  if (valid2) {
                                                    if (data16.avatar_url !== undefined) {
                                                      let data20 = data16.avatar_url;
                                                      const _errs27 = errors;
                                                      if (errors === _errs27) {
                                                        if (typeof data20 === "string") {
                                                          if (!(formats0(data20))) {
                                                            validate21.errors = [{
                                                              keyword: "format",
                                                              dataPath: dataPath + "/author/avatar_url",
                                                              schemaPath: "#/definitions/simple-user/properties/avatar_url/format",
                                                              params: {
                                                                format: "uri"
                                                              },
                                                              message: "should match format \"" + "uri" + "\""
                                                            }];
                                                            return false;
                                                          }
                                                        } else {
                                                          validate21.errors = [{
                                                            keyword: "type",
                                                            dataPath: dataPath + "/author/avatar_url",
                                                            schemaPath: "#/definitions/simple-user/properties/avatar_url/type",
                                                            params: {
                                                              type: "string"
                                                            },
                                                            message: "should be string"
                                                          }];
                                                          return false;
                                                        }
                                                      }
                                                      var valid2 = _errs27 === errors;
                                                    } else {
                                                      var valid2 = true;
                                                    }
                                                    if (valid2) {
                                                      if (data16.gravatar_id !== undefined) {
                                                        let data21 = data16.gravatar_id;
                                                        const _errs28 = errors;
                                                        if ((typeof data21 !== "string") && (data21 !== null)) {
                                                          validate21.errors = [{
                                                            keyword: "type",
                                                            dataPath: dataPath + "/author/gravatar_id",
                                                            schemaPath: "#/definitions/simple-user/properties/gravatar_id/type",
                                                            params: {
                                                              type: "string"
                                                            },
                                                            message: "should be string"
                                                          }];
                                                          return false;
                                                        }
                                                        var valid2 = _errs28 === errors;
                                                      } else {
                                                        var valid2 = true;
                                                      }
                                                      if (valid2) {
                                                        if (data16.url !== undefined) {
                                                          let data22 = data16.url;
                                                          const _errs30 = errors;
                                                          if (errors === _errs30) {
                                                            if (typeof data22 === "string") {
                                                              if (!(formats0(data22))) {
                                                                validate21.errors = [{
                                                                  keyword: "format",
                                                                  dataPath: dataPath + "/author/url",
                                                                  schemaPath: "#/definitions/simple-user/properties/url/format",
                                                                  params: {
                                                                    format: "uri"
                                                                  },
                                                                  message: "should match format \"" + "uri" + "\""
                                                                }];
                                                                return false;
                                                              }
                                                            } else {
                                                              validate21.errors = [{
                                                                keyword: "type",
                                                                dataPath: dataPath + "/author/url",
                                                                schemaPath: "#/definitions/simple-user/properties/url/type",
                                                                params: {
                                                                  type: "string"
                                                                },
                                                                message: "should be string"
                                                              }];
                                                              return false;
                                                            }
                                                          }
                                                          var valid2 = _errs30 === errors;
                                                        } else {
                                                          var valid2 = true;
                                                        }
                                                        if (valid2) {
                                                          if (data16.html_url !== undefined) {
                                                            let data23 = data16.html_url;
                                                            const _errs31 = errors;
                                                            if (errors === _errs31) {
                                                              if (typeof data23 === "string") {
                                                                if (!(formats0(data23))) {
                                                                  validate21.errors = [{
                                                                    keyword: "format",
                                                                    dataPath: dataPath + "/author/html_url",
                                                                    schemaPath: "#/definitions/simple-user/properties/html_url/format",
                                                                    params: {
                                                                      format: "uri"
                                                                    },
                                                                    message: "should match format \"" + "uri" + "\""
                                                                  }];
                                                                  return false;
                                                                }
                                                              } else {
                                                                validate21.errors = [{
                                                                  keyword: "type",
                                                                  dataPath: dataPath + "/author/html_url",
                                                                  schemaPath: "#/definitions/simple-user/properties/html_url/type",
                                                                  params: {
                                                                    type: "string"
                                                                  },
                                                                  message: "should be string"
                                                                }];
                                                                return false;
                                                              }
                                                            }
                                                            var valid2 = _errs31 === errors;
                                                          } else {
                                                            var valid2 = true;
                                                          }
                                                          if (valid2) {
                                                            if (data16.followers_url !== undefined) {
                                                              let data24 = data16.followers_url;
                                                              const _errs32 = errors;
                                                              if (errors === _errs32) {
                                                                if (typeof data24 === "string") {
                                                                  if (!(formats0(data24))) {
                                                                    validate21.errors = [{
                                                                      keyword: "format",
                                                                      dataPath: dataPath + "/author/followers_url",
                                                                      schemaPath: "#/definitions/simple-user/properties/followers_url/format",
                                                                      params: {
                                                                        format: "uri"
                                                                      },
                                                                      message: "should match format \"" + "uri" + "\""
                                                                    }];
                                                                    return false;
                                                                  }
                                                                } else {
                                                                  validate21.errors = [{
                                                                    keyword: "type",
                                                                    dataPath: dataPath + "/author/followers_url",
                                                                    schemaPath: "#/definitions/simple-user/properties/followers_url/type",
                                                                    params: {
                                                                      type: "string"
                                                                    },
                                                                    message: "should be string"
                                                                  }];
                                                                  return false;
                                                                }
                                                              }
                                                              var valid2 = _errs32 === errors;
                                                            } else {
                                                              var valid2 = true;
                                                            }
                                                            if (valid2) {
                                                              if (data16.following_url !== undefined) {
                                                                let data25 = data16.following_url;
                                                                const _errs33 = errors;
                                                                if (errors === _errs33) {
                                                                  if (typeof data25 === "string") {
                                                                    if (!(formats6.test(data25))) {
                                                                      validate21.errors = [{
                                                                        keyword: "format",
                                                                        dataPath: dataPath + "/author/following_url",
                                                                        schemaPath: "#/definitions/simple-user/properties/following_url/format",
                                                                        params: {
                                                                          format: "uri-template"
                                                                        },
                                                                        message: "should match format \"" + "uri-template" + "\""
                                                                      }];
                                                                      return false;
                                                                    }
                                                                  } else {
                                                                    validate21.errors = [{
                                                                      keyword: "type",
                                                                      dataPath: dataPath + "/author/following_url",
                                                                      schemaPath: "#/definitions/simple-user/properties/following_url/type",
                                                                      params: {
                                                                        type: "string"
                                                                      },
                                                                      message: "should be string"
                                                                    }];
                                                                    return false;
                                                                  }
                                                                }
                                                                var valid2 = _errs33 === errors;
                                                              } else {
                                                                var valid2 = true;
                                                              }
                                                              if (valid2) {
                                                                if (data16.gists_url !== undefined) {
                                                                  let data26 = data16.gists_url;
                                                                  const _errs34 = errors;
                                                                  if (errors === _errs34) {
                                                                    if (typeof data26 === "string") {
                                                                      if (!(formats6.test(data26))) {
                                                                        validate21.errors = [{
                                                                          keyword: "format",
                                                                          dataPath: dataPath + "/author/gists_url",
                                                                          schemaPath: "#/definitions/simple-user/properties/gists_url/format",
                                                                          params: {
                                                                            format: "uri-template"
                                                                          },
                                                                          message: "should match format \"" + "uri-template" + "\""
                                                                        }];
                                                                        return false;
                                                                      }
                                                                    } else {
                                                                      validate21.errors = [{
                                                                        keyword: "type",
                                                                        dataPath: dataPath + "/author/gists_url",
                                                                        schemaPath: "#/definitions/simple-user/properties/gists_url/type",
                                                                        params: {
                                                                          type: "string"
                                                                        },
                                                                        message: "should be string"
                                                                      }];
                                                                      return false;
                                                                    }
                                                                  }
                                                                  var valid2 = _errs34 === errors;
                                                                } else {
                                                                  var valid2 = true;
                                                                }
                                                                if (valid2) {
                                                                  if (data16.starred_url !== undefined) {
                                                                    let data27 = data16.starred_url;
                                                                    const _errs35 = errors;
                                                                    if (errors === _errs35) {
                                                                      if (typeof data27 === "string") {
                                                                        if (!(formats6.test(data27))) {
                                                                          validate21.errors = [{
                                                                            keyword: "format",
                                                                            dataPath: dataPath + "/author/starred_url",
                                                                            schemaPath: "#/definitions/simple-user/properties/starred_url/format",
                                                                            params: {
                                                                              format: "uri-template"
                                                                            },
                                                                            message: "should match format \"" + "uri-template" + "\""
                                                                          }];
                                                                          return false;
                                                                        }
                                                                      } else {
                                                                        validate21.errors = [{
                                                                          keyword: "type",
                                                                          dataPath: dataPath + "/author/starred_url",
                                                                          schemaPath: "#/definitions/simple-user/properties/starred_url/type",
                                                                          params: {
                                                                            type: "string"
                                                                          },
                                                                          message: "should be string"
                                                                        }];
                                                                        return false;
                                                                      }
                                                                    }
                                                                    var valid2 = _errs35 === errors;
                                                                  } else {
                                                                    var valid2 = true;
                                                                  }
                                                                  if (valid2) {
                                                                    if (data16.subscriptions_url !== undefined) {
                                                                      let data28 = data16.subscriptions_url;
                                                                      const _errs36 = errors;
                                                                      if (errors === _errs36) {
                                                                        if (typeof data28 === "string") {
                                                                          if (!(formats0(data28))) {
                                                                            validate21.errors = [{
                                                                              keyword: "format",
                                                                              dataPath: dataPath + "/author/subscriptions_url",
                                                                              schemaPath: "#/definitions/simple-user/properties/subscriptions_url/format",
                                                                              params: {
                                                                                format: "uri"
                                                                              },
                                                                              message: "should match format \"" + "uri" + "\""
                                                                            }];
                                                                            return false;
                                                                          }
                                                                        } else {
                                                                          validate21.errors = [{
                                                                            keyword: "type",
                                                                            dataPath: dataPath + "/author/subscriptions_url",
                                                                            schemaPath: "#/definitions/simple-user/properties/subscriptions_url/type",
                                                                            params: {
                                                                              type: "string"
                                                                            },
                                                                            message: "should be string"
                                                                          }];
                                                                          return false;
                                                                        }
                                                                      }
                                                                      var valid2 = _errs36 === errors;
                                                                    } else {
                                                                      var valid2 = true;
                                                                    }
                                                                    if (valid2) {
                                                                      if (data16.organizations_url !== undefined) {
                                                                        let data29 = data16.organizations_url;
                                                                        const _errs37 = errors;
                                                                        if (errors === _errs37) {
                                                                          if (typeof data29 === "string") {
                                                                            if (!(formats0(data29))) {
                                                                              validate21.errors = [{
                                                                                keyword: "format",
                                                                                dataPath: dataPath + "/author/organizations_url",
                                                                                schemaPath: "#/definitions/simple-user/properties/organizations_url/format",
                                                                                params: {
                                                                                  format: "uri"
                                                                                },
                                                                                message: "should match format \"" + "uri" + "\""
                                                                              }];
                                                                              return false;
                                                                            }
                                                                          } else {
                                                                            validate21.errors = [{
                                                                              keyword: "type",
                                                                              dataPath: dataPath + "/author/organizations_url",
                                                                              schemaPath: "#/definitions/simple-user/properties/organizations_url/type",
                                                                              params: {
                                                                                type: "string"
                                                                              },
                                                                              message: "should be string"
                                                                            }];
                                                                            return false;
                                                                          }
                                                                        }
                                                                        var valid2 = _errs37 === errors;
                                                                      } else {
                                                                        var valid2 = true;
                                                                      }
                                                                      if (valid2) {
                                                                        if (data16.repos_url !== undefined) {
                                                                          let data30 = data16.repos_url;
                                                                          const _errs38 = errors;
                                                                          if (errors === _errs38) {
                                                                            if (typeof data30 === "string") {
                                                                              if (!(formats0(data30))) {
                                                                                validate21.errors = [{
                                                                                  keyword: "format",
                                                                                  dataPath: dataPath + "/author/repos_url",
                                                                                  schemaPath: "#/definitions/simple-user/properties/repos_url/format",
                                                                                  params: {
                                                                                    format: "uri"
                                                                                  },
                                                                                  message: "should match format \"" + "uri" + "\""
                                                                                }];
                                                                                return false;
                                                                              }
                                                                            } else {
                                                                              validate21.errors = [{
                                                                                keyword: "type",
                                                                                dataPath: dataPath + "/author/repos_url",
                                                                                schemaPath: "#/definitions/simple-user/properties/repos_url/type",
                                                                                params: {
                                                                                  type: "string"
                                                                                },
                                                                                message: "should be string"
                                                                              }];
                                                                              return false;
                                                                            }
                                                                          }
                                                                          var valid2 = _errs38 === errors;
                                                                        } else {
                                                                          var valid2 = true;
                                                                        }
                                                                        if (valid2) {
                                                                          if (data16.events_url !== undefined) {
                                                                            let data31 = data16.events_url;
                                                                            const _errs39 = errors;
                                                                            if (errors === _errs39) {
                                                                              if (typeof data31 === "string") {
                                                                                if (!(formats6.test(data31))) {
                                                                                  validate21.errors = [{
                                                                                    keyword: "format",
                                                                                    dataPath: dataPath + "/author/events_url",
                                                                                    schemaPath: "#/definitions/simple-user/properties/events_url/format",
                                                                                    params: {
                                                                                      format: "uri-template"
                                                                                    },
                                                                                    message: "should match format \"" + "uri-template" + "\""
                                                                                  }];
                                                                                  return false;
                                                                                }
                                                                              } else {
                                                                                validate21.errors = [{
                                                                                  keyword: "type",
                                                                                  dataPath: dataPath + "/author/events_url",
                                                                                  schemaPath: "#/definitions/simple-user/properties/events_url/type",
                                                                                  params: {
                                                                                    type: "string"
                                                                                  },
                                                                                  message: "should be string"
                                                                                }];
                                                                                return false;
                                                                              }
                                                                            }
                                                                            var valid2 = _errs39 === errors;
                                                                          } else {
                                                                            var valid2 = true;
                                                                          }
                                                                          if (valid2) {
                                                                            if (data16.received_events_url !== undefined) {
                                                                              let data32 = data16.received_events_url;
                                                                              const _errs40 = errors;
                                                                              if (errors === _errs40) {
                                                                                if (typeof data32 === "string") {
                                                                                  if (!(formats0(data32))) {
                                                                                    validate21.errors = [{
                                                                                      keyword: "format",
                                                                                      dataPath: dataPath + "/author/received_events_url",
                                                                                      schemaPath: "#/definitions/simple-user/properties/received_events_url/format",
                                                                                      params: {
                                                                                        format: "uri"
                                                                                      },
                                                                                      message: "should match format \"" + "uri" + "\""
                                                                                    }];
                                                                                    return false;
                                                                                  }
                                                                                } else {
                                                                                  validate21.errors = [{
                                                                                    keyword: "type",
                                                                                    dataPath: dataPath + "/author/received_events_url",
                                                                                    schemaPath: "#/definitions/simple-user/properties/received_events_url/type",
                                                                                    params: {
                                                                                      type: "string"
                                                                                    },
                                                                                    message: "should be string"
                                                                                  }];
                                                                                  return false;
                                                                                }
                                                                              }
                                                                              var valid2 = _errs40 === errors;
                                                                            } else {
                                                                              var valid2 = true;
                                                                            }
                                                                            if (valid2) {
                                                                              if (data16.type !== undefined) {
                                                                                const _errs41 = errors;
                                                                                if (typeof data16.type !== "string") {
                                                                                  validate21.errors = [{
                                                                                    keyword: "type",
                                                                                    dataPath: dataPath + "/author/type",
                                                                                    schemaPath: "#/definitions/simple-user/properties/type/type",
                                                                                    params: {
                                                                                      type: "string"
                                                                                    },
                                                                                    message: "should be string"
                                                                                  }];
                                                                                  return false;
                                                                                }
                                                                                var valid2 = _errs41 === errors;
                                                                              } else {
                                                                                var valid2 = true;
                                                                              }
                                                                              if (valid2) {
                                                                                if (data16.site_admin !== undefined) {
                                                                                  const _errs42 = errors;
                                                                                  if (typeof data16.site_admin !== "boolean") {
                                                                                    validate21.errors = [{
                                                                                      keyword: "type",
                                                                                      dataPath: dataPath + "/author/site_admin",
                                                                                      schemaPath: "#/definitions/simple-user/properties/site_admin/type",
                                                                                      params: {
                                                                                        type: "boolean"
                                                                                      },
                                                                                      message: "should be boolean"
                                                                                    }];
                                                                                    return false;
                                                                                  }
                                                                                  var valid2 = _errs42 === errors;
                                                                                } else {
                                                                                  var valid2 = true;
                                                                                }
                                                                                if (valid2) {
                                                                                  if (data16.starred_at !== undefined) {
                                                                                    const _errs43 = errors;
                                                                                    if (typeof data16.starred_at !== "string") {
                                                                                      validate21.errors = [{
                                                                                        keyword: "type",
                                                                                        dataPath: dataPath + "/author/starred_at",
                                                                                        schemaPath: "#/definitions/simple-user/properties/starred_at/type",
                                                                                        params: {
                                                                                          type: "string"
                                                                                        },
                                                                                        message: "should be string"
                                                                                      }];
                                                                                      return false;
                                                                                    }
                                                                                    var valid2 = _errs43 === errors;
                                                                                  } else {
                                                                                    var valid2 = true;
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        var valid0 = _errs21 === errors;
                                      } else {
                                        var valid0 = true;
                                      }
                                      if (valid0) {
                                        if (data.assets !== undefined) {
                                          let data36 = data.assets;
                                          const _errs44 = errors;
                                          if (Array.isArray(data36)) {
                                            const len0 = data36.length;
                                            for (let i0 = 0; i0 < len0; i0++) {
                                              const _errs45 = errors;
                                              if (!(validate22(data36[i0], {
                                                  dataPath: dataPath + "/assets/" + i0,
                                                  parentData: data36,
                                                  parentDataProperty: i0,
                                                  rootData
                                                }))) {
                                                vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
                                                errors = vErrors.length;
                                              }
                                              var valid3 = _errs45 === errors;
                                              if (!valid3) {
                                                break;
                                              }
                                            }
                                          } else {
                                            validate21.errors = [{
                                              keyword: "type",
                                              dataPath: dataPath + "/assets",
                                              schemaPath: "#/properties/assets/type",
                                              params: {
                                                type: "array"
                                              },
                                              message: "should be array"
                                            }];
                                            return false;
                                          }
                                          var valid0 = _errs44 === errors;
                                        } else {
                                          var valid0 = true;
                                        }
                                        if (valid0) {
                                          if (data.body_html !== undefined) {
                                            const _errs46 = errors;
                                            if (typeof data.body_html !== "string") {
                                              validate21.errors = [{
                                                keyword: "type",
                                                dataPath: dataPath + "/body_html",
                                                schemaPath: "#/properties/body_html/type",
                                                params: {
                                                  type: "string"
                                                },
                                                message: "should be string"
                                              }];
                                              return false;
                                            }
                                            var valid0 = _errs46 === errors;
                                          } else {
                                            var valid0 = true;
                                          }
                                          if (valid0) {
                                            if (data.body_text !== undefined) {
                                              const _errs47 = errors;
                                              if (typeof data.body_text !== "string") {
                                                validate21.errors = [{
                                                  keyword: "type",
                                                  dataPath: dataPath + "/body_text",
                                                  schemaPath: "#/properties/body_text/type",
                                                  params: {
                                                    type: "string"
                                                  },
                                                  message: "should be string"
                                                }];
                                                return false;
                                              }
                                              var valid0 = _errs47 === errors;
                                            } else {
                                              var valid0 = true;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    validate21.errors = [{
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: {
        type: "object"
      },
      message: "should be object"
    }];
    return false;
  }
  validate21.errors = vErrors;
  return errors === 0;
}

function validate20(data, {
  dataPath = "",
  parentData,
  parentDataProperty,
  rootData = data
} = {}) {
  let vErrors = null;
  let errors = 0;
  if (Array.isArray(data)) {
    const len0 = data.length;
    for (let i0 = 0; i0 < len0; i0++) {
      const _errs0 = errors;
      if (!(validate21(data[i0], {
          dataPath: dataPath + "/" + i0,
          parentData: data,
          parentDataProperty: i0,
          rootData
        }))) {
        vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
        errors = vErrors.length;
      }
      var valid0 = _errs0 === errors;
      if (!valid0) {
        break;
      }
    }
  } else {
    validate20.errors = [{
      keyword: "type",
      dataPath,
      schemaPath: "#/type",
      params: {
        type: "array"
      },
      message: "should be array"
    }];
    return false;
  }
  validate20.errors = vErrors;
  return errors === 0;
}