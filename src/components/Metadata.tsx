import React from "react";

interface IMetadata {
  [name: string]: any;
}

export const generateMetadata = (
  metadata: IMetadata,
  prefix?: string,
  prefixSeparator = ":",
  attribute = "name"
): Array<any> => {
  let result: Array<any> = [];
  if (!metadata) return result;
  var metaPrefix = undefined;
  Object.keys(metadata).forEach((name, index) => {
    let separator = prefixSeparator;
    let arraySeparator = ",";

    if (name === "$separator") {
      separator = metadata[name] as string;
    }
    if (name === "$arraySeparator") {
      arraySeparator = metadata[name] as string;
    }
    if (metadata[name]) {
      if (
        typeof metadata[name] === "object" &&
        !Array.isArray(metadata[name])
      ) {
        result = result.concat(
          generateMetadata(
            metadata[name] as IMetadata,
            prefix ? `${prefix}${prefixSeparator}${name}` : name,
            separator,
            "property"
          )
        );
      } else {
        let metaDataProps = {
          key: `${name}-${index}`,
          [attribute]: prefix ? `${prefix}${prefixSeparator}${name}` : name,
          content: Array.isArray(metadata[name])
            ? metadata[name].join(arraySeparator)
            : metadata[name].toString()
        };
        console.log("prefix :", prefix);
        switch (prefix) {
          case "og":
            metaDataProps.prefix = "og: http://ogp.me/ns#";
            break;
          default:
            break;
        }
        result.push(<meta {...metaDataProps} />);
      }
    }
  });
  return result;
};
