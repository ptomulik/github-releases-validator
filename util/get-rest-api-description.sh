#!/bin/sh

#############################################################################
# Retrieve OpenAPI description of GitHub REST API.
# See: https://github.com/github/rest-api-description
#
# Usage Example:
#
#   sh get-rest-api-description.sh v1.1.3
#############################################################################

set -e

if [ $# -ne 1 ]; then
  echo 'error: missing tag' >&2
  echo "usage: $0 {tag}" >&2
  exit 1
fi

tag="${1}"
host='raw.githubusercontent.com'
owner='github'
repo='rest-api-description'
path='descriptions/api.github.com/api.github.com.json'
url="https://${host}/${owner}/${repo}/${tag}/${path}"
here=`dirname $0`

curl -L -s -S -f "${url}"
