const handleResponse = response => {
  const contentType = response.headers.get('Content-Type')

  const isJson = /^application\/json/
  const isForm = /([-\/])form-[\w\W]./
  const isBuffer = /^(audio|vedio)[\w\W]./
  const isText = /^text\/(html|xml|js|css)/
  const isImg = /^image\/[\w\W]./

  let result = null

  if (isJson.test(contentType)) {

    result = response.json()

  } else if (isText.test(contentType)) {

    result = response.text()

  } else if (isForm.test(contentType)) {

    result = response.formData()

  }  else if (isBuffer.test(contentType)) {

    result = response.arrayBuffer()

  } else if (isImg.test(contentType)) {

    result = response.blob()

  }
  return Promise.resolve(result, response)
}

module.exports = handleResponse.handleResponse = handleResponse['default'] = handleResponse
