import {col, css, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML(){
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class TitleBlock extends Block{
    constructor(value, options) {
       super(value, options)
    }
    toHTML(){
        const {tag = 'h1', styles} = this.options
        return  row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}
export class TextBlock extends Block{
    constructor( value, options) {
        super(value, options)
    }
    toHTML(){
        row(col(`<p>${this.value}</p>`))
    }
}
export class ColumnsBlock extends Block{
    constructor(value, options) {
        super(value, options)
    }
    toHTML(){
        row(this.value.map(col).join(' '))
    }
}
export class ImageBlock extends Block{
    constructor(value, options) {
        super(value, options)
    }
    toHTML(){
        const {imgStyles:is, alt=' ', styles} = this.options
        return  row(col(`<img src="${this.value}" alt="${alt}" style="${css(is)}">`), css(styles))
    }
}