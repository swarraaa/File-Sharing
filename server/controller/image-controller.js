const File = require('../model/file')

const uploadImage = async (req, res) => {
  console.log(req)
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  }

  try {
    const file = await File.create(fileObj)
    console.log('File saved in db')
    res.status(200).json({ path: `${process.env.BASE_URL}/file/${file._id}` })
  } catch (error) {
    console.log('Error in image controller, server error')
    res.status(500).json({ error: error.message })
  }
}
const downloadImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId)
    file.downloadContent++
    await file.save()
    res.download(file.path, file.name)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { uploadImage, downloadImage }
