import { Cover } from "components/Cover/Cover";
import { Heading } from "components/Heading";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover":
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      case "core/heading":
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          >
            {block.attributes.content}
          </Heading>
        );
      case "core/paragraph":
        return <p>{block.attributes.content}</p>;
      case "core/heading":
        return <h2>{block.attributes.content}</h2>;
      case "core/image":
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={block.attributes.url} />;
      default:
        return null;
    }
  });
};
