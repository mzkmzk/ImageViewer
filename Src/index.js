
import ImageViewer from './ImageViewer'


    if ( typeof module != 'undefined' && module.exports ) {
        module.exports = ImageViewer
    } else if ( typeof define == 'function' && define.amd ) {
            define( function () { return ImageViewer } )
    } else {
        window.ImageViewer = ImageViewer
    }
    window.ImageViewer = ImageViewer
