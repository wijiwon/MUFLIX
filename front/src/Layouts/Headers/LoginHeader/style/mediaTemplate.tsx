import { css } from "styled-components";
import { Sizes } from "Interfaces/Media.interface";

const sizes: Sizes = {
  mbl: 480,
  desk: 9999,
};

const media = Object.keys(sizes).reduce(
  (acc: { [key: string]: any }, label) => {
    acc[label] = (...args: Parameters<typeof css>) => css`
      @media (max-width: ${sizes[label as keyof Sizes] / 16}em) {
        ${css(...args)};
      }
    `;
    return acc;
  },
  {}
);

export default media;
