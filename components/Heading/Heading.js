import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({level, content, textAlign}) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {_html: content},
        className: `max-w-5xl mx-auto my-5 ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`
        });
    return tag
}