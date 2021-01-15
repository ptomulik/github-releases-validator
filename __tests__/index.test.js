'use strict'

const validate = require('../dist/index')
const {readFileSync} = require('fs')
const {resolve} = require('path')

const sampleFile = resolve(__dirname, 'sample.json')
const sample = JSON.parse(readFileSync(sampleFile, 'utf8'))

class Remover {
  constructor(path) {
    this.path = path
  }

  from(data, context = '') {
    const {path} = this
    if (data != null && typeof data === 'object') {
      if (data instanceof Array) {
        return data
          .filter((_, index) => `${context}/${index}` !== path)
          .map((value, index) => this.from(value, `${context}/${index}`))
      } else {
        return Object.entries(data)
          .filter(([key]) => `${context}/${key}` !== path)
          .reduce((result, [key, value]) => {
            result[key] = this.from(value, `${context}/${key}`)
            return result
          }, {})
      }
    }
    return data
  }
}

class Mutator {
  constructor(path, value) {
    this.path = path
    this.value = value
  }

  in(data, context = '') {
    const {path} = this
    if (data != null && typeof data === 'object') {
      if (data instanceof Array) {
        return data.map((value, index) =>
          `${context}/${index}` === path
            ? this.value
            : this.in(value, `${context}/${index}`)
        )
      } else {
        return Object.entries(data).reduce((result, [key, value]) => {
          if (`${context}/${key}` === path) {
            result[key] = this.value
          } else {
            result[key] = this.in(value, `${context}/${key}`)
          }
          return result
        }, {})
      }
    }
    return data
  }
}

const remove = path => new Remover(path)
const mutate = (path, value) => new Mutator(path, value)

