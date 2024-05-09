import fs from 'node:fs'
import path from 'node:path'
export const getArticle = () => {
  fs.readdir(
    path.join(__dirname, '../src/'),
    {
      recursive: true,
    },
    (error, file) => {
      const dirList = []
      file.forEach((item) => {
        if (/^(.*?)article\/(.*?)$/.test(item)) {
          dirList.push(item)
        }
      })
      console.log(dirList)
    },
  )
}
