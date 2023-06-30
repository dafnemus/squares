import PropTypes from "prop-types";
import "./styles.css";

const Square = ({ color, onClick }) => {
  return (
    <div className={color} onClick={onClick}>
      <p>{color}</p>
    </div>
  );
};

Square.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Square.defaultProps = {
  color: "",
  onClick: () => {},
};
export default Square;
