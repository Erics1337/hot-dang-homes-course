import {v4 as uuid} from 'uuid';

export const cleanAndTransformBlocks = (blocksJSON) => {
    console.log('blocksJSON: ', blocksJSON)
    const blocks = JSON.parse(blocksJSON)

    const assignKeys = (blocks) => {
        return blocks.map(block => {
            if (block.innerBlocks) {
                block.innerBlocks = assignKeys(block.innerBlocks)
            }
            block.key = uuid()
            return block
        })
    }

    return assignKeys(blocks)
}