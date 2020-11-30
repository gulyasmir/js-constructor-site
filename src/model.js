import image from './assets/img.jpg'
import {TitleBlock,TextBlock,ColumnsBlock,ImageBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор на JS' , {
        tag:'h3',
        //  styles:'background:#ff0; text-align:center;'
        styles:{
            'background':'#0f0',
            'text-align':'center'
        }
    }),
    new TextBlock('text text lorem10', { 'text-align':'center'}),

    new ColumnsBlock([
        '11111',
        '22222',
        '333333'
    ], { 'text-align':'center'}),

    new ImageBlock(image, {
        styles: {
            'text-align': 'center'
        },
        imgStyles:{
            'height': '100px',
            'width':'auto'
        },
        alt:'image alt'
    })
]