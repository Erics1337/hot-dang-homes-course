export const getTextAlign = (align) => {
    switch (align) {
        case 'left':
            return 'text-left'
        case 'right':
            return 'text-right'
        case 'center':
            return 'text-center'
        default:
            return ''
    }
}

export const getFontSizeForHeading = (level) => {
    switch (fontSize) {
        case 1:
            return 'text-6xl'
        case 2:
            return 'text-5xl'
        case 3:
            return 'text-4xl'
        case 4:
            return 'text-3xl'
        case 5:
            return 'text-2xl'
        case 6:
            return 'text-xl'
        default:
            return ''
    }
}