/**
 * Size verilen javascript dosyasında halihazırda array
 * ve fonksiyon isimleri yer alıyor. Aşağıdaki fonksiyonların
 * içerisine aldığı parametrelere göre comment satırındaki istenileni yapabilecek kod yazmanız bekleniyor.
 */

const folders = [
  {
    id: 5,
    name: 'Klasör 1',
    files: [
      { id: 17, name: 'profil.jpg' },
      { id: 18, name: 'manzara.jpg' },
    ],
  },
  {
    id: 6,
    name: 'Klasör 2',
    files: [
      { id: 21, name: 'profil.jpg' },
      { id: 22, name: 'dosya.xls' },
    ],
  },
  {
    id: 7,
    name: 'Klasör 3',
  },
]
function remove(fileId) {
  folders.find((folder) => {
    if (folder.files) {
      folder.files = folder.files.filter((file) => {
        return file.id !== fileId
      })
      return true
    }
  })
}
// remove(17)
// console.log(folders)

function move(fileId, folderId) {
  copy(fileId, folderId);
  remove(fileId);

}
// move(17, 6)
//console.log(folders)

function copy(fileId, folderId) {
  let file;
  folders.find((folder) => {
    file = folder.files?.find((file) => {
      return file.id === fileId
    })
    return file;
  })
  folders.find((folder) => {
    if (folder.id === folderId) {
      if (folder.files) {
        folder.files.push(file)
      }
      else {
        folder.files = [file]
      }
      return true
    }

  })
}
//copy(18, 7)
// console.log(folders)

function removeFolder(folderId){
  const folder = folders.find( folder => {
    return folder.id === folderId
  })
  const index = folders.indexOf(folder)
  if(index > -1){
    folders.splice(index ,1)
  }
}
//removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
//console.log(folders)
 
function parentFolderOf(fileId){
  const folder = folders.find(folder => {
   const file = folder.files?.find(file => {
      return file.id === fileId
    })
    return file;
  } )
return folder && folder.id
}
// console.log(parentFolderOf(23))

