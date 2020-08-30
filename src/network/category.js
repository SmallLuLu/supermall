import {ajax} from './ajax.js'


export function getCategory() {
  return ajax({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return ajax({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return ajax({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}