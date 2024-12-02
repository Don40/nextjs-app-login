// components/HorizontalRule.js

const HorizontalRule = ({ width }) => {
  return (
    <hr className={`mx-auto border-t border-gray-200 my-4 ${width}`} />
  );
};

export default HorizontalRule;
