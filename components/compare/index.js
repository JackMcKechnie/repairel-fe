import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  ComparisonHeader,
  ComparisonGrid,
  Image,
  Circle,
  CircleDiv,
  EthicsIcon,
  ArrowIcon,
  ProductInfo,
} from '@components/compare/Compare.style';
import { Rating } from '@components/productInfo/ProductInfo.style';

import Leaf from '../../public/leaf.svg';
import Arrow from '../../public/arrow.svg';

const Compare = ({ product1, product2 }) => {
  const [length, setLength] = React.useState(0);

  React.useEffect(() => {
    setLength(Object.keys(product1.ethics_and_sustainability).length - 1);
  }, []);
  //   const Rating = (int) => {
  //     for (var i = 0; i < int; i++) {
  //       <Circle></Circle>;
  //     }
  //   };

  //   const columns = ['1', '2'];
  //   const imageRow = () => {
  //     return columns.map((column, index) => {
  //       const image = index === 0 ? product1.images[0] : product2.images[0];
  //       return (
  //         <Image
  //           src={image.url}
  //           alt={image.alternativeText}
  //           style={{ gridColumnStart: column }}
  //           key={image.id}
  //         ></Image>
  //       );
  //     });
  //   };

  //   const rowObjGenerator = () => {
  //     let rows = {};
  //     let lengthArray = _.times(length, Number);
  //     let svgArray = [Leaf, Leaf, Leaf];

  //     for (var i = 0; i < lengthArray.length; i++) {
  //       rows[lengthArray[i] + 1] = [svgArray[i]];
  //     }
  //     return rows;
  //   };

  // for (let entry of apiResponse) {
  //   if (out[entry.author.login] === undefined) {
  //     out[entry.author.login] = [entry.commit.message];
  //   } else {
  //     out[entry.author.login].push(entry.commit.message);
  //   }

  // generate array that is the length of ethics obj
  // then create obj that takes the values from that array as key
  // and svg of the same index of the array as the value of the obj
  // map over columns array
  // render relevant info based on row and column -> later: pass the number to lodash _.times to render X circles

  //   const columns = ['1', '2', '3'];
  //   const renderEthics = () => {
  //     const rows = rowObjGenerator();
  //     const columns = _.times(3 * length, String);
  //     console.log(columns);
  //     return columns.map((column, index) => {
  //       let svgCount = 1;
  //       if (!(index % 2)) {
  //         return <img src={rows[`${svgCount}`]}></img>;
  //       }
  //     });
  //   };

  const handleCircles = (int) => {
    let array = [];
    _.times(int, (i) => {
      array.push(<Circle int={int} key={i} />);
    });
    return array;
  };

  const renderRow = (product1, icon, product2, arrow) => {
    return (
      <>
        <CircleDiv int={product1}>{handleCircles(product1)}</CircleDiv>
        <div>
          <EthicsIcon src={icon} />
          {arrow && <ArrowIcon src={Arrow} />}
        </div>
        <CircleDiv int={product2}>{handleCircles(product2)}</CircleDiv>
      </>
    );
  };

  return (
    <>
      <ComparisonHeader>
        <Image
          src={product1.images[0].url}
          alt={product1.images[0].alternativeText}
        ></Image>
        <Image
          src={product2.images[0].url}
          alt={product2.images[0].alternativeText}
        ></Image>
        <ProductInfo>
          <p>{product1.name}</p>
          <Rating rating={product1.rating}>{product1.rating}</Rating>
        </ProductInfo>
        <ProductInfo>
          <p>{product2.name}</p>
          <Rating rating={product2.rating}>{product2.rating}</Rating>
        </ProductInfo>
      </ComparisonHeader>
      {length !== 0 && (
        <ComparisonGrid length={length}>
          {/* {renderEthics()} */}
          {renderRow(
            product1.ethics_and_sustainability.vegan,
            Leaf,
            product2.ethics_and_sustainability.vegan,
            Arrow
          )}
          {renderRow(
            product1.ethics_and_sustainability.wages,
            Leaf,
            product2.ethics_and_sustainability.wages,
            Arrow
          )}
          {renderRow(
            product1.ethics_and_sustainability.recyclability,
            Leaf,
            product2.ethics_and_sustainability.recyclability
          )}
        </ComparisonGrid>
      )}
    </>
  );
};

Compare.propTypes = {
  product1: PropTypes.object,
  product2: PropTypes.object,
};

export default Compare;
