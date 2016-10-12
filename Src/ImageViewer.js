import defaultOptions from './DefaultOptions'

export default class ImageViewer {
    constructor(element, options = defaultOptions) {
        this.element = element
        this.options = options
        this.fullArticle = this.createFullArticle()

        init()
    }

    init(){
        let element = this.element,
            elementLength = element.length,
            fullArticle = this.fullArticle,
            fullArticleUl = this.fullArticle.firstElementChild

        for (var i = 0; i < elementLength; i++) {
            element[i].onClick = function(event) {
                fullArticle.style.display = ''
            }
            fullArticleUl.innerHTML += `<li><img src="${element[i].src}"/></li>`
        }
    }

    createFullArticle() {
        let fullArticle = document.createElement('article'),
            fullUl = document,createElement('ul'),
            fullArticleHeight = window.innerHeight
        
        fullArticle.style.cssText = `position: fixed; width: 100%; height: ${fullArticleHeight}; display: none;`
        
        fullArticle.appendChild(fullUl)
        document.body.appendChild(fullArticle)

        fullArticle.onClick = function(event) {
            let target = event.target
            target.style.display = 'none'
        }
    }


}