describe('dist/index.js', () => {
  describe.each([
    [null, false, [{message: 'should be array', dataPath: ''}]],
    [{}, false, [{message: 'should be array', dataPath: ''}]],
    [[], true, []],
    [[1], false, [{message: 'should be object', dataPath: '/0'}]],
  ])(`validate(%j)`, (data, result, errors) => {
    it(`returns ${JSON.stringify(result)}`, () => {
      expect.assertions(1)
      expect(validate(data)).toBe(result)
    })

    it(`.errors ~= ${JSON.stringify(errors)}`, () => {
      expect.assertions(1)
      validate(data)
      const actual = (validate.errors || []).map(error => ({
        message: error.message,
        dataPath: error.dataPath,
      }))
      expect(actual).toStrictEqual(errors || [])
    })
  })

  describe('validate("sample.json")', () => {
    it('returns true', () => {
      expect.assertions(1)
      expect(validate(sample)).toBe(true)
    })
    it('.errors is null', () => {
      expect.assertions(1)
      validate(sample)
      expect(validate.errors).toBeNull()
    })
  })

  // test: missing required property
  describe.each([
    ['/0/id'],
    ['/0/url'],
    ['/0/assets_url'],
    ['/0/upload_url'],
    ['/0/html_url'],
    ['/0/author'],
    ['/0/node_id'],
    ['/0/tag_name'],
    ['/0/target_commitish'],
    ['/0/name'],
    ['/0/draft'],
    ['/0/prerelease'],
    ['/0/created_at'],
    ['/0/published_at'],
    ['/0/assets'],
    ['/0/tarball_url'],
    ['/0/zipball_url'],
    ['/0/author'],
    ['/0/author/avatar_url'],
    ['/0/author/events_url'],
    ['/0/author/followers_url'],
    ['/0/author/following_url'],
    ['/0/author/gists_url'],
    ['/0/author/gravatar_id'],
    ['/0/author/html_url'],
    ['/0/author/id'],
    ['/0/author/node_id'],
    ['/0/author/login'],
    ['/0/author/organizations_url'],
    ['/0/author/received_events_url'],
    ['/0/author/repos_url'],
    ['/0/author/site_admin'],
    ['/0/author/starred_url'],
    ['/0/author/subscriptions_url'],
    ['/0/author/type'],
    ['/0/author/url'],
    ['/0/assets/1/url'],
    ['/0/assets/1/id'],
    ['/0/assets/1/id'],
    ['/0/assets/1/name'],
    ['/0/assets/1/content_type'],
    ['/0/assets/1/size'],
    ['/0/assets/1/state'],
    ['/0/assets/1/url'],
    ['/0/assets/1/node_id'],
    ['/0/assets/1/download_count'],
    ['/0/assets/1/label'],
    ['/0/assets/1/uploader'],
    ['/0/assets/1/uploader/avatar_url'],
    ['/0/assets/1/uploader/events_url'],
    ['/0/assets/1/uploader/followers_url'],
    ['/0/assets/1/uploader/following_url'],
    ['/0/assets/1/uploader/gists_url'],
    ['/0/assets/1/uploader/gravatar_id'],
    ['/0/assets/1/uploader/html_url'],
    ['/0/assets/1/uploader/id'],
    ['/0/assets/1/uploader/node_id'],
    ['/0/assets/1/uploader/login'],
    ['/0/assets/1/uploader/organizations_url'],
    ['/0/assets/1/uploader/received_events_url'],
    ['/0/assets/1/uploader/repos_url'],
    ['/0/assets/1/uploader/site_admin'],
    ['/0/assets/1/uploader/starred_url'],
    ['/0/assets/1/uploader/subscriptions_url'],
    ['/0/assets/1/uploader/type'],
    ['/0/assets/1/uploader/url'],
    ['/0/assets/1/browser_download_url'],
    ['/0/assets/1/created_at'],
    ['/0/assets/1/updated_at'],
  ])('validate("sample.json" without %j)', path => {
    const pieces = path.split('/')
    const dataPath = pieces.slice(0, -1).join('/')
    const property = pieces.slice(-1)[0]
    const errors = [
      {
        message: `should have required property '${property}'`,
        dataPath,
      },
    ]

    it('returns false', () => {
      expect.assertions(1)
      const data = remove(path).from(sample)
      expect(validate(data)).toBe(false)
    })

    it(`.errors ~= ${JSON.stringify(errors)}`, () => {
      expect.assertions(1)
      const data = remove(path).from(sample)
      validate(data)
      const actualErrors = validate.errors.map(error => ({
        message: error.message,
        dataPath: error.dataPath,
      }))
      expect(actualErrors).toStrictEqual(errors)
    })
  })

  // test: missing optional property
  describe.each([
    ['/0/body'],
    ['/0/body_text'],
    ['/0/body_html'],
    ['/0/author/starred_at'],
    ['/0/assets/0/uploader/starred_at'],
  ])('validate("sample.json" without %j)', path => {
    it('returns true', () => {
      expect.assertions(1)
      const data = remove(path).from(sample)
      expect(validate(data)).toBe(true)
    })
  })

  // test: invalid property values
  describe.each([
    ['/0/id', false, 'should be integer'],
    ['/0/url', false, 'should be string'],
    ['/0/url', '$$$', 'should match format "uri"'],
    ['/0/assets_url', false, 'should be string'],
    ['/0/assets_url', '$$$', 'should match format "uri"'],
    ['/0/upload_url', false, 'should be string'],
    [
      '/0/upload_url',
      'https://x.com/{t}/{r',
      'should match format "uri-template"',
    ],
    ['/0/html_url', false, 'should be string'],
    ['/0/html_url', '$$$', 'should match format "uri"'],
    ['/0/author', false, 'should be object'],
    ['/0/node_id', false, 'should be string'],
    ['/0/tag_name', false, 'should be string'],
    ['/0/target_commitish', false, 'should be string'],
    ['/0/name', false, 'should be string'],
    ['/0/draft', 'foo', 'should be boolean'],
    ['/0/prerelease', 'foo', 'should be boolean'],
    ['/0/created_at', false, 'should be string'],
    ['/0/created_at', 'foo', 'should match format "date-time"'],
    ['/0/published_at', false, 'should be string'],
    ['/0/published_at', 'foo', 'should match format "date-time"'],
    ['/0/assets', false, 'should be array'],
    ['/0/tarball_url', false, 'should be string'],
    ['/0/tarball_url', 'foo', 'should match format "uri"'],
    ['/0/zipball_url', false, 'should be string'],
    ['/0/zipball_url', 'foo', 'should match format "uri"'],
    ['/0/body', false, 'should be string'],
    ['/0/body_html', false, 'should be string'],
    ['/0/body_text', false, 'should be string'],
    ['/0/author/login', false, 'should be string'],
    ['/0/author/id', false, 'should be integer'],
    ['/0/author/node_id', false, 'should be string'],
    ['/0/author/avatar_url', false, 'should be string'],
    ['/0/author/avatar_url', '$$$', 'should match format "uri"'],
    ['/0/author/gravatar_id', false, 'should be string'],
    ['/0/author/url', false, 'should be string'],
    ['/0/author/url', '$$$', 'should match format "uri"'],
    ['/0/author/html_url', false, 'should be string'],
    ['/0/author/html_url', '$$$', 'should match format "uri"'],
    ['/0/author/followers_url', false, 'should be string'],
    ['/0/author/followers_url', '$$$', 'should match format "uri"'],
    ['/0/author/following_url', false, 'should be string'],
    [
      '/0/author/following_url',
      'https://x.com/{t}/{r',
      'should match format "uri-template"',
    ],
    ['/0/author/gists_url', false, 'should be string'],
    [
      '/0/author/gists_url',
      'https://x.com/{t}/{r',
      'should match format "uri-template"',
    ],
    ['/0/author/starred_url', false, 'should be string'],
    [
      '/0/author/starred_url',
      'https://x.com/{t}/{r',
      'should match format "uri-template"',
    ],
    ['/0/author/starred_at', false, 'should be string'],
    ['/0/author/subscriptions_url', false, 'should be string'],
    ['/0/author/subscriptions_url', '$$$', 'should match format "uri"'],
    ['/0/author/organizations_url', false, 'should be string'],
    ['/0/author/organizations_url', '$$$', 'should match format "uri"'],
    ['/0/author/repos_url', false, 'should be string'],
    ['/0/author/repos_url', '$$$', 'should match format "uri"'],
    ['/0/author/events_url', false, 'should be string'],
    [
      '/0/author/events_url',
      'https://x.com/{t}/{r',
      'should match format "uri-template"',
    ],
    ['/0/author/received_events_url', false, 'should be string'],
    ['/0/author/received_events_url', '$$$', 'should match format "uri"'],
    ['/0/author/type', false, 'should be string'],
    ['/0/author/site_admin', 'foo', 'should be boolean'],
    ['/0/assets/1', false, 'should be object'],
    ['/0/assets/1/url', false, 'should be string'],
    ['/0/assets/1/url', '$$$', 'should match format "uri"'],
    ['/0/assets/1/id', false, 'should be integer'],
    ['/0/assets/1/node_id', false, 'should be string'],
    ['/0/assets/1/name', false, 'should be string'],
    ['/0/assets/1/label', false, 'should be string'],
    ['/0/assets/1/uploader', false, 'should be object'],
    ['/0/assets/1/content_type', false, 'should be string'],
    ['/0/assets/1/state', false, 'should be string'],
    [
      '/0/assets/1/state',
      'foo',
      'should be equal to one of the allowed values',
    ],
    ['/0/assets/1/size', false, 'should be integer'],
    ['/0/assets/1/download_count', false, 'should be integer'],
    ['/0/assets/1/created_at', false, 'should be string'],
    ['/0/assets/1/created_at', 'foo', 'should match format "date-time"'],
    ['/0/assets/1/updated_at', false, 'should be string'],
    ['/0/assets/1/updated_at', 'foo', 'should match format "date-time"'],
    ['/0/assets/1/browser_download_url', false, 'should be string'],
    ['/0/assets/1/uploader/login', false, 'should be string'],
    ['/0/assets/1/uploader/id', false, 'should be integer'],
    ['/0/assets/1/uploader/node_id', false, 'should be string'],
    ['/0/assets/1/uploader/avatar_url', false, 'should be string'],
    ['/0/assets/1/uploader/avatar_url', '$$$', 'should match format "uri"'],
    ['/0/assets/1/uploader/gravatar_id', false, 'should be string'],
    ['/0/assets/1/uploader/url', false, 'should be string'],
    ['/0/assets/1/uploader/url', '$$$', 'should match format "uri"'],
    ['/0/assets/1/uploader/html_url', false, 'should be string'],
    ['/0/assets/1/uploader/html_url', '$$$', 'should match format "uri"'],
    ['/0/assets/1/uploader/followers_url', false, 'should be string'],
    ['/0/assets/1/uploader/followers_url', '$$$', 'should match format "uri"'],
    ['/0/assets/1/uploader/following_url', false, 'should be string'],
    [
      '/0/assets/1/uploader/following_url',
      'https://x.com/{t}/{r',
      'should match format "uri-template"',
    ],
    ['/0/assets/1/uploader/gists_url', false, 'should be string'],
    [
      '/0/assets/1/uploader/gists_url',
      'https://x.com/{t}/{r',
      'should match format "uri-template"',
    ],
    ['/0/assets/1/uploader/starred_url', false, 'should be string'],
    [
      '/0/assets/1/uploader/starred_url',
      'https://x.com/{t}/{r',
      'should match format "uri-template"',
    ],
    ['/0/assets/1/uploader/starred_at', false, 'should be string'],
    ['/0/assets/1/uploader/subscriptions_url', false, 'should be string'],
    [
      '/0/assets/1/uploader/subscriptions_url',
      '$$$',
      'should match format "uri"',
    ],
    ['/0/assets/1/uploader/organizations_url', false, 'should be string'],
    [
      '/0/assets/1/uploader/organizations_url',
      '$$$',
      'should match format "uri"',
    ],
    ['/0/assets/1/uploader/repos_url', false, 'should be string'],
    ['/0/assets/1/uploader/repos_url', '$$$', 'should match format "uri"'],
    ['/0/assets/1/uploader/events_url', false, 'should be string'],
    [
      '/0/assets/1/uploader/events_url',
      'https://x.com/{t}/{r',
      'should match format "uri-template"',
    ],
    ['/0/assets/1/uploader/received_events_url', false, 'should be string'],
    [
      '/0/assets/1/uploader/received_events_url',
      '$$$',
      'should match format "uri"',
    ],
    ['/0/assets/1/uploader/type', false, 'should be string'],
    ['/0/assets/1/uploader/site_admin', 'foo', 'should be boolean'],
    ['/0/assets/1/browser_download_url', '$$$', 'should match format "uri"'],
  ])('validate("sample.json" with %j = %j)', (path, value, message) => {
    const errors = [{message, dataPath: path}]

    /* eslint-disable-next-line jest/no-identical-title */
    it('returns false', () => {
      expect.assertions(1)
      const data = mutate(path, value).in(sample)
      expect(validate(data)).toBe(false)
    })

    it(`.errors ~= ${JSON.stringify(errors)}`, () => {
      expect.assertions(1)
      const data = mutate(path, value).in(sample)
      validate(data)
      const actualErrors = validate.errors.map(error => ({
        message: error.message,
        dataPath: error.dataPath,
      }))
      expect(actualErrors).toStrictEqual(errors)
    })
  })

  // test: nullable properties
  describe.each([
    ['/0/tarball_url'],
    ['/0/zipball_url'],
    ['/0/name'],
    ['/0/body'],
    ['/0/published_at'],
    ['/0/assets/0/label'],
    ['/0/assets/0/uploader'],
    ['/0/assets/0/uploader/gravatar_id'],
    ['/0/author'],
    ['/0/author/gravatar_id'],
  ])('validate("sample.json" with %j = null)', path => {
    /* eslint-disable-next-line jest/no-identical-title */
    it('returns true', () => {
      expect.assertions(1)
      const data = mutate(path, null).in(sample)
      expect(validate(data)).toBe(true)
    })
  })
})
