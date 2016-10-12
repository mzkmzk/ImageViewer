//import defaultOptions from './DefaultOptions'
let defaultOptions = []

export default class ImageViewer {
    constructor(element, options = defaultOptions) {
        this.element = element
        this.options = options
        this.fullArticle = this.createFullArticle()

        this.init()
    }

    init(){
        let element = this.element,
            elementLength = element.length,
            fullArticle = this.fullArticle,
            fullArticleUl = this.fullArticle.firstElementChild
        
        this.resetSize()
        for (var i = 0; i < elementLength; i++) {
            
            element[i].onclick = function(event) {
                let id = event.target.getAttribute('data-imageviewer-id')
                
                fullArticle.style.display = 'flex' //显示图片显示器
                fullArticleUl.style.marginLeft =`-${id * window.innerWidth}px` //定位到点击的图片
            }
            element[i].setAttribute('data-imageviewer-id',i)
            fullArticleUl.innerHTML += `<li style="display: flex; justify-content: center; align-items: center; width: ${window.innerWidth}px"><img src="${element[i].src}"/></li>`
        }


    }

    createFullArticle() {
        let fullArticle = document.createElement('article'),
            fullArticleUl = document.createElement('ul'),
            fullArticleHeight = window.innerHeight
        
        //全屏显示
        fullArticle.style.cssText = `position: fixed; top: 0; left: 0;  width: 100%; height: ${fullArticleHeight}px;  background: #000; display: none;`
        fullArticleUl.style.cssText = 'list-style: none; -webkit-padding-start: 0; margin: 0; display: flex;'

        fullArticle.appendChild(fullArticleUl)
        document.body.appendChild(fullArticle)

        fullArticle.onclick = function(event) {
            fullArticle.style.display = 'none'
        }
        return fullArticle
    }

    resetSize() {
        
        this.fullArticle.firstElementChild.addEventListener('load',function(event) {
            event = event || window.event
            var target = event.target
            console.log(target)
            console.log(target.width)
             console.log(target.height)
             
            if (target.width > target.height && target.width > window.innerWidth ) {
                target.style.width = '100%'
                //target.style.width = window.innerWidth+"px"
                //return `width:  ${windiw.innerWidth}`
            }else if (target.height > target.width && target.height > window.innerHeight ){
                //target.style.height = window.innerHeight+"px"
                 //return `height:  ${windiw.innerHeight}`
            }//else {
             //   return ''
            //}
                
        },true)
        /*let size = this.getNaturalSize(img)
        if (size.width > size.height && size.width > windiw.innerWidth ) {
            return `width:  ${windiw.innerWidth}`
        }else if (size.height > size.width && size.height > windiw.innerHeight ){
             return `height:  ${windiw.innerHeight}`
        }else {
            return ''
        }*/
    }

    getNaturalSize(img) {
        let image = new Image()
        image.src = img.src
        let size = {
            width: image.width,
            height: image.height
        }
        return size
    }

}

